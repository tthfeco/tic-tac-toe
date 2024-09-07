function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <span className="player">
              <span className="player-name">Player</span>
              <span className="player-symbol">X</span>
            </span>
          </li>
          <button>Edit</button>
          <li>
            <span className="player">
              <span className="player-name">Player</span>
              <span className="player-symbol">O</span>
            </span>
          </li>
          <button>Edit</button>
        </ol>
      </div>
      Log
    </main>
  );
}

export default App;
