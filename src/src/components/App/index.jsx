import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'normalize-css'

import styles from './app.css'
import Header from '../Header'
import Main from '../Main'


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        photoURL: 'https://pbs.twimg.com/profile_images/737359467742912512/t_pzvyZZ_400x400.jpg',
        email: 'gasasdad@as.com',
        displayName: 'Gabriel'
      }
    }
  }
  
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact path='/' render={() => {
              if (this.state.user) {
                return (
                  <Main user={this.state.user}/>
                )
              }
              else {
                // REnder <Login />
              }
            }}/>
            
            <Route path='/profile' render={() => {
              // Render <Profile />
            }}/>
            
            <Route path='/user/:username' render={({params}) => {
              // Render <Profile /> pasando params.username
            }}/>
          
          </Switch>
        
        </div>
      </Router>
    )
  }
}

export default App