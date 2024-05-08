import React, {FC, useEffect, useState} from 'react';
import {User} from "./user-component";
import {IUserModel} from "../models/basic-models/UserModel";
import {getAllUsers} from "../services/users.api.service";

interface IProps{
    choseUser: (id:number)=> void
    children?: React.ReactNode
}

const UsersComponent: FC<IProps> = ({choseUser}) => {
    const [user, setUser] = useState<IUserModel[]>([])

    useEffect(() => {
        getAllUsers().then(value => setUser(value.data.users))
    }, [])


    return (
        <div>
            {
                user
                    .map(
                        (value) => (
                                <User key={value.id} user={value} choseUser={choseUser}/>

                        )
                    )

            }
        </div>
    );
};

export default UsersComponent;