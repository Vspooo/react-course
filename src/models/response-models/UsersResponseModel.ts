import {IUserModel} from "../basic-models/UserModel";

export interface IUsersResponseModel{
        limit: number,
        skip: number,
        total: number,
        users: IUserModel[]

}