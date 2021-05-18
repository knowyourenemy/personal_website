import React from 'react'
import './Contact.css'
import contact_sun_image from '../../assets/images/backgrounds/contact-sun.png'

function Contact() {
    return (
        <div className='contact-wrapper' id="contact">
            <h1 className='contact-header'>Contact</h1>
            <p className='contact-paragraph'>I am always open to new opportunities! Contact me through any of the platforms below if you wish to have a chat.</p>
            <div className='contact-image-wrapper'>
                <div className='contact-links'>
                    <a className='contact-email'>Email</a>
                    <a className='contact-linkedin'>Linkedin</a>
                    <a className='contact-github'>GitHub</a>
                </div>
                <img className='contact-planet-image' src={contact_sun_image}></img>
            </div>
        </div>
    )
}

export default Contact
