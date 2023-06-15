import { ADD_EXPENSE, WALLET_CHANGED } from '../actions/actionsTypes';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [], // array de string que armazena as moedas
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_CHANGED:
    return { ...state,
      currencies: action.payload };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
};

export default wallet;
