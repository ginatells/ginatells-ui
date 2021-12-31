import { ERRORS } from '../utils/constants'
import './Question.scss'

interface QuestionProps {
  text?: string;
}

function Question({ text = ERRORS.QUESTION_NOT_FOUND }: QuestionProps) {
  return (
    <div className='question'>
      {text}
    </div>
  )
}

export default Question
