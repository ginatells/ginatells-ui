import styled from 'styled-components'
import { COLOR_PALETTE } from '../../utils/constants'

export const Nav = styled.nav`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  font-weight: 400;
  height: 30px;
  padding: 0 1.5em;
  min-height: 40px;
  background-color: ${COLOR_PALETTE.DARK_ORANGE};
  & li:hover {
    cursor: pointer;
    color: ${COLOR_PALETTE.DARK_BLACK};
  }
`