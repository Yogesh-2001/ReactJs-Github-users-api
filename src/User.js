import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import './styles.css';
const User = ({ user, key }) => {
    return (
        <div>
            <Grid item className='item' style={{ margin: '10px' }}>
                <img src={user.avatar_url} className='image' />
                <Typography variant='subtitle1' color='Secondary' align='center'>
                    {user.login}
                </Typography>
                <Typography align='center'>
                    Followers:{Math.floor((Math.random() * 1000))}
                </Typography>
                <Typography align='center'>
                    Rating :{Math.floor((Math.random() * 10))}
                </Typography>
                <a href={user.html_url} target="_blank">Github Profile Link</a>
            </Grid>
        </div>
    )
}

export default User
