import React, {useEffect, useState} from 'react';
import './Game.css'
import Board from './Board';

export default function Game() {

    const [ gameState, setGameState ] = useState(null);

    useEffect(() => {
        if (!gameState) {
            doNewGame();
        }
    });

    async function newGame() {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/games/new`, {method: 'POST'})
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json()
    }

    async function play(square) {
        let requestBody = new FormData()
        requestBody.set("square", square)
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/games/${gameState.gameId}/play`, {
            method: 'POST',
            body: requestBody,
        })
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json()
    }

    function doNewGame() {
        newGame().then(initialState => setGameState(initialState));
    }

    function doPlay(square) {
        play(square).then(newState => setGameState(newState))
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
    )
}
