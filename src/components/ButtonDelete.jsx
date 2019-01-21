import React, { Component } from 'react';

export default class Delete extends Component {

  handleDelete = id => {
    let counters = this.props.getState().delete(id);
    this.props.changeState(counters);
  }
  render() {
    return (
      <div className="col col-sm-3">
          <button className="btn btn-danger btn-sm" onClick={() => this.handleDelete(this.props.id)}>Delete</button>
        </div>
    )
  }
}
