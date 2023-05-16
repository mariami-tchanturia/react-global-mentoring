import { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import styles from './MovieMenu.module.scss';

export const MovieMenu = ({ id }) => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleClass = isOpened ? 'open' : '';

  return (
    <div
      className={`${styles[toggleClass]} ${styles.movieMenu}`}
      data-testid='movie-menu'
    >
      <button
        className={styles.movieMenu_dots}
        onClick={() => setIsOpened((prevState) => !prevState)}
      >
        <span />
      </button>

      <div className={styles.movieMenu_content}>
        <ul>
          <li>
            <Link
              href={`${id}/edit`}
              className={styles.movieMenu_button}
              data-testid='movie-edit'
            >
              Edit
            </Link>
          </li>
          <li>
            <Link
              href={`${id}/delete`}
              className={styles.movieMenu_button}
              data-testid='movie-delete'
            >
              Delete
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

MovieMenu.propTypes = {
  id: PropTypes.number.isRequired,
};
