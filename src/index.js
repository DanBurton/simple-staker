import React from 'react';
import AppViews from './views/AppViews';
import DeployerViews from './views/DeployerViews';
import StakerViews from './views/StakerViews';
import {renderDOM, renderView} from './views/render';
import './index.css';
// import * as backend from './build/index.main.mjs';
import {loadStdlib} from '@reach-sh/stdlib';
import MyAlgoConnect from '@reach-sh/stdlib/ALGO_MyAlgoConnect';
const reach = loadStdlib({
  REACH_CONNECTOR_MODE: 'ALGO',
  // REACH_DEBUG: 'yes',
});

const {standardUnit} = reach;
const defaults = {standardUnit};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'ConnectAccount', ...defaults};
  }

  async openWalletPopUp() {
    reach.setWalletFallback(reach.walletFallback({
      MyAlgoConnect,
      providerEnv: 'TestNet',
    }));

    const acc = await reach.getDefaultAccount();
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);
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

  deployAfterSettingOptions() {
    this.setState( { view: 'Deployed' } );
  }

  // TODO
  // async deploy() {
  //   const ctc = this.props.acc.contract(backend);
  //   this.setState({view: 'Deploying', ctc});
  //   ctc.p.Alice(this);
  //   const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
  //   this.setState({view: 'WaitingForAttacher', ctcInfoStr});
  // }
  render() { return renderView(this, DeployerViews); }
}
class Staker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'Attach'}; // XXX create view
  }
  // TODO
  // attach(ctcInfoStr) {
  //   const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
  //   this.setState({view: 'Attaching'});
  //   backend.Bob(ctc, this);
  // }

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

  render() { return renderView(this, StakerViews); }
}

renderDOM(<App />);
