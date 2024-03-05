import React from 'react';
import classes from './pageProgress.module.css'

const PageProgress = () => {
    return (
        <div className={classes.borderInput}>
            <div className={classes.inputRange}></div>
        </div>
    );
}

export default PageProgress;
