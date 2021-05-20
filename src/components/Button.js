import React from 'react';
import './Button.css';

export const Button = (props) => {
    return (
        <a href={props.url} className={`button-${props.size}`} target="_blank">
            <img className={`button-${props.size}-icon`} src={props.src}>
            </img>
            <div className={`button-${props.size}-text`}>
                {props.children}
            </div>
        </a>
    )
};