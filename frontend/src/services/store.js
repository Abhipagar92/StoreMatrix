import axios from "axios";
import config from "./config";

export const getStores = async () => {

    const response = await axios.get(
        `${config.BASE_URL}/stores`
    );

    return response.data;
};

export const getStoreDetails = async (
    storeId
) => {

    const response = await axios.get(
        `${config.BASE_URL}/stores/${storeId}`
    );

    return response.data;
};