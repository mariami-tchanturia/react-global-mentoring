import PropTypes from 'prop-types';

import styles from './Button.module.scss';

export const Button = ({ className, type, children, dataTestId, ...props }) => (
  <button
    className={`${styles[className]} ${styles.btn}`}
    type={type}
    data-testid={dataTestId}
    {...props}
  >
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  dataTestId: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

Button.defaultProps = {
  className: '',
  type: 'button',
  dataTestId: '',
};
