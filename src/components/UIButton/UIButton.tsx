import * as S from './styles'

interface UIButtonProps {
  onClick?: any,
  label: string;
}

function UIButton ({ onClick, label }: UIButtonProps) {
  return (
    <S.UIButton onClick={onClick} type='button'>
      {label}
    </S.UIButton>
  )
}

export default UIButton
