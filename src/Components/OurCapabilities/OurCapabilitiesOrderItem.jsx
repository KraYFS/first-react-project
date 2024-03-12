import React from 'react';
import MainButton from '../UI/buttons/mainButton/MainButton'
import classes from './OurCapabilitiesOrderItem.module.css'

const OurCapabilitiesOrderItem = (props) => {
    return (
        <div>
            {/* <img src="" alt="" /> */}
            <div className="OurCapabilitiesOrderItem_title">StartUp</div>
            <div className="OurCapabilitiesOrderItem_number">1</div>
            <MainButton width='371px' height='56px' text='Start'/>
        </div>
    );
}

export default OurCapabilitiesOrderItem;
