import axios, {AxiosResponse} from "axios";
import {FeedbackType} from "../models";

export class FeedbackService {
    static async getFeedbacks(): Promise<AxiosResponse<FeedbackType[]>> {
        return await axios.get('feedbacks?_limit=3&rating_gte=3.5');
    }

    static async postFeedback(data: FeedbackType): Promise<AxiosResponse<FeedbackType>> {
        return await axios.post('feedbacks', data)
    }
}