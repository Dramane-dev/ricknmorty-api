import React from 'react'
import { Link } from 'react-router-dom'

const Post = (props) => 
    <Link className="article" to={"/post/" + props.id}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </Link>

export default Post