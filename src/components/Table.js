import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Table extends Component {
  hedlerAddExpense = () => {
    const { expenses } = this.props;
    return expenses.map(
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
        </tr>
      ),
    );
  };

  render() {
    return (
      <div>
        <h1> Tabela de gastos </h1>
        <table>
          <thead>
            <tr>
              <th>
                Descrição
              </th>
              <th> Tag </th>
              <th> Método de pagamento </th>
              <th> Valor </th>
              <th> Moeda </th>
              <th> Câmbio utilizado </th>
              <th> Valor convertido </th>
              <th> Moeda de conversão </th>
              <th> Editar/Excluir </th>
            </tr>
          </thead>
          <tbody>
            {this.hedlerAddExpense()}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = propTypes.shape({}).isRequired;

export default connect(mapStateToProps)(Table);
