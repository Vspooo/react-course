import {IRes} from "../resType";
import {IPostResponseModel} from "../Models/responseModels/postResponseModel";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postsApiService = {
    getPostsOfUser : (id:string) : IRes<IPostResponseModel> => apiService.get(urls.postsById(id))

}

export {
    postsApiService
}