import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Formik, Form } from 'formik';

import { Spinner } from '../../common';
import { getMovieByID, updateMovie, addMovie } from '../../api/movieService';
import { PATH_NAMES } from '../../routes/contants';

import { FormFields } from '../FormBuilder/FormFields';
import { Button } from '../../common';
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

export const MovieForm = () => {
  const [movie, setMovie] = useState(null);
  const { movieID } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!movieID) {
      setLoading(false);
      return;
    }

    getMovieByID(movieID)
      .then((data) => (data === 'Not Found' ? setError(data) : setMovie(data)))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [movieID]);

  const handleupdate = (movie) => {
    updateMovie(movie)
      .then(() => (window.location.href = PATH_NAMES.Home))
      .catch((error) => setError(error));
  };

  const handleCreate = (movie) => {
    addMovie(movie)
      .then(
        (newMovie) =>
          (window.location.href = `${PATH_NAMES.Home}${newMovie.id}`)
      )
      .catch((error) => setError(error));
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Navigate to={PATH_NAMES.NotFound} />;
  }

  return (
    <Formik
      validationSchema={SCHEMA}
      initialValues={movie || INITIAL_STATE}
      onSubmit={(formData) =>
        movieID ? handleupdate(formData) : handleCreate(formData)
      }
      data-testid='movie-form'
    >
      {({ values, resetForm }) => (
        <Form>
          <div className={styles.formItems}>
            <FormFields.TextField
              name='title'
              placeholder='Movie title'
              label='Title'
              dataTestId='title'
              value={values.title}
            />
            <FormFields.DateField
              name='release_date'
              placeholder='https://'
              label='Release date'
              dataTestId='release_date'
              value={values.release_date}
            />
            <FormFields.TextField
              name='poster_path'
              placeholder='https://'
              label='Movie URL'
              dataTestId='poster_path'
              value={values.poster_path}
            />
            <FormFields.NumericField
              name='vote_average'
              placeholder='7.6'
              label='Rating'
              dataTestId='vote_average'
              value={values.vote_average}
            />
            <FormFields.MultiSelectField
              name='genres'
              placeholder='Select Genre'
              label='Genre'
              // closeMenuOnSelect={false}
              className={styles.multiSelect}
              isMulti={true}
              value={GENRES_OPTIONS.filter((option) =>
                values.genres.includes(option.label)
              )}
              options={GENRES_OPTIONS.filter((item) => item.label !== 'All')}
              id='genres'
            />

            <FormFields.NumericField
              name='runtime'
              placeholder='minutes'
              label='Runtime'
              dataTestId='runtime'
              value={values.runtime}
            />
          </div>

          <div className={styles.textarea}>
            <FormFields.TextareaField
              name='overview'
              placeholder='Movie description'
              label='Overview'
              dataTestId='overview'
              value={values.overview}
            />
          </div>

          <div className={styles.formActions}>
            <Button
              className='btn--default'
              type='reset'
              dataTestId='form-reset'
              onClick={() => resetForm({ values: INITIAL_STATE })}
            >
              Reset
            </Button>
            <Button
              className='btn--primary'
              type='submit'
              dataTestId='form-submit'
            >
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
