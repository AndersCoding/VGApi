import axios from "axios";
import { IReview } from "../interface/IReview";

const reviewApiEndpoint = "http://localhost:5277/proxy/reviews";

const getAllReviews = async (): Promise<IReview[]> => {
    try {
        const result = await axios.get<IReview[]>(reviewApiEndpoint);
        return result.data;
    } catch (error) {
        console.log("Error fetching reviews", error);
        throw error;
    }
};

export default {
    getAllReviews,
};
