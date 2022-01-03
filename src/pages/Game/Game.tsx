import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { QUESTIONS } from '../../utils/questions'
import { RootState } from '../../store'
import { ALTERNATIVES } from '../../utils/constants'
import Question from '../../components/Question/Question'
import gina from '../../assets/gina.png'
import * as S from './styles'

const colors = {
  green: '#a5d6a7',
  greenHover: '#66bb6a',
  lightGreen: '#c5e1a5',
  lightGreenHover: '#9ccc65',
  blue: '#81d4fa',
  blueHover: '#29b6f6',
  orange: '#ffcc80',
  orangeHover: '#ffa726',
  red: '#ef9a9a',
  redHover: '#ef5350'
}
type Keyword = {
  weight: number;
  keyword: string;
}
    // TODO: Need to change keyword property to kewords
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
      <img src={gina} alt='Gina' />
      <div>
        <Question text={QUESTIONS[currentQuestionIndex].text} />
        <S.AlternativesList>
          <S.Alternative onClick={() => handleClick(2)} color={colors.green} colorHover={colors.greenHover}>
            {ALTERNATIVES.HIGHEST}
          </S.Alternative>
          <S.Alternative onClick={() => handleClick(1)} color={colors.lightGreen} colorHover={colors.lightGreenHover}>
            {ALTERNATIVES.HIGH}
          </S.Alternative>
          <S.Alternative onClick={() => handleClick(0)} color={colors.blue} colorHover={colors.blueHover}>
            {ALTERNATIVES.MEDIUM}
          </S.Alternative>
          <S.Alternative onClick={() => handleClick(-1)} color={colors.orange} colorHover={colors.orangeHover}>
            {ALTERNATIVES.LOW}
          </S.Alternative>
          <S.Alternative onClick={() => handleClick(-2)} color={colors.red} colorHover={colors.redHover}>
            {ALTERNATIVES.LOWEST}
          </S.Alternative >
        </S.AlternativesList >
      </div >
    </S.Game >
  )
}

export default Game
