import React from 'react';
import gina from './images/gina.png';
import './App.css';
import Option from "./components/Option";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={gina} className="App-logo" alt="Gina" />
        <Option text={'Very Interested'} color={'blue'}/>
        <Option text={'Very green'} color={'green'}/>
        <Option text={'Very red'} color={'red'}/>
      </header>
    </div>
  );
}

export default App;
