import React, { Component } from 'react';

export default class Outputer extends Component {
  render() {
    let count = this.props.counter;
    return (
      <span 
        className="text-success font-weight-bold"> 
        {count === 0 ? <span className="text-warning font-weight-bold"> { 'Zero'} </span>: count}
      </span>
    )
  }
}
