import React, { Component } from 'react';
import Increment from './Increment';
import Decriment from './Decriment';

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  

  handleCleanState = (e) => {
    e.preventDefault();
    this.setState({
      count: 0
    })

  }
  
  render() {
    
    let count = this.state.count;

    return  (
      <div className="row mt-2">
        <div className="col col-sm-2">
          <span className="text-success font-weight-bold">{count === 0 ? <span className="text-warning font-weight-bold"> { 'Zero'} </span>: count}</span>
        </div>
        <Decriment {...this.state} setState={this.setState.bind(this)}/>
        <Increment {...this.state} setState={this.setState.bind(this)}/>
        <div className="col col-sm-3">
          <button className="btn btn-danger btn-sm" onClick={this.handleCleanState}>Delete</button>
        </div>  
      </div>
    );
  }
}

export default Counter;