import React, { Component } from 'react'
import styles from './login.css'

class Login extends Component {
  
  render (){
    return (
      <div className={styles.root}>
        <p className={styles.text}>
          Necesitamos que inicies sesion con tu cuenta de GitHub
          par que puedas leer y escribir mensajes
        </p>
        <button
          onClick={this.props.onAuth}
          className={styles.button}
        >
          <span className='fa fa-github ' > </span> Login con GitHub
        </button>
      </div>
    )
  }
}


export default Login