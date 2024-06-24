import React, {useState} from 'react'
import Header from '../Header'
import YourDetails from '../YourDetails'
import DateSelection from '../DateSelection'
import Guests from '../Guests'
import TravelAssistance from '../TravelAssistance'
import Confirmation from '../Confirmation'
import ProgressBar from '../ProgressBar' // Import the ProgressBar component
import './index.css'

const initialSteps = [
  {displayText: 'Your Details'},
  {displayText: 'Date Selection'},
  {displayText: 'Guests'},
  {displayText: 'Travel Assistance'},
  {displayText: 'Confirmation'},
]

const BookANewTrip = () => {
  const [step, setStep] = useState(0) // Initialize step to 0 (Your Details)
  const [details, setDetails] = useState({
    name: '',
    startLocation: '',
    endLocation: '',
    startDate: '',
    endDate: '',
    adults: 1,
    children: 0,
    infants: 0,
    travelAssistance: false,
    selectedAssistance: '',
  })

  // Function to move to the next step
  const nextStep = () => setStep(step + 1)

  // Function to move to the previous step
  const prevStep = () => {
    // Ensure we don't go below the first step
    if (step > 0) {
      setStep(step - 1)
    }
  }

  // Function to reset the steps and details
  const resetSteps = () => {
    setStep(0)
    setDetails({
      name: '',
      startLocation: '',
      endLocation: '',
      startDate: '',
      endDate: '',
      adults: 1,
      children: 0,
      infants: 0,
      travelAssistance: false,
      selectedAssistance: '',
    })
  }

  // Function to handle input changes in form fields
  const handleInputChange = e => {
    const {name, value, type, checked} = e.target
    setDetails({
      ...details,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  // Render steps based on the current step index
  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <YourDetails
            details={details}
            handleInputChange={handleInputChange}
            nextStep={nextStep}
            initialSteps={initialSteps}
          />
        )
      case 1:
        return (
          <DateSelection
            details={details}
            handleInputChange={handleInputChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )
      case 2:
        return (
          <Guests
            details={details}
            handleInputChange={handleInputChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )
      case 3:
        return (
          <TravelAssistance
            details={details}
            handleInputChange={handleInputChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )
      case 4:
        return (
          <Confirmation
            details={details}
            nextStep={nextStep}
            prevStep={prevStep}
            resetSteps={resetSteps}
          />
        )
      default:
        return null
    }
  }

  return (
    <div>
      <Header />
      <ProgressBar steps={initialSteps} currentStep={step} />
      <main>{renderStep()}</main>
    </div>
  )
}

export default BookANewTrip
