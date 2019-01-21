import React, { Component } from 'react';
import Increment from './Increment';
import Decriment from './Decrement';
import ButtonDelete from './ButtonDelete';
import Outputer from './Outputer';

class Counter extends Component {

  render() {
    return  (
      <div className="row mt-2 ">
        <div className="col-1">
          <Outputer counter={ this.props.counter} />
        </div>
        <div className="col">
          <Decriment id={this.props.id} 
            counter={this.props.counter}
            getState={this.props.getState}
            changeState={this.props.changeState}
          />       
          <Increment id={this.props.id}
            counter={this.props.counter}
            getState={this.props.getState}
            changeState={this.props.changeState}
          />
          <ButtonDelete id={this.props.id}  
          getState={this.props.getState}
          changeState={this.props.changeState}
          />
        </div>
      </div>
    );
  }
}

export default Counter;