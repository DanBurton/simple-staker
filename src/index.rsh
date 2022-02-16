'reach 0.1';

export const main = Reach.App(() => {
  const Deployer = Participant('Deployer', {
    opts: Object({
      rewardToken: Token,
      stakeToken: Token,
      rewardsPerBlock: UInt,
      duration: UInt,
    }),
  });
  const Staker = API('Bob', {
    stake: Fun([UInt], Null),
  });
  init();

  Deployer.only(() => {
    const {rewardToken, stakeToken, rewardsPerBlock, duration} = declassify(interact.opts);
    assume(rewardToken != stakeToken);
  });
  Deployer.publish(rewardToken, stakeToken, rewardsPerBlock, duration);
  commit();
  const startRewards = rewardsPerBlock * duration;
  Deployer.pay([[startRewards, rewardToken]]);

  const [totalStaked, remainingRewards] = parallelReduce([0, startRewards])
    .invariant(balance(stakeToken) == totalStaked && balance(rewardToken) == remainingRewards)
    .paySpec([stakeToken])
    .while(true)
    .api(Staker.stake,
      ((amt) => [0, [amt, stakeToken]]),
      ((amt, k) => {
        k(null);
        return [totalStaked + amt, remainingRewards];
      })
    )
  // TODO let people get money out
  commit();

});
