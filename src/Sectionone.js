import React, { Component } from "react";

class Sectionone extends Component {
  constructor() {
    super();
    this.state = {
      type:"State is the place where the data comes from.",
      props:"Most components can be customized when they are created, with different parameters. These creation parameters are called props.",
      name:"The react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside of the React model if you need to."
    }
  };

  render(){
    return (
        <div id="hi">
        <p>{this.state.type}</p>
        <p>{this.state.props}</p>
        <p>{this.state.name}</p>
        </div>
    );
  }
}

export default Sectionone;
