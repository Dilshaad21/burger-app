import React from "react";

const Layout = props => {
  return (
    <div>
      <div>Toolbar,Navbar,Sidebar</div>
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
