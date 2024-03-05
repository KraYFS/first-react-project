import React from 'react';
import Navigation from '../Navigation/Navigation';
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <div className="container">
                <div className={classes.header_inner}>
                    <span className={classes.header_logo}>nipsy</span>
                    <Navigation fontSize='16px' marginRight='56px' />
                    <button className={classes.header_btn}>Связаться с нами</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
