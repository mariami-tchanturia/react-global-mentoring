import { render, screen, fireEvent } from "@testing-library/react";

import SearchForm from './SearchForm';


describe('SearchForm component tests:', () => {

	it('Should render inoput with the value equal to passed in props', () => {
		const initialSearchQuery = 'Test Text';
		render(<SearchForm initialSearchQuery={initialSearchQuery}/>);

		const searchBox = screen.getByRole('textbox');
		expect(searchBox).toHaveValue(initialSearchQuery);

	});

	it('Should call onChange with proper value, when typing to input and clicking on submit button', () => {
		const initialSearchQuery = 'Test Text';
		const mockOnSearch = jest.fn();

		render(<SearchForm initialSearchQuery={initialSearchQuery} onSearch={mockOnSearch}/>);

		const searchButton = screen.getByRole('button');
		fireEvent.click(searchButton);

		expect(mockOnSearch).toHaveBeenCalledWith(initialSearchQuery);
	});

	it('Should call onChange with proper value, when typing to input and pressing on submit button', () => {
		const initialSearchQuery = 'Test Text';
		const currentSearchQuery = 'Another Test Text';
		const mockOnSearch = jest.fn();

		render(<SearchForm initialSearchQuery={initialSearchQuery} onSearch={mockOnSearch}/>);

		const searchBox = screen.getByRole('textbox');
		fireEvent.change(searchBox , { target : { value : currentSearchQuery}});
		fireEvent.keyUp(searchBox , { key: "Enter", code: 13, charCode: 13 });

		expect(mockOnSearch).toHaveBeenCalledWith(currentSearchQuery);
	})

});
