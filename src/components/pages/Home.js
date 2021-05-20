import React from 'react'
import './Home.css';
import { Button } from '../Button';
import avatar from '../../assets/images/aadi.jpeg';
import mail_icon from '../../assets/images/icons/mail-icon.png';
import resume_icon from '../../assets/images/icons/resume-icon.png';
import resume from "../../assets/documents/Aaditya-Resume-200521.pdf";

function Home() {

    const ync_hacks = <a href='https://github.com/YNC-Hacks' className='ync-hacks-link' target="_blank">YNC Hacks</a>

    return (
        <div className='home-wrapper' id="home">
            <div className='home-image-wrapper'>
                <img src={avatar} className='home-image'></img>
                <div className='home-headers-wrapper-mobile'>
                    <h1 className='home-header-mobile'>hello!</h1>
                    <h1 className='home-header-mobile'>i'm aadi.</h1>
                </div>
            </div>
            <div className='home-texts'>
                <div className='home-headers-wrapper'>
                    <h1 className='home-header'>hello!</h1>
                    <h1 className='home-header'>i'm aadi.</h1>
                </div>
                <p className='home-text'>
                    I am currently pursuing a B.Sc. degree at Yale-NUS College, where I am also the president of {ync_hacks}.
                </p>
                <div className='home-buttons'>
                    <Button className='home-button' src={mail_icon} size='large' url='mailto:aadipatwari@gmail.com'>Email</Button>
                    <Button className='home-button' src={resume_icon} size='large' url={resume}>Resume</Button>
                </div>
            </div>
        </div>
    )
}

export default Home
