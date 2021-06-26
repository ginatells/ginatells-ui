import Game from './pages/Game'
import { Provider } from 'react-redux'
import store from './store'

function App () {
  return (  
    <Provider store={store}>
      <Game/>
    </Provider>
  )
}

export default App
