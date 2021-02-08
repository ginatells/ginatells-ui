import { ERRORS } from '../utils/constants'

import './Question.scss'

function Question({ text = ERRORS.QUESTION_NOT_FOUND }) {
  return (
    <div className='question'>
      {text}
    </div>
  )
}

export default Question