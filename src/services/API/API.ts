import axios, { AxiosError } from "axios";

export const fetchData = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        return response.data;
    } catch (error: any) {
        throw new Error(error);
    }
}