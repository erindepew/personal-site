var React = require('react');
var Button= require('./Button.jsx');
var Layout = require('./Layout.jsx');
var Link = require('react-router').Link;

const notFound = {
	header: "Oops! That page doesn't exist.",
	message: "Let's try this again shall we?",
	image: "Error404.gif"
 };
const sentMessage = {
	header: 'Thanks for your note!',
	message: "We'll get back to you as soon as humanly possible, in the meantime, take a look around the rest of our site",
	image: "MessageSent.gif"
 };

var Message = React.createClass({
 render: function () {
	const type = this.props.routeParams.messageType;
	let content;
	if (type == 'message') {
	 content = sentMessage;
	}
	else {
	 content = notFound;
	}

	debugger;
	return (
	 <Layout navState={this.props.navState} aspect='MAIN' includeNav={false}>
		 <div className='layout--primary-section'>
			<div className='message--MAIN'>
			 <img className='message--image' src={`images/${content.image}`}/>
			 <h3 className='message--header'>{content.header}</h3>
			 <p className='message--text'>{content.message}</p>
			 <Link to="/"><Button label='Go Home' aspect='MAIN' selected={false}/></Link>
			</div>
			</div>
		</Layout>
	);
 }
});

module.exports = Message;