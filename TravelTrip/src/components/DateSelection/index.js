import React, {useState} from 'react'
import './index.css'

const DateSelection = ({details, handleInputChange, nextStep, prevStep}) => {
  const {startDate, endDate} = details
  const [error, setError] = useState('')

  const handleNext = () => {
    if (!startDate) {
      setError('Select start date')
    } else if (!endDate) {
      setError('Select end date')
    } else if (new Date(endDate) < new Date(startDate)) {
      setError('The end date cannot be less than the start date')
    } else {
      setError('')
      nextStep()
    }
  }

  return (
    <div className="date-selection-container">
      <h1>Date Selection</h1>
      <p>Select your Start and End Date</p>
      <ul className="step-list">
        <li className="step-item active">Date Selection</li>
      </ul>
      <form className="form">
        <label className="form-label">
          Start Date:
          <input
            className="input"
            type="date"
            name="startDate"
            value={startDate}
            onChange={handleInputChange}
          />
        </label>
        <label className="form-label">
          End Date:
          <input
            className="input"
            type="date"
            name="endDate"
            value={endDate}
            onChange={handleInputChange}
          />
        </label>
      </form>
      {error && <p className="error-message">{error}</p>}
      <div className="button-container">
        <button className="navigation-button" type="button" onClick={prevStep}>
          Previous
        </button>
        <button
          className="navigation-button"
          type="button"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default DateSelection
