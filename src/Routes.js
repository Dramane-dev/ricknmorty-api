import React from 'react'
import HomePage from './Home/HomePage'
import Header from './includes/Header'
import { BrowserRouter as Router, Route } from "react-router-dom";
import CharacterPage from './Post/Character';

// Compononent 
const Routes = () => (
    <Router>
        <div>
            <Header />
            <Route exact path="/" component={HomePage}/>
            <Route path="/character/:id" component={CharacterPage}/>
        </div>
    </Router>
)

export default Routes