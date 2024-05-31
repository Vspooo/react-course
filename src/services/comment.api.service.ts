import {IRes} from "../resType";
import {ICommentResponseModel} from "../Models/responseModels/commentResponseModel";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

export const commentApiService= {
    getCommentsByPost : (id:string) : IRes<ICommentResponseModel> => apiService.get(urls.commentByPostId(id))
}