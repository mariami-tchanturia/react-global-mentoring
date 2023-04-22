import { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import { Button, Input, Textarea } from '../../common';
import { GENRES_OPTIONS } from '../../constants';
import styles from './MovieForm.module.scss';

const INITIAL_STATE = {
  title: '',
  release_date: '',
  vote_average: '',
  runtime: '',
  poster_path: '',
  overview: '',
  genres: [],
};

export const MovieForm = ({ movie, handleSubmit }) => {
  const [formData, setFormData] = useState(movie);

  const handleReset = () => {
    setFormData({ id, ...INITIAL_STATE });
  };

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    handleSubmit(formData);
  };

  const {
    id,
    title,
    release_date,
    genres,
    overview,
    vote_average,
    runtime,
    poster_path,
  } = formData;

  return (
    <form onSubmit={onSubmit} data-testid='movie-form'>
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
          value={release_date}
          onChange={(value) => handleChange('year', value)}
        />
        <Input
          placeholderText='https://'
          required={true}
          label='Movie URL'
          value={poster_path}
          onChange={(value) => handleChange('poster_url', value)}
        />
        <Input
          placeholderText='7.6'
          required={true}
          label='Rating'
          value={vote_average}
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
          value={runtime}
          onChange={(value) => handleChange('duration', value)}
        />
      </div>

      <div className={styles.textarea}>
        <Textarea
          placeholderText='Movie description'
          required={true}
          label='Overview'
          value={overview}
          onChange={(value) => handleChange('plot', value)}
        />
      </div>

      <div className={styles.formActions}>
        <Button className='btn--default' onClick={handleReset}>
          Reset
        </Button>
        <Button className='btn--primary' type='submit'>
          Submit
        </Button>
      </div>
    </form>
  );
};

MovieForm.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
      })
    ),
    year: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    plot: PropTypes.string.isRequired,
    poster_url: PropTypes.string.isRequired,
  }),

  handleSubmit: PropTypes.func,
};

MovieForm.defaultProps = {
  movie: INITIAL_STATE,
};
