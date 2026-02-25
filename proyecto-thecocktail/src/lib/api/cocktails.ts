//import { Character } from "@/types";
import { Drink } from "@/types";
import { api } from "./api"


export const getCocktailByName = async (name: string) => {
    console.log(name);
    const response = await api.get(`/search.php?s=${name}`);
    return response.data;
};

export const getCocktailById = async (id: string) => {
    const response = await api.get(`/lookup.php?i=${id}`);
    console.log(response);
    return response.data;
}