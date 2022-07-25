/*node-modules*/
import {AxiosResponse} from 'axios';

/*http*/
import $api from '../http';
import {LayoutType} from "../models";

export class AppService {
    static async getAppLayout(): Promise<AxiosResponse<LayoutType>> {
        return $api.get('layout');
    }
}