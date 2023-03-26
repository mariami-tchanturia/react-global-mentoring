import React from 'react';
import styles from './GenreSelect.module.scss';

function GenreSelect({genres, defaultGenre , onSelect}) {
	const [currentGenre , setCurrentGenre] = React.useState(defaultGenre || 'All');

	return (
    <div className={styles.genreSelect}>
      <h1 className={styles.genreSelect__title}>GenreSelect Component</h1>
      <ul className={styles.genreSelect__list}>
        {genres.map(option => (
          <li
            key={option.id}
            className={`${currentGenre === option.name ? styles.active : ''}`}
            onClick={() => {
                onSelect(option.name);
                setCurrentGenre(option.name);
            }}>
            {option.name}
          </li>
        ))}
      </ul>
    </div>
	)
}

export default GenreSelect;
