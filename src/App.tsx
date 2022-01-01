import Game from './pages/Game'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Game />} />
          <Route path='game' element={<Game />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
