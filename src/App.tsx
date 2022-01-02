import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Game from './pages/Game/Game'
import Home from './pages/Home/Home'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='game' element={<Game />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
