import {IUserModel} from "./userModel";
import {ICommentsUserModel} from "./commentsUserModel";

export interface ICommentModel{
    id:number,
    postId: number,
    body: string,
    likes: number,
    user: ICommentsUserModel
}