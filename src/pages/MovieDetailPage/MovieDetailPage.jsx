import { MoviesListing } from '../../components/MoviesListing/MoviesListing';
import { Footer } from '../../components/Footer/Footer';
import { Button } from '../../common';
import { Logo } from '../../components/Logo//Logo';
import { MovieDetail } from '../../components/MovieDetail/MovieDetail';

import styles from './MovieDetailPage.module.scss';

import { GENRES_OPTIONS, SELECT_OPTIONS } from '../../constants';
import searchIcon from '../../assets/search-icon.png';

const MovieDetailPage = ({ movies, activeMovie, setActiveMovie }) => {
  return (
    <>
      <section className={styles.movieDetailWrapper}>
        <header className={`${styles.header} container-lg`}>
          <Logo />

          <Button
            className='btn--transparent'
            onClick={() => setActiveMovie(null)}
          >
            <img src={searchIcon} alt='Switch to Search mode' />
          </Button>
        </header>

        <div className={`container-lg`}>
          <MovieDetail activeMovie={activeMovie} />
        </div>
      </section>

      <MoviesListing
        genres={GENRES_OPTIONS}
        movies={movies}
        setActiveMovie={setActiveMovie}
        options={SELECT_OPTIONS}
      />
      <Footer />
    </>
  );
};

export default MovieDetailPage;
