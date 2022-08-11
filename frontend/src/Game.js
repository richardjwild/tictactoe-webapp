import React from 'react';
import './Game.css'
import Board from './Board';

class Game extends React.Component {

    constructor(props) {
        super(props)
        this.state = {board: new Map()}
    }

    componentDidMount() {
        this.doNewGame()
    }

    doNewGame() {
        this.newGame().then((data) => this.setState(data))
    }

    async newGame() {
        const response = await fetch('http://localhost:8080/games/new', {method: 'POST'})
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json()
    }

    doPlay(square) {
        this.play(square).then((data) => this.setState(data))
    }

    async play(square) {
        let requestBody = new FormData()
        requestBody.set("square", square)
        const response = await fetch(`http://localhost:8080/games/${this.state.gameId}/play`, {
            method: 'POST',
            body: requestBody,
        })
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json()
    }

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={this.state.board}
                        onClick={(square) => this.doPlay(square)}
                    />
                </div>
                <div className="game-info">
                    <div>{`Status: ${this.state.status}, to play: ${this.state.nextUp}`}</div>
                </div>
                <div className="new-game">
                    <button onClick={() => this.doNewGame()}>New game</button>
                </div>
            </div>
        )
    }
}

export default Game;