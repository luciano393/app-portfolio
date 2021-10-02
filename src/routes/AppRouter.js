import React from 'react'
import { BrowserRouter as Router,
        Route, 
        Switch } from 'react-router-dom'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { Main } from '../pages/Main'
import { Portfolio } from '../pages/Portfolio'
import { Skills } from '../pages/Skills'

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
                </div>
            </Router>
        </div>
    )
}
