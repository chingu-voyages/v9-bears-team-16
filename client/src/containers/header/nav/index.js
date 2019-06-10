import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
      <Link to="/" title="Home">
        Home
      </Link>
      <Link to="/themes" title="Themes">
        Themes
      </Link>
      <Link to="/colors" title="Colors">
        Colors
      </Link>
      <Link to="/fonts" title="Fonts">
        Fonts
      </Link>
    </nav>
  )
}
