import React, {Component} from 'react'
import uuid from 'uuid'

import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'

class Main extends Component {
  constructor() {
    super();
    this.state = {
      openText: false,
      messages: [
        {
          id: uuid.v4(),
          text: 'Mensaje del tweet',
          picture: 'http://repexgroup.es/wp-content/uploads/avatar-1.png',
          displayName: 'Gabri the best',
          username: 'gabriman',
          date: Date.now() - 180000
        },
        
        {
          id: uuid.v4(),
          text: 'Este es otro mensaje',
          picture: 'http://pngimg.com/uploads/michael_jackson/michael_jackson_PNG49.png',
          displayName: 'Michael Jackson',
          username: 'mjackson',
          date: Date.now() - 1800000
        }
      ]
    }
  }
  
  handleOpenText(event){
    event.preventDefault();
    this.setState( { openText: true })
  }
  
  renderOpenText(){
    if (this.state.openText){
      return <InputText />
    }
  }
  
  render() {
    return (
      <div>
        <ProfileBar
          picture={this.props.user.photoURL}
          username={this.props.user.email.split('@')[0]}
          onOpenText={this.handleOpenText.bind(this)}/>
        {this.renderOpenText()}
        <MessageList messages={this.state.messages}/>
      </div>
    );
  }
}

export default Main