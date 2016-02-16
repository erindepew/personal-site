var React = require('react');
var About = require('./About.jsx');

var Home = React.createClass({
    render: function() {
        return (
            <div className="layout--MAIN">
                <div className="header--MAIN"> I am a developer &amp; designer.</div>
                <About/>
            </div>
        );
    }
});

module.exports = Home;