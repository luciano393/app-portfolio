import React from 'react'
import { Footer } from '../components/Footer'
import { Heading } from '../components/Heading'
import { Navbar } from '../components/Navbar'

export const Contact = () => {
    return (
        <div>
            <Navbar />
            <section className="Contact">
                <Heading text="Contact" span="Me"/>
            </section>
            <Footer />
        </div>
    )
}
