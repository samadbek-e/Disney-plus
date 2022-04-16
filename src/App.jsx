import React from 'react'
import Login from "./Components/Login"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './Components/Header'
import Home from './Components/Home'
import Details from './Components/Details'
function App() {
  return (
      <Router>
            <Header />
        <Switch>
          <Route exact path="/"  >
            <Login />
          </Route>
          <Route path="/home"  >
          <Home />
          </Route>
          <Route path="/detail/:id"  >
            <Details />
          </Route>
        </Switch>
      </Router>
  )
}

export default App
