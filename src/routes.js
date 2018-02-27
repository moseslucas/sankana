import React from 'react'
import {Route} from 'react-router-dom'
import  App from './components/layout/App'
import Home from './components/Home'
import Points from './components/Points'
import Today from './components/Today'
import Week from './components/Week'

const Routes = _ => {
  return <App>
    <Route exact path='/' component={Home}/>
    <Route path='/MyPoints' component={Points}/>
    <Route path='/Today' component={Today}/>
    <Route path='/Week' component={Week}/>
  </App>
}

export default Routes
