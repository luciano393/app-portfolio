import React from 'react'
import { Footer } from '../components/Footer'
import { Heading } from '../components/Heading'
import { Navbar } from '../components/Navbar'

export const About = () => {
    return (
        <div>
            <Navbar />
            <section className="About">
                <Heading text="About" span="Me"/>
                <div className="box-container">
                    <h3>Hi! I'm a <span>full stack web developer</span></h3>
                    <p>I like challenges and testing my knowledge. I have a great passion for web development and web applications. I work with the JavaScript programming language and technologies based on it.</p>
                    <p>I have knowledge of Mongo DB, Express js, Node js, and React js. </p>
                </div>
            </section>
            <Footer />
        </div>
    )
}
