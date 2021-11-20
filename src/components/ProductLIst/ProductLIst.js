import Product from '../Product/Product';
import { useProducts, useProductsActions } from '../Providers/ProductsProvider';

const ProductList = () => {
  const dispatch = useProductsActions();
  const products = useProducts();

  return (
    <>
      {products.length !== 0 ? (
        <>
          {products.map((item) => {
            return (
              <Product
                product={item}
                key={item.id}
                onDelete={() => dispatch({ type: 'remove', id: item.id })}
                onIncrement={() => dispatch({ type: 'increment', id: item.id })}
                onChange={(e) =>
                  dispatch({ type: 'edit', id: item.id, event: e })
                }
                onDecrement={() => dispatch({ type: 'decrement', id: item.id })}
              />
            );
          })}
        </>
      ) : (
        <div>
          <h3 style={{ color: 'tomato' }}>No Products in Your Cart</h3>
        </div>
      )}
    </>
  );
};

export default ProductList;
