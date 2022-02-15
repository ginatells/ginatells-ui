import { ERRORS } from '../../utils/constants'
import * as S from './styles'

interface QuestionProps {
  text?: string;
}

function Question({ text = ERRORS.QUESTION_NOT_FOUND }: QuestionProps) {
  return (
    <S.Question>
      <p>{text}</p>
    </S.Question>
  )
}

export default Question
