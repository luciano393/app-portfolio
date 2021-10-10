import React from 'react'
import foto from '../assets/images/foto.png'
import { ButtonComponent } from './ButtonComponent'
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className="Home">
            <div className="HomeWrapper">
                <img src={foto} alt=""/>
                <h1>Luciano <span>Ibarra</span></h1>
                <p>I'am <span>front end developer</span></p>
                <Link to="/about">
                    <ButtonComponent className="btn primary"
                    text="About me"
                    />
                </Link>
            </div>
        </div>
    )
}
