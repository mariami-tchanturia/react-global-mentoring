import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { Button } from '../../common';
import styles from './GenreSelect.module.scss';

export const GenreSelect = ({ genres, activeGenre, setActiveGenre }) => {
  const { query, push } = useRouter();

  const handleChange = (label) => {
    setActiveGenre(label.toLowerCase());
    push({ query: { ...(query || {}), genre: label.toLowerCase() } });
  };

  return (
    <nav className={styles.genreSelect}>
      <ul className={styles.genreSelect__list}>
        {genres.map(({ value, label }) => (
          <li
            key={value}
            className={
              activeGenre.toLowerCase() === label.toLowerCase()
                ? styles.active
                : ''
            }
            data-testid='movie-active-genre'
          >
            <Button
              onClick={() => handleChange(label)}
              className='btn--transparent'
            >
              {label}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const GenreOptionsType = PropTypes.arrayOf(
  PropTypes.shape({
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  })
);

GenreSelect.propTypes = {
  genres: GenreOptionsType,
  activeGenre: PropTypes.string,
  setActiveGenre: PropTypes.func,
};

GenreSelect.defaultProps = {
  activeGenre: 'All',
};
