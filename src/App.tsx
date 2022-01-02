import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Game from './pages/Game/Game'
import Home from './pages/Home/Home'
import * as S from './styles'

function App() {
  return (
    <S.App>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='game' element={<Game />} />
        </Routes>
      </Router>
    </S.App>
  )
}

export default App
