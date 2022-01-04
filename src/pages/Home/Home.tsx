import { useNavigate } from 'react-router-dom'
import ImagePlaceholder from '../../components/ImagePlaceholder/ImagePlaceholder'
import UIButton from '../../components/UIButton/UIButton'
import UITextbox from '../../components/UITextbox/UITextbox'
import * as S from './styles'

function Home() {
  const navigate = useNavigate()
  return (
    <S.Home>
      <h1>Welcome to Ginatells!</h1>
      <ImagePlaceholder />
      <p>Hi, I'm Gina! Tell me a hint and I'll help you find something interesting to watch!</p>
      <UITextbox id='hint' placeholder='Input a hint' />
      <UIButton onClick={() => navigate('/game')} label='Start' />
    </S.Home>
  )
}

export default Home
