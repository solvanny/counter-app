import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import ButtonReset from './components/ButtonReset';
import NavBar  from './components/NavBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counters: new Map([
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0]
    ])}
    this.getState.bind(this);
    this.changeState.bind(this);
  }

  getState = () => {
    let { counters } = this.state;
    return counters;
  }

  changeState = counter => {
     this.setState({...this.state.counters, ...counter});
  }

  renderMap(map) {
    let res = [];

    map.forEach((value, index)=>{
      res.push(<Counter 
        key={index}
        counter={value}
        id={index}
        getState={this.getState}
        changeState={this.changeState}
      />);
    });

    return res;
  }

  render() {
    return (
      <div className="row mt-2">
      
        <div className="container mt-3" >
          <NavBar getState={this.getState}/>
          <ButtonReset 
            counters={this.state.counters}
            getState={this.getState}
            changeState={this.changeState}
          />
          { this.renderMap(this.state.counters) }
        </div>
      </div>
    );
  }
}

export default App;
