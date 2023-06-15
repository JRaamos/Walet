import React, { Component } from 'react';
import store from '../redux/store';

class Header extends Component {
  state = {
    email: '',
    expenses: [],
  };

  componentDidMount() {
    const { email } = store.getState().user;
    const { expenses } = store.getState().wallet;
    this.setState({ email, expenses });
    console.log(expenses);
  }

  render() {
    const { email, expenses } = this.state;
    return (
      <div>
        <p
          data-testid="email-field"
        >
          { email }
        </p>
        <p data-testid="total-field">
          {
            expenses.map(
              (expense) => expense.value,
            )
          }
          0
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

export default Header;
