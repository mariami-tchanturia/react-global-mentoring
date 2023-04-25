import { CircleLoader } from 'react-spinners';

import styles from './Spinner.module.scss';

export const Spinner = () => (
  <div className={styles.spinner_container}>
    <CircleLoader
      size={70}
      color='#F65261'
      speedMultiplier={1.5}
      aria-label='Loading Spinner'
    />
  </div>
);
