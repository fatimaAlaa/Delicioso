import logo from '../../Assests/logo.png'
import React from 'react';
import { Link } from 'react-router-dom';
import '../../ComponentsStyle/Navbar.css';

export default function Navbar() {
    return (
        <div className='nb'>
            <nav className='navbar'>
                <div className='img'>
                    <center>
                        <img
                            id='logo'
                            src={logo}
                            alt="LOGO"
                        />
                    </center>
                </div>

                <div className='links'>
                    <Link className='link' to={'/'}>Home</Link>
                    <Link className='link' to={'/Kitchen'}>Choose Kitchen</Link>
                    <Link className='link' to={'/PopularRecipes'}>Recipes</Link>
                    <Link className='link' to={'/AboutUs'}>About us</Link>
                    <Link className='link' to={'/ContactUs'}>Contact us</Link>
                </div>
                <div className='button'>
                    <button>Login</button>
                    <button>Sign-in</button>
                </div>
            </nav>
        </div>
    );
}
