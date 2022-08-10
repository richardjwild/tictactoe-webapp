import React from 'react';
import './Game.css'
import Board from './Board';

class Game extends React.Component {
    constructor(props) {
        super(props);
        fetch('http://localhost:8080/games/new', {method: 'POST'})
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json()
            })
            .then((data) => this.setState(data));
    }

    handleClick(toPlay) {
        let requestBody = new FormData()
        requestBody.set("square", toPlay)
        fetch(
            `http://localhost:8080/games/${this.state.gameId}/play`,
            {
                method: 'POST',
                body: requestBody,
            }
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json()
            })
            .then((data) => this.setState(data))
    }

    render() {
        let board = this.state ? this.state.board : new Map();
        let gameInfo = this.state ? `Status: ${this.state.status}, to play: ${this.state.nextUp}` : ''
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={board}
                        onClick={(square) => this.handleClick(square)}
                    />
                </div>
                <div className="game-info">
                    <div>{gameInfo}</div>
                </div>
            </div>
        )
    }
}

export default Game;