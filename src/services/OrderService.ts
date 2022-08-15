import axios, {AxiosResponse} from 'axios';
import {OrderType} from "../models";

export class OrderService {
    static async sendOrder(data: OrderType): Promise<AxiosResponse<void>> {
        return await axios.post(`orders`, data)
    }
}