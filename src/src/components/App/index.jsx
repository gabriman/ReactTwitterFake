import React, {Component} from 'react'
import 'normalize-css'

import styles from './app.css'
import Header from '../Header'
import Main from '../Main'


class App extends Component {
  constructor(){
    super();
    this.state = {
      user: {
        photoURL: 'https://pbs.twimg.com/profile_images/737359467742912512/t_pzvyZZ_400x400.jpg',
        email: 'gasasdad@as.com',
        onOpenText: false
      }
    }
  }
  
  render() {
    return (
      <div>
        <Header/>
        <Main user={this.state.user}/>
      </div>
    )
  }
}

export default App