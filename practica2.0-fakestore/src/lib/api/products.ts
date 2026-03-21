import { api } from "./api";

export const getAllProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (id: string) => {
  try {
    const response = await api.get(`/product/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductByName = async (name: string) => {
  try {
    const response = await api.get(`/product/search?q=${name}`);
    return response.data.products;
  } catch (error) {
    console.log(error);
  }
};

export const getCategoryList = async () => {
    try {
    const response = await api.get(`/products/category-list`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
