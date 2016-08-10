var React = require('react');
var Section = require('./Section.jsx');
var Button = require('./Button.jsx');
var Layout = require ('./Layout.jsx');


var experience = [
  {
    header: 'Frontend Developer',
    subheader: 'Bitly, February 2015 - present',
    content: ['Project lead for re-building website as a full-fledged SaaS platform using React, Omniscient, and Immutable using functional programming techniques.', 'Collaborated with product, design and data-science team to develop features and data visualizations for customers.', 'Maintained features on current Backbone and Marionette site while new platform is under construction.', 'Built and maintained internal ‘live’ styleguide which is used for collaborating with design and UX team on SaaS platform.', 'Developed process for creating CSS modules for use with React components which increased iteration speed and decreased total number of lines of CSS by 50%']
  },
  {
    header: 'Frontend Design Developer',
    subheader: 'NBCUniversal, March 2013 - February 2015',
    content: ['Developed responsive components and layouts using HTML5 and Sass for the Telemundo.com redesign with the Telemundo designer team and the NBC development team.', 'Developed a process to integrate the visual designer’s and front-end engineer’sworkflow, focusing on pair-programming web applications in-browser. Served as a bridge between the graphic designers and engineers, enabling the process to become designer and developer driven (agile-like) and drastically increasing efficiency.', 'Rapidly prototyped proof-of-concept systems using HTML5, CSS3, and JavaScript to serve as examples to both the UX and design teams.', 'Designed assets such as ads, headers, and icons for websites, signage,and mobile apps.']
  }
];

var talks = [
  {
    header: 'Bitly Podcast',
    subheader: 'Bitly, November 2015',
    content: ['Talk for Bitly Podcast']
  },
  {
    header: 'Modular CSS: Developing, Extending and Maintaining CSS',
    subheader: 'Codemash, January 2016',
    content: ['Talk on developing and maintaining CSS Modules using Sass and React']
  },
  {
    header: 'React, Omniscient and Immutable: the gateway drugs to functional programming',
    subheader: 'ForwardJS, July 2016',
    content: ['Talk on our stack at Bitly using React, Omniscient, Immutable and Immstruct']
  }
];

var skills = ['JavaScript, CSS3, HTML5, Sass, ES6, React, Omniscient, Immutable', 'Illustrator, Photoshop, Indesign', 'Wordpress, Drupal', 'Python, PHP', 'git, grep, awk', 'MySQL'];

var contact = [{text: 'erinldepew@gmail.com', link: '/#/contact'}, {text: '@erindepew', link: 'twitter.com/erindepew'},
  {text: 'github.com/erindepew', link: 'github.com/erindepew'}, {text: 'linkedin.com/erindepew', link: 'linkedin.com/erindepew'}];

var Resume = React.createClass({

  render: function () {
    return (
    <Layout navState={this.props.navState} aspect='ALTERNATE' includeNav={true}>
        <div className="layout--primary-section">
          <h3 className='resume--header experience'><span className='experience'> </span>Experience</h3>
          {experience.map(function (item) {
            return <Section header={item.header} subheader={item.subheader} content={item.content}/>;
          })}
          <h3 className='resume--header talks'><span className='talks'> </span>Talks</h3>
          {talks.map(function (item) {
            return <Section header={item.header} subheader={item.subheader} content={item.content}/>;
          })}
        </div>
        <div className="layout--secondary-section">
          <h3 className='resume--header'><span className='contact'> </span>Contact</h3>
          <ul className='resume--list'>
            {contact.map(function (item) {
              return item.link ? <li className='resume--list-item'><a className='resume--list-link'data-hover={item.text} href={item.link}>{item.text}</a></li>: <li className='resume--list-item'>{item.text}</li>;
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
      </Layout>
    );
  }
});

module.exports = Resume;