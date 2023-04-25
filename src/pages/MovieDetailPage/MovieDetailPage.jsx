import { useState, useEffect } from 'react';
import { useParams, Link, useLocation, Navigate } from 'react-router-dom';

import { MovieDetail, Logo } from '../../components';
import { getMovieByID } from '../../api/movieService';
import searchIcon from '../../assets/search-icon.png';
import styles from './MovieDetailPage.module.scss';
import { NotFound, Spinner } from '../../common';

const MovieDetailPage = () => {
  const { movieID } = useParams();
  const [activeMovie, setactiveMovie] = useState(null);
  const location = useLocation();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getMovieByID(movieID)
      .then((data) =>
        data === 'Not Found' ? setError(data) : setactiveMovie(data)
      )
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [movieID]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Navigate to='/not-Found' />;
  }

  return (
    <section className={styles.movieDetailWrapper}>
      <header className={`${styles.header} container-lg`}>
        <Logo />

        <Link
          to={{
            pathname: `/`,
            search: location.search,
          }}
          title='Switch to Search mode'
          data-testid='show-searchbar'
        >
          <img src={searchIcon} alt='Switch to Search mode icon' />
        </Link>
      </header>

      <div className={`container-lg`}>
        <MovieDetail activeMovie={activeMovie} />
      </div>
    </section>
  );
};

export default MovieDetailPage;
