import React from 'react'
import './index.css' // Import custom CSS for styling

const NotFound = () => (
  <div className="not-found-container">
    <img
      className="not-found-image"
      alt="not found"
      src="https://res.cloudinary.com/dkidc6jca/image/upload/v1719050109/Group_7520_ag81dy.png"
    />
    <h1 className="not-found-heading">Page Not Found</h1>
    <p className="not-found-text">
      We are sorry, the page you requested could not be found
    </p>
  </div>
)

export default NotFound
