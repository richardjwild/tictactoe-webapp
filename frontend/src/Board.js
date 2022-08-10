import React from 'react';
import './Board.css'
import Square from './Square'

class Board extends React.Component {

    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <div className="board">
                <div className="board-row">
                    {this.renderSquare("TOP_LEFT")}
                    {this.renderSquare("TOP_MIDDLE")}
                    {this.renderSquare("TOP_RIGHT")}
                </div>
                <div className="board-row">
                    {this.renderSquare("CENTRE_LEFT")}
                    {this.renderSquare("CENTRE_MIDDLE")}
                    {this.renderSquare("CENTRE_RIGHT")}
                </div>
                <div className="board-row">
                    {this.renderSquare("BOTTOM_LEFT")}
                    {this.renderSquare("BOTTOM_MIDDLE")}
                    {this.renderSquare("BOTTOM_RIGHT")}
                </div>
            </div>
        );
    }
}

export default Board;