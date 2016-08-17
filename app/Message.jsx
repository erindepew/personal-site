var React = require('react');
var Button= require('./Button.jsx');
var Layout = require('./Layout.jsx');
var Link = require('react-router').Link;

var Message = React.createClass({
 render: function () {
	const type = this.props.routeParams.messageType;
	// if type == message
	debugger;
	return (
	 <Layout navState={this.props.navState} aspect='MAIN' includeNav={false}>
		 <div className='layout--primary-section'>
			<div className='message--MAIN'>
			 <img className='message--image' src="images/Error404.gif"/>
			 <h3 className='message--header'>
				 Oops! That page doesn't exist.</h3>
			 <p className='message--text'>Let's try this again shall we?</p>
			 <Link to="/"><Button label='Go Home' aspect='MAIN' selected={false}/></Link>
			</div>
			</div>
		</Layout>
	);
 }
});

module.exports = Message;