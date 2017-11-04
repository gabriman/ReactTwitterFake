import React, {Component} from 'react'
import MessageList from '../MessageList'

class Main extends Component {
  constructor(){
    super();
    this.state = {
      messages : [
        {
          text: 'message del tweet',
          picture: 'http://fuuse.net/wp-content/uploads/2016/02/avatar-placeholder.png',
          displayName: 'Gabriel Rodriguez',
          username: 'gabriman',
          date: Date.now()
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