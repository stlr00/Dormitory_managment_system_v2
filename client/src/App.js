import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import 'bootstrap/dist/css/bootstrap.css'


function App() {
  const routes = useRoutes(true)
  return (
    <Router>
      {routes}
    </Router>
  )
}

export default App
