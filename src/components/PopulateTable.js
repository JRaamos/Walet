// refatorar hedlerAddExpense e tornar component
import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense, editExpense } from '../redux/actions';
import './PopulateTable.css';

class PopulateTable extends Component {
  // função para deletar uma despesa
  handleDelete = (id) => {
    const { dispatch } = this.props;
    dispatch(deleteExpense(id));
  };

  // clica no edt, achei a despesa, manda pro form, form preenche com os dados da despesa
  handleEdit = (id) => {
    const { dispatch, expenses } = this.props;
    const expenseFilter = expenses.find((expense) => expense.id === id);
    dispatch(editExpense(expenseFilter));
  };

  render() {
    const { expenses } = this.props;
    return (
      expenses.map(
        ({ id, description, tag, method, value, exchangeRates, currency }) => (
          <tr key={ id }>
            <td className="table-td">{description}</td>
            <td className="table-td">{tag}</td>
            <td className="table-td">{method}</td>
            <td className="table-td">{Number(value).toFixed(2)}</td>
            <td className="table-td">{exchangeRates[currency].name}</td>
            <td className="table-td">{Number(exchangeRates[currency].ask).toFixed(2)}</td>
            <td className="table-td">
              {Number(exchangeRates[currency].ask * value).toFixed(2)}
            </td>
            <td className="table-td">Real</td>
            <td className="table-td">
              <button
                type="button"
                onClick={ () => this.handleEdit(id) }
                data-testid="edit-btn"
              >
                Editar
              </button>
              <button
                data-testid="delete-btn"
                type="button"
                onClick={ () => this.handleDelete(id) }
              >
                Excluir
              </button>
            </td>
          </tr>
        ),
      )
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  editor: state.wallet.editor,
});

PopulateTable.propTypes = PropTypes.shape({}).isRequired;

export default connect(mapStateToProps)(PopulateTable);
