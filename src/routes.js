import React from 'react'
import {Route} from 'react-router-dom'
import  App from './components/layout/App'
import Home from './components/Home'
import Broadcaster from './components/Broadcaster'
import Tracker from './components/Tracker'

const Routes = _ => {
  return <App>
    <Route exact path='/' component={Home}/>
  </App>
}

export default Routes
