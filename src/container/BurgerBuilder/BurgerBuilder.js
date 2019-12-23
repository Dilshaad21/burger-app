import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import classes from "./BurgerBuilder.module.css";
import Controls from "../Controls/Controls";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0
    },
    totalIngredients: 0
  };
  decrement = key => {
    let ingred = { ...this.state.ingredients };
    ingred[key] -= 1;
    if (ingred[key] < 0) {
      ingred[key] = 0;
    } else {
      this.setState((prev, props) => {
        return {
          totalIngredients: prev.totalIngredients - 1
        };
      });
    }
    this.setState({ ingredients: ingred });
  };

  increment = key => {
    let ingred = { ...this.state.ingredients };
    ingred[key] += 1;
    this.setState((prev, props) => {
      return {
        totalIngredients: prev.totalIngredients + 1
      };
    });
    this.setState({ ingredients: ingred });
  };
  render() {
    return (
      <div className={classes.Builder}>
        <Burger
          ingredients={this.state.ingredients}
          total={this.state.totalIngredients}
        />
        <div className={classes.BuilderControl}>
          <h1 style={{ textAlign: "center" }}>Burger Fills</h1>
          <Controls
            ingredients={this.state.ingredients}
            inc={this.increment}
            dec={this.decrement}
          />
        </div>
      </div>
    );
  }
}

export default BurgerBuilder;
