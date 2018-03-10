import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import RaisedButton from 'material-ui/RaisedButton'
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin'
import Tracker from './Tracker'
import Broadcaster from './Broadcaster'
import shortid from 'shortid'

class Home extends React.Component { 
  constructor (props) {
    super(props)
  }

  componentWillMount () {
    if (localStorage.CODE === undefined)  {
      const code = shortid.generate().slice(0,4)
      localStorage.setItem('CODE', code)
    }
  }

  render () {
    return <Tabs>
      <Tab label="SHARE LOCATION">
        <Broadcaster/>
      </Tab>
      <Tab
        icon={<MapsPersonPin />}
        label="TRACKER">
        <Tracker/>
      </Tab>
    </Tabs>
  }
}

export default Home
