import logo from '../logo.svg';
import React from 'react';

const Footer = () => {
    return (
        <div id='footer'>
            <span>CopyRigth by David Gutierrez - 2022</span>
            <div>
                <img src={logo} id="App-logo" alt="logo" />
            </div>
        </div>
    );
};

export default Footer;
