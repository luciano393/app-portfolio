import Hamburger from 'hamburger-react';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isOpen, setOpen] = useState(false);

    const toggleNav = () => {
        setOpen(!isOpen)
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])


    return (
        <div className="NavbarWrapper">
            {(isOpen || screenWidth > 780) && (
                <nav className="Navbar">
                    <Link to="/" className="Navbar__item" onClick={toggleNav}>Home</Link>
                    <Link to="/portfolio" className="Navbar__item" onClick={toggleNav}>Portfolio</Link>
                    <Link to="/skills" className="Navbar__item" onClick={toggleNav}>Skills</Link>
                    <Link to="/about" className="Navbar__item" onClick={toggleNav}>About</Link>
                </nav>
            )}
            <div className="hamburger-btn" onClick={toggleNav}>
                <Hamburger toggled={isOpen} toggle={setOpen}/>
            </div>
        </div>
    )
}
