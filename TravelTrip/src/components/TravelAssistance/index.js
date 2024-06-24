import React from 'react'
import './index.css'

const TravelAssistance = ({details, handleInputChange, nextStep, prevStep}) => {
  const {travelAssistance, selectedAssistance} = details

  const handleNext = () => {
    if (travelAssistance && !selectedAssistance) {
      alert('Select a travel assistance option')
    } else {
      nextStep()
    }
  }

  return (
    <div className="travel-assistance-container">
      <h1>Travel Assistance</h1>
      <p>Select your travel assistance</p>
      <form className="travel-assistance-form">
        <label className="travel-assistance-checkbox">
          <input
            type="checkbox"
            name="travelAssistance"
            checked={travelAssistance}
            onChange={handleInputChange}
          />
          Travel Assistance Needed
        </label>
        {travelAssistance && (
          <div className="assistance-selection">
            <label className="assistance-label">
              Select Assistance:
              <select
                name="selectedAssistance"
                value={selectedAssistance}
                onChange={handleInputChange}
                className="assistance-select"
              >
                <option value="">Select...</option>
                <option value="guide">Car</option>
                <option value="translator">Train</option>
                <option value="driver">Flight</option>
              </select>
            </label>
          </div>
        )}
      </form>
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

export default TravelAssistance
