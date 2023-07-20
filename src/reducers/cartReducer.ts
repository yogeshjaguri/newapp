const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            let {product} = action.payload;
            console.log(product);
        return {
            ...state,
            cart: [...state.cart, action.payload],
        };
        
        case 'REMOVE_FROM_CART':
        return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
        default:
        return state;
    }
    }
    export default cartReducer;