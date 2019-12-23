import React from "react";
import classes from "./Layout.module.css";

const Layout = props => {
  return (
    <div className={classes.Wrap}>
      <div></div>
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
