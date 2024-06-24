import React from 'react'
import './index.css'

const ProgressBar = ({steps, currentStep}) => (
  <div className="progress-bar">
    {steps.map((step, index) => (
      <div
        key={step.displayText} // Use displayText or another unique identifier instead of index
        className={`step ${index === currentStep ? 'active' : ''}`} // Highlight only the current step
      >
        {step.displayText}
      </div>
    ))}
  </div>
)

export default ProgressBar
