import styled from 'styled-components'
import { COLOR_PALETTE } from '../../utils/constants'

export const Question = styled.div`
  display: flex;
  min-height: 80px;
  max-width: 200px;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1em;
  background-color: ${COLOR_PALETTE.WHITE};
  color: ${COLOR_PALETTE.DARK_BLACK};
  border-radius: 16px;
  border: 5px solid ${COLOR_PALETTE.DARK_BLACK};
`
