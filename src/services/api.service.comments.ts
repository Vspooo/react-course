import {IRes} from "../types/resType";
import {ICommentsResponseModel} from "../models/responseModels/commentsResponseModel";
import {apiService} from "./api.service";
import {urls} from "../urls/urls";

export const commentService = {
    getAll : () :IRes<ICommentsResponseModel> => apiService.get(urls.comments)
}