import React from 'react';
import { motion } from 'framer-motion';
import { useGame } from '../Game/GameContext';

function HistoryControls() {
  const { history, jumpTo, currentMove, resetGame } = useGame();

  return (
    <motion.div
      className="history-controls"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <motion.button
        className="reset-btn"
        onClick={resetGame}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        New Game
      </motion.button>
      <div className="moves-list">
        {history.map((_, move) => (
          <motion.button
            key={move}
            className={`move-btn ${move === currentMove ? 'current' : ''}`}
            onClick={() => jumpTo(move)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {move ? `Go to move #${move}` : 'Go to game start'}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

export default HistoryControls;