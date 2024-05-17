import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/Header/HeaderComponent";
import FooterComponent from "../components/Footer/FooterComponent";

const MainLayOut = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet></Outlet>
            <FooterComponent/>
        </div>
    );
};

export default MainLayOut;