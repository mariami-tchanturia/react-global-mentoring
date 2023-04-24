import PropTypes from 'prop-types';
import { Link, useSearchParams } from 'react-router-dom';

import styles from './GenreSelect.module.scss';

export const GenreSelect = ({ genres, activeGenre, setActiveGenre }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (label) => {
    setActiveGenre(label);

    const existingParams = Object.fromEntries(searchParams.entries());
    const newParams = { genre: label };
    const mergedParams = { ...existingParams, ...newParams };

    setSearchParams(new URLSearchParams(mergedParams));
  };

  return (
    <nav className={styles.genreSelect}>
      <ul className={styles.genreSelect__list}>
        {genres.map(({ value, label }) => (
          <li
            key={value}
            className={activeGenre === label ? styles.active : ''}
            data-testid='movie-active-genre'
          >
            <button onClick={() => handleChange(label)}>{label}</button>
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
