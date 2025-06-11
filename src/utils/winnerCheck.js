import { WINNING_COMBINATIONS } from "./winning-combinations";

const winnerCheck = (gameTurn, gameBoard) => {
  let winner = false;
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
  return winner;
};

export default winnerCheck;
