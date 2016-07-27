var React = require('react');
var About = require('./About.jsx');
var Layout = require ('./Layout.jsx');

var Home = React.createClass({
  render: function () {
    return (
     <Layout navState={this.props.navState} aspect='MAIN' includeNav={true}>
      <div className="header--MAIN"> I am a developer &amp; designer.</div>
      <About/>
     </Layout>
    );
  }
});

module.exports = Home;