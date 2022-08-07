import axios, {AxiosResponse} from 'axios';
import {HomePageType, LayoutType} from "../models";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export class AppService {
    static async getAppLayout(): Promise<AxiosResponse<LayoutType>> {
        return await axios.get('layout');
    }

    static async getHomePageData(): Promise<AxiosResponse<HomePageType>> {
        return await axios.get('home_page');
    }

    static async getDepartments(): Promise<AxiosResponse<string[]>> {
        return await axios.get('departments');
    }
}