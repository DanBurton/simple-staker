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
  let totRwd = 0;
  let totStk = 0;
  for (const acc of [accDeployer, ...accStakers]) {
    const addr = (reach.formatAddress(acc)).slice(0, 8);
    const rwd = (await btok(acc, RWD)).toNumber();
    const stk = (await btok(acc, STK)).toNumber();
    totRwd = totRwd + rwd;
    totStk = totStk + stk;
    t.push({addr, rwd, stk});
  }
  t.push({addr: "total", rwd: totRwd, stk: totStk});
  console.table(t);
}

await balances();

console.log(`minting`);

const rewardsPerBlock = 100;
const duration = 30;
await RWD.mint(accDeployer, rewardsPerBlock * duration);
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
    rewardsPerBlock,
    duration,
  },
  readyForStakers: () => resolveReadyForStakers(),
});

await ctcDeployer.getInfo();
console.log(`ctc deployed`);

await pReadyForStakers;
console.log(`ready for stakers`);

const tryFn = async (lab, f, ...args) => {
  const maxTries = 3;
  let tries = 1;
  const msg = () => `${lab} ${JSON.stringify(pretty(args))} after trying ${tries} time(s)`
  let err = null;
  while (tries < maxTries) {
    try {
      const r = await f(...args);
      console.log(msg());
      return r;
    } catch (e) {
      err = e;
      tries++;
    }
  }
  console.error(`Failed: ${msg()}`);
  throw err;
}
const tryApi = async (fname, verbed, i, ...args) =>
  await tryFn(`Staker #${i} ${verbed}`, ctcStakers[i].apis.Staker[fname], ...args);
const tryStake = async (i, amt) => {
  await tryApi('stake', 'staked', i, amt);
  await tryViewFor('staked', i);
};
const tryHarvest = async (i) => await tryApi('harvest', 'harvested', i);
// const tryHarvest = async (i) => console.log(`TODO: fix harvest`); // XXX
const tryWithdraw = async (i, amt) => {
  await tryApi('withdraw', 'withdrew', i, amt);
  await tryViewFor('staked', i);
};

function pretty(r) {
  if (!r) {
    return r;
  } else if (typeof r === 'string') {
    return r;
  } else if (r._isBigNumber) {
    return r.toString();
  } else if (r.networkAccount) {
    if (r.networkAccount.addr) {
      return r.networkAccount.addr.slice(0, 8);
    } else if (r.networkAccount.address) {
      return r.networkAccount.address.slice(0, 8);
    } else {
      return '<some acc>';
    }
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
  await stakes[i]; // to have them stake in deterministic order
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

let failed = false
try {
  await tryWithdraw(0, 6);
} catch(e) {
  failed = true;
}
if (!failed) {
  console.error(`Withdrawing too much was supposed to fail`);
  await balances();
  process.exit(1);
}

await tryStake(0, 5);
const lastStaker = nStakers - 1;
await tryStake(lastStaker, stakeAmt);
await tryHarvest(lastStaker);
console.log(`all staked`);
await balances();

for (let i = nStakers - 1; i >= 0; i--) {
  await tryHarvest(i);
  await tryWithdraw(i, 10);
}

await pDeployer;
await balances();

console.log(`done`);

})();
