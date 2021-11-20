import styles from './Product.module.css';
import { BiTrash } from 'react-icons/bi';

const Product = (props) => {
  const { product, onDecrement, onIncrement, onDelete } = props;

  return (
    <div className={styles.product}>
      <p>Product Name: {product.title}</p>
      <p>Product Price: {product.price}</p>

      <span className={styles.value}>{product.quantity}</span>

      <button
        onClick={onDecrement}
        className={`${styles.button} ${
          product.quantity === 1 && styles.remove
        }`}
      >
        {product.quantity === 1 ? <BiTrash /> : '-'}
      </button>

      <button
        onClick={onIncrement}
        className={`${styles.button} ${styles.inc}`}
      >
        +
      </button>
      <button onClick={onDelete} className={styles.button}>
        delete
      </button>
    </div>
  );
};

export default Product;
