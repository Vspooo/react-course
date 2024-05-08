import React, {FC} from "react";
import {IUserModel} from "../models/basic-models/UserModel";

interface IProps {
    user: IUserModel;
    choseUser: (id: number) => void
}

export const User: FC<IProps> = ({user, choseUser}) => {
    return (
        <div>

            <h2>ID:{user.id} {user.firstName} {user.lastName} {user.maidenName}. {user.age} year old. {user.gender}</h2>
            <img src={user.image} alt={user.username}/>
            <h4>Contacts: {user.email} ; {user.phone}</h4>
            <p>User : {user.username} {user.password}. Info:</p>
            <ul>
                <li>{user.birthDate}</li>
                <li>{user.bloodGroup}</li>
                <li>{user.height}</li>
                <li>{user.weight}</li>
            </ul>
            <p>Domain : {user.domain} . IP:{user.ip}</p>


            <p>Address:</p>
            <ul>
                <li>{user.address.city}</li>
                <li>{user.address.address}</li>
                <li>{user.address.postalCode}</li>
                <li>{user.address.state}</li>
            </ul>


            <p>Bank in use:</p>
            <ul>
                <li>{user.bank.cardNumber}</li>
                <li>{user.bank.cardExpire}</li>
                <li>{user.bank.cardType}</li>
                <li>{user.bank.currency}</li>
            </ul>


            <p>Company:</p>
            <h4>{user.company.name} - {user.company.title}. {user.company.department}</h4>
            <ul>
                <li>{user.company.address.city}</li>
                <li>{user.company.address.address}</li>
                <li>{user.company.address.postalCode}</li>
                <li>{user.company.address.state}</li>
            </ul>
            <button onClick={() => {
                choseUser(user.id)
            }}>show posts</button>
        </div>
    )
}