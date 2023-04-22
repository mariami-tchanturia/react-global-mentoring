import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { GenreSelect } from '../GenreSelect';

import { GENRES_OPTIONS } from '../../../constants';

describe('GenreSelect component tests:', () => {
  it('Should render all genres passed in props', () => {
    render(<GenreSelect genres={GENRES_OPTIONS} />);

    const passedGenreNames = GENRES_OPTIONS.map((genre) => genre.label);
    const renderedGenreNames = screen
      .getAllByRole('listitem')
      .map((item) => item.textContent);

    expect(renderedGenreNames).toEqual(passedGenreNames);
  });

  it('Should highlight a defaultGenre, that is passed in props', () => {
    const defaultGenre = 'Documentary';

    render(<GenreSelect genres={GENRES_OPTIONS} activeGenre={defaultGenre} />);

    expect(screen.getByText(new RegExp(defaultGenre, 'i'))).toHaveClass(
      'active'
    );
  });

  it('Should call onChange callback and pass correct genre in arguments, when clicking on genre', () => {
    const defaultGenre = 'All';
    const targetGenre = 'Crime';
    const onChangeMock = jest.fn();

    render(
      <GenreSelect
        genres={GENRES_OPTIONS}
        activeGenre={defaultGenre}
        onChange={onChangeMock}
      />
    );

    userEvent.click(screen.getByText(new RegExp(targetGenre, 'i')));

    expect(onChangeMock).toHaveBeenCalledWith(targetGenre);
  });
});
