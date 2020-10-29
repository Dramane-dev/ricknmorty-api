import React from 'react'
import { Link } from 'react-router-dom'

/* const Character = (props) => 
    <Link className="article" to={"/charchater/" + props.result.id}>
        <article>
            <img src={props.result.image} alt={`Photo of ${props.result.name}`} />
            <p>Name : {props.result.name}</p>
            <span className="status_icon"></span>
            <p>{props.result.status} - {props.result.gender}</p>
            <p>Gender : {props.result.gender}</p>
        </article>
    </Link> */

const Character = (props) => {
    return (
        <article>
            <img src={props.result.image} alt={`Photo of ${props.result.name}`} />
            <p>Name : {props.result.name}</p>
            <span className="status_icon"></span>
            <p>{props.result.status} - {props.result.gender}</p>
            <p>Gender : {props.result.gender}</p>
        </article>
    )
}

export default Character