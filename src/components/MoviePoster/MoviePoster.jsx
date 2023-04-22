import PropTypes from 'prop-types';

import defaultPoster from '../../assets/no-poster.jpg';

export const MoviePoster = ({ src, alt }) => {
  const handleError = ({ target }) => {
    target.src = defaultPoster;
  };

  return (
    <img
      src={src === null ? defaultPoster : src}
      alt={alt}
      data-testid='movie-posterurl'
      onError={handleError}
    />
  );
};

MoviePoster.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

MoviePoster.defaultProps = {
  src: defaultPoster,
};
