import React, { Component } from 'react'

export default class Increment extends Component {
  
  handleIncrement = id => {
    let counters = this.props.getState();
    let countr = counters.get(id);
    countr++;
    counters.set(id ,countr);

    // let state = this.props.getState().map(element => {
    //   if (element.id === id) {
    //     element.value++
    //   }
    //   return element
    // } );
   this.props.changeState(counters)
  }

  render() {
    let counter = this.props.counter;
   
    return (
      <div>
         <div className="col col-sm-2">
            <button disabled={counter >= 20 ? true : false} type="button" className="btn btn-primary btn-sm" onClick={ () => this.handleIncrement(this.props.id)}> + </button>
          </div>
      </div>
    )
  }
}
