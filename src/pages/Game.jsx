import Question from '../components/Question'
import { ALTERNATIVES } from '../utils/constants'

import './Game.scss'

function Game() {
  return (
    <>
      <img src={'gina.png'} alt='Gina' />
      <Question />
      <ul>
        <li className={'background-green'}>{ALTERNATIVES.HIGHEST}</li>
        <li className={'background-lightgreen'}>{ALTERNATIVES.HIGH}</li>
        <li className={'background-blue'}>{ALTERNATIVES.MEDIUM}</li>
        <li className={'background-orange'}>{ALTERNATIVES.LOW}</li>
        <li className={'background-red'}>{ALTERNATIVES.LOWEST}</li>
      </ul>
    </>
  )
}

export default Game