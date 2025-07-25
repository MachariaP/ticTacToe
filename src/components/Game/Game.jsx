import React from 'react';
import Board from '../Board/Board';
import { GameProvider, useGame } from './GameContext';

function Game() {
  const { status } = useGame();

  return (
    <GameProvider>
      <div className="game">
        <div>{status}</div>
        <Board />
      </div>
    </GameProvider>
  );
}

export default Game;