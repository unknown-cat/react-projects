import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTour = tours.filter(tour => tour.id !== id)
    setTours(newTour)
  }

  const fetchTours = async () => {
    setLoading(true)

    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  return (
    <main>
      {loading
        ? <Loading />
        : <Tours tours={tours} removeTour={removeTour} />
      }
      {tours.length === 0
        ? <div className="title">
          <h2>no tours left</h2>
          <button onClick={fetchTours} className='btn'>refresh</button>
        </div> 
        : null
      }
    </main>
  )
}

export default App
