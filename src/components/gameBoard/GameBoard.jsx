import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  // const [currentPlayer, setCurrentPlayer] = useState(true);

  //   const handleSelectSquare = (rowIndex, colIndex) => {
  //     /*
  //     //Not recomanded way to update an object or array
  //     setGameBoard((prevState) => {
  //       //updating value in memory
  //       prevState[rowIndex][colIndex] = currentPlayer ? "X" : "O";
  //       return prevState;
  //     });
  // */
  //     //Recommanded way to update
  //     setGameBoard((prevState) => {
  //       //Not deep clone
  //       //   const updateBoard = [...prevState];
  //       //Deep clone
  //       const updateBoard = [...prevState].map((innerArray) => [...innerArray]);

  //       //Updating the new object
  //       if (updateBoard[rowIndex][colIndex] == null) {
  //         updateBoard[rowIndex][colIndex] = curActivePlayer;
  //         onSelectSquare();
  //       }
  //       return updateBoard;
  //     });
  //   };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol != null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
