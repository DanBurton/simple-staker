'reach 0.1';

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
    stake: Fun([UInt], Null),
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
    .while(totalStaked < goal)
    .api(Staker.stake,
      ((amt) => [0, [amt, stakeToken]]),
      ((amt, k) => {
        k(null);
        return [totalStaked + amt, remainingRewards];
      })
    )
  // XXX let people get their rewards & staked tokens out
  // I just wrote it this way for now so it can run to completion
  transfer(totalStaked, stakeToken).to(Deployer);
  transfer(balance(rewardToken), rewardToken).to(Deployer);
  transfer(balance()).to(Deployer);
  commit();

});
