import { faCss3Alt, faGithub, faHtml5, faJs, faLinux, faNode, faNpm, faReact, faSass } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'
import { Heading } from './Heading'

export const Technologies = () => {
    return (
        <section className="Technologies">
            <Heading text="My" span="Technologies"/>
            <div className="box-container">
                <FontAwesomeIcon icon={faReact} className="icons"/>
                <FontAwesomeIcon icon={faJs} className="icons"/>
                <FontAwesomeIcon icon={faSass} className="icons"/>
                <FontAwesomeIcon icon={faNode} className="icons"/>
                <FontAwesomeIcon icon={faCss3Alt} className="icons"/>
                <FontAwesomeIcon icon={faHtml5} className="icons"/>
                <FontAwesomeIcon icon={faLinux} className="icons"/>
                <FontAwesomeIcon icon={faNpm} className="icons"/>
            </div>      
        </section>
    )
}
