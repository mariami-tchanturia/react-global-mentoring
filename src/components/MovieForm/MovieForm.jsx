import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './MovieForm.module.scss';
import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import { Textarea } from '../../common/Textarea/Textarea';

const INITIAL_STATE = {
  id: '',
  title: '',
  year: '',
  rating: '',
  duration: '',
  poster_url: '',
  plot: '',
  genres: '',
};

export const MovieForm = ({ movie, handleSubmit, handleClose }) => {
  const [formData, setFormData] = useState(movie || INITIAL_STATE);

  const handleReset = () => {
    setFormData(INITIAL_STATE);
  };

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  console.log({ movie });

  const { id, title, year, rating, duration, poster_url, plot, genre } =
    formData;

  return (
    <form className={styles.movieForm} onSubmit={handleSubmit}>
      <div className={styles.formItems}>
        <Input
          placeholderText='Movie title'
          required={true}
          label='Overview'
          value={title}
          onChange={(value) => handleChange('title', value)}
        />
        <Input
          required={true}
          type='date'
          data-date-inline-picker={true}
          label='Release date'
          value={year}
          onChange={(value) => handleChange('year', value)}
        />
        <Input
          placeholderText='https://'
          required={true}
          label='Movie URL'
          value={poster_url}
          onChange={(value) => handleChange('poster_url', value)}
        />
        <Input
          placeholderText='7.6'
          required={true}
          label='Rating'
          value={rating}
          onChange={(value) => handleChange('rating', value)}
        />
        <Input
          placeholderText='7.6'
          required={true}
          label='Genre'
          value={''}
          onChange={(value) => handleChange('genre', value)}
        />
        <Input
          placeholderText='minutes'
          required={true}
          label='Runtime'
          value={duration}
          onChange={(value) => handleChange('duration', value)}
        />
      </div>

      <div className={styles.textarea}>
        <Textarea
          placeholderText='Movie description'
          required={true}
          label='Overview'
          value={plot}
          onChange={(value) => handleChange('plot', value)}
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
