import React from 'react'
import { BrowserRouter as Router,
        Route, 
        Switch } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Main } from '../pages/Main'
import { Portfolio } from '../pages/Portfolio'

export const AppRouter = () => {
    return (
        <div>
            <Router>
                <div>
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
                        
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
