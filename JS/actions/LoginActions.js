'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
import LoginConstants from '../constants/LoginConstants';
import LoginModel from '../model/Model';

let LoginActions = {
    Login: function(login, password) {
        AppDispatcher.handleViewAction({
            actionType: LoginConstants.LOGIN,
            isAuth: LoginModel.checkLogin(login, password)
        });
    }
}

module.exports = LoginActions;