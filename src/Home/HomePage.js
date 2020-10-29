import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Character from './Character.jsx';

function App() {
    const [url, setUrl] = useState('https://rickandmortyapi.com/api/character/?name=')
    const [info, setInfo] = useState({})
    const [results, setResults] = useState([])
    const [search, setSearch] = useState('')
  
    useEffect(() => {
      console.log('url', url)
      console.log('info', info)
      console.log('results', results)
      console.log('search', search)
    }, [url, info, results, search])


    useEffect(() => {
      axios.get(`${url}${search}`)
        .then((result) => {
          setInfo(result.data.info)
          setResults(result.data.results)
        })
        .catch((error) => {
          console.log(error)
        })
    }, [search])
  
  
    return (
        <>
            <header className="search">
                <p>Rechercher : </p><input className='searchBar' onChange={(e) => {
                    setSearch(e.target.value)
                }}
                    value={search}
                    type='text' />
            </header>
            <div className="container character-container">
                { results.map((result, index) => (
                  <Character key={index} result={result} />
                ))}
            </div>
        </>
    );
  }

export default App