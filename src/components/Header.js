import React, { Component } from 'react';
import store from '../redux/store';

class Header extends Component {
  state = {
    email: '',
  };

  componentDidMount() {
    const { email } = store.getState().user;
    this.setState({ email });
  }

  render() {
    const { email } = this.state;
    return (
      <div>
        <p
          data-testid="email-field"
        >
          { email }
        </p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

export default Header;
