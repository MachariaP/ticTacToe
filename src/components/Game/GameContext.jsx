import React, { createContext, useState, useContext } from 'react';

// Create Context
const GameContext = createContext();

// Hook to access context
export function useGame() {
  return useContext(GameContext);
}

// Provider component
export function GameProvider({ children }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? 'Draw!'
    : `Next player: ${isXNext ? 'X' : 'O'}`;

  function handleSquareClick(i) {
    if (squares[i] || winner) return;
    const newSquares = [...squares];
    newSquares[i] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const value = {
    squares,
    status,
    handleSquareClick,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}