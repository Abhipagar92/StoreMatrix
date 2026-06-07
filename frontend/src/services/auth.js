import axios from "axios";
import config from "./config";

export const loginUser = async (email, password) => {

    const response = await axios.post(
        `${config.BASE_URL}/auth/login`,
        {
            email,
            password
        }
    );

    return response.data;
};

export const registerUser = async (user) => {

    const response = await axios.post(
        `${config.BASE_URL}/auth/register`,
        user
    );

    return response.data;
};


export const changePassword = async (
    data
) => {

    const response = await axios.put(
        `${config.BASE_URL}/auth/change-password`,
        data,
        {
            headers: {
                Authorization:
                    `Bearer ${getToken()}`
            }
        }
    );

    return response.data;
};