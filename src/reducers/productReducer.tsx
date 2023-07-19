// Date: 09/04/2021
const productReducer = (state, action) => {
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