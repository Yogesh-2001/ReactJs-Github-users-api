import React from 'react'
import { AppBar,Toolbar,Button,Typography} from '@material-ui/core'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
        <AppBar position='static'>
            <Toolbar>
                <Button variant='contained' size='small' color='secondary' component={Link} to={`/allusers`}>Get Users</Button>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Navbar
