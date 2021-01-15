import { products } from "./api";

export const getProductCategory = async (categoryCode) => {
  try {
    const response = await products().getProductCategoryByCode(categoryCode);
    return response.data;
  } catch (err) {
    return console.log(err);
  }
};
