import { CartIcon } from './Icons'
import './Navbar.css'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#products', label: 'Products' },
]

function Navbar({ brand, cartCount, onCartClick }) {
  const itemsLabel = `${cartCount} ${cartCount === 1 ? 'item' : 'items'}`

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

        <button
          type="button"
          className="navbar__cart"
          onClick={onCartClick}
          aria-label={`Open cart, ${itemsLabel}`}
        >
          <CartIcon />
          <span className="navbar__cart-count" aria-hidden="true">
            {cartCount}
          </span>
        </button>
        <span className="visually-hidden" role="status">
          {itemsLabel} in cart
        </span>
      </div>
    </nav>
  )
}

export default Navbar
