import React from 'react';
import '../styles/App.css'

import Home from './Home'
import Solution from "./Solution";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
    return (
        <div className='mainContainer'>
            <Router>
                <Switch>
                    <Route exact path = '/' component={Home} />
                    <Route exact path = '/solution/' component={Solution} />
                </Switch>
            </Router>
        </div>
    )
}

export default App