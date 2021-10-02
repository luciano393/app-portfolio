import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className="FooterWrapper">
            <li>
                <h6>Datos</h6>
                <span className="Footer__item">lucianoib393@gmail.com</span>
                <span className="Footer__item">+54 9 011 2700 9501</span>
                <span className="Footer__item">Buenos Aires, Argentina</span>
            </li>
            <li>
                <h6>Social</h6>
                <div className="social">
                    <Link to="https://github.com/luciano393"><FontAwesomeIcon icon={faGithub} className="icon"/></Link>
                    <Link to="https://www.linkedin.com/in/luciano-alejandro-ibarra "><FontAwesomeIcon icon={faLinkedin} className="icon"/></Link>
                </div>
            </li>
        </div>
    )
}
