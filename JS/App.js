import {LoginForm} from './Components/LoginForm.react';

let Form = React.createClass({
	render() {
		return (
			<div>
				<LoginForm legend="Authorization form"/>
			</div>
		)
	}
})

React.render(<Form />, document.getElementById('app'));