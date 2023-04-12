import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Dialog } from '../../';
import { MovieForm } from '../../../components';

describe('Dialog component tests:', () => {
  it('Should render correct title', () => {
    document.body.innerHTML = '<div id="modal" />';
    const title = 'Add movie';

    render(
      <Dialog title={title}>
        <MovieForm />
      </Dialog>
    );

    expect(screen.getByText(new RegExp(title, 'i'))).toBeInTheDocument();
  });

  it('Should call modal handleClose callback', () => {
    document.body.innerHTML = '<div id="modal" />';
    const mockHandleClose = jest.fn();

    render(
      <Dialog handleClose={mockHandleClose}>
        <MovieForm />
      </Dialog>
    );

    const closeButton = screen.getByTestId('modal-close');
    userEvent.click(closeButton);
    expect(mockHandleClose).toHaveBeenCalled();
  });
});
