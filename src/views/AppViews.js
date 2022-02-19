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

exports.ConnectAccount = class extends React.Component {
  render() {
    const { parent } = this.props;
    const ctcInfoStr = false;
    const thing = 'applicationID';
    console.info('props!', this.props);
    console.info('parent!', parent);
    return (
      <>
        <p className='MainContent'>
          Please click the button to connect your account.
        </p>
        <br />
        <br />
        <button className='MyAlgoWalletButton' onClick={
          () => parent.openWalletPopUp()
        }>MyAlgoConnect</button>
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
