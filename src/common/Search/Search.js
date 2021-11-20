import { useState } from 'react';
import { useProductsActions } from '../../components/Providers/ProductsProvider';
import styles from './Search.module.css';

const SearchBar = ({ filter, sort }) => {
  const [value, setValue] = useState('');
  const dispatch = useProductsActions();

  const changeHandler = (e) => {
    if (sort === '') {
      dispatch({ type: 'filter', selectedOption: filter });
      dispatch({ type: 'search', event: e, filter });
      setValue(e.target.value);
    } else {
      dispatch({ type: 'filter', selectedOption: filter });
      dispatch({ type: 'sort', selectedOption: sort });
      dispatch({ type: 'search', event: e, filter });
      setValue(e.target.value);
    }
  };

  return (
    <div className={styles.formControl}>
      <div>Search For</div>
      <input
        type='text'
        value={value}
        placeholder='search for ...'
        onChange={changeHandler}
      />
    </div>
  );
};

export default SearchBar;
