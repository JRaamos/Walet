// Coloque aqui suas actions
import EMAIL_CHANGED from './actionsTypes';

const emailChanged = (email) => ({
  type: EMAIL_CHANGED,
  payload: email,
});
export default emailChanged;
