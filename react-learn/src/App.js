import React from 'react'
import Login from './pages/login'
import Admin from './pages/admin'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} exact />
                <Route path="/" component={Admin} />
            </Switch>
        </Router>
    )
}
