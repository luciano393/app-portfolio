import React from 'react';
import { Heading } from '../components/Heading';


export const About = () => {
    return (
        <div>
            <section className="About">
                <Heading text="About" span="Me"/>
                <div className="box-container">
                    <h3>Hi! I'm a <span>full stack web developer</span></h3>
                    <p>I like challenges and testing my knowledge. I have a great passion for web development and web applications. I work with the JavaScript programming language and technologies based on it.</p>
                    <p>I have knowledge of Mongo DB, Express js, Node js, and React js. </p>
                </div>
            </section>
        </div>
    )
}
