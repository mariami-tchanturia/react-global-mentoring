import { MoviesListing } from '../../components/MoviesListing/MoviesListing';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

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

export default MovieListPage;
