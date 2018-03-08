import React from 'react'
import  'bootstrap/dist/css/bootstrap.min.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = props => {
  return <MuiThemeProvider>
    {props.children}
  </MuiThemeProvider>
}

export default App
