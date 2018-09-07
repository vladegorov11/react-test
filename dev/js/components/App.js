import React, {Component} from 'react';
import NavBar from './NavBar'
require('../../scss/style.scss');

class App extends Component {

	render() {
		return (
			<div>
				<NavBar/>
				{this.props.children}
			</div>
		)
    }
}

export default App;
