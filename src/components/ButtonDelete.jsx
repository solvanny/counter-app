import React, { Component } from 'react';

export default class Delete extends Component {

  handleDelete = id => {
    let counters = this.props.getState().delete(id);
    this.props.changeState(counters);
  }
  render() {
    return (
      <button
        className="btn btn-danger btn-sm" 
        onClick={() => this.handleDelete(this.props.id)} > 
        <i className="far fa-trash-alt"> </i>
      </button>
    )
  }
}
