import React from 'react'
import './HeroSection.css';
import '../App.css'
import { Button } from './Button';
import avatar from '../assets/images/aadi.jpeg';
import mail_icon from '../assets/images/icons/mail-icon.png';
import resume_icon from '../assets/images/icons/resume-icon.png';


function HeroSection() {

    var ync_hacks = <a href='http://www.google.com' className='ync-hacks-link'>YNC Hacks</a>

    return (
        <div className='real-hero-container' id="home">
            <div className='hero-container'>
                <img src={avatar} className='hero-img'>
                </img>
                <div className='hero-headers-wrapper-mobile'>
                <h1 className='hero-header-mobile'>hello!</h1>
                <h1 className='hero-header-mobile'>i'm aadi.</h1>
                </div>
            </div>
            <div className='hero-texts'>
                <div className='hero-headers-wrapper'>
                    <h1 className='hero-header'>hello!</h1>
                    <h1 className='hero-header'>i'm aadi.</h1>
                </div>
                <p className='hero-text'>
                    I am currently pursuing a B.Sc. degree at Yale-NUS College, where I am also the president of {ync_hacks}.
                </p>
                <div className='hero-buttons'>
                    <Button className='hero-button' src={mail_icon} size='large'>Email</Button>
                    <Button className='hero-button' src={resume_icon} size = 'large'>Resume</Button>
                </div>
            </div>
          
        </div>


    )
}

export default HeroSection
