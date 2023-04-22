import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SearchForm } from '../SearchForm';

describe('SearchForm component tests:', () => {
  it('Should call onChange with proper value, when typing to input and clicking on submit button', () => {
    const searchQuery = 'Another Test Text';
    const setSearchQueryMock = jest.fn();

    render(<SearchForm setSearchQuery={setSearchQueryMock} />);

    const searchBox = screen.getByRole('textbox');
    searchBox.setSelectionRange(0, searchBox.value.length);
    userEvent.type(searchBox, searchQuery);

    const searchButton = screen.getByRole('button');
    userEvent.click(searchButton);

    expect(setSearchQueryMock).toHaveBeenCalledWith(searchQuery);
  });

  it('Should call onChange with proper value, when typing to input and pressing on Enter', () => {
    const searchQuery = 'Another Test Text';
    const setSearchQueryMock = jest.fn();

    render(<SearchForm setSearchQuery={setSearchQueryMock} />);

    const searchBox = screen.getByRole('textbox');
    searchBox.setSelectionRange(0, searchBox.value.length);
    userEvent.type(searchBox, searchQuery);
    userEvent.type(searchBox, '{enter}');

    expect(setSearchQueryMock).toHaveBeenCalledWith(searchQuery);
  });
});
