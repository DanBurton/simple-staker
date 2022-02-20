import React from 'react';
import AppViews from './views/AppViews';
import DeployerViews from './views/DeployerViews';
import StakerViews from './views/StakerViews';
import {renderDOM, renderView} from './views/render';
import './index.css';
import * as backend from './build/index.main.mjs';
import {loadStdlib} from '@reach-sh/stdlib';
import MyAlgoConnect from '@reach-sh/stdlib/ALGO_MyAlgoConnect';
import pretty from './pretty';

let reach;
// let reach = loadStdlib({
//   REACH_CONNECTOR_MODE: 'ALGO',
//   // REACH_DEBUG: 'yes',
// });
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'SelectNetwork'};
  }

  async selectNetwork(REACH_CONNECTOR_MODE, providerEnv) {
    reach = reach || loadStdlib({
      REACH_CONNECTOR_MODE,
      // REACH_DEBUG: 'yes',
    });
    const {standardUnit} = reach;
    this.setState({view: 'ConnectAccount', providerEnv, standardUnit});
  }

  async openWalletPopUp() {
    const {providerEnv} = this.state;
    reach.setWalletFallback(reach.walletFallback({
      MyAlgoConnect,
      providerEnv,
    }));

    const acc = await reach.getDefaultAccount();
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);
    console.log(bal);
    this.setState({acc, bal, view: 'RoleSelect'}); // XXX create view
  }

  selectDeployer() { this.setState({view: 'Wrapper', ContentView: Deployer}); }
  selectStaker() { this.setState({view: 'Wrapper', ContentView: Staker}); }
  render() { return renderView(this, AppViews); }
}

class Deployer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'SetOpts'}; // XXX create view
  }

  async deploy(opts) {
    const thiz = this;
    const ctc = this.props.acc.contract(backend);
    this.setState({view: 'Deploying', ctc});
    const deployerP = ctc.p.Deployer({
      opts,
      readyForStakers: (async () => {
        const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
        thiz.setState({view: 'Deployed', ctcInfoStr});
      }),
    });
    this.setState({view: 'Deploying', ctc});

    await deployerP;
    this.setState({view: 'Done'});
  }

  render() { return renderView(this, DeployerViews); }
}
class Staker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'Attach'}; // XXX create view
  }

  async _refreshInfo(acc, ctc) {
    const runView = async (vname, ...args) => {
      const res = await ctc.views[vname](...args);
      if (res[0] != 'Some') { console.warn(vname, res); return; }
      return pretty(res);
    }
    const runViews = async (vs) => {
      const data = {};
      const promises = [];
      for (const [vname, ...args] of vs) {
        const p = (async () => {
          const res = await runView(vname, ...args);
          data[vname] = res;
        })();
        promises.push(p);
        // For some reason we *do* need to perform these queries serially,
        // or else they all come back None. =[
        await p;
      }
      await Promise.all(promises);
      return data;
    }
    const now = pretty(await reach.getNetworkTime());
    const data = {
      ...(await runViews([
        ['opts'],
        ['totalStaked'],
        ['remainingRewards'],
        ['end'],
        ['staked', acc],
        ['rewardsAvailableAt', acc, now],
      ])),
      now,
    };

    this.setState({...data, view: 'ApplicationInfo'});
  }

  async attach(ctcInfoStr) {
    const acc = this.props.acc;
    const ctc = acc.contract(backend, JSON.parse(ctcInfoStr));
    this.setState({ctc, ctcInfoStr, view: 'Attaching'});
    await this._refreshInfo(acc, ctc);
  }

  async _api(which, name, ...args) {
    const {acc, ctc} = this.state;
    console.log(`calling api: ${which}.${name}`);
    const res = await ctc.apis[which][name](...args);
    console.log(pretty(res));
    await this._refreshInfo(acc, ctc);
  }

  async stake(amt) {
    return this._api('Staker', 'stake', amt);
  }

  async harvest() {
    return this._api('Staker', 'harvest');
  }

  async withdraw(amt) {
    return this._api('Staker', 'withdraw', amt);
  }

  async halt() {
    return this._api('Any', 'halt');
  }

  render() {
    // console.info('Staker\'s props!', this.props);
    return renderView(this, StakerViews);
  }
}

renderDOM(<App />);
