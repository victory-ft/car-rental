import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="">
      <nav>
        <Link to="/">
          <img src="icons/logo.svg" alt="logo" />
        </Link>

        <div className="search-container">
          <img src="icons/search.svg" alt="search-icon" />
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search something here..."
          />
          <img src="icons/filter.svg" alt="filter-icon" />
        </div>

        <div className="actions">
          <button>
            <img src="icons/heart.svg" alt="favourite" />
          </button>
          <button>
            <img src="icons/notification.svg" alt="favourite" />
          </button>
          <button>
            <img src="icons/setting.svg" alt="favourite" />
          </button>
          <button>
            <img
              src="images/profile.png"
              alt="favourite"
              className="profile-img"
            />
          </button>
        </div>
      </nav>
    </header>
  )
}
