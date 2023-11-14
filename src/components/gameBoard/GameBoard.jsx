import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ onSelectSquare }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const [currentPlayer, setCurrentPlayer] = useState(true);

  const handleSelectSquare = (rowIndex, colIndex) => {
    /*
    //Not recomanded way to update an object or array
    setGameBoard((prevState) => {
      //updating value in memory
      prevState[rowIndex][colIndex] = currentPlayer ? "X" : "O";
      return prevState;
    });
*/
    //Recommanded way to update
    setGameBoard((prevState) => {
      //Not deep clone
      //   const updateBoard = [...prevState];
      //Deep clone
      const updateBoard = [...prevState].map((innerArray) => [...innerArray]);

      //Updating the new object
      if (updateBoard[rowIndex][colIndex] == null) {
        updateBoard[rowIndex][colIndex] = currentPlayer ? "X" : "O";
      }

      return updateBoard;
    });
    onSelectSquare(currentPlayer ? "X" : "O");
    setCurrentPlayer((prevState) => !prevState);
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
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
