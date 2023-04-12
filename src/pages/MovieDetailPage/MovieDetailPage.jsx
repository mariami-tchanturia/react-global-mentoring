import PropTypes from 'prop-types';

import { MoviesListing, MovieDetail, Footer, Logo } from '../../components';
import { Button } from '../../common';
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

MovieDetailPage.propTypes = {
  setActiveMovie: PropTypes.func,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.number.isRequired,
          label: PropTypes.string.isRequired,
        })
      ),
      year: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      plot: PropTypes.string.isRequired,
      poster_url: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeMovie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
      })
    ),
    year: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    plot: PropTypes.string.isRequired,
    poster_url: PropTypes.string.isRequired,
  }),
};

export default MovieDetailPage;
