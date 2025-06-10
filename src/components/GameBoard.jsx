import { useState } from "react";

export default function GameBoard({
  gameBoard,
  setGameBoard,
  activePlayer,
  gameTurn,
  setGameTurn,
}) {
  function handleSelectedSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = activePlayer;
      console.log(updatedBoard);
      return updatedBoard;
    });

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
