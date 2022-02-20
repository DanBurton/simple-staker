import React from 'react';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <>
        <h2>Staking Pool Creator</h2>
        Fill out these fields, and create a staking pool!
        {content}
      </>
    );
  }
}

const defaultRewardToken = 71886079;
const defaultStakeToken = 71886755;
const defaultRewardsPerBlock = 100;
const defaultDuration = 30;
exports.SetOpts = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rewardToken: defaultRewardToken,
      stakeToken: defaultStakeToken,
      rewardsPerBlock: defaultRewardsPerBlock,
      duration: defaultDuration,
    };

    // https://www.geeksforgeeks.org/
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // https://www.geeksforgeeks.org/
  // Stores all the values of the
  // input field in state using a single method
  // handleChanges of all the input field using
  // an ES6 javascript feature computed property names
  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  // https://www.geeksforgeeks.org/
  // Form submitting logic, prevent default page refresh
  handleSubmit(event) {
    event.preventDefault();
    console.info('Wrapper state on submit!', this.state);
    this.props.parent.deploy(this.state);
  }

  render() {
    return (
      <>
        <br />
        <br />
        <form onSubmit={this.handleSubmit}>
          <b>Reward token: </b>
          <input
            name='rewardToken'
            onChange={this.handleChange}
            placeholder={defaultRewardToken}
            type='number'
            value={this.state.rewardToken || defaultRewardToken}
          />
          <br />
          <br />
          <b>Stake token: </b>
          <input
            name='stakeToken'
            onChange={this.handleChange}
            placeholder={defaultStakeToken}
            type='number'
            value={this.state.stakeToken || defaultStakeToken}
          />
          <br />
          <br />
          <b>Rewards per block: </b>
          <input
            name='rewardsPerBlock'
            onChange={this.handleChange}
            placeholder={defaultRewardsPerBlock}
            type='number'
            value={this.state.rewardsPerBlock || defaultRewardsPerBlock}
          />
          <br />
          <br />
          <b>Duration: </b>
          <input
            name='duration'
            onChange={this.handleChange}
            placeholder={defaultDuration}
            type='number'
            value={this.state.duration || defaultDuration}
          />
          <br />
          <br />
          <button
            className='Deployer SmallButton'
            type='submit'
          >
            Create Staking Pool!
          </button>
        </form>
      </>
    );
  }
}

exports.Deploy = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div>
        <button
          onClick={() => parent.deploy()}
        >Create Staking Pool</button>
      </div>
    );
  }
}

exports.Deploying = class extends React.Component {
  render() {
    return (
      <div>Creating pool... please sign the transactions to deploy the contract and fund it with rewards.</div>
    );
  }
}

exports.Deployed = class extends React.Component {
  getApplicationId() {
    const {ctcInfoStr} = this.props;
    localStorage.setItem('ApplicationID', ctcInfoStr);
    return ctcInfoStr;
  }

  render() {
    const {connector} = this.props;
    const thing = connector == 'ALGO' ? 'Application ID' : 'contract address';
    return (
      <React.Fragment>
        <main>Staking Pool created!</main>
        <p>The {thing} is</p>
        <p>{this.getApplicationId()}</p>
      </React.Fragment>
    );
  }
}

exports.Done  = class extends React.Component {
  render() {
    return <>The contract has run to completion</>;
  }
}

export default exports;
