import LoginForm from './components/LoginForm.react';
import store from './Store';
import {Provider} from 'react-redux';

React.render(<Provider store={store}>
    <LoginForm />
  </Provider>,
  document.getElementById('app'));
