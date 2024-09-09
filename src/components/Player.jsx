import { useState } from "react";

export default function Player({ player, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleClik() {
    setIsEditing(true);
  }

  let playerName = <span className="player-name">{player}</span>;

  if (isEditing){
    playerName = <input type="text" required />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClik}>Edit</button>
    </li>
  );
}
