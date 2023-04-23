import PropTypes from 'prop-types';

import { Header, Footer, MoviesListing } from '../../components';
import { GENRES_OPTIONS, SELECT_OPTIONS } from '../../constants';
import { MovieType } from '../../components/MovieTile/MovieTile';

const MovieListPage = ({
  movies,
  setActiveMovie,
  setSearchQuery,
  setSortCriterion,
  activeGenre,
  setActiveGenre,
}) => {
  return (
    <>
      <Header setActiveMovie={setActiveMovie} setSearchQuery={setSearchQuery} />
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

MovieListPage.propTypes = {
  setActiveMovie: PropTypes.func,
  movies: PropTypes.arrayOf(MovieType).isRequired,
};

export default MovieListPage;
