import React from 'react';
import styles from './GenreSelect.module.scss';

function GenreSelect({ genres, defaultGenre, onChange }) {
  const [currentGenre, setCurrentGenre] = React.useState(defaultGenre || 'All');

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
}

export default GenreSelect;
