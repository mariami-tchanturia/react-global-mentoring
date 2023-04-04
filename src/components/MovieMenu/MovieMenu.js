import { useState } from 'react';

import { Button } from '../../common';

import styles from './MovieMenu.module.scss';

function MovieMenu({ handleEdit, handleDelete }) {
  const [isOpened, setIsOpened] = useState(false);

  const toggleClass = isOpened ? 'open' : '';

  return (
    <div className={`${styles[toggleClass]} ${styles.movieMenu}`}>
      <button
        className={styles.movieMenu_dots}
        onClick={() => setIsOpened((prev) => !prev)}
      >
        <span />
      </button>

      <div className={styles.movieMenu_content}>
        <ul>
          <li>
            <Button onClick={handleEdit} className='movieMenu_button'>
              Edit
            </Button>
          </li>
          <li>
            <Button onClick={handleDelete} className='movieMenu_button'>
              Delete
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default MovieMenu;
