import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css' // Import custom CSS for styling

const Home = () => {
  const isAuthenticated = Cookies.get('jwt_token')
  if (!isAuthenticated) {
    return <Redirect to="/login" />
  }

  return (
    <div className="home-container">
      <Header />
      <div className="content-container">
        <img
          className="home-image"
          src="https://res.cloudinary.com/dkidc6jca/image/upload/v1719040509/image_5_1_q9rp7w.jpg"
          alt="home"
        />
        <div className="text-container">
          <h1 className="main-heading">Travel. Relax. Memories.</h1>
          <p className="sub-heading">With Travel Trip, you can experience...</p>
          <Link to="/book-a-new-trip" className="button-link">
            <button className="main-button" type="button">
              Book a new trip
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
