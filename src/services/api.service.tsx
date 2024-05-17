import axios from "axios";
import {baseURL} from "../urls/urls";

let apiService = axios.create({baseURL});

export{
    apiService
}