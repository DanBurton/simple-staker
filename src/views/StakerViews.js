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
  constructor(props) {
    super(props);
    this.state = {
      ctcInfoStr: localStorage.getItem('ApplicationID') || '',
    }
  }
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
          onChange={(e) => this.setState({ctcInfoStr: e.currentTarget.value})}
          spellCheck="false"
          type='text'
          value={ctcInfoStr}
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
    const {parent, ctcInfoStr} = this.props;
    const {opts, totalStaked, remainingRewards, end, staked, rewardsAvailableAt, now} = this.props;
    const {rewardToken, stakeToken, rewardsPerBlock, duration} = opts || {};
    return (
      <main>
          {opts ? '' : <p>
            WARNING: Unable to retrieve info for Application {ctcInfoStr}.
            It may already be deleted.
            You can still click the buttons below but they may not work correctly.
          </p>}

          <h1>Tokens!</h1>
          <p>RewardToken: {rewardToken}</p>
          <p>StakeToken: {stakeToken}</p>
          <p>Duration: {duration} rounds</p>

          <h1>Current amount staked</h1>
          <p>You have staked {staked || '?'} of the {totalStaked} total staked.</p>

          <h1>Rewards</h1>
          <p>Shared with everyone per block: {rewardsPerBlock}</p>
          <p>Total rewards remaining in the contract: {remainingRewards}</p>
          <p>You can harvest an estimated: {rewardsAvailableAt || 0}</p>

          <h1>This reward period ends on</h1>
          <p>round {end}</p>
          <p>(Now is approximately round {now})</p>

          {/* TODO: field for amt */}
          <button onClick={() => parent.stake(10)}>
            Stake!
          </button>
          <button onClick={() => parent.harvest()}>
            HARVEST!
          </button>
          {/* TODO: field for amt */}
          <button onClick={() => parent.withdraw(10)}>
            Withdraw
          </button>
          <button disabled={end > now && totalStaked == 0} onClick={() => parent.halt()}>
            Halt
          </button>
      </main>
    );
  }
}

export default exports;
