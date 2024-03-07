import React from 'react';
import TitleBlock from '../titleBlock/TitleBlock';
import classes from './ourCapabilities.module.css'
import OurCapabilitiesItem from './OurCapabilitiesItem';
import img from './img.png'

const OurCapabilities = () => {
    return (
        <div className={classes.OurCapabilitiesBlock}>
            <div className="container">
                <div className={classes.OurCapabilitiesBlock_inner}>
                    <TitleBlock progress='57px' numberPage='2' title='Наши возомжности' />
                    <OurCapabilitiesItem imageSrc={img} title='Android и iOS приложение' subTitle='делаем как по отдельности так и на обе платформы' />
                    <OurCapabilitiesItem imageSrc={img} title='Android и iOS приложение' subTitle='делаем как по отдельности так и на обе платформы' />
                    <OurCapabilitiesItem imageSrc={img} title='Android и iOS приложение' subTitle='делаем как по отдельности так и на обе платформы' />
                    <OurCapabilitiesItem imageSrc={img} title='Android и iOS приложение' subTitle='делаем как по отдельности так и на обе платформы' />
                </div>
            </div>
        </div>
    );
}

export default OurCapabilities;
