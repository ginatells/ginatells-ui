import React from 'react';
import balloon from '../images/balloon.png';
import './Question.css';

const Question = ({question}) => {
  const errorMessage = 'ERROR: Question not Found! Please, reload the page!';
  const questionText = question || errorMessage;

  return (
    <div id='question-div' className='question-div'>
      <img id='balloon-img' className='balloon' src={balloon}/>
      <div id='text-question-div' className='text-question'>{questionText}</div>
    </div>
  );
};

export default Question;