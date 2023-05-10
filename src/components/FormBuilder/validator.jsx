import * as Yup from 'yup';
import { FORMIK_FORMAT_ERRORS, FORMIK_REQUIRED_ERRORS } from './errors';

const {
  posterPath_format_msg,
  genres_format_msg,
  voteAverage_format_msg,
  runtime_format_msg,
} = FORMIK_FORMAT_ERRORS;

const {
  title_required_msg,
  releaseDate_required_msg,
  posterPath_required_msg,
  voteAverage_required_msg,
  overview_required_msg,
  runtime_required_msg,
} = FORMIK_REQUIRED_ERRORS;

export const SCHEMA = Yup.object().shape({
  title: Yup.string().required(title_required_msg),
  release_date: Yup.string().required(releaseDate_required_msg),
  poster_path: Yup.string()
    .url(posterPath_format_msg)
    .required(posterPath_required_msg),
  vote_average: Yup.number()
    .min(0, voteAverage_format_msg)
    .max(10, voteAverage_format_msg)
    .required(voteAverage_required_msg),
  runtime: Yup.number()
    .min(1, runtime_format_msg)
    .required(runtime_required_msg),
  genres: Yup.array().min(1, genres_format_msg),
  overview: Yup.string().required(overview_required_msg),
});
