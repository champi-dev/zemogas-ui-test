import './styles.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="nav" role="navigation">
      <div className="max-centered">
        <h1 className="nav__logo">
          <Link to="/">Rule of thumb.</Link>
        </h1>
        <button className="nav__hamburger icon-button">
          <svg width="25" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 0h25v4H0V0zm0 8h25v4H0V8zm0 8h25v4H0v-4z"
              fill="#FFF"
              fillRule="nonzero"
            />
          </svg>
        </button>
        <ul className="nav__links">
          <li>
            <Link to="past-trials">Past Trials</Link>
          </li>
          <li>
            <Link to="how-it-works">How It Works</Link>
          </li>
          <li>
            <button
              className="nav__search icon-button"
              type="submit"
              data-testid="submit-btn"
            >
              <Link to="search">
                <img src="/assets/img/search.svg" alt="search" />
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
