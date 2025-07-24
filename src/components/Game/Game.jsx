import React, { useState } from 'react';
import Board from '../Board/Board';

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  function handleSquareClick(i) {
    if (squares[i]) return; // Ignore if square is already filled
    const newSquares = [...squares]; // Create a copy of squares
    newSquares[i] = isXNext ? 'X' : 'O'; // Set X or O
    setSquares(newSquares); // Update state
    setIsXNext(!isXNext); // Toggle player
  }

  return (
    <div className="game">
      <div>Next player: {isXNext ? 'X' : 'O'}</div>
      <Board squares={squares} onSquareClick={handleSquareClick} />
    </div>
  );
}

export default Game;