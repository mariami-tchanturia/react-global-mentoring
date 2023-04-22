import PropTypes from 'prop-types';

import styles from './GenreSelect.module.scss';

export const GenreSelect = ({ genres, activeGenre, setActiveGenre }) => {
  return (
    <nav className={styles.genreSelect}>
      <ul className={styles.genreSelect__list}>
        {genres.map(({ value, label }) => (
          <li
            key={value}
            className={`${activeGenre === label ? styles.active : ''}`}
          >
            <a href='#' title={label} onClick={() => setActiveGenre(label)}>
              {label}
            </a>
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
  activeGenre: PropTypes.string,
  setActiveGenre: PropTypes.func,
  genres: GenreOptionsType,
};

GenreSelect.defaultProps = {
  activeGenre: 'All',
};
