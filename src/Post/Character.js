import React, { Component, useEffect, useState } from 'react'
import Character from '../Home/Character.jsx'
import axios from 'axios';

function OneCharachter() {
    const [url, setUrl] = useState('https://rickandmortyapi.com/api/character/:id')
    const [info, setInfo] = useState({})
    const [results, setResults] = useState([])


    useEffect(() => {
        console.log('url', url)
        console.log('info', info)
        console.log('results', results)
    }, [url, info, results])

    useEffect(() => {
        axios.get(`${url}`)
            .then((result) => {
                setInfo(result.data.info)
                setResults(result.data.results)
            })
            .catch(error => console.log(error))
    })

    return (
        <>
        <div className="container charachter-container">
            <div className="post">
                <div>
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                </div>
            </div>
        </div>
        </>
    )
}

/* class CharacterPage extends Component {
    constructor() {
        super()

        this.state = {
            character: []
        }
    }

    componentDidMount(){
        let id = this.state.id
        fetch('https://rickandmortyapi.com/api/character/' + id)
            .then((Response) => Response.json())
            .then((Response) => setTimeout(this.setState({post: Response}), 2000))
    }

    render() {

        return (
            <div className="container character-container">
                <div className="post">
                    <div>
                        <h1>{this.state.character.name}</h1>
                        <span className="status_icon">
                            <p> status : {this.state.character.status} - {this.state.character.gender}</p>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
} */

export default OneCharachter