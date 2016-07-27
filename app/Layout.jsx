var React = require('react');
var Navigation = require('./Navigation.jsx');

var Layout = React.createClass({
 render: function () {
	return (
	 <div className={`layout--${this.props.aspect}`}>
		<div className={`layout--wrapper ${this.props.navState ? 'open' : 'closed'}`}>
		 {this.props.children}
		 </div>
		{this.props.includeNav ? <Navigation navState={this.props.navState}/> : null}
		</div>
	);
 }
});

module.exports = Layout;