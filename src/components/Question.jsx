import React from 'react';
import balloon from '../images/balloon.png';

const Question = ({question}) => {
  const errorMessage = 'ERROR: Question not Found! Please, reload the page!';
  const questionText = question || errorMessage;

  return (
    <div id='question-div'>
      <img id='balloon-img' src={balloon}/>
      <div id='text-question-div'>{questionText}</div>
    </div>
  );
};

export default Question;