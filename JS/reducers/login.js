export default function Login(state = {}, action) {
  switch (action.type) {
    case 'LOG_ON':
      return action.login;
    case 'LOG_OFF':
      return action.login;
    default:
      return state;
  }
}
