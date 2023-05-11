import PropTypes from 'prop-types';

import styles from './Input.module.scss';

export const Input = ({
  placeholder,
  type,
  name,
  value,
  onChange,
  onKeyUp,
  className,
  dataTestId,
  label,
}) => {
  return (
    <div className={styles.inputWrapper}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        data-testid={dataTestId}
        className={`${styles[className]} ${styles.input}`}
        value={value}
        onChange={onChange && (({ target }) => onChange(target.value))}
        onKeyUp={onKeyUp}
      />
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  label: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  className: '',
};
