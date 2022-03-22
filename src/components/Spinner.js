import React, { Component } from 'react';
import loading from "../loading.gif";
export default class Spinner extends Component {
  render() {
      const myStyle = {
        width:'100px',
        height:'60px'
      };
    return <div className = "d-flex justify-content-center">
        <img className="my-3" src={loading} alt="loading" style={myStyle} />
    </div>;
  }
}
