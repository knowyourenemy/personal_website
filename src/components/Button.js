import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];


export const Button = (props) => {
    return (
        <Link to='/sign-up' onClick={props.onClick}
        className={`button-${props.size}`}>
                <img className={`button-${props.size}-icon`} src={props.src}>
                </img>
                <div className={`button-${props.size}-text`}>
                {props.children}
                </div>
        </Link>
    )
};