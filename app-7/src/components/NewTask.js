import React, { Component } from 'react';

export default class NewTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
    };
  }

  handleUpdateInput = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  handleUpdateList = () => {
    this.props.updateList(this.state.userInput);
    this.setState({
      userInput: '',
    });
  };

  render() {
    return (
      <div>
        <input onChange={this.handleUpdateInput} value={this.state.userInput} />
        <button onClick={this.handleUpdateList}>Add to list</button>
      </div>
    );
  }
}
