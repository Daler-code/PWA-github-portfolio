import React from 'react';

import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Profile from './containers/profile/profile';

function App() {
  return (
    <div className='App'>
      <Header logo={logo} />
      <Profile />
    </div>
  );
}

export default App;
