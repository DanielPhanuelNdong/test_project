
import { BrowserRouter as Router } from "react-router-dom";
import './App.css'
import TheRoutes from './routes/TheRoutes'

function App() {

  return (
    <>
      <Router>
        <TheRoutes />
      </Router>
    </>
  )
}

export default App
