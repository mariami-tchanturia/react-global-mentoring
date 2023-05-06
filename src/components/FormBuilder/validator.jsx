import * as Yup from 'yup';
import { FORMIK_ERRORS } from './errors';

const {
  title,
  poster_path,
  vote_average,
  overview,
  runtime,
  release_date,
  genres,
} = FORMIK_ERRORS;

export const SCHEMA = Yup.object().shape({
  title: Yup.string().required(title),
  release_date: Yup.string().required(release_date),
  poster_path: Yup.string().url().required(poster_path),
  vote_average: Yup.number().min(0).max(10).required(vote_average),
  runtime: Yup.number().min(1).required(runtime),
  genres: Yup.array().min(1).required(genres),
  overview: Yup.string().required(overview),
});
