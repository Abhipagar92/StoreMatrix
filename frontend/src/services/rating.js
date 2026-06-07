import axios from "axios";

import config from "./config";
import { getToken } from "../utils/storage";

export const submitRating = async (
    storeId,
    rating
) => {

    const response = await axios.post(
        `${config.BASE_URL}/ratings`,
        {
            storeId,
            rating
        },
        {
            headers: {
                Authorization:
                    `Bearer ${getToken()}`
            }
        }
    );

    return response.data;
};

export const updateRating = async (
    storeId,
    rating
) => {

    const response = await axios.put(
        `${config.BASE_URL}/ratings/${storeId}`,
        {
            rating
        },
        {
            headers: {
                Authorization:
                    `Bearer ${getToken()}`
            }
        }
    );

    return response.data;
};