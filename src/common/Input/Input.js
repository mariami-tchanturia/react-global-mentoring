import styles from './Input.module.scss';

const Input = ({
  placeholderText,
  type = 'text',
  name,
  value,
  onChange,
  onKeyUp,
  className = '',
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

export default Input;
