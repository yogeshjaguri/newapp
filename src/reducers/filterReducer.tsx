const filterReducer = (state, action) => {
    switch (action.type) {
        case 'GET_FILTERED_PORODUCTS':
            return { 
                ...state,
                filteredProducts: [...action.payload],
                all_products: [...action.payload]}
            case 'SORT_VALUE':
                return {
                    ...state,
                    sort: action.payload
                }
            case 'SORT_PRODUCTS':
                let newSortedProducts;
                const { filteredProducts, sort } = state;
                let sortedProducts = [...filteredProducts];

                const sortProducts = (a, b) => {
                    if (sort === 'lowest') {
                        return a.price - b.price;
                    } else if (sort === 'highest') {
                        return b.price - a.price;
                    } else if (sort === 'a-z') {
                        return a.title.localeCompare(b.title);
                    } else if (sort === 'z-a') {
                        return b.title.localeCompare(a.title);
                    }
                }
                newSortedProducts = sortedProducts.sort(sortProducts);

                return {
                    ...state,
                    filteredProducts: newSortedProducts
                };

            case 'UPDATE_FILTER_VALUE':
                const { name, value } = action.payload;
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        [name]: value
                    }
                }

            case 'FILTERED_PORODUCTS':
                const { all_products } = state;
                let newFilteredProducts = [...all_products];
                
                const { text } = state.filters;
                if (text) {
                    newFilteredProducts = newFilteredProducts.filter((product) => {
                        return product.title.toLowerCase().includes(text.toLowerCase());
                    });
                }
                
                return {
                    ...state,
                    filteredProducts: newFilteredProducts
                };


            default:
                return state;    
    }
}

export default filterReducer;
