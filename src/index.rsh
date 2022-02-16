'reach 0.1';

const StakeUpdate = Struct([
  ["newUserStaked", UInt],
  ["newEveryoneStaked", UInt],
]);

const RewardsUpdate = Struct([
  ["userReceived", UInt],
  ["totalRemaining", UInt],
]);

export const main = Reach.App(() => {
  const Deployer = Participant('Deployer', {
    opts: Object({
      rewardToken: Token,
      stakeToken: Token,
      rewardsPerBlock: UInt,
      duration: UInt,
      goal: UInt,
    }),
    readyForStakers: Fun([], Null),
  });
  const Staker = API('Staker', {
    stake: Fun([UInt], StakeUpdate),
    harvest: Fun([], RewardsUpdate),
    withdraw: Fun([UInt], StakeUpdate),
  });
  init();

  Deployer.only(() => {
    const {rewardToken, stakeToken, rewardsPerBlock, duration, goal} = declassify(interact.opts);
    assume(rewardToken != stakeToken);
  });
  Deployer.publish(rewardToken, stakeToken, rewardsPerBlock, duration, goal);
  commit();
  const startRewards = rewardsPerBlock * duration;
  Deployer.pay([[startRewards, rewardToken]]);

  Deployer.interact.readyForStakers();

  const [totalStaked, remainingRewards] = parallelReduce([0, startRewards])
    .invariant(balance(stakeToken) == totalStaked && balance(rewardToken) == remainingRewards)
    .paySpec([stakeToken])
    // XXX disallow going past the deadline
    .while(totalStaked < goal && remainingRewards > 0)
    .api(Staker.stake,
      ((amt) => [0, [amt, stakeToken]]),
      ((amt, k) => {
        const newEveryoneStaked = totalStaked + amt;
        const newUserStaked = 0 /* XXX */ + amt;
        k(StakeUpdate.fromObject({newUserStaked, newEveryoneStaked}));
        // XXX record that this has staked amt
        return [newEveryoneStaked, remainingRewards];
      }))
    .api(Staker.withdraw,
      ((amt) => assume(amt <= totalStaked)),
      ((_) => [0, [0, stakeToken]]),
      ((amt, k) => {
        // XXX require this has staked >= amt
        require(amt <= totalStaked);
        transfer([[amt, stakeToken]]).to(this);
        const newEveryoneStaked = totalStaked - amt;
        const newUserStaked = amt /* XXX */ - amt;
        k(StakeUpdate.fromObject({newUserStaked, newEveryoneStaked}));
        return [newEveryoneStaked, remainingRewards];
      }))
    .api(Staker.harvest,
      (() => [0, [0, stakeToken]]),
      ((k) => {
        // XXX calculate fair rewards for this user based on their stake
        const amt = 1;
        transfer([[amt, rewardToken]]).to(this);
        const totalRemaining = remainingRewards - 1;
        k(RewardsUpdate.fromObject({userReceived: amt, totalRemaining}));
        return [totalStaked, totalRemaining];
      }))
  // I just wrote it this way for now so it can run to completion
  transfer(totalStaked, stakeToken).to(Deployer);
  transfer(remainingRewards, rewardToken).to(Deployer);
  transfer(balance()).to(Deployer);
  commit();
});
