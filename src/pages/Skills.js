import { faDesktop, faMobile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Heading } from '../components/Heading'
import { Navbar } from '../components/Navbar'
import { Technologies } from '../components/Technologies'
import { ButtonComponent} from '../components/ButtonComponent';

export const Skills = () => {
    return (
        <div>
            <Navbar />
            <section className="Skills">
                <Heading text="My" span="Skills"/>
                <div className="box-container">
                    <div className="box">
                        <FontAwesomeIcon icon={faDesktop} className="icon"/>
                        <h3>Web developer</h3>
                        <Link to="/about">
                            <ButtonComponent text="Read more" className="btn primary"/>
                        </Link>
                    </div>
                    <div className="box">
                        <FontAwesomeIcon icon={faMobile} className="icon"/>
                        <h3>App Web developer</h3>
                        <Link to="/about">
                            <ButtonComponent text="Read more" className="btn primary"/>
                        </Link>
                    </div>
                </div>
                <Technologies />
            </section>
            <Footer />
        </div>
    )
}
