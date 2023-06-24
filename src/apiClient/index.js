import axios from "axios";
import { DEFAULT_API_KEY, API_URL } from "../config"
// import DEFAULT_API_KEY from "../config"
export const apiClient = axios.create({
    baseURL: API_URL,
    timeout: 50000,
    headers: {
        "Content-Type": "application/json",
    },
});

export function apiClientPostPublic(apiUrl, data, callback) {
  apiClient.defaults.headers.common.Authorization = DEFAULT_API_KEY;
    apiClient
        .post(`${apiUrl}`, data)
        .then((response) => {
            let successMessage;
            if (response && response.data) {
                successMessage = response.data.message;
            }
            return callback(null,);
        })
        .catch((error) => {
            console.log(error);
        });
}