import React from 'react';
import './Square.css'

export default function Square({onClick, value}) {
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
};
