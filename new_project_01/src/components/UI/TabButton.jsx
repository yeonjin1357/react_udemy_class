import React, { useState } from "react";
import classes from "./TabButton.module.css";

const TabButton = (props) => {
  return (
    <li>
      <button onClick={props.onSelect} className={classes.tab_button}>
        {props.title}
      </button>
    </li>
  );
};

export default TabButton;
