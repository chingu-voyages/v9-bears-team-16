import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="header-nav">
      <Link className="header-nav-buttons" to="/" title="Home">
        Home
      </Link>
      <Link className="header-nav-buttons" to="/themes" title="Themes">
        Themes
      </Link>
      <Link className="header-nav-buttons" to="/colors" title="Colors">
        Colors
      </Link>
      <Link className="header-nav-buttons" to="/fonts" title="Fonts">
        Fonts
      </Link>
    </nav>
  )
}
