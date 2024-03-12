import React from 'react';
import classes from './OurTeamItem.module.css'

const OurTeamItem = (props) => {
    return (
        <div className={classes.ourTeamItem}>
            <img alt='' className={classes.itemImage} src={props.imageSrc} />
            <div className={classes.itemTitle}>{props.itemTitle}</div>
            <div className={classes.itemSubTitle}>{props.itemSubTitle}</div>
        </div>
    );
}

export default OurTeamItem;
