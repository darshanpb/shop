const initialState = {
    items:[],
    cart:[],
    total:0,
    discount:0
};
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "add":
            
            break;
    
        default:
            return state;
    }
};

export default cartReducer;
