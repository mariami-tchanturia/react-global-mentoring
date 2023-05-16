import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';

import { Button, Input } from '../../common';
import styles from './SearchForm.module.scss';

export const SearchForm = () => {
  const { query, push } = useRouter();
  const [searchQuery, setSeachQuery] = useState(query.query || '');

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      push({ query: { ...(query || {}), query: searchQuery } });
    },
    [searchQuery, query, push]
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
