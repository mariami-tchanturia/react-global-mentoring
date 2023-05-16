import { Header, MoviesListing } from '../components';
import { getMovies } from '../api/movieService';
import { DEFAULT_SORT_CRITERION } from '../constants';

const HomePage = ({ movies }) => {
  return (
    <>
      <Header />
      <MoviesListing movies={movies} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  let { sortBy, genre, query } = context.query;

  sortBy = sortBy || DEFAULT_SORT_CRITERION;
  genre = !genre || genre === 'all' ? '' : [genre];
  query = query || '';

  const response = await getMovies({ query, sortBy, genre });
  const movies = response.data;

  return {
    props: { movies },
  };
};

export default HomePage;
