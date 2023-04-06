import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './GenreSelect.module.scss';

const GenreSelect = ({ genres, defaultGenre, onChange }) => {
  const [currentGenre, setCurrentGenre] = useState(defaultGenre);

  return (
    <div className={styles.genreSelect}>
      <ul className={styles.genreSelect__list}>
        {genres.map(({ id, name }) => (
          <li
            key={id}
            className={`${currentGenre === name ? styles.active : ''}`}
            onClick={() => {
              onChange(name);
              setCurrentGenre(name);
            }}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
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

export default GenreSelect;
