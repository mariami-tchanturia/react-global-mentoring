import { useCallback, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Button, Input } from '../../common';
import styles from './SearchForm.module.scss';

export const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSeachQuery] = useState(
    searchParams.get('query') || ''
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      const existingParams = Object.fromEntries(searchParams.entries());
      const newParams = { query: searchQuery };
      const mergedParams = { ...existingParams, ...newParams };

      setSearchParams(new URLSearchParams(mergedParams));
    },
    [searchQuery, searchParams, setSearchParams]
  );

  return (
    <div className={styles.searchForm}>
      <form className={styles.searchForm__form} onSubmit={handleSubmit}>
        <Input
          placeholderText='What do you want to watch?'
          className='searchForm__input'
          value={searchQuery}
          onChange={setSeachQuery}
          required={false}
        />
        <Button type='submit' className='btn--primary'>
          Search
        </Button>
      </form>
    </div>
  );
};
