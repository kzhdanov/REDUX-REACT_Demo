var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var LoginConstants = require('../constants/LoginConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

let isAuth = false;
function SetAuthStatus(status) {
    isAuth = status;
}

var LoginStore = assign({}, EventEmitter.prototype, {
    getStatus: function() {
      return isAuth;
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action) {
    console.log(action);

    SetAuthStatus(action.isAuth);

    LoginStore.emitChange();
});

module.exports = LoginStore;