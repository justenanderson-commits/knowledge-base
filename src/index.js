import React from 'react'
import ReactDOM from 'react-dom/client'
import Paths from 'paths'
import { BrowserRouter as Router} from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <h3>Welcome Here is my App</h3>
      <Router>
        <Paths />
      </Router>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
