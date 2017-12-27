import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'normalize-css'

import styles from './app.css'
import Header from '../Header'
import Main from '../Main'
import Profile from '../Profile'
import Login from '../Login'


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        photoURL: 'https://pbs.twimg.com/profile_images/737359467742912512/t_pzvyZZ_400x400.jpg',
        email: 'gasasdad@as.com',
        displayName: 'Gabriel',
        location: 'Madrid, España'
      }
    };
    
    this.handleOnAuth = this.handleOnAuth.bind(this)
  }
  
  handleOnAuth() {
    console.log('Auth')
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
                return (
                  <Login onAuth={this.handleOnAuth}/>
                )
              }
            }}/>
            
            <Route path='/profile' render={() => {
              return (
                <Profile
                  picture={this.state.user.photoURL}
                  username={this.state.user.email.split('@')[0]}
                  displayName={this.state.user.displayName}
                  location={this.state.user.location}
                  emailAddress={this.state.user.email}
                />
              )
            }
            }/>
            
            <Route path='/user/:username' render={({match}) => {
              return (
                <Profile
                  displayName={match.params.username}
                  username={match.params.username}
                />
              )
            }}/>
          
          </Switch>
        
        </div>
      </Router>
    )
  }
}

export default App