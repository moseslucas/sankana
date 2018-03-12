import React from 'react'
import {createSocket} from '../utils/helpers'
import RaisedButton from 'material-ui/RaisedButton'

class Broadcaster extends React.Component { 
  constructor (props) {
    super(props)
    this.startBroadcast = this.startBroadcast.bind(this)
    this.subscription = {}
  }


  startBroadcast () {
    this.subscription = createSocket({
      channel: 'NasanaChannel',
      code: localStorage.CODE
    })
    setInterval(_ => {
      // this.setCurrentPosition()
      // .then((data)=> {
      //   this.subscription.perform('broadcast_position_to_tracker', {
      //     lat: data.coords.latitude,
      //     lng: data.coords.longitude
      //   })
      // })
      this.subscription.perform('broadcast_position_to_tracker', {
        lat: 1,
        lng: 2
      })
    }, 3000)
  }

  setCurrentPosition (options) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options)
    })  
  }
  render () {
    return <React.Fragment>
      <center>
      <RaisedButton 
        label="Start broadcasting" 
        secondary
        onClick={this.startBroadcast}/>
      </center>
    </React.Fragment>
  }
}

export default Broadcaster
