import React from 'react';
import {NavLink} from "react-router-dom";
import "./headerComponent.css"
const HeaderComponent = () => {
    return (
        <div  className={'header'}>
            <NavLink to={"/users"}>Users</NavLink>
            <NavLink to={"/posts"}>Posts</NavLink>
            <NavLink to={"/comments"}>Comments</NavLink>
        </div>
    );
};

export default HeaderComponent;