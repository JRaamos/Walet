// import user from './user';
// import wallet from './wallet';
import EMAIL_CHANGED from '../actions/actionsTypes';
// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

const INITIAL_STATE = {
  user: {
    email: '', // string que armazena o email da pessoa usuária
  },
  wallet: {
    currencies: [], // array de string
    expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
    editor: false, // valor booleano que indica de uma despesa está sendo editada
    idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
  },
};

const example = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EMAIL_CHANGED:
    return { ...state, user: { email: action.payload } };
  default:
    return state;
  }
};

const rootReducer = example;

export default rootReducer;
