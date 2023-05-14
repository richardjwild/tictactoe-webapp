import React, { useEffect, useState } from 'react';
import './Game.css'
import Board from './Board';
import { newGame, play } from "./backend-api";

export default function Game() {

    const [ gameState, setGameState ] = useState(null);

    useEffect(() => {
        if (!gameState) {
            doNewGame();
        }
    });

    function doNewGame() {
        newGame().then(initialState => setGameState(initialState));
    }

    function doPlay(square) {
        play(gameState.gameId, square).then(newState => setGameState(newState))
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={gameState?.board}
                    onClick={doPlay}
                />
            </div>
            <div className="game-info">
                <p>Status: {gameState?.status}, to play: {gameState?.nextUp}</p>
            </div>
            <div className="new-game">
                <button onClick={doNewGame}>New game</button>
            </div>
        </div>
    );
}
