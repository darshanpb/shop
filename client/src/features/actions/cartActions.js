import axios from "axios";
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  UPDATE_QUANTITY,
  LOAD_DATA,
} from "./cartActionTypes";
const loadData = (items) => ({
  type: LOAD_DATA,
  items,
});

/*asynchronous thunk action creator
calls the api, then dispatches the synchronous action creator
*/
export const fetchData = () => {
  return async (dispatch) => {
    try {
      let items = await axios.get("http://localhost:5000/api/Product");
      dispatch(loadData(items.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const addProduct = (item, id, navigate) => {
  let itemWith = { ...item, id };
  return async (dispatch) => {
    axios
      .post("http://localhost:5000/api/Product", itemWith)
      .then((res) => {
        navigate('/');
        return fetchData();
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
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
export const updateCartQuantity = (id, quantity) => {
  return {
    type: UPDATE_QUANTITY,
    id,
    quantity,
  };
};
