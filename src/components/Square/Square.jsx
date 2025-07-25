import React from 'react';
import { useGame } from '../Game/GameContext';

function Square({ index }) {
  const { squares, handleSquareClick } = useGame();
  const value = squares[index];

  return (
    <button className="square" onClick={() => handleSquareClick(index)}>
      {value}
    </button>
  );
}

export default Square;