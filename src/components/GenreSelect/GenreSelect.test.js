import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import GenreSelect from './GenreSelect';

import { GENRES } from '../../constants/';

describe('GenreSelect component tests:', () => {
  it('Should render all genres passed in props', () => {
    render(<GenreSelect genres={GENRES} />);

    const passedGenreNames = GENRES.map((genre) => genre.name);
    const renderedGenreNames = screen
      .getAllByRole('listitem')
      .map((item) => item.textContent);

    expect(renderedGenreNames).toEqual(passedGenreNames);
  });

  it('Should highlight a defaultGenre, that is passed in props', () => {
    const defaultGenre = 'Documentary';

    render(<GenreSelect genres={GENRES} defaultGenre={defaultGenre} />);

    expect(screen.getByText(new RegExp(defaultGenre, 'i'))).toHaveClass(
      'active'
    );
  });

  it('Should call onChange callback and pass correct genre in arguments, when clicking on genre', () => {
    const defaultGenre = 'All';
    const targetGenre = 'Crime';
    const onSelectMock = jest.fn();

    render(
      <GenreSelect
        genres={GENRES}
        defaultGenre={defaultGenre}
        onSelect={onSelectMock}
      />
    );

    userEvent.click(screen.getByText(new RegExp(targetGenre, 'i')));

    expect(onSelectMock).toHaveBeenCalledWith(targetGenre);
  });
});
