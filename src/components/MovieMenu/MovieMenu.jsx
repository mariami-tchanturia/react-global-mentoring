import { useState } from 'react';
import { Link } from 'react-router-dom';
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
              to={`${id}/edit`}
              className={styles.movieMenu_button}
              data-testid='movie-edit'
            >
              Edit
            </Link>
          </li>
          <li>
            <Link
              to={`${id}/delete`}
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
  // handleEdit: PropTypes.func,
  // handleDelete: PropTypes.func,
  // id: XXX
};
