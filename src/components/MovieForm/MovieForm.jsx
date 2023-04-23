import { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import { Button, Input, Textarea } from '../../common';
import { GENRES_OPTIONS } from '../../constants';
import styles from './MovieForm.module.scss';
import { MovieType } from '../MovieTile/MovieTile';

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
          onChange={(value) => handleChange('release_date', value)}
        />
        <Input
          placeholderText='https://'
          required={true}
          label='Movie URL'
          value={poster_path}
          onChange={(value) => handleChange('poster_path', value)}
        />
        <Input
          placeholderText='7.6'
          required={true}
          label='Rating'
          value={vote_average}
          onChange={(value) => handleChange('vote_average', value)}
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
          onChange={(value) => handleChange('runtime', value)}
        />
      </div>

      <div className={styles.textarea}>
        <Textarea
          placeholderText='Movie description'
          required={true}
          label='Overview'
          value={overview}
          onChange={(value) => handleChange('overview', value)}
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
  movie: MovieType,
  handleSubmit: PropTypes.func,
};
