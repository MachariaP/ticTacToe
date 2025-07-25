import React from 'react';
import Board from '../Board/Board';
import HistoryControls from '../HistoryControls/HistoryControls';
import { GameProvider, useGame } from './GameContext';

function Game() {
  const { status } = useGame();

  return (
    <GameProvider>
      <div className="game">
        <div>{status}</div>
        <Board />
        <HistoryControls />
      </div>
    </GameProvider>
  );
}

export default Game;