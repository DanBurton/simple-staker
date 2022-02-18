'reach 0.1';

const StakeUpdate = Struct([
  ["newUserStaked", UInt],
  ["newEveryoneStaked", UInt],
]);

const RewardsUpdate = Struct([
  ["userReceived", UInt],
  ["totalRemaining", UInt],
]);

const Opts = Struct([
  ["rewardToken", Token],
  ["stakeToken", Token],
  ["rewardsPerBlock", UInt],
  ["duration", UInt],
]);

const min = (x, y) => x <= y ? x : y;
const zsub = (x, y) => {
  if (y >= x) { return 0; }
  else { return x - y; }
}

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
    refresh: Fun([], Null),
    // TODO
    // declareNext: Fun([UInt], Null),
  });
  const V = View({
    opts: Opts,
    totalStaked: UInt,
    remainingRewards: UInt,
    staked: Fun([Address], UInt),
    rewardsAvailableAt: Fun([Address, UInt /* round */], UInt),
  });
  init();

  Deployer.only(() => {
    const opts = declassify(interact.opts);
    const {rewardToken, stakeToken} = opts;
    assume(rewardToken != stakeToken);
  });
  Deployer.publish(opts, rewardToken, stakeToken);
  V.opts.set(opts);
  const {rewardsPerBlock, duration}  = opts;
  commit();

  const startRewards = rewardsPerBlock * duration;
  Deployer.pay([[startRewards, rewardToken]]);
  const start = lastConsensusTime();
  const end = start + duration;

  const Stakes = new Map(UInt);      // amt staked by addr
  const RewardsPaid = new Map(UInt); // amt rewards already "paid" to addr
  // Staking "late" is treated as though "you already got" rewards up until the moment you staked

  const lookupStaked = (addr) => fromSome(Stakes[addr], 0);
  const lookupRewardsPaid = (addr) => fromSome(RewardsPaid[addr], 0);

  Deployer.interact.readyForStakers();
  const  [totalStaked, remainingRewards, rewardsLastRefreshed, lastAvailableRewards] =
    parallelReduce([0,     startRewards,                start,                    0])
    .define(() => {
      const lct = lastConsensusTime();
      const totAvailableRewardsAt = (when) => {
        // You might think it's this, but it's not:
        // return rewardsPerBlock * min(duration, when - start);
        // It's this:
        return lastAvailableRewards + (zsub(min(end, when), rewardsLastRefreshed) * rewardsPerBlock);
      }
      const availableRewards = totAvailableRewardsAt(lct)
      const lookupRewardsAt = (addr, when) => {
        const youStaked = lookupStaked(addr);
        const youAlreadyGot = lookupRewardsPaid(addr);
        assert(youStaked <= totalStaked);
        return zsub((totAvailableRewardsAt(when) * youStaked) / totalStaked, youAlreadyGot);
      };
      const lookupRewards = (addr) => lookupRewardsAt(addr, lct);
      V.totalStaked.set(totalStaked);
      V.remainingRewards.set(remainingRewards);
      V.staked.set(lookupStaked);
      V.rewardsAvailableAt.set(lookupRewardsAt);
    })
    .invariant(     balance() == 0
      &&  balance(stakeToken) == totalStaked
      &&         Stakes.sum() == totalStaked
      && balance(rewardToken) == remainingRewards
      &&         startRewards >= remainingRewards
      // TODO:
      // && totAvailableRewardsAt(end) <= remainingRewards
      // Not sure about rounding errors
      )
    .paySpec([stakeToken])
    .while(totalStaked != 0 || lct <= end)
    .api(Staker.refresh,
      // XXX make it possible to declare rewards up to a given time
      // It seems like this does nothing.
      // But what it's actually doing is forcing an update of lct
      ((k) => {
        k(null);
        return [totalStaked, remainingRewards, lct, availableRewards];
      })
    )
    .api(Staker.stake,
      ((amt) => [0, [amt, stakeToken]]),
      ((amt, k) => {
        const newEveryoneStaked = totalStaked + amt;
        const newUserStaked = lookupStaked(this) + amt;
        Stakes[this] = newUserStaked;
        const currentPaid = lookupRewardsPaid(this);
        const morePaid = availableRewards * amt / newEveryoneStaked;
        RewardsPaid[this] = currentPaid + morePaid;
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
        Stakes[this] = newUserStaked;
        const currentPaid = lookupRewardsPaid(this);
        const lessPaid = (() => {
          // let's not div by 0
          if (newEveryoneStaked == 0) {
            // You're the last one out, you have access to take all of the available rewards.
            return availableRewards;
          } else {
            return availableRewards * amt / newEveryoneStaked;
          }
        })();
        // TODO: assert things about currentPaid/lessPaid
        // If lessPaid < currentPaid, this means the user may be losing out on rewards somehow.
        // This is not great, but we are not going to try to always prevent it from happening.
        RewardsPaid[this] = zsub(currentPaid, lessPaid);
        assert(newUserStaked <= newEveryoneStaked);
        k(StakeUpdate.fromObject({newUserStaked, newEveryoneStaked}));
        return [newEveryoneStaked, remainingRewards, lct, availableRewards];
      }))
    .api(Staker.harvest,
      (() => {
        const amt = lookupRewards(this);
        assume(amt >= 0); // meaningless?
        assume(amt <= remainingRewards);
      }),
      (() => [0, [0, stakeToken]]),
      ((k) => {
        const amt = lookupRewards(this);
        // XXX This should be an assert instead of assume/require
        require(amt <= remainingRewards);
        transfer([[amt, rewardToken]]).to(this);
        const totalRemaining = remainingRewards - amt;
        RewardsPaid[this] = lookupRewardsPaid(this) + amt;
        k(RewardsUpdate.fromObject({userReceived: amt, totalRemaining}));
        return [totalStaked, totalRemaining, lct, availableRewards - amt];
      }))
  commit();
  Deployer.publish();
  transfer([[remainingRewards, rewardToken]]).to(Deployer);
  commit();
});
