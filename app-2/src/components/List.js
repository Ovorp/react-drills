import React, { Component } from 'react';

export default class List extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.userArr.map((val, i) => {
            return <li key={(val, i)}>{val}</li>;
          })}
        </ul>
      </div>
    );
  }
}
