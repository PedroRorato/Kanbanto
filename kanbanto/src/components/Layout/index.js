import React from "react";

import Header from "../Header";

import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.content}>
        {props.children}
      </div>

    </div>
  );
};

export default Layout;