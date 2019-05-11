import React from 'react';
import './CodeDropDown.scss';

const CodeDropDown = ({icon, isOpen, onClick}) => (
    <div className="codeDropDownContainer">
        <button onClick={onClick} className="codeDropDown">
            <img className="codeDropDown__icon" alt="icon" src={icon}/>
            <span className="codeDropDown__text">Code</span>
            <span className="codeDropDown__triangle">▼</span>
        </button>
        {isOpen && (<div className="dropdown">
            <ul>
                <li>C</li>
                <li>Python</li>
            </ul>
        </div>)}
    </div>
);

export default CodeDropDown;