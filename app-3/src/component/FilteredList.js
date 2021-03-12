import React, { Component } from 'react';

export default class FilteredList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toFilter: '',
    };
  }

  handleUpdateToFilter = (e) => {
    this.setState({
      toFilter: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <input
          onChange={this.handleUpdateToFilter}
          value={this.state.toFilter}
          placeholder="What do you want to filter?"
        />
        <ul>
          {this.props.Arr.filter((val) => {
            return val.includes(this.state.toFilter) ? val : null;
          }).map((val, i) => {
            return <li key={(val, i)}>{val}</li>;
          })}
        </ul>
      </div>
    );
  }
}
