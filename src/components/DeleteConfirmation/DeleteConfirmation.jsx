import PropTypes from 'prop-types';

import { Button } from '../../common';
import styles from './DeleteConfirmation.module.scss';

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

DeleteConfirmation.propTypes = {
  handleDelete: PropTypes.func,
};
