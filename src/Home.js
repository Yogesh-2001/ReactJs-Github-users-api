import React from 'react'
import './styles.css'

const Home = () => {
    return (
        <div>
            <h1 className='text-center'>Welcome Page</h1>
            <h3 className='text-center'>Github Fetch-Api</h3>
            <img src='https://raw.githubusercontent.com/github/explore/89bdd9644f44d1b12180fd512b95574fe4c54617/topics/github-api/github-api.png' className='welcome'/>
        </div>
    )
}

export default Home
