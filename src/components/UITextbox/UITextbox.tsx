import * as S from './styles'

interface UITextboxProps {
  id: string;
  placeholder?: string;
}

function UITextbox ({ id, placeholder }: UITextboxProps) {
  return (
    <S.UITextbox id={id} name={id} placeholder={placeholder} />
  )
}

export default UITextbox
