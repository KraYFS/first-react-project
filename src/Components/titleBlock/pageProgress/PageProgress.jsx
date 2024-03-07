import React from 'react';
import classes from './pageProgress.module.css'

const PageProgress = (props) => {
    return (
        <div className={classes.PageProgressBar}>
            <div className={classes.input_title}>{props.numberPage}/11</div>
            <div className={classes.borderInput}>
                <div style={{ width: props.progress }} className={classes.inputRange}></div>
            </div>
        </div>
    );
}

export default PageProgress;
