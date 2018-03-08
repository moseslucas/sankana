import React from 'react'

class Broadcaster extends React.Component { 
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    setInterval(_ => {
      this.setCurrentPosition()
      .then((data)=> {
        console.log('broadcast position',data)
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
    </div>
  }
}

export default Broadcaster
