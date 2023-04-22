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

    const { title, overview, vote_average, runtime } = MOCKED_MOVIES[0];

    expect(screen.getByDisplayValue(title)).toBeInTheDocument();
    expect(screen.getByDisplayValue(overview)).toBeInTheDocument();
    expect(screen.getByDisplayValue(runtime)).toBeInTheDocument();
    expect(screen.getByDisplayValue(vote_average)).toBeInTheDocument();
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
