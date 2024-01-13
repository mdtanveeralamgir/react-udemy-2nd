import { useState } from "react";

export default function Player({ name, symbol, isActive, setPlayersName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  const handleIsEditing = () => {
    setIsEditing((prev) => !prev);
    if (isEditing) setPlayersName(symbol, editedName);
  };

  const handleNameOnChange = (event) => {
    setEditedName(event.target.value);
  };

  let playerName = <span className="player-name">{editedName}</span>;
  if (isEditing)
    playerName = (
      <input
        type="text"
        required
        onChange={handleNameOnChange}
        value={editedName}
      />
    );
  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleIsEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
