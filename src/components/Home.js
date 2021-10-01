import React from 'react'
import foto from '../assets/images/foto.png'

export const Home = () => {
    return (
        <div className="Home">
            <div className="HomeWrapper">
                <img src={foto} alt=""/>
                <h3>Luciano <span>Ibarra</span></h3>
                <p>I'am <span>full stack developer</span></p>
            </div>
        </div>
    )
}
