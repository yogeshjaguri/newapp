// Date: 09/04/2021

type Product = {
    id: string;
    name: string;
    price: number;
    // Add other properties specific to the product if needed
  };
  
  type State = {
    loading: boolean;
    isError: boolean;
    products: Product[];
    product: Product;
    productLoading: boolean;
    productError: boolean;
  };
  
  type Action =
    | { type: 'SET_LOADING' }
    | { type: 'SET_PRODUCT_LOADING' }
    | { type: 'GET_PRODUCTS'; payload: Product[] }
    | { type: 'GET_PRODUCT'; payload: Product }
    | { type: 'API_ERROR' }
    | { type: 'PRODUCT_API_ERROR' };
  
const productReducer =  (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_LOADING':
            return { ...state, loading: true }
        case 'SET_PRODUCT_LOADING':
            return { ...state, productLoading: true }
        case 'GET_PRODUCTS':
            return { ...state, loading: false, products: action.payload }
        case 'GET_PRODUCT':
            return { ...state, productLoading: false, product: action.payload }
        case 'API_ERROR':
            return { ...state, loading: false, isError: true }
        case 'PRODUCT_API_ERROR':
            return { ...state, productLoading: false, productError: true }
        default:
            return state;
    }
}

export default productReducer;