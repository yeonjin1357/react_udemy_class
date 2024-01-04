import React, { useState } from "react";
import classes from "./TabButton.module.css";

const TabButton = (props) => {
  const buttonClickHandler = () => {};

  return (
    <li>
      <button onClick={buttonClickHandler} className={classes.tab_button}>
        {props.title}
      </button>
    </li>
  );
};

export default TabButton;
