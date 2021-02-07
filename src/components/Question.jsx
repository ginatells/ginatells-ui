import { ERRORS } from '../utils/constants'

function Question({ text }) {
  return (
    <div style={{ backgroundImage: 'url(balloon.png)' }}>
      <img />
      {text || ERRORS.QUESTION_NOT_FOUND}
    </div>
  )
}

export default Question