import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { QUESTIONS } from '../../utils/questions'
import { RootState } from '../../store'
import { ALTERNATIVES } from '../../utils/constants'
import Question from '../../components/Question/Question'
import UIButton from '../../components/UIButton/UIButton'
import ImagePlaceholder from '../../components/ImagePlaceholder/ImagePlaceholder';
import * as S from './styles'

const colors = {
  green: {
    main: '#66bb6a',
    hover: '#a5d6a7',
  },
  lightGreen: {
    main: '#9ccc65',
    hover: '#c5e1a5',
  },
  blue: {
    main: '#29b6f6',
    hover: '#81d4fa',
  },
  orange: {
    main: '#ffa726',
    hover: '#ffcc80',
  },
  red: {
    main: '#ef5350',
    hover: '#ef9a9a'
  }
}
type Keyword = {
  weight: number;
  keyword: string;
}

function Game() {
  const [keywords, setKeywords] = useState<Array<Keyword>>([]);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { questions, currentQuestionIndex } = useSelector((state: RootState) => state.game)

  const handleClick = (value: number) => {
    const currentQuestion = questions[currentQuestionIndex]
    const processKeyword = (element: string) => {
      const keyword = keywords.find((key: any) => (key.keyword === element))
      keyword
        ? keyword.weight = keyword.weight + value
        : keywords.push({ keyword: element, weight: value })
    }
    currentQuestion.keyword.forEach((element: string) => processKeyword(element))
    setKeywords(keywords)
    dispatch.game.answerQuestion({ keywords, navigate })
  }

  return (
    <S.Game>
      <S.Question>
        <ImagePlaceholder />
        <Question text={QUESTIONS[currentQuestionIndex].text} />
      </S.Question>
      <ul>
        <li>
          <S.Alternative onClick={() => handleClick(2)} color={colors.green}>
            {ALTERNATIVES.HIGHEST}
          </S.Alternative>
        </li>
        <li>
          <S.Alternative
            onClick={() => handleClick(1)} color={colors.lightGreen}>
            {ALTERNATIVES.HIGH}
          </S.Alternative>
        </li>
        <li>
          <S.Alternative onClick={() => handleClick(0)} color={colors.blue}>
            {ALTERNATIVES.MEDIUM}
          </S.Alternative>
        </li>
        <li><S.Alternative
          onClick={() => handleClick(-1)} color={colors.orange}>
          {ALTERNATIVES.LOW}
        </S.Alternative>
        </li>
        <li>
          <S.Alternative
            onClick={() => handleClick(-2)} color={colors.red}>
            {ALTERNATIVES.LOWEST}
          </S.Alternative>
        </li>
      </ul>
      <UIButton onClick={() => alert('Not implemented!')} label='Show me' />
    </S.Game >
  )
}

export default Game
