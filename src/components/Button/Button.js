import React from 'react';
import './Button.scss';

const Button = ({isConfirm, icon, text, onClick}) => (
    <button className={isConfirm? ("button--confirm"):("button--cancel")} onClick={onClick}>
        <img className="button--icon" alt="icon" src={icon}/>
        <span className="button__text">{text}</span>
    </button>
);

export default Button;