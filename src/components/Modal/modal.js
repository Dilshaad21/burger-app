import React from "react";
import classes from "./Modal.module.css";

const modal = props => {
  return (
    <div className={classes.Modal} style={{ backgroundColor: props.color }}>
      {props.children}
    </div>
  );
};

export default modal;
