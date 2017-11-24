var React = require('react');
var ReactDom = require('react-dom');
require('./index.css');

//Components are concerned with 3 things:
//state
//lifecycle event
//UI - required

class App extends React.Component {
	render() {
		return(
			<div>
			Hello React Training!
			</div>
		)
	}
}

ReactDom.render(
	<App />,
	document.getElementById('app')

);