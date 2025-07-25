import React from 'react';
import { motion } from 'framer-motion';
import { useGame } from '../Game/GameContext';
import { FaXmark, FaCircle } from 'react-icons/fa6';

function Square({ index }) {
  const { squares, handleSquareClick, winner, winningLine } = useGame();
  const value = squares[index];
  const isWinningSquare = winningLine.includes(index);

  return (
    <motion.button
      className={`square ${value ? 'occupied' : ''} ${isWinningSquare ? 'winning-square' : ''}`}
      onClick={() => handleSquareClick(index)}
      whileHover={{ scale: value || winner ? 1 : 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      disabled={!!value || !!winner}
    >
      {value === 'X' && <FaXmark className="x-icon" />}
      {value === 'O' && <FaCircle className="o-icon" />}
    </motion.button>
  );
}

export default Square;