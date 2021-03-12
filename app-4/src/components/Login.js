import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputName: '',
      inputPassword: '',
    };
  }

  handleUpdateName = (e) => {
    this.setState({
      inputName: e.target.value,
    });
  };

  handleUpdatePassword = (e) => {
    this.setState({
      inputPassword: e.target.value,
    });
  };

  handleSubmit = () => {
    this.setState({
      inputName: '',
      inputPassword: '',
    });
    alert(
      `Username: ${this.state.inputName}  Password: ${this.state.inputPassword}`
    );
  };

  render() {
    console.log(this.state);
    return (
      <div className="app">
        <input
          placeholder="User Name"
          onChange={this.handleUpdateName}
          value={this.state.inputName}
        />
        <input
          placeholder="User Password"
          onChange={this.handleUpdatePassword}
          value={this.state.inputPassword}
        />
        <button onClick={this.handleSubmit}>Login</button>
      </div>
    );
  }
}
