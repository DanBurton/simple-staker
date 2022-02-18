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

export const main = Reach.App(() => {
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

  Deployer.interact.readyForStakers();

  const [totalStaked, remainingRewards] = parallelReduce([0, startRewards])
    .define(() => {
      const lookupStaked = (addr) => totalStaked; // XXX
      const lookupRewardsAt = (when, addr) => min(10, remainingRewards); // XXX
      const lookupRewards = (addr) => lookupRewardsAt(lastConsensusTime(), addr);
      V.totalStaked.set(totalStaked);
      V.remainingRewards.set(remainingRewards);
      V.staked.set(lookupStaked);
      V.rewardsAvailableAt.set(lookupRewardsAt)
    })
    .invariant(     balance() == 0
      &&  balance(stakeToken) == totalStaked
      && balance(rewardToken) == remainingRewards
      // TODO: assert that sum(staked) == totakStaked
      // maybe more assertions too
      )
    .paySpec([stakeToken])
    // XXX disallow going past the deadline
    .while(totalStaked > 0 || remainingRewards > 0)
    .api(Staker.refresh,
      // XXX make it possible to declare rewards up to a given time
      // It seems like this does nothing.
      // But what it's actually doing is forcing an update of lastConsensusTime
      ((k) => {
        k(null);
        return [totalStaked, remainingRewards];
      })
    )
    .api(Staker.stake,
      ((amt) => [0, [amt, stakeToken]]),
      ((amt, k) => {
        const newEveryoneStaked = totalStaked + amt;
        const newUserStaked = lookupStaked(this) + amt;
        k(StakeUpdate.fromObject({newUserStaked, newEveryoneStaked}));
        // XXX record that this has staked amt
        return [newEveryoneStaked, remainingRewards];
      }))
    .api(Staker.withdraw,
      ((amt) => assume(amt <= totalStaked)),
      ((_) => [0, [0, stakeToken]]),
      ((amt, k) => {
        // XXX require this has staked >= amt
        const oldUserStaked = lookupStaked(this);
        assert(oldUserStaked <= totalStaked);
        require(amt <= oldUserStaked);
        transfer([[amt, stakeToken]]).to(this);
        const newEveryoneStaked = totalStaked - amt;
        const newUserStaked = oldUserStaked - amt;
        assert(newUserStaked <= newEveryoneStaked);
        k(StakeUpdate.fromObject({newUserStaked, newEveryoneStaked}));
        return [newEveryoneStaked, remainingRewards];
      }))
    .api(Staker.harvest,
      (() => [0, [0, stakeToken]]),
      ((k) => {
        const amt = lookupRewards(this);
        assert(amt <= remainingRewards);
        transfer([[amt, rewardToken]]).to(this);
        const totalRemaining = remainingRewards - amt;
        k(RewardsUpdate.fromObject({userReceived: amt, totalRemaining}));
        return [totalStaked, totalRemaining];
      }))
  commit();
});
