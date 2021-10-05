import React from 'react'
import { Footer } from '../components/Footer'
import { Heading } from '../components/Heading'
import { Navbar } from '../components/Navbar'
import { ProjectContent } from '../components/ProjectContent';

import imageOne from '../assets/images/GetStartedMobile.png';
import imageTwo from '../assets/images/MainMobile.png';


export const Portfolio = () => {
    return (
        <div>
            <Navbar />
            <section className="Portfolio">
                <Heading text="My" span="Portfolio"/>
                <div className="box-container">
                    <ProjectContent
                     imageOne={imageOne}
                     imageTwo={imageTwo}
                     title="Payments"
                     info="App Web FullStack made in MongoDB, Express JS, React JS y Node JS"
                    />
                </div>
            </section>
            <Footer />
        </div>
    )
}
