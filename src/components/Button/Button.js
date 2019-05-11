import React from 'react';
import './Button.scss';

const Button = ({isConfirm, icon, text}) => (
    <button className={isConfirm? ("button--confirm"):("button--cancel")}>
        <img className="button--icon" alt="icon" src={icon}/>
        <span className="button__text">{text}</span>
    </button>
);

export default Button;