import { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';

import { MovieDetail, Logo } from '../../components';
import { Button } from '../../common';
import { getMovieByID } from '../../api/movieService';
import searchIcon from '../../assets/search-icon.png';
import styles from './MovieDetailPage.module.scss';

const MovieDetailPage = () => {
  const { movieID } = useParams();
  const [activeMovie, setactiveMovie] = useState(null);
  const location = useLocation();

  // TODO: Display spinner and error
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    getMovieByID(movieID)
      .then((movie) => setactiveMovie(movie))
      .catch((error) => setError(error.message))
      .finally(setLoading(false));
  }, [movieID]);

  return (
    <>
      {loading ? (
        'Loading'
      ) : (
        <>
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
        </>
      )}
    </>
  );
};

export default MovieDetailPage;
