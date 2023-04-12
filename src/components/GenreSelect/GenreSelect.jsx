import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './GenreSelect.module.scss';

export const GenreSelect = ({ genres, defaultGenre, onChange }) => {
  const [currentGenre, setCurrentGenre] = useState(defaultGenre);

  return (
    <nav className={styles.genreSelect}>
      <ul className={styles.genreSelect__list}>
        {genres.map(({ value, label }) => (
          <li key={value}>
            <a
              href='#'
              className={`${currentGenre === label ? styles.active : ''}`}
              title={label}
              onClick={() => {
                onChange(label);
                setCurrentGenre(label);
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

GenreSelect.propTypes = {
  defaultGenre: PropTypes.string,
  onChange: PropTypes.func,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

GenreSelect.defaultProps = {
  defaultGenre: 'All',
};
