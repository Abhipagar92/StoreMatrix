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