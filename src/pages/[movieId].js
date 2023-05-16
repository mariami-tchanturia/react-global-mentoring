import Link from 'next/link';
import Image from 'next/image';

import { MovieDetail, Logo, MoviesListing } from '../components';
import { getMovieByID, getMovies } from '../api/movieService';
import { PATH_NAMES } from '../routes/contants';
import { DEFAULT_SORT_CRITERION } from '../constants';

import Images from '../assets/images';
import styles from '../styles/MovieDetailPage.module.scss';

const MovieDetailPage = ({ activeMovie, movies }) => {
  const { Home } = PATH_NAMES;

  return (
    <>
      <div className={styles.movieDetailWrapper}>
        <header className={`${styles.header} container-lg`}>
          <Logo />

          <Link
            href={Home}
            title='Switch to Search mode'
            data-testid='show-searchbar'
          >
            <Image src={Images.searchIcon} alt='Switch to Search mode icon' />
          </Link>
        </header>

        <div className={`container-lg`}>
          {activeMovie && <MovieDetail activeMovie={activeMovie} />}
        </div>
      </div>
      <MoviesListing movies={movies} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { movieId } = context.params;

  const activeMovie = await getMovieByID(movieId);

  if (!activeMovie || activeMovie === 'Not Found') {
    return { notFound: true };
  }

  let { sortBy, genre, query } = context.query;

  sortBy = sortBy || DEFAULT_SORT_CRITERION;
  genre = genre === 'all' ? '' : [genre];
  query = query || '';

  const response = await getMovies({ query, sortBy, genre });
  const movies = response.data;

  return {
    props: { activeMovie, movies },
  };
};

export default MovieDetailPage;
