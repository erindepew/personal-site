var React = require('react');
var About = require('./About.jsx');
var Navigation = require ('./Navigation.jsx');

var Home = React.createClass({
  render: function () {
    return (
      <div className='layout--MAIN'>
      <div className='layout--wrapper'>
        <div className="header--MAIN"> I am a developer &amp; designer.</div>
        <About/>
      </div>
        <Navigation navState={this.props.navState}/>
      </div>
    );
  }
});

module.exports = Home;