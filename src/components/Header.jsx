import './Header.css'

function Header({ title, subtitle }) {
  return (
    <header id="home" className="header">
      <div className="container">
        <h1 className="header__title">{title}</h1>
        <p className="header__subtitle">{subtitle}</p>
      </div>
    </header>
  )
}

export default Header
