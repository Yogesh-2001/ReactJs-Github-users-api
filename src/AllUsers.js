import React, { useState, useEffect } from 'react'
import User from './User'
import { Grid, Box } from '@material-ui/core';
import './styles.css';
import Loading from './Loading';

const AllUsers = () => {
    const [state, setState] = useState([])
    const [loading, isLoading] = useState(true)

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const response = await fetch('https://api.github.com/users');
        setState(await response.json())
        isLoading(false)
    }

    if (loading) {
        return (
            <Loading />
        )
    }
    
    return (
        <div>
            <h2>Github Users</h2>

            <Grid container className='gridContainer'>
                {
                    state.map((user, key) => {
                        return (
                            <>
                                <User user={user} key={key} />
                            </>
                        )
                    })
                }
            </Grid>

        </div>
    )
}

export default AllUsers
