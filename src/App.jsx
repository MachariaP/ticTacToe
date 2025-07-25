import React from 'react';
import Game from './components/Game/Game';
import HistoryControls from './components/HistoryControls/HistoryControls';
import { GameProvider } from './components/Game/GameContext';
import './App.css';

export default function App() {
  return (
    <GameProvider>
      <div className="app">
        <div className="app-layout">
          <Game />
          <div className="controls-container">
            <HistoryControls />
          </div>
        </div>
      </div>
    </GameProvider>
  );
}