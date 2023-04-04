import styles from './Button.module.scss';

const Button = ({ className = '', type = 'button', children, ...props }) => (
  <button
    className={`${styles[className]} ${styles.btn}`}
    type={type}
    {...props}
  >
    {children}
  </button>
);

export default Button;
