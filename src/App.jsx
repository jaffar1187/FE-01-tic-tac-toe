import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./utils/winning-combinations";

import { useState } from "react";

const intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameBoard, setGameBoard] = useState(intialGameBoard);
  const [gameTurn, setGameTurn] = useState([]);

  let activePlayer;
  let winner = false;

  activePlayer = !gameTurn.length
    ? "X"
    : gameTurn[gameTurn.length - 1].playerSymbol === "X"
    ? "O"
    : "X";

  for (const combination of WINNING_COMBINATIONS) {
    const firstSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSymbol = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      firstSymbol === thirdSymbol
    )
      winner = firstSymbol;
  }

  const hasDraw = gameTurn.length === 9 && !winner;

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
        {(winner || hasDraw) && (
          <GameOver
            winner={winner}
            setGameBoard={setGameBoard}
            setGameTurn={setGameTurn}
            hasDraw={hasDraw}
          />
        )}
        <GameBoard
          gameBoard={gameBoard}
          setGameBoard={setGameBoard}
          activePlayer={activePlayer}
          gameTurn={gameTurn}
          setGameTurn={setGameTurn}
        />
      </div>
      <Log gameTurn={gameTurn} />
    </main>
  );
}

export default App;
