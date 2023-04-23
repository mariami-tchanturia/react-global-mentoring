import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { Button, Input } from '../../common';
import styles from './SearchForm.module.scss';

export const SearchForm = ({ setSearchQuery }) => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      setSearchQuery(searchKeyword);
    },
    [searchKeyword, setSearchQuery]
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
