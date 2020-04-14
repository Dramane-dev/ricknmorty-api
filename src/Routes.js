import React from 'react'

import HomePage from './Home/HomePage'
import PostPage from './Post/PostPage'
import Header from './includes/Header'
import { BrowserRouter as Router, Route } from "react-router-dom";

// Compononent 
const Routes = () => (
    <Router>
        <div>
            <Header />
            <Route exact path="/" component={HomePage}/>
            <Route path="/post/:id" component={PostPage}/>
        </div>
    </Router>
)

export default Routes