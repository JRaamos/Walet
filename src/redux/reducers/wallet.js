import { ADD_EXPENSE, DELETE_EXPENSE,
  EDIT,
  EDIT_EXPENSE,
  EXPENSES_CHANGED,
  SAVE_EDIT,
  WALLET_CHANGED } from '../actions/actionsTypes';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [], // array de string que armazena as moedas
  data: [],
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e
  editor: false,
  idToEdit: 0,
  expense: [],
};
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_CHANGED:
    return { ...state,
      currencies: Object.keys(action.payload)
        .filter((currency) => currency !== 'USDT'),
      data: action.payload };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case DELETE_EXPENSE:
    return { ...state,
      expenses: [...state.expenses
        .filter((expense) => expense.id !== action.payload)] };
  case EDIT_EXPENSE:
    return { ...state,
      editor: true,
      idToEdit: action.payload };
  case EDIT:
    return { ...state, editor: false };
  case EXPENSES_CHANGED:
    return { ...state, expense: action.payload };
  case SAVE_EDIT:
    return {
      ...state,
      expenses: action.payload,
      editor: false,
    };
  default:
    return state;
  }
};

export default wallet;
