import PropTypes from 'prop-types';

import styles from './Textarea.module.scss';

export const Textarea = ({
  labelText = '',
  placeholderText,
  minLength,
  className = '',
  required,
  name,
  value,
  onChange,
}) => {
  return (
    <div className={styles.textareaWrapper}>
      {labelText && <label htmlFor={name}>{labelText}</label>}
      <textarea
        type='text'
        name={name}
        minLength={minLength}
        placeholder={placeholderText}
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
