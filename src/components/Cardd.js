import React, {useState} from 'react'
import './Cardd.css'
import { Button } from './Button';
import mail_icon from '../assets/images/icons/mail-icon.png';
import resume_icon from '../assets/images/icons/resume-icon.png';
import github_icon from '../assets/images/icons/github-icon.svg';


function Cardd(props) {

    const badgeArray = props.badges;
    const badgeItems = badgeArray.map((badgeURL) => {
        return <img className='card-badge' src={badgeURL} key={badgeURL}></img>
    });


    return (
        <div className='card-wrapper'>
            <div className='card-image-wrapper' style={{backgroundImage: `url(${props.src})`}}>
                <div className='card-badges'>
                    {badgeItems}
                </div>
            </div>
            <div className='card-text-wrapper'>
                <div className='card-header'>
                    {props.header}
                </div>
                <div className='card-description'>
                    {props.body}
                </div>
            </div>
            <div className='card-buttons'>
                <Button className='card-button' src={mail_icon} size='small'>View Project</Button>
                <Button className='card-button' src={github_icon} size='small'>View Code</Button>
            </div>

        </div>
    )
}

export default Cardd
