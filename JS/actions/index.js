export function login(login, password) {
  console.log(login, password);
  return {
    type: 'LOG_ON',
    login: { isAuth: true, Name: 'Вася' },
  };
}

export function logout() {
  return {
    type: 'LOG_OFF',
    login: { isAuth: false, },
  };
}
