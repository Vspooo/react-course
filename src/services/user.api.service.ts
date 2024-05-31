import {IRes} from "../resType";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IUserResponseModel} from "../Models/responseModels/userResponseModel";

const userApiService = {
    getAllUsers: () : IRes<IUserResponseModel> => apiService.get(urls.users),
}

export {
userApiService
}