import React from 'react'
import './CardMobile.css'
import { Button } from './Button';
import view_project_icon from '../assets/images/icons/view-project-icon.png';
import github_icon from '../assets/images/icons/github-icon.png';

function CardMobile(props) {

    const badgeArray = props.badges;
    const badgeItems = badgeArray.map((badgeURL) => {
        return <img className='card-mobile-badge' src={badgeURL} key={badgeURL}></img>
    });

    return (
        <div className='card-mobile-wrapper'>
            <div className='card-mobile-upper-section'>
                <div className='card-mobile-image-wrapper'>
                    <img className='card-mobile-image' src={props.src} alt="project image">
                    </img>
                </div>
                <div className='card-mobile-headers'>
                    <h1 className='card-mobile-header'>
                        {props.header}
                    </h1>
                    <h2 className='card-mobile-year'>
                        {props.year}
                    </h2>
                    <div className='card-mobile-badges'>
                        {badgeItems}
                    </div>
                </div>
            </div>
            <div className='card-mobile-lower-section'>
                <p className='card-mobile-description'>
                    {props.body}
                </p>
                <div className='card-mobile-buttons'>
                    <Button className='card-mobile-button' src={view_project_icon} size='small' url={props.projectURL}>View Project</Button>
                    <Button className='card-mobile-button' src={github_icon} size='small' url={props.codeURL}>View Code</Button>
                </div>
            </div>
        </div>
    )
}

export default CardMobile
