import React from 'react';
import styles from './GenreSelect.module.scss';

function GenreSelect({ genres, defaultGenre, onSelect }) {
  const [currentGenre, setCurrentGenre] = React.useState(defaultGenre || 'All');

  return (
    <div className={styles.genreSelect}>
      <h1 className={styles.genreSelect__title}>GenreSelect Component</h1>
      <ul className={styles.genreSelect__list}>
        {genres.map((genre) => (
          <li
            key={genre.id}
            className={`${currentGenre === genre.name ? styles.active : ''}`}
            onClick={() => {
              onSelect(genre.name);
              setCurrentGenre(genre.name);
            }}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GenreSelect;
