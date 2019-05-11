import React from 'react';
import './ConverButton.scss';

const ConverButton = ({icon, text}) => (
    <button className="convertButton">
        <img className="convertButton__icon" alt="icon" src={icon}/>
        <span className="convertButton__Text">{text}</span>
    </button>
);

export default ConverButton;