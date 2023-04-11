import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';

import { Button } from '../../common';
import styles from './Dialog.module.scss';
import closeIcon from '../../assets/close-icon.png';

export const Dialog = ({ title, children, handleClose, size }) => {
  const sizeClass = size === 'sm' ? 'dialog--sm' : 'dialog--lg';

  return createPortal(
    <FocusTrap>
      <div className={styles.overlay}>
        <div className={`${styles.dialog} ${styles[sizeClass]}`}>
          <Button
            className='btn--transparent'
            onClick={handleClose}
            data-testid='modal-close'
          >
            <img src={closeIcon} alt='Close the modal' />
          </Button>
          {title && <h1 className={styles.dialog_title}>{title}</h1>}
          <div>{children}</div>
        </div>
      </div>
    </FocusTrap>,
    document.querySelector('#modal')
  );
};

Dialog.propTypes = {
  title: PropTypes.string,
  handleClose: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  size: PropTypes.string,
};
