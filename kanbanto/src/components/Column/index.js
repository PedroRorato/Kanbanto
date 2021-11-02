import React from "react";

//Components
import TaskCard from "../TaskCard";

//Styles
import classes from "./Column.module.css";

const Column = ({ title }) => {
  return (
    <div className={classes.column}>
      <h3>{title}</h3>
      <div className={classes.cardsContainer}>
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
};

export default Column;