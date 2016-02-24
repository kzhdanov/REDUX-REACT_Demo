export function increment() {
  return {
    type: 'INCREMENT',
  };
}

export function decrement() {
  return {
    type: 'DECREMENT',
  };
}

export function login() {
  return {
    type: 'LOG_ON',
    login: { isAuth: true, Name: 'Вася' },
  };
}

export function logout() {
  return {
    type: 'LOG_OFF',
    login: { isAuth: false },
  };

}
