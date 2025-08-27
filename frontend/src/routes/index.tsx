import { useEffect, useMemo, useState } from 'react'
// eslint-disable-next-line sort-imports
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import api from '@api/axios'
import type { Car } from '@/types/types'
import { CarList } from '@/components/CarList'
import { LocationTimeSelector } from '@/components/LocationTimeSelector'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const [cars, setCars] = useState<Array<Car>>([])
  const [popularCars, setPopularCars] = useState<Array<Car>>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  function getRandomCars(cars: Array<Car>, count: number): Array<Car> {
    const shuffled = [...cars].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate({ to: '/categories' })
  }

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await api.get('/cars')
        const allCars: Array<Car> = response.data
        setCars(allCars)
        const popular = allCars.filter((car) => car.popular === true)
        setPopularCars(popular)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch cars')
      } finally {
        setLoading(false)
      }
    }

    fetchCars()
  }, [])

  const randomCars: Array<Car> = useMemo(() => getRandomCars(cars, 10), [cars])

  return (
    <main className="main-content">
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta cta-one">
            <div className="cta-text">
              <h1 className="header cta-header">
                The Best Platform for Car Rentals
              </h1>
              <p className="cta-subheader">
                Ease of doing a car rental safely and reliably. Of course at a
                low price.
              </p>
              <button className="primary-btn" onClick={handleButtonClick}>
                Find a Car
              </button>
            </div>
            <img src="images/porsche.png" alt="car" />
          </div>
          <div className="cta cta-two">
            <div className="cta-text">
              <h1 className="header cta-header">
                Easy way to rent a car at a low price
              </h1>
              <p className="cta-subheader">
                Providing cheap car rental services and safe and comfortable
                facilities.
              </p>
              <button className="secondary-btn" onClick={handleButtonClick}>
                Find a Car
              </button>
              <img src="images/car2.png" alt="car" />
            </div>
          </div>
        </div>
      </section>
      <LocationTimeSelector />

      <section className="car-list-section">
        <div className="car-list-header">
          <h2>Popular Cars</h2>
          <Link to="/categories">View More</Link>
        </div>
        {loading && <p>Loading cars...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && <CarList cars={popularCars} />}
      </section>

      <section className="car-list-section">
        <div className="car-list-header">
          <h2>Recommended Cars</h2>
        </div>
        {loading && <p>Loading cars...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && <CarList cars={randomCars} />}
      </section>
    </main>
  )
}
