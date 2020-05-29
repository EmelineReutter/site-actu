import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Accueil from './pages/accueil'
import AntDesign from './pages/antdesign'
import './App.css'
import 'antd/dist/antd.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact><Accueil /></Route>
          <Route path="/accueil" exact><Accueil /></Route>
          <Route path="/ant-design" exact><AntDesign /></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
