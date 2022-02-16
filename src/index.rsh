'reach 0.1';

export const main = Reach.App(() => {
  const Deployer = Participant('Deployer', {
    opts: Object({}),
  });
  // const Staker = API('Bob', {
  //   stake: Fun([UInt], Null),
  // });
  init();

  Deployer.only(() => {
    const opts = declassify(interact.opts);
  });
  Deployer.publish(opts);
  // XXX pay
  commit();

});
