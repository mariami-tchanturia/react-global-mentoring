import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Counter from '../Counter';

describe('Counter component tests:', () => {
  it('Should render a counter with passed initial value', () => {
    const initialValue = 100;
    render(<Counter initialValue={initialValue} />);

    const value = screen.getByText(`${initialValue}`);
    expect(value).toBeInTheDocument();
  });

  it('Should increase count by one, when Increment button is clicked', () => {
    const initialValue = -7;
    render(<Counter initialValue={initialValue} />);

    userEvent.click(screen.getByText(/increment/i));
    expect(screen.getByText(`${initialValue + 1}`)).toBeInTheDocument();
  });

  it('Should decrease count by one, when Decrement button is clicked', async () => {
    const initialValue = 4;
    render(<Counter initialValue={initialValue} />);

    userEvent.click(screen.getByText(/decrement/i));
    expect(screen.getByText(`${initialValue - 1}`)).toBeInTheDocument();
  });
});
