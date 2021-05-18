import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';



export const Button = (props) => {
    return (
        <a href='http://www.google.com' onClick={props.onClick}
        className={`button-${props.size}`}>
                <img className={`button-${props.size}-icon`} src={props.src}>
                </img>
                <div className={`button-${props.size}-text`}>
                {props.children}
                </div>
        </a>
    )
};