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
    };
    
    this.handleSendText = this.handleSendText.bind(this);
    this.handleCloseText = this.handleCloseText.bind(this);
    this.handleOpenText = this.handleOpenText.bind(this);
  }
  
  handleSendText(event){
    event.preventDefault();
    let newMessage = {
      id: uuid.v4(),
      username: this.props.user.email.split('@')[0],
      picture: this.props.user.photoURL,
      displayName: this.props.user.displayName,
      date: Date.now(),
      text: event.target.text.value
    };
    
    this.setState(
      { messages : this.state.messages.concat(newMessage),
        openText: false
      }
    )
  }
  
  handleCloseText(event){
    event.preventDefault();
    this.setState( { openText: false })
    
  }
  
  handleOpenText(event){
    event.preventDefault();
    this.setState( { openText: true })
  }
  
  renderOpenText(){
    if (this.state.openText){
      return (
        
        <InputText
          onSendText = {this.handleSendText}
          onCloseText = {this.handleCloseText}
        />
        
      )
    }
  }
  
  render() {
    return (
      <div>
        <ProfileBar
          picture={this.props.user.photoURL}
          username={this.props.user.email.split('@')[0]}
          onOpenText={this.handleOpenText}/>
        {this.renderOpenText()}
        <MessageList messages={this.state.messages}/>
      </div>
    );
  }
}

export default Main