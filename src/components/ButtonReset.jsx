import React, { Component } from 'react'

export default class ButtonReset extends Component {

  handleReset = (e) => {
    e.preventDefault();
    let state = this.props.counters;
    for (let i = 1; i <= state.size; i++) {
      state = state.set(i, 0);
    }
    this.props.changeState(state);
  }
  render() {
    return (
        <button className="btn btn-warning btn-sm" onClick={this.handleReset}>Reset</button>
    )
  }
}
