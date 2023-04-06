import { render, screen } from '@testing-library/react';

import MovieTile from '../MovieTile';

import { MOCKED_MOVIES } from '../../../mocks/mocks';

describe('MovieTile component tests:', () => {
  it('Should render a movie with correct information', () => {
    render(<MovieTile movie={MOCKED_MOVIES[0]} />);
    const { poster_url, title, year, genre } = MOCKED_MOVIES[0];

    const renderedPosterUrl = screen.getByTestId('movie-posterurl');
    const renderedTitle = screen.getByTestId('movie-title');
    const renderedGenre = screen.getByTestId('movie-genre').textContent;
    const renderedYear = screen.getByTestId('movie-year').textContent;

    expect(renderedPosterUrl).toHaveAttribute('src', poster_url);
    expect(renderedTitle).toHaveTextContent(title);
    expect(renderedYear).toBe(year.toString());
    expect(renderedGenre).toBe(genre);
  });

  it('Should render movieMenu button on movie tile', () => {
    render(<MovieTile movie={MOCKED_MOVIES[0]} />);

    const menu = screen.getByTestId('movie-menu');

    expect(menu).toBeInTheDocument();
  });
});
