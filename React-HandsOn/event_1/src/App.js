import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import fire from "./config/Fire";
// import Login from "./components/LoginRegister";
import Home from "./components/Home";

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     user: null,
  //   };
  // }

  // componentDidMount() {
  //   this.authListener();
  // }

  // authListener() {
  //   fire.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       this.setState({ user });
  //     } else {
  //       this.setState({ user: null });
  //     }
  //   });
  // }

  render() {
    return <div>
      sddsds
      <Home /></div>;
  }
}

export default App;
