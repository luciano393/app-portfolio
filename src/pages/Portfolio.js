import React from 'react'
import { Footer } from '../components/Footer'
import { Heading } from '../components/Heading'
import { Navbar } from '../components/Navbar'

export const Portfolio = () => {
    return (
        <div>
            <Navbar />
            <section className="Portfolio">
                <Heading text="My" span="Portfolio"/>
            </section>
            <Footer />
        </div>
    )
}
