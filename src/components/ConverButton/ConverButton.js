import React from 'react';
import './ConverButton.scss';

const ConverButton = ({text}) => (
    <button className="convertButton">
        <span className="convertButton__Text">{text}</span>
    </button>
);

export default ConverButton;