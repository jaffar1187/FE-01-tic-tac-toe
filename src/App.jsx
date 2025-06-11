import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./utils/winning-combinations";

import { useState } from "react";

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  let allPlayersNames = {};

  const gameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  if (!gameTurn.length) {
    allPlayersNames = {
      X: "X",
      O: "O",
    };
  }

  if (gameTurn.length) {
    gameTurn.forEach((item) => {
      gameBoard[item.row][item.col] = item.playerSymbol;
    });
  }

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
            allPlayersNames={allPlayersNames}
          />
          <Player
            intialName="Player 2"
            symbol={"O"}
            activePlayer={activePlayer === "O"}
            allPlayersNames={allPlayersNames}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver
            winner={winner}
            setGameTurn={setGameTurn}
            hasDraw={hasDraw}
            allPlayersNames={allPlayersNames}
          />
        )}
        <GameBoard
          gameBoard={gameBoard}
          activePlayer={activePlayer}
          gameTurn={gameTurn}
          setGameTurn={setGameTurn}
        />
      </div>
      <Log gameTurn={gameTurn} allPlayersNames={allPlayersNames} />
    </main>
  );
}

export default App;
