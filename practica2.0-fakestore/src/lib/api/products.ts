import { randomInt } from "crypto";
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
};

export const getProducstOrderByRating = async () => {
  try {
    const response = await api.get(
      `/products?sortBy=rating&order=desc&limit=4`,
    );
    return response.data.products;
  } catch (error) {
    console.log(error);
  }
};

export const getProducstOrderByDiscount = async () => {
  try {
    const response = await api.get(
      `/products?sortBy=discountPercentage&order=desc&limit=4`,
    );
    return response.data.products;
  } catch (error) {
    console.log(error);
  }
};

export const getImagesOfRandomProducts = async () => {
  const skip = Math.floor(Math.random() * 101);

  try {
    const response = await api.get(
      `/products?limit=4&skip=${skip}&select=id,images`,
    );

    return response.data.products;
  } catch (error) {
    console.log(error);
  }
};
