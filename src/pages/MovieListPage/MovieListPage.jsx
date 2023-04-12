import PropTypes from 'prop-types';

import { Header, Footer, MoviesListing } from '../../components';
import { GENRES_OPTIONS, SELECT_OPTIONS } from '../../constants';

const MovieListPage = ({ movies, setActiveMovie }) => {
  return (
    <>
      <Header setActiveMovie={setActiveMovie} />
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

MovieListPage.propTypes = {
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
};

export default MovieListPage;
