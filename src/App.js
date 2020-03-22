import React from 'react';
import './App.css';
import MainPage from './pages/MainPage';
import gina from './images/gina.png';

const App = () => {
  return (
    <div className='App'>
      <header>
      </header>
      <body>
        <img src={gina} className="App-logo" alt="Gina" />        
        <MainPage/>        
      </body>
    </div>
  );
};

export default App;
