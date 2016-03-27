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

var skills = [
  {
    skillList: 'HTML, CSS, JavaScript'
  },
  {
    skillList: 'Photoshop, Illustrator, Indesign'
  }
];

var Resume = React.createClass({

  render: function () {
    return (
      <div className="layout--ALTERNATE">
        <div className='layout--wrapper'>
        <div className="layout--primary-section">
          <h3 className='resume--header'>Experience</h3>
          {experience.map(function (item) {
            return <Section header={item.header} subheader={item.subheader} content={item.content}/>;
          })}
        </div>
        <div className="layout--secondary-section">
          <h3 className='resume--header'>Technical Skills</h3>
          {skills.map(function (item) {
            return <span>{item.skillList}</span>;
          })}
          <Button label="download PDF"/>
        </div>
        </div>
        <Navigation navState={this.props.navState}/>
      </div>
    );
  }
});

module.exports = Resume;