import React from 'react';
import logo from '../../../src/images/logo.png';
import Board from '../Board/Board';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <a href="/Players">Players</a>
            </nav>
        </div>
    );
};

export default Header;