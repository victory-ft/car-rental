import { useEffect, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import api from '../../../api/axios'
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
    <div className="categories-content">
      <LocationTimeSelector />
      <section className="car-list-section">
        {loading && <p>Loading cars...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && <CarList cars={cars} />}
      </section>
    </div>
  )
}
