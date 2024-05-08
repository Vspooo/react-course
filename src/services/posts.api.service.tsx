import axios, {AxiosResponse} from "axios";
import {IPostsResponseModel} from "../models/response-models/PostsResponseModel";

let axiosInstance = axios.create({
    baseURL:"https://dummyjson.com",
    headers:{"Content-Type" : "application/json"}
})

let getAllPosts = (userId:number) : Promise<AxiosResponse<IPostsResponseModel>> =>{
    return axiosInstance.get(`/users/${userId}/posts`)
}

export {
    getAllPosts
}