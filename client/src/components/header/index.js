import React from 'react'

import NavBar from './nav'
import './header.scss';

export default function Header() {
  return (
    <div className="header">
      <h1 className="header-title">Theme Selector</h1>
      {/* <h1>Header Component</h1> */}
      <NavBar />
    </div>
  )
}
