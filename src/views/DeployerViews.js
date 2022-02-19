import React from 'react';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <>
        <h2>Deployer</h2>
        Fill out these fields, and then deploy!
        {content}
      </>
    );
  }
}

exports.SetOpts = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rewardToken: '',
      stakeToken: '',
      rewardsPerBlock: '',
      duration: ''
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
    // @TODO
    this.props.parent.something(this.state);
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
            placeholder='50'
            type='number'
            value={this.state.rewardToken}
          />
          <br />
          <br />
          <b>Stake token: </b>
          <input
            name='stakeToken'
            onChange={this.handleChange}
            placeholder='1337'
            type='number'
            value={this.state.stakeToken}
          />
          <br />
          <br />
          <b>Rewards per block: </b>
          <input
            name='rewardsPerBlock'
            onChange={this.handleChange}
            placeholder='123'
            type='number'
            value={this.state.rewardsPerBlock}
          />
          <br />
          <br />
          <b>Duration: </b>
          <input
            name='duration'
            onChange={this.handleChange}
            placeholder='32'
            type='number'
            value={this.state.duration}
          />
          <br />
          <br />
          <button
            className='Deployer SmallButton'
            type='submit'
          >
            Deploy!
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
        >Deploy</button>
      </div>
    );
  }
}

exports.Deploying = class extends React.Component {
  render() {
    return (
      <div>Deploying... please wait.</div>
    );
  }
}

exports.Deployed = class extends React.Component {
  getApplicationId() {
    const applicationID = 'placeHolderApplicationID';
    localStorage.setItem('Application ID!', applicationID);
    return applicationID;
  }

  render() {
    return (
      <React.Fragment>
        <main>Deployed!</main>
        <p>The application ID is</p>
        <p>${this.getApplicationId()}</p>
      </React.Fragment>
    );
  }
}

export default exports;
