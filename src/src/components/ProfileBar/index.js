import React, {Component} from 'react'
import styles from './profile-bar.css'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const propTypes = {
  picture: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onOpenText: PropTypes.func.isRequired
};

function ProfileBar ({picture,username,onOpenText}){
  return (
    <div className={styles.root}>
      
      <Link to='/profile'>
        <figure>
          <img className={styles.avatar} src={picture}/>
        </figure>
      </Link>
      <span className={styles.username}>Hola @{username}!</span>
      <button onClick={onOpenText} className={styles.button}>
        <span className='fa fa-lg fa-edit'></span>
        Tweet!
      </button>
    </div>
  )
}

ProfileBar.propTypes= propTypes;

export default ProfileBar