import React, { Component } from 'react'

export default class NavBar extends Component {
  numOfCounters = () => {
    let counters = this.props.getState()
    let values = counters.values();

    let num = 0;
    for(let i of values) {
      if(i > 0 ){ 
        num += 1 
      }
    } 
    return num;  
  }

  render() {
    return (
       
      <nav className="navbar navbar-darc bg-dark mb-2" >
        <span className="navbar-brand mb-0 h1  text-light">My Counters</span>
        <span className="text-light ">There are  {this.numOfCounters()} counters in the Data Base</span>
      </nav>
 
    )
  }
}

