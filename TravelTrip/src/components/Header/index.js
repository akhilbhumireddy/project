import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = () => {
  const history = useHistory()

  const handleLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <header className="nav-header">
      <h1 className="nav-title">
        <Link to="/" className="nav-title-link">
          Travel Trip
        </Link>
      </h1>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/my-trips" className="nav-link">
          My Trips
        </Link>
      </div>
      <button className="logout-button" type="button" onClick={handleLogout}>
        Logout
      </button>
    </header>
  )
}

export default Header
