import React, { Component } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Jumbo from "../components/Jumbo.jsx";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Nav />
        <Jumbo
          title="Welcome"
          subtitle="Beautiful rings for your beautiful hands bros"
        />
        <div className="container">
          <h2> Welcome to Bajra Store</h2>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
