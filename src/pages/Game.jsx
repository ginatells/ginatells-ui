import Question from '../components/Question'
import Gina from '../images/gina.png'
import questionsService from '../services/questionsService'
import { ALTERNATIVES } from '../utils/constants'
import { QUESTIONS } from '../utils/questions'


import './Game.scss'

function Game() {

  async function selectOption(text) {
    console.log(text);
    await questionsService.postAnswer();
  }

  return (
    <div className='game-container'>
      <img src={Gina} alt='Gina' />
      <div>
        <Question />
        <ul>
          <li className={'background-green'} onClick={() => selectOption("hello")}>{ALTERNATIVES.HIGHEST}</li>
          <li className={'background-lightgreen'} onClick={console.log("hi")}>{ALTERNATIVES.HIGH}</li>
          <li className={'background-blue'}>{ALTERNATIVES.MEDIUM}</li>
          <li className={'background-orange'}>{ALTERNATIVES.LOW}</li>
          <li className={'background-red'}>{ALTERNATIVES.LOWEST}</li>
        </ul>
      </div>
    </div>
  )
}

export default Game