import React, { Component } from "react";
// import logo from "./logo.svg";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Provider } from "react-redux";

import "./App.css";

import Home from "./pages/Home";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </Router>

      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload. Words have power
      //       Words are power Words can be your power
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
