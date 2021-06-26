import { init } from '@rematch/core'
import session from './models/session'

const models = {
  session
}
const store = init({ models })

export default store
