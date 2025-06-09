import { useState } from "react";

export default function GameBoard({
  gameBoard,
  setGameBoard,
  activePlayer,
  setActivePlayer,
  gameTurn,
  setGameTurn,
}) {
  function handleSelectedSquare(rowIndex, colIndex) {
    setActivePlayer((prevActivePlayer) => {
      return prevActivePlayer === "X" ? "O" : "X";
    });

    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = activePlayer;
      return updatedBoard;
    });

    setGameTurn((prevTurn) => {
      const updatedTurns = [...prevTurn];
      updatedTurns.push({
        row: rowIndex,
        col: colIndex,
        playerSymbol: !prevTurn
          ? "X"
          : prevTurn[prevTurn.length - 1].playerSymbol === "X"
          ? "O"
          : "X",
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
