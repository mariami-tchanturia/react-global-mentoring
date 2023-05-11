import styles from './FieldError.module.scss';

export const FieldError = ({ meta }) => {
  const hasError = meta && ((meta.touched && meta.error) || null);
  if (hasError) {
    return (
      <p className={styles.errorMessage} data-testid='error'>
        {meta.error}
      </p>
    );
  }
};
