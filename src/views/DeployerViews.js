import React from 'react';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Deployer">
        <h2>Deployer</h2>
        {content}
      </div>
    );
  }
}

exports.SetOpts = class extends React.Component {
  render() {
    const { parent, opts } = this.props;
    console.info('parent!', parent);
    console.info('opts!', opts);

    return (
      <button onClick={
        () => parent.deployAfterSettingOptions()
      }>
        Deploy!
      </button>
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
