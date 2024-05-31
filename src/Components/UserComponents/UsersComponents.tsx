import React, {useEffect, useState} from 'react';
import {IUserModel} from "../../Models/basicModels/userModel";
import {apiService} from "../../services/apiService";
import {userApiService} from "../../services/user.api.service";
import UserComponent from "./UserComponent";

const UsersComponents = () => {
    const [users, setUsers] = useState<IUserModel[]>([])
    useEffect(() => {
        userApiService.getAllUsers().then(({data}) => setUsers(data.users))
    }, []);
    return (
        <div>
            {users.map((user) => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponents;