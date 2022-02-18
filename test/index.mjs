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
    rewardsPerBlock: 10,
    duration: 10,
  },
  readyForStakers: () => resolveReadyForStakers(),
});

await ctcDeployer.getInfo();
console.log(`ctc deployed`);

await pReadyForStakers;
console.log(`ready for stakers`);

const tryFn = async (lab, f, ...args) => {
  const maxTries = 1000;
  let tries = 1;
  while (tries < maxTries) {
    try {
      const r = await f(...args);
      console.log(`${lab} ${JSON.stringify(pretty(args))} after trying ${tries} time(s)`);
      return r;
    } catch (e) {
      void(e);
      tries++;
    }
  }
  throw Error(`Filed fo ${fname}`);
}
const tryApi = async (fname, verbed, i, ...args) =>
  await tryFn(`Staker #${i} ${verbed}`, ctcStakers[i].apis.Staker[fname], ...args);
const tryStake = async (i, amt) => await tryApi('stake', 'staked', i, amt);
const tryHarvest = async (i) => await tryApi('harvest', 'harvested', i);
const tryWithdraw = async (i, amt) => await tryApi('withdraw', 'withdrew', i, amt);

function pretty(r) {
  if (typeof r === 'string') {
    return r;
  } else if (r._isBigNumber) {
    return r.toString();
  } else if (r.networkAccount && r.networkAccount.addr) {
    return r.networkAccount.addr.slice(0, 8);
  } else if (Array.isArray(r) && r[0] == 'Some') {
    return pretty(r[1]);
  } else if (Array.isArray(r)) {
    return r.map((x) => pretty(x));
  } else if (Object.keys(r).length > 0) {
    const o = {};
    for (const k in r) { o[k] = pretty(r[k]); }
    return o;
  } else if (r.toString) {
    return r.toString();
  } else {
    return r
  }
}

const tryView = async (fname, ...args) => {
  const r = await tryFn(`Someone saw ${fname}`, ctcStakers[0].views[fname], ...args);
  console.log(pretty(r));
}
const tryViewFor = async (fname, i, ...args) => {
  const acc = accStakers[i];
  const r = await tryFn(`Staker #${i} saw ${fname}`, ctcStakers[i].views[fname], acc, ...args);
  console.log(pretty(r));
}

await tryView('opts');
await tryView('totalStaked');
await tryView('remainingRewards');

const now = await reach.getNetworkTime();
await tryViewFor('staked', 0);
await tryViewFor('rewardsAvailableAt', 0, now);

const stakes = [];
const stakeAmt = 10;
for (let i = 0; i < nStakers - 1; i++) {
  stakes.push(tryStake(i, stakeAmt));
}
await Promise.all(stakes);
console.log(`n - 1 staked`);
await balances();

const harvests = [];
for (let i = 0; i < nStakers - 1; i++) {
  harvests.push(tryHarvest(i));
}
await Promise.all(harvests);
console.log(`n - 1 harvested`);
await balances();

await tryWithdraw(0, 5);
await balances();

await tryStake(0, 5);
await tryStake(nStakers - 1, stakeAmt);
await tryHarvest(9);
console.log(`all staked`);
await balances();

for (let i = 0; i < nStakers; i++) {
  tryWithdraw(i, 10);
}

await pDeployer;
await balances();

console.log(`done`);

})();
