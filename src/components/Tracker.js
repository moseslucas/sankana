import React from 'react'
import {createSocket} from '../utils/helpers'

class Tracker extends React.Component { 
  constructor (props) {
    super(props)
    this.subscription = {}
  }

  componentDidMount () {
    // insert to a trigger method
    // this.subscription = createSocket({
    //   channel: 'NasanaChannel',
    //   connected: function() { console.log("cable: connected") },
    //   disconnected: function() { console.log("cable: disconnected") },
    //   received: (data) => { console.log("cable received: ", data); } 
    // })
  }

  render () { 
    return <div>
      <h1>Points</h1>
    </div>
  }
}

export default Tracker
