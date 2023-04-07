import PropTypes from 'prop-types';

import styles from './Input.module.scss';

export const Input = ({
  placeholderText,
  type,
  name,
  value,
  onChange,
  onKeyUp,
  className,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholderText}
      className={`${styles[className]} ${styles.input}`}
      value={value}
      onChange={onChange && ((e) => onChange(e.target.value))}
      onKeyUp={onKeyUp}
    />
  );
};

Input.propTypes = {
  placeHolderText: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
};

Input.defaultProps = {
  type: 'text',
  className: '',
};
