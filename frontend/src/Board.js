import React from 'react';
import './Board.css'
import Square from './Square'

export default function Board({ squares, onClick }) {

    const renderSquare = (i) => {
        return <Square
            value={squares && squares[i]}
            onClick={() => onClick(i)}
        />;
    }

    return (
        <div className="board">
            <div className="board-row">
                {renderSquare("TOP_LEFT")}
                {renderSquare("TOP_MIDDLE")}
                {renderSquare("TOP_RIGHT")}
            </div>
            <div className="board-row">
                {renderSquare("CENTRE_LEFT")}
                {renderSquare("CENTRE_MIDDLE")}
                {renderSquare("CENTRE_RIGHT")}
            </div>
            <div className="board-row">
                {renderSquare("BOTTOM_LEFT")}
                {renderSquare("BOTTOM_MIDDLE")}
                {renderSquare("BOTTOM_RIGHT")}
            </div>
        </div>
    );
}
