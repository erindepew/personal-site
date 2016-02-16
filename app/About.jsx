var React = require('react');
var Button = require('./Button.jsx');

var About = React.createClass({
    render: function() {
        return (
        <div className="info--MAIN">
            <img className="profile-image--image" src="images/profile-pic.png"/>
                <div className="info--text-wrapper">
                    <p className="info--intro-text">I am a front-end developer and web designer currently living in Brooklyn and working in Manhattan. Whether you consider me a designer with programming skills,
                        or a programmer with a knack for beautiful design, my diverse skill set is what allows
                        me to holistically solve problems. I believe that one of life's greatest pleasures is creation, no matter your medium of choice.</p>
                    <Button label="CONTACT"/>
                </div>
            </div>
        );
    }
});

module.exports = About;