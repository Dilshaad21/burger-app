import React, { Component } from "react";
import Layout from "./components/Layout/Layout";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>This is the App</h1>
        <Layout>This is the inner text of the Layout</Layout>
      </div>
    );
  }
}

export default App;
