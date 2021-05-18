import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../assets/images/icons/logo.png'
import menu_icon from '../assets/images/icons/menu-icon.png'
import cross_icon from '../assets/images/icons/cross-icon.png'

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
            <nav className={click ? 'navbar active' : 'navbar'}>
                <div className="navbar-container">

                    <div className='nav-icon-wrapper-mobile'>
                        <img className='nav-icon-mobile' src={logo}>
                        </img>
                        <img className='menu-icon' src={click ? cross_icon : menu_icon} onClick={handleClick}>

                        </img>

                    </div>


                    <div className={click ? 'nav-menu active' : 'nav-menu'}>

                        <div className='nav-icon-wrapper'>
                            <img className='nav-icon' src={logo}>
                            </img>
                        </div>


                        <a href="#home" className='nav-links' onClick={closeMobileMenu}>
                            <div className='nav-item'>
                                home
                            </div>

                        </a>


                        <a href="#projects" className='nav-links' onClick={closeMobileMenu}>
                            <div className='nav-item'>
                                projects
                                </div>

                        </a>


            


                        <a href="#contact" className='nav-links' onClick={closeMobileMenu}>

                            <div className='nav-item'>
                                contact
                            </div>
                        </a>


                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
