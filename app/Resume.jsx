var React = require('react');
var Section = require('./Section.jsx');
var Button = require('./Button.jsx');
var Navigation = require ('./Navigation.jsx');


var experience = [
  {
    header: 'Bitly',
    subheader: '2015 - present',
    content: 'brief description'
  },
  {
    header: 'NBCUniversal',
    subheader: '2013 - 2015',
    content: 'brief description'
  }

];

var Resume = React.createClass({

  render: function () {
    return (
      <div className="layout--ALTERNATE">
        <div className='layout--wrapper'>
        <div className="layout--primary-section">
          {experience.map(function (item) {
            return <Section header={item.header} subheader={item.subheader} content={item.content}/>;
          })}
        </div>
        <div className="layout--secondary-section">
          <Button label="download PDF"/>
        </div>
        </div>
        <Navigation/>
      </div>
    );
  }
});

module.exports = Resume;