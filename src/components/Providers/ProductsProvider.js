import React, { useContext, useReducer } from 'react';
import { productsData } from '../db/proudcts';
import _ from 'lodash';

const ProductsContext = React.createContext();
const ProductsContextDispatcher = React.createContext();

// const initialState = [
//   { name: 'react course', price: '100$', id: 1, quantity: 1 },
//   { name: 'nodejs course', price: '90$', id: 2, quantity: 1 },
//   { name: 'js course', price: '70$', id: 3, quantity: 1 },
// ];

const reducer = (state, action) => {
  switch (action.type) {
    case 'remove': {
      const filteredProducts = state.filter((p) => p.id !== action.id);
      return filteredProducts;
    }

    case 'increment': {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.quantity++;
      const updatedProducts = [...state];
      updatedProducts[index] = product;
      return updatedProducts;
    }

    case 'edit': {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.name = action.event.target.value;
      const updatedProducts = [...state];
      updatedProducts[index] = product;
      return updatedProducts;
    }

    case 'decrement': {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      if (product.quantity === 1) {
        const filteredProducts = state.filter((p) => p.id !== action.id);
        return filteredProducts;
      } else {
        product.quantity--;
        const updatedProducts = [...state];
        updatedProducts[index] = product;
        return updatedProducts;
      }
    }

    case 'filter': {
      const value = action.selectedOption.value;
      if (value === '') {
        return productsData;
      } else {
        const updatedProducts = productsData.filter(
          (p) => p.availableSizes.indexOf(value) >= 0
        );
        return updatedProducts;
      }
    }

    case 'sort': {
      // for sorting array of objects you can either use Array.prototype.sort()
      // or lodash library

      const value = action.selectedOption.value;
      const products = [...state];

      // const highToLow = (a, b) => b.price - a.price;

      // const lowToHigh = (a, b) => a.price - b.price;

      if (value === 'highest') {
        // const updatedProducts = products.sort(highToLow);
        const updatedProducts = _.orderBy(products, ['price'], ['desc']); // use lodash to sort array by price
        return updatedProducts;
      } else if (value === 'lowest') {
        // const updatedProducts = products.sort(lowToHigh);
        const updatedProducts = _.orderBy(products, ['price'], ['asc']); // use lodash to sort array by price
        return updatedProducts;
      }
    }

    case 'search': {
      const searchValue = action.event.target.value;
      const filterValue = action.filter;

      if (searchValue === '' && filterValue === '') {
        return productsData;
      } else if (searchValue !== '' && filterValue === '') {
        const updatedProducts = productsData.filter((p) =>
          p.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        return updatedProducts;
      }

      if (searchValue === '') {
        return state;
      } else {
        const updatedProducts = state.filter((p) =>
          p.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        return updatedProducts;
      }
    }

    default:
      return state;
  }
};

const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, productsData);

  return (
    <ProductsContext.Provider value={products}>
      <ProductsContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductsContextDispatcher.Provider>
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductsContext);
export const useProductsActions = () => useContext(ProductsContextDispatcher);
