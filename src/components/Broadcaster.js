import React from 'react'
import {createSocket} from '../utils/helpers'

class Broadcaster extends React.Component { 
  constructor (props) {
    super(props)
    this.startBroadcast = this.startBroadcast.bind(this)
    this.subscription = {}
  }

  componentDidMount () {
    this.subscription = createSocket({
      channel: 'NasanaChannel',
      connected: function() { console.log("cable: connected") },
      disconnected: function() { console.log("cable: disconnected") },
      received: (data) => { console.log("cable received: ", data); } 
    })
  }

  startBroadcast () {
    setInterval(_ => {
      this.setCurrentPosition()
      .then((data)=> {
        this.subscription.perform('broadcast_position_to_tracker', {
          lat: data.coords.latitude,
          lng: data.coords.longitude
        })
      })
    }, 3000)
  }

  setCurrentPosition (options) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options)
    })  
  }
  render () {
    return <div>
      <button onClick={this.startBroadcast}>Broadcast</button>
    </div>
  }
}

export default Broadcaster
