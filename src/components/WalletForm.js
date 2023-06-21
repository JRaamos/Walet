import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense, fetchApi, saveEdit } from '../redux/actions';

class WalletForm extends Component {
  state = {
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: '',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchApi());
  }

  componentDidUpdate(prevprops) {
    const { editor, idToEdit } = this.props;
    const { value, description, currency, method, tag } = idToEdit;
    if (editor && !prevprops.editor) {
      this.setState({
        value, description, currency, method, tag,
      });
    }
  }

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  handleExpenses = () => {
    const { dispatch, expenses, data } = this.props;
    dispatch(fetchApi());
    const id = expenses.length;
    const { value, description, currency, method, tag } = this.state;
    const expense = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: data,
    };
    dispatch(addExpense(expense));
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  };

  handleEditSave = () => {
    const { dispatch, expenses, idToEdit } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const expenseEdit = {
      id: idToEdit.id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: expenses[idToEdit.id].exchangeRates,
    };
    const newExpense = expenses.filter((expense) => expense.id !== idToEdit.id);
    const newExpenses = [...newExpense, expenseEdit];
    dispatch(saveEdit(newExpenses.sort((a, b) => a.id - b.id)));
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  };

  render() {
    const { currencies, editor } = this.props;
    const { value, description, method, currency, tag } = this.state;

    return (
      <div className="wallet-contain">
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
              {
                currencies.map((moeda) => (
                  <option key={ moeda }>{moeda}</option>
                ))
              }
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
          <button
            type="button"
            onClick={ () => (editor ? this.handleEditSave() : this.handleExpenses()) }
          >
            {editor ? 'Editar despesa' : 'Adicionar despesa'}

          </button>
        </form>
      </div>
    );
  }
}
// mapeia o estado para o componente
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  expense: state.wallet.expense,
  data: state.wallet.data,
  editor: state.wallet.editor,
  idToEdit: state.wallet.idToEdit,
});

WalletForm.propTypes = PropTypes.shape({}).isRequired;

export default connect(mapStateToProps)(WalletForm);
