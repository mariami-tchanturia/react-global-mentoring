import PropTypes from 'prop-types';

import { Formik, Form } from 'formik';
import { FormFields } from '../FormBuilder/FormFields';
import { Button } from '../../common';
import { MovieType } from '../MovieTile/MovieTile';
import { GENRES_OPTIONS } from '../../constants';
import { SCHEMA } from '../FormBuilder/validator';
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
  const getDefaultGenres = (genreNames) => {
    const activeGenres = [];

    genreNames.map((genreName) =>
      activeGenres.push(
        GENRES_OPTIONS.filter((genre) => genre.label === genreName)?.[0]
      )
    );

    return activeGenres;
  };

  return (
    <Formik
      validationSchema={SCHEMA}
      initialValues={movie || INITIAL_STATE}
      onSubmit={(formData) => handleSubmit(formData)}
      data-testid='movie-form'
    >
      {({ values, resetForm }) => (
        <Form>
          <div className={styles.formItems}>
            <FormFields.TextField
              name='title'
              placeholder='Movie title'
              label='Title'
              value={values.title}
            />
            <FormFields.DateField
              name='release_date'
              placeholder='https://'
              label='Release date'
              value={values.release_date}
            />
            <FormFields.TextField
              name='poster_path'
              placeholder='https://'
              label='Movie URL'
              value={values.poster_path}
            />
            <FormFields.NumericField
              name='vote_average'
              placeholder='7.6'
              label='Rating'
              value={values.vote_average}
            />
            <FormFields.SelectField
              name='genres'
              label='Genre'
              placeholder='Select Genre'
              closeMenuOnSelect={false}
              className={styles.multiSelect}
              isMulti={true}
              defaultValue={getDefaultGenres(values.genres)}
              options={GENRES_OPTIONS.filter((item) => item.label !== 'All')}
            />
            <FormFields.NumericField
              name='runtime'
              placeholder='minutes'
              label='Runtime'
              value={values.runtime}
            />
          </div>

          <div className={styles.textarea}>
            <FormFields.TextareaField
              name='overview'
              placeholder='Movie description'
              label='Overview'
              value={values.overview}
            />
          </div>

          <div className={styles.formActions}>
            <Button
              className='btn--default'
              type='reset'
              onClick={() =>
                resetForm({ values: INITIAL_STATE, genres: [null] })
              }
            >
              Reset
            </Button>
            <Button className='btn--primary' type='submit'>
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

MovieForm.propTypes = {
  movie: MovieType,
  handleSubmit: PropTypes.func,
};
