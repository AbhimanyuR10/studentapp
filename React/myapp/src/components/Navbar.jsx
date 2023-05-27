import React from 'react';
import { AppBar,Toolbar,Button } from '@mui/material'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
           <AppBar>
            <Toolbar>
                <Button><Link to={'/'}>Home</Link></Button>
                <Button variant='text'><Link to='/'>Table</Link></Button>
                <Button variant='text'><Link to='/Add'>First</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar