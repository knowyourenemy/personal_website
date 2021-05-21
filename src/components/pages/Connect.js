import React from 'react'
import './Connect.css'
import connect_sun_image from '../../assets/images/backgrounds/sun-red.png'

function Connect() {
    return (
        <div className='connect-wrapper' id="connect">
            <h1 className='connect-header'>Connect</h1>
            <p className='connect-paragraph'>I am always open to new opportunities! Contact me through any of the platforms below if you wish to have a chat.</p>
            <div className='connect-image-wrapper'>
                <div className='connect-links'>
                    <a className='connect-email' href='mailto:aadipatwari@gmail.com' target='_blank' rel='noreferrer'>Email</a>
                    <a className='connect-linkedin' href='https://www.linkedin.com/in/aaditya-patwari' target='_blank' rel='noreferrer'>LinkedIn</a>
                    <a className='connect-github' href='https://www.github.com/knowyourenemy' target='_blank' rel='noreferrer'>GitHub</a>
                </div>
                <img className='connect-planet-image' src={connect_sun_image} alt="picutre of a sun"></img>
            </div>
        </div>
    )
}

export default Connect
