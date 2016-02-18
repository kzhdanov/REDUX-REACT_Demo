'use strict';

import LoginStore from '../stores/LoginStore';
import LoginActions from '../actions/LoginActions';

function isAuth(val) {
  if( Boolean(val) )
    return { isAuth: true }
  else
    return { isAuth: false }
}

let LoginForm = React.createClass({
    getInitialState: function() {
        return isAuth();
    },
    componentDidMount: function() {
        LoginStore.addChangeListener(this._loginBtnClick);
    },
    componentWillUnmount: function() {
        LoginStore.removeChangeListener(this._loginBtnClick);
    },
    render() {
        return (
            <form className="navbar-form navbar-right" role="form">
              <div className="form-group">
                <div className={ this.state.isAuth ? 'hidden' : '' }> 
                    <label className="sr-only" htmlFor="login">Email</label>
                    <input type="email" className="form-control input-sm" id="login" placeholder="Login" ref={(login) => this.login = login} />
                </div>
                <div className={ this.state.isAuth ? '' : 'hidden' }>Hello - %UserName%</div>
              </div>
              <div className="form-group">
                  <div className={ this.state.isAuth ? 'hidden' : '' }> 
                    <label className="sr-only" htmlFor="password">Пароль</label>
                    <input type="password" className="form-control input-sm" id="password" placeholder="Password" ref={(password) => this.password = password} />
                  </div>
              </div>
              <div className="form-group">
                <div className={ this.state.isAuth ? 'hidden' : '' }> 
                  <button type="button" className="btn btn-default btn-sm" onClick={this._loginBtnClick}>Login</button> 
                </div>
                <div className={ this.state.isAuth ? '' : 'hidden' }> 
                  <button type="button" className="btn btn-default btn-sm active" onClick={this._logoutBtnClick}>Logout</button> 
                </div>
              </div>
            </form>
        )
    },
    _loginBtnClick: function() {
        LoginActions.Login( {login: this.login.value, password: this.password.value} );
        this.setState({isAuth: true});
    }
})

module.exports.LoginForm = LoginForm;
