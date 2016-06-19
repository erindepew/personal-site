var React = require('react');
var Section = require('./Section.jsx');
var Button = require('./Button.jsx');
var Navigation = require ('./Navigation.jsx');


var experience = [
  {
    header: 'Frontend Developer',
    subheader: 'Bitly, February 2015 - present',
    content: '• Project lead for re-building website as a full-fledged SaaS platform using React, Omniscient, and Immutable using functional programming techniques. • Collaborated with product, design and data-science team to develop features and data visualizations for customers.• Maintained features on current Backbone and Marionette site while new platform is under construction.• Built and maintained internal ‘live’ styleguide which is used for collaborating with design and UX team on SaaS platform.• Developed process for creating CSS modules for use with React components which increased iteration speed and decreased total number of lines of CSS by 50%'
  },
  {
    header: 'Frontend Design Developer',
    subheader: 'NBCUniversal, March 2013 - February 2015',
    content: '• Developed responsive components and layouts using HTML5 and Sass for the Telemundo.com redesign with the Telemundo designer team and the NBC development team.• Developed a process to integrate the visual designer’s and front-end engineer’sworkflow, focusing on pair-programming web applications in-browser. Served as a bridge between the graphic designers and engineers, enabling the process to become designer and developer driven (agile-like) and drastically increasing efficiency.• Rapidly prototyped proof-of-concept systems using HTML5, CSS3, andJavaScript to serve as examples to both the UX and design teams.• Designed assets such as ads, headers, and icons for websites, signage,and mobile apps.'
  }
];

var skills = ['JavaScript, CSS3, HTML5, Sass, ES6, React, Omniscient, Immutable', 'Illustrator, Photoshop, Indesign', 'Wordpress, Drupal', 'Python, PHP', 'git, grep, awk', 'MySQL'];

var contact = [ 'erinldepew@gmail.com', '@erindepew', 'github.com/erindepew', 'linkedin.com/erindepew'];

var Resume = React.createClass({

  render: function () {
    return (
      <div className="layout--ALTERNATE">
        <div className={`layout--wrapper ${this.props.navState ? 'layout--wrapper open' : 'layout--wrapper closed'}`}>
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
          <a href='downloads/resume.pdf' target='_blank'><Button label="download PDF" aspect='MAIN' selected={false}/></a>
        </div>
        </div>
        <Navigation navState={this.props.navState}/>
      </div>
    );
  }
});

module.exports = Resume;