import React from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import Board from '../Board/Board';
import HistoryControls from '../HistoryControls/HistoryControls';
import { GameProvider, useGame } from './GameContext';

function Game() {
  const { status, winner } = useGame();

  return (
    <GameProvider>
      <div className="game-container">
        {winner && <Confetti />}
        <motion.h1
          className="game-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tic Tac Toe
        </motion.h1>
        <motion.div
          className={`status ${winner ? 'winner' : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {status}
        </motion.div>
        <Board />
        <HistoryControls />
      </div>
    </GameProvider>
  );
}

export default Game;