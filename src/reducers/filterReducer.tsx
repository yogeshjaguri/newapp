    type Product = {
        id: string;
        title: string;
        price: number;
        category: string;
        brand: string;
        // Add other properties specific to the product if needed
      };
      
      type Filters = {
        text: string;
        category: string;
        brand: string;
        maxPrice: number;
        price: number;
        minPrice: number;
        // Add other properties specific to the filters if needed
      };
      
      type State = {
        all_products: Product[];
        filteredProducts: Product[];
        filters: Filters;
        sort: string;
        // Add other properties specific to your state if needed
      };
      
      type Action =
        | { type: 'GET_FILTERED_PORODUCTS'; payload: Product[] }
        | { type: 'SORT_VALUE'; payload: string }
        | { type: 'SORT_PRODUCTS' }
        | { type: 'UPDATE_FILTER_VALUE'; payload: { name: keyof Filters; value: any } }
        | { type: 'FILTERED_PORODUCTS' }
        | { type: 'CLEAR_FILTERS' };
      
      const filterReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'GET_FILTERED_PORODUCTS':
            let priceArr = action.payload.map((curElem) => curElem.price);
            let maxPrice = Math.max(...priceArr);
            // console.log(maxPrice)

            return { 
                ...state,
                filteredProducts: [...action.payload],
                all_products: [...action.payload],

                filters: { ...state.filters, maxPrice, price: maxPrice 
                }
            }

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
                
                const { text,category,brand,price } = state.filters;
                if (text) {
                    newFilteredProducts = newFilteredProducts.filter((item) => {
                        return item.title.toLowerCase().includes(text.toLowerCase());
                    });
                }
                if (category !== 'All') {
                    newFilteredProducts = newFilteredProducts.filter((item) => {
                        return item.category === category;
                    });
                }

                if(brand !== 'All') {
                    newFilteredProducts = newFilteredProducts.filter((item) => {
                        return item.brand === brand;
                    });
                }

                if (price === 0) {
                    newFilteredProducts = newFilteredProducts.filter(
                      (curElem) => curElem.price == price
                    );
                    } else {
                    newFilteredProducts = newFilteredProducts.filter(
                        (curElem) => curElem.price <= price
                    );
                    }
                
                return {
                    ...state,
                    filteredProducts: newFilteredProducts
                };

                case "CLEAR_FILTERS":
                return {
                    ...state,
                    filters: {
                    ...state.filters,
                    text: "",
                    category: "All",
                    brand: "All",
                    maxPrice: 0,
                    price: state.filters.maxPrice,
                    minPrice: 0,
                    },
                };


            default:
                return state;    
    }
}

export default filterReducer;
