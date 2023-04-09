import styles from './DeleteConfirmation.module.scss';

import { Button } from '../../common/Button/Button';

export const DeleteConfirmation = ({ handleDelete }) => (
  <div className={styles.deleteConfirmation}>
    <p className={styles.deleteConfirmation_paragraph}>
      Are you sure you want to delete this movie?
    </p>
    <Button className='btn--primary' onClick={handleDelete}>
      Confirm
    </Button>
  </div>
);
