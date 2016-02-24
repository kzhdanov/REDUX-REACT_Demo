import {createStore} from 'redux';
import reducer from './reducers/index';

const store = createStore(reducer, {
  login: {
            isAuth: false,
            Name: 'Anon',
          },
});

export default store;
