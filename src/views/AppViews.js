import React from 'react';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="App">
        <header className="App-header" id="root">
          <h1>Simple Staker</h1>
          <main className='MainContentContainer'>
            {content}
          </main>
        </header>
      </div>
    );
  }
}

exports.SelectNetwork = class extends React.Component {
  render() {
    const { parent } = this.props;
    return (
      <>
        <p className='MainContent'>
          <small>
            DISCLAIMER: this software is provided as is,
            <br />
            with no guarantees.
            <br />
            Use at your own risk.
          </small>
          <br /><br />
          Select a network
        </p>
        <button onClick={() => parent.selectNetwork('ALGO', 'TestNet')}
        >Algorand TestNet</button>
        <br />
        <br />
        <button onClick={() => parent.selectNetwork('ALGO', 'MainNet')}
        >Algorand MainNet</button>
        <br />
        <br />
        <p>Beware: the author has not tested this yet</p>
        <button onClick={() => parent.selectNetwork('ETH')}
        >Ethereum<br />or EVM/web3 compatible</button>
      </>
    )
  }
}

exports.ConnectAccount = class extends React.Component {
  render() {
    const { parent, connector } = this.props;
    const ctcInfoStr = false;
    // console.info('ConnectAccount\'s props!', this.props);
    // console.info('ConnectAccount\'s parent!', parent);
    return (
      <>
        <p className='MainContent'>
          Please click the button to connect your account.
          {connector == 'ALGO' ? <><br />You may need to disable your popup blocker</> : ''}
          {connector == 'ETH' ? <><br />Select the desired network in MetaMask and refresh the page if necessary.</> : ''}
        </p>
        <br />
        <br />
        { connector == 'ALGO' ? <>
          <button className='MyAlgoWalletButton' onClick={
            () => parent.openWalletPopUp('MyAlgoConnect')
          }>MyAlgoConnect</button>
          {/* disabled the WalletConnect option due to technical difficulties
          <button className='MyAlgoWalletButton' onClick={
            () => parent.openWalletPopUp('WalletConnect')
          }>WalletConnect</button>
          */}
        </> : <>
          <button className='MyAlgoWalletButton' onClick={
            () => parent.openWalletPopUp('MetaMask')
          }>MetaMask</button>
        </> }
        <br />
        <br />
      </>
    )
  }
}

exports.RoleSelect = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div>
        <p className='MainContent'>
          Please select a role:
        </p>
        <br />
        <span className='LargeButtonContainer'>
          <button className='LargeButton Deployer'
            onClick={() => parent.selectDeployer()}
          >
            <h1>Deployer</h1>

            <p>
              Incentivise others to stake by deploying and funding a contract with rewards.
            </p>
          </button>
          <button className='LargeButton Staker'
            onClick={() => parent.selectStaker()}
          >
            <h1>Staker</h1>

            <p>
            Stake in a deployed contract to receive its rewards.
            </p>
          </button>
        </span>
      </div>
    );
  }
}

export default exports;
