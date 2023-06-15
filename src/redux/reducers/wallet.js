import { WALLET_CHANGED } from '../actions/actionsTypes';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [], // array de string que armazena as moedas
};
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_CHANGED:
    return { ...state, currencies: action.payload };
  default:
    return state;
  }
};

export default wallet;
