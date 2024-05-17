import React, {FC, PropsWithChildren} from 'react';
import {IUserModel} from "../../models/basicModels/userModel";

interface IProps extends PropsWithChildren {
    user: IUserModel
}

const User: FC<IProps> = ({user}) => {

    // const {id, firstName,lastName,maidenName,age,gender,email,phone} = user

    return (
        <div>
            <h2>{user.firstName} {user.lastName} {user.maidenName}. {user.gender}. {user.age}yo</h2>
            <p>contacts: {user.email} or {user.phone}</p>
        </div>
    );
};

export default User;