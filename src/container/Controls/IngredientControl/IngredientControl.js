import React from "react";
import classes from "./IngredientControl.module.css";

const IngredientControl = props => {
  return (
    <div className={classes.ControlBox}>
      <div>
        <label className={classes.title}>{props.igKey}</label>
        <span style={{ marginRight: "20px" }}>
          <button
            className={classes.controlsLess}
            onClick={() => props.decHandler(props.igKey)}
          >
            Less
          </button>
          {props.ingredients[props.igKey]}
          <button
            className={classes.controlsMore}
            onClick={() => props.incHandler(props.igKey)}
          >
            More
          </button>
        </span>
      </div>
    </div>
  );
};

export default IngredientControl;
