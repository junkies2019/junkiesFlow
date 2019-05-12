import React from 'react';
import './ConverButton.scss';

const ConverButton = ({text, onClick}) => (
    <button className="convertButton" onClick={onClick}>
        <span className="convertButton__Text">{text}</span>
    </button>
);

export default ConverButton;