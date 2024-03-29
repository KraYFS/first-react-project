import React from 'react';
import PageProgress from '../UI/pageProgress/PageProgress';
import classes from './TittleBlock.module.css'

const TitleBlock = (props) => {
    return (
        <div className={classes.titleBlock}>
            <div className="container">
                <div className={classes.titleAndProgress}>
                    <PageProgress numberPage={props.numberPage} progress={props.progress} />
                    <div className={classes.title}>{props.title}</div>
                </div>
                <svg width="1300" height="16" viewBox="0 0 1300 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.3" d="M0 1H210.129L229.041 15H1114.39L1133.3 1H1300" stroke="#43F272" stroke-width="2" />
                </svg>
            </div>
        </div>
    );
}

export default TitleBlock;
