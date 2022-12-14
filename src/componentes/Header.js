import logo from '../logo.svg';
import React from 'react';

const Header = () => {
    return (
        <div id='Seccion-logito'>
            <div>
                <img src={logo} id="App-logo" alt="logo" />
            </div>
            <div>
                <h1>Trabajo practico - Calculadora React - comisión 22803</h1>
            </div>
            
        </div>
    );
};

export default Header;