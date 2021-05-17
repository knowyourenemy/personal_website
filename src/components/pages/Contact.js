import React from 'react'
import './Contact.css'
import contact_sun_image from '../../assets/images/backgrounds/contact-sun.png'

function Contact() {
    return (
        <div className='contact-wrapper'>
       
                <img className='contact-planet-image' src={contact_sun_image}></img>
              
            <div className='contact-text-wrapper'>
                <h2 className='contact-email'>Email</h2>
                <h2 className='contact-instagram'>Instagram</h2>
                <h2 className='contact-linkedin'>Linkedin</h2>
                
            </div>
            <h1 className='contact-header'>Contact</h1>   

        </div>
    )
}

export default Contact
