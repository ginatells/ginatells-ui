import styled from 'styled-components'
import { COLOR_PALETTE } from '../../utils/constants'

export const UIButton = styled.button`
  display: flex;
  padding: 12px 24px;
  background-color: ${COLOR_PALETTE.DARK_ORANGE};
  color: ${COLOR_PALETTE.WHITE};
	border: none;
	font: inherit;
	cursor: pointer;
  text-decoration: none;
  border-radius: 4px;
  :hover {
    background-color: ${COLOR_PALETTE.GRAY};
  }
`