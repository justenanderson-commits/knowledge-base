import React from 'react'
import ReactDOM from 'react-dom/client'
import Paths from 'paths'
import { BrowserRouter as Router} from 'react-router-dom'
import TopBar from 'components/TopBar'

const App = () => {
  return (
      <Router>
        <TopBar />
        <Paths />
      </Router>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
