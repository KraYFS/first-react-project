import React from 'react';
import classes from './OurCapabilitiesItem.module.css'

const OurCapabilitiesItem = (props) => {
    return (
        <div className={classes.OurCapabilitiesItem}>
            <div className={classes.OurCapabilitiesItem_inner}>
                <img src={props.imageSrc} alt="" />
                <div className={classes.itemTitle}>{props.title}</div>
                <div className={classes.itemSubTitle}>{props.subTitle}</div>
            </div>
        </div>
    );
}

export default OurCapabilitiesItem;
