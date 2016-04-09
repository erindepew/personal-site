var React = require('react');
var Section = require('./Section.jsx');
var Button = require('./Button.jsx');
var Navigation = require ('./Navigation.jsx');


var experience = [
  {
    header: 'Frontend Developer',
    subheader: 'Bitly, 2015 - present',
    content: 'brief description'
  },
  {
    header: 'Frontend Design Developer',
    subheader: 'NBCUniversal, 2013 - 2015',
    content: 'brief description'
  },
  {
    header: 'Freelance Designer and Developer',
    subheader: '2012 - present',
    content: 'brief description'
  },
  {
    header: 'Curator',
    subheader: 'Swirl Network, 2011 - 2012',
    content: 'brief description'
  }
];

var skills = ['JavaScript, CSS3, HTML5, Sass, ES6, React, Omniscient, Immutable', 'Illustrator, Photoshop, Indesign', 'Wordpress, Drupal', 'Python, PHP', 'git, sh, grep, awk, webstorm', 'MySQL'];

var contact = [ 'erinldepew@gmail.com', '@erindepew', 'github.com/erindepew', 'linkedin.com/erindepew'];

var Resume = React.createClass({

  render: function () {
    return (
      <div className="layout--ALTERNATE">
        <div className='layout--wrapper'>
        <div className="layout--primary-section">
          <h3 className='resume--header experience'><span className='experience'> </span>Experience</h3>
          {experience.map(function (item) {
            return <Section header={item.header} subheader={item.subheader} content={item.content}/>;
          })}
        </div>
        <div className="layout--secondary-section">
          <h3 className='resume--header'><span className='contact'> </span>Contact</h3>
          <ul className='resume--list'>
            {contact.map(function (item) {
              return <li>{item}</li>;
            })}
          </ul>
          <h3 className='resume--header'><span className='tech-skills'> </span>Technical Skills</h3>
          <ul className='resume--list'>
            {skills.map(function (item) {
              return <li>{item}</li>;
            })}
          </ul>
          <Button label="download PDF"/>
        </div>
        </div>
        <Navigation navState={this.props.navState}/>
      </div>
    );
  }
});

module.exports = Resume;