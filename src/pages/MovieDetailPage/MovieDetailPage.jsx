import PropTypes from 'prop-types';

import { MoviesListing, MovieDetail, Footer, Logo } from '../../components';
import { Button } from '../../common';
import styles from './MovieDetailPage.module.scss';
import { GENRES_OPTIONS, SELECT_OPTIONS } from '../../constants';
import searchIcon from '../../assets/search-icon.png';

import { MovieType } from '../../components/MovieTile/MovieTile';

const MovieDetailPage = ({
  movies,
  activeMovie,
  setActiveMovie,

  setSortCriterion,
  activeGenre,
  setActiveGenre,
}) => {
  return (
    <>
      <section className={styles.movieDetailWrapper}>
        <header className={`${styles.header} container-lg`}>
          <Logo />

          <Button
            className='btn--transparent'
            onClick={() => setActiveMovie(null)}
            data-testid='show-searchbar'
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
        setSortCriterion={setSortCriterion}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <Footer />
    </>
  );
};

MovieDetailPage.propTypes = {
  setActiveMovie: PropTypes.func,
  movies: PropTypes.arrayOf(MovieType).isRequired,
};

export default MovieDetailPage;
