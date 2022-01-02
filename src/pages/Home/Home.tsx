import { Link } from "react-router-dom"

function Home () {
  return (
    <div>
      <p>Welcome to Ginatells!</p>
      <Link to="/game">Home</Link>
    </div>
  )
}

export default Home
