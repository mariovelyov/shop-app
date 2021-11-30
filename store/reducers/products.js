import PRODUCTS from "../../data/dummy-data";
import { DELETE_PRODUCT } from "../actions/products";

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
  switch (action.type) {
    case DELETE_PRODUCT:
      return {
        ...state,
        availableProducts: state.availableProducts.filter(
          (product) => product.id !== action.pid
        ),
        userProducts: state.userProducts.filter(
          (product) => product.id !== action.pid
        ),
      };

    default:
      return state;
  }
};

export default productsReducer;
