import {IRes} from "../types/resType";
import {IPostResponseModel} from "../models/responseModels/postsResponseModel";
import {apiService} from "./api.service";
import {urls} from "../urls/urls";

export let postsService = {
    getAll: () : IRes<IPostResponseModel> => apiService.get(urls.posts)
}

