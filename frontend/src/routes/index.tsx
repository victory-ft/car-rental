import { createFileRoute } from '@tanstack/react-router'
import { LocationTimeSelector } from '@/components/LocationTimeSelector'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <main className="main-content">
      <div className="cta-container">
        <div className="cta cta-one">
          <div className="cta-text">
            <h1 className="header cta-header">
              The Best Platform for Car Rentals
            </h1>
            <p className="cta-subheader">
              Ease of doing a car rental safely and reliably. Of course at a low
              price.
            </p>
            <button className="primary-btn">Rent Car</button>
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
            <button className="secondary-btn">Rent Car</button>
            <img src="images/car2.png" alt="car" />
          </div>
        </div>
      </div>
      <LocationTimeSelector />
    </main>
  )
}
