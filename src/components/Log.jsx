export default function Log({ gameTurn }) {
  if (!gameTurn) return;
  return (
    <ol id="log">
      {gameTurn.map((turn) => {
        return (
          <li
            key={`${turn.row}${turn.col}`}
          >{`${turn.playerSymbol} selected ${turn.row},${turn.col}`}</li>
        );
      })}
    </ol>
  );
}
