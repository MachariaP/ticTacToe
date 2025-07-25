import React from 'react';
import { useGame } from '../Game/GameContext';

function HistoryControls() {
  const { history, jumpTo, currentMove } = useGame();

  return (
    <div className="history-controls">
      {history.map((_, move) => (
        <button
          key={move}
          className={move === currentMove ? 'current' : ''}
          onClick={() => jumpTo(move)}
        >
          {move ? `Go to move #${move}` : 'Go to game start'}
        </button>
      ))}
    </div>
  );
}

export default HistoryControls;