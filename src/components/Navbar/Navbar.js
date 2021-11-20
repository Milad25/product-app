import { useProducts } from '../Providers/ProductsProvider';
import styles from './Navbar.module.css';

const Navbar = () => {
  const products = useProducts();
  const totalItems = products.filter((product) => product.quantity > 0).length;

  return (
    <header className={styles.navbar}>
      <h2>Shopping</h2>
      <span>{totalItems}</span>
    </header>
  );
};

export default Navbar;
