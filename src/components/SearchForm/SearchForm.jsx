import { useCallback, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button, Input } from '../../common';
import styles from './SearchForm.module.scss';

export const SearchForm = ({ setSearchQuery }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchKeyword, setSearchKeyword] = useState(
    searchParams.get('query') || ''
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      setSearchQuery(searchKeyword);

      const existingParams = Object.fromEntries(searchParams.entries());
      const newParams = { query: searchKeyword };
      const mergedParams = { ...existingParams, ...newParams };

      setSearchParams(new URLSearchParams(mergedParams));
    },
    [searchKeyword, setSearchQuery, searchParams, setSearchParams]
  );

  return (
    <div className={styles.searchForm}>
      <form className={styles.searchForm__form} onSubmit={handleSubmit}>
        <Input
          placeholderText='What do you want to watch?'
          className='searchForm__input'
          value={searchKeyword}
          onChange={setSearchKeyword}
          required={false}
        />
        <Button type='submit' className='btn--primary'>
          Search
        </Button>
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  setSearchQuery: PropTypes.func,
};
