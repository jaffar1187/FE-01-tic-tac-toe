export default function Log({ gameTurn }) {
  if (!gameTurn) return;
  return (
    <ol id="log">
      <li>{`${gameTurn.playerSymbol} selected ${gameTurn.row},${gameTurn.col}`}</li>
    </ol>
  );
}
