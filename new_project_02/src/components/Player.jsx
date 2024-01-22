import React, { useState } from "react";

const Player = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);

    if (isEditing) {
    }
  };

  let btnCaption = !isEditing ? "Edit" : "Save";

  return (
    <li>
      <span className="player">
        {!isEditing ? <span className="player-name">{props.name}</span> : <input type="text" required value={props.name}></input>}
        <span className="player-symbol">{props.symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
};

export default Player;
