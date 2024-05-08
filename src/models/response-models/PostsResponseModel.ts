import {IPostModel} from "../basic-models/PostModel";

export interface IPostsResponseModel{
    limit : number,
    skip: number,
    total:  number,
    posts : IPostModel[]
}