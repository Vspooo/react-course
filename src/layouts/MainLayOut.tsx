import React from 'react';
import {Outlet} from "react-router-dom";

const MainLayOut = () => {
    return (
        <div>
        MainLayOut
            <hr/>
        <Outlet/>
        </div>
    );
};

export default MainLayOut;