// Esse reducer será responsável por tratar as informações da pessoa usuária
import { EMAIL_CHANGED } from '../actions/actionsTypes';

const INITIAL_STATE = {
  email: '', // string que armazena o email da pessoa usuária
};
const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EMAIL_CHANGED:
    return { ...state, user: { email: action.payload } };
  default:
    return state;
  }
};

export default user;
