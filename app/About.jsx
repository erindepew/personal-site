var React = require('react');
var Link = require('react-router').Link;
var Button = require('./Button.jsx');

var About = React.createClass({
  render: function () {
    return (
      <div className="about--MAIN">
        <img className="about--profile-image" src="images/profile-pic.png"/>
        <div className="about--text-wrapper">
          <p className="about--text">I am a front-end developer and web designer currently living in Brooklyn and
            working in Manhattan. Whether you consider me a designer with programming skills,
            or a programmer with a knack for beautiful design, my diverse skill set is what allows
            me to holistically solve problems. I believe that one of life's greatest pleasures is creation, no matter
            your medium of choice.</p>
          <Link to="/contact"><Button label="CONTACT" aspect="MAIN" selected={false}/></Link>
        </div>
      </div>
    );
  }
});

module.exports = About;