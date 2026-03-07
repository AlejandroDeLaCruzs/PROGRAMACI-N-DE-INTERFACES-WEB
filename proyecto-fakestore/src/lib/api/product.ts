import { api } from "./api"


export const clothtesProducts = async(offset: string) => {
    try {
        const response = await api.get(`/products?categoryId=1&offset=${offset}&limit=30`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}