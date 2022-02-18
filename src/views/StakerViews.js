import React from 'react';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="MainContent">
        <h2>Staker</h2>
        {content}
      </div>
    );
  }
}

exports.Attach = class extends React.Component {
  render() {
    const {parent} = this.props;
    const {ctcInfoStr} = this.state || {};
    const thing = 'Application ID'; // XXX
    return (
      <div>
        Please paste the {thing} to attach to.
        One possible source of this is from deploying the contract.
        <br />
        <br />
        <input
          className='ContractInfo'
          onChange={(e) => this.setState({ctcInfoStr: e.currentTarget.value})}
          spellCheck="false"
          type='text'
        />
        <br />
        <br />
        <button
          className='Staker SmallButton'
          disabled={!ctcInfoStr}
          onClick={() => parent.attach(ctcInfoStr)}
        >Attach</button>
      </div>
    );
  }
}

exports.Attaching = class extends React.Component {
  render() {
    return (
      <div>
        Attaching, please wait...
      </div>
    );
  }
}

exports.ApplicationInfo = class extends React.Component {
  render() {
    return (
      <main>
          <h1>Tokens!</h1>
          <p>tokens placeholder...</p>

          <h1>Current amount staked</h1>
          <p>123 placeholder</p>

          <h1>Rewards per block</h1>
          <p>You earned</p>
          <p>numRewards</p>
          <p>on this block!</p>

          <h1>This reward period ends on</h1>
          <p>reward period end date placeholder</p>

          <button onClick={() => console.log('staking!')}>
            Stake!
          </button>
          <button onClick={() => console.log('HARVEST!')}>
            HARVEST!
          </button>
          <button onClick={() => console.log('Withdraw!')}>
            Withdraw
          </button>
      </main>
    );
  }
}

export default exports;
