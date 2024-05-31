import React from 'react';
import UsersComponents from "../../Components/UserComponents/UsersComponents";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            <UsersComponents/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default UsersPage;