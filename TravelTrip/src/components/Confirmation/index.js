import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import './index.css'

const Confirmation = ({details, prevStep, resetSteps}) => {
  const [isConfirmed, setIsConfirmed] = useState(false)
  const history = useHistory()

  const handleConfirm = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(details),
        },
      )

      if (response.ok) {
        console.log('Trip booked successfully')
        const trips = JSON.parse(localStorage.getItem('trips')) || []
        trips.push(details)
        localStorage.setItem('trips', JSON.stringify(trips))
        setIsConfirmed(true)
      } else {
        console.error('Failed to book the trip')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    handleConfirm()
  }

  const handleCancel = () => {
    prevStep()
  }

  const handleNewBooking = () => {
    resetSteps() // Reset the steps and details
    history.replace('/book-a-new-trip')
  }

  if (isConfirmed) {
    return (
      <div className="confirmation-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
          alt="Success"
          className="success-image"
        />
        <h1>Awesome</h1>
        <p>Your booking has been confirmed</p>
        <button
          className="action-button"
          type="button"
          onClick={handleNewBooking}
        >
          Book a New Trip
        </button>
      </div>
    )
  }

  return (
    <>
      <div className="confirmation-container">
        <h1>Confirmation</h1>
        <p>Confirm your details</p>
        <p>
          <strong>Name:</strong> {details.name}
        </p>
        <p>
          <strong>Start Location:</strong> {details.startLocation}
        </p>
        <p>
          <strong>End Location:</strong> {details.endLocation}
        </p>
        <p>
          <strong>Start Date:</strong> {details.startDate}
        </p>
        <p>
          <strong>End Date:</strong> {details.endDate}
        </p>
        <p>
          <strong>Guests:</strong> {details.guests}
        </p>
        <p>
          <strong>Travel Assistance:</strong>{' '}
          {details.travelAssistance ? 'Yes' : 'No'}
        </p>
        <form onSubmit={handleSubmit} className="confirmation-form">
          <div className="button-container">
            <button
              type="button"
              className="action-button"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button type="submit" className="action-button">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Confirmation
