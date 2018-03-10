import React from 'react'
import {createSocket} from '../utils/helpers'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class Tracker extends React.Component { 
  constructor (props) {
    super(props)
    this.track = this.track.bind(this)
    this.subscription = {}
    this.state = {
      trackingCode: ''
    }
  }

  _handleChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  track () {
    const {trackingCode} = this.state

    this.subscription = createSocket({
      channel: 'NasanaChannel',
      code: trackingCode,
      connected: function() { console.log("cable: connected") },
      disconnected: function() { console.log("cable: disconnected") },
      received: (data) => { console.log("cable received: ", data); } 
    })
  }

  render () { 
    const {trackingCode} = this.state
    return <React.Fragment>
      <TextField
        name='trackingCode'
        onChange={e => this._handleChange(e)}
        value={trackingCode}
        floatingLabelText="Tracking Code"
      /><br />
      <RaisedButton 
        label="Track" 
        primary
        onClick={this.track}/>
    </React.Fragment>
  }
}

export default Tracker
