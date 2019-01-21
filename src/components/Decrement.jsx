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
      <button  
        disabled={count === 0 ? true : false} 
        type="button" 
        className="btn btn-primary btn-sm mr-2" 
        onClick={() => this.handleDecrement(this.props.id)}>
        <i className="fas fa-minus"></i> 
      </button>
    )
  }
}
