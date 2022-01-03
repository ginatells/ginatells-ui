import styled from 'styled-components'
import { COLOR_PALETTE } from '../../utils/constants'

export const Game = styled.div`
  display: flex;
  color: ${COLOR_PALETTE.MEDIUM_BLACK};
  width: 550px;
  height: 590px;
  display: flex;
  margin: 0 auto;
  max-width: 550px;
  margin-top: 50px;
`

export const AlternativesList = styled.ul`
  list-style-type: none;
    padding: 0;
    margin: 0;
  & > li {
    font-size: 1.5em;
    margin: 10px;
    border-radius: 0.25em;
    transition: 0.3s;
    padding: 10px;
    cursor: pointer;
  }
`

interface AlternativeProps {
  color: string,
  colorHover: string
}
export const Alternative = styled.li<AlternativeProps>`
  background-color: ${({ color }: any) => color};
  :hover {
    background-color: ${({ colorHover }: any) => colorHover};
  }
`
