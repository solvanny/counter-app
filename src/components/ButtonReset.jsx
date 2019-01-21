import React, { Component } from 'react'

export default class ButtonReset extends Component {

  handleReset = (e) => {
    e.preventDefault();
    let state = this.props.getState();
    for (let i = 1; i <= state.size; i++) {
      state = state.set(i, 0);
    }

    this.props.changeState(state)
  }
  render() {
    return (
      <div className="col col-sm-3">
          <button className="btn btn-danger btn-sm" onClick={this.handleReset}>Delete</button>
        </div>
    )
  }
}
