const updateGameBoardArray = (gameTurn, gameBoard) => {
  if (gameTurn.length) {
    gameTurn.forEach((item) => {
      gameBoard[item.row][item.col] = item.playerSymbol;
    });
  }
};

export default updateGameBoardArray;
