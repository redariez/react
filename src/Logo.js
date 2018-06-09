import React, { Component } from "react";

class Logo extends Component {
  constructor() {
    super();
    this.state = {
      image:"img/ade.jpg"
    }
  };

  render(){
    return (
        <div id="me">
        <img src={this.state.image}/>
        </div>
    );
  }
}

export default Logo;
