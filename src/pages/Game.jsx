import { useState } from 'react'
// import { useDispatch } from 'react-redux'
import { ALTERNATIVES } from '../utils/constants'
import { QUESTIONS } from '../utils/questions'
import Question from '../components/Question'
import Gina from '../images/gina.png'
// import questionsService from '../services/questionsService'

import './Game.scss'

function Game() {
  const [questionIndex, setQuestionIndex] = useState(0)
  // const dispatch = useDispatch()
  async function selectOption(e) {
    console.log({e});
    setQuestionIndex(questionIndex+1)
    // dispatch.session.increment({count: 1})
    //await questionsService.postAnswer();
  }

  return (
    <div className='game-container'>
      <img src={Gina} alt='Gina'/>
      <div>
        <Question text={QUESTIONS[questionIndex].text}/>
        <ul onClick={selectOption}>
          <li className={'background-green'}>{ALTERNATIVES.HIGHEST}</li>
          <li className={'background-lightgreen'}>{ALTERNATIVES.HIGH}</li>
          <li className={'background-blue'}>{ALTERNATIVES.MEDIUM}</li>
          <li className={'background-orange'}>{ALTERNATIVES.LOW}</li>
          <li className={'background-red'}>{ALTERNATIVES.LOWEST}</li>
        </ul>
      </div>
    </div>
  )
}

export default Game
