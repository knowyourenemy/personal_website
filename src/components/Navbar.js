import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import { Button } from './Button';
import logo from '../assets/images/icons/logo.png'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">

                    <div className='nav-icon-wrapper-mobile'>
                        <img className='nav-icon-mobile' src={logo}>
                        </img>
                        <div className='menu-icon' onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        </div>

                    </div>


                    <div className={click ? 'nav-menu active' : 'nav-menu'}>

                        <div className='nav-icon-wrapper'>
                            <img className='nav-icon' src={logo}>
                            </img>
                        </div>


                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            <div className='nav-item'>
                                Home
                                </div>

                        </Link>


                        <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                            <div className='nav-item'>
                                Projects
                                </div>

                        </Link>


            


                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>

                            <div className='nav-item'>
                                Contact
                            </div>
                        </Link>


                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
