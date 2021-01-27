import { products } from "./api";

export const getProductCategory = async (categoryCode) => {
  // this function returns a products category given a code e.g. CPU, RAM or GPU
  try {
    const response = await products().getProductCategoryByCode(categoryCode);
    return response.data;
  } catch (err) {
    return console.log(err);
  }
};

export const getProduct = async (productId) => {
  // this function returns a products category given a code e.g. CPU, RAM or GPU
  try {
    const response = await products().getProduct(productId);
    return response.data;
  } catch (err) {
    return console.log(err);
  }
};
