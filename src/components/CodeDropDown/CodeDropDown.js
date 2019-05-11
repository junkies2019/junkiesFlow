import React, {useState} from 'react';
import './CodeDropDown.scss';

function CodeDropDown({icon, isOpen, onClick}){
    const [name, setName] = useState('code');

    return(
    <div className="codeDropDownContainer">
        <button onClick={onClick} className="codeDropDown">
            <img className="codeDropDown__icon" alt="icon" src={icon}/>
            <span className="codeDropDown__text">{name}</span>
            <span className="codeDropDown__triangle">▼</span>
        </button>
        {isOpen && (<div className="dropdown">
            <ul>
                <li onClick={() => setName('C')}>C</li>
                <li onClick={() => setName('Python')}>Python</li>
            </ul>
        </div>)}
    </div>
    )
}

export default CodeDropDown;