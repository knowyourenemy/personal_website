import React, { useState} from 'react'
import './Navbar.css'
import logo from '../assets/images/icons/logo.png'
import menu_icon from '../assets/images/icons/menu-icon.png'
import cross_icon from '../assets/images/icons/cross-icon.png'

function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className={click ? 'navbar active' : 'navbar'}>
            <div className='nav-icon-wrapper-mobile'>
                <img className='nav-icon-mobile' src={logo} alt='logo'></img>
                <img className='menu-icon' src={click ? cross_icon : menu_icon} onClick={handleClick} alt='menu icon'></img>
            </div>
            <div className={click ? 'nav-menu active' : 'nav-menu'}>
                <div className='nav-icon-wrapper'>
                    <img className='nav-icon' src={logo}></img>
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
                <a href="#connect" className='nav-links' onClick={closeMobileMenu}>
                    <div className='nav-item'>
                        connect
                    </div>
                </a>
            </div>
        </nav>
    )
}

export default Navbar
