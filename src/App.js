import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./container/BurgerBuilder/BurgerBuilder";

class App extends Component {
  state = {};
  render() {
    return (
      <div style={{ backgroundColor: "#FFD8BE", padding: "50px 0px" }}>
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
          Burger App
        </h1>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
