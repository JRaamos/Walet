import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import emailChanged from '../redux/actions';

class Login extends Component {
  state = {
    email: '',
    password: '',
    emailValidation: true,
  };

  hedleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(
      {
        [name]: value },
      () => {
        this.handleValidation();
      },
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email } = this.state;
    const { dispatch, history } = this.props;
    dispatch(emailChanged(email));
    history.push('/carteira');
  };

  handleValidation = () => {
    const buttonCheckCaracter = 6;
    const { email, password } = this.state;
    const emailValidation = /.+@[A-z]+[.]com/;
    console.log(emailValidation.test(email));
    if (emailValidation.test(email) && password.length >= buttonCheckCaracter) {
      this.setState({ emailValidation: false });
    } else {
      this.setState({ emailValidation: true });
    }
  };

  render() {
    const { email, password, emailValidation } = this.state;
    return (
      <main>
        <form
          className="login"
        >
          <h1>Login</h1>
          <input
            required
            value={ email }
            type="email"
            name="email"
            placeholder="Email"
            data-testid="email-input"
            onChange={ this.hedleChange }
          />
          <input
            required
            value={ password }
            name="password"
            type="password"
            placeholder="Password"
            data-testid="password-input"
            onChange={ this.hedleChange }
          />
          <button
            type="submit"
            disabled={ emailValidation }
            onClick={ this.handleSubmit }
          >
            Entrar
          </button>
        </form>

      </main>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Login);
