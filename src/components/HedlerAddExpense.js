// refatorar hedlerAddExpense e tornar component
import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../redux/actions';

class HedlerAddExpense extends Component {
  // função para deletar uma despesa
  handleDelete = (id) => {
    const { dispatch } = this.props;
    dispatch(deleteExpense(id));
  };

  render() {
    const { expenses } = this.props;
    return (
      expenses.map(
        ({ id, description, tag, method, value, exchangeRates, currency }) => (
          <tr key={ id }>
            <td>{description}</td>
            <td>{tag}</td>
            <td>{method}</td>
            <td>{Number(value).toFixed(2)}</td>
            <td>{exchangeRates[currency].name}</td>
            <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
            <td>{Number(exchangeRates[currency].ask * value).toFixed(2)}</td>
            <td>Real</td>
            <td>
              <button
                type="button"
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
});

HedlerAddExpense.propTypes = PropTypes.shape({}).isRequired;

export default connect(mapStateToProps)(HedlerAddExpense);
