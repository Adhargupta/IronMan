import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo" aria-label="Logo">
        <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <polyline points="0,14 10,4 20,14 10,24" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
          <polyline points="16,14 26,4 36,14 26,24" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
        </svg>
      </div>

      <ul className="navbar__links">
        <li><a href="#about">About</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#cart">Cart</a></li>
      </ul>

      <button className="navbar__signup">Sign up</button>
    </nav>
  )
}

export default Navbar
