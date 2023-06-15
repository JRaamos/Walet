import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  hadleTotal = () => {
    const { expenses } = this.props;
    return expenses.reduce((acc, curr) => {
      const { value, currency, exchangeRates } = curr;
      const exchangeRate = exchangeRates[currency].ask;
      return acc + +value * +exchangeRate;
    }, 0);
  };

  render() {
    const { email } = this.props;
    return (
      <div>
        <p
          data-testid="email-field"
        >
          { email }
        </p>
        <p data-testid="total-field">
          { this.hadleTotal().toFixed(2)}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = PropTypes.shape({}).isRequired;

export default connect(mapStateToProps)(Header);
