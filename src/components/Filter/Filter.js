import { useEffect, useState } from 'react';
import { useProducts, useProductsActions } from '../Providers/ProductsProvider';
import styles from './filter.module.css';
import SelectComponent from '../../common/Select/Select';
import SearchBar from '../../common/Search/Search';

const options = [
  { value: '', label: 'All' },
  { value: 'XS', label: 'XS' },
  { value: 'S', label: 'S' },
  { value: 'M', label: 'M' },
  { value: 'L', label: 'L' },
  { value: 'XL', label: 'XL' },
  { value: 'XXL', label: 'XXL' },
];

const sortOptions = [
  { value: 'highest', label: 'highest' },
  { value: 'lowest', label: 'lowest' },
];

const Filter = () => {
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');
  const dispatch = useProductsActions();
  const products = useProducts();

  useEffect(() => {
  }, [filter, products])

  const filterHandler = (selectedOption) => {
    if (sort === '') {
      dispatch({ type: 'filter', selectedOption });
      setFilter(selectedOption);
    } else {
      dispatch({ type: 'filter', selectedOption });
      dispatch({ type: 'sort', selectedOption: sort });
      setFilter(selectedOption);
    }
  };

  const sortHandler = (selectedOption) => {
    dispatch({ type: 'sort', selectedOption });
    setSort(selectedOption);
  };

  return (
    <><SearchBar filter={filter} sort={sort} />
     <div className={styles.filter}>
      
      <SelectComponent
        value={filter}
        onChange={filterHandler}
        options={options}
        title='filter by size'
      />
      <SelectComponent
        value={sort}
        onChange={sortHandler}
        options={sortOptions}
        title='sort by price'
      />
    </div></>
   
  );
};

export default Filter;
