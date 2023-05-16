import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import Images from '../../assets/images';

export const MoviePoster = ({ src, alt }) => {
  const [imageSource, setImageSource] = useState(src || Images.noPoster);

  useEffect(() => {
    setImageSource(src || Images.noPoster);
  }, [src]);

  return (
    <Image
      src={imageSource}
      alt={`${alt} poster`}
      data-testid='movie-posterurl'
      onError={() => setImageSource(Images.noPoster)}
      width={0}
      height={0}
      unoptimized
      style={{ width: '100%', height: 'auto' }}
    />
  );
};

MoviePoster.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

MoviePoster.defaultProps = {
  src: Images.noPoster,
};
