import { GenreSelect, MovieTile, SortControl } from '..';
import styles from './MoviesListing.module.scss';

const MoviesListing = ({ movies, genres, options, setPreview }) => (
  <main className={styles.moviesWrapper}>
    <div className='container-lg'>
      <div className={styles.filterAndSort}>
        <GenreSelect
          genres={genres}
          defaultGenre='All'
          onChange={(genre) => console.log(genre)}
        />
        <SortControl
          label='Sort by'
          options={options}
          defaultOption='date'
          onSort={(option) => console.log(option)}
        />
      </div>

      <div className={styles.movies}>
        {movies.map((movie) => (
          <MovieTile key={movie.id} movie={movie} setPreview={setPreview} />
        ))}
      </div>
    </div>
  </main>
);

export default MoviesListing;
