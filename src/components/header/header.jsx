import React from 'react';
import './header.css';

import logo from '../../assets/GitHub-Mark-Light-64px.png';

const Header = () => (
  <header className='App-header'>
    <img src={logo} className='App-logo' alt='logo' />
    <h1>My GitHub Portfolio</h1>
  </header>
);

export default Header;