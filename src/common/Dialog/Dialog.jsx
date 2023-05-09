import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';

import { PATH_NAMES } from '../../routes/contants';
import styles from './Dialog.module.scss';
import closeIcon from '../../assets/close-icon.png';

export const Dialog = ({ title, children, size, isOpen }) => {
  const sizeClass = size === 'sm' ? 'dialog--sm' : 'dialog--lg';

  if (!isOpen) return null;

  return createPortal(
    <FocusTrap>
      <div className={styles.overlay}>
        <div className={`${styles.dialog} ${styles[sizeClass]}`}>
          <Link
            to={PATH_NAMES.Home}
            className='btn--transparent'
            data-testid='modal-close'
          >
            <img src={closeIcon} alt='Close the modal' />
          </Link>
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

Dialog.defaultProps = {
  size: PropTypes.string,
};
