// Coloque aqui suas actions
import { ADD_EXPENSE, DELETE_EXPENSE,
  EMAIL_CHANGED, WALLET_CHANGED } from './actionsTypes';

export const emailChanged = (email) => ({
  type: EMAIL_CHANGED,
  payload: email,
});

export const walletChanged = (wallet) => ({
  type: WALLET_CHANGED,
  payload: wallet,
});

export const fetchApi = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  dispatch(walletChanged(data));
};

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense,
});

export const deleteExpense = (expense) => ({
  type: DELETE_EXPENSE,
  payload: expense,
});
