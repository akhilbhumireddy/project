import React from 'react'
import './index.css'

const Guests = ({details, handleInputChange, nextStep, prevStep}) => {
  const {adults, children, infants} = details

  const handleIncrement = guestType => {
    handleInputChange({
      target: {
        name: guestType,
        value: details[guestType] + 1,
      },
    })
  }

  const handleDecrement = guestType => {
    if (details[guestType] > (guestType === 'adults' ? 1 : 0)) {
      handleInputChange({
        target: {
          name: guestType,
          value: details[guestType] - 1,
        },
      })
    }
  }

  const handleNext = () => {
    if (adults <= 0) {
      alert('Select at least 1 adult')
    } else {
      nextStep()
    }
  }

  return (
    <div className="guests-container">
      <h1>Guests</h1>
      <p>Select your guests</p>
      <div className="guest-selection">
        <div className="guest-type">
          <p className="guest-title">Adults</p>
          <p className="guest-age">Age 13 or above</p>
          <button
            type="button"
            className="guest-button"
            onClick={() => handleDecrement('adults')}
          >
            -
          </button>
          <p className="guest-count">{adults}</p>
          <button
            className="guest-button"
            type="button"
            onClick={() => handleIncrement('adults')}
          >
            +
          </button>
        </div>
        <div className="guest-type">
          <p className="guest-title">Children</p>
          <p className="guest-age">Age 2-12</p>
          <button
            className="guest-button"
            type="button"
            onClick={() => handleDecrement('children')}
          >
            -
          </button>
          <p className="guest-count">{children}</p>
          <button
            className="guest-button"
            type="button"
            onClick={() => handleIncrement('children')}
          >
            +
          </button>
        </div>
        <div className="guest-type">
          <p className="guest-title">Infants</p>
          <p className="guest-age">Under 2</p>
          <button
            className="guest-button"
            type="button"
            onClick={() => handleDecrement('infants')}
          >
            -
          </button>
          <p className="guest-count">{infants}</p>
          <button
            className="guest-button"
            type="button"
            onClick={() => handleIncrement('infants')}
          >
            +
          </button>
        </div>
      </div>
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

export default Guests
