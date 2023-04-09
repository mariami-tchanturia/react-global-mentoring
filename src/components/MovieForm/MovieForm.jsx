import PropTypes from 'prop-types';

import styles from './MovieForm.module.scss';
import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import { Textarea } from '../../common/Textarea/Textarea';

export const MovieForm = ({ movie, handleSubmit }) => {
  const handleReset = () => {};

  return (
    <form className={styles.movieForm} onSubmit={handleSubmit}>
      <div className={styles.formItems}>
        <Input placeholderText='Movie title' required={true} label='Overview' />
        <Input
          required={true}
          type='date'
          data-date-inline-picker={true}
          label='Release date'
        />
        <Input placeholderText='https://' required={true} label='Movie URL' />
        <Input placeholderText='7.6' required={true} label='Rating' />
        <Input placeholderText='7.6' required={true} label='Genre' />
        <Input placeholderText='minutes' required={true} label='Runtime' />
      </div>

      <div className={styles.textarea}>
        <Textarea
          placeholderText='Movie description'
          required={true}
          label='Title'
        />
      </div>

      <div className={styles.formActions}>
        <Button className='btn--default' onClick={handleReset}>
          Reset
        </Button>
        <Button className='btn--primary' onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </form>
  );
};

MovieForm.propTypes = {};

MovieForm.defaultProps = {
  initialState: {},
};
