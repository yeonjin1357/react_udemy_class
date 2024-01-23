import React, { useState } from "react";

const Player = (props) => {
  const [playerName, setPlayerName] = useState(props.name);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  let btnCaption = !isEditing ? "Edit" : "Save";

  return (
    <li className={props.isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing ? <span className="player-name">{playerName}</span> : <input type="text" required value={playerName} onChange={handleChange}></input>}
        <span className="player-symbol">{props.symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
};

export default Player;
