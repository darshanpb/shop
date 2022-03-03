import axios from "axios";
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  UPDATE_QUANTITY,
  ADD_PRODUCT,
  LOAD_DATA
} from "./cartActionTypes";
const loadData = (items) => ({
  type: LOAD_DATA,
  items
});


/*asynchronous thunk action creator
calls the api, then dispatches the synchronous action creator
*/
export const fetchData =  () => {
  return async dispatch => {
      try {
          let items = await axios.get('http://localhost:5000/api/Product');
          dispatch(loadData(items.data))
      }
      catch(e){
          console.log(e)
      }
  }
}

export const postData =  (item) => {
  return async dispatch => {
      try {
          let res = await axios.post('http://localhost:5000/api/Product');
          console.log(res)
      }
      catch(e){
          console.log(e)
      }
  }
}
export const addProduct = (item)=>{
  postData(item);
  return {
    type: ADD_PRODUCT,
    item
  }
}
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
    quantity
  };
};
