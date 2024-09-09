import { useState } from "react";

export default function Player({ player, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleClik() {
    setIsEditing(true);
  }

  return (
    <li>
      <span className="player">
        <span className="player-name">{player}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => handleClik()}>Edit</button>
    </li>
  );
}
