import { screen } from '@testing-library/react';
import Wallet from '../pages/Wallet';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import WalletForm from '../components/WalletForm';

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
    renderWithRouterAndRedux(<WalletForm />);
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
});
