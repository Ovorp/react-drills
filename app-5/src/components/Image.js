import React, { Component } from 'react';

export default class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <input onChange={this.props.updateInput} value={this.props.userInput} />
        <button onClick={this.props.updateSubmit}>
          Click here to update the image
        </button>
        <img src={this.props.imgUrl} />
      </>
    );
  }
}
