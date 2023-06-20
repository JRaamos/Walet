import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Wallet from '../pages/Wallet';
import { renderWithRouterAndRedux } from './helpers/renderWith';

const initialState = {
  user: {
    email: 'test@mail.com',
  },
};
describe('<Wallet/>', () => {
  it('should render Wallet', () => {
    renderWithRouterAndRedux(<Wallet />, { initialState });
    expect(screen.getByTestId('email-field')).toBeInTheDocument();
    expect(screen.getByTestId('total-field')).toBeInTheDocument();
    expect(screen.getByTestId('header-currency-field')).toBeInTheDocument();
  });
  it('should render Walletform', () => {
    renderWithRouterAndRedux(<Wallet />, { initialState });
    const inputValor = screen.getByTestId('value-input');
    const inputDescricao = screen.getByTestId('description-input');
    const inputMoeda = screen.getByTestId('currency-input');
    const inputMetodo = screen.getByTestId('method-input');
    const inputTag = screen.getByTestId('tag-input');
    const button = screen.getByRole('button', { name: 'Adicionar despesa' });

    expect(inputValor).toBeInTheDocument();
    expect(inputDescricao).toBeInTheDocument();
    expect(inputMoeda).toBeInTheDocument();
    expect(inputMetodo).toBeInTheDocument();
    expect(inputTag).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  it('should render Wallet', async () => {
    renderWithRouterAndRedux(<Wallet />, { initialState });

    const paragraphDois = screen.getByText(/BRL/i);
    const paragraphTres = screen.getByText(/0.00/i);
    expect(paragraphDois).toBeInTheDocument();
    expect(paragraphTres).toBeInTheDocument();

    const inputValor = screen.getByTestId('value-input');
    const inputDescricao = screen.getByTestId('description-input');
    await waitFor(() => {
      const currency = screen.getByTestId('currency-input');
      userEvent.selectOptions(currency, 'USD');
    });
    const method = screen.getByTestId('method-input');
    const tag = screen.getByTestId('tag-input');
    const buttonDespesa = screen.getByRole('button', { name: 'Adicionar despesa' });

    userEvent.type(inputValor, '10');
    userEvent.type(inputDescricao, 'idTeste');
    userEvent.selectOptions(method, 'Dinheiro');
    userEvent.selectOptions(tag, 'Alimentação');
    userEvent.click(buttonDespesa);
  });
});
