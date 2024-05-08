import axios, {AxiosResponse} from "axios";
import {IUsersResponseModel} from "../models/response-models/UsersResponseModel";

let axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {"Content-Type": "application/json"}
})

let getAllUsers = () : Promise<AxiosResponse<IUsersResponseModel>> =>{
    return axiosInstance.get("/users")
}

export {
    getAllUsers
}

