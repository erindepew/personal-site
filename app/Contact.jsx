var React = require('react');
var InputField = require('./InputField.jsx');
var Navigation = require ('./Navigation.jsx');
var Button = require ('./Button.jsx');

var Contact = React.createClass({
  render: function () {
    var layoutClass = this.props.navState ? 'layout--wrapper open' : 'layout--wrapper closed';
    return (
      <div className='layout--MAIN'>
        <div className={layoutClass}>
          <div className='contact-form--MAIN'>
            <InputField label='Name'/>
            <InputField label='Email'/>
            <InputField label='Message'/>
            <Button label='Send Message'/>
           </div>
        </div>
        <Navigation navState={this.props.navState}/>
      </div>
    );
  }
});

module.exports = Contact;