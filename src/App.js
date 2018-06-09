import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Logo from "./Logo";
import Sectionone from "./Sectionone";

class App extends Component {

  render() {
    return (
      <div>
      <Header/>
      <Logo/>
      <Sectionone/>
      <Footer/>
      </div>

    );
  }
}
class Footer extends React.Component{
  render() {
    return(
      <div id="link">
      <a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>
       </div>
    );
  }
}

export default App;
