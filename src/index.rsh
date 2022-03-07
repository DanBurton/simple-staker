'reach 0.1';

const StakeUpdate = Struct([
  ["newUserStaked", UInt],
  ["newEveryoneStaked", UInt],
]);

const Rewards = Tuple(UInt, UInt);
const zeroRewards = [0, 0];

const RewardsUpdate = Struct([
  ["userReceived", Rewards],
  ["totalRemaining", Rewards],
]);

const Opts = Struct([
  ["rewardToken1", Token],
  ["stakeToken", Token],
  ["rewardsPerBlock", Rewards],
  ["duration", UInt],
]);

const min = (x, y) => x <= y ? x : y;
const zsub = (x, y) => {
  if (y >= x) { return 0; }
  else { return x - y; }
}
const sumf = (m, f) => m.reduce(0, (acc, e) => acc + f(e));

export const main = Reach.App(() => {
  setOptions({
    // Users deleting their own local state would only hurt themselves.
    // They would lose access to rewards and stake that should be rightfully theirs.
    untrustworthyMaps: false,
    // Would like to turn this on but it would take more time to satisfy the theorem prover.
    verifyArithmetic: false,
  });

  const Deployer = Participant('Deployer', {
    opts: Opts,
    readyForStakers: Fun([], Null),
  });
  const Staker = API('Staker', {
    stake: Fun([UInt], StakeUpdate),
    harvest: Fun([], RewardsUpdate),
    withdraw: Fun([UInt], StakeUpdate),
  });
  const Any = API('Any', {
    halt: Fun([], Null),
  });
  const V = View({
    opts: Opts,
    totalStaked: UInt,
    remainingRewards: Rewards,
    end: UInt,
    staked: Fun([Address], UInt),
    rewardsAvailableAt: Fun([Address, UInt /* round */], Rewards),
  });
  init();

  Deployer.only(() => {
    const opts = declassify(interact.opts);
    const {rewardToken1, stakeToken} = opts;
    assume(rewardToken1 != stakeToken);
  });
  Deployer.publish(opts, rewardToken1, stakeToken);
  V.opts.set(opts);
  const {rewardsPerBlock, duration} = opts;
  commit();

  const startRewards = [
    rewardsPerBlock[0] * duration,
    rewardsPerBlock[1] * duration,
  ];
  Deployer.pay([startRewards[0], [startRewards[1], rewardToken1]]);
  // lct+2 is the soonest someone could stake, so it should start then.
  // lct = the previous publish
  // +1 (or more) = this payment
  // +1 (or more) = the next txn
  const start = lastConsensusTime() + 2;
  const end = start + duration;
  V.end.set(end);

  const UserData = Object({
    stake: UInt,
    rewards: Rewards,
  });
  const Users = new Map(UserData);
  // Staking "late" is treated as though "you already got" rewards up until the moment you staked

  const lookupUserData = (addr) => fromSome(Users[addr], {
    stake: 0,
    rewards: zeroRewards,
  });
  const userUpdate = (addr, f) => {
    Users[addr] = f(lookupUserData(addr));
  };

  const lookupStaked = (addr) => lookupUserData(addr).stake;
  const lookupRewardsPaid = (addr) => lookupUserData(addr).rewards;
  V.staked.set(lookupStaked);

  const checkStartRewards = (i) => {
    const sr = startRewards[i];
    const rpb = rewardsPerBlock[i];
    assert(sr == duration * rpb, "enough rewards");
  };
  checkStartRewards(0);
  checkStartRewards(1);

  Deployer.interact.readyForStakers();
  const  [totalStaked, remainingRewards, rewardsLastRefreshed, lastAvailableRewards] =
    parallelReduce([0,     startRewards,                start,          zeroRewards])
    .define(() => {
      const userStakes = () => sumf(Users, (x) => x.stake);
      const lct = lastConsensusTime();
      const totAvailableRewardsAt_i = (when) => (i) => {
        // You might think it's this, but it's not:
        // return rewardsPerBlock * min(duration, when - start);
        // It's this:

        // JAY: The error is that after a call to Staker.withdraw, we
        // re-evaluate this. (NOTE: We should add that to the stack trace
        // somehow.) And, time has advanced, meaning there's another block worth
        // of reward added. BUT, we don't ensure that the remaining reward
        // includes that block.

        // DAN: doing the hacky easy thing for now.
        const amt = min(
          lastAvailableRewards[i] + (zsub(min(end, when), rewardsLastRefreshed) * rewardsPerBlock[i]),
          remainingRewards[i]
        );
        assert(amt <= remainingRewards[i], "reward less than remaining");
        return amt;
      }
      const totAvailableRewardsAt = (when) => [
        totAvailableRewardsAt_i(when)(0),
        totAvailableRewardsAt_i(when)(1),
      ];
      const availableRewards = totAvailableRewardsAt(lct)
      const lookupRewardsAt_i = (addr, when) => (i) => {
        const youStaked = lookupStaked(addr);
        const youAlreadyGot = lookupRewardsPaid(addr)[i];
        assert(youStaked <= totalStaked);
        // DAN: doing the hacky thing
        const amt = min(
          zsub(muldiv(totAvailableRewardsAt_i(when)(i), youStaked, totalStaked), youAlreadyGot),
          availableRewards[i]
        );
        assert(amt <= availableRewards[i]);
        return amt;
      };
      const lookupRewardsAt = (addr, when) => [
        lookupRewardsAt_i(addr, when)(0),
        lookupRewardsAt_i(addr, when)(1),
      ];
      const lookupRewards = (addr) => lookupRewardsAt(addr, lct);
      V.totalStaked.set(totalStaked);
      V.remainingRewards.set(remainingRewards);
      V.rewardsAvailableAt.set(lookupRewardsAt);
    })
    .invariant(               true
      &&   balance(stakeToken) == totalStaked
      &&          userStakes() == totalStaked
      &&             balance() == remainingRewards[0]
      &&       startRewards[0] >= remainingRewards[0]
      && balance(rewardToken1) == remainingRewards[1]
      &&       startRewards[1] >= remainingRewards[1]
      // XXX:
      // && totAvailableRewardsAt(end) <= remainingRewards
      // Not sure about rounding errors
      )
    .paySpec([stakeToken])
    .while(totalStaked != 0 || lct <= end)
    .api(Staker.stake,
      ((amt) => [0, [amt, stakeToken]]),
      ((amt, k) => {
        const newEveryoneStaked = totalStaked + amt;
        const newUserStaked = lookupStaked(this) + amt;
        const currentPaid = lookupRewardsPaid(this);
        const mkNewPaid = (i) => {
          const a = availableRewards[i];
          const morePaid = muldiv(a, amt, newEveryoneStaked);
          return currentPaid[i] + morePaid;
        };
        Users[this] = {
          stake: newUserStaked,
          rewards: [
            mkNewPaid(0),
            mkNewPaid(1),
          ],
        };
        k(StakeUpdate.fromObject({newUserStaked, newEveryoneStaked}));
        return [newEveryoneStaked, remainingRewards, lct, availableRewards];
      }))
    .api(Staker.withdraw,
      ((amt) => assume(amt <= lookupStaked(this))),
      ((_) => [0, [0, stakeToken]]),
      ((amt, k) => {
        const oldUserStaked = lookupStaked(this);
        assert(oldUserStaked <= totalStaked);
        require(amt <= oldUserStaked);
        transfer([[amt, stakeToken]]).to(this);
        const newEveryoneStaked = totalStaked - amt;
        const newUserStaked = oldUserStaked - amt;
        const currentPaid = lookupRewardsPaid(this);
        const lessPaid = (i) => {
          // let's not div by 0
          if (newEveryoneStaked == 0) {
            // You're the last one out, you have access to take all of the available rewards.
            return availableRewards[i];
          } else {
            return muldiv(availableRewards[i], amt, newEveryoneStaked);
          }
        };
        // XXX: assert things about currentPaid/lessPaid
        // If lessPaid < currentPaid, this means the user may be losing out on rewards somehow.
        // This is not great, but we are not going to try to always prevent it from happening.
        const mkNewPaid = (i) => zsub(currentPaid[i], lessPaid(i));
        Users[this] = {
          stake: newUserStaked,
          rewards: [
            mkNewPaid(0),
            mkNewPaid(1),
          ],
        };
        assert(newUserStaked <= newEveryoneStaked);
        k(StakeUpdate.fromObject({newUserStaked, newEveryoneStaked}));
        return [newEveryoneStaked, remainingRewards, lct, availableRewards];
      }))
    .api(Staker.harvest,
      (() => [0, [0, stakeToken]]),
      ((k) => {
        const amts = lookupRewards(this);
        assert(amts[0] <= remainingRewards[0]);
        assert(amts[1] <= remainingRewards[1]);
        transfer([amts[0], [amts[1], rewardToken1]]).to(this);
        const mkTotalRemaining = (i) => (remainingRewards[i] - amts[i]);
        const totalRemaining = [
          mkTotalRemaining(0),
          mkTotalRemaining(1),
        ];
        const paid = lookupRewardsPaid(this);
        const mkNewPaid = (i) => paid[i] + amts[i];
        userUpdate(this, (old) => ({
          ...old,
          rewards: [
            mkNewPaid(0),
            mkNewPaid(1),
          ],
        }));
        k(RewardsUpdate.fromObject({userReceived: amts, totalRemaining}));
        const mkAvailableRewards_p = (i) => availableRewards[i] - amts[i];
        const availableRewards_p = [
          mkAvailableRewards_p(0),
          mkAvailableRewards_p(1),
        ];
        return [totalStaked, totalRemaining, lct, availableRewards_p];
      }))
  commit();

  fork()
    .case(Deployer, () => ({}), () => 0, () => {})
    .api(Any.halt, (k) => { k(null); });

  // May be non-zero based on staker behavior
  transfer(balance()).to(Deployer);
  transfer([[balance(rewardToken1), rewardToken1]]).to(Deployer);
  // These two should be 0, but just in case.
  transfer([[balance(stakeToken), stakeToken]]).to(Deployer);

  commit();
  exit();
});
