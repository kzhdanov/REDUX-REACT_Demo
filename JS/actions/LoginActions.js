import AppDispatcher from '../dispatcher/AppDispatcher';
import LoginConstants from '../constants/LoginConstants';

let LoginActions = {
    Login: function(login, password) {
        AppDispatcher.handleViewAction({
            actionType: LoginConstants.LOGIN,
            login: login,
            password: password
        });
    }
}

module.exports = LoginActions;