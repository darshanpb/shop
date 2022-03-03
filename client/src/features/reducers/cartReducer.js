import axios from "axios";
const initialState = {};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let addedItem = state.items.find((item) => item.id === action.id);
      let existed_item = state.myCart.find((item) => item.id === action.id);
      if (existed_item) {
        let updatedItems = [...state.myCart];
        updatedItems = updatedItems.filter((item) => item.id !== action.id);
        return {
          ...state,
          myCart: [...updatedItems],
          total: state.total - existed_item.price,
        };
      } else {
        addedItem = { ...addedItem, inCart: true, quantity: 1 };
        let newTotal = state.total + addedItem.price;
        return {
          ...state,
          myCart: [...state.myCart, addedItem],
          total: newTotal,
        };
      }
      break;

    case "REMOVE_ITEM":
      console.log("here");
      let updatedCart = state.myCart.filter((item) => item.id !== action.id);
      return {
        ...state,
        myCart: updatedCart,
      };
      break;

    case "UPDATE_QUANTITY":
      let cartItems = [...state.myCart];

      cartItems.forEach((item) => {
        if (item.id === action.id) {
          item.quantity = action.quantity;
        }
      });

      return {
        ...state,
        myCart: cartItems,
      };
      break;

    case "ADD_PRODUCT":
      return {
        ...state,
        items: [action.item, ...state.items],
      };
      break;

    case "LOAD_DATA":
      return {
        ...state,
        items: action.items,
        myCart:[]
      };
    default:
      return state;
  }
};

export default cartReducer;
