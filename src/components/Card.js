import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

function Card(props) {
    return (
        <div className='card_wrapper'>
            <Link className='card_link' to={props.path}> 
                <figure className='cards__item__pic-wrap' data-category={props.label}>
                    <img src={props.src} alt='' className='card_img'/>
                </figure>
                <div className='card_info'>
                    <h5 className='card_text'>
                        {props.text}
                    </h5>
                </div>
            </Link>                         
        </div>        
    )
}

export default Card
