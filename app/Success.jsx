var React = require('react');
var Button= require('./Button.jsx');
var Layout = require('./Layout.jsx');
var Link = require('react-router').Link;

var Success = React.createClass({
  render: function () {
    return (
      <Layout navState={this.props.navState} aspect='MAIN' includeNav={false}>
        <div className='layout--primary-section'>
          <div className='not-found--MAIN'>
            <div className='not-found--image'></div>
            <h3 className='not-found--header'>Thanks for your note!</h3>
            <p className='not-found--text'>We'll get back to you as soon as humanly possible,
              in the meantime, take a look around the rest of our site</p>
            <Link to="/"><Button label='Go Home' aspect='MAIN' selected={false}/></Link>
          </div>
        </div>
      </Layout>
    );
  }
});

module.exports = Success;