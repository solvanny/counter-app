import React, { Component } from 'react';
import Increment from './Increment';
import Decriment from './Decrement';
import ButtonDelete from './ButtonDelete';
import Outputer from './Outputer';

class Counter extends Component {

  render() {
    return  (
      <div className="row mt-2">
        <Outputer counter={ this.props.counter} />
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
    );
  }
}

export default Counter;