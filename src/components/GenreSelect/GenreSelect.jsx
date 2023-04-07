import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './GenreSelect.module.scss';

export const GenreSelect = ({ genres, defaultGenre, onChange }) => {
  const [currentGenre, setCurrentGenre] = useState(defaultGenre);

  return (
    <nav className={styles.genreSelect}>
      <ul className={styles.genreSelect__list}>
        {genres.map(({ id, name }) => (
          <li key={id}>
            <a
              href='#'
              className={`${currentGenre === name ? styles.active : ''}`}
              title={name}
              onClick={() => {
                onChange(name);
                setCurrentGenre(name);
              }}
            >
              {name}
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
  genres: PropTypes.array,
};

GenreSelect.defaultProps = {
  defaultGenre: 'All',
};
