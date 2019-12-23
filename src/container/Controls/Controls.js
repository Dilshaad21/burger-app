import React from "react";
import classes from "./Controls.module.css";
import IngredientControl from "./IngredientControl/IngredientControl";

const Controls = props => {
  const controls = Object.keys(props.ingredients).map(igKey => {
    return (
      <IngredientControl
        igKey={igKey}
        decHandler={() => props.dec(igKey)}
        incHandler={() => props.inc(igKey)}
        ingredients={props.ingredients}
      />
    );
  });
  return <div className={classes.Controls}>{controls}</div>;
};

export default Controls;
