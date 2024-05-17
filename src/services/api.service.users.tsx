import {IUserModel} from "../models/basicModels/userModel";
import {IRes} from "../types/resType";
import {apiService} from "./api.service";
import {urls} from "../urls/urls";
import {IUserResponseModel} from "../models/responseModels/usersResponseModel";

export const userService = {
    getAll:():IRes<IUserResponseModel> => apiService.get(urls.users)
}

