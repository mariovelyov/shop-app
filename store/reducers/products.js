import PRODUCTS from "../../data/dummy-data";

const dummyDataAllProducts = PRODUCTS;

// initialize user products for now with the user u1
const dummyDataUserProducts = PRODUCTS.filter(
  (product) => product.ownerId === "u1"
);

const initialState = {
  availableProducts: dummyDataAllProducts,
  userProducts: dummyDataUserProducts,
};

const productsReducer = (state = initialState, action) => {
  return state;
};

export default productsReducer;
