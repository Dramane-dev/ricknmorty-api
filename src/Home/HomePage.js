import React, { Component } from 'react'
// import { Link } from "react-router-dom";
import Post from './Post'
import Loader from '../includes/Loader'

class HomePage extends Component {
    constructor() {
        super()

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((Response) => Response.json())
            .then((Response) => setTimeout(() => this.setState({posts: Response}), 2000 ))
    }

    render() {
    let posts = this.state.posts.map((element, key) => 
            <Post key={key} id={element.id} title={element.title} description={element.body} />
        )

        return (
            <div>
                <div className="container articles-container">
                    { (posts.length === 0) ? <Loader /> : posts} 
                </div>
            </div>
        )
    }
}

export default HomePage