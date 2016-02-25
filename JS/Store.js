import {createStore} from 'redux';
import reducer from './reducers/index';
const initialState = {
  login: {  isAuth: false,   Name: 'Anon',}
};

const store = createStore(reducer, initialState);

export default store;
