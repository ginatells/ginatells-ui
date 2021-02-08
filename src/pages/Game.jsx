import Question from '../components/Question'
import Gina from '../images/gina.png'
import { ALTERNATIVES } from '../utils/constants'


import './Game.scss'

function Game() {
  return (
    <div className='game-container'>
      <img src={Gina} alt='Gina' />
      <div>
        <Question />
        <ul>
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