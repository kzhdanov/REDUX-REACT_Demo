import LoginStore from '../stores/LoginStore';
import LoginActions from '../actions/LoginActions';

let LoginForm = React.createClass({
    getInitialState: function() {
        return { isAuth: false };
    },
    componentDidMount: function() {
        LoginStore.addChangeListener(this._loginBtnClick);
    },
    componentWillUnmount: function() {
        LoginStore.removeChangeListener(this._loginBtnClick);
    },
    render() {
        return (
            <form>
                <fieldset>
                    <legend>{this.props.legend}</legend>
                        <ul>
                            <li className="field">
                                <input className="wide text input" type="text" placeholder="Login" ref={(login) => this.login = login} />
                            </li>
                            <li className="field">
                                <input className="wide password input" type="password" placeholder="Password" ref={(password) => this.password = password}/>
                            </li>
                            <li className="field">
                                <div className="medium oval btn default">
                                    <a onClick={this._loginBtnClick}>Login</a>
                                </div>
                            </li>
                        </ul>
                </fieldset>
            </form>
        )
    },
    _loginBtnClick: function() {
        LoginActions.Login( {login: this.login.value, password: this.password.value} );
    }
})

module.exports.LoginForm = LoginForm;
