import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import winnerCheck from "./utils/winnerCheck";
import allPlayersNamesDetails from "./utils/allPlayersNamesDetails";
import updateGameBoardArray from "./utils/updateGameBoardArr";
import activePlayerSymbol from "./utils/activePlayerSymbol";

import { useState } from "react";

function App() {
  const [gameTurn, setGameTurn] = useState([]);

  const gameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  let allPlayersNames = allPlayersNamesDetails(gameTurn);
  updateGameBoardArray(gameTurn, gameBoard);
  let winner = winnerCheck(gameTurn, gameBoard);
  let activePlayer = activePlayerSymbol(gameTurn);
  const hasDraw = gameTurn.length === 9 && !winner;

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            intialName={allPlayersNames["X"]}
            symbol={"X"}
            activePlayer={activePlayer === "X"}
            allPlayersNames={allPlayersNames}
          />
          <Player
            intialName={allPlayersNames["O"]}
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
