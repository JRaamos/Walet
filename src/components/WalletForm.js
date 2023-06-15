import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense, fetchApi } from '../redux/actions';

class WalletForm extends Component {
  state = {
    value: 0,
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    exchangeRates: {},
  };

  componentDidMount() {
    this.handleApi();
    const { dispatch } = this.props;
    dispatch(fetchApi());
  }

  handleApi = async () => {
    const { currencies } = this.props;
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    currencies.forEach((moeda) => {
      this.setState((state) => ({
        exchangeRates: {
          ...state.exchangeRates,
          [moeda]: data[moeda],
        },
      }));
    });
  };

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  handleExpenses = () => {
    this.handleApi();
    const { dispatch, expenses } = this.props;
    const id = expenses.length;
    const { value, description, currency, method, tag, exchangeRates } = this.state;
    const expense = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    dispatch(addExpense(expense));
  };

  render() {
    const { currencies } = this.props;
    const { value, description, method, currency, tag } = this.state;

    return (
      <div>
        <form>
          <label>
            valor:
            <input
              type="text"
              name="value"
              value={ value }
              data-testid="value-input"
              onChange={ this.handleChange }
            />
          </label>
          <label>
            Descrição:
            <input
              type="text"
              name="description"
              value={ description }
              data-testid="description-input"
              onChange={ this.handleChange }
            />
          </label>
          <label>
            Moeda:
            <select
              name="currency"
              value={ currency }
              onChange={ this.handleChange }
              data-testid="currency-input"
            >
              {currencies.map((moeda) => (
                <option key={ moeda }>{moeda}</option>
              ))}
            </select>
          </label>
          <label>
            Método de pagamento:
            <select
              data-testid="method-input"
              name="method"
              value={ method }
              onChange={ this.handleChange }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label>
            Tag:
            <select
              data-testid="tag-input"
              name="tag"
              value={ tag }
              onChange={ this.handleChange }
            >
              <option>Alimentação</option>
              <option>Lazer </option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <button type="button" onClick={ this.handleExpenses }>Adicionar despesa</button>
        </form>
      </div>
    );
  }
}
// mapeia o estado para o componente
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps)(WalletForm);
