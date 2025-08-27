import { useEffect, useRef, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import api from '@api/axios'
import type { Car } from '@/types/types'
import { LocationTimeSelector } from '@/components/LocationTimeSelector'
import { CarList } from '@/components/CarList'

export const Route = createFileRoute('/categories/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [cars, setCars] = useState<Array<Car>>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [priceValue, setPriceValue] = useState<number>(500)
  const sliderRef = useRef<HTMLInputElement>(null)

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    setPriceValue(value)

    const percentage = (value / parseInt(e.target.max)) * 100
    e.target.style.setProperty('--value', percentage + '%')
  }

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await api.get('/cars')
        const allCars: Array<Car> = response.data
        setCars(allCars)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch cars')
      } finally {
        setLoading(false)
      }
    }

    fetchCars()
  }, [])

  return (
    <div className="categories-container">
      <aside className="sidebar">
        <h3 className="category">BODY TYPE</h3>
        <div className="category-items">
          <div className="category-item">
            <input type="checkbox" id="sedan" />
            <label htmlFor="sedan">Sedan</label>
          </div>

          <div className="category-item">
            <input type="checkbox" id="hatchback" />
            <label htmlFor="hatchback">Hatchback</label>
          </div>

          <div className="category-item">
            <input type="checkbox" id="suv" />
            <label htmlFor="suv">SUV</label>
          </div>

          <div className="category-item">
            <input type="checkbox" id="truck" />
            <label htmlFor="truck">Truck</label>
          </div>

          <div className="category-item">
            <input type="checkbox" id="convertible" />
            <label htmlFor="convertible">Convertible</label>
          </div>

          <div className="category-item">
            <input type="checkbox" id="sportscar" />
            <label htmlFor="sportscar">Sportscar</label>
          </div>

          <div className="category-item">
            <input type="checkbox" id="minivan" />
            <label htmlFor="minivan">Minivan</label>
          </div>
        </div>

        <h3 className="category">FUEL TYPE</h3>
        <div className="category-items">
          <div className="category-item">
            <input type="checkbox" id="petrol" />
            <label htmlFor="petrol">Petrol</label>
          </div>

          <div className="category-item">
            <input type="checkbox" id="electric" />
            <label htmlFor="electric">Electric</label>
          </div>

          <div className="category-item">
            <input type="checkbox" id="diesel" />
            <label htmlFor="diesel">Diesel</label>
          </div>

          <div className="category-item">
            <input type="checkbox" id="hybrid" />
            <label htmlFor="hybrid">Hybrid</label>
          </div>
        </div>

        <h3 className="category">TRANSMISSION</h3>
        <div className="category-items">
          <div className="category-item">
            <input type="checkbox" id="automatic" />
            <label htmlFor="automatic">Automatic</label>
          </div>

          <div className="category-item">
            <input type="checkbox" id="manual" />
            <label htmlFor="manual">Manual</label>
          </div>
        </div>

        <h3 className="category">CAPACITY</h3>
        <div className="category-items">
          <div className="category-item">
            <input type="checkbox" id="capacity-2" />
            <label htmlFor="capacity-2">2 Seats</label>
          </div>

          <div className="category-item">
            <input type="checkbox" id="capacity-4" />
            <label htmlFor="capacity-4">4 Seats</label>
          </div>

          <div className="category-item">
            <input type="checkbox" id="capacity-5" />
            <label htmlFor="capacity-5">5 Seats</label>
          </div>

          <div className="category-item">
            <input type="checkbox" id="capacity-7" />
            <label htmlFor="capacity-7">7 Seats</label>
          </div>

          <div className="category-item">
            <input type="checkbox" id="capacity-8" />
            <label htmlFor="capacity-8">8+ Seats</label>
          </div>
        </div>

        <h3 className="category">PRICE</h3>
        <div className="category-item">
          <input
            ref={sliderRef}
            type="range"
            min="0"
            max="500"
            value={priceValue}
            className="price-slider"
            onChange={handleSliderChange}
            style={
              {
                '--value': `${(priceValue / 500) * 100}%`,
              } as React.CSSProperties
            }
          />
          <p className="price-value">Max. ${priceValue}.00</p>
        </div>
      </aside>

      <main className="categories-content-container">
        <div className="categories-content">
          <LocationTimeSelector />
          <section className="car-list-section">
            {loading && <p>Loading cars...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && <CarList cars={cars} />}
          </section>
        </div>
      </main>
    </div>
  )
}
