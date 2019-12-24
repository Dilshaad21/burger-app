import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import classes from "./BurgerBuilder.module.css";
import Controls from "../Controls/Controls";
import CheckoutList from "../../components/CheckoutList/CheckoutList";
import Modal from "../../components/Modal/modal";
import Backdrop from "../../components/Backdrop/Backdrop";

class BurgerBuilder extends Component {
  state = {
    ingredientsPrice: {
      salad: 2,
      meat: 5,
      cheese: 3,
      bacon: 6
    },
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0
    },
    totalIngredients: 0,
    totalPrice: 0,
    showList: false
  };
  decrement = key => {
    let ingred = { ...this.state.ingredients };
    let ingredPrice = { ...this.state.ingredientsPrice };
    let totalPrice = 0;
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
    Object.keys(this.state.ingredients).map(igKey => {
      totalPrice += ingred[igKey] * ingredPrice[igKey];
      return null;
    });
    this.setState({ totalPrice: totalPrice });
  };

  increment = key => {
    let ingred = { ...this.state.ingredients };
    let ingredPrice = { ...this.state.ingredientsPrice };
    let totalPrice = 0;
    ingred[key] += 1;
    this.setState((prev, props) => {
      return {
        totalIngredients: prev.totalIngredients + 1
      };
    });
    this.setState({ ingredients: ingred });
    Object.keys(this.state.ingredients).map(igKey => {
      totalPrice += ingred[igKey] * ingredPrice[igKey];
      return null;
    });
    this.setState({ totalPrice: totalPrice });
  };

  showCheckList = () => {
    this.setState({ showList: true });
  };
  render() {
    return (
      <div className={classes.Builder}>
        <Burger
          ingredients={this.state.ingredients}
          total={this.state.totalIngredients}
        />
        {this.state.showList ? (
          <Backdrop
            clicked={() => {
              this.setState({ showList: false });
            }}
          >
            <Modal color={"#B8B8FF"}>
              <CheckoutList
                ingredients={this.state.ingredients}
                totalPrice={this.state.totalPrice}
              />
            </Modal>
          </Backdrop>
        ) : null}
        <div className={classes.BuilderControl}>
          <div style={{ fontSize: "24px" }}>
            <strong>Price : ${this.state.totalPrice}</strong>
          </div>
          <h1 style={{ textAlign: "center" }}>Burger Fills</h1>
          <Controls
            ingredients={this.state.ingredients}
            inc={this.increment}
            dec={this.decrement}
          />
          <button
            className={classes.OrderButton}
            disabled={!this.state.totalIngredients}
            onClick={this.showCheckList}
          >
            ORDER NOW
          </button>
        </div>
      </div>
    );
  }
}

export default BurgerBuilder;
