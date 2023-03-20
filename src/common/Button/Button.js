import styles from './Button.module.scss';

const Button = ({ className = '', type = 'button', children, onClick, ...props }) => {
  return (
    <button
      className={`${styles[className]} ${styles.btn}`}
      type={type}
      onClick={onClick}
			{...props}
    >
      {children}
    </button>
  );
};

export default Button;
