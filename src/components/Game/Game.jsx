import React, { useState } from 'react';
import Board from '../Board/Board';

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  // Calculate winner
  const winner = calculateWinner(squares);
  const status = winner
    ? 'Winner: ${winner}'
    : squares.every(Boolean)
    ? 'Draw!'
    : `Next player: ${isXNext ? 'X' : 'O'}`;

  function handleSquareClick(i) {
    if (squares[i] || winner) return; // Ignore if square is already filled or game is won
    const newSquares = [...squares]; // Create a copy of squares
    newSquares[i] = isXNext ? 'X' : 'O'; // Set X or O
    setSquares(newSquares); // Update state
    setIsXNext(!isXNext); // Toggle player
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // Returns 'X' or 'O' if there's a winner
      }
    }
    return null; // No winner
  }

  return (
    <div className="game">
      <div>{status}</div>
      <Board squares={squares} onSquareClick={handleSquareClick} />
    </div>
  );
}

export default Game;