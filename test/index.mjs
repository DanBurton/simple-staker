// not part of the web app
// this is for testing w/ reach run

import * as reachsdk from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const reach = reachsdk.loadStdlib(process.env);

(async () => {

console.log(`creating accounts`);

const bal = reach.parseCurrency(100);
const nStakers = 10;
const accAdmin = await reach.newTestAccount(bal);
const accDeployer = await reach.newTestAccount(bal);
const accStakers = await reach.newTestAccounts(nStakers, bal);

console.log(`launching tokens`);

const RWD = await reach.launchToken(accAdmin, 'reward', 'RWD');
const STK = await reach.launchToken(accAdmin, 'stake', 'STK');

for (const acc of [accDeployer, ...accStakers]) {
  for (const tok of [RWD, STK]) {
    await acc.tokenAccept(tok.id);
  }
}

const btok = async (acc, tok) => {
  try {
    return await reach.balanceOf(acc, tok.id);
  } catch (e) {
    console.warn(e);
    return 0;
  }
}

const balances = async () => {
  const t = [];
  for (const acc of [accDeployer, ...accStakers]) {
    const addr = (reach.formatAddress(acc)).slice(0, 8);
    const rwd = (await btok(acc, RWD)).toString();
    const stk = (await btok(acc, STK)).toString();
    t.push({addr, rwd, stk});
  }
  console.table(t);
}

await balances();

console.log(`minting`);

await RWD.mint(accDeployer, 100);
for (const acc of accStakers) {
  await STK.mint(acc, 10);
}

await balances();

const ctcDeployer = accDeployer.contract(backend);
const ctcStakers = accStakers.map((acc) => acc.contract(backend, ctcDeployer.getInfo()));

let resolveReadyForStakers = null;
const pReadyForStakers = new Promise(r => resolveReadyForStakers = r);

console.log(`Running deployer`);
const pDeployer = ctcDeployer.p.Deployer({
  opts: {
    rewardToken: RWD.id,
    stakeToken: STK.id,
    rewardsPerBlock: 1,
    duration: 10,
    goal: 100,
  },
  readyForStakers: () => resolveReadyForStakers(),
});

await ctcDeployer.getInfo();
console.log(`ctc deployed`);

await pReadyForStakers;
console.log(`ready for stakers`);

const tryStake = async (i, amt) => {
  const {stake} = ctcStakers[i].apis.Staker;
  let tries = 1;
  while (tries < 1000) {
    try {
      await stake(amt);
      console.log(`Staker # ${i} staked ${amt} after trying ${tries} time(s)`);
      break;
    } catch (e) {
      void(e);
      tries++;
    }
  }
}

for (let i = 0; i < nStakers; i++) {
  tryStake(i, 10);
}

await pDeployer;
await balances();

console.log(`done`);

})();
