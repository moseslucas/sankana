import ActionCable from 'action-cable-react-jwt'

export const createSocket = ({
  code,
  channel,
  connected,
  disconnected,
  received
}) => {
  let App = {}; 
  App.cable = ActionCable.createConsumer('ws://localhost:3000/cable', code) 
  return App.cable.subscriptions.create({channel}, {
    connected,
    disconnected,
    received
  })  
}
