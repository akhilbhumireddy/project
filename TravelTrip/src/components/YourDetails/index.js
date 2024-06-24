import React, {useState} from 'react'
import './index.css'

const YourDetails = ({details, handleInputChange, nextStep, initialSteps}) => {
  const [error, setError] = useState('')

  const handleNext = () => {
    if (details.name === '') {
      setError('Enter your name')
    } else if (details.startLocation === '') {
      setError('Enter your start location')
    } else if (details.endLocation === '') {
      setError('Enter your end location')
    } else {
      setError('')
      nextStep()
    }
  }

  return (
    <div className="main-container">
      <div className="your-details-container">
        <h1>Travel Trip</h1>

        <h2>Your Details</h2>
        <p>Enter your name and location details</p>
        <form className="form">
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={details.name}
              onChange={handleInputChange}
              className="input"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="startLocation">
              Start Location:
            </label>
            <input
              type="text"
              id="startLocation"
              name="startLocation"
              value={details.startLocation}
              onChange={handleInputChange}
              className="input"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="endLocation">
              End Location:
            </label>
            <input
              type="text"
              id="endLocation"
              name="endLocation"
              value={details.endLocation}
              onChange={handleInputChange}
              className="input"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="button" onClick={handleNext} className="button">
            Next
          </button>
        </form>
      </div>
    </div>
  )
}

export default YourDetails
