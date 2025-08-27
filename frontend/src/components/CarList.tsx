import { Link } from '@tanstack/react-router'
import type { Car } from '@/types/types'

interface CarListProps {
  cars: Array<Car>
}

export const CarList = ({ cars }: CarListProps) => {
  if (cars.length === 0) {
    return <div className="no-cars">No cars available</div>
  }

  return (
    <div className="car-list">
      {cars.map((car) => (
        <Link
          to="/car/$id"
          params={{ id: car.id.toString() }}
          key={car.id}
          className="car-card"
        >
          {car.popular && <span className="popular-badge">Popular</span>}
          <div className="car-info">
            <h3 className="car-brand">{car.brand}</h3>
            <h2 className="car-model">{car.model}</h2>
            <h2 className="car-type">{car.type}</h2>
          </div>

          <div className="car-image">
            <img src={car.images[0]} alt={`${car.brand} ${car.model}`} />
            <div className="gradient-bg"></div>
          </div>

          <div className="car-specs">
            <p className="car-spec">
              <img src="/icons/gas-station.svg" alt="gas" />
              {car.range}km
            </p>
            <p className="car-spec">
              <img src="/icons/wheel.svg" alt="wheel" />
              {car.transmission}
            </p>
            <p className="car-spec">
              <img src="/icons/people.svg" alt="people" />
              {car.capacity} people
            </p>
          </div>

          <div className="actions">
            <p className="price">
              ${car.pricePerDay}.00/<span>day</span>
            </p>
            <button className={car.available ? 'primary-btn' : 'disabled-btn'}>
              {car.available ? 'Rent Now' : 'Unavailable'}
            </button>
          </div>
        </Link>
      ))}
    </div>
  )
}
