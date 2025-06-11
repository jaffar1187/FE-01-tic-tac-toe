import { useState } from "react";

export default function GameBoard({
  gameBoard,
  activePlayer,
  gameTurn,
  setGameTurn,
}) {
  function handleSelectedSquare(rowIndex, colIndex) {
    setGameTurn((prevTurn) => {
      const updatedTurns = [...prevTurn];
      updatedTurns.push({
        row: rowIndex,
        col: colIndex,
        playerSymbol: activePlayer,
      });
      return updatedTurns;
    });
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button
                      onClick={() => handleSelectedSquare(rowIndex, colIndex)}
                      disabled={playerSymbol}
                    >
                      {playerSymbol}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}
