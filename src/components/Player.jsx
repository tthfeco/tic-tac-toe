import { useState } from "react";

export default function Player({ player, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleClik() {
    setIsEditing(!isEditing);
  }

  let playerName = <span className="player-name">{player}</span>;
  // let btnCaption = 'Edit';

  if (isEditing){
    playerName = <input type="text" required  value={player}/>;
    // btnCaption = 'Save'
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClik}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
