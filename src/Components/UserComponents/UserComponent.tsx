import React, {FC, PropsWithChildren} from 'react';
import {IUserModel} from "../../Models/basicModels/userModel";
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    user: IUserModel
}

const UserComponent: FC<IProps> = ({user}) => {
    const navigate = useNavigate()
    const handleButtonClick = () =>{
        navigate(`/posts/users/${user.id}`)
    }
    return (
        <div>
            <h1>{user.id}. {user.firstName} {user.maidenName} {user.lastName}. {user.age}yo</h1>
            <button onClick={()=>{
                handleButtonClick()
            }}>show user`s posts</button>
        </div>
    );
};

export default UserComponent;