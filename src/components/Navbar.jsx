import { CartIcon } from './Icons'
import './Navbar.css'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#products', label: 'Products' },
]

function Navbar({ brand, cartCount }) {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar__inner container">
        <a href="#home" className="navbar__brand">
          <span className="navbar__logo" aria-hidden="true">
            <CartIcon size={18} />
          </span>
          {brand}
        </a>

        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__cart" role="status" aria-live="polite">
          <CartIcon />
          <span className="navbar__cart-count">{cartCount}</span>
          <span className="visually-hidden">items in cart</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
