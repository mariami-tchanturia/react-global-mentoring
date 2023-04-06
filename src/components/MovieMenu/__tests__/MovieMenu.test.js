import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MovieMenu from '../MovieMenu';

describe('MovieMenu component tests:', () => {
  it('Should render movie menu', () => {
    render(<MovieMenu />);

    const menu = screen.getByTestId('movie-menu');
    expect(menu).toBeInTheDocument();
  });

  it('Should render a MovieMenu with Edit and Delete options', () => {
    render(<MovieMenu />);

    const EditButton = screen.getByTestId('movie-edit');
    const DeleteButton = screen.getByTestId('movie-delete');
    expect(EditButton).toBeInTheDocument();
    expect(DeleteButton).toBeInTheDocument();
  });

  test('Should call function when Edit button is clicked', () => {
    const handleEditMock = jest.fn();

    render(<MovieMenu handleEdit={handleEditMock} />);
    const EditButton = screen.getByTestId('movie-edit');
    userEvent.click(EditButton);
    expect(handleEditMock).toHaveBeenCalled();
  });

  test('Should call function when Delete button is clicked', () => {
    const handleDeleteMock = jest.fn();

    render(<MovieMenu handleDelete={handleDeleteMock} />);
    const EditButton = screen.getByTestId('movie-delete');
    userEvent.click(EditButton);
    expect(handleDeleteMock).toHaveBeenCalled();
  });
});
