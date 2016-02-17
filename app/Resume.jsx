var React = require('react');
var Section = require('./Section.jsx');
var Button = require ('./Button.jsx');


var experience = [
    {header: 'Bitly',
    subheader: '2015 - present',
    content: 'brief description'},
    {header: 'Bitly',
        subheader: '2015 - present',
        content: 'brief description'}

];

var Resume = React.createClass({
    render: function() {
        return (
            <div className="layout--ALTERNATE">
                <div className="layout--primary-section">
                <Section header="header text" subheader="subheader text" content="content text"/>
                </div>
                <div className="layout--seconday-section">
                    <Button label="download PDF"/>
                </div>
            </div>
        );
    }
});

module.exports = Resume;