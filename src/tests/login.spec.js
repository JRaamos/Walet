import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Login', () => {
  it('should render email input', () => {
    renderWithRouterAndRedux(<App />);
    const passwordIput = screen.getByTestId('password-input');
    const emailIput = screen.getByTestId('email-input');
    expect(emailIput).toBeInTheDocument();
    expect(passwordIput).toBeInTheDocument();

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();

    userEvent.type(emailIput, 'exemploErrrado');
    userEvent.type(passwordIput, '1234567');
    expect(button).toBeDisabled();
  });

  it('should redirect to /carteira when button is clicked', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const passwordIput = screen.getByTestId('password-input');
    const emailIput = screen.getByTestId('email-input');
    const button = screen.getByRole('button', { name: 'Entrar' });

    userEvent.type(emailIput, 'exemplo@test.com');
    userEvent.type(passwordIput, '1234567');
    expect(button).not.toBeDisabled();
    userEvent.click(button);
    expect(history.location.pathname).toBe('/carteira');
  });
});
