var React = require('react');
var About = require('./About.jsx');
var Navigation = require ('./Navigation.jsx');

var Home = React.createClass({
  render: function () {
    var layoutClass = this.props.navState ? 'layout--wrapper open' : 'layout--wrapper closed';
    return (
      <div className='layout--MAIN'>
      <div className={layoutClass}>
        <div className="header--MAIN"> I am a developer &amp; designer.</div>
        <About/>
      </div>
        <Navigation navState={this.props.navState}/>
      </div>
    );
  }
});

module.exports = Home;