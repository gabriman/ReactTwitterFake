import React, {Component} from 'react'
import MessageList from '../MessageList'

class Main extends Component {
  constructor(){
    super();
    this.state = {
      messages : [
        {
          text: 'Mensaje del tweet',
          picture: 'http://repexgroup.es/wp-content/uploads/avatar-1.png',
          displayName: 'Gabri the best',
          username: 'gabriman',
          date: Date.now() - 180000
        },
  
        {
          text: 'Este es otro mensaje',
          picture: 'http://pngimg.com/uploads/michael_jackson/michael_jackson_PNG49.png',
          displayName: 'Michael Jackson',
          username: 'mjackson',
          date: Date.now() - 1800000
        }
      ]
    }
  }
  
  render() {
    return (
      <MessageList messages={this.state.messages} />
    )
  }
}

export default Main