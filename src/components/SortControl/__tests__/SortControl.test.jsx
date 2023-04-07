import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SELECT_OPTIONS } from '../../../constants';

import { SortControl } from '../SortControl';

describe('SortControl component tests:', () => {
  it('Should correctly set a label', () => {
    const label = 'Test Label';

    render(<SortControl label={label} options={SELECT_OPTIONS} />);

    const value = screen.getByLabelText(`${label}`);

    expect(value).toBeInTheDocument();
  });

  it('Should correctly set default option', () => {
    const label = 'Test Label';
    const defaultOption = SELECT_OPTIONS[0].name;

    render(
      <SortControl
        options={SELECT_OPTIONS}
        label={label}
        defaultOption={defaultOption}
      />
    );

    const select = screen.getByRole('combobox', {
      name: label,
    });

    expect(select).toHaveValue(defaultOption);
  });

  it('Should display the correct number of options', () => {
    const label = 'Test Label';

    render(<SortControl options={SELECT_OPTIONS} label={label} />);

    const select = screen.getByRole('combobox', {
      name: label,
    });

    expect(select.length).toBe(SELECT_OPTIONS.length);
  });

  it('Should render a SortControl with passed option values', () => {
    const label = 'Test Label';
    render(<SortControl options={SELECT_OPTIONS} label={label} />);

    const passedOptions = SELECT_OPTIONS.map((option) => option.name);
    const renderedOptions = screen
      .getAllByTestId(/option-+([0-9])/i)
      .map((option) => option.value);

    expect(renderedOptions).toEqual(passedOptions);
  });

  test('Should invoke event handler with correct parameter', () => {
    const label = 'Test Label';
    const defaultOption = SELECT_OPTIONS[0].name;
    const onSortMock = jest.fn();

    render(
      <SortControl
        label={label}
        options={SELECT_OPTIONS}
        defaultOption={defaultOption}
        onSort={onSortMock}
      />
    );

    const select = screen.getByLabelText(`${label}`);

    userEvent.selectOptions(select, SELECT_OPTIONS[1].name);
    expect(onSortMock).toHaveBeenCalledWith(SELECT_OPTIONS[1].name);
  });

  test('Should change value when user chooses a new option', () => {
    const label = 'Test Label';
    const defaultOption = SELECT_OPTIONS[0].name;

    render(
      <SortControl
        label={label}
        options={SELECT_OPTIONS}
        defaultOption={defaultOption}
        onSort={(option) => console.log(option)}
      />
    );

    const select = screen.getByLabelText(`${label}`);

    expect(select).toHaveValue(defaultOption);
    userEvent.selectOptions(select, SELECT_OPTIONS[1].name);
    expect(select).toHaveValue(SELECT_OPTIONS[1].name);
  });
});
