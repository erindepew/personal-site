var React = require('react');
var Button= require('./Button.jsx');
var Layout = require('./Layout.jsx');
var Link = require('react-router').Link;

var NotFound = React.createClass({
 render: function () {
	return (
	 <Layout navState={this.props.navState} aspect='MAIN' includeNav={false}>
		 <div className='layout--primary-section'>
			<div className='not-found--MAIN'>
			 <div className='not-found--image'></div>
			 <h3 className='not-found--header'>
				 Oops! That page doesn't exist.</h3>
			 <p className='not-found--text'>Let's try this again shall we?</p>
			 <Link to="/"><Button label='Go Home' aspect='MAIN' selected={false}/></Link>
			</div>
			</div>
		</Layout>
	);
 }
});

module.exports = NotFound;