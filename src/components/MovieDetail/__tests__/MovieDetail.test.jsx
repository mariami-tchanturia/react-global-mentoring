import { render, screen } from '@testing-library/react';

import { MovieDetail } from '../MovieDetail';

import { MOCKED_MOVIES } from '../../../mocks/mocks';

import { formatGenres } from '../../../helpers/formatGenres';
import { getMovieDuration } from '../../../helpers/getMovieDuration';

describe('MovieDetail component tests:', () => {
  it('Should render if movie is displayed', () => {
    render(<MovieDetail activeMovie={MOCKED_MOVIES[0]} />);

    const { title, year, genres, plot, rating, duration, poster_url } =
      MOCKED_MOVIES[0];

    const renderedPosterUrl = screen.getByTestId('movie-posterurl');
    const renderedTitle = screen.getByTestId('movie-title');
    const renderedGenre = screen.getByTestId('movie-genre').textContent;
    const renderedYear = screen.getByTestId('movie-release-date').textContent;
    const renderedPlot = screen.getByTestId('movie-overview').textContent;
    const renderedRating = screen.getByTestId('movie-vote-average').textContent;
    const renderedDuration = screen.getByTestId('movie-duration').textContent;

    expect(renderedPosterUrl).toHaveAttribute('src', poster_url);
    expect(renderedTitle).toHaveTextContent(title);
    expect(renderedYear).toBe(year);
    expect(renderedGenre).toBe(formatGenres(genres));
    expect(renderedPlot).toBe(plot);
    expect(renderedRating).toBe(rating);
    expect(renderedDuration).toBe(getMovieDuration(duration));
  });
});
