import React, {useEffect, useState} from 'react';
import './Game.css'
import Board from './Board';

export default function Game() {

    const [ state, setState ] = useState(null);

    useEffect(() => {
        if (!state) {
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
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/games/${state.gameId}/play`, {
            method: 'POST',
            body: requestBody,
        })
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json()
    }

    function doNewGame() {
        newGame().then(data => setState(data));
    }

    function doPlay(square) {
        play(square).then(data => setState(data))
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={state?.board}
                    onClick={doPlay}
                />
            </div>
            <div className="game-info">
                <p>Status: {state?.status}, to play: {state?.nextUp}</p>
            </div>
            <div className="new-game">
                <button onClick={doNewGame}>New game</button>
            </div>
        </div>
    )
}
