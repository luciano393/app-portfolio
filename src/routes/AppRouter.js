import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router,
        Route, 
        Switch } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { About } from '../pages/About'
import { Main } from '../pages/Main'
import { Portfolio } from '../pages/Portfolio'
import { Skills } from '../pages/Skills'


export const AppRouter = () => {

    return (
        <div className="AppRouter">
            <Router>
                <div>
                    <Navbar />
                        <Switch>
                            <Route path="/"
                            exact
                            component={Main}
                            />

                            <Route 
                            path="/portfolio"
                            exact
                            component={Portfolio}
                            />

                            <Route 
                            path="/skills"
                            exact
                            component={Skills}
                            />

                            <Route 
                            path="/about"
                            exact
                            component={About}
                            />
                        </Switch>
                    <Footer />
                </div>
            </Router>
        </div>
    )
}
