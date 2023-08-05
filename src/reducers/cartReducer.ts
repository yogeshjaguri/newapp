type Product = {
    id: string;
    name: string;
    price: number;
    // Add other properties specific to the product if needed
  };

  
type CartItem = {
    id: string;
    amount: number;
    stock: number;
    product: Product;
    // Add other properties specific to your cart item if needed
  };

  
  type State = {
    cart: CartItem[];
    total: number;
    total_price: number;
    // Add other properties specific to your state if needed
  };
  
  type Action =
    | { type: 'ADD_TO_CART'; payload: CartItem }
    | { type: 'TOGGLE_AMOUNT'; payload: { id: string; value: 'inc' | 'dec'; stock: number } }
    | { type: 'REMOVE_ITEM'; payload: string }
    | { type: 'CLEAR_CART' }
    | { type: 'CART_TOTALS' };
    const cartReducer = (state: State, action: Action): State => {
        switch (action.type) {
          case 'ADD_TO_CART':
            const inCart = state.cart.find((item) => item.id === action.payload.id);
            
            if (inCart) {
              const newCart = state.cart.map((item) =>
                item.id === action.payload.id
                  ? {
                      ...item,
                      amount: Math.min(action.payload.stock, item.amount + action.payload.amount),
                    }
                  : item
              );
              
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
            const newCart = state.cart.map((item) =>
              item.id === action.payload.id
                ? {
                    ...item,
                    amount:
                      action.payload.value === 'inc'
                        ? Math.min(action.payload.stock, item.amount + 1)
                        : Math.max(1, item.amount - 1),
                  }
                : item
            );
            
            return {
              ...state,
              cart: newCart,
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
      
          case 'CART_TOTALS':
            const { total, total_price } = state.cart.reduce(
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