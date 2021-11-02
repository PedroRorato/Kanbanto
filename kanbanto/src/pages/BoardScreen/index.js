import React from "react";

//Components
import Column from "../../components/Column";

import classes from "./BoardScreen.module.css";

const BoardScreen = () => {
  return (
    <div className={classes.boardScreen}>
      <div className={classes.menu}>
        <h2>Nome do Board</h2>
      </div>
      <div className={classes.columnsContainer}>
        <Column title="Backlog" />
        <Column title="To Do" />
        <Column title="In Progress" />
        <Column title="Testing" />
        <Column title="Done" />
      </div>
    </div>
  );
};

export default BoardScreen;