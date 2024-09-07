import Player from "./components/Player.jsx"

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player player="Player1" symbol="X" />
          <Player player="Player2" symbol="O" />
        </ol>
      </div>
      Log
    </main>
  );
}

export default App;
