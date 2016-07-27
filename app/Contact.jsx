var React = require('react');
var InputField = require('./InputField.jsx');
var TextArea = require('./TextArea.jsx');
var Layout = require ('./Layout.jsx');
var Button = require ('./Button.jsx');

var contact = [{text: 'erinldepew@gmail.com', link: null}, {text: '@erindepew', link: 'twitter.com/erindepew'},
 {text: 'github.com/erindepew', link: 'github.com/erindepew'}, {text: 'linkedin.com/erindepew', link: 'linkedin.com/erindepew'}];

var Contact = React.createClass({
  render: function () {
    return (
     <Layout navState={this.props.navState} aspect='ALTERNATE' includeNav={true}>
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
           return item.link ? <li className='contact--list-item'><a className='contact--list-link'data-hover={item.text} href={item.link}>{item.text}</a></li>: <li className='contact--list-item'>{item.text}</li>;
          })}
         </ul>
         </div>
      </Layout>
    );
  }
});

module.exports = Contact;