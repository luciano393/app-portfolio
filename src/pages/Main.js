import React from 'react'
import { Footer } from '../components/Footer'
import { Home } from '../components/Home'
import { Navbar } from '../components/Navbar'

export const Main = () => {
    return (
        <div className="Main">
            <Navbar />
            <Home />
            <Footer />
        </div>
    )
}
