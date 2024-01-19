import React from "react";
import classes from "./TabButton.module.css";

const TabButton = (props) => {
  const buttonClasses = `${classes.tab_button} ${props.isActive ? classes.active : ""}`;

  return (
    <li>
      <button onClick={props.onSelect} className={buttonClasses}>
        {props.title}
      </button>
    </li>
  );
};

export default TabButton;
