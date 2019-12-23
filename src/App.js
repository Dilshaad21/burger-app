import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./container/BurgerBuilder/BurgerBuilder";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Burger App</h1>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
