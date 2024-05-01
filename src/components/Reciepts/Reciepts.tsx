import React from 'react';
import Reciept from "../reciept-component/Reciept";

const Reciepts = () => {
    return (
        <div>

            <Reciept title={'pizza'} desc={'fdgdgdfgfdgfdgdfvzxscwecfwc '}>HOLLA AMIGOS</Reciept>
            <Reciept title={'cookie'} desc={'sugaaar'}/>
            <Reciept title={'pasta'} desc={'meal'}/>
            <Reciept title={'roasted egg'} desc={'breakfast'}/>

        </div>
    );
};

export default Reciepts;