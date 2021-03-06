//Functional component to show login/logout and show the savedRestaurants list.

import React from 'react'
import './css/Nav.css';
import LoginButton from './LoginButton'
import getSaveRestaurant from './lib/getSaveRestaurant.js'


const Nav = ({toggleSavedRestaurants, isLogin, displayName, showSaveRestaurants}) => {
const displaySavedButton = () => {
    if (isLogin === false) {
      return
    } else {
      if (showSaveRestaurants === true) {
        return <button className="button" onClick={toggleSavedRestaurants}>Go back</button>
      } else {
        return <button className="button" onClick={toggleSavedRestaurants}>Show saved restaurants</button>
      }
    } 
  }
  return (
    <nav className='row flex-items-xs-right h-nav'>
    {
      displayName ? <div className='col-xs col-sm col-md col-lg'><p className='nav-displayname' onClick ={showSaveRestaurants}>{displayName}</p></div>: null
    }
      {displaySavedButton()}
    {
      isLogin ? <div className='col-xs-5 col-sm-4 col-md-3 col-lg-2'><a className='button' href='/logout'>Logout</a></div> : <div className='col-xs-5 col-sm-4 col-md-3 col-lg-2'><a className='button' href='/login'>Login</a></div>
    }
    </nav>
  )
}

export default Nav
