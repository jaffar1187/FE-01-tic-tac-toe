let allPlayersNames = {};
const playerDetails = (gameTurn, gameBoard) => {
  if (!gameTurn.length) {
    allPlayersNames = {
      X: "Player 1",
      O: "Player 2",
    };
  }
  return allPlayersNames;
};

export default playerDetails;
