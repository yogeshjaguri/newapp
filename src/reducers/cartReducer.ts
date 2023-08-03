const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
        // check if item is in cart already
        const inCart = state.cart.find((item) =>
            item.id === action.payload.id ? true : false
        );

        if (inCart) {
            let newCart = state.cart.map((item) => {
            if (item.id === action.payload.id) {
                let newAmount = item.amount + action.payload.amount;

                if (newAmount >= item.stock) {
                newAmount = item.stock;
                }
                
                return {
                ...item,
                amount: newAmount,
                };
            } else {
                return item;
            }
        });
        return {
            ...state,
            cart: newCart,
        };
        } else {
        return {
            ...state,
            cart: [...state.cart, action.payload],
        };
        }


        case 'TOGGLE_AMOUNT':
        return {
            ...state,
            cart: state.cart.map((item) => {
                console.log(item.stock)
                if (item.id === action.payload.id) {
                    if (action.payload.value === 'inc') {
                        let newAmount = item.amount + 1;
                        
                if (newAmount >= item.stock) {
                    newAmount = item.stock;
                }

                return {
                    ...item,
                    amount: newAmount,
                };
                }
                if (action.payload.value === 'dec') {
                let newAmount = item.amount - 1;
                    
                if (newAmount <= 1) {
                    newAmount = 1;
                }

                return {
                    ...item,
                    amount: newAmount,
                };
                }
            }
            return item;
            }),
        };



        case 'REMOVE_ITEM':
        return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
        };

        case 'CLEAR_CART':
        return {
            ...state,
            cart: [],
        };

        
        // case 'GET_TOTALS':
        //     let updatedTotal = state.cart.reduce((acc, item) => {
        //         let { amount } = item;
                
        //         return (acc += amount);
        //     }, 0);
                 
        //     return {
        //         ...state,
        //         total: updatedTotal,
        //     };

        // case 'CART_TOTAL_PRICE':
        //     let updatedTotalPrice = state.cart.reduce((acc, item) => {
        //         let { amount, product } = item;

        //         return (acc += amount * product.price);
        //     }, 0);

        //     return {
        //         ...state,
        //         total_price: updatedTotalPrice,
        //     };

        case 'CART_TOTALS':
            let { total, total_price } = state.cart.reduce(
                (acc, curr) => {
                    const { amount, product } = curr;
                    const { price } = product;
                    acc.total += amount;
                    acc.total_price += price * amount;
                    return acc;
                },
                {
                    total: 0,
                    total_price: 0,
                }
            );
            return { ...state, total, total_price };

        default:
            return state;
    }
};
            
export default cartReducer;