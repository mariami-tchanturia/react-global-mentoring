import { render, screen } from '@testing-library/react';

import MovieDetail from '../MovieDetail';

import { MOCKED_MOVIES } from '../../../mocks/mocks';

describe('MovieDetail component tests:', () => {
  it('Should render if movie is displayed', () => {
    render(<MovieDetail movie={MOCKED_MOVIES[0]} />);

    const { title, year, genre, plot, rating, duration, poster_url } =
      MOCKED_MOVIES[0];

    const renderedPosterUrl = screen.getByTestId('movie-posterurl');
    const renderedTitle = screen.getByTestId('movie-title');
    const renderedGenre = screen.getByTestId('movie-genre').textContent;
    const renderedYear = screen.getByTestId('movie-year').textContent;
    const renderedPlot = screen.getByTestId('movie-plot').textContent;
    const renderedRating = screen.getByTestId('movie-rating').textContent;
    const renderedDuration = screen.getByTestId('movie-duration').textContent;

    expect(renderedPosterUrl).toHaveAttribute('src', poster_url);
    expect(renderedTitle).toHaveTextContent(title);
    expect(renderedYear).toBe(year.toString());
    expect(renderedGenre).toBe(genre);
    expect(renderedPlot).toBe(plot);
    expect(renderedRating).toBe(rating.toString());
    expect(renderedDuration).toBe(duration);
  });
});
