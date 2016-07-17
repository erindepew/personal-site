var React = require('react');
var InputField = require('./InputField.jsx');
var TextArea = require('./TextArea.jsx');
var Navigation = require ('./Navigation.jsx');
var Button = require ('./Button.jsx');

var contact = [ 'erinldepew@gmail.com', '@erindepew', 'github.com/erindepew', 'linkedin.com/erindepew'];

var Contact = React.createClass({
  render: function () {
    return (
      <div className='layout--ALTERNATE'>
        <div className={`layout--wrapper ${this.props.navState ? 'open' : 'closed'}`}>
          <div className="layout--primary-section">
          <div className='contact-form--MAIN'>
            <h2 className='contact-form--header'>What's On Your Mind?</h2>
            <InputField label='Name'/>
            <InputField label='Email'/>
            <TextArea label='Message'/>
            <Button label='Send Message' aspect='MAIN' selected={false}/>
           </div>
        </div>
        <div className='layout--secondary-section'>
          <h2 className='contact-form--header'>Stay in Touch</h2>
          <ul className='contact--list'>
            {contact.map(function (item) {
              return <li>{item}</li>;
            })}
          </ul>
          </div>
        </div>
        <Navigation navState={this.props.navState}/>
      </div>
    );
  }
});

module.exports = Contact;