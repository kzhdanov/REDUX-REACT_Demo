'use strict';
/* Тут обращение к базе */
let LoginModel = {
	checkLogin : function(args) {
		if(args.login == 'kj' && args.password == '123')
			return true;
		else 
			return false;
	}
}

module.exports = LoginModel;