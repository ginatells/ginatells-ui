
import { useNavigate } from 'react-router-dom'
import * as S from './styles'

function Nav () {
  const navigate = useNavigate()

  return (
    <S.Nav>
      <ul>
        <li onClick={() => navigate(-1)}>Go back</li>
      </ul>
    </S.Nav>
  )
}

export default Nav
