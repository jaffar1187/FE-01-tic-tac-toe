export default function Log({ gameTurn, allPlayersNames }) {
  if (!gameTurn) return;
  return (
    <ol id="log">
      {gameTurn.map((turn) => {
        return (
          <li key={`${turn.row}${turn.col}`}>{`${
            allPlayersNames[turn.playerSymbol]
          } selected ${turn.row},${turn.col}`}</li>
        );
      })}
    </ol>
  );
}
