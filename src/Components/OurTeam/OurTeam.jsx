import React from 'react';
import classes from './OurTeam.module.css'
import TitleBlock from '../titleBlock/TitleBlock';
import OurTeamItem from './OurTeamItem';
import image1 from './ourTeamImage/1.png'
import image2 from './ourTeamImage/2.png'
import image3 from './ourTeamImage/3.png'
import image4 from './ourTeamImage/4.png'
import image5 from './ourTeamImage/5.png'
import image6 from './ourTeamImage/6.png'
import image7 from './ourTeamImage/7.png'
import image8 from './ourTeamImage/8.png'
import image9 from './ourTeamImage/9.png'
import image10 from './ourTeamImage/10.png'
import image11 from './ourTeamImage/11.png'
import image12 from './ourTeamImage/12.png'

const OurTeam = () => {
    return (
        <div>
            <div className="container">
                <TitleBlock title='Наша команда' />
                <div className={classes.OurTeamBlock}>
                    <OurTeamItem imageSrc={image1} itemTitle='Max Wiwi' itemSubTitle='Президент студии' />
                    <OurTeamItem imageSrc={image2} itemTitle='Well Sofi' itemSubTitle='Президент студии' />
                    <OurTeamItem imageSrc={image3} itemTitle='Руслан' itemSubTitle='Президент студии' />
                    <OurTeamItem imageSrc={image4} itemTitle='Анна' itemSubTitle='Президент студии' />
                    <OurTeamItem imageSrc={image5} itemTitle='Игорёк' itemSubTitle='Президент студии' />
                    <OurTeamItem imageSrc={image6} itemTitle='Антошка' itemSubTitle='Президент студии' />
                    <OurTeamItem imageSrc={image7} itemTitle='Витаминка' itemSubTitle='Президент студии' />
                    <OurTeamItem imageSrc={image8} itemTitle='Муслим' itemSubTitle='Президент студии' />
                    <OurTeamItem imageSrc={image9} itemTitle='Антоноджи' itemSubTitle='Президент студии' />
                    <OurTeamItem imageSrc={image10} itemTitle='Владик' itemSubTitle='Президент студии' />
                    <OurTeamItem imageSrc={image11} itemTitle='Андрюша' itemSubTitle='Президент студии' />
                    <OurTeamItem imageSrc={image12} itemTitle='Платина' itemSubTitle='Президент студии' />
                </div>
            </div>
        </div>
    );
}

export default OurTeam;
