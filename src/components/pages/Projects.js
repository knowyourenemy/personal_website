import React from 'react';
import Card from '../Card';
import './Projects.css';
import react_icon from '../../assets/images/icons/reactjs-icon.svg';
import html5_icon from '../../assets/images/icons/html5-icon.svg';
import css3_icon from '../../assets/images/icons/css3-icon.svg';
import google_maps_icon from '../../assets/images/icons/google-maps-icon.svg';
import python_icon from '../../assets/images/icons/python-icon.svg';
import telegram_icon from '../../assets/images/icons/telegram-icon.svg';
import java_icon from '../../assets/images/icons/java-icon.svg';
import libgdx_icon from '../../assets/images/icons/libgdx-icon.png'
import unity_icon from '../../assets/images/icons/unity-icon.png'
import csharp_icon from '../../assets/images/icons/csharp-icon.svg'
import ballistics_image from '../../assets/images/projects/ballistics.png'
import escape_earth_image from '../../assets/images/projects/escape-earth.png'
import sentry_image from '../../assets/images/projects/sentry.png'
import street_view_image from '../../assets/images/projects/street-view.png'
import jelakbot_image from '../../assets/images/projects/jelakbot2.png'
import personal_website_v1_image from '../../assets/images/projects/personal-website.png'
import CardMobile from '../CardMobile';

function Projects() {
    return (
        <div className='projects-wrapper'  id="projects" >
            <h1 className='projects-header'> 
                Projects
            </h1>
            <div className='cards-container'>
                <ul className='cards-row'>
                <Card
                    src={ballistics_image}
                    header='Ballistics'
                    year='2015'
                    body='A simple 2D arcade game that resembles Pong. I developed it using the libGDX Game Engine and published it in the Android Play Store.'
                    projectURL='https://play.google.com/store/apps/details?id=processing.test.ballistics&hl=en_SG&gl=US'
                    codeURL='https://github.com/T-RektGames/Ballistics'
                    badges={[libgdx_icon, java_icon]}
                />
                </ul>
                <ul className='cards-row'>
                <Card
                    src={escape_earth_image}
                    header='Escape Earth'
                    year='2015'
                    body='Another 2D arcade game inspired by Space Invaders. Also developed using the libGDX Game Engine and published in the Android Play Store.'
                    projectURL='https://play.google.com/store/apps/details?id=com.aaditya.escapeearth&hl=en_SG&gl=US'
                    codeURL='https://github.com/T-RektGames/Escape-Earth'
                    badges={[libgdx_icon, java_icon]}
                />
                </ul>
                <ul className='cards-row'>
                <Card
                    src={sentry_image}
                    header='Sentry'
                    year='2016'
                    body='Another simple 2D arcade game, developed using Unity.'
                    projectURL='https://play.google.com/store/apps/details?id=com.trekt.sentry&hl=en_SG&gl=US'
                    codeURL='https://github.com/T-RektGames/Sentry-Unity'
                    badges={[unity_icon, csharp_icon]}
                />
                </ul>
                <ul className='cards-row'>
                <Card
                    src={street_view_image}
                    header='VJC Street View'
                    year='2017'
                    body="A 3D virtual map of the school using the Google Maps JavaScript API. I developed this with my friends from VJC's Makers' Club."
                    projectURL='https://vjmakers.github.io/street-view/'
                    codeURL='https://github.com/vjmakers/street-view'
                    badges={[google_maps_icon]}
                />
                </ul>
                <ul className='cards-row'>
                <Card
                    src={jelakbot_image}
                    header='JelakBot'
                    year='2021'
                    body="A telegram bot that lets college students hop onto food orders to share delivery costs. I developed this with my friends during NUS Hack&Roll 2021"
                    projectURL='https://devpost.com/software/jelak-bot'
                    codeURL='https://github.com/leonardtng/JelakBot'
                    badges={[python_icon, telegram_icon]}
                />
                </ul>
                <ul className='cards-row'>
                <Card
                    src={personal_website_v1_image}
                    header='Personal Website V1'
                    year='2021'
                    body="I developed this personal website using React during my summer break in 2021."
                    projectURL='https://aadityapatwari.com/'
                    codeURL='https://github.com/knowyourenemy/personal_website'
                    badges={[react_icon, html5_icon, css3_icon]}
                />
                </ul>
            </div>
            <div className='cards-container-mobile'>
                <ul className='cards-row-mobile'>
                <CardMobile
                    src={ballistics_image}
                    header='Ballistics'
                    year='2015'
                    body='A simple 2D arcade game that resembles Pong. I developed it using the libGDX Game Engine and published it in the Android Play Store.'
                    projectURL='https://play.google.com/store/apps/details?id=processing.test.ballistics&hl=en_SG&gl=US'
                    codeURL='https://github.com/T-RektGames/Ballistics'
                    badges={[libgdx_icon, java_icon]}
                />
                </ul>
                <ul className='cards-row-mobile'>
                <CardMobile
                    src={escape_earth_image}
                    header='Escape Earth'
                    year='2015'
                    body='Another 2D arcade game inspired by Space Invaders. Also developed using the libGDX Game Engine and published in the Android Play Store.'
                    projectURL='https://play.google.com/store/apps/details?id=com.aaditya.escapeearth&hl=en_SG&gl=US'
                    codeURL='https://github.com/T-RektGames/Escape-Earth'
                    badges={[libgdx_icon, java_icon]}
                />
                </ul>
                <ul className='cards-row-mobile'>
                <CardMobile
                    src={sentry_image}
                    header='Sentry'
                    year='2016'
                    body='Another simple 2D arcade game, developed using Unity.'
                    projectURL='https://play.google.com/store/apps/details?id=com.trekt.sentry&hl=en_SG&gl=US'
                    codeURL='https://github.com/T-RektGames/Sentry-Unity'
                    badges={[unity_icon, csharp_icon]}
                />
                </ul>
                <ul className='cards-row-mobile'>
                <CardMobile
                    src={street_view_image}
                    header='VJC Street View'
                    year='2017'
                    body="A 3D virtual map of the school using the Google Maps JavaScript API. I developed this with my friends from VJC's Makers' Club."
                    projectURL='https://vjmakers.github.io/street-view/'
                    codeURL='https://github.com/vjmakers/street-view'
                    badges={[google_maps_icon]}
                />
                </ul>
                <ul className='cards-row-mobile'>
                <CardMobile
                    src={jelakbot_image}
                    header='JelakBot'
                    year='2021'
                    body="A telegram bot that lets college students hop onto food orders to share delivery costs. I developed this with my friends during NUS Hack&Roll 2021"
                    projectURL='https://devpost.com/software/jelak-bot'
                    codeURL='https://github.com/leonardtng/JelakBot'
                    badges={[python_icon, telegram_icon]}
                />
                </ul>
                <ul className='cards-row-mobile'>
                <CardMobile
                    src={personal_website_v1_image}
                    header='Personal Website'
                    year='2021'
                    body="I developed this personal website using React during my summer break in 2021."
                    projectURL='https://aadityapatwari.com/'
                    codeURL='https://github.com/knowyourenemy/personal_website'
                    badges={[react_icon, html5_icon, css3_icon]}
                />
                </ul>
            </div>
        </div>
    )
}

export default Projects
