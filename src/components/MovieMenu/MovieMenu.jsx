import { useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../common/Button/Button';

import styles from './MovieMenu.module.scss';

export const MovieMenu = ({ handleEdit, handleDelete }) => {
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
            <Button
              onClick={handleEdit}
              className='movieMenu_button'
              data-testid='movie-edit'
            >
              Edit
            </Button>
          </li>
          <li>
            <Button
              onClick={handleDelete}
              className='movieMenu_button'
              data-testid='movie-delete'
            >
              Delete
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

MovieMenu.propTypes = {
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
};
