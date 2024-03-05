import React from 'react';
import classes from './Navigation.module.css'

const Navigation = (props) => {
    return (
        <nav>
            <a className={classes.nav_links} style={{
                marginRight: props.marginRight,
                fontSize: props.fontSize
            }} href="http">Услуги</a>
            <a className={classes.nav_links} style={{
                marginRight: props.marginRight,
                fontSize: props.fontSize
            }} href="http">Портфолио</a>
            <a className={classes.nav_links} style={{
                marginRight: props.marginRight,
                fontSize: props.fontSize
            }} href="http">Бонусы</a>
            <a className={classes.nav_links} style={{
                fontSize: props.fontSize
            }} href="http">Контакты</a>
        </nav>
    );
}

export default Navigation;
