import axios, {AxiosResponse} from 'axios';
import {ProductType} from "../models";

export class ProductsService {
    static async getAllProducts(): Promise<AxiosResponse<ProductType[]>> {
        return await axios.get('products');
    }

    static async getProductBySearchName(searchName: string): Promise<AxiosResponse<ProductType[]>> {
        return await axios.get(`products?search_name=${searchName}`)
    }
}