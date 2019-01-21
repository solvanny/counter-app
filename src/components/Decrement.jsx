import React, { Component } from 'react';

export default class Decriment extends Component {

  handleDecrement = id => {
   let counters = this.props.getState();
   let countr = counters.get(id);
   countr --;
   counters.set(id, countr)
   this.props.changeState(counters)
  }

  render() {
    let count = this.props.counter;
    return (
    <div className="col col-sm-2">
      <button  disabled={count === 0 ? true : false} type="button" className="btn btn-primary btn-sm" onClick={() => this.handleDecrement(this.props.id)}> - </button>
    </div>
    )
  }
}
