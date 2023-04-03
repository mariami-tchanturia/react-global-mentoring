import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchForm from './SearchForm';

describe('SearchForm component tests:', () => {
  it('Should render inoput with the value equal to passed in props', () => {
    const initialSearchQuery = 'Test Text';
    render(<SearchForm initialSearchQuery={initialSearchQuery} />);

    const searchBox = screen.getByRole('textbox');
    expect(searchBox).toHaveValue(initialSearchQuery);
  });

  it('Should call onChange with proper value, when typing to input and clicking on submit button', () => {
    const initialSearchQuery = 'Test Text';
    const mockOnSearch = jest.fn();

    render(
      <SearchForm
        initialSearchQuery={initialSearchQuery}
        onSearch={mockOnSearch}
      />
    );

    const searchButton = screen.getByRole('button');
    userEvent.click(searchButton);

    expect(mockOnSearch).toHaveBeenCalledWith(initialSearchQuery);
  });

  it('Should call onChange with proper value, when typing to input and pressing on submit button', () => {
    const initialSearchQuery = 'Test Text';
    const currentSearchQuery = 'Another Test Text';
    const mockOnSearch = jest.fn();

    render(
      <SearchForm
        initialSearchQuery={initialSearchQuery}
        onSearch={mockOnSearch}
      />
    );

    const searchBox = screen.getByRole('textbox');
    searchBox.setSelectionRange(0, searchBox.value.length);
    userEvent.type(searchBox, currentSearchQuery);
    userEvent.type(searchBox, '{enter}');

    expect(mockOnSearch).toHaveBeenCalledWith(currentSearchQuery);
  });
});
