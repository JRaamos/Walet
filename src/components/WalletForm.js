import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchApi } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchApi());
  }

  render() {
    const { currencies } = this.props;

    return (
      <div>
        <form>
          <label>
            valor:
            <input
              type="text"
              name="valor"
              data-testid="value-input"
            />
          </label>
          <label>
            Descrição:
            <input
              type="text"
              name="descrição"
              data-testid="description-input"
            />
          </label>
          <label>
            Moeda:
            <select data-testid="currency-input">
              {
                currencies.map((moeda) => (
                  <option
                    key={ moeda }
                  >
                    { moeda }
                  </option>
                ))
              }
            </select>
          </label>
          <label>
            Método de pagamento:
            <select
              data-testid="method-input"
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label>
            Tag:
            <select data-testid="tag-input">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
}); // mapeia o estado para o componente

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(WalletForm);
