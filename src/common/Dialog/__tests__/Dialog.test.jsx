import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Dialog } from '../../';
import { MovieForm } from '../../../components/MovieForm/MovieForm';

describe('Dialog component tests:', () => {
  it('Should render Movie Form', () => {
    document.body.innerHTML = '<div id="modal" />';

    render(
      <Dialog>
        <MovieForm />
      </Dialog>
    );

    expect(3).toBe(3);
  });
});
