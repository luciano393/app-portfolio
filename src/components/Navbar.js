import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className="NavbarWrapper">
            <nav className="Navbar">
                <Link to="/" className="Navbar__item">Home</Link>
                <Link to="/portfolio" className="Navbar__item">Portfolio</Link>
                <Link to="/" className="Navbar__item">Skills</Link>
                <Link to="/" className="Navbar__item">About</Link>
                <Link to="/" className="Navbar__item">Contact</Link>
            </nav>
        </div>
    )
}