import logo from '../../Assests/logo.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Fab from '@mui/material/Fab';

import '../../ComponentsStyle/Navbar.css';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const [fabMenuOpen, setFabMenuOpen] = useState(false);

    const FabMenu = () => {
        setFabMenuOpen(!fabMenuOpen);
    };

    return (
        <div className='nb'>
            <nav className='navbar'>
                <div className='img'>
                    <center>
                        <Link to={'/'}>
                            <img
                                id='logo'
                                src={logo}
                                alt="LOGO"
                            />
                        </Link>
                    </center>
                </div>
                <div className='links'>
                    <Link className='link' to={'/'}>Home</Link>
                    <HashLink className='link' smooth to='/#Kitchen' > Choose Kitchen </HashLink>
                    <Link className='link' to={'/PopularRecipes'}>Recipes</Link>
                    <Link className='link' to={'/AboutUs'}>About us</Link>
                    <HashLink className='link' smooth to='/#ContactUs' > Contact us </HashLink>
                </div>
                <div className='button'>
                    <div className='Dialog'>
                        <Button variant="outlined" onClick={handleClick}>
                            Sign Up
                        </Button>
                        <Dialog open={open} onClose={handleClick} >
                            <DialogTitle>Form</DialogTitle>
                            <DialogContent >
                                <DialogContentText
                                    style={
                                        {
                                            fontFamily: 'PoppinsM',
                                            fontSize: '30px',
                                            textAlign: 'center',
                                            margin: '20px',
                                            color: 'black'
                                        }
                                    }>
                                    Create an Account
                                </DialogContentText>
                                <TextField
                                    autoFocus
                                    id="name"
                                    label="Full Name"
                                    type="email"
                                    fullWidth
                                    variant="outlined"
                                    style={
                                        {
                                            fontFamily: 'PoppinsM',
                                            margin: '10px 0px',
                                            padding: '10px 6px',
                                            color: 'black'
                                        }
                                    }
                                />
                                <TextField
                                    id="email"
                                    label="Email Address"
                                    type="email"
                                    fullWidth
                                    variant="outlined"
                                    style={
                                        {
                                            fontFamily: 'PoppinsM',
                                            padding: '10px 6px',
                                            color: 'black'
                                        }
                                    }
                                />
                                <TextField
                                    margin="dense"
                                    id="password"
                                    label="Password"
                                    type="password"
                                    fullWidth
                                    autoComplete="current-password"
                                    style={
                                        {
                                            fontFamily: 'PoppinsM',
                                            padding: '10px 6px',
                                            color: 'black'
                                        }
                                    }
                                />
                                <DialogContentText
                                    style={
                                        {
                                            fontFamily: 'PoppinsM',
                                            fontSize: '15px',
                                            textAlign: 'center',
                                            margin: '20px',
                                            color: '#c84917'
                                        }
                                    }>
                                    Already have an account?
                                    <Button
                                        onClick={handleClick}
                                        style={
                                            {
                                                fontFamily: 'PoppinsM',
                                                // padding: '15px',
                                                margin: '0px',
                                                color: '#c84917'
                                            }
                                        }
                                    >
                                        Login
                                    </Button>
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button
                                    onClick={handleClick}
                                    style={
                                        {
                                            fontFamily: 'PoppinsM',
                                            padding: '15px',
                                            color: 'black'
                                        }
                                    }
                                >Cancel</Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </div>
            </nav>
            <nav>
                <div className='fabnav'>
                    <div className='img'>
                        <center>
                            <Link to={'/'}>
                                <img
                                    id='logo'
                                    src={logo}
                                    alt="LOGO"
                                />
                            </Link>
                        </center>
                    </div>
                    <div >
                        <Fab
                            position="right-top"
                            slot="fixed"
                            onClick={FabMenu}
                            style={
                                {
                                    backgroundColor: '#c19e4f',
                                    width: '80px',
                                    margin: '10px',
                                    borderRadius: '10px'
                                    // border: '1px solid red'
                                }
                            }
                        >

                            {
                                fabMenuOpen ? (
                                    <p style={{ color: 'white', }}>x</p>
                                ) : (
                                    <p style={{ color: 'white', }}>Mune</p>
                                )
                            }
                        </Fab>
                        <div className='fabButtons'>
                            {
                                fabMenuOpen && (
                                    <div className="fab-buttons">
                                        <Fab className="fab-button"
                                            style={
                                                {
                                                    backgroundColor: '#c19e4f',
                                                    fontSize: '5px',
                                                    width: 'fit-content',
                                                    height: 'fit-content',
                                                    padding: '10px',
                                                    margin: '10px',
                                                    borderRadius: '10px'
                                                }
                                            }>
                                            <Link className='link' to={'/'}>Home</Link>
                                        </Fab>
                                        <Fab className="fab-button"
                                            style={
                                                {
                                                    backgroundColor: '#c19e4f',
                                                    fontSize: '5px',
                                                    width: 'fit-content',
                                                    height: 'fit-content',
                                                    padding: '10px',
                                                    margin: '10px',
                                                    borderRadius: '10px'
                                                }
                                            }>
                                            <HashLink className='link' smooth to='/#Kitchen' > Choose Kitchen </HashLink>
                                        </Fab>
                                        <Fab className="fab-button"
                                            style={
                                                {
                                                    backgroundColor: '#c19e4f',
                                                    fontSize: '5px',
                                                    width: 'fit-content',
                                                    height: 'fit-content',
                                                    padding: '10px',
                                                    margin: '10px',
                                                    borderRadius: '10px'
                                                }
                                            }>
                                            <Link className='link' to={'/PopularRecipes'}>Recipes</Link>
                                        </Fab>
                                        <Fab className="fab-button"
                                            style={
                                                {
                                                    backgroundColor: '#c19e4f',
                                                    fontSize: '5px',
                                                    width: 'fit-content',
                                                    height: 'fit-content',
                                                    padding: '10px',
                                                    margin: '10px',
                                                    borderRadius: '10px'
                                                }
                                            }>
                                            <HashLink className='link' smooth to='/#ContactUs' > Contact us </HashLink>
                                        </Fab>
                                        <Fab className="fab-button"
                                            style={
                                                {
                                                    backgroundColor: '#c19e4f',
                                                    fontSize: '5px',
                                                    width: 'fit-content',
                                                    height: 'fit-content',
                                                    padding: '10px',
                                                    margin: '10px',
                                                    borderRadius: '10px'
                                                }
                                            }>
                                            <HashLink className='link' smooth to='/#ContactUs' > Contact us </HashLink>
                                        </Fab>

                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
