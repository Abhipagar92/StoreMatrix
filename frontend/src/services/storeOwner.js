import axios from "axios";

import config from "./config";

import {
    getToken
} from "../utils/storage";

export const getDashboard = async () => {

    const response = await axios.get(
        `${config.BASE_URL}/store-owner/dashboard`,
        {
            headers: {
                Authorization:
                    `Bearer ${getToken()}`
            }
        }
    );

    return response.data;
};