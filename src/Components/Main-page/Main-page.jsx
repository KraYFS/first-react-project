import React from 'react';
import classes from './Main-page.module.css'
import MainButton from '../UI/buttons/mainButton/MainButton';


const MainPage = () => {
    return (
        <div className={classes.main_page}>
            <div className="container">
                <div className={classes.main_page_title}>
                    Студия созадния и продвижения мобильных приложений
                    <MainButton width='350px' height='64px' text='Дальше' margin='60px 0px 0px 0px' fontSize='20px' />
                </div>
            </div>
        </div>
    );
}

export default MainPage;
