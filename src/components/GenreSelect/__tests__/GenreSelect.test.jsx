import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { GenreSelect } from '../GenreSelect';

import { TOP_GENRES_OPTIONS } from '../../../constants';

describe('GenreSelect component tests:', () => {
  it('Should render all genres passed in props', () => {
    render(<GenreSelect genres={TOP_GENRES_OPTIONS} />);

    const passedGenreNames = TOP_GENRES_OPTIONS.map((genre) => genre.label);
    const renderedGenreNames = screen
      .getAllByRole('listitem')
      .map((item) => item.textContent);

    expect(renderedGenreNames).toEqual(passedGenreNames);
  });

  it('Should highlight a defaultGenre, that is passed in props', () => {
    const defaultGenre = 'Documentary';

    render(
      <GenreSelect genres={TOP_GENRES_OPTIONS} activeGenre={defaultGenre} />
    );

    expect(
      screen.getByText(new RegExp(defaultGenre, 'i')).parentElement
    ).toHaveClass('active');
  });

  it('Should call onChange callback and pass correct genre in arguments, when clicking on genre', () => {
    const defaultGenre = 'All';
    const targetGenre = 'Crime';
    const setActiveGenreMock = jest.fn();

    render(
      <GenreSelect
        genres={GENRES_OPTIONS}
        activeGenre={defaultGenre}
        setActiveGenre={setActiveGenreMock}
      />
    );

    userEvent.click(screen.getByText(new RegExp(targetGenre, 'i')));

    expect(setActiveGenreMock).toHaveBeenCalledWith(targetGenre);
  });
});
