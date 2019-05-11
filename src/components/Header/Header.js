import React from 'react';
import './Header.scss';

const Header = () => (
    <div className="header">
        <img className="header__logo" alt="logo" src="/images/code.svg"/>
        <span className="header__title">CODRAW</span>
        <span className="header__subTitle">some flow-chart change code.</span>
    </div>
);

export default Header;