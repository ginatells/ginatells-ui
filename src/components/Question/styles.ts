import styled from 'styled-components'
import Balloon from '../../assets/balloon-white.png'
import { COLOR_PALETTE } from '../../utils/constants'

export const Question = styled.div`
  background-image: url(${Balloon});
  background-repeat: no-repeat;
  background-position: top left;
  background-size: 289px;
  text-align: center;
  padding-top: 80px;
  padding-bottom: 150px;
  color: ${ COLOR_PALETTE.DARK_BLACK };
`
