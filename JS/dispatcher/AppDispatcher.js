let Dispatcher = require('flux').Dispatcher;
let assign = require('object-assign');
let AppConst = require('../constants/LoginConstants');

let AppDispatcher = assign(new Dispatcher(), {
  handleViewAction: function(action) {
  	switch(action.actionType) {
  		case AppConst.LOGIN:
		    this.dispatch({
		      source: AppConst.LOGIN,
		      action: action
		    });
		    break;
    }
  }
});

module.exports = AppDispatcher;
