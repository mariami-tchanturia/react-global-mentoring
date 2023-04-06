import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ className, type, children, ...props }) => (
  <button
    className={`${styles[className]} ${styles.btn}`}
    type={type}
    {...props}
  >
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

Button.defaultProps = {
  className: '',
  type: 'button',
};

export default Button;
