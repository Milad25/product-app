import './App.css';

import ProductList from './components/ProductLIst/ProductLIst';
import Navbar from './components/Navbar/Navbar';

import Wrapper from './components/hoc/Wrapper';
import ProductsProvider from './components/Providers/ProductsProvider';
import Filter from './components/Filter/Filter';

const App = () => {
  return (
    <>
      <ProductsProvider>
        <Navbar />
        <Filter />
        <ProductList />
      </ProductsProvider>
    </>
  );
};

export default Wrapper(App, 'container');
