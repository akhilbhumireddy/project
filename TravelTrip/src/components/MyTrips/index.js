import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const MyTrips = () => {
  const [trips, setTrips] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchTrips = () => {
      const storedTrips = JSON.parse(localStorage.getItem('trips')) || []
      setTrips(storedTrips)
      setIsLoading(false)
    }

    fetchTrips()
  }, [])

  const generateUniqueKey = trip =>
    `${trip.startDate}-${trip.endDate}-${trip.startLocation}-${trip.endLocation}`

  const handleCancelTrip = tripKey => {
    // Filter out the trip with the given key
    const updatedTrips = trips.filter(
      trip => generateUniqueKey(trip) !== tripKey,
    )

    // Update state and localStorage
    setTrips(updatedTrips)
    localStorage.setItem('trips', JSON.stringify(updatedTrips))
  }

  return (
    <div className="my-trips-container">
      <Header />
      <main>
        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="trips-list">
            <h1 className="title">My Trips</h1>
            <ul className="trips-ul">
              {trips.length === 0 ? (
                <div className="no-trips">
                  <img
                    className="no-trips-img"
                    src="https://res.cloudinary.com/dkidc6jca/image/upload/v1719040624/Frame_1000003903_pfflen.png"
                    alt="no trips"
                  />
                  <h2 className="no-trips-heading">No upcoming trips</h2>
                  <p className="no-trips-text">
                    When you book a trip, you will see your trip details here
                  </p>
                  <Link to="/book-a-new-trip">
                    <button className="book-button" type="button">
                      Book a new trip
                    </button>
                  </Link>
                </div>
              ) : (
                trips.map(trip => (
                  <li key={generateUniqueKey(trip)} className="trip-item">
                    <div className="trip-details">
                      <p className="trip-info">
                        End Location: <span>{trip.endLocation}</span>
                      </p>
                      <p className="trip-info">
                        Start Date: <span>{trip.startDate}</span>
                      </p>
                      <p className="trip-info">
                        End Date: <span>{trip.endDate}</span>
                      </p>
                    </div>
                    <button
                      className="cancel-button"
                      type="button"
                      onClick={() => handleCancelTrip(generateUniqueKey(trip))}
                    >
                      Cancel
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        )}
      </main>
    </div>
  )
}

export default MyTrips
