import React from 'react';
import './ChooseButton.scss';

const ChooseButton = ({onChange}) => (
    <div className="filebox">
        <img className="filebox__icon" alt="img" src="/images/photo.png" />
        <label htmlFor="ex_file">Choose</label>
        <input name="file" type="file" id="ex_file" onChange={onChange}/>
    </div>
);

export default ChooseButton;