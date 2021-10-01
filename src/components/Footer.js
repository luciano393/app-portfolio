import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className="FooterWrapper">
            <li>
                <h6>Links</h6>
                <Link to="/" className="Footer__item">Home</Link>
                <Link to="/" className="Footer__item">Portfolio</Link>
                <Link to="/" className="Footer__item">Skills</Link>
                <Link to="/" className="Footer__item">About</Link>
                <Link to="/" className="Footer__item">Contact</Link>
            </li>
            <li>
                <h6>Datos</h6>
                <span className="Footer__item">lucianoib393@gmail.com</span>
                <span className="Footer__item">+54 9 011 2700 9501</span>
                <span className="Footer__item">Buenos Aires, Argentina</span>
            </li>
            <li>
                <h6>Social</h6>
                <Link to="https://github.com/luciano393" className="Footer__item">Github</Link>
                <Link to="https://www.linkedin.com/in/luciano-alejandro-ibarra " className="Footer__item">Linkedin</Link>
            </li>
        </div>
    )
}
