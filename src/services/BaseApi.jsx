import axios from "axios";

export const apiClient = axios.create({
    baseURL: "https://app.wewantwaste.co.uk/api"
});
