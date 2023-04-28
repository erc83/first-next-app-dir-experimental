import Link from 'next/link'
import React from 'react'
import style from './Navbar.module.css'
import { ActiveLink } from './ActiveLink'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" >
                <li className="nav-item">
                    <ActiveLink text="Home" href="/" />
                </li>
                <li className="nav-item">
                    <ActiveLink text="About" href="/about" />
                </li>
                <li className="nav-item">
                    <ActiveLink text="Dashboard" href="/dashboard" />
                </li>
                <li className="nav-item">
                    <ActiveLink text="Contacto" href="/contact" />
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar