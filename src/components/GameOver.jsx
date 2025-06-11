export default function GameOver({ winner, hasDraw, setGameTurn }) {
  function handleRestart() {
    winner = false;
    hasDraw = false;

    setGameTurn(() => {
      const updatedBoard = [];
      return updatedBoard;
    });
  }

  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a draw!</p>}
      <p>
        <button onClick={handleRestart}>Rematch!</button>
      </p>
    </div>
  );
}
