import PropTypes from 'prop-types';

import styles from './Textarea.module.scss';

export const Textarea = ({
  label = '',
  placeholder,
  minLength,
  className = '',
  required,
  name,
  value,
  onChange,
}) => {
  return (
    <div>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <textarea
        type='text'
        name={name}
        minLength={minLength}
        placeholder={placeholder}
        className={`${styles.textarea} ${styles[className]}`}
        required={required}
        value={value}
        onChange={onChange && (({ target }) => onChange(target.value))}
      />
    </div>
  );
};

Textarea.propTypes = {
  labelText: PropTypes.string,
  placeHolderText: PropTypes.string,
  minLength: PropTypes.number,
  className: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
