import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

import { useState } from "react";

const intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const turnsArray = [];

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameBoard, setGameBoard] = useState(intialGameBoard);
  const [gameTurn, setGameTurn] = useState("");

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            intialName="Player 1"
            symbol={"X"}
            activePlayer={activePlayer === "X"}
          />
          <Player
            intialName="Player 2"
            symbol={"O"}
            activePlayer={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          gameBoard={gameBoard}
          setGameBoard={setGameBoard}
          activePlayer={activePlayer}
          setActivePlayer={setActivePlayer}
          gameTurn={gameTurn}
          setGameTurn={setGameTurn}
          turnsArray={turnsArray}
        />
      </div>
      <Log gameTurn={gameTurn} />
    </main>
  );
}

export default App;
