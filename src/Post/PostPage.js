import React, { Component } from 'react'
import Comment from './Comment'
import profileImage from '../images/profile.png'
import Loader from '../includes/Loader'

class PostPage extends Component {
    constructor() {
        super()

        this.state = {
            post: [],
            comments: []
        }
    }

    componentDidMount(){
        let id = this.props.match.params.id
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            .then((Response) => Response.json())
            .then((Response) => setTimeout(this.setState({post: Response}), 2000))

        fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
            .then((Response) => Response.json())
            .then((Response) => this.setState({comments: Response}))
    }

    render() {

        let comments = this.state.comments.map( (element, key) => 
            <Comment key={key} email={element.email} comment={element.body} src={profileImage}/>
        )

        return (
            <div className="container post-container">
                <div className="post">
                    { (this.state.post.length === 0) ? <Loader /> : 
                        <div>
                            <h1>{this.state.post.title}</h1>
                            <p>{this.state.post.body}</p>
                        </div> 
                    }
                </div>

                <div className="comments-container">
                    <h2 className="comment-title">Commentaires</h2>
                    { (comments.length === 0) ? <Loader /> : comments}
                    
                </div>
            </div>
        )
    }
}

export default PostPage