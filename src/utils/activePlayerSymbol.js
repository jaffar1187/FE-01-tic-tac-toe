let activePlayer = "X";
const activePlayerSymbol = (gameTurn) => {
  if (!gameTurn.length) return activePlayer;
  else {
    activePlayer =
      gameTurn[gameTurn.length - 1].playerSymbol === "X" ? "O" : "X";
    return activePlayer;
  }
};

export default activePlayerSymbol;
