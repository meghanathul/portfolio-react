import React, { Component } from 'react'
const h1={
    fontSize:'50px',
    color:'red',
    top:'150px',
    left:'300px',
    color:'#2289',
    position:'absolute'
}
class PagenotFound extends Component {
  render() {
    return (
      <div><h1 style={h1}>Opps PagenotFound...</h1></div>
    )
  }
}

export default PagenotFound