import React, {useEffect, useState} from 'react';
import {IUserModel} from "../../models/basicModels/userModel";
import {userService} from "../../services/api.service.users";
import user from "./User";
import User from "./User";

const Users = () => {
    const [users, setUsers] = useState<IUserModel[]>([])
    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data.users))
    }, []);

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/> )}
        </div>
    );
};

export default Users;