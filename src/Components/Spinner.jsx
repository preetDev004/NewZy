import React, { Component } from 'react'
import loading from '../Components/loading.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className="my-4 text-center">
        <img style={{height:'40px'}} src={loading}  alt="loading..." />
      </div>
    )
  }
}
