import React from 'react';
import AppViews from './views/AppViews';
import DeployerViews from './views/DeployerViews';
import StakerViews from './views/StakerViews';
import {renderDOM, renderView} from './views/render';
import './index.css';
import * as backend from './build/index.main.mjs';
import {loadStdlib} from '@reach-sh/stdlib';
import MyAlgoConnect from '@reach-sh/stdlib/ALGO_MyAlgoConnect';

let reach = null;
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

  deploy(opts) {
    const thiz = this;
    const ctc = this.props.acc.contract(backend);
    this.setState({view: 'Deploying', ctc});
    ctc.p.Deployer({
      opts,
      readyForStakers: (async () => {
        const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
        thiz.setState({view: 'Deployed', ctcInfoStr});
      }),
    });
    this.setState({view: 'Deploying', ctc});
  }

  render() { return renderView(this, DeployerViews); }
}
class Staker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'Attach'}; // XXX create view
  }
  attach(ctcInfoStr) {
    const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
    this.setState({ctc, view: 'Attaching'});
  }

  // TODO
  // async acceptWager(wagerAtomic) { // Fun([UInt], Null)
  //   const wager = reach.formatCurrency(wagerAtomic, 4);
  //   return await new Promise(resolveAcceptedP => {
  //     this.setState({view: 'AcceptTerms', wager, resolveAcceptedP});
  //   });
  // }
  // termsAccepted() {
  //   this.state.resolveAcceptedP();
  //   this.setState({view: 'WaitingForTurn'});
  // }

  render() {
    console.info('Staker\'s props!', this.props);
    return renderView(this, StakerViews);
  }
}

renderDOM(<App />);
