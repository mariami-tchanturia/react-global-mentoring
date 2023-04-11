import { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import { Button, Input, Textarea } from '../../common';
import { GENRES_OPTIONS } from '../../constants';
import styles from './MovieForm.module.scss';

const INITIAL_STATE = {
  title: '',
  year: '',
  rating: '',
  duration: '',
  poster_url: '',
  plot: '',
  genres: [],
};

export const MovieForm = ({ movie, handleSubmit }) => {
  const [formData, setFormData] = useState(movie || INITIAL_STATE);

  const handleReset = () => {
    setFormData({ id, ...INITIAL_STATE });
  };

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const { id, title, year, rating, duration, poster_url, plot, genres } =
    formData;

  return (
    <form onSubmit={handleSubmit} data-testid='movie-form'>
      <div className={styles.formItems}>
        <Input
          placeholderText='Movie title'
          required={true}
          label='Title'
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
        <Select
          closeMenuOnSelect={false}
          className={styles.multiSelect}
          defaultValue={movie?.genres || genres}
          isMulti
          options={GENRES_OPTIONS.filter((item) => item.label !== 'All')}
          onChange={(option) => handleChange('genres', option)}
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
        <Button className='btn--primary' onClick={() => handleSubmit(formData)}>
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
