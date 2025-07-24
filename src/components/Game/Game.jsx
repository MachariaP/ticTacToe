import React, { useState } from 'react';
import Board from '../Board/Board';

export default function Game() {
  // State for the 9 squares (null, 'X', or 'O')
  const [squares, setSquares] = useState(Array(9).fill(null));
  // State for whose turn it is (true for X, false for O)
  const [isXNext, setIsXNext] = useState(true);

  return (
    <div className="game"> 
      <div>Next player: {isXNext ? 'X' : 'O'}</div>
      <Board />
    </div>
  );
}
