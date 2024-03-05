import React from 'react';
import classes from './MainButton.module.css'

const MainButton = (props) => {
    return (
        <a className={classes.MainButton} style={{
            width: props.width,
            height: props.height,
            fontSize: props.fontSize,
            margin: props.margin
        }} href={props.href}>{props.text}
        </a>
    );
}

export default MainButton;
