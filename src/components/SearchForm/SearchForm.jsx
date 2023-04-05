import { useState } from 'react';
import PropTypes from 'prop-types';

import { Button, Input } from '../../common';

import styles from './SearchForm.module.scss';

const SearchForm = ({ initialSearchQuery, onSearch, searchResult }) => {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);

  const handleKeyUp = ({ key }) => {
    if (key === 'Enter') {
      console.log('Enter was triggered');
      onSearch(searchQuery);
    }
  };

  return (
    <>
      <div className={styles.searchForm}>
        <div className={styles.searchForm__form}>
          <Input
            placeholderText='What do you want to watch?'
            className='searchForm__input'
            value={searchQuery}
            onChange={setSearchQuery}
            onKeyUp={handleKeyUp}
            required={false}
          />
          <Button
            onClick={() => onSearch(searchQuery)}
            className='btn--primary'
          >
            Search
          </Button>
        </div>
        <div className={styles.searchResult} data-cy='search-result-container'>
          {searchResult}
        </div>
      </div>
    </>
  );
};

SearchForm.propTypes = {
  initialSearchQuery: PropTypes.string,
  onSearch: PropTypes.func,
};

SearchForm.defaultProps = {
  initialSearchQuery: '',
};

export default SearchForm;
