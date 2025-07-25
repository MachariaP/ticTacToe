import React, { createContext, useState, useContext } from 'react';

const GameContext = createContext();

export function useGame() {
  return useContext(GameContext);
}

export function GameProvider({ children }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const winnerInfo = calculateWinner(squares);
  const winner = winnerInfo ? winnerInfo.winner : null;
  const winningLine = winnerInfo ? winnerInfo.line : [];

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
    const newHistory = history.slice(0, currentMove + 1);
    setHistory([...newHistory, newSquares]);
    setCurrentMove(newHistory.length);
  }

  function jumpTo(move) {
    setCurrentMove(move);
    setSquares(history[move]);
    setIsXNext(move % 2 === 0);
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: [a, b, c] };
      }
    }
    return null;
  }

  const value = {
    squares,
    status,
    winner,
    winningLine,
    history,
    currentMove,
    handleSquareClick,
    jumpTo,
    resetGame,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}