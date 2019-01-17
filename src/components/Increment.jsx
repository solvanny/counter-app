import React, { Component } from 'react'

export default class Increment extends Component {

  handleIncrement = (e) => {
    e.preventDefault();
   
    this.props.setState({
      count:  this.props.count + 1
    })
  }

  render() {
    let count = this.props.count;
    return (
      <div>
         <div className="col col-sm-2">
            <button disabled={count >= 20 ? true : false} type="button" className="btn btn-primary btn-sm" onClick={this.handleIncrement}> + </button>
          </div>
      </div>
    )
  }
}
