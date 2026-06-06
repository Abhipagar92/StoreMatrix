import axios from "axios";

import config from "./config";
import { getToken } from "../utils/storage";

export const getDashboardSummary =
    async () => {

        const response =
            await axios.get(
                `${config.BASE_URL}/admin/dashboard`,
                {
                    headers: {
                        Authorization:
                            `Bearer ${getToken()}`
                    }
                }
            );

        return response.data;
    };


    export const getUsers = async () => {

    const response =
        await axios.get(
            `${config.BASE_URL}/admin/users`,
            {
                headers: {
                    Authorization:
                        `Bearer ${getToken()}`
                }
            }
        );

    return response.data;
};


export const getStores = async () => {

    const response = await axios.get(
        `${config.BASE_URL}/admin/stores`,
        {
            headers: {
                Authorization:
                    `Bearer ${getToken()}`
            }
        }
    );

    return response.data;
};

export const createStoreOwner = async (
    ownerData
) => {

    const response = await axios.post(
        `${config.BASE_URL}/admin/store-owner`,
        ownerData,
        {
            headers: {
                Authorization:
                    `Bearer ${getToken()}`
            }
        }
    );

    return response.data;
};

export const createStore = async (
    storeData
) => {

    const response = await axios.post(
        `${config.BASE_URL}/admin/store`,
        storeData,
        {
            headers: {
                Authorization:
                    `Bearer ${getToken()}`
            }
        }
    );

    return response.data;
};

export const deleteStore = async (
    storeId
) => {

    const response = await axios.delete(
        `${config.BASE_URL}/admin/stores/${storeId}`,
        {
            headers: {
                Authorization:
                    `Bearer ${getToken()}`
            }
        }
    );

    return response.data;
};