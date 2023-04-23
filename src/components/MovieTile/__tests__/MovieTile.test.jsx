import { render, screen } from '@testing-library/react';

import { MovieTile } from '../MovieTile';

import { MOCKED_MOVIES } from '../../../mocks/mocks';

import { formatGenres } from '../../../helpers/formatGenres';

describe('MovieTile component tests:', () => {
  it('Should render a movie with correct information', () => {
    render(<MovieTile movie={MOCKED_MOVIES[0]} />);

    const { release_date, title, genres, poster_path } = MOCKED_MOVIES[0];

    const renderedPosterUrl = screen.getByTestId('movie-posterurl');
    const renderedTitle = screen.getByTestId('movie-title');
    const renderedGenre = screen.getByTestId('movie-genre').textContent;
    const renderedYear = screen.getByTestId('movie-release-date').textContent;

    expect(renderedPosterUrl).toHaveAttribute('src', poster_path);
    expect(renderedTitle).toHaveTextContent(title);
    expect(renderedYear).toBe(parseInt(release_date).toString());
    expect(renderedGenre).toBe(formatGenres(genres));
  });

  it('Should render movieMenu button on movie tile', () => {
    render(<MovieTile movie={MOCKED_MOVIES[0]} />);

    const menu = screen.getByTestId('movie-menu');

    expect(menu).toBeInTheDocument();
  });
});
