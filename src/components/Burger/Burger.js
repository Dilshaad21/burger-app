import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";

const Burger = props => {
  let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    let ingred = [];
    let i = props.ingredients[igKey];
    while (i > 0) {
      ingred.push(<BurgerIngredient type={igKey} key={i + igKey} />);
      i--;
    }
    return ingred;
  });

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {props.total ? (
        transformedIngredients
      ) : (
        <div>Please fill ingredients</div>
      )}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
