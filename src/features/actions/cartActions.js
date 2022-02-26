import {
  ADD_TO_CART,
  REMOVE_ITEM,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  ADD_SHIPPING,
} from "./cart-actions";

//add to cart
export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id,
  };
};

//remove item from cart
export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id,
  };
};

//decrease item quantity 
export const decreaseQuantity = (id) => {
  return {
    type: DECREASE_QUANTITY,
    id,
  };
};

//increase item quantity
export const increaseQuantity = (id) => {
  return {
    type: INCREASE_QUANTITY,
    id,
  };
};
