import styled from 'styled-components'
// import { COLOR_PALETTE } from '../../utils/constants'

export const Game = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
  align-items: center;
  justify-content: center;
  & ul {
    margin 16px 0;
    width: 90%;
    @media (min-width: 992px) {
      width: auto;
    }
  }
`

export const Question = styled.div`
  display: flex;
  align-items: center;
  > *:nth-child(1) {
    flex: 1;
  }
`

interface AlternativeProps {
  color: any
}
export const Alternative = styled.div<AlternativeProps>`
  background-color: ${({ color }: any) => color.main};
  font-size: 1.5em;
  margin-bottom: 10px;
  border-radius: 0.25em;
  transition: 0.3s;
  padding: 10px;
  cursor: pointer;
  min-width: 260px;
  :hover {
    background-color: ${({ color }: any) => color.hover};
  }
`
