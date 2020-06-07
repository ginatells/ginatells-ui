import React from 'react';
import Option from '../components/Option';
import Question from '../components/Question';
import gina from '../images/gina.png';
import './MainPage.css';

const MainPage = () => {
  return (
    <div id='main-page' className='aClass centered'>
      <div id='character-div' className='col-6'>
        <img id='gina-img' src={gina} className='App-logo' alt='Gina' />
      </div>
      <div id='question-options-div' className='col-6'>
        <Question />
        <div id='options-div'>
          <ul id='options-list' className='list-group'>
            <Option id='op-one' position={0} text={'Very Interested'} color={'green'} />
            <Option id='op-two' position={1} text={'Interested'} color={'lightgreen'} />
            <Option id='op-three' position={2} text={'Don\'t Care'} color={'blue'} />
            <Option id='op-four' position={3} text={'Not so Interested'} color={'orange'} />
            <Option id='op-five' position={4} text={'Really Not Interested'} color={'red'} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainPage;