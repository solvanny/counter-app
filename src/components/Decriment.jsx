import React, { Component } from 'react'

export default class Decriment extends Component {

  handleDecrement = (e) => {
    e.preventDefault();
    let count = this.props.count;
    if (count <= 0) return count;
    let newCount = count - 1;
    
    this.props.setState({
      count: newCount
    })
  }

  render() {
    let count = this.props.count;
    return (
    <div className="col col-sm-2">
      <button  disabled={count === 0 ? true : false} type="button" className="btn btn-primary btn-sm" onClick={this.handleDecrement}> - </button>
    </div>
    )
  }
}
