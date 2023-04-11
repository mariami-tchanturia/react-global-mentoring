import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { MovieForm } from '../MovieForm';
import { MOCKED_MOVIES } from '../../../mocks/mocks';

describe('MovieForm component tests', function () {
  it('Should render MovieForm', () => {
    render(<MovieForm />);
    expect(screen.getByTestId('movie-form')).toBeInTheDocument();
  });

  it('Should render prefilled MovieForm, when movie is passed', () => {
    render(<MovieForm movie={MOCKED_MOVIES[0]} />);

    const { title, plot, rating, duration } = MOCKED_MOVIES[0];

    expect(screen.getByDisplayValue(title)).toBeInTheDocument();
    expect(screen.getByDisplayValue(plot)).toBeInTheDocument();
    expect(screen.getByDisplayValue(duration)).toBeInTheDocument();
    expect(screen.getByDisplayValue(rating)).toBeInTheDocument();
    expect(screen.getByDisplayValue(duration)).toBeInTheDocument();
  });

  it('Should call handleSubmit callback', () => {
    const mockHandleSubmit = jest.fn();

    render(
      <MovieForm movie={MOCKED_MOVIES[1]} handleSubmit={mockHandleSubmit} />
    );

    const submitButton = screen.getByText(/submit/i);
    userEvent.click(submitButton);

    expect(mockHandleSubmit).toHaveBeenCalled();
  });
});
