import axios, {AxiosResponse} from 'axios';
import {LayoutType} from "../models";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export class AppService {
    static async getAppLayout(): Promise<AxiosResponse<LayoutType>> {
        return axios.get('layout');
    }
}