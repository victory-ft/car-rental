export const LocationTimeSelector = () => {
  return (
    <div className="location-time-container">
      <div className="lt-item pickup">
        <p className="lt-header">Pick-Up</p>
        <div className="lt-picker">
          <div className="field-group">
            <p className="field-header">Location</p>
            <button className="field-selector">
              <p className="field-subheader">Select your city</p>
              <img src="/icons/arrow-down.svg" alt="arrow-down" />
            </button>
          </div>

          <div className="field-group">
            <p className="field-header">Date</p>
            <button className="field-selector">
              <p className="field-subheader">Select date</p>
              <img src="/icons/arrow-down.svg" alt="arrow-down" />
            </button>
          </div>

          <div className="field-group">
            <p className="field-header">Time</p>
            <button className="field-selector">
              <p className="field-subheader">Select time</p>
              <img src="/icons/arrow-down.svg" alt="arrow-down" />
            </button>
          </div>
        </div>
      </div>
      <button className="swap-btn">
        <img src="/icons/swap.svg" alt="swap" />
      </button>
      <div className="lt-item drop-off">
        <p className="lt-header">Drop-Off</p>
        <div className="lt-picker">
          <div className="field-group">
            <p className="field-header">Location</p>
            <button className="field-selector">
              <p className="field-subheader">Select your city</p>
              <img src="/icons/arrow-down.svg" alt="arrow-down" />
            </button>
          </div>

          <div className="field-group">
            <p className="field-header">Date</p>
            <button className="field-selector">
              <p className="field-subheader">Select date</p>
              <img src="/icons/arrow-down.svg" alt="arrow-down" />
            </button>
          </div>

          <div className="field-group">
            <p className="field-header">Time</p>
            <button className="field-selector">
              <p className="field-subheader">Select time</p>
              <img src="/icons/arrow-down.svg" alt="arrow-down" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
