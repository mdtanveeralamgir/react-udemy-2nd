import Player from "./components/player/Player";
import GameBoard from "./components/gameBoard/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winningCombination";
import GameOver from "./components/GameOver.jsx";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function deriveWinner(gameBoard, players) {
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      secondSquareSymbol === thirdSquareSymbol
    )
      return players[firstSquareSymbol];
  }
  return null;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...initialGameBoard.map((innerArr) => [...innerArr])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function App() {
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  const [gameTurns, setGameTurns] = useState([]);
  const currentPlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;
  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurn) => {
      const currentPlayer = deriveActivePlayer(prevTurn);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];
      return updatedTurns;
    });
  }

  function handleSetPlayerName(symbol, newName) {
    setPlayers((previousPlayers) => {
      return {
        ...previousPlayers,
        [symbol]: newName,
      };
    });
  }
  function resetGame() {
    setGameTurns([]);
    // document.getElementById('game-over').style.display = 'none';
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            isActive={currentPlayer === "X"}
            setPlayersName={handleSetPlayerName}
          />
          <Player
            name="Player 2"
            symbol="O"
            isActive={currentPlayer === "O"}
            setPlayersName={handleSetPlayerName}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} handleResetGame={resetGame} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
