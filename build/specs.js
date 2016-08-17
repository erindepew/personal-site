(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/erindepew/Desktop/personal-site/app/About.jsx":[function(require,module,exports){
var React = require('react');
var Link = require('react-router').Link;
var Button = require('./Button.jsx');

var About = React.createClass({displayName: "About",
  render: function () {
    return (
      React.createElement("div", {className: "about--MAIN"}, 
        React.createElement("img", {className: "about--profile-image", src: "images/profile-pic.png"}), 
        React.createElement("div", {className: "about--text-wrapper"}, 
          React.createElement("p", {className: "about--text"}, "I am a front-end developer and web designer currently living in Brooklyn and" + ' ' +
            "working in Manhattan. Whether you consider me a designer with programming skills," + ' ' +
            "or a programmer with a knack for beautiful design, my diverse skill set is what allows" + ' ' +
            "me to holistically solve problems. I believe that one of life's greatest pleasures is creation, no matter" + ' ' +
            "your medium of choice."), 
          React.createElement(Link, {to: "/contact"}, React.createElement(Button, {label: "CONTACT", aspect: "MAIN", selected: false}))
        )
      )
    );
  }
});

module.exports = About;
},{"./Button.jsx":"/Users/erindepew/Desktop/personal-site/app/Button.jsx","react":"react","react-router":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/index.js"}],"/Users/erindepew/Desktop/personal-site/app/App.js":[function(require,module,exports){
var React = require('react');
var Home = require('./Home.jsx');
var Resume = require('./Resume.jsx');
var Work = require('./Work.jsx');
var PortfolioPage = require('./PortfolioPage.jsx');
var Message = require('./Message.jsx');
var Contact = require('./Contact.jsx');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;


var App = React.createClass({displayName: "App",
  getInitialState: function() {
    return {navState: false};
  },
  navClick: function() {
    this.setState({navState: !this.state.navState});
  },

  render: function () {
    var mobileNavClass = this.state.navState ? 'nav--mobile-icon open' : 'nav--mobile-icon closed';
    return (
      React.createElement("div", null, 
        React.createElement("span", {className: mobileNavClass, onClick: this.navClick}, " "), 
        React.cloneElement(this.props.children, { navState: this.state.navState })
      )
    );
  }
});

React.render((
  React.createElement(Router, {history: hashHistory}, 
    React.createElement(Route, {path: "/", component: App}, 
      React.createElement(IndexRoute, {component: Home}), 
      React.createElement(Route, {path: "/contact", component: Contact}), 
      React.createElement(Route, {path: "/work", component: Work}), 
      React.createElement(Route, {path: "/work/:projectName", component: PortfolioPage}), 
      React.createElement(Route, {path: "/resume", component: Resume}), 
      React.createElement(Route, {path: "/thanks/:messageType", component: Message}), 
      React.createElement(Route, {path: "*", component: Message})
    )
  )
), document.body);


module.exports = App;

},{"./Contact.jsx":"/Users/erindepew/Desktop/personal-site/app/Contact.jsx","./Home.jsx":"/Users/erindepew/Desktop/personal-site/app/Home.jsx","./Message.jsx":"/Users/erindepew/Desktop/personal-site/app/Message.jsx","./PortfolioPage.jsx":"/Users/erindepew/Desktop/personal-site/app/PortfolioPage.jsx","./Resume.jsx":"/Users/erindepew/Desktop/personal-site/app/Resume.jsx","./Work.jsx":"/Users/erindepew/Desktop/personal-site/app/Work.jsx","react":"react","react-router":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/index.js"}],"/Users/erindepew/Desktop/personal-site/app/Button.jsx":[function(require,module,exports){
var React = require('react');

var Button = React.createClass({displayName: "Button",
  render: function () {
    return (
      React.createElement("button", {onClick: this.props.handleClick ? this.props.handleClick.bind(null, this.props.label) : null, className: `button--${this.props.aspect}${this.props.selected ? '-SELECTED' : ''}`}, this.props.label)
    );
  }
});

module.exports = Button;
},{"react":"react"}],"/Users/erindepew/Desktop/personal-site/app/Contact.jsx":[function(require,module,exports){
var React = require('react');
var InputField = require('./InputField.jsx');
var TextArea = require('./TextArea.jsx');
var Layout = require ('./Layout.jsx');
var Button = require ('./Button.jsx');

var contact = [{text: '@erindepew', link: 'twitter.com/erindepew'},
 {text: 'github.com/erindepew', link: 'github.com/erindepew'}, {text: 'linkedin.com/erindepew', link: 'linkedin.com/erindepew'}];

var Contact = React.createClass({displayName: "Contact",
  render: function () {
    return (
     React.createElement(Layout, {navState: this.props.navState, aspect: "ALTERNATE", includeNav: true}, 
         React.createElement("div", {className: "layout--primary-section"}, 
           React.createElement("form", {action: "https://formspree.io/erinldepew@gmail.com", method: "POST"}, 
             React.createElement("div", {className: "contact-form--MAIN"}, 
               React.createElement("h2", {className: "contact-form--header"}, "What's On Your Mind?"), 
               React.createElement(InputField, {label: "Name", type: "text", name: "name", focus: true, max: "100"}), 
               React.createElement(InputField, {label: "Email", type: "email", name: "_replyto", focus: false, max: "100"}), 
               React.createElement(TextArea, {label: "Message", type: "text", name: "message", focus: false, max: "2000"}), 
               React.createElement("input", {type: "hidden", name: "_next", value: "http://localhost:8889/#/thanks"}), 
               React.createElement(Button, {label: "Send Message", aspect: "MAIN", selected: false, type: "submit", value: "Send"})
             )
           )
       ), 
       React.createElement("div", {className: "layout--secondary-section"}, 
         React.createElement("h2", {className: "contact-form--header"}, "Stay in Touch"), 
         React.createElement("ul", {className: "contact--list"}, 
          contact.map(function (item) {
           return item.link ? React.createElement("li", {className: "contact--list-item"}, React.createElement("a", {className: "contact--list-link", "data-hover": item.text, href: item.link}, item.text)): React.createElement("li", {className: "contact--list-item"}, item.text);
          })
         )
         )
      )
    );
  }
});

module.exports = Contact;
},{"./Button.jsx":"/Users/erindepew/Desktop/personal-site/app/Button.jsx","./InputField.jsx":"/Users/erindepew/Desktop/personal-site/app/InputField.jsx","./Layout.jsx":"/Users/erindepew/Desktop/personal-site/app/Layout.jsx","./TextArea.jsx":"/Users/erindepew/Desktop/personal-site/app/TextArea.jsx","react":"react"}],"/Users/erindepew/Desktop/personal-site/app/Filter.jsx":[function(require,module,exports){
var React = require('react');
var Button = require('./Button.jsx');

var Filter = React.createClass({displayName: "Filter",
  render: function () {
    var clickFunction = this.props.handleClick;
    var selected = this.props.selected;
    return (
      React.createElement("div", {className: `filter--MAIN${selected ? `-SELECTED` : ``}`}, 
        React.createElement("span", {className: "filter--label"}, this.props.label, ":"), 
        this.props.buttons.map(function (item) {
          return React.createElement(Button, {label: item, aspect: "ALTERNATE", ref: item, selected: selected == item, handleClick: selected !== item ? clickFunction : null});
        })
      )
    );
  }
});

module.exports = Filter;
},{"./Button.jsx":"/Users/erindepew/Desktop/personal-site/app/Button.jsx","react":"react"}],"/Users/erindepew/Desktop/personal-site/app/Home.jsx":[function(require,module,exports){
var React = require('react');
var About = require('./About.jsx');
var Layout = require ('./Layout.jsx');

var Home = React.createClass({displayName: "Home",
  render: function () {
    return (
     React.createElement(Layout, {navState: this.props.navState, aspect: "MAIN", includeNav: true}, 
      React.createElement("div", {className: "header--MAIN"}, " I am a developer & designer."), 
      React.createElement(About, null)
     )
    );
  }
});

module.exports = Home;
},{"./About.jsx":"/Users/erindepew/Desktop/personal-site/app/About.jsx","./Layout.jsx":"/Users/erindepew/Desktop/personal-site/app/Layout.jsx","react":"react"}],"/Users/erindepew/Desktop/personal-site/app/InputField.jsx":[function(require,module,exports){
var React = require('react');

var InputField = React.createClass({displayName: "InputField",
  getInitialState: function() {
    return {active: this.props.focus};
  },
  componentDidMount: function() {
    if (this.props.focus) {
      this.refs.inputField.getDOMNode().focus();
    }
  },
  onClick: function() {
     this.onFocus();
  },
  onFocus: function() {
    this.setState({active: true})
  },
  onBlur: function() {
    this.setState({active: false})
  },
  render: function () {
    return (
      React.createElement("div", {className: `input-field--${this.state.active ? `ACTIVE` : `MAIN`}`, onClick: this.onClick}, 
        React.createElement("p", {className: "input-field--label"}, this.props.label), 
        React.createElement("input", {type: this.props.type, maxLength: this.props.max, ref: "inputField", name: this.props.name, onBlur: () => this.onBlur(), onFocus: () => this.onFocus(), className: "input-field--input-field"})
      )
    );
  }
});

module.exports = InputField;
},{"react":"react"}],"/Users/erindepew/Desktop/personal-site/app/Layout.jsx":[function(require,module,exports){
var React = require('react');
var Navigation = require('./Navigation.jsx');

var Layout = React.createClass({displayName: "Layout",
 render: function () {
	return (
	 React.createElement("div", {className: `layout--${this.props.aspect}`}, 
		React.createElement("div", {className: `layout--wrapper ${this.props.navState ? 'open' : 'closed'}`}, 
		 this.props.children
		 ), 
		this.props.includeNav ? React.createElement(Navigation, {navState: this.props.navState}) : null
		)
	);
 }
});

module.exports = Layout;
},{"./Navigation.jsx":"/Users/erindepew/Desktop/personal-site/app/Navigation.jsx","react":"react"}],"/Users/erindepew/Desktop/personal-site/app/Message.jsx":[function(require,module,exports){
var React = require('react');
var Button= require('./Button.jsx');
var Layout = require('./Layout.jsx');
var Link = require('react-router').Link;

var Message = React.createClass({displayName: "Message",
 render: function () {
	const type = this.props.routeParams.messageType;
	// if type == message
	debugger;
	return (
	 React.createElement(Layout, {navState: this.props.navState, aspect: "MAIN", includeNav: false}, 
		 React.createElement("div", {className: "layout--primary-section"}, 
			React.createElement("div", {className: "message--MAIN"}, 
			 React.createElement("img", {className: "message--image", src: "images/Error404.gif"}), 
			 React.createElement("h3", {className: "message--header"}, 
				 "Oops! That page doesn't exist."), 
			 React.createElement("p", {className: "message--text"}, "Let's try this again shall we?"), 
			 React.createElement(Link, {to: "/"}, React.createElement(Button, {label: "Go Home", aspect: "MAIN", selected: false}))
			)
			)
		)
	);
 }
});

module.exports = Message;
},{"./Button.jsx":"/Users/erindepew/Desktop/personal-site/app/Button.jsx","./Layout.jsx":"/Users/erindepew/Desktop/personal-site/app/Layout.jsx","react":"react","react-router":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/index.js"}],"/Users/erindepew/Desktop/personal-site/app/Navigation.jsx":[function(require,module,exports){
var React = require('react');
var Link = require('react-router').Link;

var Navigation = React.createClass({displayName: "Navigation",
  render: function () {
    var navClass = this.props.navState ? 'nav--MAIN open' : 'nav--MAIN closed';
    return (
      React.createElement("nav", {className: navClass}, 
        React.createElement("ul", {className: "nav--nav-list"}, 
          React.createElement("li", {className: "nav--nav-link"}, 
            React.createElement(Link, {to: "/"}, "ABOUT")
          ), 
          React.createElement("li", {className: "nav--nav-link"}, 
            React.createElement(Link, {to: "/work"}, "WORK")
          ), 
          React.createElement("li", {className: "nav--nav-link"}, 
            React.createElement(Link, {to: "/resume"}, "RESUME")
          ), 
          React.createElement("li", {className: "nav--nav-link"}, 
            React.createElement("a", {href: "http://www.erindepew.com/blog"}, "BLOG")
          )
        )
      )
    );
  }
});

module.exports = Navigation;
},{"react":"react","react-router":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/index.js"}],"/Users/erindepew/Desktop/personal-site/app/PortfolioPage.jsx":[function(require,module,exports){
var React = require('react');
var Layout = require('./Layout.jsx');

const pages = {
  logos: {title: 'Operations and Technical Services Logo Design', intro: "These are a collection of proposed logo designs for NBCUniversal's Operations and Technical Services department.",
   content: [{image: 'logos/logo1.jpg', caption: null, link: null}, {image: 'logos/logo2.png', caption: null , link: null},
    {image: 'logos/logo4.png', caption: null, link: null}]},

  haskell: {title: 'Haskell Platform Redesign',
   intro: 'Collaborating with the Haskell community, I created the UX, design and a simple prototype for a redesign of the Haskell Platform. I pulled color inspiration from the current logo, re-organized the UX to a more appropriate heirarchy, and cleaned-up the design for a sleeker more modern feel.',
   content: [{image: 'haskell/haskell-platform-1.png', caption: 'This was the final design after being reviewed by the community',
    link: {url: 'http://erindepew.github.io/Haskell_Platform/', text: 'Click here to view the Haskell Platform prototype =>'}},
    {image: 'haskell/haskell-platform-2.png', caption: null, link: null},
    {image: 'haskell/haskell-platform-3.png', caption: 'This was an alternate proposed design and color-scheme.', link: null} ]},

 SSOLogin: {title: 'Single Sign-on Login Page Redesign', intro: 'This project was a UX and design update for the single sign-on login page at NBCUniversal. I created the design, UX and built a prototype with the HTML and CSS to be ported over to Drupal in production.',
   content: [{image: 'SSOlogin/SSOLogin-1.png', caption: null, link: null},
    {image: 'SSOlogin/SSOLogin-2.png', caption: 'Final design that was chosen for the updated SSO login page.', link: null},
    {image: 'SSOlogin/SSOLogin-6.png', caption: null, link: null}, {image: 'SSOlogin/SSOLogin-3.png', caption: 'Alternate proposed design', link: null},
    {image: 'SSOlogin/SSOLogin-4.png', caption: 'Alternate proposed design', link: null}, {image: 'SSOlogin/SSOLogin-5.png', caption: 'Alternate proposed design' , link: null}]},

 sports_dashboard: {title: 'NBC Sports Dashboard', intro: 'I created the UX and design for single page app for NBC Sports. The dashboard would provide highlights and important information at a glance to members of the NBC Sports reporting team.',
  content: [{image: 'sports_dashboard/sports-dashboard-1.png', caption: null, link: null},
   {image: 'sports_dashboard/sports-dashboard-2.png', caption: null, link: null},
   {image: 'sports_dashboard/sports-dashboard-3.png', caption: null, link: null},
   {image: 'sports_dashboard/sports-dashboard-4.png', caption: null, link: null}]},

 telemundo: {title: 'Telemundo.com Redesign', intro: "I assisted with a complete redesign and rebuild of Telemundo's main website, and acted as a hybrid designer/developer and a bridge between the NBCUniversal development team and Telemundo design and UX team.",
  content: [{image: 'telemundo/Telemundo-1.png', caption: "CSS3, HTML5, Sass and Compass were used to build a responsive and component-based front-end with a Drupal CMS backend.",
    link: {url: 'www.telemundo.com', text: 'View the Telemundo site =>'}},
   {image: 'telemundo/Telemundo-2.png', caption: 'The design, UX and front-end development team used Pattern Lab as a tool to collaboratively create a component-based site from design to development.',
    link: {url: 'http://nbcuots.github.io/Publisher7_nbcutelemundo/?p=pages-homepage-b', text: 'View the Telemundo pattern lab =>'}}]},

 field_hockey: {title: "New York Women's Field Hockey Shirt Designs", intro: "I created several tee shirt designs for New York Women's Field Hockey club's 10th year anniversary.",
  content: [{image: 'field-hockey/mockup-dark_v1.jpg', caption: 'This was the final selected design that was printed and sold.', link: null},
    {image: 'field-hockey/mockup-dark_v1.jpg', caption: 'Light and dark versions of the final selected design mocked-up on a tee shirt.', link: null}, {image: 'field-hockey/mockup-light_v1.jpg', caption: null, link: null},
    {image: 'field-hockey/mockup-dark_v2.jpg', caption: 'Alternate proposed design.', link: null}, {image: 'field-hockey/mockup-light_v2.jpg', caption: null, link: null},
    {image: 'field-hockey/mockup-dark_v3.jpg', caption: 'Alternate proposed design.', link: null}, {image: 'field-hockey/mockup-light_v3.jpg', caption: null, link: null}]}
};

var PortfolioPage = React.createClass({displayName: "PortfolioPage",
  render: function () {
    const currentProject = pages[this.props.routeParams.projectName];
    return (
     React.createElement(Layout, {navState: this.props.navState, aspect: "MAIN", includeNav: true}, 
          React.createElement("div", {className: "layout--primary-section"}, 
          React.createElement("div", {className: "portfolio-page--MAIN"}, 
            React.createElement("h1", {className: "portfolio-page--header"}, currentProject.title), 
            React.createElement("p", {className: "portfolio-page--text"}, currentProject.intro), 
            currentProject.content.map(function(item){
              return (
                React.createElement("div", null, 
                  React.createElement("img", {className: "portfolio-page--image", src: `images/portfolio/${item.image}`}), 
                  item.caption ? React.createElement("p", {className: "portfolio-page--text"}, item.caption) : null, 
                  item.link ? React.createElement("a", {className: "portfolio-page--link", "data-hover": item.link.text, href: item.link.url}, item.link.text) : null
                ));
            })
          )
          )
    )
    );
  }
});

module.exports = PortfolioPage;
},{"./Layout.jsx":"/Users/erindepew/Desktop/personal-site/app/Layout.jsx","react":"react"}],"/Users/erindepew/Desktop/personal-site/app/Resume.jsx":[function(require,module,exports){
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

var Resume = React.createClass({displayName: "Resume",

  render: function () {
    return (
    React.createElement(Layout, {navState: this.props.navState, aspect: "ALTERNATE", includeNav: true}, 
        React.createElement("div", {className: "layout--primary-section"}, 
          React.createElement("h3", {className: "resume--header experience"}, React.createElement("span", {className: "experience"}, " "), "Experience"), 
          experience.map(function (item) {
            return React.createElement(Section, {header: item.header, subheader: item.subheader, content: item.content});
          }), 
          React.createElement("h3", {className: "resume--header talks"}, React.createElement("span", {className: "talks"}, " "), "Talks"), 
          talks.map(function (item) {
            return React.createElement(Section, {header: item.header, subheader: item.subheader, content: item.content});
          })
        ), 
        React.createElement("div", {className: "layout--secondary-section"}, 
          React.createElement("h3", {className: "resume--header"}, React.createElement("span", {className: "contact"}, " "), "Contact"), 
          React.createElement("ul", {className: "resume--list"}, 
            contact.map(function (item) {
              return item.link ? React.createElement("li", {className: "resume--list-item"}, React.createElement("a", {className: "resume--list-link", "data-hover": item.text, href: item.link}, item.text)): React.createElement("li", {className: "resume--list-item"}, item.text);
            })
          ), 
          React.createElement("h3", {className: "resume--header"}, React.createElement("span", {className: "tech-skills"}, " "), "Technical Skills"), 
          React.createElement("ul", {className: "resume--list"}, 
            skills.map(function (item) {
              return React.createElement("li", null, item);
            })
          ), 
          React.createElement("a", {href: "downloads/resume.pdf", target: "_blank"}, React.createElement(Button, {label: "download PDF", aspect: "MAIN", selected: false}))
        )
      )
    );
  }
});

module.exports = Resume;
},{"./Button.jsx":"/Users/erindepew/Desktop/personal-site/app/Button.jsx","./Layout.jsx":"/Users/erindepew/Desktop/personal-site/app/Layout.jsx","./Section.jsx":"/Users/erindepew/Desktop/personal-site/app/Section.jsx","react":"react"}],"/Users/erindepew/Desktop/personal-site/app/Section.jsx":[function(require,module,exports){
var React = require('react');

var Section = React.createClass({displayName: "Section",
  render: function () {
    return (
      React.createElement("div", {className: "section--MAIN"}, 
        React.createElement("h3", {className: "section--header"}, this.props.header), 
        React.createElement("h5", {className: "section--subheader"}, this.props.subheader), 
        React.createElement("ul", {className: "section--content"}, this.props.content.map(function (item) {
          return React.createElement("li", {className: "section--content-item"}, item);
        }))
      )
    );
  }
});

module.exports = Section;
},{"react":"react"}],"/Users/erindepew/Desktop/personal-site/app/TextArea.jsx":[function(require,module,exports){
var React = require('react');

var TextArea = React.createClass({displayName: "TextArea",
  getInitialState: function() {
    return {active: this.props.focus};
  },
  componentDidMount: function() {
    if (this.props.focus) {
      this.refs.textArea.getDOMNode().focus();
    }
  },
  onClick: function() {
    this.onFocus();
  },
  onFocus: function() {
    this.setState({active: true})
  },
  onBlur: function() {
    this.setState({active: false})
  },
  render: function () {
    return (
      React.createElement("div", {className: `text-area--${this.state.active ? `ACTIVE` : `MAIN`}`, onClick: this.onClick}, 
        React.createElement("p", {className: "text-area--label"}, this.props.label), 
        React.createElement("textarea", {type: this.props.type, maxLength: this.props.max, name: this.props.name, ref: "textArea", name: this.props.name, onBlur: () => this.onBlur(), onFocus: () => this.onFocus(), className: "text-area--input-field"})
      )
    );
  }
});

module.exports = TextArea;
},{"react":"react"}],"/Users/erindepew/Desktop/personal-site/app/Thumbnail.jsx":[function(require,module,exports){
var React = require('react');
var Link = require('react-router').Link;

var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function () {
    return (
      React.createElement(Link, {to: this.props.link, className: "thumbnail--MAIN"}, 
        React.createElement("div", {className: "thumbnail--overlay"}, 
          React.createElement("div", {className: "thumbnail--overlay-text"}, 
            React.createElement("h5", {className: "thumbnail--title"}, this.props.title)
          )
        ), 
        React.createElement("img", {className: "thumbnail--image", src: `images/${this.props.imageUrl}`})
    )
    );
  }
});

module.exports = Thumbnail;
},{"react":"react","react-router":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/index.js"}],"/Users/erindepew/Desktop/personal-site/app/Work.jsx":[function(require,module,exports){
var React = require('react');
var Thumbnail = require('./Thumbnail.jsx');
var Layout = require('./Layout.jsx');
var Filter = require('./Filter.jsx');

const filterOptions = ['photos', 'code', 'design', 'ux', 'all'];

const projects = [{image:'logos.jpg', title: 'Logo Designs', name: 'logos', tag:['design']},
  {image:'haskell.png', title: 'Haskell Platform Redesign', name: 'haskell', tag:[ 'code', 'ux', 'design'] },
  {image:'SSOlogin.png',title: 'Single Sign-on Login Page', name: 'SSOLogin', tag:[ 'ux', 'design']},
  {image:'sports_dashboard.png', title: 'NBC Sports Dashboard', name: 'sports_dashboard', tag:[ 'ux', 'design']},
  {image:'telemundo.png', title: 'Telemundo.com Redesign', name: 'telemundo', tag:[ 'code']},
  {image:'field-hockey.png', title: 'New York Field Hockey Shirt Design', name: 'field_hockey', tag:[ 'design']}];

var Work = React.createClass({displayName: "Work",
  getInitialState: function() {
    return {selected: 'all'};
  },
  handleClick: function(selected) {
    this.setState({selected: selected});
  },
  render: function () {
    let work = projects.filter((item) => {
      if (this.state.selected == 'all') {
        return projects;
      }
      if ((item.tag.indexOf(this.state.selected) > -1)) {
        return item
      }
    });

    return (
      React.createElement(Layout, {navState: this.props.navState, aspect: "MAIN", includeNav: true}, 
        React.createElement("div", {className: "layout--primary-section"}, 
          React.createElement(Filter, {label: "FILTER BY", buttons: filterOptions, handleClick: this.handleClick, selected: this.state.selected}), 
          work.map(function (item) {
                return React.createElement(Thumbnail, {title: item.title, imageUrl: `portfolio/thumbnails/${item.image}`, link: `/work/${item.name}`});
              }) 
        )
      )
    );
  }
});

module.exports = Work;
},{"./Filter.jsx":"/Users/erindepew/Desktop/personal-site/app/Filter.jsx","./Layout.jsx":"/Users/erindepew/Desktop/personal-site/app/Layout.jsx","./Thumbnail.jsx":"/Users/erindepew/Desktop/personal-site/app/Thumbnail.jsx","react":"react"}],"/Users/erindepew/Desktop/personal-site/node_modules/deep-equal/index.js":[function(require,module,exports){
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/is_arguments.js":"/Users/erindepew/Desktop/personal-site/node_modules/deep-equal/lib/is_arguments.js","./lib/keys.js":"/Users/erindepew/Desktop/personal-site/node_modules/deep-equal/lib/keys.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/deep-equal/lib/is_arguments.js":[function(require,module,exports){
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],"/Users/erindepew/Desktop/personal-site/node_modules/deep-equal/lib/keys.js":[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/Actions.js":[function(require,module,exports){
/**
 * Indicates that navigation was caused by a call to history.push.
 */
'use strict';

exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};
},{}],"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/AsyncUtils.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;
var _slice = Array.prototype.slice;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0,
      isDone = false;
  var sync = false,
      hasNext = false,
      doneArgs = undefined;

  function done() {
    isDone = true;
    if (sync) {
      // Iterate instead of recursing if possible.
      doneArgs = [].concat(_slice.call(arguments));
      return;
    }

    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) {
      return;
    }

    hasNext = true;
    if (sync) {
      // Iterate instead of recursing if possible.
      return;
    }

    sync = true;

    while (!isDone && currentTurn < turns && hasNext) {
      hasNext = false;
      work.call(this, currentTurn++, next, done);
    }

    sync = false;

    if (isDone) {
      // This means the loop finished synchronously.
      callback.apply(this, doneArgs);
      return;
    }

    if (currentTurn >= turns && hasNext) {
      isDone = true;
      callback();
    }
  }

  next();
}
},{}],"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/DOMStateStorage.js":[function(require,module,exports){
(function (process){
/*eslint-disable no-empty */
'use strict';

exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var KeyPrefix = '@@History/';
var QuotaExceededErrors = ['QuotaExceededError', 'QUOTA_EXCEEDED_ERR'];

var SecurityError = 'SecurityError';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  try {
    if (state == null) {
      window.sessionStorage.removeItem(createKey(key));
    } else {
      window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
    }
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

      return;
    }

    if (QuotaExceededErrors.indexOf(error.name) >= 0 && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

      return;
    }

    throw error;
  }
}

function readState(key) {
  var json = undefined;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

      return null;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}
}).call(this,require('_process'))

},{"_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js","warning":"/Users/erindepew/Desktop/personal-site/node_modules/history/node_modules/warning/browser.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/DOMUtils.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search + window.location.hash;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}
},{}],"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/ExecutionEnvironment.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/PathUtils.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;
exports.extractPath = extractPath;
exports.parsePath = parsePath;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

function parsePath(path) {
  var pathname = extractPath(path);
  var search = '';
  var hash = '';

  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
}
}).call(this,require('_process'))

},{"_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js","warning":"/Users/erindepew/Desktop/personal-site/node_modules/history/node_modules/warning/browser.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/createBrowserHistory.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _PathUtils = require('./PathUtils');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve URLs.
 */
function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

  var forceRefresh = options.forceRefresh;

  var isSupported = _DOMUtils.supportsHistory();
  var useRefresh = !isSupported || forceRefresh;

  function getCurrentLocation(historyState) {
    try {
      historyState = historyState || window.history.state || {};
    } catch (e) {
      historyState = {};
    }

    var path = _DOMUtils.getWindowPath();
    var _historyState = historyState;
    var key = _historyState.key;

    var state = undefined;
    if (key) {
      state = _DOMStateStorage.readState(key);
    } else {
      state = null;
      key = history.createKey();

      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null);
    }

    var location = _PathUtils.parsePath(path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function startPopStateListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function popStateListener(event) {
      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

      transitionTo(getCurrentLocation(event.state));
    }

    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search + hash;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (useRefresh) {
        window.location.href = path;
        return false; // Prevent location update.
      } else {
          window.history.pushState(historyState, null, path);
        }
    } else {
      // REPLACE
      if (useRefresh) {
        window.location.replace(path);
        return false; // Prevent location update.
      } else {
          window.history.replaceState(historyState, null, path);
        }
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopPopStateListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopPopStateListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./Actions":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/Actions.js","./DOMStateStorage":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/DOMStateStorage.js","./DOMUtils":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/DOMUtils.js","./ExecutionEnvironment":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/ExecutionEnvironment.js","./PathUtils":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/PathUtils.js","./createDOMHistory":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/createDOMHistory.js","_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js","invariant":"/Users/erindepew/Desktop/personal-site/node_modules/invariant/browser.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/createDOMHistory.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./DOMUtils":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/DOMUtils.js","./ExecutionEnvironment":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/ExecutionEnvironment.js","./createHistory":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/createHistory.js","_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js","invariant":"/Users/erindepew/Desktop/personal-site/node_modules/invariant/browser.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/createHashHistory.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _PathUtils = require('./PathUtils');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

function isAbsolutePath(path) {
  return typeof path === 'string' && path.charAt(0) === '/';
}

function ensureSlash() {
  var path = _DOMUtils.getHashPath();

  if (isAbsolutePath(path)) return true;

  _DOMUtils.replaceHashPath('/' + path);

  return false;
}

function addQueryStringValueToPath(path, key, value) {
  return path + (path.indexOf('?') === -1 ? '?' : '&') + (key + '=' + value);
}

function stripQueryStringValueFromPath(path, key) {
  return path.replace(new RegExp('[?&]?' + key + '=[a-zA-Z0-9]+'), '');
}

function getQueryStringValueFromPath(path, key) {
  var match = path.match(new RegExp('\\?.*?\\b' + key + '=(.+?)\\b'));
  return match && match[1];
}

var DefaultQueryKey = '_k';

function createHashHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Hash history needs a DOM') : _invariant2['default'](false) : undefined;

  var queryKey = options.queryKey;

  if (queryKey === undefined || !!queryKey) queryKey = typeof queryKey === 'string' ? queryKey : DefaultQueryKey;

  function getCurrentLocation() {
    var path = _DOMUtils.getHashPath();

    var key = undefined,
        state = undefined;
    if (queryKey) {
      key = getQueryStringValueFromPath(path, queryKey);
      path = stripQueryStringValueFromPath(path, queryKey);

      if (key) {
        state = _DOMStateStorage.readState(key);
      } else {
        state = null;
        key = history.createKey();
        _DOMUtils.replaceHashPath(addQueryStringValueToPath(path, queryKey, key));
      }
    } else {
      key = state = null;
    }

    var location = _PathUtils.parsePath(path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function startHashChangeListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function hashChangeListener() {
      if (!ensureSlash()) return; // Always make sure hashes are preceeded with a /.

      transitionTo(getCurrentLocation());
    }

    ensureSlash();
    _DOMUtils.addEventListener(window, 'hashchange', hashChangeListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'hashchange', hashChangeListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    var path = (basename || '') + pathname + search;

    if (queryKey) {
      path = addQueryStringValueToPath(path, queryKey, key);
      _DOMStateStorage.saveState(key, state);
    } else {
      // Drop key and state.
      location.key = location.state = null;
    }

    var currentHash = _DOMUtils.getHashPath();

    if (action === _Actions.PUSH) {
      if (currentHash !== path) {
        window.location.hash = path;
      } else {
        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'You cannot PUSH the same path using hash history') : undefined;
      }
    } else if (currentHash !== path) {
      // REPLACE
      _DOMUtils.replaceHashPath(path);
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopHashChangeListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopHashChangeListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopHashChangeListener();
    };
  }

  function push(location) {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

    history.push(location);
  }

  function replace(location) {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

    history.replace(location);
  }

  var goIsSupportedWithoutReload = _DOMUtils.supportsGoWithoutReloadUsingHash();

  function go(n) {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;

    history.go(n);
  }

  function createHref(path) {
    return '#' + history.createHref(path);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopHashChangeListener();
  }

  // deprecated
  function pushState(state, path) {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

    history.pushState(state, path);
  }

  // deprecated
  function replaceState(state, path) {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

    history.replaceState(state, path);
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    push: push,
    replace: replace,
    go: go,
    createHref: createHref,

    registerTransitionHook: registerTransitionHook, // deprecated - warning is in createHistory
    unregisterTransitionHook: unregisterTransitionHook, // deprecated - warning is in createHistory
    pushState: pushState, // deprecated - warning is in createHistory
    replaceState: replaceState // deprecated - warning is in createHistory
  });
}

exports['default'] = createHashHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./Actions":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/Actions.js","./DOMStateStorage":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/DOMStateStorage.js","./DOMUtils":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/DOMUtils.js","./ExecutionEnvironment":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/ExecutionEnvironment.js","./PathUtils":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/PathUtils.js","./createDOMHistory":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/createDOMHistory.js","_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js","invariant":"/Users/erindepew/Desktop/personal-site/node_modules/invariant/browser.js","warning":"/Users/erindepew/Desktop/personal-site/node_modules/history/node_modules/warning/browser.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/createHistory.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _PathUtils = require('./PathUtils');

var _AsyncUtils = require('./AsyncUtils');

var _Actions = require('./Actions');

var _createLocation2 = require('./createLocation');

var _createLocation3 = _interopRequireDefault(_createLocation2);

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var getUserConfirmation = options.getUserConfirmation;
  var keyLength = options.keyLength;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];

  function listenBefore(hook) {
    transitionHooks.push(hook);

    return function () {
      transitionHooks = transitionHooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var allKeys = [];
  var changeListeners = [];
  var location = undefined;

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function listen(listener) {
    changeListeners.push(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      changeListeners = changeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

      if (ok) {
        // treat PUSH to current path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = createPath(location);
          var nextPath = createPath(nextLocation);

          if (nextPath === prevPath && _deepEqual2['default'](location.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
        }

        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function push(location) {
    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
  }

  function replace(location) {
    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(location) {
    if (location == null || typeof location === 'string') return location;

    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(location) {
    return createPath(location);
  }

  function createLocation(location, action) {
    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

    if (typeof action === 'object') {
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to history.createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;

      if (typeof location === 'string') location = _PathUtils.parsePath(location);

      location = _extends({}, location, { state: action });

      action = key;
      key = arguments[3] || createKey();
    }

    return _createLocation3['default'](location, action, key);
  }

  // deprecated
  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  // deprecated
  function pushState(state, path) {
    if (typeof path === 'string') path = _PathUtils.parsePath(path);

    push(_extends({ state: state }, path));
  }

  // deprecated
  function replaceState(state, path) {
    if (typeof path === 'string') path = _PathUtils.parsePath(path);

    replace(_extends({ state: state }, path));
  }

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,
    createLocation: createLocation,

    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./Actions":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/Actions.js","./AsyncUtils":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/AsyncUtils.js","./PathUtils":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/PathUtils.js","./createLocation":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/createLocation.js","./deprecate":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/deprecate.js","./runTransitionHook":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/runTransitionHook.js","_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js","deep-equal":"/Users/erindepew/Desktop/personal-site/node_modules/deep-equal/index.js","warning":"/Users/erindepew/Desktop/personal-site/node_modules/history/node_modules/warning/browser.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/createLocation.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _Actions = require('./Actions');

var _PathUtils = require('./PathUtils');

function createLocation() {
  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof location === 'string') location = _PathUtils.parsePath(location);

  if (typeof action === 'object') {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;

    location = _extends({}, location, { state: action });

    action = key || _Actions.POP;
    key = _fourthArg;
  }

  var pathname = location.pathname || '/';
  var search = location.search || '';
  var hash = location.hash || '';
  var state = location.state || null;

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./Actions":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/Actions.js","./PathUtils":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/PathUtils.js","_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js","warning":"/Users/erindepew/Desktop/personal-site/node_modules/history/node_modules/warning/browser.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/createMemoryHistory.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _PathUtils = require('./PathUtils');

var _Actions = require('./Actions');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createStateStorage(entries) {
  return entries.filter(function (entry) {
    return entry.state;
  }).reduce(function (memo, entry) {
    memo[entry.key] = entry.state;
    return memo;
  }, {});
}

function createMemoryHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  if (Array.isArray(options)) {
    options = { entries: options };
  } else if (typeof options === 'string') {
    options = { entries: [options] };
  }

  var history = _createHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: saveState,
    go: go
  }));

  var _options = options;
  var entries = _options.entries;
  var current = _options.current;

  if (typeof entries === 'string') {
    entries = [entries];
  } else if (!Array.isArray(entries)) {
    entries = ['/'];
  }

  entries = entries.map(function (entry) {
    var key = history.createKey();

    if (typeof entry === 'string') return { pathname: entry, key: key };

    if (typeof entry === 'object' && entry) return _extends({}, entry, { key: key });

    !false ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Unable to create history entry from %s', entry) : _invariant2['default'](false) : undefined;
  });

  if (current == null) {
    current = entries.length - 1;
  } else {
    !(current >= 0 && current < entries.length) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : _invariant2['default'](false) : undefined;
  }

  var storage = createStateStorage(entries);

  function saveState(key, state) {
    storage[key] = state;
  }

  function readState(key) {
    return storage[key];
  }

  function getCurrentLocation() {
    var entry = entries[current];
    var basename = entry.basename;
    var pathname = entry.pathname;
    var search = entry.search;

    var path = (basename || '') + pathname + (search || '');

    var key = undefined,
        state = undefined;
    if (entry.key) {
      key = entry.key;
      state = readState(key);
    } else {
      key = history.createKey();
      state = null;
      entry.key = key;
    }

    var location = _PathUtils.parsePath(path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function canGo(n) {
    var index = current + n;
    return index >= 0 && index < entries.length;
  }

  function go(n) {
    if (n) {
      if (!canGo(n)) {
        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'Cannot go(%s) there is not enough history', n) : undefined;
        return;
      }

      current += n;

      var currentLocation = getCurrentLocation();

      // change action to POP
      history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
    }
  }

  function finishTransition(location) {
    switch (location.action) {
      case _Actions.PUSH:
        current += 1;

        // if we are not on the top of stack
        // remove rest and push new
        if (current < entries.length) entries.splice(current);

        entries.push(location);
        saveState(location.key, location.state);
        break;
      case _Actions.REPLACE:
        entries[current] = location;
        saveState(location.key, location.state);
        break;
    }
  }

  return history;
}

exports['default'] = createMemoryHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./Actions":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/Actions.js","./PathUtils":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/PathUtils.js","./createHistory":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/createHistory.js","_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js","invariant":"/Users/erindepew/Desktop/personal-site/node_modules/invariant/browser.js","warning":"/Users/erindepew/Desktop/personal-site/node_modules/history/node_modules/warning/browser.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/deprecate.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function deprecate(fn, message) {
  return function () {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] ' + message) : undefined;
    return fn.apply(this, arguments);
  };
}

exports['default'] = deprecate;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js","warning":"/Users/erindepew/Desktop/personal-site/node_modules/history/node_modules/warning/browser.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/runTransitionHook.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
  }
}

exports['default'] = runTransitionHook;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js","warning":"/Users/erindepew/Desktop/personal-site/node_modules/history/node_modules/warning/browser.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/useBasename.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _PathUtils = require('./PathUtils');

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function useBasename(createHistory) {
  return function () {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var history = createHistory(options);

    var basename = options.basename;

    var checkedBaseHref = false;

    function checkBaseHref() {
      if (checkedBaseHref) {
        return;
      }

      // Automatically use the value of <base href> in HTML
      // documents as basename if it's not explicitly given.
      if (basename == null && _ExecutionEnvironment.canUseDOM) {
        var base = document.getElementsByTagName('base')[0];
        var baseHref = base && base.getAttribute('href');

        if (baseHref != null) {
          basename = baseHref;

          process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'Automatically setting basename using <base href> is deprecated and will ' + 'be removed in the next major release. The semantics of <base href> are ' + 'subtly different from basename. Please pass the basename explicitly in ' + 'the options to createHistory') : undefined;
        }
      }

      checkedBaseHref = true;
    }

    function addBasename(location) {
      checkBaseHref();

      if (basename && location.basename == null) {
        if (location.pathname.indexOf(basename) === 0) {
          location.pathname = location.pathname.substring(basename.length);
          location.basename = basename;

          if (location.pathname === '') location.pathname = '/';
        } else {
          location.basename = '';
        }
      }

      return location;
    }

    function prependBasename(location) {
      checkBaseHref();

      if (!basename) return location;

      if (typeof location === 'string') location = _PathUtils.parsePath(location);

      var pname = location.pathname;
      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
      var pathname = normalizedBasename + normalizedPathname;

      return _extends({}, location, {
        pathname: pathname
      });
    }

    // Override all read methods with basename-aware versions.
    function listenBefore(hook) {
      return history.listenBefore(function (location, callback) {
        _runTransitionHook2['default'](hook, addBasename(location), callback);
      });
    }

    function listen(listener) {
      return history.listen(function (location) {
        listener(addBasename(location));
      });
    }

    // Override all write methods with basename-aware versions.
    function push(location) {
      history.push(prependBasename(location));
    }

    function replace(location) {
      history.replace(prependBasename(location));
    }

    function createPath(location) {
      return history.createPath(prependBasename(location));
    }

    function createHref(location) {
      return history.createHref(prependBasename(location));
    }

    function createLocation(location) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
    }

    // deprecated
    function pushState(state, path) {
      if (typeof path === 'string') path = _PathUtils.parsePath(path);

      push(_extends({ state: state }, path));
    }

    // deprecated
    function replaceState(state, path) {
      if (typeof path === 'string') path = _PathUtils.parsePath(path);

      replace(_extends({ state: state }, path));
    }

    return _extends({}, history, {
      listenBefore: listenBefore,
      listen: listen,
      push: push,
      replace: replace,
      createPath: createPath,
      createHref: createHref,
      createLocation: createLocation,

      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
    });
  };
}

exports['default'] = useBasename;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./ExecutionEnvironment":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/ExecutionEnvironment.js","./PathUtils":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/PathUtils.js","./deprecate":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/deprecate.js","./runTransitionHook":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/runTransitionHook.js","_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js","warning":"/Users/erindepew/Desktop/personal-site/node_modules/history/node_modules/warning/browser.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/useQueries.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _queryString = require('query-string');

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _PathUtils = require('./PathUtils');

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

var SEARCH_BASE_KEY = '$searchBase';

function defaultStringifyQuery(query) {
  return _queryString.stringify(query).replace(/%20/g, '+');
}

var defaultParseQueryString = _queryString.parse;

function isNestedObject(object) {
  for (var p in object) {
    if (Object.prototype.hasOwnProperty.call(object, p) && typeof object[p] === 'object' && !Array.isArray(object[p]) && object[p] !== null) return true;
  }return false;
}

/**
 * Returns a new createHistory function that may be used to create
 * history objects that know how to handle URL queries.
 */
function useQueries(createHistory) {
  return function () {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var history = createHistory(options);

    var stringifyQuery = options.stringifyQuery;
    var parseQueryString = options.parseQueryString;

    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;

    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

    function addQuery(location) {
      if (location.query == null) {
        var search = location.search;

        location.query = parseQueryString(search.substring(1));
        location[SEARCH_BASE_KEY] = { search: search, searchBase: '' };
      }

      // TODO: Instead of all the book-keeping here, this should just strip the
      // stringified query from the search.

      return location;
    }

    function appendQuery(location, query) {
      var _extends2;

      var searchBaseSpec = location[SEARCH_BASE_KEY];
      var queryString = query ? stringifyQuery(query) : '';
      if (!searchBaseSpec && !queryString) {
        return location;
      }

      process.env.NODE_ENV !== 'production' ? _warning2['default'](stringifyQuery !== defaultStringifyQuery || !isNestedObject(query), 'useQueries does not stringify nested query objects by default; ' + 'use a custom stringifyQuery function') : undefined;

      if (typeof location === 'string') location = _PathUtils.parsePath(location);

      var searchBase = undefined;
      if (searchBaseSpec && location.search === searchBaseSpec.search) {
        searchBase = searchBaseSpec.searchBase;
      } else {
        searchBase = location.search || '';
      }

      var search = searchBase;
      if (queryString) {
        search += (search ? '&' : '?') + queryString;
      }

      return _extends({}, location, (_extends2 = {
        search: search
      }, _extends2[SEARCH_BASE_KEY] = { search: search, searchBase: searchBase }, _extends2));
    }

    // Override all read methods with query-aware versions.
    function listenBefore(hook) {
      return history.listenBefore(function (location, callback) {
        _runTransitionHook2['default'](hook, addQuery(location), callback);
      });
    }

    function listen(listener) {
      return history.listen(function (location) {
        listener(addQuery(location));
      });
    }

    // Override all write methods with query-aware versions.
    function push(location) {
      history.push(appendQuery(location, location.query));
    }

    function replace(location) {
      history.replace(appendQuery(location, location.query));
    }

    function createPath(location, query) {
      process.env.NODE_ENV !== 'production' ? _warning2['default'](!query, 'the query argument to createPath is deprecated; use a location descriptor instead') : undefined;

      return history.createPath(appendQuery(location, query || location.query));
    }

    function createHref(location, query) {
      process.env.NODE_ENV !== 'production' ? _warning2['default'](!query, 'the query argument to createHref is deprecated; use a location descriptor instead') : undefined;

      return history.createHref(appendQuery(location, query || location.query));
    }

    function createLocation(location) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var fullLocation = history.createLocation.apply(history, [appendQuery(location, location.query)].concat(args));
      if (location.query) {
        fullLocation.query = location.query;
      }
      return addQuery(fullLocation);
    }

    // deprecated
    function pushState(state, path, query) {
      if (typeof path === 'string') path = _PathUtils.parsePath(path);

      push(_extends({ state: state }, path, { query: query }));
    }

    // deprecated
    function replaceState(state, path, query) {
      if (typeof path === 'string') path = _PathUtils.parsePath(path);

      replace(_extends({ state: state }, path, { query: query }));
    }

    return _extends({}, history, {
      listenBefore: listenBefore,
      listen: listen,
      push: push,
      replace: replace,
      createPath: createPath,
      createHref: createHref,
      createLocation: createLocation,

      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
    });
  };
}

exports['default'] = useQueries;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./PathUtils":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/PathUtils.js","./deprecate":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/deprecate.js","./runTransitionHook":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/runTransitionHook.js","_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js","query-string":"/Users/erindepew/Desktop/personal-site/node_modules/query-string/index.js","warning":"/Users/erindepew/Desktop/personal-site/node_modules/history/node_modules/warning/browser.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/history/node_modules/warning/browser.js":[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/hoist-non-react-statics/index.js":[function(require,module,exports){
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';

var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};

var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
        var keys = Object.getOwnPropertyNames(sourceComponent);

        /* istanbul ignore else */
        if (isGetOwnPropertySymbolsAvailable) {
            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
                try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {

                }
            }
        }
    }

    return targetComponent;
};

},{}],"/Users/erindepew/Desktop/personal-site/node_modules/invariant/browser.js":[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))

},{"_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js":[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

(function () {
  try {
    cachedSetTimeout = setTimeout;
  } catch (e) {
    cachedSetTimeout = function () {
      throw new Error('setTimeout is not defined');
    }
  }
  try {
    cachedClearTimeout = clearTimeout;
  } catch (e) {
    cachedClearTimeout = function () {
      throw new Error('clearTimeout is not defined');
    }
  }
} ())
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = cachedSetTimeout.call(null, cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    cachedClearTimeout.call(null, timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        cachedSetTimeout.call(null, drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],"/Users/erindepew/Desktop/personal-site/node_modules/query-string/index.js":[function(require,module,exports){
'use strict';
var strictUriEncode = require('strict-uri-encode');

exports.extract = function (str) {
	return str.split('?')[1] || '';
};

exports.parse = function (str) {
	if (typeof str !== 'string') {
		return {};
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return {};
	}

	return str.split('&').reduce(function (ret, param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		key = decodeURIComponent(key);

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeURIComponent(val);

		if (!ret.hasOwnProperty(key)) {
			ret[key] = val;
		} else if (Array.isArray(ret[key])) {
			ret[key].push(val);
		} else {
			ret[key] = [ret[key], val];
		}

		return ret;
	}, {});
};

exports.stringify = function (obj) {
	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return key;
		}

		if (Array.isArray(val)) {
			return val.slice().sort().map(function (val2) {
				return strictUriEncode(key) + '=' + strictUriEncode(val2);
			}).join('&');
		}

		return strictUriEncode(key) + '=' + strictUriEncode(val);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

},{"strict-uri-encode":"/Users/erindepew/Desktop/personal-site/node_modules/strict-uri-encode/index.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/AsyncUtils.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;
exports.mapAsync = mapAsync;
function loopAsync(turns, work, callback) {
  var currentTurn = 0,
      isDone = false;
  var sync = false,
      hasNext = false,
      doneArgs = void 0;

  function done() {
    isDone = true;
    if (sync) {
      // Iterate instead of recursing if possible.
      doneArgs = [].concat(Array.prototype.slice.call(arguments));
      return;
    }

    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) {
      return;
    }

    hasNext = true;
    if (sync) {
      // Iterate instead of recursing if possible.
      return;
    }

    sync = true;

    while (!isDone && currentTurn < turns && hasNext) {
      hasNext = false;
      work.call(this, currentTurn++, next, done);
    }

    sync = false;

    if (isDone) {
      // This means the loop finished synchronously.
      callback.apply(this, doneArgs);
      return;
    }

    if (currentTurn >= turns && hasNext) {
      isDone = true;
      callback();
    }
  }

  next();
}

function mapAsync(array, work, callback) {
  var length = array.length;
  var values = [];

  if (length === 0) return callback(null, values);

  var isDone = false,
      doneCount = 0;

  function done(index, error, value) {
    if (isDone) return;

    if (error) {
      isDone = true;
      callback(error);
    } else {
      values[index] = value;

      isDone = ++doneCount === length;

      if (isDone) callback(null, values);
    }
  }

  array.forEach(function (item, index) {
    work(item, index, function (error, value) {
      done(index, error, value);
    });
  });
}
},{}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/History.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _InternalPropTypes = require('./InternalPropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A mixin that adds the "history" instance variable to components.
 */
var History = {

  contextTypes: {
    history: _InternalPropTypes.history
  },

  componentWillMount: function componentWillMount() {
    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'the `History` mixin is deprecated, please access `context.router` with your own `contextTypes`. http://tiny.cc/router-historymixin') : void 0;
    this.history = this.context.history;
  }
};

exports.default = History;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./InternalPropTypes":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/InternalPropTypes.js","./routerWarning":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/routerWarning.js","_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/IndexLink.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An <IndexLink> is used to link to an <IndexRoute>.
 */
var IndexLink = _react2.default.createClass({
  displayName: 'IndexLink',
  render: function render() {
    return _react2.default.createElement(_Link2.default, _extends({}, this.props, { onlyActiveOnIndex: true }));
  }
});

exports.default = IndexLink;
module.exports = exports['default'];
},{"./Link":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/Link.js","react":"react"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/IndexRedirect.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Redirect = require('./Redirect');

var _Redirect2 = _interopRequireDefault(_Redirect);

var _InternalPropTypes = require('./InternalPropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _React$PropTypes = _react2.default.PropTypes;
var string = _React$PropTypes.string;
var object = _React$PropTypes.object;

/**
 * An <IndexRedirect> is used to redirect from an indexRoute.
 */

var IndexRedirect = _react2.default.createClass({
  displayName: 'IndexRedirect',


  statics: {
    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
      /* istanbul ignore else: sanity check */
      if (parentRoute) {
        parentRoute.indexRoute = _Redirect2.default.createRouteFromReactElement(element);
      } else {
        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRedirect> does not make sense at the root of your route config') : void 0;
      }
    }
  },

  propTypes: {
    to: string.isRequired,
    query: object,
    state: object,
    onEnter: _InternalPropTypes.falsy,
    children: _InternalPropTypes.falsy
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
    !false ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
  }
});

exports.default = IndexRedirect;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./InternalPropTypes":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/InternalPropTypes.js","./Redirect":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/Redirect.js","./routerWarning":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/routerWarning.js","_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js","invariant":"/Users/erindepew/Desktop/personal-site/node_modules/invariant/browser.js","react":"react"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/IndexRoute.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _RouteUtils = require('./RouteUtils');

var _InternalPropTypes = require('./InternalPropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var func = _react2.default.PropTypes.func;

/**
 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
 * a JSX route config.
 */

var IndexRoute = _react2.default.createClass({
  displayName: 'IndexRoute',


  statics: {
    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
      /* istanbul ignore else: sanity check */
      if (parentRoute) {
        parentRoute.indexRoute = (0, _RouteUtils.createRouteFromReactElement)(element);
      } else {
        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRoute> does not make sense at the root of your route config') : void 0;
      }
    }
  },

  propTypes: {
    path: _InternalPropTypes.falsy,
    component: _InternalPropTypes.component,
    components: _InternalPropTypes.components,
    getComponent: func,
    getComponents: func
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
    !false ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<IndexRoute> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
  }
});

exports.default = IndexRoute;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./InternalPropTypes":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/InternalPropTypes.js","./RouteUtils":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/RouteUtils.js","./routerWarning":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/routerWarning.js","_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js","invariant":"/Users/erindepew/Desktop/personal-site/node_modules/invariant/browser.js","react":"react"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/InternalPropTypes.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.routes = exports.route = exports.components = exports.component = exports.history = undefined;
exports.falsy = falsy;

var _react = require('react');

var func = _react.PropTypes.func;
var object = _react.PropTypes.object;
var arrayOf = _react.PropTypes.arrayOf;
var oneOfType = _react.PropTypes.oneOfType;
var element = _react.PropTypes.element;
var shape = _react.PropTypes.shape;
var string = _react.PropTypes.string;
function falsy(props, propName, componentName) {
  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
}

var history = exports.history = shape({
  listen: func.isRequired,
  push: func.isRequired,
  replace: func.isRequired,
  go: func.isRequired,
  goBack: func.isRequired,
  goForward: func.isRequired
});

var component = exports.component = oneOfType([func, string]);
var components = exports.components = oneOfType([component, object]);
var route = exports.route = oneOfType([object, element]);
var routes = exports.routes = oneOfType([route, arrayOf(route)]);
},{"react":"react"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/Lifecycle.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var object = _react2.default.PropTypes.object;

/**
 * The Lifecycle mixin adds the routerWillLeave lifecycle method to a
 * component that may be used to cancel a transition or prompt the user
 * for confirmation.
 *
 * On standard transitions, routerWillLeave receives a single argument: the
 * location we're transitioning to. To cancel the transition, return false.
 * To prompt the user for confirmation, return a prompt message (string).
 *
 * During the beforeunload event (assuming you're using the useBeforeUnload
 * history enhancer), routerWillLeave does not receive a location object
 * because it isn't possible for us to know the location we're transitioning
 * to. In this case routerWillLeave must return a prompt message to prevent
 * the user from closing the window/tab.
 */

var Lifecycle = {

  contextTypes: {
    history: object.isRequired,
    // Nested children receive the route as context, either
    // set by the route component using the RouteContext mixin
    // or by some other ancestor.
    route: object
  },

  propTypes: {
    // Route components receive the route object as a prop.
    route: object
  },

  componentDidMount: function componentDidMount() {
    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'the `Lifecycle` mixin is deprecated, please use `context.router.setRouteLeaveHook(route, hook)`. http://tiny.cc/router-lifecyclemixin') : void 0;
    !this.routerWillLeave ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The Lifecycle mixin requires you to define a routerWillLeave method') : (0, _invariant2.default)(false) : void 0;

    var route = this.props.route || this.context.route;

    !route ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The Lifecycle mixin must be used on either a) a <Route component> or ' + 'b) a descendant of a <Route component> that uses the RouteContext mixin') : (0, _invariant2.default)(false) : void 0;

    this._unlistenBeforeLeavingRoute = this.context.history.listenBeforeLeavingRoute(route, this.routerWillLeave);
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this._unlistenBeforeLeavingRoute) this._unlistenBeforeLeavingRoute();
  }
};

exports.default = Lifecycle;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./routerWarning":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/routerWarning.js","_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js","invariant":"/Users/erindepew/Desktop/personal-site/node_modules/invariant/browser.js","react":"react"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/Link.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _PropTypes = require('./PropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _React$PropTypes = _react2.default.PropTypes;
var bool = _React$PropTypes.bool;
var object = _React$PropTypes.object;
var string = _React$PropTypes.string;
var func = _React$PropTypes.func;
var oneOfType = _React$PropTypes.oneOfType;


function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

// TODO: De-duplicate against hasAnyProperties in createTransitionManager.
function isEmptyObject(object) {
  for (var p in object) {
    if (Object.prototype.hasOwnProperty.call(object, p)) return false;
  }return true;
}

function createLocationDescriptor(to, _ref) {
  var query = _ref.query;
  var hash = _ref.hash;
  var state = _ref.state;

  if (query || hash || state) {
    return { pathname: to, query: query, hash: hash, state: state };
  }

  return to;
}

/**
 * A <Link> is used to create an <a> element that links to a route.
 * When that route is active, the link gets the value of its
 * activeClassName prop.
 *
 * For example, assuming you have the following route:
 *
 *   <Route path="/posts/:postID" component={Post} />
 *
 * You could use the following component to link to that route:
 *
 *   <Link to={`/posts/${post.id}`} />
 *
 * Links may pass along location state and/or query string parameters
 * in the state/query props, respectively.
 *
 *   <Link ... query={{ show: true }} state={{ the: 'state' }} />
 */
var Link = _react2.default.createClass({
  displayName: 'Link',


  contextTypes: {
    router: _PropTypes.routerShape
  },

  propTypes: {
    to: oneOfType([string, object]).isRequired,
    query: object,
    hash: string,
    state: object,
    activeStyle: object,
    activeClassName: string,
    onlyActiveOnIndex: bool.isRequired,
    onClick: func,
    target: string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      onlyActiveOnIndex: false,
      style: {}
    };
  },
  handleClick: function handleClick(event) {
    if (this.props.onClick) this.props.onClick(event);

    if (event.defaultPrevented) return;

    !this.context.router ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Link>s rendered outside of a router context cannot navigate.') : (0, _invariant2.default)(false) : void 0;

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

    // If target prop is set (e.g. to "_blank"), let browser handle link.
    /* istanbul ignore if: untestable with Karma */
    if (this.props.target) return;

    event.preventDefault();

    var _props = this.props;
    var to = _props.to;
    var query = _props.query;
    var hash = _props.hash;
    var state = _props.state;

    var location = createLocationDescriptor(to, { query: query, hash: hash, state: state });

    this.context.router.push(location);
  },
  render: function render() {
    var _props2 = this.props;
    var to = _props2.to;
    var query = _props2.query;
    var hash = _props2.hash;
    var state = _props2.state;
    var activeClassName = _props2.activeClassName;
    var activeStyle = _props2.activeStyle;
    var onlyActiveOnIndex = _props2.onlyActiveOnIndex;

    var props = _objectWithoutProperties(_props2, ['to', 'query', 'hash', 'state', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);

    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!(query || hash || state), 'the `query`, `hash`, and `state` props on `<Link>` are deprecated, use `<Link to={{ pathname, query, hash, state }}/>. http://tiny.cc/router-isActivedeprecated') : void 0;

    // Ignore if rendered outside the context of router, simplifies unit testing.
    var router = this.context.router;


    if (router) {
      var location = createLocationDescriptor(to, { query: query, hash: hash, state: state });
      props.href = router.createHref(location);

      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
        if (router.isActive(location, onlyActiveOnIndex)) {
          if (activeClassName) {
            if (props.className) {
              props.className += ' ' + activeClassName;
            } else {
              props.className = activeClassName;
            }
          }

          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
        }
      }
    }

    return _react2.default.createElement('a', _extends({}, props, { onClick: this.handleClick }));
  }
});

exports.default = Link;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./PropTypes":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/PropTypes.js","./routerWarning":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/routerWarning.js","_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js","invariant":"/Users/erindepew/Desktop/personal-site/node_modules/invariant/browser.js","react":"react"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/PatternUtils.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;
exports.compilePattern = compilePattern;
exports.matchPattern = matchPattern;
exports.getParamNames = getParamNames;
exports.getParams = getParams;
exports.formatPattern = formatPattern;

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function _compilePattern(pattern) {
  var regexpSource = '';
  var paramNames = [];
  var tokens = [];

  var match = void 0,
      lastIndex = 0,
      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g;
  while (match = matcher.exec(pattern)) {
    if (match.index !== lastIndex) {
      tokens.push(pattern.slice(lastIndex, match.index));
      regexpSource += escapeRegExp(pattern.slice(lastIndex, match.index));
    }

    if (match[1]) {
      regexpSource += '([^/]+)';
      paramNames.push(match[1]);
    } else if (match[0] === '**') {
      regexpSource += '(.*)';
      paramNames.push('splat');
    } else if (match[0] === '*') {
      regexpSource += '(.*?)';
      paramNames.push('splat');
    } else if (match[0] === '(') {
      regexpSource += '(?:';
    } else if (match[0] === ')') {
      regexpSource += ')?';
    }

    tokens.push(match[0]);

    lastIndex = matcher.lastIndex;
  }

  if (lastIndex !== pattern.length) {
    tokens.push(pattern.slice(lastIndex, pattern.length));
    regexpSource += escapeRegExp(pattern.slice(lastIndex, pattern.length));
  }

  return {
    pattern: pattern,
    regexpSource: regexpSource,
    paramNames: paramNames,
    tokens: tokens
  };
}

var CompiledPatternsCache = {};

function compilePattern(pattern) {
  if (!(pattern in CompiledPatternsCache)) CompiledPatternsCache[pattern] = _compilePattern(pattern);

  return CompiledPatternsCache[pattern];
}

/**
 * Attempts to match a pattern on the given pathname. Patterns may use
 * the following special characters:
 *
 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
 *                  captured string is considered a "param"
 * - ()             Wraps a segment of the URL that is optional
 * - *              Consumes (non-greedy) all characters up to the next
 *                  character in the pattern, or to the end of the URL if
 *                  there is none
 * - **             Consumes (greedy) all characters up to the next character
 *                  in the pattern, or to the end of the URL if there is none
 *
 *  The function calls callback(error, matched) when finished.
 * The return value is an object with the following properties:
 *
 * - remainingPathname
 * - paramNames
 * - paramValues
 */
function matchPattern(pattern, pathname) {
  // Ensure pattern starts with leading slash for consistency with pathname.
  if (pattern.charAt(0) !== '/') {
    pattern = '/' + pattern;
  }

  var _compilePattern2 = compilePattern(pattern);

  var regexpSource = _compilePattern2.regexpSource;
  var paramNames = _compilePattern2.paramNames;
  var tokens = _compilePattern2.tokens;


  if (pattern.charAt(pattern.length - 1) !== '/') {
    regexpSource += '/?'; // Allow optional path separator at end.
  }

  // Special-case patterns like '*' for catch-all routes.
  if (tokens[tokens.length - 1] === '*') {
    regexpSource += '$';
  }

  var match = pathname.match(new RegExp('^' + regexpSource, 'i'));
  if (match == null) {
    return null;
  }

  var matchedPath = match[0];
  var remainingPathname = pathname.substr(matchedPath.length);

  if (remainingPathname) {
    // Require that the match ends at a path separator, if we didn't match
    // the full path, so any remaining pathname is a new path segment.
    if (matchedPath.charAt(matchedPath.length - 1) !== '/') {
      return null;
    }

    // If there is a remaining pathname, treat the path separator as part of
    // the remaining pathname for properly continuing the match.
    remainingPathname = '/' + remainingPathname;
  }

  return {
    remainingPathname: remainingPathname,
    paramNames: paramNames,
    paramValues: match.slice(1).map(function (v) {
      return v && decodeURIComponent(v);
    })
  };
}

function getParamNames(pattern) {
  return compilePattern(pattern).paramNames;
}

function getParams(pattern, pathname) {
  var match = matchPattern(pattern, pathname);
  if (!match) {
    return null;
  }

  var paramNames = match.paramNames;
  var paramValues = match.paramValues;

  var params = {};

  paramNames.forEach(function (paramName, index) {
    params[paramName] = paramValues[index];
  });

  return params;
}

/**
 * Returns a version of the given pattern with params interpolated. Throws
 * if there is a dynamic segment of the pattern for which there is no param.
 */
function formatPattern(pattern, params) {
  params = params || {};

  var _compilePattern3 = compilePattern(pattern);

  var tokens = _compilePattern3.tokens;

  var parenCount = 0,
      pathname = '',
      splatIndex = 0;

  var token = void 0,
      paramName = void 0,
      paramValue = void 0;
  for (var i = 0, len = tokens.length; i < len; ++i) {
    token = tokens[i];

    if (token === '*' || token === '**') {
      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;

      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : (0, _invariant2.default)(false) : void 0;

      if (paramValue != null) pathname += encodeURI(paramValue);
    } else if (token === '(') {
      parenCount += 1;
    } else if (token === ')') {
      parenCount -= 1;
    } else if (token.charAt(0) === ':') {
      paramName = token.substring(1);
      paramValue = params[paramName];

      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : (0, _invariant2.default)(false) : void 0;

      if (paramValue != null) pathname += encodeURIComponent(paramValue);
    } else {
      pathname += token;
    }
  }

  return pathname.replace(/\/+/g, '/');
}
}).call(this,require('_process'))

},{"_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js","invariant":"/Users/erindepew/Desktop/personal-site/node_modules/invariant/browser.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/PropTypes.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;
exports.router = exports.routes = exports.route = exports.components = exports.component = exports.location = exports.history = exports.falsy = exports.locationShape = exports.routerShape = undefined;

var _react = require('react');

var _deprecateObjectProperties = require('./deprecateObjectProperties');

var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

var _InternalPropTypes = require('./InternalPropTypes');

var InternalPropTypes = _interopRequireWildcard(_InternalPropTypes);

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var func = _react.PropTypes.func;
var object = _react.PropTypes.object;
var shape = _react.PropTypes.shape;
var string = _react.PropTypes.string;
var routerShape = exports.routerShape = shape({
  push: func.isRequired,
  replace: func.isRequired,
  go: func.isRequired,
  goBack: func.isRequired,
  goForward: func.isRequired,
  setRouteLeaveHook: func.isRequired,
  isActive: func.isRequired
});

var locationShape = exports.locationShape = shape({
  pathname: string.isRequired,
  search: string.isRequired,
  state: object,
  action: string.isRequired,
  key: string
});

// Deprecated stuff below:

var falsy = exports.falsy = InternalPropTypes.falsy;
var history = exports.history = InternalPropTypes.history;
var location = exports.location = locationShape;
var component = exports.component = InternalPropTypes.component;
var components = exports.components = InternalPropTypes.components;
var route = exports.route = InternalPropTypes.route;
var routes = exports.routes = InternalPropTypes.routes;
var router = exports.router = routerShape;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var deprecatePropType = function deprecatePropType(propType, message) {
      return function () {
        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
        return propType.apply(undefined, arguments);
      };
    };

    var deprecateInternalPropType = function deprecateInternalPropType(propType) {
      return deprecatePropType(propType, 'This prop type is not intended for external use, and was previously exported by mistake. These internal prop types are deprecated for external use, and will be removed in a later version.');
    };

    var deprecateRenamedPropType = function deprecateRenamedPropType(propType, name) {
      return deprecatePropType(propType, 'The `' + name + '` prop type is now exported as `' + name + 'Shape` to avoid name conflicts. This export is deprecated and will be removed in a later version.');
    };

    exports.falsy = falsy = deprecateInternalPropType(falsy);
    exports.history = history = deprecateInternalPropType(history);
    exports.component = component = deprecateInternalPropType(component);
    exports.components = components = deprecateInternalPropType(components);
    exports.route = route = deprecateInternalPropType(route);
    exports.routes = routes = deprecateInternalPropType(routes);

    exports.location = location = deprecateRenamedPropType(location, 'location');
    exports.router = router = deprecateRenamedPropType(router, 'router');
  })();
}

var defaultExport = {
  falsy: falsy,
  history: history,
  location: location,
  component: component,
  components: components,
  route: route,
  // For some reason, routes was never here.
  router: router
};

if (process.env.NODE_ENV !== 'production') {
  defaultExport = (0, _deprecateObjectProperties2.default)(defaultExport, 'The default export from `react-router/lib/PropTypes` is deprecated. Please use the named exports instead.');
}

exports.default = defaultExport;
}).call(this,require('_process'))

},{"./InternalPropTypes":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/InternalPropTypes.js","./deprecateObjectProperties":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/deprecateObjectProperties.js","./routerWarning":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/routerWarning.js","_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js","react":"react"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/Redirect.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _RouteUtils = require('./RouteUtils');

var _PatternUtils = require('./PatternUtils');

var _InternalPropTypes = require('./InternalPropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _React$PropTypes = _react2.default.PropTypes;
var string = _React$PropTypes.string;
var object = _React$PropTypes.object;

/**
 * A <Redirect> is used to declare another URL path a client should
 * be sent to when they request a given URL.
 *
 * Redirects are placed alongside routes in the route configuration
 * and are traversed in the same manner.
 */

var Redirect = _react2.default.createClass({
  displayName: 'Redirect',


  statics: {
    createRouteFromReactElement: function createRouteFromReactElement(element) {
      var route = (0, _RouteUtils.createRouteFromReactElement)(element);

      if (route.from) route.path = route.from;

      route.onEnter = function (nextState, replace) {
        var location = nextState.location;
        var params = nextState.params;


        var pathname = void 0;
        if (route.to.charAt(0) === '/') {
          pathname = (0, _PatternUtils.formatPattern)(route.to, params);
        } else if (!route.to) {
          pathname = location.pathname;
        } else {
          var routeIndex = nextState.routes.indexOf(route);
          var parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
          var pattern = parentPattern.replace(/\/*$/, '/') + route.to;
          pathname = (0, _PatternUtils.formatPattern)(pattern, params);
        }

        replace({
          pathname: pathname,
          query: route.query || location.query,
          state: route.state || location.state
        });
      };

      return route;
    },
    getRoutePattern: function getRoutePattern(routes, routeIndex) {
      var parentPattern = '';

      for (var i = routeIndex; i >= 0; i--) {
        var route = routes[i];
        var pattern = route.path || '';

        parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;

        if (pattern.indexOf('/') === 0) break;
      }

      return '/' + parentPattern;
    }
  },

  propTypes: {
    path: string,
    from: string, // Alias for path
    to: string.isRequired,
    query: object,
    state: object,
    onEnter: _InternalPropTypes.falsy,
    children: _InternalPropTypes.falsy
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
    !false ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Redirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
  }
});

exports.default = Redirect;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./InternalPropTypes":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/InternalPropTypes.js","./PatternUtils":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/PatternUtils.js","./RouteUtils":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/RouteUtils.js","_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js","invariant":"/Users/erindepew/Desktop/personal-site/node_modules/invariant/browser.js","react":"react"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/Route.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _RouteUtils = require('./RouteUtils');

var _InternalPropTypes = require('./InternalPropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _React$PropTypes = _react2.default.PropTypes;
var string = _React$PropTypes.string;
var func = _React$PropTypes.func;

/**
 * A <Route> is used to declare which components are rendered to the
 * page when the URL matches a given pattern.
 *
 * Routes are arranged in a nested tree structure. When a new URL is
 * requested, the tree is searched depth-first to find a route whose
 * path matches the URL.  When one is found, all routes in the tree
 * that lead to it are considered "active" and their components are
 * rendered into the DOM, nested in the same order as in the tree.
 */

var Route = _react2.default.createClass({
  displayName: 'Route',


  statics: {
    createRouteFromReactElement: _RouteUtils.createRouteFromReactElement
  },

  propTypes: {
    path: string,
    component: _InternalPropTypes.component,
    components: _InternalPropTypes.components,
    getComponent: func,
    getComponents: func
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
    !false ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Route> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
  }
});

exports.default = Route;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./InternalPropTypes":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/InternalPropTypes.js","./RouteUtils":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/RouteUtils.js","_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js","invariant":"/Users/erindepew/Desktop/personal-site/node_modules/invariant/browser.js","react":"react"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/RouteContext.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var object = _react2.default.PropTypes.object;

/**
 * The RouteContext mixin provides a convenient way for route
 * components to set the route in context. This is needed for
 * routes that render elements that want to use the Lifecycle
 * mixin to prevent transitions.
 */

var RouteContext = {

  propTypes: {
    route: object.isRequired
  },

  childContextTypes: {
    route: object.isRequired
  },

  getChildContext: function getChildContext() {
    return {
      route: this.props.route
    };
  },
  componentWillMount: function componentWillMount() {
    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'The `RouteContext` mixin is deprecated. You can provide `this.props.route` on context with your own `contextTypes`. http://tiny.cc/router-routecontextmixin') : void 0;
  }
};

exports.default = RouteContext;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./routerWarning":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/routerWarning.js","_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js","react":"react"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/RouteUtils.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.isReactChildren = isReactChildren;
exports.createRouteFromReactElement = createRouteFromReactElement;
exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
exports.createRoutes = createRoutes;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isValidChild(object) {
  return object == null || _react2.default.isValidElement(object);
}

function isReactChildren(object) {
  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
}

function createRoute(defaultProps, props) {
  return _extends({}, defaultProps, props);
}

function createRouteFromReactElement(element) {
  var type = element.type;
  var route = createRoute(type.defaultProps, element.props);

  if (route.children) {
    var childRoutes = createRoutesFromReactChildren(route.children, route);

    if (childRoutes.length) route.childRoutes = childRoutes;

    delete route.children;
  }

  return route;
}

/**
 * Creates and returns a routes object from the given ReactChildren. JSX
 * provides a convenient way to visualize how routes in the hierarchy are
 * nested.
 *
 *   import { Route, createRoutesFromReactChildren } from 'react-router'
 *
 *   const routes = createRoutesFromReactChildren(
 *     <Route component={App}>
 *       <Route path="home" component={Dashboard}/>
 *       <Route path="news" component={NewsFeed}/>
 *     </Route>
 *   )
 *
 * Note: This method is automatically used when you provide <Route> children
 * to a <Router> component.
 */
function createRoutesFromReactChildren(children, parentRoute) {
  var routes = [];

  _react2.default.Children.forEach(children, function (element) {
    if (_react2.default.isValidElement(element)) {
      // Component classes may have a static create* method.
      if (element.type.createRouteFromReactElement) {
        var route = element.type.createRouteFromReactElement(element, parentRoute);

        if (route) routes.push(route);
      } else {
        routes.push(createRouteFromReactElement(element));
      }
    }
  });

  return routes;
}

/**
 * Creates and returns an array of routes from the given object which
 * may be a JSX route, a plain object route, or an array of either.
 */
function createRoutes(routes) {
  if (isReactChildren(routes)) {
    routes = createRoutesFromReactChildren(routes);
  } else if (routes && !Array.isArray(routes)) {
    routes = [routes];
  }

  return routes;
}
},{"react":"react"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/Router.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createHashHistory = require('history/lib/createHashHistory');

var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

var _useQueries = require('history/lib/useQueries');

var _useQueries2 = _interopRequireDefault(_useQueries);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createTransitionManager = require('./createTransitionManager');

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _InternalPropTypes = require('./InternalPropTypes');

var _RouterContext = require('./RouterContext');

var _RouterContext2 = _interopRequireDefault(_RouterContext);

var _RouteUtils = require('./RouteUtils');

var _RouterUtils = require('./RouterUtils');

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function isDeprecatedHistory(history) {
  return !history || !history.__v2_compatible__;
}

/* istanbul ignore next: sanity check */
function isUnsupportedHistory(history) {
  // v3 histories expose getCurrentLocation, but aren't currently supported.
  return history && history.getCurrentLocation;
}

var _React$PropTypes = _react2.default.PropTypes;
var func = _React$PropTypes.func;
var object = _React$PropTypes.object;

/**
 * A <Router> is a high-level API for automatically setting up
 * a router that renders a <RouterContext> with all the props
 * it needs each time the URL changes.
 */

var Router = _react2.default.createClass({
  displayName: 'Router',


  propTypes: {
    history: object,
    children: _InternalPropTypes.routes,
    routes: _InternalPropTypes.routes, // alias for children
    render: func,
    createElement: func,
    onError: func,
    onUpdate: func,

    // Deprecated:
    parseQueryString: func,
    stringifyQuery: func,

    // PRIVATE: For client-side rehydration of server match.
    matchContext: object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      render: function render(props) {
        return _react2.default.createElement(_RouterContext2.default, props);
      }
    };
  },
  getInitialState: function getInitialState() {
    return {
      location: null,
      routes: null,
      params: null,
      components: null
    };
  },
  handleError: function handleError(error) {
    if (this.props.onError) {
      this.props.onError.call(this, error);
    } else {
      // Throw errors by default so we don't silently swallow them!
      throw error; // This error probably occurred in getChildRoutes or getComponents.
    }
  },
  componentWillMount: function componentWillMount() {
    var _this = this;

    var _props = this.props;
    var parseQueryString = _props.parseQueryString;
    var stringifyQuery = _props.stringifyQuery;

    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!(parseQueryString || stringifyQuery), '`parseQueryString` and `stringifyQuery` are deprecated. Please create a custom history. http://tiny.cc/router-customquerystring') : void 0;

    var _createRouterObjects = this.createRouterObjects();

    var history = _createRouterObjects.history;
    var transitionManager = _createRouterObjects.transitionManager;
    var router = _createRouterObjects.router;


    this._unlisten = transitionManager.listen(function (error, state) {
      if (error) {
        _this.handleError(error);
      } else {
        _this.setState(state, _this.props.onUpdate);
      }
    });

    this.history = history;
    this.router = router;
  },
  createRouterObjects: function createRouterObjects() {
    var matchContext = this.props.matchContext;

    if (matchContext) {
      return matchContext;
    }

    var history = this.props.history;
    var _props2 = this.props;
    var routes = _props2.routes;
    var children = _props2.children;


    !!isUnsupportedHistory(history) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You have provided a history object created with history v3.x. ' + 'This version of React Router is not compatible with v3 history ' + 'objects. Please use history v2.x instead.') : (0, _invariant2.default)(false) : void 0;

    if (isDeprecatedHistory(history)) {
      history = this.wrapDeprecatedHistory(history);
    }

    var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes || children));
    var router = (0, _RouterUtils.createRouterObject)(history, transitionManager);
    var routingHistory = (0, _RouterUtils.createRoutingHistory)(history, transitionManager);

    return { history: routingHistory, transitionManager: transitionManager, router: router };
  },
  wrapDeprecatedHistory: function wrapDeprecatedHistory(history) {
    var _props3 = this.props;
    var parseQueryString = _props3.parseQueryString;
    var stringifyQuery = _props3.stringifyQuery;


    var createHistory = void 0;
    if (history) {
      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'It appears you have provided a deprecated history object to `<Router/>`, please use a history provided by ' + 'React Router with `import { browserHistory } from \'react-router\'` or `import { hashHistory } from \'react-router\'`. ' + 'If you are using a custom history please create it with `useRouterHistory`, see http://tiny.cc/router-usinghistory for details.') : void 0;
      createHistory = function createHistory() {
        return history;
      };
    } else {
      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`Router` no longer defaults the history prop to hash history. Please use the `hashHistory` singleton instead. http://tiny.cc/router-defaulthistory') : void 0;
      createHistory = _createHashHistory2.default;
    }

    return (0, _useQueries2.default)(createHistory)({ parseQueryString: parseQueryString, stringifyQuery: stringifyQuery });
  },


  /* istanbul ignore next: sanity check */
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(nextProps.history === this.props.history, 'You cannot change <Router history>; it will be ignored') : void 0;

    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)((nextProps.routes || nextProps.children) === (this.props.routes || this.props.children), 'You cannot change <Router routes>; it will be ignored') : void 0;
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this._unlisten) this._unlisten();
  },
  render: function render() {
    var _state = this.state;
    var location = _state.location;
    var routes = _state.routes;
    var params = _state.params;
    var components = _state.components;
    var _props4 = this.props;
    var createElement = _props4.createElement;
    var render = _props4.render;

    var props = _objectWithoutProperties(_props4, ['createElement', 'render']);

    if (location == null) return null; // Async match

    // Only forward non-Router-specific props to routing context, as those are
    // the only ones that might be custom routing context props.
    Object.keys(Router.propTypes).forEach(function (propType) {
      return delete props[propType];
    });

    return render(_extends({}, props, {
      history: this.history,
      router: this.router,
      location: location,
      routes: routes,
      params: params,
      components: components,
      createElement: createElement
    }));
  }
});

exports.default = Router;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./InternalPropTypes":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/InternalPropTypes.js","./RouteUtils":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/RouteUtils.js","./RouterContext":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/RouterContext.js","./RouterUtils":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/RouterUtils.js","./createTransitionManager":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/createTransitionManager.js","./routerWarning":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/routerWarning.js","_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js","history/lib/createHashHistory":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/createHashHistory.js","history/lib/useQueries":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/useQueries.js","invariant":"/Users/erindepew/Desktop/personal-site/node_modules/invariant/browser.js","react":"react"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/RouterContext.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _deprecateObjectProperties = require('./deprecateObjectProperties');

var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

var _getRouteParams = require('./getRouteParams');

var _getRouteParams2 = _interopRequireDefault(_getRouteParams);

var _RouteUtils = require('./RouteUtils');

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _React$PropTypes = _react2.default.PropTypes;
var array = _React$PropTypes.array;
var func = _React$PropTypes.func;
var object = _React$PropTypes.object;

/**
 * A <RouterContext> renders the component tree for a given router state
 * and sets the history object and the current location in context.
 */

var RouterContext = _react2.default.createClass({
  displayName: 'RouterContext',


  propTypes: {
    history: object,
    router: object.isRequired,
    location: object.isRequired,
    routes: array.isRequired,
    params: object.isRequired,
    components: array.isRequired,
    createElement: func.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      createElement: _react2.default.createElement
    };
  },


  childContextTypes: {
    history: object,
    location: object.isRequired,
    router: object.isRequired
  },

  getChildContext: function getChildContext() {
    var _props = this.props;
    var router = _props.router;
    var history = _props.history;
    var location = _props.location;

    if (!router) {
      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`<RouterContext>` expects a `router` rather than a `history`') : void 0;

      router = _extends({}, history, {
        setRouteLeaveHook: history.listenBeforeLeavingRoute
      });
      delete router.listenBeforeLeavingRoute;
    }

    if (process.env.NODE_ENV !== 'production') {
      location = (0, _deprecateObjectProperties2.default)(location, '`context.location` is deprecated, please use a route component\'s `props.location` instead. http://tiny.cc/router-accessinglocation');
    }

    return { history: history, location: location, router: router };
  },
  createElement: function createElement(component, props) {
    return component == null ? null : this.props.createElement(component, props);
  },
  render: function render() {
    var _this = this;

    var _props2 = this.props;
    var history = _props2.history;
    var location = _props2.location;
    var routes = _props2.routes;
    var params = _props2.params;
    var components = _props2.components;

    var element = null;

    if (components) {
      element = components.reduceRight(function (element, components, index) {
        if (components == null) return element; // Don't create new children; use the grandchildren.

        var route = routes[index];
        var routeParams = (0, _getRouteParams2.default)(route, params);
        var props = {
          history: history,
          location: location,
          params: params,
          route: route,
          routeParams: routeParams,
          routes: routes
        };

        if ((0, _RouteUtils.isReactChildren)(element)) {
          props.children = element;
        } else if (element) {
          for (var prop in element) {
            if (Object.prototype.hasOwnProperty.call(element, prop)) props[prop] = element[prop];
          }
        }

        if ((typeof components === 'undefined' ? 'undefined' : _typeof(components)) === 'object') {
          var elements = {};

          for (var key in components) {
            if (Object.prototype.hasOwnProperty.call(components, key)) {
              // Pass through the key as a prop to createElement to allow
              // custom createElement functions to know which named component
              // they're rendering, for e.g. matching up to fetched data.
              elements[key] = _this.createElement(components[key], _extends({
                key: key }, props));
            }
          }

          return elements;
        }

        return _this.createElement(components, props);
      }, element);
    }

    !(element === null || element === false || _react2.default.isValidElement(element)) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The root route must render a single element') : (0, _invariant2.default)(false) : void 0;

    return element;
  }
});

exports.default = RouterContext;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./RouteUtils":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/RouteUtils.js","./deprecateObjectProperties":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/deprecateObjectProperties.js","./getRouteParams":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/getRouteParams.js","./routerWarning":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/routerWarning.js","_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js","invariant":"/Users/erindepew/Desktop/personal-site/node_modules/invariant/browser.js","react":"react"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/RouterUtils.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.createRouterObject = createRouterObject;
exports.createRoutingHistory = createRoutingHistory;

var _deprecateObjectProperties = require('./deprecateObjectProperties');

var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createRouterObject(history, transitionManager) {
  return _extends({}, history, {
    setRouteLeaveHook: transitionManager.listenBeforeLeavingRoute,
    isActive: transitionManager.isActive
  });
}

// deprecated
function createRoutingHistory(history, transitionManager) {
  history = _extends({}, history, transitionManager);

  if (process.env.NODE_ENV !== 'production') {
    history = (0, _deprecateObjectProperties2.default)(history, '`props.history` and `context.history` are deprecated. Please use `context.router`. http://tiny.cc/router-contextchanges');
  }

  return history;
}
}).call(this,require('_process'))

},{"./deprecateObjectProperties":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/deprecateObjectProperties.js","_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/RoutingContext.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RouterContext = require('./RouterContext');

var _RouterContext2 = _interopRequireDefault(_RouterContext);

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RoutingContext = _react2.default.createClass({
  displayName: 'RoutingContext',
  componentWillMount: function componentWillMount() {
    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`RoutingContext` has been renamed to `RouterContext`. Please use `import { RouterContext } from \'react-router\'`. http://tiny.cc/router-routercontext') : void 0;
  },
  render: function render() {
    return _react2.default.createElement(_RouterContext2.default, this.props);
  }
});

exports.default = RoutingContext;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./RouterContext":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/RouterContext.js","./routerWarning":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/routerWarning.js","_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js","react":"react"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/TransitionUtils.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;
exports.runEnterHooks = runEnterHooks;
exports.runChangeHooks = runChangeHooks;
exports.runLeaveHooks = runLeaveHooks;

var _AsyncUtils = require('./AsyncUtils');

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createTransitionHook(hook, route, asyncArity) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    hook.apply(route, args);

    if (hook.length < asyncArity) {
      var callback = args[args.length - 1];
      // Assume hook executes synchronously and
      // automatically call the callback.
      callback();
    }
  };
}

function getEnterHooks(routes) {
  return routes.reduce(function (hooks, route) {
    if (route.onEnter) hooks.push(createTransitionHook(route.onEnter, route, 3));

    return hooks;
  }, []);
}

function getChangeHooks(routes) {
  return routes.reduce(function (hooks, route) {
    if (route.onChange) hooks.push(createTransitionHook(route.onChange, route, 4));
    return hooks;
  }, []);
}

function runTransitionHooks(length, iter, callback) {
  if (!length) {
    callback();
    return;
  }

  var redirectInfo = void 0;
  function replace(location, deprecatedPathname, deprecatedQuery) {
    if (deprecatedPathname) {
      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`replaceState(state, pathname, query) is deprecated; use `replace(location)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : void 0;
      redirectInfo = {
        pathname: deprecatedPathname,
        query: deprecatedQuery,
        state: location
      };

      return;
    }

    redirectInfo = location;
  }

  (0, _AsyncUtils.loopAsync)(length, function (index, next, done) {
    iter(index, replace, function (error) {
      if (error || redirectInfo) {
        done(error, redirectInfo); // No need to continue.
      } else {
        next();
      }
    });
  }, callback);
}

/**
 * Runs all onEnter hooks in the given array of routes in order
 * with onEnter(nextState, replace, callback) and calls
 * callback(error, redirectInfo) when finished. The first hook
 * to use replace short-circuits the loop.
 *
 * If a hook needs to run asynchronously, it may use the callback
 * function. However, doing so will cause the transition to pause,
 * which could lead to a non-responsive UI if the hook is slow.
 */
function runEnterHooks(routes, nextState, callback) {
  var hooks = getEnterHooks(routes);
  return runTransitionHooks(hooks.length, function (index, replace, next) {
    hooks[index](nextState, replace, next);
  }, callback);
}

/**
 * Runs all onChange hooks in the given array of routes in order
 * with onChange(prevState, nextState, replace, callback) and calls
 * callback(error, redirectInfo) when finished. The first hook
 * to use replace short-circuits the loop.
 *
 * If a hook needs to run asynchronously, it may use the callback
 * function. However, doing so will cause the transition to pause,
 * which could lead to a non-responsive UI if the hook is slow.
 */
function runChangeHooks(routes, state, nextState, callback) {
  var hooks = getChangeHooks(routes);
  return runTransitionHooks(hooks.length, function (index, replace, next) {
    hooks[index](state, nextState, replace, next);
  }, callback);
}

/**
 * Runs all onLeave hooks in the given array of routes in order.
 */
function runLeaveHooks(routes, prevState) {
  for (var i = 0, len = routes.length; i < len; ++i) {
    if (routes[i].onLeave) routes[i].onLeave.call(routes[i], prevState);
  }
}
}).call(this,require('_process'))

},{"./AsyncUtils":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/AsyncUtils.js","./routerWarning":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/routerWarning.js","_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/applyRouterMiddleware.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RouterContext = require('./RouterContext');

var _RouterContext2 = _interopRequireDefault(_RouterContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  var withContext = middlewares.map(function (m) {
    return m.renderRouterContext;
  }).filter(function (f) {
    return f;
  });
  var withComponent = middlewares.map(function (m) {
    return m.renderRouteComponent;
  }).filter(function (f) {
    return f;
  });
  var makeCreateElement = function makeCreateElement() {
    var baseCreateElement = arguments.length <= 0 || arguments[0] === undefined ? _react.createElement : arguments[0];
    return function (Component, props) {
      return withComponent.reduceRight(function (previous, renderRouteComponent) {
        return renderRouteComponent(previous, props);
      }, baseCreateElement(Component, props));
    };
  };

  return function (renderProps) {
    return withContext.reduceRight(function (previous, renderRouterContext) {
      return renderRouterContext(previous, renderProps);
    }, _react2.default.createElement(_RouterContext2.default, _extends({}, renderProps, {
      createElement: makeCreateElement(renderProps.createElement)
    })));
  };
};

module.exports = exports['default'];
},{"./RouterContext":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/RouterContext.js","react":"react"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/browserHistory.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _createRouterHistory = require('./createRouterHistory');

var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createRouterHistory2.default)(_createBrowserHistory2.default);
module.exports = exports['default'];
},{"./createRouterHistory":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/createRouterHistory.js","history/lib/createBrowserHistory":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/createBrowserHistory.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/computeChangedRoutes.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _PatternUtils = require('./PatternUtils');

function routeParamsChanged(route, prevState, nextState) {
  if (!route.path) return false;

  var paramNames = (0, _PatternUtils.getParamNames)(route.path);

  return paramNames.some(function (paramName) {
    return prevState.params[paramName] !== nextState.params[paramName];
  });
}

/**
 * Returns an object of { leaveRoutes, changeRoutes, enterRoutes } determined by
 * the change from prevState to nextState. We leave routes if either
 * 1) they are not in the next state or 2) they are in the next state
 * but their params have changed (i.e. /users/123 => /users/456).
 *
 * leaveRoutes are ordered starting at the leaf route of the tree
 * we're leaving up to the common parent route. enterRoutes are ordered
 * from the top of the tree we're entering down to the leaf route.
 *
 * changeRoutes are any routes that didn't leave or enter during
 * the transition.
 */
function computeChangedRoutes(prevState, nextState) {
  var prevRoutes = prevState && prevState.routes;
  var nextRoutes = nextState.routes;

  var leaveRoutes = void 0,
      changeRoutes = void 0,
      enterRoutes = void 0;
  if (prevRoutes) {
    (function () {
      var parentIsLeaving = false;
      leaveRoutes = prevRoutes.filter(function (route) {
        if (parentIsLeaving) {
          return true;
        } else {
          var isLeaving = nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
          if (isLeaving) parentIsLeaving = true;
          return isLeaving;
        }
      });

      // onLeave hooks start at the leaf route.
      leaveRoutes.reverse();

      enterRoutes = [];
      changeRoutes = [];

      nextRoutes.forEach(function (route) {
        var isNew = prevRoutes.indexOf(route) === -1;
        var paramsChanged = leaveRoutes.indexOf(route) !== -1;

        if (isNew || paramsChanged) enterRoutes.push(route);else changeRoutes.push(route);
      });
    })();
  } else {
    leaveRoutes = [];
    changeRoutes = [];
    enterRoutes = nextRoutes;
  }

  return {
    leaveRoutes: leaveRoutes,
    changeRoutes: changeRoutes,
    enterRoutes: enterRoutes
  };
}

exports.default = computeChangedRoutes;
module.exports = exports['default'];
},{"./PatternUtils":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/PatternUtils.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/createMemoryHistory.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.default = createMemoryHistory;

var _useQueries = require('history/lib/useQueries');

var _useQueries2 = _interopRequireDefault(_useQueries);

var _useBasename = require('history/lib/useBasename');

var _useBasename2 = _interopRequireDefault(_useBasename);

var _createMemoryHistory = require('history/lib/createMemoryHistory');

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createMemoryHistory(options) {
  // signatures and type checking differ between `useRoutes` and
  // `createMemoryHistory`, have to create `memoryHistory` first because
  // `useQueries` doesn't understand the signature
  var memoryHistory = (0, _createMemoryHistory2.default)(options);
  var createHistory = function createHistory() {
    return memoryHistory;
  };
  var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
  history.__v2_compatible__ = true;
  return history;
}
module.exports = exports['default'];
},{"history/lib/createMemoryHistory":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/createMemoryHistory.js","history/lib/useBasename":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/useBasename.js","history/lib/useQueries":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/useQueries.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/createRouterHistory.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

exports.default = function (createHistory) {
  var history = void 0;
  if (canUseDOM) history = (0, _useRouterHistory2.default)(createHistory)();
  return history;
};

var _useRouterHistory = require('./useRouterHistory');

var _useRouterHistory2 = _interopRequireDefault(_useRouterHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

module.exports = exports['default'];
},{"./useRouterHistory":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/useRouterHistory.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/createTransitionManager.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = createTransitionManager;

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _Actions = require('history/lib/Actions');

var _computeChangedRoutes2 = require('./computeChangedRoutes');

var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);

var _TransitionUtils = require('./TransitionUtils');

var _isActive2 = require('./isActive');

var _isActive3 = _interopRequireDefault(_isActive2);

var _getComponents = require('./getComponents');

var _getComponents2 = _interopRequireDefault(_getComponents);

var _matchRoutes = require('./matchRoutes');

var _matchRoutes2 = _interopRequireDefault(_matchRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hasAnyProperties(object) {
  for (var p in object) {
    if (Object.prototype.hasOwnProperty.call(object, p)) return true;
  }return false;
}

function createTransitionManager(history, routes) {
  var state = {};

  // Signature should be (location, indexOnly), but needs to support (path,
  // query, indexOnly)
  function isActive(location) {
    var indexOnlyOrDeprecatedQuery = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
    var deprecatedIndexOnly = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

    var indexOnly = void 0;
    if (indexOnlyOrDeprecatedQuery && indexOnlyOrDeprecatedQuery !== true || deprecatedIndexOnly !== null) {
      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`isActive(pathname, query, indexOnly) is deprecated; use `isActive(location, indexOnly)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : void 0;
      location = { pathname: location, query: indexOnlyOrDeprecatedQuery };
      indexOnly = deprecatedIndexOnly || false;
    } else {
      location = history.createLocation(location);
      indexOnly = indexOnlyOrDeprecatedQuery;
    }

    return (0, _isActive3.default)(location, indexOnly, state.location, state.routes, state.params);
  }

  function createLocationFromRedirectInfo(location) {
    return history.createLocation(location, _Actions.REPLACE);
  }

  var partialNextState = void 0;

  function match(location, callback) {
    if (partialNextState && partialNextState.location === location) {
      // Continue from where we left off.
      finishMatch(partialNextState, callback);
    } else {
      (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
        if (error) {
          callback(error);
        } else if (nextState) {
          finishMatch(_extends({}, nextState, { location: location }), callback);
        } else {
          callback();
        }
      });
    }
  }

  function finishMatch(nextState, callback) {
    var _computeChangedRoutes = (0, _computeChangedRoutes3.default)(state, nextState);

    var leaveRoutes = _computeChangedRoutes.leaveRoutes;
    var changeRoutes = _computeChangedRoutes.changeRoutes;
    var enterRoutes = _computeChangedRoutes.enterRoutes;


    (0, _TransitionUtils.runLeaveHooks)(leaveRoutes, state);

    // Tear down confirmation hooks for left routes
    leaveRoutes.filter(function (route) {
      return enterRoutes.indexOf(route) === -1;
    }).forEach(removeListenBeforeHooksForRoute);

    // change and enter hooks are run in series
    (0, _TransitionUtils.runChangeHooks)(changeRoutes, state, nextState, function (error, redirectInfo) {
      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

      (0, _TransitionUtils.runEnterHooks)(enterRoutes, nextState, finishEnterHooks);
    });

    function finishEnterHooks(error, redirectInfo) {
      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

      // TODO: Fetch components after state is updated.
      (0, _getComponents2.default)(nextState, function (error, components) {
        if (error) {
          callback(error);
        } else {
          // TODO: Make match a pure function and have some other API
          // for "match and update state".
          callback(null, null, state = _extends({}, nextState, { components: components }));
        }
      });
    }

    function handleErrorOrRedirect(error, redirectInfo) {
      if (error) callback(error);else callback(null, createLocationFromRedirectInfo(redirectInfo));
    }
  }

  var RouteGuid = 1;

  function getRouteID(route) {
    var create = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

    return route.__id__ || create && (route.__id__ = RouteGuid++);
  }

  var RouteHooks = Object.create(null);

  function getRouteHooksForRoutes(routes) {
    return routes.reduce(function (hooks, route) {
      hooks.push.apply(hooks, RouteHooks[getRouteID(route)]);
      return hooks;
    }, []);
  }

  function transitionHook(location, callback) {
    (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
      if (nextState == null) {
        // TODO: We didn't actually match anything, but hang
        // onto error/nextState so we don't have to matchRoutes
        // again in the listen callback.
        callback();
        return;
      }

      // Cache some state here so we don't have to
      // matchRoutes() again in the listen callback.
      partialNextState = _extends({}, nextState, { location: location });

      var hooks = getRouteHooksForRoutes((0, _computeChangedRoutes3.default)(state, partialNextState).leaveRoutes);

      var result = void 0;
      for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
        // Passing the location arg here indicates to
        // the user that this is a transition hook.
        result = hooks[i](location);
      }

      callback(result);
    });
  }

  /* istanbul ignore next: untestable with Karma */
  function beforeUnloadHook() {
    // Synchronously check to see if any route hooks want
    // to prevent the current window/tab from closing.
    if (state.routes) {
      var hooks = getRouteHooksForRoutes(state.routes);

      var message = void 0;
      for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
        // Passing no args indicates to the user that this is a
        // beforeunload hook. We don't know the next location.
        message = hooks[i]();
      }

      return message;
    }
  }

  var unlistenBefore = void 0,
      unlistenBeforeUnload = void 0;

  function removeListenBeforeHooksForRoute(route) {
    var routeID = getRouteID(route, false);
    if (!routeID) {
      return;
    }

    delete RouteHooks[routeID];

    if (!hasAnyProperties(RouteHooks)) {
      // teardown transition & beforeunload hooks
      if (unlistenBefore) {
        unlistenBefore();
        unlistenBefore = null;
      }

      if (unlistenBeforeUnload) {
        unlistenBeforeUnload();
        unlistenBeforeUnload = null;
      }
    }
  }

  /**
   * Registers the given hook function to run before leaving the given route.
   *
   * During a normal transition, the hook function receives the next location
   * as its only argument and can return either a prompt message (string) to show the user,
   * to make sure they want to leave the page; or `false`, to prevent the transition.
   * Any other return value will have no effect.
   *
   * During the beforeunload event (in browsers) the hook receives no arguments.
   * In this case it must return a prompt message to prevent the transition.
   *
   * Returns a function that may be used to unbind the listener.
   */
  function listenBeforeLeavingRoute(route, hook) {
    // TODO: Warn if they register for a route that isn't currently
    // active. They're probably doing something wrong, like re-creating
    // route objects on every location change.
    var routeID = getRouteID(route);
    var hooks = RouteHooks[routeID];

    if (!hooks) {
      var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);

      RouteHooks[routeID] = [hook];

      if (thereWereNoRouteHooks) {
        // setup transition & beforeunload hooks
        unlistenBefore = history.listenBefore(transitionHook);

        if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
      }
    } else {
      if (hooks.indexOf(hook) === -1) {
        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'adding multiple leave hooks for the same route is deprecated; manage multiple confirmations in your own code instead') : void 0;

        hooks.push(hook);
      }
    }

    return function () {
      var hooks = RouteHooks[routeID];

      if (hooks) {
        var newHooks = hooks.filter(function (item) {
          return item !== hook;
        });

        if (newHooks.length === 0) {
          removeListenBeforeHooksForRoute(route);
        } else {
          RouteHooks[routeID] = newHooks;
        }
      }
    };
  }

  /**
   * This is the API for stateful environments. As the location
   * changes, we update state and call the listener. We can also
   * gracefully handle errors and redirects.
   */
  function listen(listener) {
    // TODO: Only use a single history listener. Otherwise we'll
    // end up with multiple concurrent calls to match.
    return history.listen(function (location) {
      if (state.location === location) {
        listener(null, state);
      } else {
        match(location, function (error, redirectLocation, nextState) {
          if (error) {
            listener(error);
          } else if (redirectLocation) {
            history.transitionTo(redirectLocation);
          } else if (nextState) {
            listener(null, nextState);
          } else {
            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : void 0;
          }
        });
      }
    });
  }

  return {
    isActive: isActive,
    match: match,
    listenBeforeLeavingRoute: listenBeforeLeavingRoute,
    listen: listen
  };
}

//export default useRoutes
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./TransitionUtils":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/TransitionUtils.js","./computeChangedRoutes":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/computeChangedRoutes.js","./getComponents":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/getComponents.js","./isActive":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/isActive.js","./matchRoutes":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/matchRoutes.js","./routerWarning":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/routerWarning.js","_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js","history/lib/Actions":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/Actions.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/deprecateObjectProperties.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;
exports.canUseMembrane = undefined;

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canUseMembrane = exports.canUseMembrane = false;

// No-op by default.
var deprecateObjectProperties = function deprecateObjectProperties(object) {
  return object;
};

if (process.env.NODE_ENV !== 'production') {
  try {
    if (Object.defineProperty({}, 'x', {
      get: function get() {
        return true;
      }
    }).x) {
      exports.canUseMembrane = canUseMembrane = true;
    }
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

  if (canUseMembrane) {
    deprecateObjectProperties = function deprecateObjectProperties(object, message) {
      // Wrap the deprecated object in a membrane to warn on property access.
      var membrane = {};

      var _loop = function _loop(prop) {
        if (!Object.prototype.hasOwnProperty.call(object, prop)) {
          return 'continue';
        }

        if (typeof object[prop] === 'function') {
          // Can't use fat arrow here because of use of arguments below.
          membrane[prop] = function () {
            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
            return object[prop].apply(object, arguments);
          };
          return 'continue';
        }

        // These properties are non-enumerable to prevent React dev tools from
        // seeing them and causing spurious warnings when accessing them. In
        // principle this could be done with a proxy, but support for the
        // ownKeys trap on proxies is not universal, even among browsers that
        // otherwise support proxies.
        Object.defineProperty(membrane, prop, {
          get: function get() {
            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
            return object[prop];
          }
        });
      };

      for (var prop in object) {
        var _ret = _loop(prop);

        if (_ret === 'continue') continue;
      }

      return membrane;
    };
  }
}

exports.default = deprecateObjectProperties;
}).call(this,require('_process'))

},{"./routerWarning":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/routerWarning.js","_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/getComponents.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _AsyncUtils = require('./AsyncUtils');

var _makeStateWithLocation = require('./makeStateWithLocation');

var _makeStateWithLocation2 = _interopRequireDefault(_makeStateWithLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getComponentsForRoute(nextState, route, callback) {
  if (route.component || route.components) {
    callback(null, route.component || route.components);
    return;
  }

  var getComponent = route.getComponent || route.getComponents;
  if (!getComponent) {
    callback();
    return;
  }

  var location = nextState.location;

  var nextStateWithLocation = (0, _makeStateWithLocation2.default)(nextState, location);

  getComponent.call(route, nextStateWithLocation, callback);
}

/**
 * Asynchronously fetches all components needed for the given router
 * state and calls callback(error, components) when finished.
 *
 * Note: This operation may finish synchronously if no routes have an
 * asynchronous getComponents method.
 */
function getComponents(nextState, callback) {
  (0, _AsyncUtils.mapAsync)(nextState.routes, function (route, index, callback) {
    getComponentsForRoute(nextState, route, callback);
  }, callback);
}

exports.default = getComponents;
module.exports = exports['default'];
},{"./AsyncUtils":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/AsyncUtils.js","./makeStateWithLocation":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/makeStateWithLocation.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/getRouteParams.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _PatternUtils = require('./PatternUtils');

/**
 * Extracts an object of params the given route cares about from
 * the given params object.
 */
function getRouteParams(route, params) {
  var routeParams = {};

  if (!route.path) return routeParams;

  (0, _PatternUtils.getParamNames)(route.path).forEach(function (p) {
    if (Object.prototype.hasOwnProperty.call(params, p)) {
      routeParams[p] = params[p];
    }
  });

  return routeParams;
}

exports.default = getRouteParams;
module.exports = exports['default'];
},{"./PatternUtils":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/PatternUtils.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/hashHistory.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _createHashHistory = require('history/lib/createHashHistory');

var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

var _createRouterHistory = require('./createRouterHistory');

var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createRouterHistory2.default)(_createHashHistory2.default);
module.exports = exports['default'];
},{"./createRouterHistory":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/createRouterHistory.js","history/lib/createHashHistory":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/createHashHistory.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/index.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.createMemoryHistory = exports.hashHistory = exports.browserHistory = exports.applyRouterMiddleware = exports.formatPattern = exports.useRouterHistory = exports.match = exports.routerShape = exports.locationShape = exports.PropTypes = exports.RoutingContext = exports.RouterContext = exports.createRoutes = exports.useRoutes = exports.RouteContext = exports.Lifecycle = exports.History = exports.Route = exports.Redirect = exports.IndexRoute = exports.IndexRedirect = exports.withRouter = exports.IndexLink = exports.Link = exports.Router = undefined;

var _RouteUtils = require('./RouteUtils');

Object.defineProperty(exports, 'createRoutes', {
  enumerable: true,
  get: function get() {
    return _RouteUtils.createRoutes;
  }
});

var _PropTypes2 = require('./PropTypes');

Object.defineProperty(exports, 'locationShape', {
  enumerable: true,
  get: function get() {
    return _PropTypes2.locationShape;
  }
});
Object.defineProperty(exports, 'routerShape', {
  enumerable: true,
  get: function get() {
    return _PropTypes2.routerShape;
  }
});

var _PatternUtils = require('./PatternUtils');

Object.defineProperty(exports, 'formatPattern', {
  enumerable: true,
  get: function get() {
    return _PatternUtils.formatPattern;
  }
});

var _Router2 = require('./Router');

var _Router3 = _interopRequireDefault(_Router2);

var _Link2 = require('./Link');

var _Link3 = _interopRequireDefault(_Link2);

var _IndexLink2 = require('./IndexLink');

var _IndexLink3 = _interopRequireDefault(_IndexLink2);

var _withRouter2 = require('./withRouter');

var _withRouter3 = _interopRequireDefault(_withRouter2);

var _IndexRedirect2 = require('./IndexRedirect');

var _IndexRedirect3 = _interopRequireDefault(_IndexRedirect2);

var _IndexRoute2 = require('./IndexRoute');

var _IndexRoute3 = _interopRequireDefault(_IndexRoute2);

var _Redirect2 = require('./Redirect');

var _Redirect3 = _interopRequireDefault(_Redirect2);

var _Route2 = require('./Route');

var _Route3 = _interopRequireDefault(_Route2);

var _History2 = require('./History');

var _History3 = _interopRequireDefault(_History2);

var _Lifecycle2 = require('./Lifecycle');

var _Lifecycle3 = _interopRequireDefault(_Lifecycle2);

var _RouteContext2 = require('./RouteContext');

var _RouteContext3 = _interopRequireDefault(_RouteContext2);

var _useRoutes2 = require('./useRoutes');

var _useRoutes3 = _interopRequireDefault(_useRoutes2);

var _RouterContext2 = require('./RouterContext');

var _RouterContext3 = _interopRequireDefault(_RouterContext2);

var _RoutingContext2 = require('./RoutingContext');

var _RoutingContext3 = _interopRequireDefault(_RoutingContext2);

var _PropTypes3 = _interopRequireDefault(_PropTypes2);

var _match2 = require('./match');

var _match3 = _interopRequireDefault(_match2);

var _useRouterHistory2 = require('./useRouterHistory');

var _useRouterHistory3 = _interopRequireDefault(_useRouterHistory2);

var _applyRouterMiddleware2 = require('./applyRouterMiddleware');

var _applyRouterMiddleware3 = _interopRequireDefault(_applyRouterMiddleware2);

var _browserHistory2 = require('./browserHistory');

var _browserHistory3 = _interopRequireDefault(_browserHistory2);

var _hashHistory2 = require('./hashHistory');

var _hashHistory3 = _interopRequireDefault(_hashHistory2);

var _createMemoryHistory2 = require('./createMemoryHistory');

var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Router = _Router3.default; /* components */

exports.Link = _Link3.default;
exports.IndexLink = _IndexLink3.default;
exports.withRouter = _withRouter3.default;

/* components (configuration) */

exports.IndexRedirect = _IndexRedirect3.default;
exports.IndexRoute = _IndexRoute3.default;
exports.Redirect = _Redirect3.default;
exports.Route = _Route3.default;

/* mixins */

exports.History = _History3.default;
exports.Lifecycle = _Lifecycle3.default;
exports.RouteContext = _RouteContext3.default;

/* utils */

exports.useRoutes = _useRoutes3.default;
exports.RouterContext = _RouterContext3.default;
exports.RoutingContext = _RoutingContext3.default;
exports.PropTypes = _PropTypes3.default;
exports.match = _match3.default;
exports.useRouterHistory = _useRouterHistory3.default;
exports.applyRouterMiddleware = _applyRouterMiddleware3.default;

/* histories */

exports.browserHistory = _browserHistory3.default;
exports.hashHistory = _hashHistory3.default;
exports.createMemoryHistory = _createMemoryHistory3.default;
},{"./History":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/History.js","./IndexLink":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/IndexLink.js","./IndexRedirect":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/IndexRedirect.js","./IndexRoute":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/IndexRoute.js","./Lifecycle":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/Lifecycle.js","./Link":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/Link.js","./PatternUtils":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/PatternUtils.js","./PropTypes":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/PropTypes.js","./Redirect":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/Redirect.js","./Route":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/Route.js","./RouteContext":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/RouteContext.js","./RouteUtils":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/RouteUtils.js","./Router":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/Router.js","./RouterContext":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/RouterContext.js","./RoutingContext":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/RoutingContext.js","./applyRouterMiddleware":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/applyRouterMiddleware.js","./browserHistory":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/browserHistory.js","./createMemoryHistory":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/createMemoryHistory.js","./hashHistory":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/hashHistory.js","./match":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/match.js","./useRouterHistory":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/useRouterHistory.js","./useRoutes":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/useRoutes.js","./withRouter":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/withRouter.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/isActive.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = isActive;

var _PatternUtils = require('./PatternUtils');

function deepEqual(a, b) {
  if (a == b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return deepEqual(item, b[index]);
    });
  }

  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
    for (var p in a) {
      if (!Object.prototype.hasOwnProperty.call(a, p)) {
        continue;
      }

      if (a[p] === undefined) {
        if (b[p] !== undefined) {
          return false;
        }
      } else if (!Object.prototype.hasOwnProperty.call(b, p)) {
        return false;
      } else if (!deepEqual(a[p], b[p])) {
        return false;
      }
    }

    return true;
  }

  return String(a) === String(b);
}

/**
 * Returns true if the current pathname matches the supplied one, net of
 * leading and trailing slash normalization. This is sufficient for an
 * indexOnly route match.
 */
function pathIsActive(pathname, currentPathname) {
  // Normalize leading slash for consistency. Leading slash on pathname has
  // already been normalized in isActive. See caveat there.
  if (currentPathname.charAt(0) !== '/') {
    currentPathname = '/' + currentPathname;
  }

  // Normalize the end of both path names too. Maybe `/foo/` shouldn't show
  // `/foo` as active, but in this case, we would already have failed the
  // match.
  if (pathname.charAt(pathname.length - 1) !== '/') {
    pathname += '/';
  }
  if (currentPathname.charAt(currentPathname.length - 1) !== '/') {
    currentPathname += '/';
  }

  return currentPathname === pathname;
}

/**
 * Returns true if the given pathname matches the active routes and params.
 */
function routeIsActive(pathname, routes, params) {
  var remainingPathname = pathname,
      paramNames = [],
      paramValues = [];

  // for...of would work here but it's probably slower post-transpilation.
  for (var i = 0, len = routes.length; i < len; ++i) {
    var route = routes[i];
    var pattern = route.path || '';

    if (pattern.charAt(0) === '/') {
      remainingPathname = pathname;
      paramNames = [];
      paramValues = [];
    }

    if (remainingPathname !== null && pattern) {
      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
      if (matched) {
        remainingPathname = matched.remainingPathname;
        paramNames = [].concat(paramNames, matched.paramNames);
        paramValues = [].concat(paramValues, matched.paramValues);
      } else {
        remainingPathname = null;
      }

      if (remainingPathname === '') {
        // We have an exact match on the route. Just check that all the params
        // match.
        // FIXME: This doesn't work on repeated params.
        return paramNames.every(function (paramName, index) {
          return String(paramValues[index]) === String(params[paramName]);
        });
      }
    }
  }

  return false;
}

/**
 * Returns true if all key/value pairs in the given query are
 * currently active.
 */
function queryIsActive(query, activeQuery) {
  if (activeQuery == null) return query == null;

  if (query == null) return true;

  return deepEqual(query, activeQuery);
}

/**
 * Returns true if a <Link> to the given pathname/query combination is
 * currently active.
 */
function isActive(_ref, indexOnly, currentLocation, routes, params) {
  var pathname = _ref.pathname;
  var query = _ref.query;

  if (currentLocation == null) return false;

  // TODO: This is a bit ugly. It keeps around support for treating pathnames
  // without preceding slashes as absolute paths, but possibly also works
  // around the same quirks with basenames as in matchRoutes.
  if (pathname.charAt(0) !== '/') {
    pathname = '/' + pathname;
  }

  if (!pathIsActive(pathname, currentLocation.pathname)) {
    // The path check is necessary and sufficient for indexOnly, but otherwise
    // we still need to check the routes.
    if (indexOnly || !routeIsActive(pathname, routes, params)) {
      return false;
    }
  }

  return queryIsActive(query, currentLocation.query);
}
module.exports = exports['default'];
},{"./PatternUtils":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/PatternUtils.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/makeStateWithLocation.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = makeStateWithLocation;

var _deprecateObjectProperties = require('./deprecateObjectProperties');

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeStateWithLocation(state, location) {
  if (process.env.NODE_ENV !== 'production' && _deprecateObjectProperties.canUseMembrane) {
    var stateWithLocation = _extends({}, state);

    // I don't use deprecateObjectProperties here because I want to keep the
    // same code path between development and production, in that we just
    // assign extra properties to the copy of the state object in both cases.

    var _loop = function _loop(prop) {
      if (!Object.prototype.hasOwnProperty.call(location, prop)) {
        return 'continue';
      }

      Object.defineProperty(stateWithLocation, prop, {
        get: function get() {
          process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'Accessing location properties directly from the first argument to `getComponent`, `getComponents`, `getChildRoutes`, and `getIndexRoute` is deprecated. That argument is now the router state (`nextState` or `partialNextState`) rather than the location. To access the location, use `nextState.location` or `partialNextState.location`.') : void 0;
          return location[prop];
        }
      });
    };

    for (var prop in location) {
      var _ret = _loop(prop);

      if (_ret === 'continue') continue;
    }

    return stateWithLocation;
  }

  return _extends({}, state, location);
}
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./deprecateObjectProperties":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/deprecateObjectProperties.js","./routerWarning":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/routerWarning.js","_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/match.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _createMemoryHistory = require('./createMemoryHistory');

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _createTransitionManager = require('./createTransitionManager');

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _RouteUtils = require('./RouteUtils');

var _RouterUtils = require('./RouterUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * A high-level API to be used for server-side rendering.
 *
 * This function matches a location to a set of routes and calls
 * callback(error, redirectLocation, renderProps) when finished.
 *
 * Note: You probably don't want to use this in a browser unless you're using
 * server-side rendering with async routes.
 */
function match(_ref, callback) {
  var history = _ref.history;
  var routes = _ref.routes;
  var location = _ref.location;

  var options = _objectWithoutProperties(_ref, ['history', 'routes', 'location']);

  !(history || location) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'match needs a history or a location') : (0, _invariant2.default)(false) : void 0;

  history = history ? history : (0, _createMemoryHistory2.default)(options);
  var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes));

  var unlisten = void 0;

  if (location) {
    // Allow match({ location: '/the/path', ... })
    location = history.createLocation(location);
  } else {
    // Pick up the location from the history via synchronous history.listen
    // call if needed.
    unlisten = history.listen(function (historyLocation) {
      location = historyLocation;
    });
  }

  var router = (0, _RouterUtils.createRouterObject)(history, transitionManager);
  history = (0, _RouterUtils.createRoutingHistory)(history, transitionManager);

  transitionManager.match(location, function (error, redirectLocation, nextState) {
    callback(error, redirectLocation, nextState && _extends({}, nextState, {
      history: history,
      router: router,
      matchContext: { history: history, transitionManager: transitionManager, router: router }
    }));

    // Defer removing the listener to here to prevent DOM histories from having
    // to unwind DOM event listeners unnecessarily, in case callback renders a
    // <Router> and attaches another history listener.
    if (unlisten) {
      unlisten();
    }
  });
}

exports.default = match;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./RouteUtils":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/RouteUtils.js","./RouterUtils":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/RouterUtils.js","./createMemoryHistory":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/createMemoryHistory.js","./createTransitionManager":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/createTransitionManager.js","_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js","invariant":"/Users/erindepew/Desktop/personal-site/node_modules/invariant/browser.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/matchRoutes.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = matchRoutes;

var _AsyncUtils = require('./AsyncUtils');

var _makeStateWithLocation = require('./makeStateWithLocation');

var _makeStateWithLocation2 = _interopRequireDefault(_makeStateWithLocation);

var _PatternUtils = require('./PatternUtils');

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _RouteUtils = require('./RouteUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getChildRoutes(route, location, paramNames, paramValues, callback) {
  if (route.childRoutes) {
    return [null, route.childRoutes];
  }
  if (!route.getChildRoutes) {
    return [];
  }

  var sync = true,
      result = void 0;

  var partialNextState = {
    location: location,
    params: createParams(paramNames, paramValues)
  };

  var partialNextStateWithLocation = (0, _makeStateWithLocation2.default)(partialNextState, location);

  route.getChildRoutes(partialNextStateWithLocation, function (error, childRoutes) {
    childRoutes = !error && (0, _RouteUtils.createRoutes)(childRoutes);
    if (sync) {
      result = [error, childRoutes];
      return;
    }

    callback(error, childRoutes);
  });

  sync = false;
  return result; // Might be undefined.
}

function getIndexRoute(route, location, paramNames, paramValues, callback) {
  if (route.indexRoute) {
    callback(null, route.indexRoute);
  } else if (route.getIndexRoute) {
    var partialNextState = {
      location: location,
      params: createParams(paramNames, paramValues)
    };

    var partialNextStateWithLocation = (0, _makeStateWithLocation2.default)(partialNextState, location);

    route.getIndexRoute(partialNextStateWithLocation, function (error, indexRoute) {
      callback(error, !error && (0, _RouteUtils.createRoutes)(indexRoute)[0]);
    });
  } else if (route.childRoutes) {
    (function () {
      var pathless = route.childRoutes.filter(function (childRoute) {
        return !childRoute.path;
      });

      (0, _AsyncUtils.loopAsync)(pathless.length, function (index, next, done) {
        getIndexRoute(pathless[index], location, paramNames, paramValues, function (error, indexRoute) {
          if (error || indexRoute) {
            var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
            done(error, routes);
          } else {
            next();
          }
        });
      }, function (err, routes) {
        callback(null, routes);
      });
    })();
  } else {
    callback();
  }
}

function assignParams(params, paramNames, paramValues) {
  return paramNames.reduce(function (params, paramName, index) {
    var paramValue = paramValues && paramValues[index];

    if (Array.isArray(params[paramName])) {
      params[paramName].push(paramValue);
    } else if (paramName in params) {
      params[paramName] = [params[paramName], paramValue];
    } else {
      params[paramName] = paramValue;
    }

    return params;
  }, params);
}

function createParams(paramNames, paramValues) {
  return assignParams({}, paramNames, paramValues);
}

function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
  var pattern = route.path || '';

  if (pattern.charAt(0) === '/') {
    remainingPathname = location.pathname;
    paramNames = [];
    paramValues = [];
  }

  // Only try to match the path if the route actually has a pattern, and if
  // we're not just searching for potential nested absolute paths.
  if (remainingPathname !== null && pattern) {
    try {
      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
      if (matched) {
        remainingPathname = matched.remainingPathname;
        paramNames = [].concat(paramNames, matched.paramNames);
        paramValues = [].concat(paramValues, matched.paramValues);
      } else {
        remainingPathname = null;
      }
    } catch (error) {
      callback(error);
    }

    // By assumption, pattern is non-empty here, which is the prerequisite for
    // actually terminating a match.
    if (remainingPathname === '') {
      var _ret2 = function () {
        var match = {
          routes: [route],
          params: createParams(paramNames, paramValues)
        };

        getIndexRoute(route, location, paramNames, paramValues, function (error, indexRoute) {
          if (error) {
            callback(error);
          } else {
            if (Array.isArray(indexRoute)) {
              var _match$routes;

              process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(indexRoute.every(function (route) {
                return !route.path;
              }), 'Index routes should not have paths') : void 0;
              (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
            } else if (indexRoute) {
              process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!indexRoute.path, 'Index routes should not have paths') : void 0;
              match.routes.push(indexRoute);
            }

            callback(null, match);
          }
        });

        return {
          v: void 0
        };
      }();

      if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
    }
  }

  if (remainingPathname != null || route.childRoutes) {
    // Either a) this route matched at least some of the path or b)
    // we don't have to load this route's children asynchronously. In
    // either case continue checking for matches in the subtree.
    var onChildRoutes = function onChildRoutes(error, childRoutes) {
      if (error) {
        callback(error);
      } else if (childRoutes) {
        // Check the child routes to see if any of them match.
        matchRoutes(childRoutes, location, function (error, match) {
          if (error) {
            callback(error);
          } else if (match) {
            // A child route matched! Augment the match and pass it up the stack.
            match.routes.unshift(route);
            callback(null, match);
          } else {
            callback();
          }
        }, remainingPathname, paramNames, paramValues);
      } else {
        callback();
      }
    };

    var result = getChildRoutes(route, location, paramNames, paramValues, onChildRoutes);
    if (result) {
      onChildRoutes.apply(undefined, result);
    }
  } else {
    callback();
  }
}

/**
 * Asynchronously matches the given location to a set of routes and calls
 * callback(error, state) when finished. The state object will have the
 * following properties:
 *
 * - routes       An array of routes that matched, in hierarchical order
 * - params       An object of URL parameters
 *
 * Note: This operation may finish synchronously if no routes have an
 * asynchronous getChildRoutes method.
 */
function matchRoutes(routes, location, callback, remainingPathname) {
  var paramNames = arguments.length <= 4 || arguments[4] === undefined ? [] : arguments[4];
  var paramValues = arguments.length <= 5 || arguments[5] === undefined ? [] : arguments[5];

  if (remainingPathname === undefined) {
    // TODO: This is a little bit ugly, but it works around a quirk in history
    // that strips the leading slash from pathnames when using basenames with
    // trailing slashes.
    if (location.pathname.charAt(0) !== '/') {
      location = _extends({}, location, {
        pathname: '/' + location.pathname
      });
    }
    remainingPathname = location.pathname;
  }

  (0, _AsyncUtils.loopAsync)(routes.length, function (index, next, done) {
    matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function (error, match) {
      if (error || match) {
        done(error, match);
      } else {
        next();
      }
    });
  }, callback);
}
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./AsyncUtils":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/AsyncUtils.js","./PatternUtils":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/PatternUtils.js","./RouteUtils":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/RouteUtils.js","./makeStateWithLocation":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/makeStateWithLocation.js","./routerWarning":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/routerWarning.js","_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/routerWarning.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.default = routerWarning;
exports._resetWarned = _resetWarned;

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var warned = {};

function routerWarning(falseToWarn, message) {
  // Only issue deprecation warnings once.
  if (message.indexOf('deprecated') !== -1) {
    if (warned[message]) {
      return;
    }

    warned[message] = true;
  }

  message = '[react-router] ' + message;

  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  _warning2.default.apply(undefined, [falseToWarn, message].concat(args));
}

function _resetWarned() {
  warned = {};
}
},{"warning":"/Users/erindepew/Desktop/personal-site/node_modules/warning/browser.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/useRouterHistory.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.default = useRouterHistory;

var _useQueries = require('history/lib/useQueries');

var _useQueries2 = _interopRequireDefault(_useQueries);

var _useBasename = require('history/lib/useBasename');

var _useBasename2 = _interopRequireDefault(_useBasename);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useRouterHistory(createHistory) {
  return function (options) {
    var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
    history.__v2_compatible__ = true;
    return history;
  };
}
module.exports = exports['default'];
},{"history/lib/useBasename":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/useBasename.js","history/lib/useQueries":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/useQueries.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/useRoutes.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _useQueries = require('history/lib/useQueries');

var _useQueries2 = _interopRequireDefault(_useQueries);

var _createTransitionManager = require('./createTransitionManager');

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Returns a new createHistory function that may be used to create
 * history objects that know about routing.
 *
 * Enhances history objects with the following methods:
 *
 * - listen((error, nextState) => {})
 * - listenBeforeLeavingRoute(route, (nextLocation) => {})
 * - match(location, (error, redirectLocation, nextState) => {})
 * - isActive(pathname, query, indexOnly=false)
 */
function useRoutes(createHistory) {
  process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`useRoutes` is deprecated. Please use `createTransitionManager` instead.') : void 0;

  return function () {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var routes = _ref.routes;

    var options = _objectWithoutProperties(_ref, ['routes']);

    var history = (0, _useQueries2.default)(createHistory)(options);
    var transitionManager = (0, _createTransitionManager2.default)(history, routes);
    return _extends({}, history, transitionManager);
  };
}

exports.default = useRoutes;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./createTransitionManager":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/createTransitionManager.js","./routerWarning":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/routerWarning.js","_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js","history/lib/useQueries":"/Users/erindepew/Desktop/personal-site/node_modules/history/lib/useQueries.js"}],"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/withRouter.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = withRouter;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoistNonReactStatics = require('hoist-non-react-statics');

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _PropTypes = require('./PropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function withRouter(WrappedComponent) {
  var WithRouter = _react2.default.createClass({
    displayName: 'WithRouter',

    contextTypes: { router: _PropTypes.routerShape },
    render: function render() {
      return _react2.default.createElement(WrappedComponent, _extends({}, this.props, { router: this.context.router }));
    }
  });

  WithRouter.displayName = 'withRouter(' + getDisplayName(WrappedComponent) + ')';
  WithRouter.WrappedComponent = WrappedComponent;

  return (0, _hoistNonReactStatics2.default)(WithRouter, WrappedComponent);
}
module.exports = exports['default'];
},{"./PropTypes":"/Users/erindepew/Desktop/personal-site/node_modules/react-router/lib/PropTypes.js","hoist-non-react-statics":"/Users/erindepew/Desktop/personal-site/node_modules/hoist-non-react-statics/index.js","react":"react"}],"/Users/erindepew/Desktop/personal-site/node_modules/strict-uri-encode/index.js":[function(require,module,exports){
'use strict';
module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};

},{}],"/Users/erindepew/Desktop/personal-site/node_modules/warning/browser.js":[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"_process":"/Users/erindepew/Desktop/personal-site/node_modules/process/browser.js"}],"/Users/erindepew/Desktop/personal-site/specs/App-spec.js":[function(require,module,exports){
var App = require('./../app/App.js');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe("App", function() {

  it("should render text: Hello world!", function() {
    var app = TestUtils.renderIntoDocument(React.createElement(App));
    expect(React.findDOMNode(app).textContent).toEqual('Hello world!');
  });

});


},{"./../app/App.js":"/Users/erindepew/Desktop/personal-site/app/App.js","react/addons":"react/addons"}]},{},["/Users/erindepew/Desktop/personal-site/specs/App-spec.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvQWJvdXQuanN4IiwiYXBwL0FwcC5qcyIsImFwcC9CdXR0b24uanN4IiwiYXBwL0NvbnRhY3QuanN4IiwiYXBwL0ZpbHRlci5qc3giLCJhcHAvSG9tZS5qc3giLCJhcHAvSW5wdXRGaWVsZC5qc3giLCJhcHAvTGF5b3V0LmpzeCIsImFwcC9NZXNzYWdlLmpzeCIsImFwcC9OYXZpZ2F0aW9uLmpzeCIsImFwcC9Qb3J0Zm9saW9QYWdlLmpzeCIsImFwcC9SZXN1bWUuanN4IiwiYXBwL1NlY3Rpb24uanN4IiwiYXBwL1RleHRBcmVhLmpzeCIsImFwcC9UaHVtYm5haWwuanN4IiwiYXBwL1dvcmsuanN4Iiwibm9kZV9tb2R1bGVzL2RlZXAtZXF1YWwvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZGVlcC1lcXVhbC9saWIvaXNfYXJndW1lbnRzLmpzIiwibm9kZV9tb2R1bGVzL2RlZXAtZXF1YWwvbGliL2tleXMuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvQWN0aW9ucy5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9Bc3luY1V0aWxzLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL0RPTVN0YXRlU3RvcmFnZS5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9ET01VdGlscy5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9FeGVjdXRpb25FbnZpcm9ubWVudC5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9QYXRoVXRpbHMuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvY3JlYXRlQnJvd3Nlckhpc3RvcnkuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvY3JlYXRlRE9NSGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9jcmVhdGVIYXNoSGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9jcmVhdGVIaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL2NyZWF0ZUxvY2F0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL2NyZWF0ZU1lbW9yeUhpc3RvcnkuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvZGVwcmVjYXRlLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL3J1blRyYW5zaXRpb25Ib29rLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL3VzZUJhc2VuYW1lLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL3VzZVF1ZXJpZXMuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9ub2RlX21vZHVsZXMvd2FybmluZy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2ludmFyaWFudC9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9xdWVyeS1zdHJpbmcvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9Bc3luY1V0aWxzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvSGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL0luZGV4TGluay5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL0luZGV4UmVkaXJlY3QuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9JbmRleFJvdXRlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvSW50ZXJuYWxQcm9wVHlwZXMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9MaWZlY3ljbGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9MaW5rLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvUGF0dGVyblV0aWxzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvUHJvcFR5cGVzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvUmVkaXJlY3QuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9Sb3V0ZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL1JvdXRlQ29udGV4dC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL1JvdXRlVXRpbHMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9Sb3V0ZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9Sb3V0ZXJDb250ZXh0LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvUm91dGVyVXRpbHMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9Sb3V0aW5nQ29udGV4dC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL1RyYW5zaXRpb25VdGlscy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2FwcGx5Um91dGVyTWlkZGxld2FyZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2Jyb3dzZXJIaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvY29tcHV0ZUNoYW5nZWRSb3V0ZXMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9jcmVhdGVNZW1vcnlIaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvY3JlYXRlUm91dGVySGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvZGVwcmVjYXRlT2JqZWN0UHJvcGVydGllcy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2dldENvbXBvbmVudHMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9nZXRSb3V0ZVBhcmFtcy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2hhc2hIaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9pc0FjdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL21ha2VTdGF0ZVdpdGhMb2NhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL21hdGNoLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvbWF0Y2hSb3V0ZXMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9yb3V0ZXJXYXJuaW5nLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvdXNlUm91dGVySGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL3VzZVJvdXRlcy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL3dpdGhSb3V0ZXIuanMiLCJub2RlX21vZHVsZXMvc3RyaWN0LXVyaS1lbmNvZGUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvd2FybmluZy9icm93c2VyLmpzIiwic3BlY3MvQXBwLXNwZWMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNuTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNyUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQy9SQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3pKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzdKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQy9LQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDdkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ25OQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3BHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDNUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDL05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUMzSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDekhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDbFRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzFQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgTGluayA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLkxpbms7XG52YXIgQnV0dG9uID0gcmVxdWlyZSgnLi9CdXR0b24uanN4Jyk7XG5cbnZhciBBYm91dCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJBYm91dFwiLFxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImFib3V0LS1NQUlOXCJ9LCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7Y2xhc3NOYW1lOiBcImFib3V0LS1wcm9maWxlLWltYWdlXCIsIHNyYzogXCJpbWFnZXMvcHJvZmlsZS1waWMucG5nXCJ9KSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJhYm91dC0tdGV4dC13cmFwcGVyXCJ9LCBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7Y2xhc3NOYW1lOiBcImFib3V0LS10ZXh0XCJ9LCBcIkkgYW0gYSBmcm9udC1lbmQgZGV2ZWxvcGVyIGFuZCB3ZWIgZGVzaWduZXIgY3VycmVudGx5IGxpdmluZyBpbiBCcm9va2x5biBhbmRcIiArICcgJyArXG4gICAgICAgICAgICBcIndvcmtpbmcgaW4gTWFuaGF0dGFuLiBXaGV0aGVyIHlvdSBjb25zaWRlciBtZSBhIGRlc2lnbmVyIHdpdGggcHJvZ3JhbW1pbmcgc2tpbGxzLFwiICsgJyAnICtcbiAgICAgICAgICAgIFwib3IgYSBwcm9ncmFtbWVyIHdpdGggYSBrbmFjayBmb3IgYmVhdXRpZnVsIGRlc2lnbiwgbXkgZGl2ZXJzZSBza2lsbCBzZXQgaXMgd2hhdCBhbGxvd3NcIiArICcgJyArXG4gICAgICAgICAgICBcIm1lIHRvIGhvbGlzdGljYWxseSBzb2x2ZSBwcm9ibGVtcy4gSSBiZWxpZXZlIHRoYXQgb25lIG9mIGxpZmUncyBncmVhdGVzdCBwbGVhc3VyZXMgaXMgY3JlYXRpb24sIG5vIG1hdHRlclwiICsgJyAnICtcbiAgICAgICAgICAgIFwieW91ciBtZWRpdW0gb2YgY2hvaWNlLlwiKSwgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiL2NvbnRhY3RcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7bGFiZWw6IFwiQ09OVEFDVFwiLCBhc3BlY3Q6IFwiTUFJTlwiLCBzZWxlY3RlZDogZmFsc2V9KSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFib3V0OyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgSG9tZSA9IHJlcXVpcmUoJy4vSG9tZS5qc3gnKTtcbnZhciBSZXN1bWUgPSByZXF1aXJlKCcuL1Jlc3VtZS5qc3gnKTtcbnZhciBXb3JrID0gcmVxdWlyZSgnLi9Xb3JrLmpzeCcpO1xudmFyIFBvcnRmb2xpb1BhZ2UgPSByZXF1aXJlKCcuL1BvcnRmb2xpb1BhZ2UuanN4Jyk7XG52YXIgTWVzc2FnZSA9IHJlcXVpcmUoJy4vTWVzc2FnZS5qc3gnKTtcbnZhciBDb250YWN0ID0gcmVxdWlyZSgnLi9Db250YWN0LmpzeCcpO1xudmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLlJvdXRlcjtcbnZhciBSb3V0ZSA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLlJvdXRlO1xudmFyIEluZGV4Um91dGUgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKS5JbmRleFJvdXRlO1xudmFyIGhhc2hIaXN0b3J5ID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJykuaGFzaEhpc3Rvcnk7XG5cblxudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJBcHBcIixcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge25hdlN0YXRlOiBmYWxzZX07XG4gIH0sXG4gIG5hdkNsaWNrOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtuYXZTdGF0ZTogIXRoaXMuc3RhdGUubmF2U3RhdGV9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbW9iaWxlTmF2Q2xhc3MgPSB0aGlzLnN0YXRlLm5hdlN0YXRlID8gJ25hdi0tbW9iaWxlLWljb24gb3BlbicgOiAnbmF2LS1tb2JpbGUtaWNvbiBjbG9zZWQnO1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBtb2JpbGVOYXZDbGFzcywgb25DbGljazogdGhpcy5uYXZDbGlja30sIFwiIFwiKSwgXG4gICAgICAgIFJlYWN0LmNsb25lRWxlbWVudCh0aGlzLnByb3BzLmNoaWxkcmVuLCB7IG5hdlN0YXRlOiB0aGlzLnN0YXRlLm5hdlN0YXRlIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cblJlYWN0LnJlbmRlcigoXG4gIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCB7aGlzdG9yeTogaGFzaEhpc3Rvcnl9LCBcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCIvXCIsIGNvbXBvbmVudDogQXBwfSwgXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEluZGV4Um91dGUsIHtjb21wb25lbnQ6IEhvbWV9KSwgXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCIvY29udGFjdFwiLCBjb21wb25lbnQ6IENvbnRhY3R9KSwgXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCIvd29ya1wiLCBjb21wb25lbnQ6IFdvcmt9KSwgXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCIvd29yay86cHJvamVjdE5hbWVcIiwgY29tcG9uZW50OiBQb3J0Zm9saW9QYWdlfSksIFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwiL3Jlc3VtZVwiLCBjb21wb25lbnQ6IFJlc3VtZX0pLCBcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtwYXRoOiBcIi90aGFua3MvOm1lc3NhZ2VUeXBlXCIsIGNvbXBvbmVudDogTWVzc2FnZX0pLCBcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtwYXRoOiBcIipcIiwgY29tcG9uZW50OiBNZXNzYWdlfSlcbiAgICApXG4gIClcbiksIGRvY3VtZW50LmJvZHkpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gQXBwO1xuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIEJ1dHRvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJCdXR0b25cIixcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge29uQ2xpY2s6IHRoaXMucHJvcHMuaGFuZGxlQ2xpY2sgPyB0aGlzLnByb3BzLmhhbmRsZUNsaWNrLmJpbmQobnVsbCwgdGhpcy5wcm9wcy5sYWJlbCkgOiBudWxsLCBjbGFzc05hbWU6IGBidXR0b24tLSR7dGhpcy5wcm9wcy5hc3BlY3R9JHt0aGlzLnByb3BzLnNlbGVjdGVkID8gJy1TRUxFQ1RFRCcgOiAnJ31gfSwgdGhpcy5wcm9wcy5sYWJlbClcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCdXR0b247IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBJbnB1dEZpZWxkID0gcmVxdWlyZSgnLi9JbnB1dEZpZWxkLmpzeCcpO1xudmFyIFRleHRBcmVhID0gcmVxdWlyZSgnLi9UZXh0QXJlYS5qc3gnKTtcbnZhciBMYXlvdXQgPSByZXF1aXJlICgnLi9MYXlvdXQuanN4Jyk7XG52YXIgQnV0dG9uID0gcmVxdWlyZSAoJy4vQnV0dG9uLmpzeCcpO1xuXG52YXIgY29udGFjdCA9IFt7dGV4dDogJ0BlcmluZGVwZXcnLCBsaW5rOiAndHdpdHRlci5jb20vZXJpbmRlcGV3J30sXG4ge3RleHQ6ICdnaXRodWIuY29tL2VyaW5kZXBldycsIGxpbms6ICdnaXRodWIuY29tL2VyaW5kZXBldyd9LCB7dGV4dDogJ2xpbmtlZGluLmNvbS9lcmluZGVwZXcnLCBsaW5rOiAnbGlua2VkaW4uY29tL2VyaW5kZXBldyd9XTtcblxudmFyIENvbnRhY3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiQ29udGFjdFwiLFxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExheW91dCwge25hdlN0YXRlOiB0aGlzLnByb3BzLm5hdlN0YXRlLCBhc3BlY3Q6IFwiQUxURVJOQVRFXCIsIGluY2x1ZGVOYXY6IHRydWV9LCBcbiAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJsYXlvdXQtLXByaW1hcnktc2VjdGlvblwifSwgXG4gICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHthY3Rpb246IFwiaHR0cHM6Ly9mb3Jtc3ByZWUuaW8vZXJpbmxkZXBld0BnbWFpbC5jb21cIiwgbWV0aG9kOiBcIlBPU1RcIn0sIFxuICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjb250YWN0LWZvcm0tLU1BSU5cIn0sIFxuICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIHtjbGFzc05hbWU6IFwiY29udGFjdC1mb3JtLS1oZWFkZXJcIn0sIFwiV2hhdCdzIE9uIFlvdXIgTWluZD9cIiksIFxuICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dEZpZWxkLCB7bGFiZWw6IFwiTmFtZVwiLCB0eXBlOiBcInRleHRcIiwgbmFtZTogXCJuYW1lXCIsIGZvY3VzOiB0cnVlLCBtYXg6IFwiMTAwXCJ9KSwgXG4gICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0RmllbGQsIHtsYWJlbDogXCJFbWFpbFwiLCB0eXBlOiBcImVtYWlsXCIsIG5hbWU6IFwiX3JlcGx5dG9cIiwgZm9jdXM6IGZhbHNlLCBtYXg6IFwiMTAwXCJ9KSwgXG4gICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHRBcmVhLCB7bGFiZWw6IFwiTWVzc2FnZVwiLCB0eXBlOiBcInRleHRcIiwgbmFtZTogXCJtZXNzYWdlXCIsIGZvY3VzOiBmYWxzZSwgbWF4OiBcIjIwMDBcIn0pLCBcbiAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7dHlwZTogXCJoaWRkZW5cIiwgbmFtZTogXCJfbmV4dFwiLCB2YWx1ZTogXCJodHRwOi8vbG9jYWxob3N0Ojg4ODkvIy90aGFua3NcIn0pLCBcbiAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7bGFiZWw6IFwiU2VuZCBNZXNzYWdlXCIsIGFzcGVjdDogXCJNQUlOXCIsIHNlbGVjdGVkOiBmYWxzZSwgdHlwZTogXCJzdWJtaXRcIiwgdmFsdWU6IFwiU2VuZFwifSlcbiAgICAgICAgICAgICApXG4gICAgICAgICAgIClcbiAgICAgICApLCBcbiAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwibGF5b3V0LS1zZWNvbmRhcnktc2VjdGlvblwifSwgXG4gICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwge2NsYXNzTmFtZTogXCJjb250YWN0LWZvcm0tLWhlYWRlclwifSwgXCJTdGF5IGluIFRvdWNoXCIpLCBcbiAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcImNvbnRhY3QtLWxpc3RcIn0sIFxuICAgICAgICAgIGNvbnRhY3QubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgIHJldHVybiBpdGVtLmxpbmsgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2NsYXNzTmFtZTogXCJjb250YWN0LS1saXN0LWl0ZW1cIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtjbGFzc05hbWU6IFwiY29udGFjdC0tbGlzdC1saW5rXCIsIFwiZGF0YS1ob3ZlclwiOiBpdGVtLnRleHQsIGhyZWY6IGl0ZW0ubGlua30sIGl0ZW0udGV4dCkpOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2NsYXNzTmFtZTogXCJjb250YWN0LS1saXN0LWl0ZW1cIn0sIGl0ZW0udGV4dCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgIClcbiAgICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb250YWN0OyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQnV0dG9uID0gcmVxdWlyZSgnLi9CdXR0b24uanN4Jyk7XG5cbnZhciBGaWx0ZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiRmlsdGVyXCIsXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHZhciBjbGlja0Z1bmN0aW9uID0gdGhpcy5wcm9wcy5oYW5kbGVDbGljaztcbiAgICB2YXIgc2VsZWN0ZWQgPSB0aGlzLnByb3BzLnNlbGVjdGVkO1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IGBmaWx0ZXItLU1BSU4ke3NlbGVjdGVkID8gYC1TRUxFQ1RFRGAgOiBgYH1gfSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwiZmlsdGVyLS1sYWJlbFwifSwgdGhpcy5wcm9wcy5sYWJlbCwgXCI6XCIpLCBcbiAgICAgICAgdGhpcy5wcm9wcy5idXR0b25zLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwge2xhYmVsOiBpdGVtLCBhc3BlY3Q6IFwiQUxURVJOQVRFXCIsIHJlZjogaXRlbSwgc2VsZWN0ZWQ6IHNlbGVjdGVkID09IGl0ZW0sIGhhbmRsZUNsaWNrOiBzZWxlY3RlZCAhPT0gaXRlbSA/IGNsaWNrRnVuY3Rpb24gOiBudWxsfSk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsdGVyOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQWJvdXQgPSByZXF1aXJlKCcuL0Fib3V0LmpzeCcpO1xudmFyIExheW91dCA9IHJlcXVpcmUgKCcuL0xheW91dC5qc3gnKTtcblxudmFyIEhvbWUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiSG9tZVwiLFxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExheW91dCwge25hdlN0YXRlOiB0aGlzLnByb3BzLm5hdlN0YXRlLCBhc3BlY3Q6IFwiTUFJTlwiLCBpbmNsdWRlTmF2OiB0cnVlfSwgXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiaGVhZGVyLS1NQUlOXCJ9LCBcIiBJIGFtIGEgZGV2ZWxvcGVyICYgZGVzaWduZXIuXCIpLCBcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQWJvdXQsIG51bGwpXG4gICAgIClcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBIb21lOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBJbnB1dEZpZWxkID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIklucHV0RmllbGRcIixcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge2FjdGl2ZTogdGhpcy5wcm9wcy5mb2N1c307XG4gIH0sXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5mb2N1cykge1xuICAgICAgdGhpcy5yZWZzLmlucHV0RmllbGQuZ2V0RE9NTm9kZSgpLmZvY3VzKCk7XG4gICAgfVxuICB9LFxuICBvbkNsaWNrOiBmdW5jdGlvbigpIHtcbiAgICAgdGhpcy5vbkZvY3VzKCk7XG4gIH0sXG4gIG9uRm9jdXM6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZTogdHJ1ZX0pXG4gIH0sXG4gIG9uQmx1cjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlOiBmYWxzZX0pXG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IGBpbnB1dC1maWVsZC0tJHt0aGlzLnN0YXRlLmFjdGl2ZSA/IGBBQ1RJVkVgIDogYE1BSU5gfWAsIG9uQ2xpY2s6IHRoaXMub25DbGlja30sIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7Y2xhc3NOYW1lOiBcImlucHV0LWZpZWxkLS1sYWJlbFwifSwgdGhpcy5wcm9wcy5sYWJlbCksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge3R5cGU6IHRoaXMucHJvcHMudHlwZSwgbWF4TGVuZ3RoOiB0aGlzLnByb3BzLm1heCwgcmVmOiBcImlucHV0RmllbGRcIiwgbmFtZTogdGhpcy5wcm9wcy5uYW1lLCBvbkJsdXI6ICgpID0+IHRoaXMub25CbHVyKCksIG9uRm9jdXM6ICgpID0+IHRoaXMub25Gb2N1cygpLCBjbGFzc05hbWU6IFwiaW5wdXQtZmllbGQtLWlucHV0LWZpZWxkXCJ9KVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0RmllbGQ7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBOYXZpZ2F0aW9uID0gcmVxdWlyZSgnLi9OYXZpZ2F0aW9uLmpzeCcpO1xuXG52YXIgTGF5b3V0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkxheW91dFwiLFxuIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gKFxuXHQgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBgbGF5b3V0LS0ke3RoaXMucHJvcHMuYXNwZWN0fWB9LCBcblx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IGBsYXlvdXQtLXdyYXBwZXIgJHt0aGlzLnByb3BzLm5hdlN0YXRlID8gJ29wZW4nIDogJ2Nsb3NlZCd9YH0sIFxuXHRcdCB0aGlzLnByb3BzLmNoaWxkcmVuXG5cdFx0ICksIFxuXHRcdHRoaXMucHJvcHMuaW5jbHVkZU5hdiA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2aWdhdGlvbiwge25hdlN0YXRlOiB0aGlzLnByb3BzLm5hdlN0YXRlfSkgOiBudWxsXG5cdFx0KVxuXHQpO1xuIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExheW91dDsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEJ1dHRvbj0gcmVxdWlyZSgnLi9CdXR0b24uanN4Jyk7XG52YXIgTGF5b3V0ID0gcmVxdWlyZSgnLi9MYXlvdXQuanN4Jyk7XG52YXIgTGluayA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLkxpbms7XG5cbnZhciBNZXNzYWdlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIk1lc3NhZ2VcIixcbiByZW5kZXI6IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgdHlwZSA9IHRoaXMucHJvcHMucm91dGVQYXJhbXMubWVzc2FnZVR5cGU7XG5cdC8vIGlmIHR5cGUgPT0gbWVzc2FnZVxuXHRkZWJ1Z2dlcjtcblx0cmV0dXJuIChcblx0IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGF5b3V0LCB7bmF2U3RhdGU6IHRoaXMucHJvcHMubmF2U3RhdGUsIGFzcGVjdDogXCJNQUlOXCIsIGluY2x1ZGVOYXY6IGZhbHNlfSwgXG5cdFx0IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJsYXlvdXQtLXByaW1hcnktc2VjdGlvblwifSwgXG5cdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwibWVzc2FnZS0tTUFJTlwifSwgXG5cdFx0XHQgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7Y2xhc3NOYW1lOiBcIm1lc3NhZ2UtLWltYWdlXCIsIHNyYzogXCJpbWFnZXMvRXJyb3I0MDQuZ2lmXCJ9KSwgXG5cdFx0XHQgUmVhY3QuY3JlYXRlRWxlbWVudChcImgzXCIsIHtjbGFzc05hbWU6IFwibWVzc2FnZS0taGVhZGVyXCJ9LCBcblx0XHRcdFx0IFwiT29wcyEgVGhhdCBwYWdlIGRvZXNuJ3QgZXhpc3QuXCIpLCBcblx0XHRcdCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7Y2xhc3NOYW1lOiBcIm1lc3NhZ2UtLXRleHRcIn0sIFwiTGV0J3MgdHJ5IHRoaXMgYWdhaW4gc2hhbGwgd2U/XCIpLCBcblx0XHRcdCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCIvXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwge2xhYmVsOiBcIkdvIEhvbWVcIiwgYXNwZWN0OiBcIk1BSU5cIiwgc2VsZWN0ZWQ6IGZhbHNlfSkpXG5cdFx0XHQpXG5cdFx0XHQpXG5cdFx0KVxuXHQpO1xuIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1lc3NhZ2U7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBMaW5rID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJykuTGluaztcblxudmFyIE5hdmlnYXRpb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiTmF2aWdhdGlvblwiLFxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbmF2Q2xhc3MgPSB0aGlzLnByb3BzLm5hdlN0YXRlID8gJ25hdi0tTUFJTiBvcGVuJyA6ICduYXYtLU1BSU4gY2xvc2VkJztcbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcIm5hdlwiLCB7Y2xhc3NOYW1lOiBuYXZDbGFzc30sIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge2NsYXNzTmFtZTogXCJuYXYtLW5hdi1saXN0XCJ9LCBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2NsYXNzTmFtZTogXCJuYXYtLW5hdi1saW5rXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBcIi9cIn0sIFwiQUJPVVRcIilcbiAgICAgICAgICApLCBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2NsYXNzTmFtZTogXCJuYXYtLW5hdi1saW5rXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBcIi93b3JrXCJ9LCBcIldPUktcIilcbiAgICAgICAgICApLCBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2NsYXNzTmFtZTogXCJuYXYtLW5hdi1saW5rXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBcIi9yZXN1bWVcIn0sIFwiUkVTVU1FXCIpXG4gICAgICAgICAgKSwgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtjbGFzc05hbWU6IFwibmF2LS1uYXYtbGlua1wifSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogXCJodHRwOi8vd3d3LmVyaW5kZXBldy5jb20vYmxvZ1wifSwgXCJCTE9HXCIpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTmF2aWdhdGlvbjsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIExheW91dCA9IHJlcXVpcmUoJy4vTGF5b3V0LmpzeCcpO1xuXG5jb25zdCBwYWdlcyA9IHtcbiAgbG9nb3M6IHt0aXRsZTogJ09wZXJhdGlvbnMgYW5kIFRlY2huaWNhbCBTZXJ2aWNlcyBMb2dvIERlc2lnbicsIGludHJvOiBcIlRoZXNlIGFyZSBhIGNvbGxlY3Rpb24gb2YgcHJvcG9zZWQgbG9nbyBkZXNpZ25zIGZvciBOQkNVbml2ZXJzYWwncyBPcGVyYXRpb25zIGFuZCBUZWNobmljYWwgU2VydmljZXMgZGVwYXJ0bWVudC5cIixcbiAgIGNvbnRlbnQ6IFt7aW1hZ2U6ICdsb2dvcy9sb2dvMS5qcGcnLCBjYXB0aW9uOiBudWxsLCBsaW5rOiBudWxsfSwge2ltYWdlOiAnbG9nb3MvbG9nbzIucG5nJywgY2FwdGlvbjogbnVsbCAsIGxpbms6IG51bGx9LFxuICAgIHtpbWFnZTogJ2xvZ29zL2xvZ280LnBuZycsIGNhcHRpb246IG51bGwsIGxpbms6IG51bGx9XX0sXG5cbiAgaGFza2VsbDoge3RpdGxlOiAnSGFza2VsbCBQbGF0Zm9ybSBSZWRlc2lnbicsXG4gICBpbnRybzogJ0NvbGxhYm9yYXRpbmcgd2l0aCB0aGUgSGFza2VsbCBjb21tdW5pdHksIEkgY3JlYXRlZCB0aGUgVVgsIGRlc2lnbiBhbmQgYSBzaW1wbGUgcHJvdG90eXBlIGZvciBhIHJlZGVzaWduIG9mIHRoZSBIYXNrZWxsIFBsYXRmb3JtLiBJIHB1bGxlZCBjb2xvciBpbnNwaXJhdGlvbiBmcm9tIHRoZSBjdXJyZW50IGxvZ28sIHJlLW9yZ2FuaXplZCB0aGUgVVggdG8gYSBtb3JlIGFwcHJvcHJpYXRlIGhlaXJhcmNoeSwgYW5kIGNsZWFuZWQtdXAgdGhlIGRlc2lnbiBmb3IgYSBzbGVla2VyIG1vcmUgbW9kZXJuIGZlZWwuJyxcbiAgIGNvbnRlbnQ6IFt7aW1hZ2U6ICdoYXNrZWxsL2hhc2tlbGwtcGxhdGZvcm0tMS5wbmcnLCBjYXB0aW9uOiAnVGhpcyB3YXMgdGhlIGZpbmFsIGRlc2lnbiBhZnRlciBiZWluZyByZXZpZXdlZCBieSB0aGUgY29tbXVuaXR5JyxcbiAgICBsaW5rOiB7dXJsOiAnaHR0cDovL2VyaW5kZXBldy5naXRodWIuaW8vSGFza2VsbF9QbGF0Zm9ybS8nLCB0ZXh0OiAnQ2xpY2sgaGVyZSB0byB2aWV3IHRoZSBIYXNrZWxsIFBsYXRmb3JtIHByb3RvdHlwZSA9Pid9fSxcbiAgICB7aW1hZ2U6ICdoYXNrZWxsL2hhc2tlbGwtcGxhdGZvcm0tMi5wbmcnLCBjYXB0aW9uOiBudWxsLCBsaW5rOiBudWxsfSxcbiAgICB7aW1hZ2U6ICdoYXNrZWxsL2hhc2tlbGwtcGxhdGZvcm0tMy5wbmcnLCBjYXB0aW9uOiAnVGhpcyB3YXMgYW4gYWx0ZXJuYXRlIHByb3Bvc2VkIGRlc2lnbiBhbmQgY29sb3Itc2NoZW1lLicsIGxpbms6IG51bGx9IF19LFxuXG4gU1NPTG9naW46IHt0aXRsZTogJ1NpbmdsZSBTaWduLW9uIExvZ2luIFBhZ2UgUmVkZXNpZ24nLCBpbnRybzogJ1RoaXMgcHJvamVjdCB3YXMgYSBVWCBhbmQgZGVzaWduIHVwZGF0ZSBmb3IgdGhlIHNpbmdsZSBzaWduLW9uIGxvZ2luIHBhZ2UgYXQgTkJDVW5pdmVyc2FsLiBJIGNyZWF0ZWQgdGhlIGRlc2lnbiwgVVggYW5kIGJ1aWx0IGEgcHJvdG90eXBlIHdpdGggdGhlIEhUTUwgYW5kIENTUyB0byBiZSBwb3J0ZWQgb3ZlciB0byBEcnVwYWwgaW4gcHJvZHVjdGlvbi4nLFxuICAgY29udGVudDogW3tpbWFnZTogJ1NTT2xvZ2luL1NTT0xvZ2luLTEucG5nJywgY2FwdGlvbjogbnVsbCwgbGluazogbnVsbH0sXG4gICAge2ltYWdlOiAnU1NPbG9naW4vU1NPTG9naW4tMi5wbmcnLCBjYXB0aW9uOiAnRmluYWwgZGVzaWduIHRoYXQgd2FzIGNob3NlbiBmb3IgdGhlIHVwZGF0ZWQgU1NPIGxvZ2luIHBhZ2UuJywgbGluazogbnVsbH0sXG4gICAge2ltYWdlOiAnU1NPbG9naW4vU1NPTG9naW4tNi5wbmcnLCBjYXB0aW9uOiBudWxsLCBsaW5rOiBudWxsfSwge2ltYWdlOiAnU1NPbG9naW4vU1NPTG9naW4tMy5wbmcnLCBjYXB0aW9uOiAnQWx0ZXJuYXRlIHByb3Bvc2VkIGRlc2lnbicsIGxpbms6IG51bGx9LFxuICAgIHtpbWFnZTogJ1NTT2xvZ2luL1NTT0xvZ2luLTQucG5nJywgY2FwdGlvbjogJ0FsdGVybmF0ZSBwcm9wb3NlZCBkZXNpZ24nLCBsaW5rOiBudWxsfSwge2ltYWdlOiAnU1NPbG9naW4vU1NPTG9naW4tNS5wbmcnLCBjYXB0aW9uOiAnQWx0ZXJuYXRlIHByb3Bvc2VkIGRlc2lnbicgLCBsaW5rOiBudWxsfV19LFxuXG4gc3BvcnRzX2Rhc2hib2FyZDoge3RpdGxlOiAnTkJDIFNwb3J0cyBEYXNoYm9hcmQnLCBpbnRybzogJ0kgY3JlYXRlZCB0aGUgVVggYW5kIGRlc2lnbiBmb3Igc2luZ2xlIHBhZ2UgYXBwIGZvciBOQkMgU3BvcnRzLiBUaGUgZGFzaGJvYXJkIHdvdWxkIHByb3ZpZGUgaGlnaGxpZ2h0cyBhbmQgaW1wb3J0YW50IGluZm9ybWF0aW9uIGF0IGEgZ2xhbmNlIHRvIG1lbWJlcnMgb2YgdGhlIE5CQyBTcG9ydHMgcmVwb3J0aW5nIHRlYW0uJyxcbiAgY29udGVudDogW3tpbWFnZTogJ3Nwb3J0c19kYXNoYm9hcmQvc3BvcnRzLWRhc2hib2FyZC0xLnBuZycsIGNhcHRpb246IG51bGwsIGxpbms6IG51bGx9LFxuICAge2ltYWdlOiAnc3BvcnRzX2Rhc2hib2FyZC9zcG9ydHMtZGFzaGJvYXJkLTIucG5nJywgY2FwdGlvbjogbnVsbCwgbGluazogbnVsbH0sXG4gICB7aW1hZ2U6ICdzcG9ydHNfZGFzaGJvYXJkL3Nwb3J0cy1kYXNoYm9hcmQtMy5wbmcnLCBjYXB0aW9uOiBudWxsLCBsaW5rOiBudWxsfSxcbiAgIHtpbWFnZTogJ3Nwb3J0c19kYXNoYm9hcmQvc3BvcnRzLWRhc2hib2FyZC00LnBuZycsIGNhcHRpb246IG51bGwsIGxpbms6IG51bGx9XX0sXG5cbiB0ZWxlbXVuZG86IHt0aXRsZTogJ1RlbGVtdW5kby5jb20gUmVkZXNpZ24nLCBpbnRybzogXCJJIGFzc2lzdGVkIHdpdGggYSBjb21wbGV0ZSByZWRlc2lnbiBhbmQgcmVidWlsZCBvZiBUZWxlbXVuZG8ncyBtYWluIHdlYnNpdGUsIGFuZCBhY3RlZCBhcyBhIGh5YnJpZCBkZXNpZ25lci9kZXZlbG9wZXIgYW5kIGEgYnJpZGdlIGJldHdlZW4gdGhlIE5CQ1VuaXZlcnNhbCBkZXZlbG9wbWVudCB0ZWFtIGFuZCBUZWxlbXVuZG8gZGVzaWduIGFuZCBVWCB0ZWFtLlwiLFxuICBjb250ZW50OiBbe2ltYWdlOiAndGVsZW11bmRvL1RlbGVtdW5kby0xLnBuZycsIGNhcHRpb246IFwiQ1NTMywgSFRNTDUsIFNhc3MgYW5kIENvbXBhc3Mgd2VyZSB1c2VkIHRvIGJ1aWxkIGEgcmVzcG9uc2l2ZSBhbmQgY29tcG9uZW50LWJhc2VkIGZyb250LWVuZCB3aXRoIGEgRHJ1cGFsIENNUyBiYWNrZW5kLlwiLFxuICAgIGxpbms6IHt1cmw6ICd3d3cudGVsZW11bmRvLmNvbScsIHRleHQ6ICdWaWV3IHRoZSBUZWxlbXVuZG8gc2l0ZSA9Pid9fSxcbiAgIHtpbWFnZTogJ3RlbGVtdW5kby9UZWxlbXVuZG8tMi5wbmcnLCBjYXB0aW9uOiAnVGhlIGRlc2lnbiwgVVggYW5kIGZyb250LWVuZCBkZXZlbG9wbWVudCB0ZWFtIHVzZWQgUGF0dGVybiBMYWIgYXMgYSB0b29sIHRvIGNvbGxhYm9yYXRpdmVseSBjcmVhdGUgYSBjb21wb25lbnQtYmFzZWQgc2l0ZSBmcm9tIGRlc2lnbiB0byBkZXZlbG9wbWVudC4nLFxuICAgIGxpbms6IHt1cmw6ICdodHRwOi8vbmJjdW90cy5naXRodWIuaW8vUHVibGlzaGVyN19uYmN1dGVsZW11bmRvLz9wPXBhZ2VzLWhvbWVwYWdlLWInLCB0ZXh0OiAnVmlldyB0aGUgVGVsZW11bmRvIHBhdHRlcm4gbGFiID0+J319XX0sXG5cbiBmaWVsZF9ob2NrZXk6IHt0aXRsZTogXCJOZXcgWW9yayBXb21lbidzIEZpZWxkIEhvY2tleSBTaGlydCBEZXNpZ25zXCIsIGludHJvOiBcIkkgY3JlYXRlZCBzZXZlcmFsIHRlZSBzaGlydCBkZXNpZ25zIGZvciBOZXcgWW9yayBXb21lbidzIEZpZWxkIEhvY2tleSBjbHViJ3MgMTB0aCB5ZWFyIGFubml2ZXJzYXJ5LlwiLFxuICBjb250ZW50OiBbe2ltYWdlOiAnZmllbGQtaG9ja2V5L21vY2t1cC1kYXJrX3YxLmpwZycsIGNhcHRpb246ICdUaGlzIHdhcyB0aGUgZmluYWwgc2VsZWN0ZWQgZGVzaWduIHRoYXQgd2FzIHByaW50ZWQgYW5kIHNvbGQuJywgbGluazogbnVsbH0sXG4gICAge2ltYWdlOiAnZmllbGQtaG9ja2V5L21vY2t1cC1kYXJrX3YxLmpwZycsIGNhcHRpb246ICdMaWdodCBhbmQgZGFyayB2ZXJzaW9ucyBvZiB0aGUgZmluYWwgc2VsZWN0ZWQgZGVzaWduIG1vY2tlZC11cCBvbiBhIHRlZSBzaGlydC4nLCBsaW5rOiBudWxsfSwge2ltYWdlOiAnZmllbGQtaG9ja2V5L21vY2t1cC1saWdodF92MS5qcGcnLCBjYXB0aW9uOiBudWxsLCBsaW5rOiBudWxsfSxcbiAgICB7aW1hZ2U6ICdmaWVsZC1ob2NrZXkvbW9ja3VwLWRhcmtfdjIuanBnJywgY2FwdGlvbjogJ0FsdGVybmF0ZSBwcm9wb3NlZCBkZXNpZ24uJywgbGluazogbnVsbH0sIHtpbWFnZTogJ2ZpZWxkLWhvY2tleS9tb2NrdXAtbGlnaHRfdjIuanBnJywgY2FwdGlvbjogbnVsbCwgbGluazogbnVsbH0sXG4gICAge2ltYWdlOiAnZmllbGQtaG9ja2V5L21vY2t1cC1kYXJrX3YzLmpwZycsIGNhcHRpb246ICdBbHRlcm5hdGUgcHJvcG9zZWQgZGVzaWduLicsIGxpbms6IG51bGx9LCB7aW1hZ2U6ICdmaWVsZC1ob2NrZXkvbW9ja3VwLWxpZ2h0X3YzLmpwZycsIGNhcHRpb246IG51bGwsIGxpbms6IG51bGx9XX1cbn07XG5cbnZhciBQb3J0Zm9saW9QYWdlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlBvcnRmb2xpb1BhZ2VcIixcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwYWdlc1t0aGlzLnByb3BzLnJvdXRlUGFyYW1zLnByb2plY3ROYW1lXTtcbiAgICByZXR1cm4gKFxuICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExheW91dCwge25hdlN0YXRlOiB0aGlzLnByb3BzLm5hdlN0YXRlLCBhc3BlY3Q6IFwiTUFJTlwiLCBpbmNsdWRlTmF2OiB0cnVlfSwgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImxheW91dC0tcHJpbWFyeS1zZWN0aW9uXCJ9LCBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicG9ydGZvbGlvLXBhZ2UtLU1BSU5cIn0sIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHtjbGFzc05hbWU6IFwicG9ydGZvbGlvLXBhZ2UtLWhlYWRlclwifSwgY3VycmVudFByb2plY3QudGl0bGUpLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHtjbGFzc05hbWU6IFwicG9ydGZvbGlvLXBhZ2UtLXRleHRcIn0sIGN1cnJlbnRQcm9qZWN0LmludHJvKSwgXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdC5jb250ZW50Lm1hcChmdW5jdGlvbihpdGVtKXtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFxuICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7Y2xhc3NOYW1lOiBcInBvcnRmb2xpby1wYWdlLS1pbWFnZVwiLCBzcmM6IGBpbWFnZXMvcG9ydGZvbGlvLyR7aXRlbS5pbWFnZX1gfSksIFxuICAgICAgICAgICAgICAgICAgaXRlbS5jYXB0aW9uID8gUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwge2NsYXNzTmFtZTogXCJwb3J0Zm9saW8tcGFnZS0tdGV4dFwifSwgaXRlbS5jYXB0aW9uKSA6IG51bGwsIFxuICAgICAgICAgICAgICAgICAgaXRlbS5saW5rID8gUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2NsYXNzTmFtZTogXCJwb3J0Zm9saW8tcGFnZS0tbGlua1wiLCBcImRhdGEtaG92ZXJcIjogaXRlbS5saW5rLnRleHQsIGhyZWY6IGl0ZW0ubGluay51cmx9LCBpdGVtLmxpbmsudGV4dCkgOiBudWxsXG4gICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvcnRmb2xpb1BhZ2U7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBTZWN0aW9uID0gcmVxdWlyZSgnLi9TZWN0aW9uLmpzeCcpO1xudmFyIEJ1dHRvbiA9IHJlcXVpcmUoJy4vQnV0dG9uLmpzeCcpO1xudmFyIExheW91dCA9IHJlcXVpcmUgKCcuL0xheW91dC5qc3gnKTtcblxuXG52YXIgZXhwZXJpZW5jZSA9IFtcbiAge1xuICAgIGhlYWRlcjogJ0Zyb250ZW5kIERldmVsb3BlcicsXG4gICAgc3ViaGVhZGVyOiAnQml0bHksIEZlYnJ1YXJ5IDIwMTUgLSBwcmVzZW50JyxcbiAgICBjb250ZW50OiBbJ1Byb2plY3QgbGVhZCBmb3IgcmUtYnVpbGRpbmcgd2Vic2l0ZSBhcyBhIGZ1bGwtZmxlZGdlZCBTYWFTIHBsYXRmb3JtIHVzaW5nIFJlYWN0LCBPbW5pc2NpZW50LCBhbmQgSW1tdXRhYmxlIHVzaW5nIGZ1bmN0aW9uYWwgcHJvZ3JhbW1pbmcgdGVjaG5pcXVlcy4nLCAnQ29sbGFib3JhdGVkIHdpdGggcHJvZHVjdCwgZGVzaWduIGFuZCBkYXRhLXNjaWVuY2UgdGVhbSB0byBkZXZlbG9wIGZlYXR1cmVzIGFuZCBkYXRhIHZpc3VhbGl6YXRpb25zIGZvciBjdXN0b21lcnMuJywgJ01haW50YWluZWQgZmVhdHVyZXMgb24gY3VycmVudCBCYWNrYm9uZSBhbmQgTWFyaW9uZXR0ZSBzaXRlIHdoaWxlIG5ldyBwbGF0Zm9ybSBpcyB1bmRlciBjb25zdHJ1Y3Rpb24uJywgJ0J1aWx0IGFuZCBtYWludGFpbmVkIGludGVybmFsIOKAmGxpdmXigJkgc3R5bGVndWlkZSB3aGljaCBpcyB1c2VkIGZvciBjb2xsYWJvcmF0aW5nIHdpdGggZGVzaWduIGFuZCBVWCB0ZWFtIG9uIFNhYVMgcGxhdGZvcm0uJywgJ0RldmVsb3BlZCBwcm9jZXNzIGZvciBjcmVhdGluZyBDU1MgbW9kdWxlcyBmb3IgdXNlIHdpdGggUmVhY3QgY29tcG9uZW50cyB3aGljaCBpbmNyZWFzZWQgaXRlcmF0aW9uIHNwZWVkIGFuZCBkZWNyZWFzZWQgdG90YWwgbnVtYmVyIG9mIGxpbmVzIG9mIENTUyBieSA1MCUnXVxuICB9LFxuICB7XG4gICAgaGVhZGVyOiAnRnJvbnRlbmQgRGVzaWduIERldmVsb3BlcicsXG4gICAgc3ViaGVhZGVyOiAnTkJDVW5pdmVyc2FsLCBNYXJjaCAyMDEzIC0gRmVicnVhcnkgMjAxNScsXG4gICAgY29udGVudDogWydEZXZlbG9wZWQgcmVzcG9uc2l2ZSBjb21wb25lbnRzIGFuZCBsYXlvdXRzIHVzaW5nIEhUTUw1IGFuZCBTYXNzIGZvciB0aGUgVGVsZW11bmRvLmNvbSByZWRlc2lnbiB3aXRoIHRoZSBUZWxlbXVuZG8gZGVzaWduZXIgdGVhbSBhbmQgdGhlIE5CQyBkZXZlbG9wbWVudCB0ZWFtLicsICdEZXZlbG9wZWQgYSBwcm9jZXNzIHRvIGludGVncmF0ZSB0aGUgdmlzdWFsIGRlc2lnbmVy4oCZcyBhbmQgZnJvbnQtZW5kIGVuZ2luZWVy4oCZc3dvcmtmbG93LCBmb2N1c2luZyBvbiBwYWlyLXByb2dyYW1taW5nIHdlYiBhcHBsaWNhdGlvbnMgaW4tYnJvd3Nlci4gU2VydmVkIGFzIGEgYnJpZGdlIGJldHdlZW4gdGhlIGdyYXBoaWMgZGVzaWduZXJzIGFuZCBlbmdpbmVlcnMsIGVuYWJsaW5nIHRoZSBwcm9jZXNzIHRvIGJlY29tZSBkZXNpZ25lciBhbmQgZGV2ZWxvcGVyIGRyaXZlbiAoYWdpbGUtbGlrZSkgYW5kIGRyYXN0aWNhbGx5IGluY3JlYXNpbmcgZWZmaWNpZW5jeS4nLCAnUmFwaWRseSBwcm90b3R5cGVkIHByb29mLW9mLWNvbmNlcHQgc3lzdGVtcyB1c2luZyBIVE1MNSwgQ1NTMywgYW5kIEphdmFTY3JpcHQgdG8gc2VydmUgYXMgZXhhbXBsZXMgdG8gYm90aCB0aGUgVVggYW5kIGRlc2lnbiB0ZWFtcy4nLCAnRGVzaWduZWQgYXNzZXRzIHN1Y2ggYXMgYWRzLCBoZWFkZXJzLCBhbmQgaWNvbnMgZm9yIHdlYnNpdGVzLCBzaWduYWdlLGFuZCBtb2JpbGUgYXBwcy4nXVxuICB9XG5dO1xuXG52YXIgdGFsa3MgPSBbXG4gIHtcbiAgICBoZWFkZXI6ICdCaXRseSBQb2RjYXN0JyxcbiAgICBzdWJoZWFkZXI6ICdCaXRseSwgTm92ZW1iZXIgMjAxNScsXG4gICAgY29udGVudDogWydUYWxrIGZvciBCaXRseSBQb2RjYXN0J11cbiAgfSxcbiAge1xuICAgIGhlYWRlcjogJ01vZHVsYXIgQ1NTOiBEZXZlbG9waW5nLCBFeHRlbmRpbmcgYW5kIE1haW50YWluaW5nIENTUycsXG4gICAgc3ViaGVhZGVyOiAnQ29kZW1hc2gsIEphbnVhcnkgMjAxNicsXG4gICAgY29udGVudDogWydUYWxrIG9uIGRldmVsb3BpbmcgYW5kIG1haW50YWluaW5nIENTUyBNb2R1bGVzIHVzaW5nIFNhc3MgYW5kIFJlYWN0J11cbiAgfSxcbiAge1xuICAgIGhlYWRlcjogJ1JlYWN0LCBPbW5pc2NpZW50IGFuZCBJbW11dGFibGU6IHRoZSBnYXRld2F5IGRydWdzIHRvIGZ1bmN0aW9uYWwgcHJvZ3JhbW1pbmcnLFxuICAgIHN1YmhlYWRlcjogJ0ZvcndhcmRKUywgSnVseSAyMDE2JyxcbiAgICBjb250ZW50OiBbJ1RhbGsgb24gb3VyIHN0YWNrIGF0IEJpdGx5IHVzaW5nIFJlYWN0LCBPbW5pc2NpZW50LCBJbW11dGFibGUgYW5kIEltbXN0cnVjdCddXG4gIH1cbl07XG5cbnZhciBza2lsbHMgPSBbJ0phdmFTY3JpcHQsIENTUzMsIEhUTUw1LCBTYXNzLCBFUzYsIFJlYWN0LCBPbW5pc2NpZW50LCBJbW11dGFibGUnLCAnSWxsdXN0cmF0b3IsIFBob3Rvc2hvcCwgSW5kZXNpZ24nLCAnV29yZHByZXNzLCBEcnVwYWwnLCAnUHl0aG9uLCBQSFAnLCAnZ2l0LCBncmVwLCBhd2snLCAnTXlTUUwnXTtcblxudmFyIGNvbnRhY3QgPSBbe3RleHQ6ICdlcmlubGRlcGV3QGdtYWlsLmNvbScsIGxpbms6ICcvIy9jb250YWN0J30sIHt0ZXh0OiAnQGVyaW5kZXBldycsIGxpbms6ICd0d2l0dGVyLmNvbS9lcmluZGVwZXcnfSxcbiAge3RleHQ6ICdnaXRodWIuY29tL2VyaW5kZXBldycsIGxpbms6ICdnaXRodWIuY29tL2VyaW5kZXBldyd9LCB7dGV4dDogJ2xpbmtlZGluLmNvbS9lcmluZGVwZXcnLCBsaW5rOiAnbGlua2VkaW4uY29tL2VyaW5kZXBldyd9XTtcblxudmFyIFJlc3VtZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJSZXN1bWVcIixcblxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGF5b3V0LCB7bmF2U3RhdGU6IHRoaXMucHJvcHMubmF2U3RhdGUsIGFzcGVjdDogXCJBTFRFUk5BVEVcIiwgaW5jbHVkZU5hdjogdHJ1ZX0sIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwibGF5b3V0LS1wcmltYXJ5LXNlY3Rpb25cIn0sIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCB7Y2xhc3NOYW1lOiBcInJlc3VtZS0taGVhZGVyIGV4cGVyaWVuY2VcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwiZXhwZXJpZW5jZVwifSwgXCIgXCIpLCBcIkV4cGVyaWVuY2VcIiksIFxuICAgICAgICAgIGV4cGVyaWVuY2UubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChTZWN0aW9uLCB7aGVhZGVyOiBpdGVtLmhlYWRlciwgc3ViaGVhZGVyOiBpdGVtLnN1YmhlYWRlciwgY29udGVudDogaXRlbS5jb250ZW50fSk7XG4gICAgICAgICAgfSksIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCB7Y2xhc3NOYW1lOiBcInJlc3VtZS0taGVhZGVyIHRhbGtzXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcInRhbGtzXCJ9LCBcIiBcIiksIFwiVGFsa3NcIiksIFxuICAgICAgICAgIHRhbGtzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VjdGlvbiwge2hlYWRlcjogaXRlbS5oZWFkZXIsIHN1YmhlYWRlcjogaXRlbS5zdWJoZWFkZXIsIGNvbnRlbnQ6IGl0ZW0uY29udGVudH0pO1xuICAgICAgICAgIH0pXG4gICAgICAgICksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwibGF5b3V0LS1zZWNvbmRhcnktc2VjdGlvblwifSwgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgzXCIsIHtjbGFzc05hbWU6IFwicmVzdW1lLS1oZWFkZXJcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwiY29udGFjdFwifSwgXCIgXCIpLCBcIkNvbnRhY3RcIiksIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcInJlc3VtZS0tbGlzdFwifSwgXG4gICAgICAgICAgICBjb250YWN0Lm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICByZXR1cm4gaXRlbS5saW5rID8gUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtjbGFzc05hbWU6IFwicmVzdW1lLS1saXN0LWl0ZW1cIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtjbGFzc05hbWU6IFwicmVzdW1lLS1saXN0LWxpbmtcIiwgXCJkYXRhLWhvdmVyXCI6IGl0ZW0udGV4dCwgaHJlZjogaXRlbS5saW5rfSwgaXRlbS50ZXh0KSk6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7Y2xhc3NOYW1lOiBcInJlc3VtZS0tbGlzdC1pdGVtXCJ9LCBpdGVtLnRleHQpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApLCBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDNcIiwge2NsYXNzTmFtZTogXCJyZXN1bWUtLWhlYWRlclwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJ0ZWNoLXNraWxsc1wifSwgXCIgXCIpLCBcIlRlY2huaWNhbCBTa2lsbHNcIiksIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcInJlc3VtZS0tbGlzdFwifSwgXG4gICAgICAgICAgICBza2lsbHMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgaXRlbSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICksIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiBcImRvd25sb2Fkcy9yZXN1bWUucGRmXCIsIHRhcmdldDogXCJfYmxhbmtcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7bGFiZWw6IFwiZG93bmxvYWQgUERGXCIsIGFzcGVjdDogXCJNQUlOXCIsIHNlbGVjdGVkOiBmYWxzZX0pKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVzdW1lOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBTZWN0aW9uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlNlY3Rpb25cIixcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJzZWN0aW9uLS1NQUlOXCJ9LCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgzXCIsIHtjbGFzc05hbWU6IFwic2VjdGlvbi0taGVhZGVyXCJ9LCB0aGlzLnByb3BzLmhlYWRlciksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDVcIiwge2NsYXNzTmFtZTogXCJzZWN0aW9uLS1zdWJoZWFkZXJcIn0sIHRoaXMucHJvcHMuc3ViaGVhZGVyKSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcInNlY3Rpb24tLWNvbnRlbnRcIn0sIHRoaXMucHJvcHMuY29udGVudC5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtjbGFzc05hbWU6IFwic2VjdGlvbi0tY29udGVudC1pdGVtXCJ9LCBpdGVtKTtcbiAgICAgICAgfSkpXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2VjdGlvbjsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgVGV4dEFyZWEgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiVGV4dEFyZWFcIixcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge2FjdGl2ZTogdGhpcy5wcm9wcy5mb2N1c307XG4gIH0sXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5mb2N1cykge1xuICAgICAgdGhpcy5yZWZzLnRleHRBcmVhLmdldERPTU5vZGUoKS5mb2N1cygpO1xuICAgIH1cbiAgfSxcbiAgb25DbGljazogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5vbkZvY3VzKCk7XG4gIH0sXG4gIG9uRm9jdXM6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZTogdHJ1ZX0pXG4gIH0sXG4gIG9uQmx1cjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlOiBmYWxzZX0pXG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IGB0ZXh0LWFyZWEtLSR7dGhpcy5zdGF0ZS5hY3RpdmUgPyBgQUNUSVZFYCA6IGBNQUlOYH1gLCBvbkNsaWNrOiB0aGlzLm9uQ2xpY2t9LCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwge2NsYXNzTmFtZTogXCJ0ZXh0LWFyZWEtLWxhYmVsXCJ9LCB0aGlzLnByb3BzLmxhYmVsKSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCB7dHlwZTogdGhpcy5wcm9wcy50eXBlLCBtYXhMZW5ndGg6IHRoaXMucHJvcHMubWF4LCBuYW1lOiB0aGlzLnByb3BzLm5hbWUsIHJlZjogXCJ0ZXh0QXJlYVwiLCBuYW1lOiB0aGlzLnByb3BzLm5hbWUsIG9uQmx1cjogKCkgPT4gdGhpcy5vbkJsdXIoKSwgb25Gb2N1czogKCkgPT4gdGhpcy5vbkZvY3VzKCksIGNsYXNzTmFtZTogXCJ0ZXh0LWFyZWEtLWlucHV0LWZpZWxkXCJ9KVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHRBcmVhOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgTGluayA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLkxpbms7XG5cbnZhciBUaHVtYm5haWwgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiVGh1bWJuYWlsXCIsXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogdGhpcy5wcm9wcy5saW5rLCBjbGFzc05hbWU6IFwidGh1bWJuYWlsLS1NQUlOXCJ9LCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInRodW1ibmFpbC0tb3ZlcmxheVwifSwgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInRodW1ibmFpbC0tb3ZlcmxheS10ZXh0XCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoNVwiLCB7Y2xhc3NOYW1lOiBcInRodW1ibmFpbC0tdGl0bGVcIn0sIHRoaXMucHJvcHMudGl0bGUpXG4gICAgICAgICAgKVxuICAgICAgICApLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7Y2xhc3NOYW1lOiBcInRodW1ibmFpbC0taW1hZ2VcIiwgc3JjOiBgaW1hZ2VzLyR7dGhpcy5wcm9wcy5pbWFnZVVybH1gfSlcbiAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVGh1bWJuYWlsOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVGh1bWJuYWlsID0gcmVxdWlyZSgnLi9UaHVtYm5haWwuanN4Jyk7XG52YXIgTGF5b3V0ID0gcmVxdWlyZSgnLi9MYXlvdXQuanN4Jyk7XG52YXIgRmlsdGVyID0gcmVxdWlyZSgnLi9GaWx0ZXIuanN4Jyk7XG5cbmNvbnN0IGZpbHRlck9wdGlvbnMgPSBbJ3Bob3RvcycsICdjb2RlJywgJ2Rlc2lnbicsICd1eCcsICdhbGwnXTtcblxuY29uc3QgcHJvamVjdHMgPSBbe2ltYWdlOidsb2dvcy5qcGcnLCB0aXRsZTogJ0xvZ28gRGVzaWducycsIG5hbWU6ICdsb2dvcycsIHRhZzpbJ2Rlc2lnbiddfSxcbiAge2ltYWdlOidoYXNrZWxsLnBuZycsIHRpdGxlOiAnSGFza2VsbCBQbGF0Zm9ybSBSZWRlc2lnbicsIG5hbWU6ICdoYXNrZWxsJywgdGFnOlsgJ2NvZGUnLCAndXgnLCAnZGVzaWduJ10gfSxcbiAge2ltYWdlOidTU09sb2dpbi5wbmcnLHRpdGxlOiAnU2luZ2xlIFNpZ24tb24gTG9naW4gUGFnZScsIG5hbWU6ICdTU09Mb2dpbicsIHRhZzpbICd1eCcsICdkZXNpZ24nXX0sXG4gIHtpbWFnZTonc3BvcnRzX2Rhc2hib2FyZC5wbmcnLCB0aXRsZTogJ05CQyBTcG9ydHMgRGFzaGJvYXJkJywgbmFtZTogJ3Nwb3J0c19kYXNoYm9hcmQnLCB0YWc6WyAndXgnLCAnZGVzaWduJ119LFxuICB7aW1hZ2U6J3RlbGVtdW5kby5wbmcnLCB0aXRsZTogJ1RlbGVtdW5kby5jb20gUmVkZXNpZ24nLCBuYW1lOiAndGVsZW11bmRvJywgdGFnOlsgJ2NvZGUnXX0sXG4gIHtpbWFnZTonZmllbGQtaG9ja2V5LnBuZycsIHRpdGxlOiAnTmV3IFlvcmsgRmllbGQgSG9ja2V5IFNoaXJ0IERlc2lnbicsIG5hbWU6ICdmaWVsZF9ob2NrZXknLCB0YWc6WyAnZGVzaWduJ119XTtcblxudmFyIFdvcmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiV29ya1wiLFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7c2VsZWN0ZWQ6ICdhbGwnfTtcbiAgfSxcbiAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uKHNlbGVjdGVkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWQ6IHNlbGVjdGVkfSk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIGxldCB3b3JrID0gcHJvamVjdHMuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZCA9PSAnYWxsJykge1xuICAgICAgICByZXR1cm4gcHJvamVjdHM7XG4gICAgICB9XG4gICAgICBpZiAoKGl0ZW0udGFnLmluZGV4T2YodGhpcy5zdGF0ZS5zZWxlY3RlZCkgPiAtMSkpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExheW91dCwge25hdlN0YXRlOiB0aGlzLnByb3BzLm5hdlN0YXRlLCBhc3BlY3Q6IFwiTUFJTlwiLCBpbmNsdWRlTmF2OiB0cnVlfSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJsYXlvdXQtLXByaW1hcnktc2VjdGlvblwifSwgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGaWx0ZXIsIHtsYWJlbDogXCJGSUxURVIgQllcIiwgYnV0dG9uczogZmlsdGVyT3B0aW9ucywgaGFuZGxlQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2ssIHNlbGVjdGVkOiB0aGlzLnN0YXRlLnNlbGVjdGVkfSksIFxuICAgICAgICAgIHdvcmsubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGh1bWJuYWlsLCB7dGl0bGU6IGl0ZW0udGl0bGUsIGltYWdlVXJsOiBgcG9ydGZvbGlvL3RodW1ibmFpbHMvJHtpdGVtLmltYWdlfWAsIGxpbms6IGAvd29yay8ke2l0ZW0ubmFtZX1gfSk7XG4gICAgICAgICAgICAgIH0pIFxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gV29yazsiLCJ2YXIgcFNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuL2xpYi9rZXlzLmpzJyk7XG52YXIgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2xpYi9pc19hcmd1bWVudHMuanMnKTtcblxudmFyIGRlZXBFcXVhbCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFjdHVhbCwgZXhwZWN0ZWQsIG9wdHMpIHtcbiAgaWYgKCFvcHRzKSBvcHRzID0ge307XG4gIC8vIDcuMS4gQWxsIGlkZW50aWNhbCB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGFzIGRldGVybWluZWQgYnkgPT09LlxuICBpZiAoYWN0dWFsID09PSBleHBlY3RlZCkge1xuICAgIHJldHVybiB0cnVlO1xuXG4gIH0gZWxzZSBpZiAoYWN0dWFsIGluc3RhbmNlb2YgRGF0ZSAmJiBleHBlY3RlZCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gYWN0dWFsLmdldFRpbWUoKSA9PT0gZXhwZWN0ZWQuZ2V0VGltZSgpO1xuXG4gIC8vIDcuMy4gT3RoZXIgcGFpcnMgdGhhdCBkbyBub3QgYm90aCBwYXNzIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyxcbiAgLy8gZXF1aXZhbGVuY2UgaXMgZGV0ZXJtaW5lZCBieSA9PS5cbiAgfSBlbHNlIGlmICghYWN0dWFsIHx8ICFleHBlY3RlZCB8fCB0eXBlb2YgYWN0dWFsICE9ICdvYmplY3QnICYmIHR5cGVvZiBleHBlY3RlZCAhPSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBvcHRzLnN0cmljdCA/IGFjdHVhbCA9PT0gZXhwZWN0ZWQgOiBhY3R1YWwgPT0gZXhwZWN0ZWQ7XG5cbiAgLy8gNy40LiBGb3IgYWxsIG90aGVyIE9iamVjdCBwYWlycywgaW5jbHVkaW5nIEFycmF5IG9iamVjdHMsIGVxdWl2YWxlbmNlIGlzXG4gIC8vIGRldGVybWluZWQgYnkgaGF2aW5nIHRoZSBzYW1lIG51bWJlciBvZiBvd25lZCBwcm9wZXJ0aWVzIChhcyB2ZXJpZmllZFxuICAvLyB3aXRoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCksIHRoZSBzYW1lIHNldCBvZiBrZXlzXG4gIC8vIChhbHRob3VnaCBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgb3JkZXIpLCBlcXVpdmFsZW50IHZhbHVlcyBmb3IgZXZlcnlcbiAgLy8gY29ycmVzcG9uZGluZyBrZXksIGFuZCBhbiBpZGVudGljYWwgJ3Byb3RvdHlwZScgcHJvcGVydHkuIE5vdGU6IHRoaXNcbiAgLy8gYWNjb3VudHMgZm9yIGJvdGggbmFtZWQgYW5kIGluZGV4ZWQgcHJvcGVydGllcyBvbiBBcnJheXMuXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG9iakVxdWl2KGFjdHVhbCwgZXhwZWN0ZWQsIG9wdHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkT3JOdWxsKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAoeCkge1xuICBpZiAoIXggfHwgdHlwZW9mIHggIT09ICdvYmplY3QnIHx8IHR5cGVvZiB4Lmxlbmd0aCAhPT0gJ251bWJlcicpIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiB4LmNvcHkgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIHguc2xpY2UgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHgubGVuZ3RoID4gMCAmJiB0eXBlb2YgeFswXSAhPT0gJ251bWJlcicpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIG9iakVxdWl2KGEsIGIsIG9wdHMpIHtcbiAgdmFyIGksIGtleTtcbiAgaWYgKGlzVW5kZWZpbmVkT3JOdWxsKGEpIHx8IGlzVW5kZWZpbmVkT3JOdWxsKGIpKVxuICAgIHJldHVybiBmYWxzZTtcbiAgLy8gYW4gaWRlbnRpY2FsICdwcm90b3R5cGUnIHByb3BlcnR5LlxuICBpZiAoYS5wcm90b3R5cGUgIT09IGIucHJvdG90eXBlKSByZXR1cm4gZmFsc2U7XG4gIC8vfn5+SSd2ZSBtYW5hZ2VkIHRvIGJyZWFrIE9iamVjdC5rZXlzIHRocm91Z2ggc2NyZXd5IGFyZ3VtZW50cyBwYXNzaW5nLlxuICAvLyAgIENvbnZlcnRpbmcgdG8gYXJyYXkgc29sdmVzIHRoZSBwcm9ibGVtLlxuICBpZiAoaXNBcmd1bWVudHMoYSkpIHtcbiAgICBpZiAoIWlzQXJndW1lbnRzKGIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGEgPSBwU2xpY2UuY2FsbChhKTtcbiAgICBiID0gcFNsaWNlLmNhbGwoYik7XG4gICAgcmV0dXJuIGRlZXBFcXVhbChhLCBiLCBvcHRzKTtcbiAgfVxuICBpZiAoaXNCdWZmZXIoYSkpIHtcbiAgICBpZiAoIWlzQnVmZmVyKGIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFbaV0gIT09IGJbaV0pIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdHJ5IHtcbiAgICB2YXIga2EgPSBvYmplY3RLZXlzKGEpLFxuICAgICAgICBrYiA9IG9iamVjdEtleXMoYik7XG4gIH0gY2F0Y2ggKGUpIHsvL2hhcHBlbnMgd2hlbiBvbmUgaXMgYSBzdHJpbmcgbGl0ZXJhbCBhbmQgdGhlIG90aGVyIGlzbid0XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIGhhdmluZyB0aGUgc2FtZSBudW1iZXIgb2Ygb3duZWQgcHJvcGVydGllcyAoa2V5cyBpbmNvcnBvcmF0ZXNcbiAgLy8gaGFzT3duUHJvcGVydHkpXG4gIGlmIChrYS5sZW5ndGggIT0ga2IubGVuZ3RoKVxuICAgIHJldHVybiBmYWxzZTtcbiAgLy90aGUgc2FtZSBzZXQgb2Yga2V5cyAoYWx0aG91Z2ggbm90IG5lY2Vzc2FyaWx5IHRoZSBzYW1lIG9yZGVyKSxcbiAga2Euc29ydCgpO1xuICBrYi5zb3J0KCk7XG4gIC8vfn5+Y2hlYXAga2V5IHRlc3RcbiAgZm9yIChpID0ga2EubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAoa2FbaV0gIT0ga2JbaV0pXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy9lcXVpdmFsZW50IHZhbHVlcyBmb3IgZXZlcnkgY29ycmVzcG9uZGluZyBrZXksIGFuZFxuICAvL35+fnBvc3NpYmx5IGV4cGVuc2l2ZSBkZWVwIHRlc3RcbiAgZm9yIChpID0ga2EubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBrZXkgPSBrYVtpXTtcbiAgICBpZiAoIWRlZXBFcXVhbChhW2tleV0sIGJba2V5XSwgb3B0cykpIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHlwZW9mIGEgPT09IHR5cGVvZiBiO1xufVxuIiwidmFyIHN1cHBvcnRzQXJndW1lbnRzQ2xhc3MgPSAoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudHMpXG59KSgpID09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBzdXBwb3J0c0FyZ3VtZW50c0NsYXNzID8gc3VwcG9ydGVkIDogdW5zdXBwb3J0ZWQ7XG5cbmV4cG9ydHMuc3VwcG9ydGVkID0gc3VwcG9ydGVkO1xuZnVuY3Rpb24gc3VwcG9ydGVkKG9iamVjdCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkgPT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG59O1xuXG5leHBvcnRzLnVuc3VwcG9ydGVkID0gdW5zdXBwb3J0ZWQ7XG5mdW5jdGlvbiB1bnN1cHBvcnRlZChvYmplY3Qpe1xuICByZXR1cm4gb2JqZWN0ICYmXG4gICAgdHlwZW9mIG9iamVjdCA9PSAnb2JqZWN0JyAmJlxuICAgIHR5cGVvZiBvYmplY3QubGVuZ3RoID09ICdudW1iZXInICYmXG4gICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgJ2NhbGxlZScpICYmXG4gICAgIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsICdjYWxsZWUnKSB8fFxuICAgIGZhbHNlO1xufTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBPYmplY3Qua2V5cyA9PT0gJ2Z1bmN0aW9uJ1xuICA/IE9iamVjdC5rZXlzIDogc2hpbTtcblxuZXhwb3J0cy5zaGltID0gc2hpbTtcbmZ1bmN0aW9uIHNoaW0gKG9iaikge1xuICB2YXIga2V5cyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSBrZXlzLnB1c2goa2V5KTtcbiAgcmV0dXJuIGtleXM7XG59XG4iLCIvKipcbiAqIEluZGljYXRlcyB0aGF0IG5hdmlnYXRpb24gd2FzIGNhdXNlZCBieSBhIGNhbGwgdG8gaGlzdG9yeS5wdXNoLlxuICovXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgUFVTSCA9ICdQVVNIJztcblxuZXhwb3J0cy5QVVNIID0gUFVTSDtcbi8qKlxuICogSW5kaWNhdGVzIHRoYXQgbmF2aWdhdGlvbiB3YXMgY2F1c2VkIGJ5IGEgY2FsbCB0byBoaXN0b3J5LnJlcGxhY2UuXG4gKi9cbnZhciBSRVBMQUNFID0gJ1JFUExBQ0UnO1xuXG5leHBvcnRzLlJFUExBQ0UgPSBSRVBMQUNFO1xuLyoqXG4gKiBJbmRpY2F0ZXMgdGhhdCBuYXZpZ2F0aW9uIHdhcyBjYXVzZWQgYnkgc29tZSBvdGhlciBhY3Rpb24gc3VjaFxuICogYXMgdXNpbmcgYSBicm93c2VyJ3MgYmFjay9mb3J3YXJkIGJ1dHRvbnMgYW5kL29yIG1hbnVhbGx5IG1hbmlwdWxhdGluZ1xuICogdGhlIFVSTCBpbiBhIGJyb3dzZXIncyBsb2NhdGlvbiBiYXIuIFRoaXMgaXMgdGhlIGRlZmF1bHQuXG4gKlxuICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dFdmVudEhhbmRsZXJzL29ucG9wc3RhdGVcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICovXG52YXIgUE9QID0gJ1BPUCc7XG5cbmV4cG9ydHMuUE9QID0gUE9QO1xuZXhwb3J0c1snZGVmYXVsdCddID0ge1xuICBQVVNIOiBQVVNILFxuICBSRVBMQUNFOiBSRVBMQUNFLFxuICBQT1A6IFBPUFxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBfc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5leHBvcnRzLmxvb3BBc3luYyA9IGxvb3BBc3luYztcblxuZnVuY3Rpb24gbG9vcEFzeW5jKHR1cm5zLCB3b3JrLCBjYWxsYmFjaykge1xuICB2YXIgY3VycmVudFR1cm4gPSAwLFxuICAgICAgaXNEb25lID0gZmFsc2U7XG4gIHZhciBzeW5jID0gZmFsc2UsXG4gICAgICBoYXNOZXh0ID0gZmFsc2UsXG4gICAgICBkb25lQXJncyA9IHVuZGVmaW5lZDtcblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGlzRG9uZSA9IHRydWU7XG4gICAgaWYgKHN5bmMpIHtcbiAgICAgIC8vIEl0ZXJhdGUgaW5zdGVhZCBvZiByZWN1cnNpbmcgaWYgcG9zc2libGUuXG4gICAgICBkb25lQXJncyA9IFtdLmNvbmNhdChfc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICBpZiAoaXNEb25lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaGFzTmV4dCA9IHRydWU7XG4gICAgaWYgKHN5bmMpIHtcbiAgICAgIC8vIEl0ZXJhdGUgaW5zdGVhZCBvZiByZWN1cnNpbmcgaWYgcG9zc2libGUuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3luYyA9IHRydWU7XG5cbiAgICB3aGlsZSAoIWlzRG9uZSAmJiBjdXJyZW50VHVybiA8IHR1cm5zICYmIGhhc05leHQpIHtcbiAgICAgIGhhc05leHQgPSBmYWxzZTtcbiAgICAgIHdvcmsuY2FsbCh0aGlzLCBjdXJyZW50VHVybisrLCBuZXh0LCBkb25lKTtcbiAgICB9XG5cbiAgICBzeW5jID0gZmFsc2U7XG5cbiAgICBpZiAoaXNEb25lKSB7XG4gICAgICAvLyBUaGlzIG1lYW5zIHRoZSBsb29wIGZpbmlzaGVkIHN5bmNocm9ub3VzbHkuXG4gICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBkb25lQXJncyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRUdXJuID49IHR1cm5zICYmIGhhc05leHQpIHtcbiAgICAgIGlzRG9uZSA9IHRydWU7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfVxuXG4gIG5leHQoKTtcbn0iLCIvKmVzbGludC1kaXNhYmxlIG5vLWVtcHR5ICovXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnNhdmVTdGF0ZSA9IHNhdmVTdGF0ZTtcbmV4cG9ydHMucmVhZFN0YXRlID0gcmVhZFN0YXRlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgS2V5UHJlZml4ID0gJ0BASGlzdG9yeS8nO1xudmFyIFF1b3RhRXhjZWVkZWRFcnJvcnMgPSBbJ1F1b3RhRXhjZWVkZWRFcnJvcicsICdRVU9UQV9FWENFRURFRF9FUlInXTtcblxudmFyIFNlY3VyaXR5RXJyb3IgPSAnU2VjdXJpdHlFcnJvcic7XG5cbmZ1bmN0aW9uIGNyZWF0ZUtleShrZXkpIHtcbiAgcmV0dXJuIEtleVByZWZpeCArIGtleTtcbn1cblxuZnVuY3Rpb24gc2F2ZVN0YXRlKGtleSwgc3RhdGUpIHtcbiAgdHJ5IHtcbiAgICBpZiAoc3RhdGUgPT0gbnVsbCkge1xuICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oY3JlYXRlS2V5KGtleSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShjcmVhdGVLZXkoa2V5KSwgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKGVycm9yLm5hbWUgPT09IFNlY3VyaXR5RXJyb3IpIHtcbiAgICAgIC8vIEJsb2NraW5nIGNvb2tpZXMgaW4gQ2hyb21lL0ZpcmVmb3gvU2FmYXJpIHRocm93cyBTZWN1cml0eUVycm9yIG9uIGFueVxuICAgICAgLy8gYXR0ZW1wdCB0byBhY2Nlc3Mgd2luZG93LnNlc3Npb25TdG9yYWdlLlxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKGZhbHNlLCAnW2hpc3RvcnldIFVuYWJsZSB0byBzYXZlIHN0YXRlOyBzZXNzaW9uU3RvcmFnZSBpcyBub3QgYXZhaWxhYmxlIGR1ZSB0byBzZWN1cml0eSBzZXR0aW5ncycpIDogdW5kZWZpbmVkO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKFF1b3RhRXhjZWVkZWRFcnJvcnMuaW5kZXhPZihlcnJvci5uYW1lKSA+PSAwICYmIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIFNhZmFyaSBcInByaXZhdGUgbW9kZVwiIHRocm93cyBRdW90YUV4Y2VlZGVkRXJyb3IuXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3dhcm5pbmcyWydkZWZhdWx0J10oZmFsc2UsICdbaGlzdG9yeV0gVW5hYmxlIHRvIHNhdmUgc3RhdGU7IHNlc3Npb25TdG9yYWdlIGlzIG5vdCBhdmFpbGFibGUgaW4gU2FmYXJpIHByaXZhdGUgbW9kZScpIDogdW5kZWZpbmVkO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVhZFN0YXRlKGtleSkge1xuICB2YXIganNvbiA9IHVuZGVmaW5lZDtcbiAgdHJ5IHtcbiAgICBqc29uID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oY3JlYXRlS2V5KGtleSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvci5uYW1lID09PSBTZWN1cml0eUVycm9yKSB7XG4gICAgICAvLyBCbG9ja2luZyBjb29raWVzIGluIENocm9tZS9GaXJlZm94L1NhZmFyaSB0aHJvd3MgU2VjdXJpdHlFcnJvciBvbiBhbnlcbiAgICAgIC8vIGF0dGVtcHQgdG8gYWNjZXNzIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgJ1toaXN0b3J5XSBVbmFibGUgdG8gcmVhZCBzdGF0ZTsgc2Vzc2lvblN0b3JhZ2UgaXMgbm90IGF2YWlsYWJsZSBkdWUgdG8gc2VjdXJpdHkgc2V0dGluZ3MnKSA6IHVuZGVmaW5lZDtcblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgaWYgKGpzb24pIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoanNvbik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIElnbm9yZSBpbnZhbGlkIEpTT04uXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5hZGRFdmVudExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcjtcbmV4cG9ydHMucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHJlbW92ZUV2ZW50TGlzdGVuZXI7XG5leHBvcnRzLmdldEhhc2hQYXRoID0gZ2V0SGFzaFBhdGg7XG5leHBvcnRzLnJlcGxhY2VIYXNoUGF0aCA9IHJlcGxhY2VIYXNoUGF0aDtcbmV4cG9ydHMuZ2V0V2luZG93UGF0aCA9IGdldFdpbmRvd1BhdGg7XG5leHBvcnRzLmdvID0gZ287XG5leHBvcnRzLmdldFVzZXJDb25maXJtYXRpb24gPSBnZXRVc2VyQ29uZmlybWF0aW9uO1xuZXhwb3J0cy5zdXBwb3J0c0hpc3RvcnkgPSBzdXBwb3J0c0hpc3Rvcnk7XG5leHBvcnRzLnN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoID0gc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2g7XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnQsIGxpc3RlbmVyKSB7XG4gIGlmIChub2RlLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgbm9kZS5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGxpc3RlbmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50LCBsaXN0ZW5lcikge1xuICBpZiAobm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgZmFsc2UpO1xuICB9IGVsc2Uge1xuICAgIG5vZGUuZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBsaXN0ZW5lcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0SGFzaFBhdGgoKSB7XG4gIC8vIFdlIGNhbid0IHVzZSB3aW5kb3cubG9jYXRpb24uaGFzaCBoZXJlIGJlY2F1c2UgaXQncyBub3RcbiAgLy8gY29uc2lzdGVudCBhY3Jvc3MgYnJvd3NlcnMgLSBGaXJlZm94IHdpbGwgcHJlLWRlY29kZSBpdCFcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMV0gfHwgJyc7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VIYXNoUGF0aChwYXRoKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyAnIycgKyBwYXRoKTtcbn1cblxuZnVuY3Rpb24gZ2V0V2luZG93UGF0aCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyB3aW5kb3cubG9jYXRpb24uaGFzaDtcbn1cblxuZnVuY3Rpb24gZ28obikge1xuICBpZiAobikgd2luZG93Lmhpc3RvcnkuZ28obik7XG59XG5cbmZ1bmN0aW9uIGdldFVzZXJDb25maXJtYXRpb24obWVzc2FnZSwgY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sod2luZG93LmNvbmZpcm0obWVzc2FnZSkpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgSFRNTDUgaGlzdG9yeSBBUEkgaXMgc3VwcG9ydGVkLiBUYWtlbiBmcm9tIE1vZGVybml6ci5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9mZWF0dXJlLWRldGVjdHMvaGlzdG9yeS5qc1xuICogY2hhbmdlZCB0byBhdm9pZCBmYWxzZSBuZWdhdGl2ZXMgZm9yIFdpbmRvd3MgUGhvbmVzOiBodHRwczovL2dpdGh1Yi5jb20vcmFja3QvcmVhY3Qtcm91dGVyL2lzc3Vlcy81ODZcbiAqL1xuXG5mdW5jdGlvbiBzdXBwb3J0c0hpc3RvcnkoKSB7XG4gIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIGlmICgodWEuaW5kZXhPZignQW5kcm9pZCAyLicpICE9PSAtMSB8fCB1YS5pbmRleE9mKCdBbmRyb2lkIDQuMCcpICE9PSAtMSkgJiYgdWEuaW5kZXhPZignTW9iaWxlIFNhZmFyaScpICE9PSAtMSAmJiB1YS5pbmRleE9mKCdDaHJvbWUnKSA9PT0gLTEgJiYgdWEuaW5kZXhPZignV2luZG93cyBQaG9uZScpID09PSAtMSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gd2luZG93Lmhpc3RvcnkgJiYgJ3B1c2hTdGF0ZScgaW4gd2luZG93Lmhpc3Rvcnk7XG59XG5cbi8qKlxuICogUmV0dXJucyBmYWxzZSBpZiB1c2luZyBnbyhuKSB3aXRoIGhhc2ggaGlzdG9yeSBjYXVzZXMgYSBmdWxsIHBhZ2UgcmVsb2FkLlxuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoKCkge1xuICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICByZXR1cm4gdWEuaW5kZXhPZignRmlyZWZveCcpID09PSAtMTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbmV4cG9ydHMuY2FuVXNlRE9NID0gY2FuVXNlRE9NOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZXh0cmFjdFBhdGggPSBleHRyYWN0UGF0aDtcbmV4cG9ydHMucGFyc2VQYXRoID0gcGFyc2VQYXRoO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBleHRyYWN0UGF0aChzdHJpbmcpIHtcbiAgdmFyIG1hdGNoID0gc3RyaW5nLm1hdGNoKC9eaHR0cHM/OlxcL1xcL1teXFwvXSovKTtcblxuICBpZiAobWF0Y2ggPT0gbnVsbCkgcmV0dXJuIHN0cmluZztcblxuICByZXR1cm4gc3RyaW5nLnN1YnN0cmluZyhtYXRjaFswXS5sZW5ndGgpO1xufVxuXG5mdW5jdGlvbiBwYXJzZVBhdGgocGF0aCkge1xuICB2YXIgcGF0aG5hbWUgPSBleHRyYWN0UGF0aChwYXRoKTtcbiAgdmFyIHNlYXJjaCA9ICcnO1xuICB2YXIgaGFzaCA9ICcnO1xuXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShwYXRoID09PSBwYXRobmFtZSwgJ0EgcGF0aCBtdXN0IGJlIHBhdGhuYW1lICsgc2VhcmNoICsgaGFzaCBvbmx5LCBub3QgYSBmdWxseSBxdWFsaWZpZWQgVVJMIGxpa2UgXCIlc1wiJywgcGF0aCkgOiB1bmRlZmluZWQ7XG5cbiAgdmFyIGhhc2hJbmRleCA9IHBhdGhuYW1lLmluZGV4T2YoJyMnKTtcbiAgaWYgKGhhc2hJbmRleCAhPT0gLTEpIHtcbiAgICBoYXNoID0gcGF0aG5hbWUuc3Vic3RyaW5nKGhhc2hJbmRleCk7XG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZS5zdWJzdHJpbmcoMCwgaGFzaEluZGV4KTtcbiAgfVxuXG4gIHZhciBzZWFyY2hJbmRleCA9IHBhdGhuYW1lLmluZGV4T2YoJz8nKTtcbiAgaWYgKHNlYXJjaEluZGV4ICE9PSAtMSkge1xuICAgIHNlYXJjaCA9IHBhdGhuYW1lLnN1YnN0cmluZyhzZWFyY2hJbmRleCk7XG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZS5zdWJzdHJpbmcoMCwgc2VhcmNoSW5kZXgpO1xuICB9XG5cbiAgaWYgKHBhdGhuYW1lID09PSAnJykgcGF0aG5hbWUgPSAnLyc7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZTogcGF0aG5hbWUsXG4gICAgc2VhcmNoOiBzZWFyY2gsXG4gICAgaGFzaDogaGFzaFxuICB9O1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX0FjdGlvbnMgPSByZXF1aXJlKCcuL0FjdGlvbnMnKTtcblxudmFyIF9QYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG52YXIgX0V4ZWN1dGlvbkVudmlyb25tZW50ID0gcmVxdWlyZSgnLi9FeGVjdXRpb25FbnZpcm9ubWVudCcpO1xuXG52YXIgX0RPTVV0aWxzID0gcmVxdWlyZSgnLi9ET01VdGlscycpO1xuXG52YXIgX0RPTVN0YXRlU3RvcmFnZSA9IHJlcXVpcmUoJy4vRE9NU3RhdGVTdG9yYWdlJyk7XG5cbnZhciBfY3JlYXRlRE9NSGlzdG9yeSA9IHJlcXVpcmUoJy4vY3JlYXRlRE9NSGlzdG9yeScpO1xuXG52YXIgX2NyZWF0ZURPTUhpc3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlRE9NSGlzdG9yeSk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIGhpc3Rvcnkgb2JqZWN0IHRoYXQgdXNlcyBIVE1MNSdzIGhpc3RvcnkgQVBJXG4gKiAocHVzaFN0YXRlLCByZXBsYWNlU3RhdGUsIGFuZCB0aGUgcG9wc3RhdGUgZXZlbnQpIHRvIG1hbmFnZSBoaXN0b3J5LlxuICogVGhpcyBpcyB0aGUgcmVjb21tZW5kZWQgbWV0aG9kIG9mIG1hbmFnaW5nIGhpc3RvcnkgaW4gYnJvd3NlcnMgYmVjYXVzZVxuICogaXQgcHJvdmlkZXMgdGhlIGNsZWFuZXN0IFVSTHMuXG4gKlxuICogTm90ZTogSW4gYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCB0aGUgSFRNTDUgaGlzdG9yeSBBUEkgZnVsbFxuICogcGFnZSByZWxvYWRzIHdpbGwgYmUgdXNlZCB0byBwcmVzZXJ2ZSBVUkxzLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCcm93c2VySGlzdG9yeSgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuICAhX0V4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlLCAnQnJvd3NlciBoaXN0b3J5IG5lZWRzIGEgRE9NJykgOiBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlKSA6IHVuZGVmaW5lZDtcblxuICB2YXIgZm9yY2VSZWZyZXNoID0gb3B0aW9ucy5mb3JjZVJlZnJlc2g7XG5cbiAgdmFyIGlzU3VwcG9ydGVkID0gX0RPTVV0aWxzLnN1cHBvcnRzSGlzdG9yeSgpO1xuICB2YXIgdXNlUmVmcmVzaCA9ICFpc1N1cHBvcnRlZCB8fCBmb3JjZVJlZnJlc2g7XG5cbiAgZnVuY3Rpb24gZ2V0Q3VycmVudExvY2F0aW9uKGhpc3RvcnlTdGF0ZSkge1xuICAgIHRyeSB7XG4gICAgICBoaXN0b3J5U3RhdGUgPSBoaXN0b3J5U3RhdGUgfHwgd2luZG93Lmhpc3Rvcnkuc3RhdGUgfHwge307XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaGlzdG9yeVN0YXRlID0ge307XG4gICAgfVxuXG4gICAgdmFyIHBhdGggPSBfRE9NVXRpbHMuZ2V0V2luZG93UGF0aCgpO1xuICAgIHZhciBfaGlzdG9yeVN0YXRlID0gaGlzdG9yeVN0YXRlO1xuICAgIHZhciBrZXkgPSBfaGlzdG9yeVN0YXRlLmtleTtcblxuICAgIHZhciBzdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICBpZiAoa2V5KSB7XG4gICAgICBzdGF0ZSA9IF9ET01TdGF0ZVN0b3JhZ2UucmVhZFN0YXRlKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlID0gbnVsbDtcbiAgICAgIGtleSA9IGhpc3RvcnkuY3JlYXRlS2V5KCk7XG5cbiAgICAgIGlmIChpc1N1cHBvcnRlZCkgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKF9leHRlbmRzKHt9LCBoaXN0b3J5U3RhdGUsIHsga2V5OiBrZXkgfSksIG51bGwpO1xuICAgIH1cblxuICAgIHZhciBsb2NhdGlvbiA9IF9QYXRoVXRpbHMucGFyc2VQYXRoKHBhdGgpO1xuXG4gICAgcmV0dXJuIGhpc3RvcnkuY3JlYXRlTG9jYXRpb24oX2V4dGVuZHMoe30sIGxvY2F0aW9uLCB7IHN0YXRlOiBzdGF0ZSB9KSwgdW5kZWZpbmVkLCBrZXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRQb3BTdGF0ZUxpc3RlbmVyKF9yZWYpIHtcbiAgICB2YXIgdHJhbnNpdGlvblRvID0gX3JlZi50cmFuc2l0aW9uVG87XG5cbiAgICBmdW5jdGlvbiBwb3BTdGF0ZUxpc3RlbmVyKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuc3RhdGUgPT09IHVuZGVmaW5lZCkgcmV0dXJuOyAvLyBJZ25vcmUgZXh0cmFuZW91cyBwb3BzdGF0ZSBldmVudHMgaW4gV2ViS2l0LlxuXG4gICAgICB0cmFuc2l0aW9uVG8oZ2V0Q3VycmVudExvY2F0aW9uKGV2ZW50LnN0YXRlKSk7XG4gICAgfVxuXG4gICAgX0RPTVV0aWxzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAncG9wc3RhdGUnLCBwb3BTdGF0ZUxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBfRE9NVXRpbHMucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdwb3BzdGF0ZScsIHBvcFN0YXRlTGlzdGVuZXIpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBmaW5pc2hUcmFuc2l0aW9uKGxvY2F0aW9uKSB7XG4gICAgdmFyIGJhc2VuYW1lID0gbG9jYXRpb24uYmFzZW5hbWU7XG4gICAgdmFyIHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWU7XG4gICAgdmFyIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaDtcbiAgICB2YXIgaGFzaCA9IGxvY2F0aW9uLmhhc2g7XG4gICAgdmFyIHN0YXRlID0gbG9jYXRpb24uc3RhdGU7XG4gICAgdmFyIGFjdGlvbiA9IGxvY2F0aW9uLmFjdGlvbjtcbiAgICB2YXIga2V5ID0gbG9jYXRpb24ua2V5O1xuXG4gICAgaWYgKGFjdGlvbiA9PT0gX0FjdGlvbnMuUE9QKSByZXR1cm47IC8vIE5vdGhpbmcgdG8gZG8uXG5cbiAgICBfRE9NU3RhdGVTdG9yYWdlLnNhdmVTdGF0ZShrZXksIHN0YXRlKTtcblxuICAgIHZhciBwYXRoID0gKGJhc2VuYW1lIHx8ICcnKSArIHBhdGhuYW1lICsgc2VhcmNoICsgaGFzaDtcbiAgICB2YXIgaGlzdG9yeVN0YXRlID0ge1xuICAgICAga2V5OiBrZXlcbiAgICB9O1xuXG4gICAgaWYgKGFjdGlvbiA9PT0gX0FjdGlvbnMuUFVTSCkge1xuICAgICAgaWYgKHVzZVJlZnJlc2gpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwYXRoO1xuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIFByZXZlbnQgbG9jYXRpb24gdXBkYXRlLlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoaGlzdG9yeVN0YXRlLCBudWxsLCBwYXRoKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSRVBMQUNFXG4gICAgICBpZiAodXNlUmVmcmVzaCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShwYXRoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBQcmV2ZW50IGxvY2F0aW9uIHVwZGF0ZS5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKGhpc3RvcnlTdGF0ZSwgbnVsbCwgcGF0aCk7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgaGlzdG9yeSA9IF9jcmVhdGVET01IaXN0b3J5MlsnZGVmYXVsdCddKF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgZ2V0Q3VycmVudExvY2F0aW9uOiBnZXRDdXJyZW50TG9jYXRpb24sXG4gICAgZmluaXNoVHJhbnNpdGlvbjogZmluaXNoVHJhbnNpdGlvbixcbiAgICBzYXZlU3RhdGU6IF9ET01TdGF0ZVN0b3JhZ2Uuc2F2ZVN0YXRlXG4gIH0pKTtcblxuICB2YXIgbGlzdGVuZXJDb3VudCA9IDAsXG4gICAgICBzdG9wUG9wU3RhdGVMaXN0ZW5lciA9IHVuZGVmaW5lZDtcblxuICBmdW5jdGlvbiBsaXN0ZW5CZWZvcmUobGlzdGVuZXIpIHtcbiAgICBpZiAoKytsaXN0ZW5lckNvdW50ID09PSAxKSBzdG9wUG9wU3RhdGVMaXN0ZW5lciA9IHN0YXJ0UG9wU3RhdGVMaXN0ZW5lcihoaXN0b3J5KTtcblxuICAgIHZhciB1bmxpc3RlbiA9IGhpc3RvcnkubGlzdGVuQmVmb3JlKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB1bmxpc3RlbigpO1xuXG4gICAgICBpZiAoLS1saXN0ZW5lckNvdW50ID09PSAwKSBzdG9wUG9wU3RhdGVMaXN0ZW5lcigpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICBpZiAoKytsaXN0ZW5lckNvdW50ID09PSAxKSBzdG9wUG9wU3RhdGVMaXN0ZW5lciA9IHN0YXJ0UG9wU3RhdGVMaXN0ZW5lcihoaXN0b3J5KTtcblxuICAgIHZhciB1bmxpc3RlbiA9IGhpc3RvcnkubGlzdGVuKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB1bmxpc3RlbigpO1xuXG4gICAgICBpZiAoLS1saXN0ZW5lckNvdW50ID09PSAwKSBzdG9wUG9wU3RhdGVMaXN0ZW5lcigpO1xuICAgIH07XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2soaG9vaykge1xuICAgIGlmICgrK2xpc3RlbmVyQ291bnQgPT09IDEpIHN0b3BQb3BTdGF0ZUxpc3RlbmVyID0gc3RhcnRQb3BTdGF0ZUxpc3RlbmVyKGhpc3RvcnkpO1xuXG4gICAgaGlzdG9yeS5yZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spO1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiB1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2soaG9vaykge1xuICAgIGhpc3RvcnkudW5yZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spO1xuXG4gICAgaWYgKC0tbGlzdGVuZXJDb3VudCA9PT0gMCkgc3RvcFBvcFN0YXRlTGlzdGVuZXIoKTtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgaGlzdG9yeSwge1xuICAgIGxpc3RlbkJlZm9yZTogbGlzdGVuQmVmb3JlLFxuICAgIGxpc3RlbjogbGlzdGVuLFxuICAgIHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2s6IHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2ssXG4gICAgdW5yZWdpc3RlclRyYW5zaXRpb25Ib29rOiB1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2tcbiAgfSk7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfRXhlY3V0aW9uRW52aXJvbm1lbnQgPSByZXF1aXJlKCcuL0V4ZWN1dGlvbkVudmlyb25tZW50Jyk7XG5cbnZhciBfRE9NVXRpbHMgPSByZXF1aXJlKCcuL0RPTVV0aWxzJyk7XG5cbnZhciBfY3JlYXRlSGlzdG9yeSA9IHJlcXVpcmUoJy4vY3JlYXRlSGlzdG9yeScpO1xuXG52YXIgX2NyZWF0ZUhpc3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlSGlzdG9yeSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZURPTUhpc3Rvcnkob3B0aW9ucykge1xuICB2YXIgaGlzdG9yeSA9IF9jcmVhdGVIaXN0b3J5MlsnZGVmYXVsdCddKF9leHRlbmRzKHtcbiAgICBnZXRVc2VyQ29uZmlybWF0aW9uOiBfRE9NVXRpbHMuZ2V0VXNlckNvbmZpcm1hdGlvblxuICB9LCBvcHRpb25zLCB7XG4gICAgZ286IF9ET01VdGlscy5nb1xuICB9KSk7XG5cbiAgZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgIV9FeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00gPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSwgJ0RPTSBoaXN0b3J5IG5lZWRzIGEgRE9NJykgOiBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlKSA6IHVuZGVmaW5lZDtcblxuICAgIHJldHVybiBoaXN0b3J5Lmxpc3RlbihsaXN0ZW5lcik7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIGhpc3RvcnksIHtcbiAgICBsaXN0ZW46IGxpc3RlblxuICB9KTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlRE9NSGlzdG9yeTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9BY3Rpb25zID0gcmVxdWlyZSgnLi9BY3Rpb25zJyk7XG5cbnZhciBfUGF0aFV0aWxzID0gcmVxdWlyZSgnLi9QYXRoVXRpbHMnKTtcblxudmFyIF9FeGVjdXRpb25FbnZpcm9ubWVudCA9IHJlcXVpcmUoJy4vRXhlY3V0aW9uRW52aXJvbm1lbnQnKTtcblxudmFyIF9ET01VdGlscyA9IHJlcXVpcmUoJy4vRE9NVXRpbHMnKTtcblxudmFyIF9ET01TdGF0ZVN0b3JhZ2UgPSByZXF1aXJlKCcuL0RPTVN0YXRlU3RvcmFnZScpO1xuXG52YXIgX2NyZWF0ZURPTUhpc3RvcnkgPSByZXF1aXJlKCcuL2NyZWF0ZURPTUhpc3RvcnknKTtcblxudmFyIF9jcmVhdGVET01IaXN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZURPTUhpc3RvcnkpO1xuXG5mdW5jdGlvbiBpc0Fic29sdXRlUGF0aChwYXRoKSB7XG4gIHJldHVybiB0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycgJiYgcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn1cblxuZnVuY3Rpb24gZW5zdXJlU2xhc2goKSB7XG4gIHZhciBwYXRoID0gX0RPTVV0aWxzLmdldEhhc2hQYXRoKCk7XG5cbiAgaWYgKGlzQWJzb2x1dGVQYXRoKHBhdGgpKSByZXR1cm4gdHJ1ZTtcblxuICBfRE9NVXRpbHMucmVwbGFjZUhhc2hQYXRoKCcvJyArIHBhdGgpO1xuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gYWRkUXVlcnlTdHJpbmdWYWx1ZVRvUGF0aChwYXRoLCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBwYXRoICsgKHBhdGguaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyAoa2V5ICsgJz0nICsgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBzdHJpcFF1ZXJ5U3RyaW5nVmFsdWVGcm9tUGF0aChwYXRoLCBrZXkpIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZShuZXcgUmVnRXhwKCdbPyZdPycgKyBrZXkgKyAnPVthLXpBLVowLTldKycpLCAnJyk7XG59XG5cbmZ1bmN0aW9uIGdldFF1ZXJ5U3RyaW5nVmFsdWVGcm9tUGF0aChwYXRoLCBrZXkpIHtcbiAgdmFyIG1hdGNoID0gcGF0aC5tYXRjaChuZXcgUmVnRXhwKCdcXFxcPy4qP1xcXFxiJyArIGtleSArICc9KC4rPylcXFxcYicpKTtcbiAgcmV0dXJuIG1hdGNoICYmIG1hdGNoWzFdO1xufVxuXG52YXIgRGVmYXVsdFF1ZXJ5S2V5ID0gJ19rJztcblxuZnVuY3Rpb24gY3JlYXRlSGFzaEhpc3RvcnkoKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgIV9FeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00gPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSwgJ0hhc2ggaGlzdG9yeSBuZWVkcyBhIERPTScpIDogX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSkgOiB1bmRlZmluZWQ7XG5cbiAgdmFyIHF1ZXJ5S2V5ID0gb3B0aW9ucy5xdWVyeUtleTtcblxuICBpZiAocXVlcnlLZXkgPT09IHVuZGVmaW5lZCB8fCAhIXF1ZXJ5S2V5KSBxdWVyeUtleSA9IHR5cGVvZiBxdWVyeUtleSA9PT0gJ3N0cmluZycgPyBxdWVyeUtleSA6IERlZmF1bHRRdWVyeUtleTtcblxuICBmdW5jdGlvbiBnZXRDdXJyZW50TG9jYXRpb24oKSB7XG4gICAgdmFyIHBhdGggPSBfRE9NVXRpbHMuZ2V0SGFzaFBhdGgoKTtcblxuICAgIHZhciBrZXkgPSB1bmRlZmluZWQsXG4gICAgICAgIHN0YXRlID0gdW5kZWZpbmVkO1xuICAgIGlmIChxdWVyeUtleSkge1xuICAgICAga2V5ID0gZ2V0UXVlcnlTdHJpbmdWYWx1ZUZyb21QYXRoKHBhdGgsIHF1ZXJ5S2V5KTtcbiAgICAgIHBhdGggPSBzdHJpcFF1ZXJ5U3RyaW5nVmFsdWVGcm9tUGF0aChwYXRoLCBxdWVyeUtleSk7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgc3RhdGUgPSBfRE9NU3RhdGVTdG9yYWdlLnJlYWRTdGF0ZShrZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUgPSBudWxsO1xuICAgICAgICBrZXkgPSBoaXN0b3J5LmNyZWF0ZUtleSgpO1xuICAgICAgICBfRE9NVXRpbHMucmVwbGFjZUhhc2hQYXRoKGFkZFF1ZXJ5U3RyaW5nVmFsdWVUb1BhdGgocGF0aCwgcXVlcnlLZXksIGtleSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBrZXkgPSBzdGF0ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGxvY2F0aW9uID0gX1BhdGhVdGlscy5wYXJzZVBhdGgocGF0aCk7XG5cbiAgICByZXR1cm4gaGlzdG9yeS5jcmVhdGVMb2NhdGlvbihfZXh0ZW5kcyh7fSwgbG9jYXRpb24sIHsgc3RhdGU6IHN0YXRlIH0pLCB1bmRlZmluZWQsIGtleSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydEhhc2hDaGFuZ2VMaXN0ZW5lcihfcmVmKSB7XG4gICAgdmFyIHRyYW5zaXRpb25UbyA9IF9yZWYudHJhbnNpdGlvblRvO1xuXG4gICAgZnVuY3Rpb24gaGFzaENoYW5nZUxpc3RlbmVyKCkge1xuICAgICAgaWYgKCFlbnN1cmVTbGFzaCgpKSByZXR1cm47IC8vIEFsd2F5cyBtYWtlIHN1cmUgaGFzaGVzIGFyZSBwcmVjZWVkZWQgd2l0aCBhIC8uXG5cbiAgICAgIHRyYW5zaXRpb25UbyhnZXRDdXJyZW50TG9jYXRpb24oKSk7XG4gICAgfVxuXG4gICAgZW5zdXJlU2xhc2goKTtcbiAgICBfRE9NVXRpbHMuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdoYXNoY2hhbmdlJywgaGFzaENoYW5nZUxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBfRE9NVXRpbHMucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdoYXNoY2hhbmdlJywgaGFzaENoYW5nZUxpc3RlbmVyKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZmluaXNoVHJhbnNpdGlvbihsb2NhdGlvbikge1xuICAgIHZhciBiYXNlbmFtZSA9IGxvY2F0aW9uLmJhc2VuYW1lO1xuICAgIHZhciBwYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIHZhciBzZWFyY2ggPSBsb2NhdGlvbi5zZWFyY2g7XG4gICAgdmFyIHN0YXRlID0gbG9jYXRpb24uc3RhdGU7XG4gICAgdmFyIGFjdGlvbiA9IGxvY2F0aW9uLmFjdGlvbjtcbiAgICB2YXIga2V5ID0gbG9jYXRpb24ua2V5O1xuXG4gICAgaWYgKGFjdGlvbiA9PT0gX0FjdGlvbnMuUE9QKSByZXR1cm47IC8vIE5vdGhpbmcgdG8gZG8uXG5cbiAgICB2YXIgcGF0aCA9IChiYXNlbmFtZSB8fCAnJykgKyBwYXRobmFtZSArIHNlYXJjaDtcblxuICAgIGlmIChxdWVyeUtleSkge1xuICAgICAgcGF0aCA9IGFkZFF1ZXJ5U3RyaW5nVmFsdWVUb1BhdGgocGF0aCwgcXVlcnlLZXksIGtleSk7XG4gICAgICBfRE9NU3RhdGVTdG9yYWdlLnNhdmVTdGF0ZShrZXksIHN0YXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRHJvcCBrZXkgYW5kIHN0YXRlLlxuICAgICAgbG9jYXRpb24ua2V5ID0gbG9jYXRpb24uc3RhdGUgPSBudWxsO1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50SGFzaCA9IF9ET01VdGlscy5nZXRIYXNoUGF0aCgpO1xuXG4gICAgaWYgKGFjdGlvbiA9PT0gX0FjdGlvbnMuUFVTSCkge1xuICAgICAgaWYgKGN1cnJlbnRIYXNoICE9PSBwYXRoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gcGF0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgJ1lvdSBjYW5ub3QgUFVTSCB0aGUgc2FtZSBwYXRoIHVzaW5nIGhhc2ggaGlzdG9yeScpIDogdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY3VycmVudEhhc2ggIT09IHBhdGgpIHtcbiAgICAgIC8vIFJFUExBQ0VcbiAgICAgIF9ET01VdGlscy5yZXBsYWNlSGFzaFBhdGgocGF0aCk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGhpc3RvcnkgPSBfY3JlYXRlRE9NSGlzdG9yeTJbJ2RlZmF1bHQnXShfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgIGdldEN1cnJlbnRMb2NhdGlvbjogZ2V0Q3VycmVudExvY2F0aW9uLFxuICAgIGZpbmlzaFRyYW5zaXRpb246IGZpbmlzaFRyYW5zaXRpb24sXG4gICAgc2F2ZVN0YXRlOiBfRE9NU3RhdGVTdG9yYWdlLnNhdmVTdGF0ZVxuICB9KSk7XG5cbiAgdmFyIGxpc3RlbmVyQ291bnQgPSAwLFxuICAgICAgc3RvcEhhc2hDaGFuZ2VMaXN0ZW5lciA9IHVuZGVmaW5lZDtcblxuICBmdW5jdGlvbiBsaXN0ZW5CZWZvcmUobGlzdGVuZXIpIHtcbiAgICBpZiAoKytsaXN0ZW5lckNvdW50ID09PSAxKSBzdG9wSGFzaENoYW5nZUxpc3RlbmVyID0gc3RhcnRIYXNoQ2hhbmdlTGlzdGVuZXIoaGlzdG9yeSk7XG5cbiAgICB2YXIgdW5saXN0ZW4gPSBoaXN0b3J5Lmxpc3RlbkJlZm9yZShsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdW5saXN0ZW4oKTtcblxuICAgICAgaWYgKC0tbGlzdGVuZXJDb3VudCA9PT0gMCkgc3RvcEhhc2hDaGFuZ2VMaXN0ZW5lcigpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICBpZiAoKytsaXN0ZW5lckNvdW50ID09PSAxKSBzdG9wSGFzaENoYW5nZUxpc3RlbmVyID0gc3RhcnRIYXNoQ2hhbmdlTGlzdGVuZXIoaGlzdG9yeSk7XG5cbiAgICB2YXIgdW5saXN0ZW4gPSBoaXN0b3J5Lmxpc3RlbihsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdW5saXN0ZW4oKTtcblxuICAgICAgaWYgKC0tbGlzdGVuZXJDb3VudCA9PT0gMCkgc3RvcEhhc2hDaGFuZ2VMaXN0ZW5lcigpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBwdXNoKGxvY2F0aW9uKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKHF1ZXJ5S2V5IHx8IGxvY2F0aW9uLnN0YXRlID09IG51bGwsICdZb3UgY2Fubm90IHVzZSBzdGF0ZSB3aXRob3V0IGEgcXVlcnlLZXkgaXQgd2lsbCBiZSBkcm9wcGVkJykgOiB1bmRlZmluZWQ7XG5cbiAgICBoaXN0b3J5LnB1c2gobG9jYXRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZShsb2NhdGlvbikge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShxdWVyeUtleSB8fCBsb2NhdGlvbi5zdGF0ZSA9PSBudWxsLCAnWW91IGNhbm5vdCB1c2Ugc3RhdGUgd2l0aG91dCBhIHF1ZXJ5S2V5IGl0IHdpbGwgYmUgZHJvcHBlZCcpIDogdW5kZWZpbmVkO1xuXG4gICAgaGlzdG9yeS5yZXBsYWNlKGxvY2F0aW9uKTtcbiAgfVxuXG4gIHZhciBnb0lzU3VwcG9ydGVkV2l0aG91dFJlbG9hZCA9IF9ET01VdGlscy5zdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCgpO1xuXG4gIGZ1bmN0aW9uIGdvKG4pIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3dhcm5pbmcyWydkZWZhdWx0J10oZ29Jc1N1cHBvcnRlZFdpdGhvdXRSZWxvYWQsICdIYXNoIGhpc3RvcnkgZ28obikgY2F1c2VzIGEgZnVsbCBwYWdlIHJlbG9hZCBpbiB0aGlzIGJyb3dzZXInKSA6IHVuZGVmaW5lZDtcblxuICAgIGhpc3RvcnkuZ28obik7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVIcmVmKHBhdGgpIHtcbiAgICByZXR1cm4gJyMnICsgaGlzdG9yeS5jcmVhdGVIcmVmKHBhdGgpO1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiByZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spIHtcbiAgICBpZiAoKytsaXN0ZW5lckNvdW50ID09PSAxKSBzdG9wSGFzaENoYW5nZUxpc3RlbmVyID0gc3RhcnRIYXNoQ2hhbmdlTGlzdGVuZXIoaGlzdG9yeSk7XG5cbiAgICBoaXN0b3J5LnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2soaG9vayk7XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vayhob29rKSB7XG4gICAgaGlzdG9yeS51bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2soaG9vayk7XG5cbiAgICBpZiAoLS1saXN0ZW5lckNvdW50ID09PSAwKSBzdG9wSGFzaENoYW5nZUxpc3RlbmVyKCk7XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHB1c2hTdGF0ZShzdGF0ZSwgcGF0aCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShxdWVyeUtleSB8fCBzdGF0ZSA9PSBudWxsLCAnWW91IGNhbm5vdCB1c2Ugc3RhdGUgd2l0aG91dCBhIHF1ZXJ5S2V5IGl0IHdpbGwgYmUgZHJvcHBlZCcpIDogdW5kZWZpbmVkO1xuXG4gICAgaGlzdG9yeS5wdXNoU3RhdGUoc3RhdGUsIHBhdGgpO1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiByZXBsYWNlU3RhdGUoc3RhdGUsIHBhdGgpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3dhcm5pbmcyWydkZWZhdWx0J10ocXVlcnlLZXkgfHwgc3RhdGUgPT0gbnVsbCwgJ1lvdSBjYW5ub3QgdXNlIHN0YXRlIHdpdGhvdXQgYSBxdWVyeUtleSBpdCB3aWxsIGJlIGRyb3BwZWQnKSA6IHVuZGVmaW5lZDtcblxuICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKHN0YXRlLCBwYXRoKTtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgaGlzdG9yeSwge1xuICAgIGxpc3RlbkJlZm9yZTogbGlzdGVuQmVmb3JlLFxuICAgIGxpc3RlbjogbGlzdGVuLFxuICAgIHB1c2g6IHB1c2gsXG4gICAgcmVwbGFjZTogcmVwbGFjZSxcbiAgICBnbzogZ28sXG4gICAgY3JlYXRlSHJlZjogY3JlYXRlSHJlZixcblxuICAgIHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2s6IHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2ssIC8vIGRlcHJlY2F0ZWQgLSB3YXJuaW5nIGlzIGluIGNyZWF0ZUhpc3RvcnlcbiAgICB1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2s6IHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vaywgLy8gZGVwcmVjYXRlZCAtIHdhcm5pbmcgaXMgaW4gY3JlYXRlSGlzdG9yeVxuICAgIHB1c2hTdGF0ZTogcHVzaFN0YXRlLCAvLyBkZXByZWNhdGVkIC0gd2FybmluZyBpcyBpbiBjcmVhdGVIaXN0b3J5XG4gICAgcmVwbGFjZVN0YXRlOiByZXBsYWNlU3RhdGUgLy8gZGVwcmVjYXRlZCAtIHdhcm5pbmcgaXMgaW4gY3JlYXRlSGlzdG9yeVxuICB9KTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlSGFzaEhpc3Rvcnk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfZGVlcEVxdWFsID0gcmVxdWlyZSgnZGVlcC1lcXVhbCcpO1xuXG52YXIgX2RlZXBFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWVwRXF1YWwpO1xuXG52YXIgX1BhdGhVdGlscyA9IHJlcXVpcmUoJy4vUGF0aFV0aWxzJyk7XG5cbnZhciBfQXN5bmNVdGlscyA9IHJlcXVpcmUoJy4vQXN5bmNVdGlscycpO1xuXG52YXIgX0FjdGlvbnMgPSByZXF1aXJlKCcuL0FjdGlvbnMnKTtcblxudmFyIF9jcmVhdGVMb2NhdGlvbjIgPSByZXF1aXJlKCcuL2NyZWF0ZUxvY2F0aW9uJyk7XG5cbnZhciBfY3JlYXRlTG9jYXRpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlTG9jYXRpb24yKTtcblxudmFyIF9ydW5UcmFuc2l0aW9uSG9vayA9IHJlcXVpcmUoJy4vcnVuVHJhbnNpdGlvbkhvb2snKTtcblxudmFyIF9ydW5UcmFuc2l0aW9uSG9vazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ydW5UcmFuc2l0aW9uSG9vayk7XG5cbnZhciBfZGVwcmVjYXRlID0gcmVxdWlyZSgnLi9kZXByZWNhdGUnKTtcblxudmFyIF9kZXByZWNhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVwcmVjYXRlKTtcblxuZnVuY3Rpb24gY3JlYXRlUmFuZG9tS2V5KGxlbmd0aCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIGxlbmd0aCk7XG59XG5cbmZ1bmN0aW9uIGxvY2F0aW9uc0FyZUVxdWFsKGEsIGIpIHtcbiAgcmV0dXJuIGEucGF0aG5hbWUgPT09IGIucGF0aG5hbWUgJiYgYS5zZWFyY2ggPT09IGIuc2VhcmNoICYmXG4gIC8vYS5hY3Rpb24gPT09IGIuYWN0aW9uICYmIC8vIERpZmZlcmVudCBhY3Rpb24gIT09IGxvY2F0aW9uIGNoYW5nZS5cbiAgYS5rZXkgPT09IGIua2V5ICYmIF9kZWVwRXF1YWwyWydkZWZhdWx0J10oYS5zdGF0ZSwgYi5zdGF0ZSk7XG59XG5cbnZhciBEZWZhdWx0S2V5TGVuZ3RoID0gNjtcblxuZnVuY3Rpb24gY3JlYXRlSGlzdG9yeSgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcbiAgdmFyIGdldEN1cnJlbnRMb2NhdGlvbiA9IG9wdGlvbnMuZ2V0Q3VycmVudExvY2F0aW9uO1xuICB2YXIgZmluaXNoVHJhbnNpdGlvbiA9IG9wdGlvbnMuZmluaXNoVHJhbnNpdGlvbjtcbiAgdmFyIHNhdmVTdGF0ZSA9IG9wdGlvbnMuc2F2ZVN0YXRlO1xuICB2YXIgZ28gPSBvcHRpb25zLmdvO1xuICB2YXIgZ2V0VXNlckNvbmZpcm1hdGlvbiA9IG9wdGlvbnMuZ2V0VXNlckNvbmZpcm1hdGlvbjtcbiAgdmFyIGtleUxlbmd0aCA9IG9wdGlvbnMua2V5TGVuZ3RoO1xuXG4gIGlmICh0eXBlb2Yga2V5TGVuZ3RoICE9PSAnbnVtYmVyJykga2V5TGVuZ3RoID0gRGVmYXVsdEtleUxlbmd0aDtcblxuICB2YXIgdHJhbnNpdGlvbkhvb2tzID0gW107XG5cbiAgZnVuY3Rpb24gbGlzdGVuQmVmb3JlKGhvb2spIHtcbiAgICB0cmFuc2l0aW9uSG9va3MucHVzaChob29rKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB0cmFuc2l0aW9uSG9va3MgPSB0cmFuc2l0aW9uSG9va3MuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtICE9PSBob29rO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBhbGxLZXlzID0gW107XG4gIHZhciBjaGFuZ2VMaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIGxvY2F0aW9uID0gdW5kZWZpbmVkO1xuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnQoKSB7XG4gICAgaWYgKHBlbmRpbmdMb2NhdGlvbiAmJiBwZW5kaW5nTG9jYXRpb24uYWN0aW9uID09PSBfQWN0aW9ucy5QT1ApIHtcbiAgICAgIHJldHVybiBhbGxLZXlzLmluZGV4T2YocGVuZGluZ0xvY2F0aW9uLmtleSk7XG4gICAgfSBlbHNlIGlmIChsb2NhdGlvbikge1xuICAgICAgcmV0dXJuIGFsbEtleXMuaW5kZXhPZihsb2NhdGlvbi5rZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlTG9jYXRpb24obmV3TG9jYXRpb24pIHtcbiAgICB2YXIgY3VycmVudCA9IGdldEN1cnJlbnQoKTtcblxuICAgIGxvY2F0aW9uID0gbmV3TG9jYXRpb247XG5cbiAgICBpZiAobG9jYXRpb24uYWN0aW9uID09PSBfQWN0aW9ucy5QVVNIKSB7XG4gICAgICBhbGxLZXlzID0gW10uY29uY2F0KGFsbEtleXMuc2xpY2UoMCwgY3VycmVudCArIDEpLCBbbG9jYXRpb24ua2V5XSk7XG4gICAgfSBlbHNlIGlmIChsb2NhdGlvbi5hY3Rpb24gPT09IF9BY3Rpb25zLlJFUExBQ0UpIHtcbiAgICAgIGFsbEtleXNbY3VycmVudF0gPSBsb2NhdGlvbi5rZXk7XG4gICAgfVxuXG4gICAgY2hhbmdlTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcihsb2NhdGlvbik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICBjaGFuZ2VMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICBpZiAobG9jYXRpb24pIHtcbiAgICAgIGxpc3RlbmVyKGxvY2F0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9sb2NhdGlvbiA9IGdldEN1cnJlbnRMb2NhdGlvbigpO1xuICAgICAgYWxsS2V5cyA9IFtfbG9jYXRpb24ua2V5XTtcbiAgICAgIHVwZGF0ZUxvY2F0aW9uKF9sb2NhdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNoYW5nZUxpc3RlbmVycyA9IGNoYW5nZUxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT09IGxpc3RlbmVyO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGNhbGxiYWNrKSB7XG4gICAgX0FzeW5jVXRpbHMubG9vcEFzeW5jKHRyYW5zaXRpb25Ib29rcy5sZW5ndGgsIGZ1bmN0aW9uIChpbmRleCwgbmV4dCwgZG9uZSkge1xuICAgICAgX3J1blRyYW5zaXRpb25Ib29rMlsnZGVmYXVsdCddKHRyYW5zaXRpb25Ib29rc1tpbmRleF0sIGxvY2F0aW9uLCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAgIGRvbmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICBpZiAoZ2V0VXNlckNvbmZpcm1hdGlvbiAmJiB0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZ2V0VXNlckNvbmZpcm1hdGlvbihtZXNzYWdlLCBmdW5jdGlvbiAob2spIHtcbiAgICAgICAgICBjYWxsYmFjayhvayAhPT0gZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKG1lc3NhZ2UgIT09IGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZhciBwZW5kaW5nTG9jYXRpb24gPSB1bmRlZmluZWQ7XG5cbiAgZnVuY3Rpb24gdHJhbnNpdGlvblRvKG5leHRMb2NhdGlvbikge1xuICAgIGlmIChsb2NhdGlvbiAmJiBsb2NhdGlvbnNBcmVFcXVhbChsb2NhdGlvbiwgbmV4dExvY2F0aW9uKSkgcmV0dXJuOyAvLyBOb3RoaW5nIHRvIGRvLlxuXG4gICAgcGVuZGluZ0xvY2F0aW9uID0gbmV4dExvY2F0aW9uO1xuXG4gICAgY29uZmlybVRyYW5zaXRpb25UbyhuZXh0TG9jYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKHBlbmRpbmdMb2NhdGlvbiAhPT0gbmV4dExvY2F0aW9uKSByZXR1cm47IC8vIFRyYW5zaXRpb24gd2FzIGludGVycnVwdGVkLlxuXG4gICAgICBpZiAob2spIHtcbiAgICAgICAgLy8gdHJlYXQgUFVTSCB0byBjdXJyZW50IHBhdGggbGlrZSBSRVBMQUNFIHRvIGJlIGNvbnNpc3RlbnQgd2l0aCBicm93c2Vyc1xuICAgICAgICBpZiAobmV4dExvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUFVTSCkge1xuICAgICAgICAgIHZhciBwcmV2UGF0aCA9IGNyZWF0ZVBhdGgobG9jYXRpb24pO1xuICAgICAgICAgIHZhciBuZXh0UGF0aCA9IGNyZWF0ZVBhdGgobmV4dExvY2F0aW9uKTtcblxuICAgICAgICAgIGlmIChuZXh0UGF0aCA9PT0gcHJldlBhdGggJiYgX2RlZXBFcXVhbDJbJ2RlZmF1bHQnXShsb2NhdGlvbi5zdGF0ZSwgbmV4dExvY2F0aW9uLnN0YXRlKSkgbmV4dExvY2F0aW9uLmFjdGlvbiA9IF9BY3Rpb25zLlJFUExBQ0U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmluaXNoVHJhbnNpdGlvbihuZXh0TG9jYXRpb24pICE9PSBmYWxzZSkgdXBkYXRlTG9jYXRpb24obmV4dExvY2F0aW9uKTtcbiAgICAgIH0gZWxzZSBpZiAobG9jYXRpb24gJiYgbmV4dExvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUE9QKSB7XG4gICAgICAgIHZhciBwcmV2SW5kZXggPSBhbGxLZXlzLmluZGV4T2YobG9jYXRpb24ua2V5KTtcbiAgICAgICAgdmFyIG5leHRJbmRleCA9IGFsbEtleXMuaW5kZXhPZihuZXh0TG9jYXRpb24ua2V5KTtcblxuICAgICAgICBpZiAocHJldkluZGV4ICE9PSAtMSAmJiBuZXh0SW5kZXggIT09IC0xKSBnbyhwcmV2SW5kZXggLSBuZXh0SW5kZXgpOyAvLyBSZXN0b3JlIHRoZSBVUkwuXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwdXNoKGxvY2F0aW9uKSB7XG4gICAgdHJhbnNpdGlvblRvKGNyZWF0ZUxvY2F0aW9uKGxvY2F0aW9uLCBfQWN0aW9ucy5QVVNILCBjcmVhdGVLZXkoKSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZShsb2NhdGlvbikge1xuICAgIHRyYW5zaXRpb25UbyhjcmVhdGVMb2NhdGlvbihsb2NhdGlvbiwgX0FjdGlvbnMuUkVQTEFDRSwgY3JlYXRlS2V5KCkpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICBnbygtMSk7XG4gIH1cblxuICBmdW5jdGlvbiBnb0ZvcndhcmQoKSB7XG4gICAgZ28oMSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVLZXkoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVJhbmRvbUtleShrZXlMZW5ndGgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUGF0aChsb2NhdGlvbikge1xuICAgIGlmIChsb2NhdGlvbiA9PSBudWxsIHx8IHR5cGVvZiBsb2NhdGlvbiA9PT0gJ3N0cmluZycpIHJldHVybiBsb2NhdGlvbjtcblxuICAgIHZhciBwYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIHZhciBzZWFyY2ggPSBsb2NhdGlvbi5zZWFyY2g7XG4gICAgdmFyIGhhc2ggPSBsb2NhdGlvbi5oYXNoO1xuXG4gICAgdmFyIHJlc3VsdCA9IHBhdGhuYW1lO1xuXG4gICAgaWYgKHNlYXJjaCkgcmVzdWx0ICs9IHNlYXJjaDtcblxuICAgIGlmIChoYXNoKSByZXN1bHQgKz0gaGFzaDtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVIcmVmKGxvY2F0aW9uKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVBhdGgobG9jYXRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24obG9jYXRpb24sIGFjdGlvbikge1xuICAgIHZhciBrZXkgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBjcmVhdGVLZXkoKSA6IGFyZ3VtZW50c1syXTtcblxuICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSAnb2JqZWN0Jykge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKGZhbHNlLCAnVGhlIHN0YXRlICgybmQpIGFyZ3VtZW50IHRvIGhpc3RvcnkuY3JlYXRlTG9jYXRpb24gaXMgZGVwcmVjYXRlZDsgdXNlIGEgJyArICdsb2NhdGlvbiBkZXNjcmlwdG9yIGluc3RlYWQnKSA6IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHR5cGVvZiBsb2NhdGlvbiA9PT0gJ3N0cmluZycpIGxvY2F0aW9uID0gX1BhdGhVdGlscy5wYXJzZVBhdGgobG9jYXRpb24pO1xuXG4gICAgICBsb2NhdGlvbiA9IF9leHRlbmRzKHt9LCBsb2NhdGlvbiwgeyBzdGF0ZTogYWN0aW9uIH0pO1xuXG4gICAgICBhY3Rpb24gPSBrZXk7XG4gICAgICBrZXkgPSBhcmd1bWVudHNbM10gfHwgY3JlYXRlS2V5KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9jcmVhdGVMb2NhdGlvbjNbJ2RlZmF1bHQnXShsb2NhdGlvbiwgYWN0aW9uLCBrZXkpO1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiBzZXRTdGF0ZShzdGF0ZSkge1xuICAgIGlmIChsb2NhdGlvbikge1xuICAgICAgdXBkYXRlTG9jYXRpb25TdGF0ZShsb2NhdGlvbiwgc3RhdGUpO1xuICAgICAgdXBkYXRlTG9jYXRpb24obG9jYXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cGRhdGVMb2NhdGlvblN0YXRlKGdldEN1cnJlbnRMb2NhdGlvbigpLCBzdGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlTG9jYXRpb25TdGF0ZShsb2NhdGlvbiwgc3RhdGUpIHtcbiAgICBsb2NhdGlvbi5zdGF0ZSA9IF9leHRlbmRzKHt9LCBsb2NhdGlvbi5zdGF0ZSwgc3RhdGUpO1xuICAgIHNhdmVTdGF0ZShsb2NhdGlvbi5rZXksIGxvY2F0aW9uLnN0YXRlKTtcbiAgfVxuXG4gIC8vIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gcmVnaXN0ZXJUcmFuc2l0aW9uSG9vayhob29rKSB7XG4gICAgaWYgKHRyYW5zaXRpb25Ib29rcy5pbmRleE9mKGhvb2spID09PSAtMSkgdHJhbnNpdGlvbkhvb2tzLnB1c2goaG9vayk7XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vayhob29rKSB7XG4gICAgdHJhbnNpdGlvbkhvb2tzID0gdHJhbnNpdGlvbkhvb2tzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0gIT09IGhvb2s7XG4gICAgfSk7XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHB1c2hTdGF0ZShzdGF0ZSwgcGF0aCkge1xuICAgIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHBhdGggPSBfUGF0aFV0aWxzLnBhcnNlUGF0aChwYXRoKTtcblxuICAgIHB1c2goX2V4dGVuZHMoeyBzdGF0ZTogc3RhdGUgfSwgcGF0aCkpO1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiByZXBsYWNlU3RhdGUoc3RhdGUsIHBhdGgpIHtcbiAgICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSBwYXRoID0gX1BhdGhVdGlscy5wYXJzZVBhdGgocGF0aCk7XG5cbiAgICByZXBsYWNlKF9leHRlbmRzKHsgc3RhdGU6IHN0YXRlIH0sIHBhdGgpKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGlzdGVuQmVmb3JlOiBsaXN0ZW5CZWZvcmUsXG4gICAgbGlzdGVuOiBsaXN0ZW4sXG4gICAgdHJhbnNpdGlvblRvOiB0cmFuc2l0aW9uVG8sXG4gICAgcHVzaDogcHVzaCxcbiAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgIGdvOiBnbyxcbiAgICBnb0JhY2s6IGdvQmFjayxcbiAgICBnb0ZvcndhcmQ6IGdvRm9yd2FyZCxcbiAgICBjcmVhdGVLZXk6IGNyZWF0ZUtleSxcbiAgICBjcmVhdGVQYXRoOiBjcmVhdGVQYXRoLFxuICAgIGNyZWF0ZUhyZWY6IGNyZWF0ZUhyZWYsXG4gICAgY3JlYXRlTG9jYXRpb246IGNyZWF0ZUxvY2F0aW9uLFxuXG4gICAgc2V0U3RhdGU6IF9kZXByZWNhdGUyWydkZWZhdWx0J10oc2V0U3RhdGUsICdzZXRTdGF0ZSBpcyBkZXByZWNhdGVkOyB1c2UgbG9jYXRpb24ua2V5IHRvIHNhdmUgc3RhdGUgaW5zdGVhZCcpLFxuICAgIHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2s6IF9kZXByZWNhdGUyWydkZWZhdWx0J10ocmVnaXN0ZXJUcmFuc2l0aW9uSG9vaywgJ3JlZ2lzdGVyVHJhbnNpdGlvbkhvb2sgaXMgZGVwcmVjYXRlZDsgdXNlIGxpc3RlbkJlZm9yZSBpbnN0ZWFkJyksXG4gICAgdW5yZWdpc3RlclRyYW5zaXRpb25Ib29rOiBfZGVwcmVjYXRlMlsnZGVmYXVsdCddKHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vaywgJ3VucmVnaXN0ZXJUcmFuc2l0aW9uSG9vayBpcyBkZXByZWNhdGVkOyB1c2UgdGhlIGNhbGxiYWNrIHJldHVybmVkIGZyb20gbGlzdGVuQmVmb3JlIGluc3RlYWQnKSxcbiAgICBwdXNoU3RhdGU6IF9kZXByZWNhdGUyWydkZWZhdWx0J10ocHVzaFN0YXRlLCAncHVzaFN0YXRlIGlzIGRlcHJlY2F0ZWQ7IHVzZSBwdXNoIGluc3RlYWQnKSxcbiAgICByZXBsYWNlU3RhdGU6IF9kZXByZWNhdGUyWydkZWZhdWx0J10ocmVwbGFjZVN0YXRlLCAncmVwbGFjZVN0YXRlIGlzIGRlcHJlY2F0ZWQ7IHVzZSByZXBsYWNlIGluc3RlYWQnKVxuICB9O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVIaXN0b3J5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX0FjdGlvbnMgPSByZXF1aXJlKCcuL0FjdGlvbnMnKTtcblxudmFyIF9QYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG5mdW5jdGlvbiBjcmVhdGVMb2NhdGlvbigpIHtcbiAgdmFyIGxvY2F0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gJy8nIDogYXJndW1lbnRzWzBdO1xuICB2YXIgYWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gX0FjdGlvbnMuUE9QIDogYXJndW1lbnRzWzFdO1xuICB2YXIga2V5ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1syXTtcblxuICB2YXIgX2ZvdXJ0aEFyZyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMyB8fCBhcmd1bWVudHNbM10gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbM107XG5cbiAgaWYgKHR5cGVvZiBsb2NhdGlvbiA9PT0gJ3N0cmluZycpIGxvY2F0aW9uID0gX1BhdGhVdGlscy5wYXJzZVBhdGgobG9jYXRpb24pO1xuXG4gIGlmICh0eXBlb2YgYWN0aW9uID09PSAnb2JqZWN0Jykge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgJ1RoZSBzdGF0ZSAoMm5kKSBhcmd1bWVudCB0byBjcmVhdGVMb2NhdGlvbiBpcyBkZXByZWNhdGVkOyB1c2UgYSAnICsgJ2xvY2F0aW9uIGRlc2NyaXB0b3IgaW5zdGVhZCcpIDogdW5kZWZpbmVkO1xuXG4gICAgbG9jYXRpb24gPSBfZXh0ZW5kcyh7fSwgbG9jYXRpb24sIHsgc3RhdGU6IGFjdGlvbiB9KTtcblxuICAgIGFjdGlvbiA9IGtleSB8fCBfQWN0aW9ucy5QT1A7XG4gICAga2V5ID0gX2ZvdXJ0aEFyZztcbiAgfVxuXG4gIHZhciBwYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lIHx8ICcvJztcbiAgdmFyIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaCB8fCAnJztcbiAgdmFyIGhhc2ggPSBsb2NhdGlvbi5oYXNoIHx8ICcnO1xuICB2YXIgc3RhdGUgPSBsb2NhdGlvbi5zdGF0ZSB8fCBudWxsO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWU6IHBhdGhuYW1lLFxuICAgIHNlYXJjaDogc2VhcmNoLFxuICAgIGhhc2g6IGhhc2gsXG4gICAgc3RhdGU6IHN0YXRlLFxuICAgIGFjdGlvbjogYWN0aW9uLFxuICAgIGtleToga2V5XG4gIH07XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZUxvY2F0aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX1BhdGhVdGlscyA9IHJlcXVpcmUoJy4vUGF0aFV0aWxzJyk7XG5cbnZhciBfQWN0aW9ucyA9IHJlcXVpcmUoJy4vQWN0aW9ucycpO1xuXG52YXIgX2NyZWF0ZUhpc3RvcnkgPSByZXF1aXJlKCcuL2NyZWF0ZUhpc3RvcnknKTtcblxudmFyIF9jcmVhdGVIaXN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUhpc3RvcnkpO1xuXG5mdW5jdGlvbiBjcmVhdGVTdGF0ZVN0b3JhZ2UoZW50cmllcykge1xuICByZXR1cm4gZW50cmllcy5maWx0ZXIoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgcmV0dXJuIGVudHJ5LnN0YXRlO1xuICB9KS5yZWR1Y2UoZnVuY3Rpb24gKG1lbW8sIGVudHJ5KSB7XG4gICAgbWVtb1tlbnRyeS5rZXldID0gZW50cnkuc3RhdGU7XG4gICAgcmV0dXJuIG1lbW87XG4gIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVtb3J5SGlzdG9yeSgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xuICAgIG9wdGlvbnMgPSB7IGVudHJpZXM6IG9wdGlvbnMgfTtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICBvcHRpb25zID0geyBlbnRyaWVzOiBbb3B0aW9uc10gfTtcbiAgfVxuXG4gIHZhciBoaXN0b3J5ID0gX2NyZWF0ZUhpc3RvcnkyWydkZWZhdWx0J10oX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICBnZXRDdXJyZW50TG9jYXRpb246IGdldEN1cnJlbnRMb2NhdGlvbixcbiAgICBmaW5pc2hUcmFuc2l0aW9uOiBmaW5pc2hUcmFuc2l0aW9uLFxuICAgIHNhdmVTdGF0ZTogc2F2ZVN0YXRlLFxuICAgIGdvOiBnb1xuICB9KSk7XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucztcbiAgdmFyIGVudHJpZXMgPSBfb3B0aW9ucy5lbnRyaWVzO1xuICB2YXIgY3VycmVudCA9IF9vcHRpb25zLmN1cnJlbnQ7XG5cbiAgaWYgKHR5cGVvZiBlbnRyaWVzID09PSAnc3RyaW5nJykge1xuICAgIGVudHJpZXMgPSBbZW50cmllc107XG4gIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkoZW50cmllcykpIHtcbiAgICBlbnRyaWVzID0gWycvJ107XG4gIH1cblxuICBlbnRyaWVzID0gZW50cmllcy5tYXAoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgdmFyIGtleSA9IGhpc3RvcnkuY3JlYXRlS2V5KCk7XG5cbiAgICBpZiAodHlwZW9mIGVudHJ5ID09PSAnc3RyaW5nJykgcmV0dXJuIHsgcGF0aG5hbWU6IGVudHJ5LCBrZXk6IGtleSB9O1xuXG4gICAgaWYgKHR5cGVvZiBlbnRyeSA9PT0gJ29iamVjdCcgJiYgZW50cnkpIHJldHVybiBfZXh0ZW5kcyh7fSwgZW50cnksIHsga2V5OiBrZXkgfSk7XG5cbiAgICAhZmFsc2UgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSwgJ1VuYWJsZSB0byBjcmVhdGUgaGlzdG9yeSBlbnRyeSBmcm9tICVzJywgZW50cnkpIDogX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSkgOiB1bmRlZmluZWQ7XG4gIH0pO1xuXG4gIGlmIChjdXJyZW50ID09IG51bGwpIHtcbiAgICBjdXJyZW50ID0gZW50cmllcy5sZW5ndGggLSAxO1xuICB9IGVsc2Uge1xuICAgICEoY3VycmVudCA+PSAwICYmIGN1cnJlbnQgPCBlbnRyaWVzLmxlbmd0aCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSwgJ0N1cnJlbnQgaW5kZXggbXVzdCBiZSA+PSAwIGFuZCA8ICVzLCB3YXMgJXMnLCBlbnRyaWVzLmxlbmd0aCwgY3VycmVudCkgOiBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlKSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHZhciBzdG9yYWdlID0gY3JlYXRlU3RhdGVTdG9yYWdlKGVudHJpZXMpO1xuXG4gIGZ1bmN0aW9uIHNhdmVTdGF0ZShrZXksIHN0YXRlKSB7XG4gICAgc3RvcmFnZVtrZXldID0gc3RhdGU7XG4gIH1cblxuICBmdW5jdGlvbiByZWFkU3RhdGUoa2V5KSB7XG4gICAgcmV0dXJuIHN0b3JhZ2Vba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRMb2NhdGlvbigpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2N1cnJlbnRdO1xuICAgIHZhciBiYXNlbmFtZSA9IGVudHJ5LmJhc2VuYW1lO1xuICAgIHZhciBwYXRobmFtZSA9IGVudHJ5LnBhdGhuYW1lO1xuICAgIHZhciBzZWFyY2ggPSBlbnRyeS5zZWFyY2g7XG5cbiAgICB2YXIgcGF0aCA9IChiYXNlbmFtZSB8fCAnJykgKyBwYXRobmFtZSArIChzZWFyY2ggfHwgJycpO1xuXG4gICAgdmFyIGtleSA9IHVuZGVmaW5lZCxcbiAgICAgICAgc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGVudHJ5LmtleSkge1xuICAgICAga2V5ID0gZW50cnkua2V5O1xuICAgICAgc3RhdGUgPSByZWFkU3RhdGUoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAga2V5ID0gaGlzdG9yeS5jcmVhdGVLZXkoKTtcbiAgICAgIHN0YXRlID0gbnVsbDtcbiAgICAgIGVudHJ5LmtleSA9IGtleTtcbiAgICB9XG5cbiAgICB2YXIgbG9jYXRpb24gPSBfUGF0aFV0aWxzLnBhcnNlUGF0aChwYXRoKTtcblxuICAgIHJldHVybiBoaXN0b3J5LmNyZWF0ZUxvY2F0aW9uKF9leHRlbmRzKHt9LCBsb2NhdGlvbiwgeyBzdGF0ZTogc3RhdGUgfSksIHVuZGVmaW5lZCwga2V5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbkdvKG4pIHtcbiAgICB2YXIgaW5kZXggPSBjdXJyZW50ICsgbjtcbiAgICByZXR1cm4gaW5kZXggPj0gMCAmJiBpbmRleCA8IGVudHJpZXMubGVuZ3RoO1xuICB9XG5cbiAgZnVuY3Rpb24gZ28obikge1xuICAgIGlmIChuKSB7XG4gICAgICBpZiAoIWNhbkdvKG4pKSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgJ0Nhbm5vdCBnbyglcykgdGhlcmUgaXMgbm90IGVub3VnaCBoaXN0b3J5JywgbikgOiB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY3VycmVudCArPSBuO1xuXG4gICAgICB2YXIgY3VycmVudExvY2F0aW9uID0gZ2V0Q3VycmVudExvY2F0aW9uKCk7XG5cbiAgICAgIC8vIGNoYW5nZSBhY3Rpb24gdG8gUE9QXG4gICAgICBoaXN0b3J5LnRyYW5zaXRpb25UbyhfZXh0ZW5kcyh7fSwgY3VycmVudExvY2F0aW9uLCB7IGFjdGlvbjogX0FjdGlvbnMuUE9QIH0pKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmaW5pc2hUcmFuc2l0aW9uKGxvY2F0aW9uKSB7XG4gICAgc3dpdGNoIChsb2NhdGlvbi5hY3Rpb24pIHtcbiAgICAgIGNhc2UgX0FjdGlvbnMuUFVTSDpcbiAgICAgICAgY3VycmVudCArPSAxO1xuXG4gICAgICAgIC8vIGlmIHdlIGFyZSBub3Qgb24gdGhlIHRvcCBvZiBzdGFja1xuICAgICAgICAvLyByZW1vdmUgcmVzdCBhbmQgcHVzaCBuZXdcbiAgICAgICAgaWYgKGN1cnJlbnQgPCBlbnRyaWVzLmxlbmd0aCkgZW50cmllcy5zcGxpY2UoY3VycmVudCk7XG5cbiAgICAgICAgZW50cmllcy5wdXNoKGxvY2F0aW9uKTtcbiAgICAgICAgc2F2ZVN0YXRlKGxvY2F0aW9uLmtleSwgbG9jYXRpb24uc3RhdGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgX0FjdGlvbnMuUkVQTEFDRTpcbiAgICAgICAgZW50cmllc1tjdXJyZW50XSA9IGxvY2F0aW9uO1xuICAgICAgICBzYXZlU3RhdGUobG9jYXRpb24ua2V5LCBsb2NhdGlvbi5zdGF0ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBoaXN0b3J5O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVNZW1vcnlIaXN0b3J5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBkZXByZWNhdGUoZm4sIG1lc3NhZ2UpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3dhcm5pbmcyWydkZWZhdWx0J10oZmFsc2UsICdbaGlzdG9yeV0gJyArIG1lc3NhZ2UpIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBkZXByZWNhdGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIHJ1blRyYW5zaXRpb25Ib29rKGhvb2ssIGxvY2F0aW9uLCBjYWxsYmFjaykge1xuICB2YXIgcmVzdWx0ID0gaG9vayhsb2NhdGlvbiwgY2FsbGJhY2spO1xuXG4gIGlmIChob29rLmxlbmd0aCA8IDIpIHtcbiAgICAvLyBBc3N1bWUgdGhlIGhvb2sgcnVucyBzeW5jaHJvbm91c2x5IGFuZCBhdXRvbWF0aWNhbGx5XG4gICAgLy8gY2FsbCB0aGUgY2FsbGJhY2sgd2l0aCB0aGUgcmV0dXJuIHZhbHVlLlxuICAgIGNhbGxiYWNrKHJlc3VsdCk7XG4gIH0gZWxzZSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKHJlc3VsdCA9PT0gdW5kZWZpbmVkLCAnWW91IHNob3VsZCBub3QgXCJyZXR1cm5cIiBpbiBhIHRyYW5zaXRpb24gaG9vayB3aXRoIGEgY2FsbGJhY2sgYXJndW1lbnQ7IGNhbGwgdGhlIGNhbGxiYWNrIGluc3RlYWQnKSA6IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBydW5UcmFuc2l0aW9uSG9vaztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9FeGVjdXRpb25FbnZpcm9ubWVudCA9IHJlcXVpcmUoJy4vRXhlY3V0aW9uRW52aXJvbm1lbnQnKTtcblxudmFyIF9QYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG52YXIgX3J1blRyYW5zaXRpb25Ib29rID0gcmVxdWlyZSgnLi9ydW5UcmFuc2l0aW9uSG9vaycpO1xuXG52YXIgX3J1blRyYW5zaXRpb25Ib29rMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3J1blRyYW5zaXRpb25Ib29rKTtcblxudmFyIF9kZXByZWNhdGUgPSByZXF1aXJlKCcuL2RlcHJlY2F0ZScpO1xuXG52YXIgX2RlcHJlY2F0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZXByZWNhdGUpO1xuXG5mdW5jdGlvbiB1c2VCYXNlbmFtZShjcmVhdGVIaXN0b3J5KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuICAgIHZhciBoaXN0b3J5ID0gY3JlYXRlSGlzdG9yeShvcHRpb25zKTtcblxuICAgIHZhciBiYXNlbmFtZSA9IG9wdGlvbnMuYmFzZW5hbWU7XG5cbiAgICB2YXIgY2hlY2tlZEJhc2VIcmVmID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBjaGVja0Jhc2VIcmVmKCkge1xuICAgICAgaWYgKGNoZWNrZWRCYXNlSHJlZikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEF1dG9tYXRpY2FsbHkgdXNlIHRoZSB2YWx1ZSBvZiA8YmFzZSBocmVmPiBpbiBIVE1MXG4gICAgICAvLyBkb2N1bWVudHMgYXMgYmFzZW5hbWUgaWYgaXQncyBub3QgZXhwbGljaXRseSBnaXZlbi5cbiAgICAgIGlmIChiYXNlbmFtZSA9PSBudWxsICYmIF9FeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00pIHtcbiAgICAgICAgdmFyIGJhc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYmFzZScpWzBdO1xuICAgICAgICB2YXIgYmFzZUhyZWYgPSBiYXNlICYmIGJhc2UuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG5cbiAgICAgICAgaWYgKGJhc2VIcmVmICE9IG51bGwpIHtcbiAgICAgICAgICBiYXNlbmFtZSA9IGJhc2VIcmVmO1xuXG4gICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKGZhbHNlLCAnQXV0b21hdGljYWxseSBzZXR0aW5nIGJhc2VuYW1lIHVzaW5nIDxiYXNlIGhyZWY+IGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgJyArICdiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UuIFRoZSBzZW1hbnRpY3Mgb2YgPGJhc2UgaHJlZj4gYXJlICcgKyAnc3VidGx5IGRpZmZlcmVudCBmcm9tIGJhc2VuYW1lLiBQbGVhc2UgcGFzcyB0aGUgYmFzZW5hbWUgZXhwbGljaXRseSBpbiAnICsgJ3RoZSBvcHRpb25zIHRvIGNyZWF0ZUhpc3RvcnknKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjaGVja2VkQmFzZUhyZWYgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZEJhc2VuYW1lKGxvY2F0aW9uKSB7XG4gICAgICBjaGVja0Jhc2VIcmVmKCk7XG5cbiAgICAgIGlmIChiYXNlbmFtZSAmJiBsb2NhdGlvbi5iYXNlbmFtZSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKGJhc2VuYW1lKSA9PT0gMCkge1xuICAgICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWUuc3Vic3RyaW5nKGJhc2VuYW1lLmxlbmd0aCk7XG4gICAgICAgICAgbG9jYXRpb24uYmFzZW5hbWUgPSBiYXNlbmFtZTtcblxuICAgICAgICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gJycpIGxvY2F0aW9uLnBhdGhuYW1lID0gJy8nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxvY2F0aW9uLmJhc2VuYW1lID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxvY2F0aW9uO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByZXBlbmRCYXNlbmFtZShsb2NhdGlvbikge1xuICAgICAgY2hlY2tCYXNlSHJlZigpO1xuXG4gICAgICBpZiAoIWJhc2VuYW1lKSByZXR1cm4gbG9jYXRpb247XG5cbiAgICAgIGlmICh0eXBlb2YgbG9jYXRpb24gPT09ICdzdHJpbmcnKSBsb2NhdGlvbiA9IF9QYXRoVXRpbHMucGFyc2VQYXRoKGxvY2F0aW9uKTtcblxuICAgICAgdmFyIHBuYW1lID0gbG9jYXRpb24ucGF0aG5hbWU7XG4gICAgICB2YXIgbm9ybWFsaXplZEJhc2VuYW1lID0gYmFzZW5hbWUuc2xpY2UoLTEpID09PSAnLycgPyBiYXNlbmFtZSA6IGJhc2VuYW1lICsgJy8nO1xuICAgICAgdmFyIG5vcm1hbGl6ZWRQYXRobmFtZSA9IHBuYW1lLmNoYXJBdCgwKSA9PT0gJy8nID8gcG5hbWUuc2xpY2UoMSkgOiBwbmFtZTtcbiAgICAgIHZhciBwYXRobmFtZSA9IG5vcm1hbGl6ZWRCYXNlbmFtZSArIG5vcm1hbGl6ZWRQYXRobmFtZTtcblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBsb2NhdGlvbiwge1xuICAgICAgICBwYXRobmFtZTogcGF0aG5hbWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE92ZXJyaWRlIGFsbCByZWFkIG1ldGhvZHMgd2l0aCBiYXNlbmFtZS1hd2FyZSB2ZXJzaW9ucy5cbiAgICBmdW5jdGlvbiBsaXN0ZW5CZWZvcmUoaG9vaykge1xuICAgICAgcmV0dXJuIGhpc3RvcnkubGlzdGVuQmVmb3JlKGZ1bmN0aW9uIChsb2NhdGlvbiwgY2FsbGJhY2spIHtcbiAgICAgICAgX3J1blRyYW5zaXRpb25Ib29rMlsnZGVmYXVsdCddKGhvb2ssIGFkZEJhc2VuYW1lKGxvY2F0aW9uKSwgY2FsbGJhY2spO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gaGlzdG9yeS5saXN0ZW4oZnVuY3Rpb24gKGxvY2F0aW9uKSB7XG4gICAgICAgIGxpc3RlbmVyKGFkZEJhc2VuYW1lKGxvY2F0aW9uKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBPdmVycmlkZSBhbGwgd3JpdGUgbWV0aG9kcyB3aXRoIGJhc2VuYW1lLWF3YXJlIHZlcnNpb25zLlxuICAgIGZ1bmN0aW9uIHB1c2gobG9jYXRpb24pIHtcbiAgICAgIGhpc3RvcnkucHVzaChwcmVwZW5kQmFzZW5hbWUobG9jYXRpb24pKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBsYWNlKGxvY2F0aW9uKSB7XG4gICAgICBoaXN0b3J5LnJlcGxhY2UocHJlcGVuZEJhc2VuYW1lKGxvY2F0aW9uKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlUGF0aChsb2NhdGlvbikge1xuICAgICAgcmV0dXJuIGhpc3RvcnkuY3JlYXRlUGF0aChwcmVwZW5kQmFzZW5hbWUobG9jYXRpb24pKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVIcmVmKGxvY2F0aW9uKSB7XG4gICAgICByZXR1cm4gaGlzdG9yeS5jcmVhdGVIcmVmKHByZXBlbmRCYXNlbmFtZShsb2NhdGlvbikpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKGxvY2F0aW9uKSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhZGRCYXNlbmFtZShoaXN0b3J5LmNyZWF0ZUxvY2F0aW9uLmFwcGx5KGhpc3RvcnksIFtwcmVwZW5kQmFzZW5hbWUobG9jYXRpb24pXS5jb25jYXQoYXJncykpKTtcbiAgICB9XG5cbiAgICAvLyBkZXByZWNhdGVkXG4gICAgZnVuY3Rpb24gcHVzaFN0YXRlKHN0YXRlLCBwYXRoKSB7XG4gICAgICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSBwYXRoID0gX1BhdGhVdGlscy5wYXJzZVBhdGgocGF0aCk7XG5cbiAgICAgIHB1c2goX2V4dGVuZHMoeyBzdGF0ZTogc3RhdGUgfSwgcGF0aCkpO1xuICAgIH1cblxuICAgIC8vIGRlcHJlY2F0ZWRcbiAgICBmdW5jdGlvbiByZXBsYWNlU3RhdGUoc3RhdGUsIHBhdGgpIHtcbiAgICAgIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHBhdGggPSBfUGF0aFV0aWxzLnBhcnNlUGF0aChwYXRoKTtcblxuICAgICAgcmVwbGFjZShfZXh0ZW5kcyh7IHN0YXRlOiBzdGF0ZSB9LCBwYXRoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBoaXN0b3J5LCB7XG4gICAgICBsaXN0ZW5CZWZvcmU6IGxpc3RlbkJlZm9yZSxcbiAgICAgIGxpc3RlbjogbGlzdGVuLFxuICAgICAgcHVzaDogcHVzaCxcbiAgICAgIHJlcGxhY2U6IHJlcGxhY2UsXG4gICAgICBjcmVhdGVQYXRoOiBjcmVhdGVQYXRoLFxuICAgICAgY3JlYXRlSHJlZjogY3JlYXRlSHJlZixcbiAgICAgIGNyZWF0ZUxvY2F0aW9uOiBjcmVhdGVMb2NhdGlvbixcblxuICAgICAgcHVzaFN0YXRlOiBfZGVwcmVjYXRlMlsnZGVmYXVsdCddKHB1c2hTdGF0ZSwgJ3B1c2hTdGF0ZSBpcyBkZXByZWNhdGVkOyB1c2UgcHVzaCBpbnN0ZWFkJyksXG4gICAgICByZXBsYWNlU3RhdGU6IF9kZXByZWNhdGUyWydkZWZhdWx0J10ocmVwbGFjZVN0YXRlLCAncmVwbGFjZVN0YXRlIGlzIGRlcHJlY2F0ZWQ7IHVzZSByZXBsYWNlIGluc3RlYWQnKVxuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSB1c2VCYXNlbmFtZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9xdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuXG52YXIgX3J1blRyYW5zaXRpb25Ib29rID0gcmVxdWlyZSgnLi9ydW5UcmFuc2l0aW9uSG9vaycpO1xuXG52YXIgX3J1blRyYW5zaXRpb25Ib29rMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3J1blRyYW5zaXRpb25Ib29rKTtcblxudmFyIF9QYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG52YXIgX2RlcHJlY2F0ZSA9IHJlcXVpcmUoJy4vZGVwcmVjYXRlJyk7XG5cbnZhciBfZGVwcmVjYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlcHJlY2F0ZSk7XG5cbnZhciBTRUFSQ0hfQkFTRV9LRVkgPSAnJHNlYXJjaEJhc2UnO1xuXG5mdW5jdGlvbiBkZWZhdWx0U3RyaW5naWZ5UXVlcnkocXVlcnkpIHtcbiAgcmV0dXJuIF9xdWVyeVN0cmluZy5zdHJpbmdpZnkocXVlcnkpLnJlcGxhY2UoLyUyMC9nLCAnKycpO1xufVxuXG52YXIgZGVmYXVsdFBhcnNlUXVlcnlTdHJpbmcgPSBfcXVlcnlTdHJpbmcucGFyc2U7XG5cbmZ1bmN0aW9uIGlzTmVzdGVkT2JqZWN0KG9iamVjdCkge1xuICBmb3IgKHZhciBwIGluIG9iamVjdCkge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwKSAmJiB0eXBlb2Ygb2JqZWN0W3BdID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShvYmplY3RbcF0pICYmIG9iamVjdFtwXSAhPT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gIH1yZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBjcmVhdGVIaXN0b3J5IGZ1bmN0aW9uIHRoYXQgbWF5IGJlIHVzZWQgdG8gY3JlYXRlXG4gKiBoaXN0b3J5IG9iamVjdHMgdGhhdCBrbm93IGhvdyB0byBoYW5kbGUgVVJMIHF1ZXJpZXMuXG4gKi9cbmZ1bmN0aW9uIHVzZVF1ZXJpZXMoY3JlYXRlSGlzdG9yeSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgICB2YXIgaGlzdG9yeSA9IGNyZWF0ZUhpc3Rvcnkob3B0aW9ucyk7XG5cbiAgICB2YXIgc3RyaW5naWZ5UXVlcnkgPSBvcHRpb25zLnN0cmluZ2lmeVF1ZXJ5O1xuICAgIHZhciBwYXJzZVF1ZXJ5U3RyaW5nID0gb3B0aW9ucy5wYXJzZVF1ZXJ5U3RyaW5nO1xuXG4gICAgaWYgKHR5cGVvZiBzdHJpbmdpZnlRdWVyeSAhPT0gJ2Z1bmN0aW9uJykgc3RyaW5naWZ5UXVlcnkgPSBkZWZhdWx0U3RyaW5naWZ5UXVlcnk7XG5cbiAgICBpZiAodHlwZW9mIHBhcnNlUXVlcnlTdHJpbmcgIT09ICdmdW5jdGlvbicpIHBhcnNlUXVlcnlTdHJpbmcgPSBkZWZhdWx0UGFyc2VRdWVyeVN0cmluZztcblxuICAgIGZ1bmN0aW9uIGFkZFF1ZXJ5KGxvY2F0aW9uKSB7XG4gICAgICBpZiAobG9jYXRpb24ucXVlcnkgPT0gbnVsbCkge1xuICAgICAgICB2YXIgc2VhcmNoID0gbG9jYXRpb24uc2VhcmNoO1xuXG4gICAgICAgIGxvY2F0aW9uLnF1ZXJ5ID0gcGFyc2VRdWVyeVN0cmluZyhzZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgICAgICAgbG9jYXRpb25bU0VBUkNIX0JBU0VfS0VZXSA9IHsgc2VhcmNoOiBzZWFyY2gsIHNlYXJjaEJhc2U6ICcnIH07XG4gICAgICB9XG5cbiAgICAgIC8vIFRPRE86IEluc3RlYWQgb2YgYWxsIHRoZSBib29rLWtlZXBpbmcgaGVyZSwgdGhpcyBzaG91bGQganVzdCBzdHJpcCB0aGVcbiAgICAgIC8vIHN0cmluZ2lmaWVkIHF1ZXJ5IGZyb20gdGhlIHNlYXJjaC5cblxuICAgICAgcmV0dXJuIGxvY2F0aW9uO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGVuZFF1ZXJ5KGxvY2F0aW9uLCBxdWVyeSkge1xuICAgICAgdmFyIF9leHRlbmRzMjtcblxuICAgICAgdmFyIHNlYXJjaEJhc2VTcGVjID0gbG9jYXRpb25bU0VBUkNIX0JBU0VfS0VZXTtcbiAgICAgIHZhciBxdWVyeVN0cmluZyA9IHF1ZXJ5ID8gc3RyaW5naWZ5UXVlcnkocXVlcnkpIDogJyc7XG4gICAgICBpZiAoIXNlYXJjaEJhc2VTcGVjICYmICFxdWVyeVN0cmluZykge1xuICAgICAgICByZXR1cm4gbG9jYXRpb247XG4gICAgICB9XG5cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShzdHJpbmdpZnlRdWVyeSAhPT0gZGVmYXVsdFN0cmluZ2lmeVF1ZXJ5IHx8ICFpc05lc3RlZE9iamVjdChxdWVyeSksICd1c2VRdWVyaWVzIGRvZXMgbm90IHN0cmluZ2lmeSBuZXN0ZWQgcXVlcnkgb2JqZWN0cyBieSBkZWZhdWx0OyAnICsgJ3VzZSBhIGN1c3RvbSBzdHJpbmdpZnlRdWVyeSBmdW5jdGlvbicpIDogdW5kZWZpbmVkO1xuXG4gICAgICBpZiAodHlwZW9mIGxvY2F0aW9uID09PSAnc3RyaW5nJykgbG9jYXRpb24gPSBfUGF0aFV0aWxzLnBhcnNlUGF0aChsb2NhdGlvbik7XG5cbiAgICAgIHZhciBzZWFyY2hCYXNlID0gdW5kZWZpbmVkO1xuICAgICAgaWYgKHNlYXJjaEJhc2VTcGVjICYmIGxvY2F0aW9uLnNlYXJjaCA9PT0gc2VhcmNoQmFzZVNwZWMuc2VhcmNoKSB7XG4gICAgICAgIHNlYXJjaEJhc2UgPSBzZWFyY2hCYXNlU3BlYy5zZWFyY2hCYXNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VhcmNoQmFzZSA9IGxvY2F0aW9uLnNlYXJjaCB8fCAnJztcbiAgICAgIH1cblxuICAgICAgdmFyIHNlYXJjaCA9IHNlYXJjaEJhc2U7XG4gICAgICBpZiAocXVlcnlTdHJpbmcpIHtcbiAgICAgICAgc2VhcmNoICs9IChzZWFyY2ggPyAnJicgOiAnPycpICsgcXVlcnlTdHJpbmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgbG9jYXRpb24sIChfZXh0ZW5kczIgPSB7XG4gICAgICAgIHNlYXJjaDogc2VhcmNoXG4gICAgICB9LCBfZXh0ZW5kczJbU0VBUkNIX0JBU0VfS0VZXSA9IHsgc2VhcmNoOiBzZWFyY2gsIHNlYXJjaEJhc2U6IHNlYXJjaEJhc2UgfSwgX2V4dGVuZHMyKSk7XG4gICAgfVxuXG4gICAgLy8gT3ZlcnJpZGUgYWxsIHJlYWQgbWV0aG9kcyB3aXRoIHF1ZXJ5LWF3YXJlIHZlcnNpb25zLlxuICAgIGZ1bmN0aW9uIGxpc3RlbkJlZm9yZShob29rKSB7XG4gICAgICByZXR1cm4gaGlzdG9yeS5saXN0ZW5CZWZvcmUoZnVuY3Rpb24gKGxvY2F0aW9uLCBjYWxsYmFjaykge1xuICAgICAgICBfcnVuVHJhbnNpdGlvbkhvb2syWydkZWZhdWx0J10oaG9vaywgYWRkUXVlcnkobG9jYXRpb24pLCBjYWxsYmFjayk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBoaXN0b3J5Lmxpc3RlbihmdW5jdGlvbiAobG9jYXRpb24pIHtcbiAgICAgICAgbGlzdGVuZXIoYWRkUXVlcnkobG9jYXRpb24pKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE92ZXJyaWRlIGFsbCB3cml0ZSBtZXRob2RzIHdpdGggcXVlcnktYXdhcmUgdmVyc2lvbnMuXG4gICAgZnVuY3Rpb24gcHVzaChsb2NhdGlvbikge1xuICAgICAgaGlzdG9yeS5wdXNoKGFwcGVuZFF1ZXJ5KGxvY2F0aW9uLCBsb2NhdGlvbi5xdWVyeSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcGxhY2UobG9jYXRpb24pIHtcbiAgICAgIGhpc3RvcnkucmVwbGFjZShhcHBlbmRRdWVyeShsb2NhdGlvbiwgbG9jYXRpb24ucXVlcnkpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQYXRoKGxvY2F0aW9uLCBxdWVyeSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKCFxdWVyeSwgJ3RoZSBxdWVyeSBhcmd1bWVudCB0byBjcmVhdGVQYXRoIGlzIGRlcHJlY2F0ZWQ7IHVzZSBhIGxvY2F0aW9uIGRlc2NyaXB0b3IgaW5zdGVhZCcpIDogdW5kZWZpbmVkO1xuXG4gICAgICByZXR1cm4gaGlzdG9yeS5jcmVhdGVQYXRoKGFwcGVuZFF1ZXJ5KGxvY2F0aW9uLCBxdWVyeSB8fCBsb2NhdGlvbi5xdWVyeSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUhyZWYobG9jYXRpb24sIHF1ZXJ5KSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3dhcm5pbmcyWydkZWZhdWx0J10oIXF1ZXJ5LCAndGhlIHF1ZXJ5IGFyZ3VtZW50IHRvIGNyZWF0ZUhyZWYgaXMgZGVwcmVjYXRlZDsgdXNlIGEgbG9jYXRpb24gZGVzY3JpcHRvciBpbnN0ZWFkJykgOiB1bmRlZmluZWQ7XG5cbiAgICAgIHJldHVybiBoaXN0b3J5LmNyZWF0ZUhyZWYoYXBwZW5kUXVlcnkobG9jYXRpb24sIHF1ZXJ5IHx8IGxvY2F0aW9uLnF1ZXJ5KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24obG9jYXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZ1bGxMb2NhdGlvbiA9IGhpc3RvcnkuY3JlYXRlTG9jYXRpb24uYXBwbHkoaGlzdG9yeSwgW2FwcGVuZFF1ZXJ5KGxvY2F0aW9uLCBsb2NhdGlvbi5xdWVyeSldLmNvbmNhdChhcmdzKSk7XG4gICAgICBpZiAobG9jYXRpb24ucXVlcnkpIHtcbiAgICAgICAgZnVsbExvY2F0aW9uLnF1ZXJ5ID0gbG9jYXRpb24ucXVlcnk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWRkUXVlcnkoZnVsbExvY2F0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBkZXByZWNhdGVkXG4gICAgZnVuY3Rpb24gcHVzaFN0YXRlKHN0YXRlLCBwYXRoLCBxdWVyeSkge1xuICAgICAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykgcGF0aCA9IF9QYXRoVXRpbHMucGFyc2VQYXRoKHBhdGgpO1xuXG4gICAgICBwdXNoKF9leHRlbmRzKHsgc3RhdGU6IHN0YXRlIH0sIHBhdGgsIHsgcXVlcnk6IHF1ZXJ5IH0pKTtcbiAgICB9XG5cbiAgICAvLyBkZXByZWNhdGVkXG4gICAgZnVuY3Rpb24gcmVwbGFjZVN0YXRlKHN0YXRlLCBwYXRoLCBxdWVyeSkge1xuICAgICAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykgcGF0aCA9IF9QYXRoVXRpbHMucGFyc2VQYXRoKHBhdGgpO1xuXG4gICAgICByZXBsYWNlKF9leHRlbmRzKHsgc3RhdGU6IHN0YXRlIH0sIHBhdGgsIHsgcXVlcnk6IHF1ZXJ5IH0pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIGhpc3RvcnksIHtcbiAgICAgIGxpc3RlbkJlZm9yZTogbGlzdGVuQmVmb3JlLFxuICAgICAgbGlzdGVuOiBsaXN0ZW4sXG4gICAgICBwdXNoOiBwdXNoLFxuICAgICAgcmVwbGFjZTogcmVwbGFjZSxcbiAgICAgIGNyZWF0ZVBhdGg6IGNyZWF0ZVBhdGgsXG4gICAgICBjcmVhdGVIcmVmOiBjcmVhdGVIcmVmLFxuICAgICAgY3JlYXRlTG9jYXRpb246IGNyZWF0ZUxvY2F0aW9uLFxuXG4gICAgICBwdXNoU3RhdGU6IF9kZXByZWNhdGUyWydkZWZhdWx0J10ocHVzaFN0YXRlLCAncHVzaFN0YXRlIGlzIGRlcHJlY2F0ZWQ7IHVzZSBwdXNoIGluc3RlYWQnKSxcbiAgICAgIHJlcGxhY2VTdGF0ZTogX2RlcHJlY2F0ZTJbJ2RlZmF1bHQnXShyZXBsYWNlU3RhdGUsICdyZXBsYWNlU3RhdGUgaXMgZGVwcmVjYXRlZDsgdXNlIHJlcGxhY2UgaW5zdGVhZCcpXG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHVzZVF1ZXJpZXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAyID8gbGVuIC0gMiA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDI7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMl0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICtcbiAgICAgICAgJ21lc3NhZ2UgYXJndW1lbnQnXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQubGVuZ3RoIDwgMTAgfHwgKC9eW3NcXFddKiQvKS50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1RoZSB3YXJuaW5nIGZvcm1hdCBzaG91bGQgYmUgYWJsZSB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzICcgK1xuICAgICAgICAnd2FybmluZy4gUGxlYXNlLCB1c2UgYSBtb3JlIGRlc2NyaXB0aXZlIGZvcm1hdCB0aGFuOiAnICsgZm9ybWF0XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgIH0gY2F0Y2goeCkge31cbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTUsIFlhaG9vISBJbmMuXG4gKiBDb3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuIFNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gICAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gICAgY29udGV4dFR5cGVzOiB0cnVlLFxuICAgIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gICAgbWl4aW5zOiB0cnVlLFxuICAgIHByb3BUeXBlczogdHJ1ZSxcbiAgICB0eXBlOiB0cnVlXG59O1xuXG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgICBuYW1lOiB0cnVlLFxuICAgIGxlbmd0aDogdHJ1ZSxcbiAgICBwcm90b3R5cGU6IHRydWUsXG4gICAgY2FsbGVyOiB0cnVlLFxuICAgIGFyZ3VtZW50czogdHJ1ZSxcbiAgICBhcml0eTogdHJ1ZVxufTtcblxudmFyIGlzR2V0T3duUHJvcGVydHlTeW1ib2xzQXZhaWxhYmxlID0gdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbic7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQsIGN1c3RvbVN0YXRpY3MpIHtcbiAgICBpZiAodHlwZW9mIHNvdXJjZUNvbXBvbmVudCAhPT0gJ3N0cmluZycpIHsgLy8gZG9uJ3QgaG9pc3Qgb3ZlciBzdHJpbmcgKGh0bWwpIGNvbXBvbmVudHNcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgIGlmIChpc0dldE93blByb3BlcnR5U3ltYm9sc0F2YWlsYWJsZSkge1xuICAgICAgICAgICAga2V5cyA9IGtleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmICghUkVBQ1RfU1RBVElDU1trZXlzW2ldXSAmJiAhS05PV05fU1RBVElDU1trZXlzW2ldXSAmJiAoIWN1c3RvbVN0YXRpY3MgfHwgIWN1c3RvbVN0YXRpY3Nba2V5c1tpXV0pKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q29tcG9uZW50W2tleXNbaV1dID0gc291cmNlQ29tcG9uZW50W2tleXNbaV1dO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG4oZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY2FjaGVkU2V0VGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBpcyBub3QgZGVmaW5lZCcpO1xuICAgIH1cbiAgfVxuICB0cnkge1xuICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgfVxuICB9XG59ICgpKVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCB0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJpY3RVcmlFbmNvZGUgPSByZXF1aXJlKCdzdHJpY3QtdXJpLWVuY29kZScpO1xuXG5leHBvcnRzLmV4dHJhY3QgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdHJldHVybiBzdHIuc3BsaXQoJz8nKVsxXSB8fCAnJztcbn07XG5cbmV4cG9ydHMucGFyc2UgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdHN0ciA9IHN0ci50cmltKCkucmVwbGFjZSgvXihcXD98I3wmKS8sICcnKTtcblxuXHRpZiAoIXN0cikge1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdHJldHVybiBzdHIuc3BsaXQoJyYnKS5yZWR1Y2UoZnVuY3Rpb24gKHJldCwgcGFyYW0pIHtcblx0XHR2YXIgcGFydHMgPSBwYXJhbS5yZXBsYWNlKC9cXCsvZywgJyAnKS5zcGxpdCgnPScpO1xuXHRcdC8vIEZpcmVmb3ggKHByZSA0MCkgZGVjb2RlcyBgJTNEYCB0byBgPWBcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3F1ZXJ5LXN0cmluZy9wdWxsLzM3XG5cdFx0dmFyIGtleSA9IHBhcnRzLnNoaWZ0KCk7XG5cdFx0dmFyIHZhbCA9IHBhcnRzLmxlbmd0aCA+IDAgPyBwYXJ0cy5qb2luKCc9JykgOiB1bmRlZmluZWQ7XG5cblx0XHRrZXkgPSBkZWNvZGVVUklDb21wb25lbnQoa2V5KTtcblxuXHRcdC8vIG1pc3NpbmcgYD1gIHNob3VsZCBiZSBgbnVsbGA6XG5cdFx0Ly8gaHR0cDovL3czLm9yZy9UUi8yMDEyL1dELXVybC0yMDEyMDUyNC8jY29sbGVjdC11cmwtcGFyYW1ldGVyc1xuXHRcdHZhbCA9IHZhbCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGRlY29kZVVSSUNvbXBvbmVudCh2YWwpO1xuXG5cdFx0aWYgKCFyZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0cmV0W2tleV0gPSB2YWw7XG5cdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJldFtrZXldKSkge1xuXHRcdFx0cmV0W2tleV0ucHVzaCh2YWwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXRba2V5XSA9IFtyZXRba2V5XSwgdmFsXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmV0O1xuXHR9LCB7fSk7XG59O1xuXG5leHBvcnRzLnN0cmluZ2lmeSA9IGZ1bmN0aW9uIChvYmopIHtcblx0cmV0dXJuIG9iaiA/IE9iamVjdC5rZXlzKG9iaikuc29ydCgpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0dmFyIHZhbCA9IG9ialtrZXldO1xuXG5cdFx0aWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXG5cdFx0aWYgKHZhbCA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGtleTtcblx0XHR9XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG5cdFx0XHRyZXR1cm4gdmFsLnNsaWNlKCkuc29ydCgpLm1hcChmdW5jdGlvbiAodmFsMikge1xuXHRcdFx0XHRyZXR1cm4gc3RyaWN0VXJpRW5jb2RlKGtleSkgKyAnPScgKyBzdHJpY3RVcmlFbmNvZGUodmFsMik7XG5cdFx0XHR9KS5qb2luKCcmJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0cmljdFVyaUVuY29kZShrZXkpICsgJz0nICsgc3RyaWN0VXJpRW5jb2RlKHZhbCk7XG5cdH0pLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuXHRcdHJldHVybiB4Lmxlbmd0aCA+IDA7XG5cdH0pLmpvaW4oJyYnKSA6ICcnO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5sb29wQXN5bmMgPSBsb29wQXN5bmM7XG5leHBvcnRzLm1hcEFzeW5jID0gbWFwQXN5bmM7XG5mdW5jdGlvbiBsb29wQXN5bmModHVybnMsIHdvcmssIGNhbGxiYWNrKSB7XG4gIHZhciBjdXJyZW50VHVybiA9IDAsXG4gICAgICBpc0RvbmUgPSBmYWxzZTtcbiAgdmFyIHN5bmMgPSBmYWxzZSxcbiAgICAgIGhhc05leHQgPSBmYWxzZSxcbiAgICAgIGRvbmVBcmdzID0gdm9pZCAwO1xuXG4gIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgaXNEb25lID0gdHJ1ZTtcbiAgICBpZiAoc3luYykge1xuICAgICAgLy8gSXRlcmF0ZSBpbnN0ZWFkIG9mIHJlY3Vyc2luZyBpZiBwb3NzaWJsZS5cbiAgICAgIGRvbmVBcmdzID0gW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIGlmIChpc0RvbmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBoYXNOZXh0ID0gdHJ1ZTtcbiAgICBpZiAoc3luYykge1xuICAgICAgLy8gSXRlcmF0ZSBpbnN0ZWFkIG9mIHJlY3Vyc2luZyBpZiBwb3NzaWJsZS5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzeW5jID0gdHJ1ZTtcblxuICAgIHdoaWxlICghaXNEb25lICYmIGN1cnJlbnRUdXJuIDwgdHVybnMgJiYgaGFzTmV4dCkge1xuICAgICAgaGFzTmV4dCA9IGZhbHNlO1xuICAgICAgd29yay5jYWxsKHRoaXMsIGN1cnJlbnRUdXJuKyssIG5leHQsIGRvbmUpO1xuICAgIH1cblxuICAgIHN5bmMgPSBmYWxzZTtcblxuICAgIGlmIChpc0RvbmUpIHtcbiAgICAgIC8vIFRoaXMgbWVhbnMgdGhlIGxvb3AgZmluaXNoZWQgc3luY2hyb25vdXNseS5cbiAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGRvbmVBcmdzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudFR1cm4gPj0gdHVybnMgJiYgaGFzTmV4dCkge1xuICAgICAgaXNEb25lID0gdHJ1ZTtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgbmV4dCgpO1xufVxuXG5mdW5jdGlvbiBtYXBBc3luYyhhcnJheSwgd29yaywgY2FsbGJhY2spIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgdmFyIHZhbHVlcyA9IFtdO1xuXG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiBjYWxsYmFjayhudWxsLCB2YWx1ZXMpO1xuXG4gIHZhciBpc0RvbmUgPSBmYWxzZSxcbiAgICAgIGRvbmVDb3VudCA9IDA7XG5cbiAgZnVuY3Rpb24gZG9uZShpbmRleCwgZXJyb3IsIHZhbHVlKSB7XG4gICAgaWYgKGlzRG9uZSkgcmV0dXJuO1xuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBpc0RvbmUgPSB0cnVlO1xuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG5cbiAgICAgIGlzRG9uZSA9ICsrZG9uZUNvdW50ID09PSBsZW5ndGg7XG5cbiAgICAgIGlmIChpc0RvbmUpIGNhbGxiYWNrKG51bGwsIHZhbHVlcyk7XG4gICAgfVxuICB9XG5cbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICB3b3JrKGl0ZW0sIGluZGV4LCBmdW5jdGlvbiAoZXJyb3IsIHZhbHVlKSB7XG4gICAgICBkb25lKGluZGV4LCBlcnJvciwgdmFsdWUpO1xuICAgIH0pO1xuICB9KTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcm91dGVyV2FybmluZyA9IHJlcXVpcmUoJy4vcm91dGVyV2FybmluZycpO1xuXG52YXIgX3JvdXRlcldhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm91dGVyV2FybmluZyk7XG5cbnZhciBfSW50ZXJuYWxQcm9wVHlwZXMgPSByZXF1aXJlKCcuL0ludGVybmFsUHJvcFR5cGVzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogQSBtaXhpbiB0aGF0IGFkZHMgdGhlIFwiaGlzdG9yeVwiIGluc3RhbmNlIHZhcmlhYmxlIHRvIGNvbXBvbmVudHMuXG4gKi9cbnZhciBIaXN0b3J5ID0ge1xuXG4gIGNvbnRleHRUeXBlczoge1xuICAgIGhpc3Rvcnk6IF9JbnRlcm5hbFByb3BUeXBlcy5oaXN0b3J5XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfcm91dGVyV2FybmluZzIuZGVmYXVsdCkoZmFsc2UsICd0aGUgYEhpc3RvcnlgIG1peGluIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSBhY2Nlc3MgYGNvbnRleHQucm91dGVyYCB3aXRoIHlvdXIgb3duIGBjb250ZXh0VHlwZXNgLiBodHRwOi8vdGlueS5jYy9yb3V0ZXItaGlzdG9yeW1peGluJykgOiB2b2lkIDA7XG4gICAgdGhpcy5oaXN0b3J5ID0gdGhpcy5jb250ZXh0Lmhpc3Rvcnk7XG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEhpc3Rvcnk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9MaW5rID0gcmVxdWlyZSgnLi9MaW5rJyk7XG5cbnZhciBfTGluazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaW5rKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBBbiA8SW5kZXhMaW5rPiBpcyB1c2VkIHRvIGxpbmsgdG8gYW4gPEluZGV4Um91dGU+LlxuICovXG52YXIgSW5kZXhMaW5rID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdJbmRleExpbmsnLFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0xpbmsyLmRlZmF1bHQsIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IG9ubHlBY3RpdmVPbkluZGV4OiB0cnVlIH0pKTtcbiAgfVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEluZGV4TGluaztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JvdXRlcldhcm5pbmcgPSByZXF1aXJlKCcuL3JvdXRlcldhcm5pbmcnKTtcblxudmFyIF9yb3V0ZXJXYXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JvdXRlcldhcm5pbmcpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX1JlZGlyZWN0ID0gcmVxdWlyZSgnLi9SZWRpcmVjdCcpO1xuXG52YXIgX1JlZGlyZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JlZGlyZWN0KTtcblxudmFyIF9JbnRlcm5hbFByb3BUeXBlcyA9IHJlcXVpcmUoJy4vSW50ZXJuYWxQcm9wVHlwZXMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIF9SZWFjdCRQcm9wVHlwZXMgPSBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzO1xudmFyIHN0cmluZyA9IF9SZWFjdCRQcm9wVHlwZXMuc3RyaW5nO1xudmFyIG9iamVjdCA9IF9SZWFjdCRQcm9wVHlwZXMub2JqZWN0O1xuXG4vKipcbiAqIEFuIDxJbmRleFJlZGlyZWN0PiBpcyB1c2VkIHRvIHJlZGlyZWN0IGZyb20gYW4gaW5kZXhSb3V0ZS5cbiAqL1xuXG52YXIgSW5kZXhSZWRpcmVjdCA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnSW5kZXhSZWRpcmVjdCcsXG5cblxuICBzdGF0aWNzOiB7XG4gICAgY3JlYXRlUm91dGVGcm9tUmVhY3RFbGVtZW50OiBmdW5jdGlvbiBjcmVhdGVSb3V0ZUZyb21SZWFjdEVsZW1lbnQoZWxlbWVudCwgcGFyZW50Um91dGUpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlOiBzYW5pdHkgY2hlY2sgKi9cbiAgICAgIGlmIChwYXJlbnRSb3V0ZSkge1xuICAgICAgICBwYXJlbnRSb3V0ZS5pbmRleFJvdXRlID0gX1JlZGlyZWN0Mi5kZWZhdWx0LmNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudChlbGVtZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX3JvdXRlcldhcm5pbmcyLmRlZmF1bHQpKGZhbHNlLCAnQW4gPEluZGV4UmVkaXJlY3Q+IGRvZXMgbm90IG1ha2Ugc2Vuc2UgYXQgdGhlIHJvb3Qgb2YgeW91ciByb3V0ZSBjb25maWcnKSA6IHZvaWQgMDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgdG86IHN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHF1ZXJ5OiBvYmplY3QsXG4gICAgc3RhdGU6IG9iamVjdCxcbiAgICBvbkVudGVyOiBfSW50ZXJuYWxQcm9wVHlwZXMuZmFsc3ksXG4gICAgY2hpbGRyZW46IF9JbnRlcm5hbFByb3BUeXBlcy5mYWxzeVxuICB9LFxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBzYW5pdHkgY2hlY2sgKi9cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgIWZhbHNlID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShmYWxzZSwgJzxJbmRleFJlZGlyZWN0PiBlbGVtZW50cyBhcmUgZm9yIHJvdXRlciBjb25maWd1cmF0aW9uIG9ubHkgYW5kIHNob3VsZCBub3QgYmUgcmVuZGVyZWQnKSA6ICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShmYWxzZSkgOiB2b2lkIDA7XG4gIH1cbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBJbmRleFJlZGlyZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcm91dGVyV2FybmluZyA9IHJlcXVpcmUoJy4vcm91dGVyV2FybmluZycpO1xuXG52YXIgX3JvdXRlcldhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm91dGVyV2FybmluZyk7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfUm91dGVVdGlscyA9IHJlcXVpcmUoJy4vUm91dGVVdGlscycpO1xuXG52YXIgX0ludGVybmFsUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9JbnRlcm5hbFByb3BUeXBlcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZnVuYyA9IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuZnVuYztcblxuLyoqXG4gKiBBbiA8SW5kZXhSb3V0ZT4gaXMgdXNlZCB0byBzcGVjaWZ5IGl0cyBwYXJlbnQncyA8Um91dGUgaW5kZXhSb3V0ZT4gaW5cbiAqIGEgSlNYIHJvdXRlIGNvbmZpZy5cbiAqL1xuXG52YXIgSW5kZXhSb3V0ZSA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnSW5kZXhSb3V0ZScsXG5cblxuICBzdGF0aWNzOiB7XG4gICAgY3JlYXRlUm91dGVGcm9tUmVhY3RFbGVtZW50OiBmdW5jdGlvbiBjcmVhdGVSb3V0ZUZyb21SZWFjdEVsZW1lbnQoZWxlbWVudCwgcGFyZW50Um91dGUpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlOiBzYW5pdHkgY2hlY2sgKi9cbiAgICAgIGlmIChwYXJlbnRSb3V0ZSkge1xuICAgICAgICBwYXJlbnRSb3V0ZS5pbmRleFJvdXRlID0gKDAsIF9Sb3V0ZVV0aWxzLmNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudCkoZWxlbWVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF9yb3V0ZXJXYXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ0FuIDxJbmRleFJvdXRlPiBkb2VzIG5vdCBtYWtlIHNlbnNlIGF0IHRoZSByb290IG9mIHlvdXIgcm91dGUgY29uZmlnJykgOiB2b2lkIDA7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHByb3BUeXBlczoge1xuICAgIHBhdGg6IF9JbnRlcm5hbFByb3BUeXBlcy5mYWxzeSxcbiAgICBjb21wb25lbnQ6IF9JbnRlcm5hbFByb3BUeXBlcy5jb21wb25lbnQsXG4gICAgY29tcG9uZW50czogX0ludGVybmFsUHJvcFR5cGVzLmNvbXBvbmVudHMsXG4gICAgZ2V0Q29tcG9uZW50OiBmdW5jLFxuICAgIGdldENvbXBvbmVudHM6IGZ1bmNcbiAgfSxcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogc2FuaXR5IGNoZWNrICovXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICFmYWxzZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoZmFsc2UsICc8SW5kZXhSb3V0ZT4gZWxlbWVudHMgYXJlIGZvciByb3V0ZXIgY29uZmlndXJhdGlvbiBvbmx5IGFuZCBzaG91bGQgbm90IGJlIHJlbmRlcmVkJykgOiAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoZmFsc2UpIDogdm9pZCAwO1xuICB9XG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSW5kZXhSb3V0ZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMucm91dGVzID0gZXhwb3J0cy5yb3V0ZSA9IGV4cG9ydHMuY29tcG9uZW50cyA9IGV4cG9ydHMuY29tcG9uZW50ID0gZXhwb3J0cy5oaXN0b3J5ID0gdW5kZWZpbmVkO1xuZXhwb3J0cy5mYWxzeSA9IGZhbHN5O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIGZ1bmMgPSBfcmVhY3QuUHJvcFR5cGVzLmZ1bmM7XG52YXIgb2JqZWN0ID0gX3JlYWN0LlByb3BUeXBlcy5vYmplY3Q7XG52YXIgYXJyYXlPZiA9IF9yZWFjdC5Qcm9wVHlwZXMuYXJyYXlPZjtcbnZhciBvbmVPZlR5cGUgPSBfcmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZTtcbnZhciBlbGVtZW50ID0gX3JlYWN0LlByb3BUeXBlcy5lbGVtZW50O1xudmFyIHNoYXBlID0gX3JlYWN0LlByb3BUeXBlcy5zaGFwZTtcbnZhciBzdHJpbmcgPSBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZztcbmZ1bmN0aW9uIGZhbHN5KHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICBpZiAocHJvcHNbcHJvcE5hbWVdKSByZXR1cm4gbmV3IEVycm9yKCc8JyArIGNvbXBvbmVudE5hbWUgKyAnPiBzaG91bGQgbm90IGhhdmUgYSBcIicgKyBwcm9wTmFtZSArICdcIiBwcm9wJyk7XG59XG5cbnZhciBoaXN0b3J5ID0gZXhwb3J0cy5oaXN0b3J5ID0gc2hhcGUoe1xuICBsaXN0ZW46IGZ1bmMuaXNSZXF1aXJlZCxcbiAgcHVzaDogZnVuYy5pc1JlcXVpcmVkLFxuICByZXBsYWNlOiBmdW5jLmlzUmVxdWlyZWQsXG4gIGdvOiBmdW5jLmlzUmVxdWlyZWQsXG4gIGdvQmFjazogZnVuYy5pc1JlcXVpcmVkLFxuICBnb0ZvcndhcmQ6IGZ1bmMuaXNSZXF1aXJlZFxufSk7XG5cbnZhciBjb21wb25lbnQgPSBleHBvcnRzLmNvbXBvbmVudCA9IG9uZU9mVHlwZShbZnVuYywgc3RyaW5nXSk7XG52YXIgY29tcG9uZW50cyA9IGV4cG9ydHMuY29tcG9uZW50cyA9IG9uZU9mVHlwZShbY29tcG9uZW50LCBvYmplY3RdKTtcbnZhciByb3V0ZSA9IGV4cG9ydHMucm91dGUgPSBvbmVPZlR5cGUoW29iamVjdCwgZWxlbWVudF0pO1xudmFyIHJvdXRlcyA9IGV4cG9ydHMucm91dGVzID0gb25lT2ZUeXBlKFtyb3V0ZSwgYXJyYXlPZihyb3V0ZSldKTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcm91dGVyV2FybmluZyA9IHJlcXVpcmUoJy4vcm91dGVyV2FybmluZycpO1xuXG52YXIgX3JvdXRlcldhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm91dGVyV2FybmluZyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIG9iamVjdCA9IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub2JqZWN0O1xuXG4vKipcbiAqIFRoZSBMaWZlY3ljbGUgbWl4aW4gYWRkcyB0aGUgcm91dGVyV2lsbExlYXZlIGxpZmVjeWNsZSBtZXRob2QgdG8gYVxuICogY29tcG9uZW50IHRoYXQgbWF5IGJlIHVzZWQgdG8gY2FuY2VsIGEgdHJhbnNpdGlvbiBvciBwcm9tcHQgdGhlIHVzZXJcbiAqIGZvciBjb25maXJtYXRpb24uXG4gKlxuICogT24gc3RhbmRhcmQgdHJhbnNpdGlvbnMsIHJvdXRlcldpbGxMZWF2ZSByZWNlaXZlcyBhIHNpbmdsZSBhcmd1bWVudDogdGhlXG4gKiBsb2NhdGlvbiB3ZSdyZSB0cmFuc2l0aW9uaW5nIHRvLiBUbyBjYW5jZWwgdGhlIHRyYW5zaXRpb24sIHJldHVybiBmYWxzZS5cbiAqIFRvIHByb21wdCB0aGUgdXNlciBmb3IgY29uZmlybWF0aW9uLCByZXR1cm4gYSBwcm9tcHQgbWVzc2FnZSAoc3RyaW5nKS5cbiAqXG4gKiBEdXJpbmcgdGhlIGJlZm9yZXVubG9hZCBldmVudCAoYXNzdW1pbmcgeW91J3JlIHVzaW5nIHRoZSB1c2VCZWZvcmVVbmxvYWRcbiAqIGhpc3RvcnkgZW5oYW5jZXIpLCByb3V0ZXJXaWxsTGVhdmUgZG9lcyBub3QgcmVjZWl2ZSBhIGxvY2F0aW9uIG9iamVjdFxuICogYmVjYXVzZSBpdCBpc24ndCBwb3NzaWJsZSBmb3IgdXMgdG8ga25vdyB0aGUgbG9jYXRpb24gd2UncmUgdHJhbnNpdGlvbmluZ1xuICogdG8uIEluIHRoaXMgY2FzZSByb3V0ZXJXaWxsTGVhdmUgbXVzdCByZXR1cm4gYSBwcm9tcHQgbWVzc2FnZSB0byBwcmV2ZW50XG4gKiB0aGUgdXNlciBmcm9tIGNsb3NpbmcgdGhlIHdpbmRvdy90YWIuXG4gKi9cblxudmFyIExpZmVjeWNsZSA9IHtcblxuICBjb250ZXh0VHlwZXM6IHtcbiAgICBoaXN0b3J5OiBvYmplY3QuaXNSZXF1aXJlZCxcbiAgICAvLyBOZXN0ZWQgY2hpbGRyZW4gcmVjZWl2ZSB0aGUgcm91dGUgYXMgY29udGV4dCwgZWl0aGVyXG4gICAgLy8gc2V0IGJ5IHRoZSByb3V0ZSBjb21wb25lbnQgdXNpbmcgdGhlIFJvdXRlQ29udGV4dCBtaXhpblxuICAgIC8vIG9yIGJ5IHNvbWUgb3RoZXIgYW5jZXN0b3IuXG4gICAgcm91dGU6IG9iamVjdFxuICB9LFxuXG4gIHByb3BUeXBlczoge1xuICAgIC8vIFJvdXRlIGNvbXBvbmVudHMgcmVjZWl2ZSB0aGUgcm91dGUgb2JqZWN0IGFzIGEgcHJvcC5cbiAgICByb3V0ZTogb2JqZWN0XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX3JvdXRlcldhcm5pbmcyLmRlZmF1bHQpKGZhbHNlLCAndGhlIGBMaWZlY3ljbGVgIG1peGluIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYGNvbnRleHQucm91dGVyLnNldFJvdXRlTGVhdmVIb29rKHJvdXRlLCBob29rKWAuIGh0dHA6Ly90aW55LmNjL3JvdXRlci1saWZlY3ljbGVtaXhpbicpIDogdm9pZCAwO1xuICAgICF0aGlzLnJvdXRlcldpbGxMZWF2ZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoZmFsc2UsICdUaGUgTGlmZWN5Y2xlIG1peGluIHJlcXVpcmVzIHlvdSB0byBkZWZpbmUgYSByb3V0ZXJXaWxsTGVhdmUgbWV0aG9kJykgOiAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoZmFsc2UpIDogdm9pZCAwO1xuXG4gICAgdmFyIHJvdXRlID0gdGhpcy5wcm9wcy5yb3V0ZSB8fCB0aGlzLmNvbnRleHQucm91dGU7XG5cbiAgICAhcm91dGUgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKGZhbHNlLCAnVGhlIExpZmVjeWNsZSBtaXhpbiBtdXN0IGJlIHVzZWQgb24gZWl0aGVyIGEpIGEgPFJvdXRlIGNvbXBvbmVudD4gb3IgJyArICdiKSBhIGRlc2NlbmRhbnQgb2YgYSA8Um91dGUgY29tcG9uZW50PiB0aGF0IHVzZXMgdGhlIFJvdXRlQ29udGV4dCBtaXhpbicpIDogKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKGZhbHNlKSA6IHZvaWQgMDtcblxuICAgIHRoaXMuX3VubGlzdGVuQmVmb3JlTGVhdmluZ1JvdXRlID0gdGhpcy5jb250ZXh0Lmhpc3RvcnkubGlzdGVuQmVmb3JlTGVhdmluZ1JvdXRlKHJvdXRlLCB0aGlzLnJvdXRlcldpbGxMZWF2ZSk7XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5fdW5saXN0ZW5CZWZvcmVMZWF2aW5nUm91dGUpIHRoaXMuX3VubGlzdGVuQmVmb3JlTGVhdmluZ1JvdXRlKCk7XG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IExpZmVjeWNsZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JvdXRlcldhcm5pbmcgPSByZXF1aXJlKCcuL3JvdXRlcldhcm5pbmcnKTtcblxudmFyIF9yb3V0ZXJXYXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JvdXRlcldhcm5pbmcpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vUHJvcFR5cGVzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIF9SZWFjdCRQcm9wVHlwZXMgPSBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzO1xudmFyIGJvb2wgPSBfUmVhY3QkUHJvcFR5cGVzLmJvb2w7XG52YXIgb2JqZWN0ID0gX1JlYWN0JFByb3BUeXBlcy5vYmplY3Q7XG52YXIgc3RyaW5nID0gX1JlYWN0JFByb3BUeXBlcy5zdHJpbmc7XG52YXIgZnVuYyA9IF9SZWFjdCRQcm9wVHlwZXMuZnVuYztcbnZhciBvbmVPZlR5cGUgPSBfUmVhY3QkUHJvcFR5cGVzLm9uZU9mVHlwZTtcblxuXG5mdW5jdGlvbiBpc0xlZnRDbGlja0V2ZW50KGV2ZW50KSB7XG4gIHJldHVybiBldmVudC5idXR0b24gPT09IDA7XG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICByZXR1cm4gISEoZXZlbnQubWV0YUtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSk7XG59XG5cbi8vIFRPRE86IERlLWR1cGxpY2F0ZSBhZ2FpbnN0IGhhc0FueVByb3BlcnRpZXMgaW4gY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIuXG5mdW5jdGlvbiBpc0VtcHR5T2JqZWN0KG9iamVjdCkge1xuICBmb3IgKHZhciBwIGluIG9iamVjdCkge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwKSkgcmV0dXJuIGZhbHNlO1xuICB9cmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uRGVzY3JpcHRvcih0bywgX3JlZikge1xuICB2YXIgcXVlcnkgPSBfcmVmLnF1ZXJ5O1xuICB2YXIgaGFzaCA9IF9yZWYuaGFzaDtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZTtcblxuICBpZiAocXVlcnkgfHwgaGFzaCB8fCBzdGF0ZSkge1xuICAgIHJldHVybiB7IHBhdGhuYW1lOiB0bywgcXVlcnk6IHF1ZXJ5LCBoYXNoOiBoYXNoLCBzdGF0ZTogc3RhdGUgfTtcbiAgfVxuXG4gIHJldHVybiB0bztcbn1cblxuLyoqXG4gKiBBIDxMaW5rPiBpcyB1c2VkIHRvIGNyZWF0ZSBhbiA8YT4gZWxlbWVudCB0aGF0IGxpbmtzIHRvIGEgcm91dGUuXG4gKiBXaGVuIHRoYXQgcm91dGUgaXMgYWN0aXZlLCB0aGUgbGluayBnZXRzIHRoZSB2YWx1ZSBvZiBpdHNcbiAqIGFjdGl2ZUNsYXNzTmFtZSBwcm9wLlxuICpcbiAqIEZvciBleGFtcGxlLCBhc3N1bWluZyB5b3UgaGF2ZSB0aGUgZm9sbG93aW5nIHJvdXRlOlxuICpcbiAqICAgPFJvdXRlIHBhdGg9XCIvcG9zdHMvOnBvc3RJRFwiIGNvbXBvbmVudD17UG9zdH0gLz5cbiAqXG4gKiBZb3UgY291bGQgdXNlIHRoZSBmb2xsb3dpbmcgY29tcG9uZW50IHRvIGxpbmsgdG8gdGhhdCByb3V0ZTpcbiAqXG4gKiAgIDxMaW5rIHRvPXtgL3Bvc3RzLyR7cG9zdC5pZH1gfSAvPlxuICpcbiAqIExpbmtzIG1heSBwYXNzIGFsb25nIGxvY2F0aW9uIHN0YXRlIGFuZC9vciBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyc1xuICogaW4gdGhlIHN0YXRlL3F1ZXJ5IHByb3BzLCByZXNwZWN0aXZlbHkuXG4gKlxuICogICA8TGluayAuLi4gcXVlcnk9e3sgc2hvdzogdHJ1ZSB9fSBzdGF0ZT17eyB0aGU6ICdzdGF0ZScgfX0gLz5cbiAqL1xudmFyIExpbmsgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0xpbmsnLFxuXG5cbiAgY29udGV4dFR5cGVzOiB7XG4gICAgcm91dGVyOiBfUHJvcFR5cGVzLnJvdXRlclNoYXBlXG4gIH0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgdG86IG9uZU9mVHlwZShbc3RyaW5nLCBvYmplY3RdKS5pc1JlcXVpcmVkLFxuICAgIHF1ZXJ5OiBvYmplY3QsXG4gICAgaGFzaDogc3RyaW5nLFxuICAgIHN0YXRlOiBvYmplY3QsXG4gICAgYWN0aXZlU3R5bGU6IG9iamVjdCxcbiAgICBhY3RpdmVDbGFzc05hbWU6IHN0cmluZyxcbiAgICBvbmx5QWN0aXZlT25JbmRleDogYm9vbC5pc1JlcXVpcmVkLFxuICAgIG9uQ2xpY2s6IGZ1bmMsXG4gICAgdGFyZ2V0OiBzdHJpbmdcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb25seUFjdGl2ZU9uSW5kZXg6IGZhbHNlLFxuICAgICAgc3R5bGU6IHt9XG4gICAgfTtcbiAgfSxcbiAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DbGljaykgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcblxuICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSByZXR1cm47XG5cbiAgICAhdGhpcy5jb250ZXh0LnJvdXRlciA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoZmFsc2UsICc8TGluaz5zIHJlbmRlcmVkIG91dHNpZGUgb2YgYSByb3V0ZXIgY29udGV4dCBjYW5ub3QgbmF2aWdhdGUuJykgOiAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoZmFsc2UpIDogdm9pZCAwO1xuXG4gICAgaWYgKGlzTW9kaWZpZWRFdmVudChldmVudCkgfHwgIWlzTGVmdENsaWNrRXZlbnQoZXZlbnQpKSByZXR1cm47XG5cbiAgICAvLyBJZiB0YXJnZXQgcHJvcCBpcyBzZXQgKGUuZy4gdG8gXCJfYmxhbmtcIiksIGxldCBicm93c2VyIGhhbmRsZSBsaW5rLlxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZjogdW50ZXN0YWJsZSB3aXRoIEthcm1hICovXG4gICAgaWYgKHRoaXMucHJvcHMudGFyZ2V0KSByZXR1cm47XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHRvID0gX3Byb3BzLnRvO1xuICAgIHZhciBxdWVyeSA9IF9wcm9wcy5xdWVyeTtcbiAgICB2YXIgaGFzaCA9IF9wcm9wcy5oYXNoO1xuICAgIHZhciBzdGF0ZSA9IF9wcm9wcy5zdGF0ZTtcblxuICAgIHZhciBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uRGVzY3JpcHRvcih0bywgeyBxdWVyeTogcXVlcnksIGhhc2g6IGhhc2gsIHN0YXRlOiBzdGF0ZSB9KTtcblxuICAgIHRoaXMuY29udGV4dC5yb3V0ZXIucHVzaChsb2NhdGlvbik7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcztcbiAgICB2YXIgdG8gPSBfcHJvcHMyLnRvO1xuICAgIHZhciBxdWVyeSA9IF9wcm9wczIucXVlcnk7XG4gICAgdmFyIGhhc2ggPSBfcHJvcHMyLmhhc2g7XG4gICAgdmFyIHN0YXRlID0gX3Byb3BzMi5zdGF0ZTtcbiAgICB2YXIgYWN0aXZlQ2xhc3NOYW1lID0gX3Byb3BzMi5hY3RpdmVDbGFzc05hbWU7XG4gICAgdmFyIGFjdGl2ZVN0eWxlID0gX3Byb3BzMi5hY3RpdmVTdHlsZTtcbiAgICB2YXIgb25seUFjdGl2ZU9uSW5kZXggPSBfcHJvcHMyLm9ubHlBY3RpdmVPbkluZGV4O1xuXG4gICAgdmFyIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wczIsIFsndG8nLCAncXVlcnknLCAnaGFzaCcsICdzdGF0ZScsICdhY3RpdmVDbGFzc05hbWUnLCAnYWN0aXZlU3R5bGUnLCAnb25seUFjdGl2ZU9uSW5kZXgnXSk7XG5cbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF9yb3V0ZXJXYXJuaW5nMi5kZWZhdWx0KSghKHF1ZXJ5IHx8IGhhc2ggfHwgc3RhdGUpLCAndGhlIGBxdWVyeWAsIGBoYXNoYCwgYW5kIGBzdGF0ZWAgcHJvcHMgb24gYDxMaW5rPmAgYXJlIGRlcHJlY2F0ZWQsIHVzZSBgPExpbmsgdG89e3sgcGF0aG5hbWUsIHF1ZXJ5LCBoYXNoLCBzdGF0ZSB9fS8+LiBodHRwOi8vdGlueS5jYy9yb3V0ZXItaXNBY3RpdmVkZXByZWNhdGVkJykgOiB2b2lkIDA7XG5cbiAgICAvLyBJZ25vcmUgaWYgcmVuZGVyZWQgb3V0c2lkZSB0aGUgY29udGV4dCBvZiByb3V0ZXIsIHNpbXBsaWZpZXMgdW5pdCB0ZXN0aW5nLlxuICAgIHZhciByb3V0ZXIgPSB0aGlzLmNvbnRleHQucm91dGVyO1xuXG5cbiAgICBpZiAocm91dGVyKSB7XG4gICAgICB2YXIgbG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbkRlc2NyaXB0b3IodG8sIHsgcXVlcnk6IHF1ZXJ5LCBoYXNoOiBoYXNoLCBzdGF0ZTogc3RhdGUgfSk7XG4gICAgICBwcm9wcy5ocmVmID0gcm91dGVyLmNyZWF0ZUhyZWYobG9jYXRpb24pO1xuXG4gICAgICBpZiAoYWN0aXZlQ2xhc3NOYW1lIHx8IGFjdGl2ZVN0eWxlICE9IG51bGwgJiYgIWlzRW1wdHlPYmplY3QoYWN0aXZlU3R5bGUpKSB7XG4gICAgICAgIGlmIChyb3V0ZXIuaXNBY3RpdmUobG9jYXRpb24sIG9ubHlBY3RpdmVPbkluZGV4KSkge1xuICAgICAgICAgIGlmIChhY3RpdmVDbGFzc05hbWUpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5jbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgcHJvcHMuY2xhc3NOYW1lICs9ICcgJyArIGFjdGl2ZUNsYXNzTmFtZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHByb3BzLmNsYXNzTmFtZSA9IGFjdGl2ZUNsYXNzTmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYWN0aXZlU3R5bGUpIHByb3BzLnN0eWxlID0gX2V4dGVuZHMoe30sIHByb3BzLnN0eWxlLCBhY3RpdmVTdHlsZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2EnLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHsgb25DbGljazogdGhpcy5oYW5kbGVDbGljayB9KSk7XG4gIH1cbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBMaW5rO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jb21waWxlUGF0dGVybiA9IGNvbXBpbGVQYXR0ZXJuO1xuZXhwb3J0cy5tYXRjaFBhdHRlcm4gPSBtYXRjaFBhdHRlcm47XG5leHBvcnRzLmdldFBhcmFtTmFtZXMgPSBnZXRQYXJhbU5hbWVzO1xuZXhwb3J0cy5nZXRQYXJhbXMgPSBnZXRQYXJhbXM7XG5leHBvcnRzLmZvcm1hdFBhdHRlcm4gPSBmb3JtYXRQYXR0ZXJuO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKTtcbn1cblxuZnVuY3Rpb24gX2NvbXBpbGVQYXR0ZXJuKHBhdHRlcm4pIHtcbiAgdmFyIHJlZ2V4cFNvdXJjZSA9ICcnO1xuICB2YXIgcGFyYW1OYW1lcyA9IFtdO1xuICB2YXIgdG9rZW5zID0gW107XG5cbiAgdmFyIG1hdGNoID0gdm9pZCAwLFxuICAgICAgbGFzdEluZGV4ID0gMCxcbiAgICAgIG1hdGNoZXIgPSAvOihbYS16QS1aXyRdW2EtekEtWjAtOV8kXSopfFxcKlxcKnxcXCp8XFwofFxcKS9nO1xuICB3aGlsZSAobWF0Y2ggPSBtYXRjaGVyLmV4ZWMocGF0dGVybikpIHtcbiAgICBpZiAobWF0Y2guaW5kZXggIT09IGxhc3RJbmRleCkge1xuICAgICAgdG9rZW5zLnB1c2gocGF0dGVybi5zbGljZShsYXN0SW5kZXgsIG1hdGNoLmluZGV4KSk7XG4gICAgICByZWdleHBTb3VyY2UgKz0gZXNjYXBlUmVnRXhwKHBhdHRlcm4uc2xpY2UobGFzdEluZGV4LCBtYXRjaC5pbmRleCkpO1xuICAgIH1cblxuICAgIGlmIChtYXRjaFsxXSkge1xuICAgICAgcmVnZXhwU291cmNlICs9ICcoW14vXSspJztcbiAgICAgIHBhcmFtTmFtZXMucHVzaChtYXRjaFsxXSk7XG4gICAgfSBlbHNlIGlmIChtYXRjaFswXSA9PT0gJyoqJykge1xuICAgICAgcmVnZXhwU291cmNlICs9ICcoLiopJztcbiAgICAgIHBhcmFtTmFtZXMucHVzaCgnc3BsYXQnKTtcbiAgICB9IGVsc2UgaWYgKG1hdGNoWzBdID09PSAnKicpIHtcbiAgICAgIHJlZ2V4cFNvdXJjZSArPSAnKC4qPyknO1xuICAgICAgcGFyYW1OYW1lcy5wdXNoKCdzcGxhdCcpO1xuICAgIH0gZWxzZSBpZiAobWF0Y2hbMF0gPT09ICcoJykge1xuICAgICAgcmVnZXhwU291cmNlICs9ICcoPzonO1xuICAgIH0gZWxzZSBpZiAobWF0Y2hbMF0gPT09ICcpJykge1xuICAgICAgcmVnZXhwU291cmNlICs9ICcpPyc7XG4gICAgfVxuXG4gICAgdG9rZW5zLnB1c2gobWF0Y2hbMF0pO1xuXG4gICAgbGFzdEluZGV4ID0gbWF0Y2hlci5sYXN0SW5kZXg7XG4gIH1cblxuICBpZiAobGFzdEluZGV4ICE9PSBwYXR0ZXJuLmxlbmd0aCkge1xuICAgIHRva2Vucy5wdXNoKHBhdHRlcm4uc2xpY2UobGFzdEluZGV4LCBwYXR0ZXJuLmxlbmd0aCkpO1xuICAgIHJlZ2V4cFNvdXJjZSArPSBlc2NhcGVSZWdFeHAocGF0dGVybi5zbGljZShsYXN0SW5kZXgsIHBhdHRlcm4ubGVuZ3RoKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBhdHRlcm46IHBhdHRlcm4sXG4gICAgcmVnZXhwU291cmNlOiByZWdleHBTb3VyY2UsXG4gICAgcGFyYW1OYW1lczogcGFyYW1OYW1lcyxcbiAgICB0b2tlbnM6IHRva2Vuc1xuICB9O1xufVxuXG52YXIgQ29tcGlsZWRQYXR0ZXJuc0NhY2hlID0ge307XG5cbmZ1bmN0aW9uIGNvbXBpbGVQYXR0ZXJuKHBhdHRlcm4pIHtcbiAgaWYgKCEocGF0dGVybiBpbiBDb21waWxlZFBhdHRlcm5zQ2FjaGUpKSBDb21waWxlZFBhdHRlcm5zQ2FjaGVbcGF0dGVybl0gPSBfY29tcGlsZVBhdHRlcm4ocGF0dGVybik7XG5cbiAgcmV0dXJuIENvbXBpbGVkUGF0dGVybnNDYWNoZVtwYXR0ZXJuXTtcbn1cblxuLyoqXG4gKiBBdHRlbXB0cyB0byBtYXRjaCBhIHBhdHRlcm4gb24gdGhlIGdpdmVuIHBhdGhuYW1lLiBQYXR0ZXJucyBtYXkgdXNlXG4gKiB0aGUgZm9sbG93aW5nIHNwZWNpYWwgY2hhcmFjdGVyczpcbiAqXG4gKiAtIDpwYXJhbU5hbWUgICAgIE1hdGNoZXMgYSBVUkwgc2VnbWVudCB1cCB0byB0aGUgbmV4dCAvLCA/LCBvciAjLiBUaGVcbiAqICAgICAgICAgICAgICAgICAgY2FwdHVyZWQgc3RyaW5nIGlzIGNvbnNpZGVyZWQgYSBcInBhcmFtXCJcbiAqIC0gKCkgICAgICAgICAgICAgV3JhcHMgYSBzZWdtZW50IG9mIHRoZSBVUkwgdGhhdCBpcyBvcHRpb25hbFxuICogLSAqICAgICAgICAgICAgICBDb25zdW1lcyAobm9uLWdyZWVkeSkgYWxsIGNoYXJhY3RlcnMgdXAgdG8gdGhlIG5leHRcbiAqICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyIGluIHRoZSBwYXR0ZXJuLCBvciB0byB0aGUgZW5kIG9mIHRoZSBVUkwgaWZcbiAqICAgICAgICAgICAgICAgICAgdGhlcmUgaXMgbm9uZVxuICogLSAqKiAgICAgICAgICAgICBDb25zdW1lcyAoZ3JlZWR5KSBhbGwgY2hhcmFjdGVycyB1cCB0byB0aGUgbmV4dCBjaGFyYWN0ZXJcbiAqICAgICAgICAgICAgICAgICAgaW4gdGhlIHBhdHRlcm4sIG9yIHRvIHRoZSBlbmQgb2YgdGhlIFVSTCBpZiB0aGVyZSBpcyBub25lXG4gKlxuICogIFRoZSBmdW5jdGlvbiBjYWxscyBjYWxsYmFjayhlcnJvciwgbWF0Y2hlZCkgd2hlbiBmaW5pc2hlZC5cbiAqIFRoZSByZXR1cm4gdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqIC0gcmVtYWluaW5nUGF0aG5hbWVcbiAqIC0gcGFyYW1OYW1lc1xuICogLSBwYXJhbVZhbHVlc1xuICovXG5mdW5jdGlvbiBtYXRjaFBhdHRlcm4ocGF0dGVybiwgcGF0aG5hbWUpIHtcbiAgLy8gRW5zdXJlIHBhdHRlcm4gc3RhcnRzIHdpdGggbGVhZGluZyBzbGFzaCBmb3IgY29uc2lzdGVuY3kgd2l0aCBwYXRobmFtZS5cbiAgaWYgKHBhdHRlcm4uY2hhckF0KDApICE9PSAnLycpIHtcbiAgICBwYXR0ZXJuID0gJy8nICsgcGF0dGVybjtcbiAgfVxuXG4gIHZhciBfY29tcGlsZVBhdHRlcm4yID0gY29tcGlsZVBhdHRlcm4ocGF0dGVybik7XG5cbiAgdmFyIHJlZ2V4cFNvdXJjZSA9IF9jb21waWxlUGF0dGVybjIucmVnZXhwU291cmNlO1xuICB2YXIgcGFyYW1OYW1lcyA9IF9jb21waWxlUGF0dGVybjIucGFyYW1OYW1lcztcbiAgdmFyIHRva2VucyA9IF9jb21waWxlUGF0dGVybjIudG9rZW5zO1xuXG5cbiAgaWYgKHBhdHRlcm4uY2hhckF0KHBhdHRlcm4ubGVuZ3RoIC0gMSkgIT09ICcvJykge1xuICAgIHJlZ2V4cFNvdXJjZSArPSAnLz8nOyAvLyBBbGxvdyBvcHRpb25hbCBwYXRoIHNlcGFyYXRvciBhdCBlbmQuXG4gIH1cblxuICAvLyBTcGVjaWFsLWNhc2UgcGF0dGVybnMgbGlrZSAnKicgZm9yIGNhdGNoLWFsbCByb3V0ZXMuXG4gIGlmICh0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdID09PSAnKicpIHtcbiAgICByZWdleHBTb3VyY2UgKz0gJyQnO1xuICB9XG5cbiAgdmFyIG1hdGNoID0gcGF0aG5hbWUubWF0Y2gobmV3IFJlZ0V4cCgnXicgKyByZWdleHBTb3VyY2UsICdpJykpO1xuICBpZiAobWF0Y2ggPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1hdGNoZWRQYXRoID0gbWF0Y2hbMF07XG4gIHZhciByZW1haW5pbmdQYXRobmFtZSA9IHBhdGhuYW1lLnN1YnN0cihtYXRjaGVkUGF0aC5sZW5ndGgpO1xuXG4gIGlmIChyZW1haW5pbmdQYXRobmFtZSkge1xuICAgIC8vIFJlcXVpcmUgdGhhdCB0aGUgbWF0Y2ggZW5kcyBhdCBhIHBhdGggc2VwYXJhdG9yLCBpZiB3ZSBkaWRuJ3QgbWF0Y2hcbiAgICAvLyB0aGUgZnVsbCBwYXRoLCBzbyBhbnkgcmVtYWluaW5nIHBhdGhuYW1lIGlzIGEgbmV3IHBhdGggc2VnbWVudC5cbiAgICBpZiAobWF0Y2hlZFBhdGguY2hhckF0KG1hdGNoZWRQYXRoLmxlbmd0aCAtIDEpICE9PSAnLycpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIElmIHRoZXJlIGlzIGEgcmVtYWluaW5nIHBhdGhuYW1lLCB0cmVhdCB0aGUgcGF0aCBzZXBhcmF0b3IgYXMgcGFydCBvZlxuICAgIC8vIHRoZSByZW1haW5pbmcgcGF0aG5hbWUgZm9yIHByb3Blcmx5IGNvbnRpbnVpbmcgdGhlIG1hdGNoLlxuICAgIHJlbWFpbmluZ1BhdGhuYW1lID0gJy8nICsgcmVtYWluaW5nUGF0aG5hbWU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlbWFpbmluZ1BhdGhuYW1lOiByZW1haW5pbmdQYXRobmFtZSxcbiAgICBwYXJhbU5hbWVzOiBwYXJhbU5hbWVzLFxuICAgIHBhcmFtVmFsdWVzOiBtYXRjaC5zbGljZSgxKS5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgIHJldHVybiB2ICYmIGRlY29kZVVSSUNvbXBvbmVudCh2KTtcbiAgICB9KVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRQYXJhbU5hbWVzKHBhdHRlcm4pIHtcbiAgcmV0dXJuIGNvbXBpbGVQYXR0ZXJuKHBhdHRlcm4pLnBhcmFtTmFtZXM7XG59XG5cbmZ1bmN0aW9uIGdldFBhcmFtcyhwYXR0ZXJuLCBwYXRobmFtZSkge1xuICB2YXIgbWF0Y2ggPSBtYXRjaFBhdHRlcm4ocGF0dGVybiwgcGF0aG5hbWUpO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgcGFyYW1OYW1lcyA9IG1hdGNoLnBhcmFtTmFtZXM7XG4gIHZhciBwYXJhbVZhbHVlcyA9IG1hdGNoLnBhcmFtVmFsdWVzO1xuXG4gIHZhciBwYXJhbXMgPSB7fTtcblxuICBwYXJhbU5hbWVzLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtTmFtZSwgaW5kZXgpIHtcbiAgICBwYXJhbXNbcGFyYW1OYW1lXSA9IHBhcmFtVmFsdWVzW2luZGV4XTtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtcztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgdmVyc2lvbiBvZiB0aGUgZ2l2ZW4gcGF0dGVybiB3aXRoIHBhcmFtcyBpbnRlcnBvbGF0ZWQuIFRocm93c1xuICogaWYgdGhlcmUgaXMgYSBkeW5hbWljIHNlZ21lbnQgb2YgdGhlIHBhdHRlcm4gZm9yIHdoaWNoIHRoZXJlIGlzIG5vIHBhcmFtLlxuICovXG5mdW5jdGlvbiBmb3JtYXRQYXR0ZXJuKHBhdHRlcm4sIHBhcmFtcykge1xuICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG5cbiAgdmFyIF9jb21waWxlUGF0dGVybjMgPSBjb21waWxlUGF0dGVybihwYXR0ZXJuKTtcblxuICB2YXIgdG9rZW5zID0gX2NvbXBpbGVQYXR0ZXJuMy50b2tlbnM7XG5cbiAgdmFyIHBhcmVuQ291bnQgPSAwLFxuICAgICAgcGF0aG5hbWUgPSAnJyxcbiAgICAgIHNwbGF0SW5kZXggPSAwO1xuXG4gIHZhciB0b2tlbiA9IHZvaWQgMCxcbiAgICAgIHBhcmFtTmFtZSA9IHZvaWQgMCxcbiAgICAgIHBhcmFtVmFsdWUgPSB2b2lkIDA7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0b2tlbnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICB0b2tlbiA9IHRva2Vuc1tpXTtcblxuICAgIGlmICh0b2tlbiA9PT0gJyonIHx8IHRva2VuID09PSAnKionKSB7XG4gICAgICBwYXJhbVZhbHVlID0gQXJyYXkuaXNBcnJheShwYXJhbXMuc3BsYXQpID8gcGFyYW1zLnNwbGF0W3NwbGF0SW5kZXgrK10gOiBwYXJhbXMuc3BsYXQ7XG5cbiAgICAgICEocGFyYW1WYWx1ZSAhPSBudWxsIHx8IHBhcmVuQ291bnQgPiAwKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoZmFsc2UsICdNaXNzaW5nIHNwbGF0ICMlcyBmb3IgcGF0aCBcIiVzXCInLCBzcGxhdEluZGV4LCBwYXR0ZXJuKSA6ICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShmYWxzZSkgOiB2b2lkIDA7XG5cbiAgICAgIGlmIChwYXJhbVZhbHVlICE9IG51bGwpIHBhdGhuYW1lICs9IGVuY29kZVVSSShwYXJhbVZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHRva2VuID09PSAnKCcpIHtcbiAgICAgIHBhcmVuQ291bnQgKz0gMTtcbiAgICB9IGVsc2UgaWYgKHRva2VuID09PSAnKScpIHtcbiAgICAgIHBhcmVuQ291bnQgLT0gMTtcbiAgICB9IGVsc2UgaWYgKHRva2VuLmNoYXJBdCgwKSA9PT0gJzonKSB7XG4gICAgICBwYXJhbU5hbWUgPSB0b2tlbi5zdWJzdHJpbmcoMSk7XG4gICAgICBwYXJhbVZhbHVlID0gcGFyYW1zW3BhcmFtTmFtZV07XG5cbiAgICAgICEocGFyYW1WYWx1ZSAhPSBudWxsIHx8IHBhcmVuQ291bnQgPiAwKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoZmFsc2UsICdNaXNzaW5nIFwiJXNcIiBwYXJhbWV0ZXIgZm9yIHBhdGggXCIlc1wiJywgcGFyYW1OYW1lLCBwYXR0ZXJuKSA6ICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShmYWxzZSkgOiB2b2lkIDA7XG5cbiAgICAgIGlmIChwYXJhbVZhbHVlICE9IG51bGwpIHBhdGhuYW1lICs9IGVuY29kZVVSSUNvbXBvbmVudChwYXJhbVZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGF0aG5hbWUgKz0gdG9rZW47XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhdGhuYW1lLnJlcGxhY2UoL1xcLysvZywgJy8nKTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnJvdXRlciA9IGV4cG9ydHMucm91dGVzID0gZXhwb3J0cy5yb3V0ZSA9IGV4cG9ydHMuY29tcG9uZW50cyA9IGV4cG9ydHMuY29tcG9uZW50ID0gZXhwb3J0cy5sb2NhdGlvbiA9IGV4cG9ydHMuaGlzdG9yeSA9IGV4cG9ydHMuZmFsc3kgPSBleHBvcnRzLmxvY2F0aW9uU2hhcGUgPSBleHBvcnRzLnJvdXRlclNoYXBlID0gdW5kZWZpbmVkO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9kZXByZWNhdGVPYmplY3RQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi9kZXByZWNhdGVPYmplY3RQcm9wZXJ0aWVzJyk7XG5cbnZhciBfZGVwcmVjYXRlT2JqZWN0UHJvcGVydGllczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZXByZWNhdGVPYmplY3RQcm9wZXJ0aWVzKTtcblxudmFyIF9JbnRlcm5hbFByb3BUeXBlcyA9IHJlcXVpcmUoJy4vSW50ZXJuYWxQcm9wVHlwZXMnKTtcblxudmFyIEludGVybmFsUHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX0ludGVybmFsUHJvcFR5cGVzKTtcblxudmFyIF9yb3V0ZXJXYXJuaW5nID0gcmVxdWlyZSgnLi9yb3V0ZXJXYXJuaW5nJyk7XG5cbnZhciBfcm91dGVyV2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yb3V0ZXJXYXJuaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGZ1bmMgPSBfcmVhY3QuUHJvcFR5cGVzLmZ1bmM7XG52YXIgb2JqZWN0ID0gX3JlYWN0LlByb3BUeXBlcy5vYmplY3Q7XG52YXIgc2hhcGUgPSBfcmVhY3QuUHJvcFR5cGVzLnNoYXBlO1xudmFyIHN0cmluZyA9IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nO1xudmFyIHJvdXRlclNoYXBlID0gZXhwb3J0cy5yb3V0ZXJTaGFwZSA9IHNoYXBlKHtcbiAgcHVzaDogZnVuYy5pc1JlcXVpcmVkLFxuICByZXBsYWNlOiBmdW5jLmlzUmVxdWlyZWQsXG4gIGdvOiBmdW5jLmlzUmVxdWlyZWQsXG4gIGdvQmFjazogZnVuYy5pc1JlcXVpcmVkLFxuICBnb0ZvcndhcmQ6IGZ1bmMuaXNSZXF1aXJlZCxcbiAgc2V0Um91dGVMZWF2ZUhvb2s6IGZ1bmMuaXNSZXF1aXJlZCxcbiAgaXNBY3RpdmU6IGZ1bmMuaXNSZXF1aXJlZFxufSk7XG5cbnZhciBsb2NhdGlvblNoYXBlID0gZXhwb3J0cy5sb2NhdGlvblNoYXBlID0gc2hhcGUoe1xuICBwYXRobmFtZTogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHNlYXJjaDogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHN0YXRlOiBvYmplY3QsXG4gIGFjdGlvbjogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGtleTogc3RyaW5nXG59KTtcblxuLy8gRGVwcmVjYXRlZCBzdHVmZiBiZWxvdzpcblxudmFyIGZhbHN5ID0gZXhwb3J0cy5mYWxzeSA9IEludGVybmFsUHJvcFR5cGVzLmZhbHN5O1xudmFyIGhpc3RvcnkgPSBleHBvcnRzLmhpc3RvcnkgPSBJbnRlcm5hbFByb3BUeXBlcy5oaXN0b3J5O1xudmFyIGxvY2F0aW9uID0gZXhwb3J0cy5sb2NhdGlvbiA9IGxvY2F0aW9uU2hhcGU7XG52YXIgY29tcG9uZW50ID0gZXhwb3J0cy5jb21wb25lbnQgPSBJbnRlcm5hbFByb3BUeXBlcy5jb21wb25lbnQ7XG52YXIgY29tcG9uZW50cyA9IGV4cG9ydHMuY29tcG9uZW50cyA9IEludGVybmFsUHJvcFR5cGVzLmNvbXBvbmVudHM7XG52YXIgcm91dGUgPSBleHBvcnRzLnJvdXRlID0gSW50ZXJuYWxQcm9wVHlwZXMucm91dGU7XG52YXIgcm91dGVzID0gZXhwb3J0cy5yb3V0ZXMgPSBJbnRlcm5hbFByb3BUeXBlcy5yb3V0ZXM7XG52YXIgcm91dGVyID0gZXhwb3J0cy5yb3V0ZXIgPSByb3V0ZXJTaGFwZTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGVwcmVjYXRlUHJvcFR5cGUgPSBmdW5jdGlvbiBkZXByZWNhdGVQcm9wVHlwZShwcm9wVHlwZSwgbWVzc2FnZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfcm91dGVyV2FybmluZzIuZGVmYXVsdCkoZmFsc2UsIG1lc3NhZ2UpIDogdm9pZCAwO1xuICAgICAgICByZXR1cm4gcHJvcFR5cGUuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgdmFyIGRlcHJlY2F0ZUludGVybmFsUHJvcFR5cGUgPSBmdW5jdGlvbiBkZXByZWNhdGVJbnRlcm5hbFByb3BUeXBlKHByb3BUeXBlKSB7XG4gICAgICByZXR1cm4gZGVwcmVjYXRlUHJvcFR5cGUocHJvcFR5cGUsICdUaGlzIHByb3AgdHlwZSBpcyBub3QgaW50ZW5kZWQgZm9yIGV4dGVybmFsIHVzZSwgYW5kIHdhcyBwcmV2aW91c2x5IGV4cG9ydGVkIGJ5IG1pc3Rha2UuIFRoZXNlIGludGVybmFsIHByb3AgdHlwZXMgYXJlIGRlcHJlY2F0ZWQgZm9yIGV4dGVybmFsIHVzZSwgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGxhdGVyIHZlcnNpb24uJyk7XG4gICAgfTtcblxuICAgIHZhciBkZXByZWNhdGVSZW5hbWVkUHJvcFR5cGUgPSBmdW5jdGlvbiBkZXByZWNhdGVSZW5hbWVkUHJvcFR5cGUocHJvcFR5cGUsIG5hbWUpIHtcbiAgICAgIHJldHVybiBkZXByZWNhdGVQcm9wVHlwZShwcm9wVHlwZSwgJ1RoZSBgJyArIG5hbWUgKyAnYCBwcm9wIHR5cGUgaXMgbm93IGV4cG9ydGVkIGFzIGAnICsgbmFtZSArICdTaGFwZWAgdG8gYXZvaWQgbmFtZSBjb25mbGljdHMuIFRoaXMgZXhwb3J0IGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGxhdGVyIHZlcnNpb24uJyk7XG4gICAgfTtcblxuICAgIGV4cG9ydHMuZmFsc3kgPSBmYWxzeSA9IGRlcHJlY2F0ZUludGVybmFsUHJvcFR5cGUoZmFsc3kpO1xuICAgIGV4cG9ydHMuaGlzdG9yeSA9IGhpc3RvcnkgPSBkZXByZWNhdGVJbnRlcm5hbFByb3BUeXBlKGhpc3RvcnkpO1xuICAgIGV4cG9ydHMuY29tcG9uZW50ID0gY29tcG9uZW50ID0gZGVwcmVjYXRlSW50ZXJuYWxQcm9wVHlwZShjb21wb25lbnQpO1xuICAgIGV4cG9ydHMuY29tcG9uZW50cyA9IGNvbXBvbmVudHMgPSBkZXByZWNhdGVJbnRlcm5hbFByb3BUeXBlKGNvbXBvbmVudHMpO1xuICAgIGV4cG9ydHMucm91dGUgPSByb3V0ZSA9IGRlcHJlY2F0ZUludGVybmFsUHJvcFR5cGUocm91dGUpO1xuICAgIGV4cG9ydHMucm91dGVzID0gcm91dGVzID0gZGVwcmVjYXRlSW50ZXJuYWxQcm9wVHlwZShyb3V0ZXMpO1xuXG4gICAgZXhwb3J0cy5sb2NhdGlvbiA9IGxvY2F0aW9uID0gZGVwcmVjYXRlUmVuYW1lZFByb3BUeXBlKGxvY2F0aW9uLCAnbG9jYXRpb24nKTtcbiAgICBleHBvcnRzLnJvdXRlciA9IHJvdXRlciA9IGRlcHJlY2F0ZVJlbmFtZWRQcm9wVHlwZShyb3V0ZXIsICdyb3V0ZXInKTtcbiAgfSkoKTtcbn1cblxudmFyIGRlZmF1bHRFeHBvcnQgPSB7XG4gIGZhbHN5OiBmYWxzeSxcbiAgaGlzdG9yeTogaGlzdG9yeSxcbiAgbG9jYXRpb246IGxvY2F0aW9uLFxuICBjb21wb25lbnQ6IGNvbXBvbmVudCxcbiAgY29tcG9uZW50czogY29tcG9uZW50cyxcbiAgcm91dGU6IHJvdXRlLFxuICAvLyBGb3Igc29tZSByZWFzb24sIHJvdXRlcyB3YXMgbmV2ZXIgaGVyZS5cbiAgcm91dGVyOiByb3V0ZXJcbn07XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGRlZmF1bHRFeHBvcnQgPSAoMCwgX2RlcHJlY2F0ZU9iamVjdFByb3BlcnRpZXMyLmRlZmF1bHQpKGRlZmF1bHRFeHBvcnQsICdUaGUgZGVmYXVsdCBleHBvcnQgZnJvbSBgcmVhY3Qtcm91dGVyL2xpYi9Qcm9wVHlwZXNgIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgdGhlIG5hbWVkIGV4cG9ydHMgaW5zdGVhZC4nKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZGVmYXVsdEV4cG9ydDsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9Sb3V0ZVV0aWxzID0gcmVxdWlyZSgnLi9Sb3V0ZVV0aWxzJyk7XG5cbnZhciBfUGF0dGVyblV0aWxzID0gcmVxdWlyZSgnLi9QYXR0ZXJuVXRpbHMnKTtcblxudmFyIF9JbnRlcm5hbFByb3BUeXBlcyA9IHJlcXVpcmUoJy4vSW50ZXJuYWxQcm9wVHlwZXMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIF9SZWFjdCRQcm9wVHlwZXMgPSBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzO1xudmFyIHN0cmluZyA9IF9SZWFjdCRQcm9wVHlwZXMuc3RyaW5nO1xudmFyIG9iamVjdCA9IF9SZWFjdCRQcm9wVHlwZXMub2JqZWN0O1xuXG4vKipcbiAqIEEgPFJlZGlyZWN0PiBpcyB1c2VkIHRvIGRlY2xhcmUgYW5vdGhlciBVUkwgcGF0aCBhIGNsaWVudCBzaG91bGRcbiAqIGJlIHNlbnQgdG8gd2hlbiB0aGV5IHJlcXVlc3QgYSBnaXZlbiBVUkwuXG4gKlxuICogUmVkaXJlY3RzIGFyZSBwbGFjZWQgYWxvbmdzaWRlIHJvdXRlcyBpbiB0aGUgcm91dGUgY29uZmlndXJhdGlvblxuICogYW5kIGFyZSB0cmF2ZXJzZWQgaW4gdGhlIHNhbWUgbWFubmVyLlxuICovXG5cbnZhciBSZWRpcmVjdCA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUmVkaXJlY3QnLFxuXG5cbiAgc3RhdGljczoge1xuICAgIGNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudDogZnVuY3Rpb24gY3JlYXRlUm91dGVGcm9tUmVhY3RFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIHZhciByb3V0ZSA9ICgwLCBfUm91dGVVdGlscy5jcmVhdGVSb3V0ZUZyb21SZWFjdEVsZW1lbnQpKGVsZW1lbnQpO1xuXG4gICAgICBpZiAocm91dGUuZnJvbSkgcm91dGUucGF0aCA9IHJvdXRlLmZyb207XG5cbiAgICAgIHJvdXRlLm9uRW50ZXIgPSBmdW5jdGlvbiAobmV4dFN0YXRlLCByZXBsYWNlKSB7XG4gICAgICAgIHZhciBsb2NhdGlvbiA9IG5leHRTdGF0ZS5sb2NhdGlvbjtcbiAgICAgICAgdmFyIHBhcmFtcyA9IG5leHRTdGF0ZS5wYXJhbXM7XG5cblxuICAgICAgICB2YXIgcGF0aG5hbWUgPSB2b2lkIDA7XG4gICAgICAgIGlmIChyb3V0ZS50by5jaGFyQXQoMCkgPT09ICcvJykge1xuICAgICAgICAgIHBhdGhuYW1lID0gKDAsIF9QYXR0ZXJuVXRpbHMuZm9ybWF0UGF0dGVybikocm91dGUudG8sIHBhcmFtcyk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXJvdXRlLnRvKSB7XG4gICAgICAgICAgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcm91dGVJbmRleCA9IG5leHRTdGF0ZS5yb3V0ZXMuaW5kZXhPZihyb3V0ZSk7XG4gICAgICAgICAgdmFyIHBhcmVudFBhdHRlcm4gPSBSZWRpcmVjdC5nZXRSb3V0ZVBhdHRlcm4obmV4dFN0YXRlLnJvdXRlcywgcm91dGVJbmRleCAtIDEpO1xuICAgICAgICAgIHZhciBwYXR0ZXJuID0gcGFyZW50UGF0dGVybi5yZXBsYWNlKC9cXC8qJC8sICcvJykgKyByb3V0ZS50bztcbiAgICAgICAgICBwYXRobmFtZSA9ICgwLCBfUGF0dGVyblV0aWxzLmZvcm1hdFBhdHRlcm4pKHBhdHRlcm4sIHBhcmFtcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXBsYWNlKHtcbiAgICAgICAgICBwYXRobmFtZTogcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnk6IHJvdXRlLnF1ZXJ5IHx8IGxvY2F0aW9uLnF1ZXJ5LFxuICAgICAgICAgIHN0YXRlOiByb3V0ZS5zdGF0ZSB8fCBsb2NhdGlvbi5zdGF0ZVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiByb3V0ZTtcbiAgICB9LFxuICAgIGdldFJvdXRlUGF0dGVybjogZnVuY3Rpb24gZ2V0Um91dGVQYXR0ZXJuKHJvdXRlcywgcm91dGVJbmRleCkge1xuICAgICAgdmFyIHBhcmVudFBhdHRlcm4gPSAnJztcblxuICAgICAgZm9yICh2YXIgaSA9IHJvdXRlSW5kZXg7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHZhciByb3V0ZSA9IHJvdXRlc1tpXTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSByb3V0ZS5wYXRoIHx8ICcnO1xuXG4gICAgICAgIHBhcmVudFBhdHRlcm4gPSBwYXR0ZXJuLnJlcGxhY2UoL1xcLyokLywgJy8nKSArIHBhcmVudFBhdHRlcm47XG5cbiAgICAgICAgaWYgKHBhdHRlcm4uaW5kZXhPZignLycpID09PSAwKSBicmVhaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICcvJyArIHBhcmVudFBhdHRlcm47XG4gICAgfVxuICB9LFxuXG4gIHByb3BUeXBlczoge1xuICAgIHBhdGg6IHN0cmluZyxcbiAgICBmcm9tOiBzdHJpbmcsIC8vIEFsaWFzIGZvciBwYXRoXG4gICAgdG86IHN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHF1ZXJ5OiBvYmplY3QsXG4gICAgc3RhdGU6IG9iamVjdCxcbiAgICBvbkVudGVyOiBfSW50ZXJuYWxQcm9wVHlwZXMuZmFsc3ksXG4gICAgY2hpbGRyZW46IF9JbnRlcm5hbFByb3BUeXBlcy5mYWxzeVxuICB9LFxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBzYW5pdHkgY2hlY2sgKi9cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgIWZhbHNlID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShmYWxzZSwgJzxSZWRpcmVjdD4gZWxlbWVudHMgYXJlIGZvciByb3V0ZXIgY29uZmlndXJhdGlvbiBvbmx5IGFuZCBzaG91bGQgbm90IGJlIHJlbmRlcmVkJykgOiAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoZmFsc2UpIDogdm9pZCAwO1xuICB9XG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUmVkaXJlY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9Sb3V0ZVV0aWxzID0gcmVxdWlyZSgnLi9Sb3V0ZVV0aWxzJyk7XG5cbnZhciBfSW50ZXJuYWxQcm9wVHlwZXMgPSByZXF1aXJlKCcuL0ludGVybmFsUHJvcFR5cGVzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBfUmVhY3QkUHJvcFR5cGVzID0gX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcztcbnZhciBzdHJpbmcgPSBfUmVhY3QkUHJvcFR5cGVzLnN0cmluZztcbnZhciBmdW5jID0gX1JlYWN0JFByb3BUeXBlcy5mdW5jO1xuXG4vKipcbiAqIEEgPFJvdXRlPiBpcyB1c2VkIHRvIGRlY2xhcmUgd2hpY2ggY29tcG9uZW50cyBhcmUgcmVuZGVyZWQgdG8gdGhlXG4gKiBwYWdlIHdoZW4gdGhlIFVSTCBtYXRjaGVzIGEgZ2l2ZW4gcGF0dGVybi5cbiAqXG4gKiBSb3V0ZXMgYXJlIGFycmFuZ2VkIGluIGEgbmVzdGVkIHRyZWUgc3RydWN0dXJlLiBXaGVuIGEgbmV3IFVSTCBpc1xuICogcmVxdWVzdGVkLCB0aGUgdHJlZSBpcyBzZWFyY2hlZCBkZXB0aC1maXJzdCB0byBmaW5kIGEgcm91dGUgd2hvc2VcbiAqIHBhdGggbWF0Y2hlcyB0aGUgVVJMLiAgV2hlbiBvbmUgaXMgZm91bmQsIGFsbCByb3V0ZXMgaW4gdGhlIHRyZWVcbiAqIHRoYXQgbGVhZCB0byBpdCBhcmUgY29uc2lkZXJlZCBcImFjdGl2ZVwiIGFuZCB0aGVpciBjb21wb25lbnRzIGFyZVxuICogcmVuZGVyZWQgaW50byB0aGUgRE9NLCBuZXN0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgaW4gdGhlIHRyZWUuXG4gKi9cblxudmFyIFJvdXRlID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdSb3V0ZScsXG5cblxuICBzdGF0aWNzOiB7XG4gICAgY3JlYXRlUm91dGVGcm9tUmVhY3RFbGVtZW50OiBfUm91dGVVdGlscy5jcmVhdGVSb3V0ZUZyb21SZWFjdEVsZW1lbnRcbiAgfSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgY29tcG9uZW50OiBfSW50ZXJuYWxQcm9wVHlwZXMuY29tcG9uZW50LFxuICAgIGNvbXBvbmVudHM6IF9JbnRlcm5hbFByb3BUeXBlcy5jb21wb25lbnRzLFxuICAgIGdldENvbXBvbmVudDogZnVuYyxcbiAgICBnZXRDb21wb25lbnRzOiBmdW5jXG4gIH0sXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IHNhbml0eSBjaGVjayAqL1xuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAhZmFsc2UgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKGZhbHNlLCAnPFJvdXRlPiBlbGVtZW50cyBhcmUgZm9yIHJvdXRlciBjb25maWd1cmF0aW9uIG9ubHkgYW5kIHNob3VsZCBub3QgYmUgcmVuZGVyZWQnKSA6ICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShmYWxzZSkgOiB2b2lkIDA7XG4gIH1cbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yb3V0ZXJXYXJuaW5nID0gcmVxdWlyZSgnLi9yb3V0ZXJXYXJuaW5nJyk7XG5cbnZhciBfcm91dGVyV2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yb3V0ZXJXYXJuaW5nKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgb2JqZWN0ID0gX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vYmplY3Q7XG5cbi8qKlxuICogVGhlIFJvdXRlQ29udGV4dCBtaXhpbiBwcm92aWRlcyBhIGNvbnZlbmllbnQgd2F5IGZvciByb3V0ZVxuICogY29tcG9uZW50cyB0byBzZXQgdGhlIHJvdXRlIGluIGNvbnRleHQuIFRoaXMgaXMgbmVlZGVkIGZvclxuICogcm91dGVzIHRoYXQgcmVuZGVyIGVsZW1lbnRzIHRoYXQgd2FudCB0byB1c2UgdGhlIExpZmVjeWNsZVxuICogbWl4aW4gdG8gcHJldmVudCB0cmFuc2l0aW9ucy5cbiAqL1xuXG52YXIgUm91dGVDb250ZXh0ID0ge1xuXG4gIHByb3BUeXBlczoge1xuICAgIHJvdXRlOiBvYmplY3QuaXNSZXF1aXJlZFxuICB9LFxuXG4gIGNoaWxkQ29udGV4dFR5cGVzOiB7XG4gICAgcm91dGU6IG9iamVjdC5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgZ2V0Q2hpbGRDb250ZXh0OiBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvdXRlOiB0aGlzLnByb3BzLnJvdXRlXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfcm91dGVyV2FybmluZzIuZGVmYXVsdCkoZmFsc2UsICdUaGUgYFJvdXRlQ29udGV4dGAgbWl4aW4gaXMgZGVwcmVjYXRlZC4gWW91IGNhbiBwcm92aWRlIGB0aGlzLnByb3BzLnJvdXRlYCBvbiBjb250ZXh0IHdpdGggeW91ciBvd24gYGNvbnRleHRUeXBlc2AuIGh0dHA6Ly90aW55LmNjL3JvdXRlci1yb3V0ZWNvbnRleHRtaXhpbicpIDogdm9pZCAwO1xuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZUNvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuaXNSZWFjdENoaWxkcmVuID0gaXNSZWFjdENoaWxkcmVuO1xuZXhwb3J0cy5jcmVhdGVSb3V0ZUZyb21SZWFjdEVsZW1lbnQgPSBjcmVhdGVSb3V0ZUZyb21SZWFjdEVsZW1lbnQ7XG5leHBvcnRzLmNyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuID0gY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW47XG5leHBvcnRzLmNyZWF0ZVJvdXRlcyA9IGNyZWF0ZVJvdXRlcztcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc1ZhbGlkQ2hpbGQob2JqZWN0KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCB8fCBfcmVhY3QyLmRlZmF1bHQuaXNWYWxpZEVsZW1lbnQob2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gaXNSZWFjdENoaWxkcmVuKG9iamVjdCkge1xuICByZXR1cm4gaXNWYWxpZENoaWxkKG9iamVjdCkgfHwgQXJyYXkuaXNBcnJheShvYmplY3QpICYmIG9iamVjdC5ldmVyeShpc1ZhbGlkQ2hpbGQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZShkZWZhdWx0UHJvcHMsIHByb3BzKSB7XG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgZGVmYXVsdFByb3BzLCBwcm9wcyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudChlbGVtZW50KSB7XG4gIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuICB2YXIgcm91dGUgPSBjcmVhdGVSb3V0ZSh0eXBlLmRlZmF1bHRQcm9wcywgZWxlbWVudC5wcm9wcyk7XG5cbiAgaWYgKHJvdXRlLmNoaWxkcmVuKSB7XG4gICAgdmFyIGNoaWxkUm91dGVzID0gY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4ocm91dGUuY2hpbGRyZW4sIHJvdXRlKTtcblxuICAgIGlmIChjaGlsZFJvdXRlcy5sZW5ndGgpIHJvdXRlLmNoaWxkUm91dGVzID0gY2hpbGRSb3V0ZXM7XG5cbiAgICBkZWxldGUgcm91dGUuY2hpbGRyZW47XG4gIH1cblxuICByZXR1cm4gcm91dGU7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIHJvdXRlcyBvYmplY3QgZnJvbSB0aGUgZ2l2ZW4gUmVhY3RDaGlsZHJlbi4gSlNYXG4gKiBwcm92aWRlcyBhIGNvbnZlbmllbnQgd2F5IHRvIHZpc3VhbGl6ZSBob3cgcm91dGVzIGluIHRoZSBoaWVyYXJjaHkgYXJlXG4gKiBuZXN0ZWQuXG4gKlxuICogICBpbXBvcnQgeyBSb3V0ZSwgY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4gfSBmcm9tICdyZWFjdC1yb3V0ZXInXG4gKlxuICogICBjb25zdCByb3V0ZXMgPSBjcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbihcbiAqICAgICA8Um91dGUgY29tcG9uZW50PXtBcHB9PlxuICogICAgICAgPFJvdXRlIHBhdGg9XCJob21lXCIgY29tcG9uZW50PXtEYXNoYm9hcmR9Lz5cbiAqICAgICAgIDxSb3V0ZSBwYXRoPVwibmV3c1wiIGNvbXBvbmVudD17TmV3c0ZlZWR9Lz5cbiAqICAgICA8L1JvdXRlPlxuICogICApXG4gKlxuICogTm90ZTogVGhpcyBtZXRob2QgaXMgYXV0b21hdGljYWxseSB1c2VkIHdoZW4geW91IHByb3ZpZGUgPFJvdXRlPiBjaGlsZHJlblxuICogdG8gYSA8Um91dGVyPiBjb21wb25lbnQuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuKGNoaWxkcmVuLCBwYXJlbnRSb3V0ZSkge1xuICB2YXIgcm91dGVzID0gW107XG5cbiAgX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgaWYgKF9yZWFjdDIuZGVmYXVsdC5pc1ZhbGlkRWxlbWVudChlbGVtZW50KSkge1xuICAgICAgLy8gQ29tcG9uZW50IGNsYXNzZXMgbWF5IGhhdmUgYSBzdGF0aWMgY3JlYXRlKiBtZXRob2QuXG4gICAgICBpZiAoZWxlbWVudC50eXBlLmNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudCkge1xuICAgICAgICB2YXIgcm91dGUgPSBlbGVtZW50LnR5cGUuY3JlYXRlUm91dGVGcm9tUmVhY3RFbGVtZW50KGVsZW1lbnQsIHBhcmVudFJvdXRlKTtcblxuICAgICAgICBpZiAocm91dGUpIHJvdXRlcy5wdXNoKHJvdXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvdXRlcy5wdXNoKGNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudChlbGVtZW50KSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcm91dGVzO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW5kIHJldHVybnMgYW4gYXJyYXkgb2Ygcm91dGVzIGZyb20gdGhlIGdpdmVuIG9iamVjdCB3aGljaFxuICogbWF5IGJlIGEgSlNYIHJvdXRlLCBhIHBsYWluIG9iamVjdCByb3V0ZSwgb3IgYW4gYXJyYXkgb2YgZWl0aGVyLlxuICovXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXMocm91dGVzKSB7XG4gIGlmIChpc1JlYWN0Q2hpbGRyZW4ocm91dGVzKSkge1xuICAgIHJvdXRlcyA9IGNyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuKHJvdXRlcyk7XG4gIH0gZWxzZSBpZiAocm91dGVzICYmICFBcnJheS5pc0FycmF5KHJvdXRlcykpIHtcbiAgICByb3V0ZXMgPSBbcm91dGVzXTtcbiAgfVxuXG4gIHJldHVybiByb3V0ZXM7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUhhc2hIaXN0b3J5ID0gcmVxdWlyZSgnaGlzdG9yeS9saWIvY3JlYXRlSGFzaEhpc3RvcnknKTtcblxudmFyIF9jcmVhdGVIYXNoSGlzdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVIYXNoSGlzdG9yeSk7XG5cbnZhciBfdXNlUXVlcmllcyA9IHJlcXVpcmUoJ2hpc3RvcnkvbGliL3VzZVF1ZXJpZXMnKTtcblxudmFyIF91c2VRdWVyaWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VzZVF1ZXJpZXMpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIgPSByZXF1aXJlKCcuL2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyJyk7XG5cbnZhciBfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIpO1xuXG52YXIgX0ludGVybmFsUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9JbnRlcm5hbFByb3BUeXBlcycpO1xuXG52YXIgX1JvdXRlckNvbnRleHQgPSByZXF1aXJlKCcuL1JvdXRlckNvbnRleHQnKTtcblxudmFyIF9Sb3V0ZXJDb250ZXh0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JvdXRlckNvbnRleHQpO1xuXG52YXIgX1JvdXRlVXRpbHMgPSByZXF1aXJlKCcuL1JvdXRlVXRpbHMnKTtcblxudmFyIF9Sb3V0ZXJVdGlscyA9IHJlcXVpcmUoJy4vUm91dGVyVXRpbHMnKTtcblxudmFyIF9yb3V0ZXJXYXJuaW5nID0gcmVxdWlyZSgnLi9yb3V0ZXJXYXJuaW5nJyk7XG5cbnZhciBfcm91dGVyV2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yb3V0ZXJXYXJuaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBpc0RlcHJlY2F0ZWRIaXN0b3J5KGhpc3RvcnkpIHtcbiAgcmV0dXJuICFoaXN0b3J5IHx8ICFoaXN0b3J5Ll9fdjJfY29tcGF0aWJsZV9fO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogc2FuaXR5IGNoZWNrICovXG5mdW5jdGlvbiBpc1Vuc3VwcG9ydGVkSGlzdG9yeShoaXN0b3J5KSB7XG4gIC8vIHYzIGhpc3RvcmllcyBleHBvc2UgZ2V0Q3VycmVudExvY2F0aW9uLCBidXQgYXJlbid0IGN1cnJlbnRseSBzdXBwb3J0ZWQuXG4gIHJldHVybiBoaXN0b3J5ICYmIGhpc3RvcnkuZ2V0Q3VycmVudExvY2F0aW9uO1xufVxuXG52YXIgX1JlYWN0JFByb3BUeXBlcyA9IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXM7XG52YXIgZnVuYyA9IF9SZWFjdCRQcm9wVHlwZXMuZnVuYztcbnZhciBvYmplY3QgPSBfUmVhY3QkUHJvcFR5cGVzLm9iamVjdDtcblxuLyoqXG4gKiBBIDxSb3V0ZXI+IGlzIGEgaGlnaC1sZXZlbCBBUEkgZm9yIGF1dG9tYXRpY2FsbHkgc2V0dGluZyB1cFxuICogYSByb3V0ZXIgdGhhdCByZW5kZXJzIGEgPFJvdXRlckNvbnRleHQ+IHdpdGggYWxsIHRoZSBwcm9wc1xuICogaXQgbmVlZHMgZWFjaCB0aW1lIHRoZSBVUkwgY2hhbmdlcy5cbiAqL1xuXG52YXIgUm91dGVyID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdSb3V0ZXInLFxuXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgaGlzdG9yeTogb2JqZWN0LFxuICAgIGNoaWxkcmVuOiBfSW50ZXJuYWxQcm9wVHlwZXMucm91dGVzLFxuICAgIHJvdXRlczogX0ludGVybmFsUHJvcFR5cGVzLnJvdXRlcywgLy8gYWxpYXMgZm9yIGNoaWxkcmVuXG4gICAgcmVuZGVyOiBmdW5jLFxuICAgIGNyZWF0ZUVsZW1lbnQ6IGZ1bmMsXG4gICAgb25FcnJvcjogZnVuYyxcbiAgICBvblVwZGF0ZTogZnVuYyxcblxuICAgIC8vIERlcHJlY2F0ZWQ6XG4gICAgcGFyc2VRdWVyeVN0cmluZzogZnVuYyxcbiAgICBzdHJpbmdpZnlRdWVyeTogZnVuYyxcblxuICAgIC8vIFBSSVZBVEU6IEZvciBjbGllbnQtc2lkZSByZWh5ZHJhdGlvbiBvZiBzZXJ2ZXIgbWF0Y2guXG4gICAgbWF0Y2hDb250ZXh0OiBvYmplY3RcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Sb3V0ZXJDb250ZXh0Mi5kZWZhdWx0LCBwcm9wcyk7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvY2F0aW9uOiBudWxsLFxuICAgICAgcm91dGVzOiBudWxsLFxuICAgICAgcGFyYW1zOiBudWxsLFxuICAgICAgY29tcG9uZW50czogbnVsbFxuICAgIH07XG4gIH0sXG4gIGhhbmRsZUVycm9yOiBmdW5jdGlvbiBoYW5kbGVFcnJvcihlcnJvcikge1xuICAgIGlmICh0aGlzLnByb3BzLm9uRXJyb3IpIHtcbiAgICAgIHRoaXMucHJvcHMub25FcnJvci5jYWxsKHRoaXMsIGVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhyb3cgZXJyb3JzIGJ5IGRlZmF1bHQgc28gd2UgZG9uJ3Qgc2lsZW50bHkgc3dhbGxvdyB0aGVtIVxuICAgICAgdGhyb3cgZXJyb3I7IC8vIFRoaXMgZXJyb3IgcHJvYmFibHkgb2NjdXJyZWQgaW4gZ2V0Q2hpbGRSb3V0ZXMgb3IgZ2V0Q29tcG9uZW50cy5cbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgcGFyc2VRdWVyeVN0cmluZyA9IF9wcm9wcy5wYXJzZVF1ZXJ5U3RyaW5nO1xuICAgIHZhciBzdHJpbmdpZnlRdWVyeSA9IF9wcm9wcy5zdHJpbmdpZnlRdWVyeTtcblxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX3JvdXRlcldhcm5pbmcyLmRlZmF1bHQpKCEocGFyc2VRdWVyeVN0cmluZyB8fCBzdHJpbmdpZnlRdWVyeSksICdgcGFyc2VRdWVyeVN0cmluZ2AgYW5kIGBzdHJpbmdpZnlRdWVyeWAgYXJlIGRlcHJlY2F0ZWQuIFBsZWFzZSBjcmVhdGUgYSBjdXN0b20gaGlzdG9yeS4gaHR0cDovL3RpbnkuY2Mvcm91dGVyLWN1c3RvbXF1ZXJ5c3RyaW5nJykgOiB2b2lkIDA7XG5cbiAgICB2YXIgX2NyZWF0ZVJvdXRlck9iamVjdHMgPSB0aGlzLmNyZWF0ZVJvdXRlck9iamVjdHMoKTtcblxuICAgIHZhciBoaXN0b3J5ID0gX2NyZWF0ZVJvdXRlck9iamVjdHMuaGlzdG9yeTtcbiAgICB2YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSBfY3JlYXRlUm91dGVyT2JqZWN0cy50cmFuc2l0aW9uTWFuYWdlcjtcbiAgICB2YXIgcm91dGVyID0gX2NyZWF0ZVJvdXRlck9iamVjdHMucm91dGVyO1xuXG5cbiAgICB0aGlzLl91bmxpc3RlbiA9IHRyYW5zaXRpb25NYW5hZ2VyLmxpc3RlbihmdW5jdGlvbiAoZXJyb3IsIHN0YXRlKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgX3RoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoc3RhdGUsIF90aGlzLnByb3BzLm9uVXBkYXRlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuaGlzdG9yeSA9IGhpc3Rvcnk7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH0sXG4gIGNyZWF0ZVJvdXRlck9iamVjdHM6IGZ1bmN0aW9uIGNyZWF0ZVJvdXRlck9iamVjdHMoKSB7XG4gICAgdmFyIG1hdGNoQ29udGV4dCA9IHRoaXMucHJvcHMubWF0Y2hDb250ZXh0O1xuXG4gICAgaWYgKG1hdGNoQ29udGV4dCkge1xuICAgICAgcmV0dXJuIG1hdGNoQ29udGV4dDtcbiAgICB9XG5cbiAgICB2YXIgaGlzdG9yeSA9IHRoaXMucHJvcHMuaGlzdG9yeTtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHJvdXRlcyA9IF9wcm9wczIucm91dGVzO1xuICAgIHZhciBjaGlsZHJlbiA9IF9wcm9wczIuY2hpbGRyZW47XG5cblxuICAgICEhaXNVbnN1cHBvcnRlZEhpc3RvcnkoaGlzdG9yeSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKGZhbHNlLCAnWW91IGhhdmUgcHJvdmlkZWQgYSBoaXN0b3J5IG9iamVjdCBjcmVhdGVkIHdpdGggaGlzdG9yeSB2My54LiAnICsgJ1RoaXMgdmVyc2lvbiBvZiBSZWFjdCBSb3V0ZXIgaXMgbm90IGNvbXBhdGlibGUgd2l0aCB2MyBoaXN0b3J5ICcgKyAnb2JqZWN0cy4gUGxlYXNlIHVzZSBoaXN0b3J5IHYyLnggaW5zdGVhZC4nKSA6ICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShmYWxzZSkgOiB2b2lkIDA7XG5cbiAgICBpZiAoaXNEZXByZWNhdGVkSGlzdG9yeShoaXN0b3J5KSkge1xuICAgICAgaGlzdG9yeSA9IHRoaXMud3JhcERlcHJlY2F0ZWRIaXN0b3J5KGhpc3RvcnkpO1xuICAgIH1cblxuICAgIHZhciB0cmFuc2l0aW9uTWFuYWdlciA9ICgwLCBfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIyLmRlZmF1bHQpKGhpc3RvcnksICgwLCBfUm91dGVVdGlscy5jcmVhdGVSb3V0ZXMpKHJvdXRlcyB8fCBjaGlsZHJlbikpO1xuICAgIHZhciByb3V0ZXIgPSAoMCwgX1JvdXRlclV0aWxzLmNyZWF0ZVJvdXRlck9iamVjdCkoaGlzdG9yeSwgdHJhbnNpdGlvbk1hbmFnZXIpO1xuICAgIHZhciByb3V0aW5nSGlzdG9yeSA9ICgwLCBfUm91dGVyVXRpbHMuY3JlYXRlUm91dGluZ0hpc3RvcnkpKGhpc3RvcnksIHRyYW5zaXRpb25NYW5hZ2VyKTtcblxuICAgIHJldHVybiB7IGhpc3Rvcnk6IHJvdXRpbmdIaXN0b3J5LCB0cmFuc2l0aW9uTWFuYWdlcjogdHJhbnNpdGlvbk1hbmFnZXIsIHJvdXRlcjogcm91dGVyIH07XG4gIH0sXG4gIHdyYXBEZXByZWNhdGVkSGlzdG9yeTogZnVuY3Rpb24gd3JhcERlcHJlY2F0ZWRIaXN0b3J5KGhpc3RvcnkpIHtcbiAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHBhcnNlUXVlcnlTdHJpbmcgPSBfcHJvcHMzLnBhcnNlUXVlcnlTdHJpbmc7XG4gICAgdmFyIHN0cmluZ2lmeVF1ZXJ5ID0gX3Byb3BzMy5zdHJpbmdpZnlRdWVyeTtcblxuXG4gICAgdmFyIGNyZWF0ZUhpc3RvcnkgPSB2b2lkIDA7XG4gICAgaWYgKGhpc3RvcnkpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX3JvdXRlcldhcm5pbmcyLmRlZmF1bHQpKGZhbHNlLCAnSXQgYXBwZWFycyB5b3UgaGF2ZSBwcm92aWRlZCBhIGRlcHJlY2F0ZWQgaGlzdG9yeSBvYmplY3QgdG8gYDxSb3V0ZXIvPmAsIHBsZWFzZSB1c2UgYSBoaXN0b3J5IHByb3ZpZGVkIGJ5ICcgKyAnUmVhY3QgUm91dGVyIHdpdGggYGltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSBcXCdyZWFjdC1yb3V0ZXJcXCdgIG9yIGBpbXBvcnQgeyBoYXNoSGlzdG9yeSB9IGZyb20gXFwncmVhY3Qtcm91dGVyXFwnYC4gJyArICdJZiB5b3UgYXJlIHVzaW5nIGEgY3VzdG9tIGhpc3RvcnkgcGxlYXNlIGNyZWF0ZSBpdCB3aXRoIGB1c2VSb3V0ZXJIaXN0b3J5YCwgc2VlIGh0dHA6Ly90aW55LmNjL3JvdXRlci11c2luZ2hpc3RvcnkgZm9yIGRldGFpbHMuJykgOiB2b2lkIDA7XG4gICAgICBjcmVhdGVIaXN0b3J5ID0gZnVuY3Rpb24gY3JlYXRlSGlzdG9yeSgpIHtcbiAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF9yb3V0ZXJXYXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ2BSb3V0ZXJgIG5vIGxvbmdlciBkZWZhdWx0cyB0aGUgaGlzdG9yeSBwcm9wIHRvIGhhc2ggaGlzdG9yeS4gUGxlYXNlIHVzZSB0aGUgYGhhc2hIaXN0b3J5YCBzaW5nbGV0b24gaW5zdGVhZC4gaHR0cDovL3RpbnkuY2Mvcm91dGVyLWRlZmF1bHRoaXN0b3J5JykgOiB2b2lkIDA7XG4gICAgICBjcmVhdGVIaXN0b3J5ID0gX2NyZWF0ZUhhc2hIaXN0b3J5Mi5kZWZhdWx0O1xuICAgIH1cblxuICAgIHJldHVybiAoMCwgX3VzZVF1ZXJpZXMyLmRlZmF1bHQpKGNyZWF0ZUhpc3RvcnkpKHsgcGFyc2VRdWVyeVN0cmluZzogcGFyc2VRdWVyeVN0cmluZywgc3RyaW5naWZ5UXVlcnk6IHN0cmluZ2lmeVF1ZXJ5IH0pO1xuICB9LFxuXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IHNhbml0eSBjaGVjayAqL1xuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX3JvdXRlcldhcm5pbmcyLmRlZmF1bHQpKG5leHRQcm9wcy5oaXN0b3J5ID09PSB0aGlzLnByb3BzLmhpc3RvcnksICdZb3UgY2Fubm90IGNoYW5nZSA8Um91dGVyIGhpc3Rvcnk+OyBpdCB3aWxsIGJlIGlnbm9yZWQnKSA6IHZvaWQgMDtcblxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX3JvdXRlcldhcm5pbmcyLmRlZmF1bHQpKChuZXh0UHJvcHMucm91dGVzIHx8IG5leHRQcm9wcy5jaGlsZHJlbikgPT09ICh0aGlzLnByb3BzLnJvdXRlcyB8fCB0aGlzLnByb3BzLmNoaWxkcmVuKSwgJ1lvdSBjYW5ub3QgY2hhbmdlIDxSb3V0ZXIgcm91dGVzPjsgaXQgd2lsbCBiZSBpZ25vcmVkJykgOiB2b2lkIDA7XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5fdW5saXN0ZW4pIHRoaXMuX3VubGlzdGVuKCk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIHZhciBsb2NhdGlvbiA9IF9zdGF0ZS5sb2NhdGlvbjtcbiAgICB2YXIgcm91dGVzID0gX3N0YXRlLnJvdXRlcztcbiAgICB2YXIgcGFyYW1zID0gX3N0YXRlLnBhcmFtcztcbiAgICB2YXIgY29tcG9uZW50cyA9IF9zdGF0ZS5jb21wb25lbnRzO1xuICAgIHZhciBfcHJvcHM0ID0gdGhpcy5wcm9wcztcbiAgICB2YXIgY3JlYXRlRWxlbWVudCA9IF9wcm9wczQuY3JlYXRlRWxlbWVudDtcbiAgICB2YXIgcmVuZGVyID0gX3Byb3BzNC5yZW5kZXI7XG5cbiAgICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzNCwgWydjcmVhdGVFbGVtZW50JywgJ3JlbmRlciddKTtcblxuICAgIGlmIChsb2NhdGlvbiA9PSBudWxsKSByZXR1cm4gbnVsbDsgLy8gQXN5bmMgbWF0Y2hcblxuICAgIC8vIE9ubHkgZm9yd2FyZCBub24tUm91dGVyLXNwZWNpZmljIHByb3BzIHRvIHJvdXRpbmcgY29udGV4dCwgYXMgdGhvc2UgYXJlXG4gICAgLy8gdGhlIG9ubHkgb25lcyB0aGF0IG1pZ2h0IGJlIGN1c3RvbSByb3V0aW5nIGNvbnRleHQgcHJvcHMuXG4gICAgT2JqZWN0LmtleXMoUm91dGVyLnByb3BUeXBlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcFR5cGUpIHtcbiAgICAgIHJldHVybiBkZWxldGUgcHJvcHNbcHJvcFR5cGVdO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlbmRlcihfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIGhpc3Rvcnk6IHRoaXMuaGlzdG9yeSxcbiAgICAgIHJvdXRlcjogdGhpcy5yb3V0ZXIsXG4gICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICByb3V0ZXM6IHJvdXRlcyxcbiAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgY29tcG9uZW50czogY29tcG9uZW50cyxcbiAgICAgIGNyZWF0ZUVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRcbiAgICB9KSk7XG4gIH1cbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfZGVwcmVjYXRlT2JqZWN0UHJvcGVydGllcyA9IHJlcXVpcmUoJy4vZGVwcmVjYXRlT2JqZWN0UHJvcGVydGllcycpO1xuXG52YXIgX2RlcHJlY2F0ZU9iamVjdFByb3BlcnRpZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVwcmVjYXRlT2JqZWN0UHJvcGVydGllcyk7XG5cbnZhciBfZ2V0Um91dGVQYXJhbXMgPSByZXF1aXJlKCcuL2dldFJvdXRlUGFyYW1zJyk7XG5cbnZhciBfZ2V0Um91dGVQYXJhbXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0Um91dGVQYXJhbXMpO1xuXG52YXIgX1JvdXRlVXRpbHMgPSByZXF1aXJlKCcuL1JvdXRlVXRpbHMnKTtcblxudmFyIF9yb3V0ZXJXYXJuaW5nID0gcmVxdWlyZSgnLi9yb3V0ZXJXYXJuaW5nJyk7XG5cbnZhciBfcm91dGVyV2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yb3V0ZXJXYXJuaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIF9SZWFjdCRQcm9wVHlwZXMgPSBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzO1xudmFyIGFycmF5ID0gX1JlYWN0JFByb3BUeXBlcy5hcnJheTtcbnZhciBmdW5jID0gX1JlYWN0JFByb3BUeXBlcy5mdW5jO1xudmFyIG9iamVjdCA9IF9SZWFjdCRQcm9wVHlwZXMub2JqZWN0O1xuXG4vKipcbiAqIEEgPFJvdXRlckNvbnRleHQ+IHJlbmRlcnMgdGhlIGNvbXBvbmVudCB0cmVlIGZvciBhIGdpdmVuIHJvdXRlciBzdGF0ZVxuICogYW5kIHNldHMgdGhlIGhpc3Rvcnkgb2JqZWN0IGFuZCB0aGUgY3VycmVudCBsb2NhdGlvbiBpbiBjb250ZXh0LlxuICovXG5cbnZhciBSb3V0ZXJDb250ZXh0ID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdSb3V0ZXJDb250ZXh0JyxcblxuXG4gIHByb3BUeXBlczoge1xuICAgIGhpc3Rvcnk6IG9iamVjdCxcbiAgICByb3V0ZXI6IG9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGxvY2F0aW9uOiBvYmplY3QuaXNSZXF1aXJlZCxcbiAgICByb3V0ZXM6IGFycmF5LmlzUmVxdWlyZWQsXG4gICAgcGFyYW1zOiBvYmplY3QuaXNSZXF1aXJlZCxcbiAgICBjb21wb25lbnRzOiBhcnJheS5pc1JlcXVpcmVkLFxuICAgIGNyZWF0ZUVsZW1lbnQ6IGZ1bmMuaXNSZXF1aXJlZFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjcmVhdGVFbGVtZW50OiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudFxuICAgIH07XG4gIH0sXG5cblxuICBjaGlsZENvbnRleHRUeXBlczoge1xuICAgIGhpc3Rvcnk6IG9iamVjdCxcbiAgICBsb2NhdGlvbjogb2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgcm91dGVyOiBvYmplY3QuaXNSZXF1aXJlZFxuICB9LFxuXG4gIGdldENoaWxkQ29udGV4dDogZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciByb3V0ZXIgPSBfcHJvcHMucm91dGVyO1xuICAgIHZhciBoaXN0b3J5ID0gX3Byb3BzLmhpc3Rvcnk7XG4gICAgdmFyIGxvY2F0aW9uID0gX3Byb3BzLmxvY2F0aW9uO1xuXG4gICAgaWYgKCFyb3V0ZXIpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX3JvdXRlcldhcm5pbmcyLmRlZmF1bHQpKGZhbHNlLCAnYDxSb3V0ZXJDb250ZXh0PmAgZXhwZWN0cyBhIGByb3V0ZXJgIHJhdGhlciB0aGFuIGEgYGhpc3RvcnlgJykgOiB2b2lkIDA7XG5cbiAgICAgIHJvdXRlciA9IF9leHRlbmRzKHt9LCBoaXN0b3J5LCB7XG4gICAgICAgIHNldFJvdXRlTGVhdmVIb29rOiBoaXN0b3J5Lmxpc3RlbkJlZm9yZUxlYXZpbmdSb3V0ZVxuICAgICAgfSk7XG4gICAgICBkZWxldGUgcm91dGVyLmxpc3RlbkJlZm9yZUxlYXZpbmdSb3V0ZTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgbG9jYXRpb24gPSAoMCwgX2RlcHJlY2F0ZU9iamVjdFByb3BlcnRpZXMyLmRlZmF1bHQpKGxvY2F0aW9uLCAnYGNvbnRleHQubG9jYXRpb25gIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYSByb3V0ZSBjb21wb25lbnRcXCdzIGBwcm9wcy5sb2NhdGlvbmAgaW5zdGVhZC4gaHR0cDovL3RpbnkuY2Mvcm91dGVyLWFjY2Vzc2luZ2xvY2F0aW9uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgaGlzdG9yeTogaGlzdG9yeSwgbG9jYXRpb246IGxvY2F0aW9uLCByb3V0ZXI6IHJvdXRlciB9O1xuICB9LFxuICBjcmVhdGVFbGVtZW50OiBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgcHJvcHMpIHtcbiAgICByZXR1cm4gY29tcG9uZW50ID09IG51bGwgPyBudWxsIDogdGhpcy5wcm9wcy5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgcHJvcHMpO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzO1xuICAgIHZhciBoaXN0b3J5ID0gX3Byb3BzMi5oaXN0b3J5O1xuICAgIHZhciBsb2NhdGlvbiA9IF9wcm9wczIubG9jYXRpb247XG4gICAgdmFyIHJvdXRlcyA9IF9wcm9wczIucm91dGVzO1xuICAgIHZhciBwYXJhbXMgPSBfcHJvcHMyLnBhcmFtcztcbiAgICB2YXIgY29tcG9uZW50cyA9IF9wcm9wczIuY29tcG9uZW50cztcblxuICAgIHZhciBlbGVtZW50ID0gbnVsbDtcblxuICAgIGlmIChjb21wb25lbnRzKSB7XG4gICAgICBlbGVtZW50ID0gY29tcG9uZW50cy5yZWR1Y2VSaWdodChmdW5jdGlvbiAoZWxlbWVudCwgY29tcG9uZW50cywgaW5kZXgpIHtcbiAgICAgICAgaWYgKGNvbXBvbmVudHMgPT0gbnVsbCkgcmV0dXJuIGVsZW1lbnQ7IC8vIERvbid0IGNyZWF0ZSBuZXcgY2hpbGRyZW47IHVzZSB0aGUgZ3JhbmRjaGlsZHJlbi5cblxuICAgICAgICB2YXIgcm91dGUgPSByb3V0ZXNbaW5kZXhdO1xuICAgICAgICB2YXIgcm91dGVQYXJhbXMgPSAoMCwgX2dldFJvdXRlUGFyYW1zMi5kZWZhdWx0KShyb3V0ZSwgcGFyYW1zKTtcbiAgICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICAgIGhpc3Rvcnk6IGhpc3RvcnksXG4gICAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICAgIHJvdXRlOiByb3V0ZSxcbiAgICAgICAgICByb3V0ZVBhcmFtczogcm91dGVQYXJhbXMsXG4gICAgICAgICAgcm91dGVzOiByb3V0ZXNcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoKDAsIF9Sb3V0ZVV0aWxzLmlzUmVhY3RDaGlsZHJlbikoZWxlbWVudCkpIHtcbiAgICAgICAgICBwcm9wcy5jaGlsZHJlbiA9IGVsZW1lbnQ7XG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlbGVtZW50LCBwcm9wKSkgcHJvcHNbcHJvcF0gPSBlbGVtZW50W3Byb3BdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgodHlwZW9mIGNvbXBvbmVudHMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGNvbXBvbmVudHMpKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB2YXIgZWxlbWVudHMgPSB7fTtcblxuICAgICAgICAgIGZvciAodmFyIGtleSBpbiBjb21wb25lbnRzKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbXBvbmVudHMsIGtleSkpIHtcbiAgICAgICAgICAgICAgLy8gUGFzcyB0aHJvdWdoIHRoZSBrZXkgYXMgYSBwcm9wIHRvIGNyZWF0ZUVsZW1lbnQgdG8gYWxsb3dcbiAgICAgICAgICAgICAgLy8gY3VzdG9tIGNyZWF0ZUVsZW1lbnQgZnVuY3Rpb25zIHRvIGtub3cgd2hpY2ggbmFtZWQgY29tcG9uZW50XG4gICAgICAgICAgICAgIC8vIHRoZXkncmUgcmVuZGVyaW5nLCBmb3IgZS5nLiBtYXRjaGluZyB1cCB0byBmZXRjaGVkIGRhdGEuXG4gICAgICAgICAgICAgIGVsZW1lbnRzW2tleV0gPSBfdGhpcy5jcmVhdGVFbGVtZW50KGNvbXBvbmVudHNba2V5XSwgX2V4dGVuZHMoe1xuICAgICAgICAgICAgICAgIGtleToga2V5IH0sIHByb3BzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF90aGlzLmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50cywgcHJvcHMpO1xuICAgICAgfSwgZWxlbWVudCk7XG4gICAgfVxuXG4gICAgIShlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IGZhbHNlIHx8IF9yZWFjdDIuZGVmYXVsdC5pc1ZhbGlkRWxlbWVudChlbGVtZW50KSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKGZhbHNlLCAnVGhlIHJvb3Qgcm91dGUgbXVzdCByZW5kZXIgYSBzaW5nbGUgZWxlbWVudCcpIDogKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKGZhbHNlKSA6IHZvaWQgMDtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5jcmVhdGVSb3V0ZXJPYmplY3QgPSBjcmVhdGVSb3V0ZXJPYmplY3Q7XG5leHBvcnRzLmNyZWF0ZVJvdXRpbmdIaXN0b3J5ID0gY3JlYXRlUm91dGluZ0hpc3Rvcnk7XG5cbnZhciBfZGVwcmVjYXRlT2JqZWN0UHJvcGVydGllcyA9IHJlcXVpcmUoJy4vZGVwcmVjYXRlT2JqZWN0UHJvcGVydGllcycpO1xuXG52YXIgX2RlcHJlY2F0ZU9iamVjdFByb3BlcnRpZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVwcmVjYXRlT2JqZWN0UHJvcGVydGllcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlck9iamVjdChoaXN0b3J5LCB0cmFuc2l0aW9uTWFuYWdlcikge1xuICByZXR1cm4gX2V4dGVuZHMoe30sIGhpc3RvcnksIHtcbiAgICBzZXRSb3V0ZUxlYXZlSG9vazogdHJhbnNpdGlvbk1hbmFnZXIubGlzdGVuQmVmb3JlTGVhdmluZ1JvdXRlLFxuICAgIGlzQWN0aXZlOiB0cmFuc2l0aW9uTWFuYWdlci5pc0FjdGl2ZVxuICB9KTtcbn1cblxuLy8gZGVwcmVjYXRlZFxuZnVuY3Rpb24gY3JlYXRlUm91dGluZ0hpc3RvcnkoaGlzdG9yeSwgdHJhbnNpdGlvbk1hbmFnZXIpIHtcbiAgaGlzdG9yeSA9IF9leHRlbmRzKHt9LCBoaXN0b3J5LCB0cmFuc2l0aW9uTWFuYWdlcik7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBoaXN0b3J5ID0gKDAsIF9kZXByZWNhdGVPYmplY3RQcm9wZXJ0aWVzMi5kZWZhdWx0KShoaXN0b3J5LCAnYHByb3BzLmhpc3RvcnlgIGFuZCBgY29udGV4dC5oaXN0b3J5YCBhcmUgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBgY29udGV4dC5yb3V0ZXJgLiBodHRwOi8vdGlueS5jYy9yb3V0ZXItY29udGV4dGNoYW5nZXMnKTtcbiAgfVxuXG4gIHJldHVybiBoaXN0b3J5O1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX1JvdXRlckNvbnRleHQgPSByZXF1aXJlKCcuL1JvdXRlckNvbnRleHQnKTtcblxudmFyIF9Sb3V0ZXJDb250ZXh0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JvdXRlckNvbnRleHQpO1xuXG52YXIgX3JvdXRlcldhcm5pbmcgPSByZXF1aXJlKCcuL3JvdXRlcldhcm5pbmcnKTtcblxudmFyIF9yb3V0ZXJXYXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JvdXRlcldhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgUm91dGluZ0NvbnRleHQgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1JvdXRpbmdDb250ZXh0JyxcbiAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfcm91dGVyV2FybmluZzIuZGVmYXVsdCkoZmFsc2UsICdgUm91dGluZ0NvbnRleHRgIGhhcyBiZWVuIHJlbmFtZWQgdG8gYFJvdXRlckNvbnRleHRgLiBQbGVhc2UgdXNlIGBpbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSBcXCdyZWFjdC1yb3V0ZXJcXCdgLiBodHRwOi8vdGlueS5jYy9yb3V0ZXItcm91dGVyY29udGV4dCcpIDogdm9pZCAwO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1JvdXRlckNvbnRleHQyLmRlZmF1bHQsIHRoaXMucHJvcHMpO1xuICB9XG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGluZ0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnJ1bkVudGVySG9va3MgPSBydW5FbnRlckhvb2tzO1xuZXhwb3J0cy5ydW5DaGFuZ2VIb29rcyA9IHJ1bkNoYW5nZUhvb2tzO1xuZXhwb3J0cy5ydW5MZWF2ZUhvb2tzID0gcnVuTGVhdmVIb29rcztcblxudmFyIF9Bc3luY1V0aWxzID0gcmVxdWlyZSgnLi9Bc3luY1V0aWxzJyk7XG5cbnZhciBfcm91dGVyV2FybmluZyA9IHJlcXVpcmUoJy4vcm91dGVyV2FybmluZycpO1xuXG52YXIgX3JvdXRlcldhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm91dGVyV2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGNyZWF0ZVRyYW5zaXRpb25Ib29rKGhvb2ssIHJvdXRlLCBhc3luY0FyaXR5KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaG9vay5hcHBseShyb3V0ZSwgYXJncyk7XG5cbiAgICBpZiAoaG9vay5sZW5ndGggPCBhc3luY0FyaXR5KSB7XG4gICAgICB2YXIgY2FsbGJhY2sgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG4gICAgICAvLyBBc3N1bWUgaG9vayBleGVjdXRlcyBzeW5jaHJvbm91c2x5IGFuZFxuICAgICAgLy8gYXV0b21hdGljYWxseSBjYWxsIHRoZSBjYWxsYmFjay5cbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRFbnRlckhvb2tzKHJvdXRlcykge1xuICByZXR1cm4gcm91dGVzLnJlZHVjZShmdW5jdGlvbiAoaG9va3MsIHJvdXRlKSB7XG4gICAgaWYgKHJvdXRlLm9uRW50ZXIpIGhvb2tzLnB1c2goY3JlYXRlVHJhbnNpdGlvbkhvb2socm91dGUub25FbnRlciwgcm91dGUsIDMpKTtcblxuICAgIHJldHVybiBob29rcztcbiAgfSwgW10pO1xufVxuXG5mdW5jdGlvbiBnZXRDaGFuZ2VIb29rcyhyb3V0ZXMpIHtcbiAgcmV0dXJuIHJvdXRlcy5yZWR1Y2UoZnVuY3Rpb24gKGhvb2tzLCByb3V0ZSkge1xuICAgIGlmIChyb3V0ZS5vbkNoYW5nZSkgaG9va3MucHVzaChjcmVhdGVUcmFuc2l0aW9uSG9vayhyb3V0ZS5vbkNoYW5nZSwgcm91dGUsIDQpKTtcbiAgICByZXR1cm4gaG9va3M7XG4gIH0sIFtdKTtcbn1cblxuZnVuY3Rpb24gcnVuVHJhbnNpdGlvbkhvb2tzKGxlbmd0aCwgaXRlciwgY2FsbGJhY2spIHtcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBjYWxsYmFjaygpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciByZWRpcmVjdEluZm8gPSB2b2lkIDA7XG4gIGZ1bmN0aW9uIHJlcGxhY2UobG9jYXRpb24sIGRlcHJlY2F0ZWRQYXRobmFtZSwgZGVwcmVjYXRlZFF1ZXJ5KSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRQYXRobmFtZSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfcm91dGVyV2FybmluZzIuZGVmYXVsdCkoZmFsc2UsICdgcmVwbGFjZVN0YXRlKHN0YXRlLCBwYXRobmFtZSwgcXVlcnkpIGlzIGRlcHJlY2F0ZWQ7IHVzZSBgcmVwbGFjZShsb2NhdGlvbilgIHdpdGggYSBsb2NhdGlvbiBkZXNjcmlwdG9yIGluc3RlYWQuIGh0dHA6Ly90aW55LmNjL3JvdXRlci1pc0FjdGl2ZWRlcHJlY2F0ZWQnKSA6IHZvaWQgMDtcbiAgICAgIHJlZGlyZWN0SW5mbyA9IHtcbiAgICAgICAgcGF0aG5hbWU6IGRlcHJlY2F0ZWRQYXRobmFtZSxcbiAgICAgICAgcXVlcnk6IGRlcHJlY2F0ZWRRdWVyeSxcbiAgICAgICAgc3RhdGU6IGxvY2F0aW9uXG4gICAgICB9O1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmVkaXJlY3RJbmZvID0gbG9jYXRpb247XG4gIH1cblxuICAoMCwgX0FzeW5jVXRpbHMubG9vcEFzeW5jKShsZW5ndGgsIGZ1bmN0aW9uIChpbmRleCwgbmV4dCwgZG9uZSkge1xuICAgIGl0ZXIoaW5kZXgsIHJlcGxhY2UsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yIHx8IHJlZGlyZWN0SW5mbykge1xuICAgICAgICBkb25lKGVycm9yLCByZWRpcmVjdEluZm8pOyAvLyBObyBuZWVkIHRvIGNvbnRpbnVlLlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBjYWxsYmFjayk7XG59XG5cbi8qKlxuICogUnVucyBhbGwgb25FbnRlciBob29rcyBpbiB0aGUgZ2l2ZW4gYXJyYXkgb2Ygcm91dGVzIGluIG9yZGVyXG4gKiB3aXRoIG9uRW50ZXIobmV4dFN0YXRlLCByZXBsYWNlLCBjYWxsYmFjaykgYW5kIGNhbGxzXG4gKiBjYWxsYmFjayhlcnJvciwgcmVkaXJlY3RJbmZvKSB3aGVuIGZpbmlzaGVkLiBUaGUgZmlyc3QgaG9va1xuICogdG8gdXNlIHJlcGxhY2Ugc2hvcnQtY2lyY3VpdHMgdGhlIGxvb3AuXG4gKlxuICogSWYgYSBob29rIG5lZWRzIHRvIHJ1biBhc3luY2hyb25vdXNseSwgaXQgbWF5IHVzZSB0aGUgY2FsbGJhY2tcbiAqIGZ1bmN0aW9uLiBIb3dldmVyLCBkb2luZyBzbyB3aWxsIGNhdXNlIHRoZSB0cmFuc2l0aW9uIHRvIHBhdXNlLFxuICogd2hpY2ggY291bGQgbGVhZCB0byBhIG5vbi1yZXNwb25zaXZlIFVJIGlmIHRoZSBob29rIGlzIHNsb3cuXG4gKi9cbmZ1bmN0aW9uIHJ1bkVudGVySG9va3Mocm91dGVzLCBuZXh0U3RhdGUsIGNhbGxiYWNrKSB7XG4gIHZhciBob29rcyA9IGdldEVudGVySG9va3Mocm91dGVzKTtcbiAgcmV0dXJuIHJ1blRyYW5zaXRpb25Ib29rcyhob29rcy5sZW5ndGgsIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZSwgbmV4dCkge1xuICAgIGhvb2tzW2luZGV4XShuZXh0U3RhdGUsIHJlcGxhY2UsIG5leHQpO1xuICB9LCBjYWxsYmFjayk7XG59XG5cbi8qKlxuICogUnVucyBhbGwgb25DaGFuZ2UgaG9va3MgaW4gdGhlIGdpdmVuIGFycmF5IG9mIHJvdXRlcyBpbiBvcmRlclxuICogd2l0aCBvbkNoYW5nZShwcmV2U3RhdGUsIG5leHRTdGF0ZSwgcmVwbGFjZSwgY2FsbGJhY2spIGFuZCBjYWxsc1xuICogY2FsbGJhY2soZXJyb3IsIHJlZGlyZWN0SW5mbykgd2hlbiBmaW5pc2hlZC4gVGhlIGZpcnN0IGhvb2tcbiAqIHRvIHVzZSByZXBsYWNlIHNob3J0LWNpcmN1aXRzIHRoZSBsb29wLlxuICpcbiAqIElmIGEgaG9vayBuZWVkcyB0byBydW4gYXN5bmNocm9ub3VzbHksIGl0IG1heSB1c2UgdGhlIGNhbGxiYWNrXG4gKiBmdW5jdGlvbi4gSG93ZXZlciwgZG9pbmcgc28gd2lsbCBjYXVzZSB0aGUgdHJhbnNpdGlvbiB0byBwYXVzZSxcbiAqIHdoaWNoIGNvdWxkIGxlYWQgdG8gYSBub24tcmVzcG9uc2l2ZSBVSSBpZiB0aGUgaG9vayBpcyBzbG93LlxuICovXG5mdW5jdGlvbiBydW5DaGFuZ2VIb29rcyhyb3V0ZXMsIHN0YXRlLCBuZXh0U3RhdGUsIGNhbGxiYWNrKSB7XG4gIHZhciBob29rcyA9IGdldENoYW5nZUhvb2tzKHJvdXRlcyk7XG4gIHJldHVybiBydW5UcmFuc2l0aW9uSG9va3MoaG9va3MubGVuZ3RoLCBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2UsIG5leHQpIHtcbiAgICBob29rc1tpbmRleF0oc3RhdGUsIG5leHRTdGF0ZSwgcmVwbGFjZSwgbmV4dCk7XG4gIH0sIGNhbGxiYWNrKTtcbn1cblxuLyoqXG4gKiBSdW5zIGFsbCBvbkxlYXZlIGhvb2tzIGluIHRoZSBnaXZlbiBhcnJheSBvZiByb3V0ZXMgaW4gb3JkZXIuXG4gKi9cbmZ1bmN0aW9uIHJ1bkxlYXZlSG9va3Mocm91dGVzLCBwcmV2U3RhdGUpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHJvdXRlcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChyb3V0ZXNbaV0ub25MZWF2ZSkgcm91dGVzW2ldLm9uTGVhdmUuY2FsbChyb3V0ZXNbaV0sIHByZXZTdGF0ZSk7XG4gIH1cbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9Sb3V0ZXJDb250ZXh0ID0gcmVxdWlyZSgnLi9Sb3V0ZXJDb250ZXh0Jyk7XG5cbnZhciBfUm91dGVyQ29udGV4dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3V0ZXJDb250ZXh0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWlkZGxld2FyZXMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBtaWRkbGV3YXJlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciB3aXRoQ29udGV4dCA9IG1pZGRsZXdhcmVzLm1hcChmdW5jdGlvbiAobSkge1xuICAgIHJldHVybiBtLnJlbmRlclJvdXRlckNvbnRleHQ7XG4gIH0pLmZpbHRlcihmdW5jdGlvbiAoZikge1xuICAgIHJldHVybiBmO1xuICB9KTtcbiAgdmFyIHdpdGhDb21wb25lbnQgPSBtaWRkbGV3YXJlcy5tYXAoZnVuY3Rpb24gKG0pIHtcbiAgICByZXR1cm4gbS5yZW5kZXJSb3V0ZUNvbXBvbmVudDtcbiAgfSkuZmlsdGVyKGZ1bmN0aW9uIChmKSB7XG4gICAgcmV0dXJuIGY7XG4gIH0pO1xuICB2YXIgbWFrZUNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiBtYWtlQ3JlYXRlRWxlbWVudCgpIHtcbiAgICB2YXIgYmFzZUNyZWF0ZUVsZW1lbnQgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyBfcmVhY3QuY3JlYXRlRWxlbWVudCA6IGFyZ3VtZW50c1swXTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKENvbXBvbmVudCwgcHJvcHMpIHtcbiAgICAgIHJldHVybiB3aXRoQ29tcG9uZW50LnJlZHVjZVJpZ2h0KGZ1bmN0aW9uIChwcmV2aW91cywgcmVuZGVyUm91dGVDb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIHJlbmRlclJvdXRlQ29tcG9uZW50KHByZXZpb3VzLCBwcm9wcyk7XG4gICAgICB9LCBiYXNlQ3JlYXRlRWxlbWVudChDb21wb25lbnQsIHByb3BzKSk7XG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24gKHJlbmRlclByb3BzKSB7XG4gICAgcmV0dXJuIHdpdGhDb250ZXh0LnJlZHVjZVJpZ2h0KGZ1bmN0aW9uIChwcmV2aW91cywgcmVuZGVyUm91dGVyQ29udGV4dCkge1xuICAgICAgcmV0dXJuIHJlbmRlclJvdXRlckNvbnRleHQocHJldmlvdXMsIHJlbmRlclByb3BzKTtcbiAgICB9LCBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfUm91dGVyQ29udGV4dDIuZGVmYXVsdCwgX2V4dGVuZHMoe30sIHJlbmRlclByb3BzLCB7XG4gICAgICBjcmVhdGVFbGVtZW50OiBtYWtlQ3JlYXRlRWxlbWVudChyZW5kZXJQcm9wcy5jcmVhdGVFbGVtZW50KVxuICAgIH0pKSk7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfY3JlYXRlQnJvd3Nlckhpc3RvcnkgPSByZXF1aXJlKCdoaXN0b3J5L2xpYi9jcmVhdGVCcm93c2VySGlzdG9yeScpO1xuXG52YXIgX2NyZWF0ZUJyb3dzZXJIaXN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUJyb3dzZXJIaXN0b3J5KTtcblxudmFyIF9jcmVhdGVSb3V0ZXJIaXN0b3J5ID0gcmVxdWlyZSgnLi9jcmVhdGVSb3V0ZXJIaXN0b3J5Jyk7XG5cbnZhciBfY3JlYXRlUm91dGVySGlzdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVSb3V0ZXJIaXN0b3J5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9jcmVhdGVSb3V0ZXJIaXN0b3J5Mi5kZWZhdWx0KShfY3JlYXRlQnJvd3Nlckhpc3RvcnkyLmRlZmF1bHQpO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX1BhdHRlcm5VdGlscyA9IHJlcXVpcmUoJy4vUGF0dGVyblV0aWxzJyk7XG5cbmZ1bmN0aW9uIHJvdXRlUGFyYW1zQ2hhbmdlZChyb3V0ZSwgcHJldlN0YXRlLCBuZXh0U3RhdGUpIHtcbiAgaWYgKCFyb3V0ZS5wYXRoKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIHBhcmFtTmFtZXMgPSAoMCwgX1BhdHRlcm5VdGlscy5nZXRQYXJhbU5hbWVzKShyb3V0ZS5wYXRoKTtcblxuICByZXR1cm4gcGFyYW1OYW1lcy5zb21lKGZ1bmN0aW9uIChwYXJhbU5hbWUpIHtcbiAgICByZXR1cm4gcHJldlN0YXRlLnBhcmFtc1twYXJhbU5hbWVdICE9PSBuZXh0U3RhdGUucGFyYW1zW3BhcmFtTmFtZV07XG4gIH0pO1xufVxuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IG9mIHsgbGVhdmVSb3V0ZXMsIGNoYW5nZVJvdXRlcywgZW50ZXJSb3V0ZXMgfSBkZXRlcm1pbmVkIGJ5XG4gKiB0aGUgY2hhbmdlIGZyb20gcHJldlN0YXRlIHRvIG5leHRTdGF0ZS4gV2UgbGVhdmUgcm91dGVzIGlmIGVpdGhlclxuICogMSkgdGhleSBhcmUgbm90IGluIHRoZSBuZXh0IHN0YXRlIG9yIDIpIHRoZXkgYXJlIGluIHRoZSBuZXh0IHN0YXRlXG4gKiBidXQgdGhlaXIgcGFyYW1zIGhhdmUgY2hhbmdlZCAoaS5lLiAvdXNlcnMvMTIzID0+IC91c2Vycy80NTYpLlxuICpcbiAqIGxlYXZlUm91dGVzIGFyZSBvcmRlcmVkIHN0YXJ0aW5nIGF0IHRoZSBsZWFmIHJvdXRlIG9mIHRoZSB0cmVlXG4gKiB3ZSdyZSBsZWF2aW5nIHVwIHRvIHRoZSBjb21tb24gcGFyZW50IHJvdXRlLiBlbnRlclJvdXRlcyBhcmUgb3JkZXJlZFxuICogZnJvbSB0aGUgdG9wIG9mIHRoZSB0cmVlIHdlJ3JlIGVudGVyaW5nIGRvd24gdG8gdGhlIGxlYWYgcm91dGUuXG4gKlxuICogY2hhbmdlUm91dGVzIGFyZSBhbnkgcm91dGVzIHRoYXQgZGlkbid0IGxlYXZlIG9yIGVudGVyIGR1cmluZ1xuICogdGhlIHRyYW5zaXRpb24uXG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVDaGFuZ2VkUm91dGVzKHByZXZTdGF0ZSwgbmV4dFN0YXRlKSB7XG4gIHZhciBwcmV2Um91dGVzID0gcHJldlN0YXRlICYmIHByZXZTdGF0ZS5yb3V0ZXM7XG4gIHZhciBuZXh0Um91dGVzID0gbmV4dFN0YXRlLnJvdXRlcztcblxuICB2YXIgbGVhdmVSb3V0ZXMgPSB2b2lkIDAsXG4gICAgICBjaGFuZ2VSb3V0ZXMgPSB2b2lkIDAsXG4gICAgICBlbnRlclJvdXRlcyA9IHZvaWQgMDtcbiAgaWYgKHByZXZSb3V0ZXMpIHtcbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHBhcmVudElzTGVhdmluZyA9IGZhbHNlO1xuICAgICAgbGVhdmVSb3V0ZXMgPSBwcmV2Um91dGVzLmZpbHRlcihmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgICAgaWYgKHBhcmVudElzTGVhdmluZykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBpc0xlYXZpbmcgPSBuZXh0Um91dGVzLmluZGV4T2Yocm91dGUpID09PSAtMSB8fCByb3V0ZVBhcmFtc0NoYW5nZWQocm91dGUsIHByZXZTdGF0ZSwgbmV4dFN0YXRlKTtcbiAgICAgICAgICBpZiAoaXNMZWF2aW5nKSBwYXJlbnRJc0xlYXZpbmcgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBpc0xlYXZpbmc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBvbkxlYXZlIGhvb2tzIHN0YXJ0IGF0IHRoZSBsZWFmIHJvdXRlLlxuICAgICAgbGVhdmVSb3V0ZXMucmV2ZXJzZSgpO1xuXG4gICAgICBlbnRlclJvdXRlcyA9IFtdO1xuICAgICAgY2hhbmdlUm91dGVzID0gW107XG5cbiAgICAgIG5leHRSb3V0ZXMuZm9yRWFjaChmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgICAgdmFyIGlzTmV3ID0gcHJldlJvdXRlcy5pbmRleE9mKHJvdXRlKSA9PT0gLTE7XG4gICAgICAgIHZhciBwYXJhbXNDaGFuZ2VkID0gbGVhdmVSb3V0ZXMuaW5kZXhPZihyb3V0ZSkgIT09IC0xO1xuXG4gICAgICAgIGlmIChpc05ldyB8fCBwYXJhbXNDaGFuZ2VkKSBlbnRlclJvdXRlcy5wdXNoKHJvdXRlKTtlbHNlIGNoYW5nZVJvdXRlcy5wdXNoKHJvdXRlKTtcbiAgICAgIH0pO1xuICAgIH0pKCk7XG4gIH0gZWxzZSB7XG4gICAgbGVhdmVSb3V0ZXMgPSBbXTtcbiAgICBjaGFuZ2VSb3V0ZXMgPSBbXTtcbiAgICBlbnRlclJvdXRlcyA9IG5leHRSb3V0ZXM7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxlYXZlUm91dGVzOiBsZWF2ZVJvdXRlcyxcbiAgICBjaGFuZ2VSb3V0ZXM6IGNoYW5nZVJvdXRlcyxcbiAgICBlbnRlclJvdXRlczogZW50ZXJSb3V0ZXNcbiAgfTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gY29tcHV0ZUNoYW5nZWRSb3V0ZXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVNZW1vcnlIaXN0b3J5O1xuXG52YXIgX3VzZVF1ZXJpZXMgPSByZXF1aXJlKCdoaXN0b3J5L2xpYi91c2VRdWVyaWVzJyk7XG5cbnZhciBfdXNlUXVlcmllczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91c2VRdWVyaWVzKTtcblxudmFyIF91c2VCYXNlbmFtZSA9IHJlcXVpcmUoJ2hpc3RvcnkvbGliL3VzZUJhc2VuYW1lJyk7XG5cbnZhciBfdXNlQmFzZW5hbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXNlQmFzZW5hbWUpO1xuXG52YXIgX2NyZWF0ZU1lbW9yeUhpc3RvcnkgPSByZXF1aXJlKCdoaXN0b3J5L2xpYi9jcmVhdGVNZW1vcnlIaXN0b3J5Jyk7XG5cbnZhciBfY3JlYXRlTWVtb3J5SGlzdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVNZW1vcnlIaXN0b3J5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gY3JlYXRlTWVtb3J5SGlzdG9yeShvcHRpb25zKSB7XG4gIC8vIHNpZ25hdHVyZXMgYW5kIHR5cGUgY2hlY2tpbmcgZGlmZmVyIGJldHdlZW4gYHVzZVJvdXRlc2AgYW5kXG4gIC8vIGBjcmVhdGVNZW1vcnlIaXN0b3J5YCwgaGF2ZSB0byBjcmVhdGUgYG1lbW9yeUhpc3RvcnlgIGZpcnN0IGJlY2F1c2VcbiAgLy8gYHVzZVF1ZXJpZXNgIGRvZXNuJ3QgdW5kZXJzdGFuZCB0aGUgc2lnbmF0dXJlXG4gIHZhciBtZW1vcnlIaXN0b3J5ID0gKDAsIF9jcmVhdGVNZW1vcnlIaXN0b3J5Mi5kZWZhdWx0KShvcHRpb25zKTtcbiAgdmFyIGNyZWF0ZUhpc3RvcnkgPSBmdW5jdGlvbiBjcmVhdGVIaXN0b3J5KCkge1xuICAgIHJldHVybiBtZW1vcnlIaXN0b3J5O1xuICB9O1xuICB2YXIgaGlzdG9yeSA9ICgwLCBfdXNlUXVlcmllczIuZGVmYXVsdCkoKDAsIF91c2VCYXNlbmFtZTIuZGVmYXVsdCkoY3JlYXRlSGlzdG9yeSkpKG9wdGlvbnMpO1xuICBoaXN0b3J5Ll9fdjJfY29tcGF0aWJsZV9fID0gdHJ1ZTtcbiAgcmV0dXJuIGhpc3Rvcnk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChjcmVhdGVIaXN0b3J5KSB7XG4gIHZhciBoaXN0b3J5ID0gdm9pZCAwO1xuICBpZiAoY2FuVXNlRE9NKSBoaXN0b3J5ID0gKDAsIF91c2VSb3V0ZXJIaXN0b3J5Mi5kZWZhdWx0KShjcmVhdGVIaXN0b3J5KSgpO1xuICByZXR1cm4gaGlzdG9yeTtcbn07XG5cbnZhciBfdXNlUm91dGVySGlzdG9yeSA9IHJlcXVpcmUoJy4vdXNlUm91dGVySGlzdG9yeScpO1xuXG52YXIgX3VzZVJvdXRlckhpc3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXNlUm91dGVySGlzdG9yeSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyO1xuXG52YXIgX3JvdXRlcldhcm5pbmcgPSByZXF1aXJlKCcuL3JvdXRlcldhcm5pbmcnKTtcblxudmFyIF9yb3V0ZXJXYXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JvdXRlcldhcm5pbmcpO1xuXG52YXIgX0FjdGlvbnMgPSByZXF1aXJlKCdoaXN0b3J5L2xpYi9BY3Rpb25zJyk7XG5cbnZhciBfY29tcHV0ZUNoYW5nZWRSb3V0ZXMyID0gcmVxdWlyZSgnLi9jb21wdXRlQ2hhbmdlZFJvdXRlcycpO1xuXG52YXIgX2NvbXB1dGVDaGFuZ2VkUm91dGVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXB1dGVDaGFuZ2VkUm91dGVzMik7XG5cbnZhciBfVHJhbnNpdGlvblV0aWxzID0gcmVxdWlyZSgnLi9UcmFuc2l0aW9uVXRpbHMnKTtcblxudmFyIF9pc0FjdGl2ZTIgPSByZXF1aXJlKCcuL2lzQWN0aXZlJyk7XG5cbnZhciBfaXNBY3RpdmUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNBY3RpdmUyKTtcblxudmFyIF9nZXRDb21wb25lbnRzID0gcmVxdWlyZSgnLi9nZXRDb21wb25lbnRzJyk7XG5cbnZhciBfZ2V0Q29tcG9uZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRDb21wb25lbnRzKTtcblxudmFyIF9tYXRjaFJvdXRlcyA9IHJlcXVpcmUoJy4vbWF0Y2hSb3V0ZXMnKTtcblxudmFyIF9tYXRjaFJvdXRlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXRjaFJvdXRlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGhhc0FueVByb3BlcnRpZXMob2JqZWN0KSB7XG4gIGZvciAodmFyIHAgaW4gb2JqZWN0KSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHApKSByZXR1cm4gdHJ1ZTtcbiAgfXJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIoaGlzdG9yeSwgcm91dGVzKSB7XG4gIHZhciBzdGF0ZSA9IHt9O1xuXG4gIC8vIFNpZ25hdHVyZSBzaG91bGQgYmUgKGxvY2F0aW9uLCBpbmRleE9ubHkpLCBidXQgbmVlZHMgdG8gc3VwcG9ydCAocGF0aCxcbiAgLy8gcXVlcnksIGluZGV4T25seSlcbiAgZnVuY3Rpb24gaXNBY3RpdmUobG9jYXRpb24pIHtcbiAgICB2YXIgaW5kZXhPbmx5T3JEZXByZWNhdGVkUXVlcnkgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IGFyZ3VtZW50c1sxXTtcbiAgICB2YXIgZGVwcmVjYXRlZEluZGV4T25seSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbMl07XG5cbiAgICB2YXIgaW5kZXhPbmx5ID0gdm9pZCAwO1xuICAgIGlmIChpbmRleE9ubHlPckRlcHJlY2F0ZWRRdWVyeSAmJiBpbmRleE9ubHlPckRlcHJlY2F0ZWRRdWVyeSAhPT0gdHJ1ZSB8fCBkZXByZWNhdGVkSW5kZXhPbmx5ICE9PSBudWxsKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF9yb3V0ZXJXYXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ2Bpc0FjdGl2ZShwYXRobmFtZSwgcXVlcnksIGluZGV4T25seSkgaXMgZGVwcmVjYXRlZDsgdXNlIGBpc0FjdGl2ZShsb2NhdGlvbiwgaW5kZXhPbmx5KWAgd2l0aCBhIGxvY2F0aW9uIGRlc2NyaXB0b3IgaW5zdGVhZC4gaHR0cDovL3RpbnkuY2Mvcm91dGVyLWlzQWN0aXZlZGVwcmVjYXRlZCcpIDogdm9pZCAwO1xuICAgICAgbG9jYXRpb24gPSB7IHBhdGhuYW1lOiBsb2NhdGlvbiwgcXVlcnk6IGluZGV4T25seU9yRGVwcmVjYXRlZFF1ZXJ5IH07XG4gICAgICBpbmRleE9ubHkgPSBkZXByZWNhdGVkSW5kZXhPbmx5IHx8IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbiA9IGhpc3RvcnkuY3JlYXRlTG9jYXRpb24obG9jYXRpb24pO1xuICAgICAgaW5kZXhPbmx5ID0gaW5kZXhPbmx5T3JEZXByZWNhdGVkUXVlcnk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgwLCBfaXNBY3RpdmUzLmRlZmF1bHQpKGxvY2F0aW9uLCBpbmRleE9ubHksIHN0YXRlLmxvY2F0aW9uLCBzdGF0ZS5yb3V0ZXMsIHN0YXRlLnBhcmFtcyk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVMb2NhdGlvbkZyb21SZWRpcmVjdEluZm8obG9jYXRpb24pIHtcbiAgICByZXR1cm4gaGlzdG9yeS5jcmVhdGVMb2NhdGlvbihsb2NhdGlvbiwgX0FjdGlvbnMuUkVQTEFDRSk7XG4gIH1cblxuICB2YXIgcGFydGlhbE5leHRTdGF0ZSA9IHZvaWQgMDtcblxuICBmdW5jdGlvbiBtYXRjaChsb2NhdGlvbiwgY2FsbGJhY2spIHtcbiAgICBpZiAocGFydGlhbE5leHRTdGF0ZSAmJiBwYXJ0aWFsTmV4dFN0YXRlLmxvY2F0aW9uID09PSBsb2NhdGlvbikge1xuICAgICAgLy8gQ29udGludWUgZnJvbSB3aGVyZSB3ZSBsZWZ0IG9mZi5cbiAgICAgIGZpbmlzaE1hdGNoKHBhcnRpYWxOZXh0U3RhdGUsIGNhbGxiYWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgKDAsIF9tYXRjaFJvdXRlczIuZGVmYXVsdCkocm91dGVzLCBsb2NhdGlvbiwgZnVuY3Rpb24gKGVycm9yLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICB9IGVsc2UgaWYgKG5leHRTdGF0ZSkge1xuICAgICAgICAgIGZpbmlzaE1hdGNoKF9leHRlbmRzKHt9LCBuZXh0U3RhdGUsIHsgbG9jYXRpb246IGxvY2F0aW9uIH0pLCBjYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmluaXNoTWF0Y2gobmV4dFN0YXRlLCBjYWxsYmFjaykge1xuICAgIHZhciBfY29tcHV0ZUNoYW5nZWRSb3V0ZXMgPSAoMCwgX2NvbXB1dGVDaGFuZ2VkUm91dGVzMy5kZWZhdWx0KShzdGF0ZSwgbmV4dFN0YXRlKTtcblxuICAgIHZhciBsZWF2ZVJvdXRlcyA9IF9jb21wdXRlQ2hhbmdlZFJvdXRlcy5sZWF2ZVJvdXRlcztcbiAgICB2YXIgY2hhbmdlUm91dGVzID0gX2NvbXB1dGVDaGFuZ2VkUm91dGVzLmNoYW5nZVJvdXRlcztcbiAgICB2YXIgZW50ZXJSb3V0ZXMgPSBfY29tcHV0ZUNoYW5nZWRSb3V0ZXMuZW50ZXJSb3V0ZXM7XG5cblxuICAgICgwLCBfVHJhbnNpdGlvblV0aWxzLnJ1bkxlYXZlSG9va3MpKGxlYXZlUm91dGVzLCBzdGF0ZSk7XG5cbiAgICAvLyBUZWFyIGRvd24gY29uZmlybWF0aW9uIGhvb2tzIGZvciBsZWZ0IHJvdXRlc1xuICAgIGxlYXZlUm91dGVzLmZpbHRlcihmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHJldHVybiBlbnRlclJvdXRlcy5pbmRleE9mKHJvdXRlKSA9PT0gLTE7XG4gICAgfSkuZm9yRWFjaChyZW1vdmVMaXN0ZW5CZWZvcmVIb29rc0ZvclJvdXRlKTtcblxuICAgIC8vIGNoYW5nZSBhbmQgZW50ZXIgaG9va3MgYXJlIHJ1biBpbiBzZXJpZXNcbiAgICAoMCwgX1RyYW5zaXRpb25VdGlscy5ydW5DaGFuZ2VIb29rcykoY2hhbmdlUm91dGVzLCBzdGF0ZSwgbmV4dFN0YXRlLCBmdW5jdGlvbiAoZXJyb3IsIHJlZGlyZWN0SW5mbykge1xuICAgICAgaWYgKGVycm9yIHx8IHJlZGlyZWN0SW5mbykgcmV0dXJuIGhhbmRsZUVycm9yT3JSZWRpcmVjdChlcnJvciwgcmVkaXJlY3RJbmZvKTtcblxuICAgICAgKDAsIF9UcmFuc2l0aW9uVXRpbHMucnVuRW50ZXJIb29rcykoZW50ZXJSb3V0ZXMsIG5leHRTdGF0ZSwgZmluaXNoRW50ZXJIb29rcyk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBmaW5pc2hFbnRlckhvb2tzKGVycm9yLCByZWRpcmVjdEluZm8pIHtcbiAgICAgIGlmIChlcnJvciB8fCByZWRpcmVjdEluZm8pIHJldHVybiBoYW5kbGVFcnJvck9yUmVkaXJlY3QoZXJyb3IsIHJlZGlyZWN0SW5mbyk7XG5cbiAgICAgIC8vIFRPRE86IEZldGNoIGNvbXBvbmVudHMgYWZ0ZXIgc3RhdGUgaXMgdXBkYXRlZC5cbiAgICAgICgwLCBfZ2V0Q29tcG9uZW50czIuZGVmYXVsdCkobmV4dFN0YXRlLCBmdW5jdGlvbiAoZXJyb3IsIGNvbXBvbmVudHMpIHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFRPRE86IE1ha2UgbWF0Y2ggYSBwdXJlIGZ1bmN0aW9uIGFuZCBoYXZlIHNvbWUgb3RoZXIgQVBJXG4gICAgICAgICAgLy8gZm9yIFwibWF0Y2ggYW5kIHVwZGF0ZSBzdGF0ZVwiLlxuICAgICAgICAgIGNhbGxiYWNrKG51bGwsIG51bGwsIHN0YXRlID0gX2V4dGVuZHMoe30sIG5leHRTdGF0ZSwgeyBjb21wb25lbnRzOiBjb21wb25lbnRzIH0pKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlRXJyb3JPclJlZGlyZWN0KGVycm9yLCByZWRpcmVjdEluZm8pIHtcbiAgICAgIGlmIChlcnJvcikgY2FsbGJhY2soZXJyb3IpO2Vsc2UgY2FsbGJhY2sobnVsbCwgY3JlYXRlTG9jYXRpb25Gcm9tUmVkaXJlY3RJbmZvKHJlZGlyZWN0SW5mbykpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBSb3V0ZUd1aWQgPSAxO1xuXG4gIGZ1bmN0aW9uIGdldFJvdXRlSUQocm91dGUpIHtcbiAgICB2YXIgY3JlYXRlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGFyZ3VtZW50c1sxXTtcblxuICAgIHJldHVybiByb3V0ZS5fX2lkX18gfHwgY3JlYXRlICYmIChyb3V0ZS5fX2lkX18gPSBSb3V0ZUd1aWQrKyk7XG4gIH1cblxuICB2YXIgUm91dGVIb29rcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgZnVuY3Rpb24gZ2V0Um91dGVIb29rc0ZvclJvdXRlcyhyb3V0ZXMpIHtcbiAgICByZXR1cm4gcm91dGVzLnJlZHVjZShmdW5jdGlvbiAoaG9va3MsIHJvdXRlKSB7XG4gICAgICBob29rcy5wdXNoLmFwcGx5KGhvb2tzLCBSb3V0ZUhvb2tzW2dldFJvdXRlSUQocm91dGUpXSk7XG4gICAgICByZXR1cm4gaG9va3M7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhbnNpdGlvbkhvb2sobG9jYXRpb24sIGNhbGxiYWNrKSB7XG4gICAgKDAsIF9tYXRjaFJvdXRlczIuZGVmYXVsdCkocm91dGVzLCBsb2NhdGlvbiwgZnVuY3Rpb24gKGVycm9yLCBuZXh0U3RhdGUpIHtcbiAgICAgIGlmIChuZXh0U3RhdGUgPT0gbnVsbCkge1xuICAgICAgICAvLyBUT0RPOiBXZSBkaWRuJ3QgYWN0dWFsbHkgbWF0Y2ggYW55dGhpbmcsIGJ1dCBoYW5nXG4gICAgICAgIC8vIG9udG8gZXJyb3IvbmV4dFN0YXRlIHNvIHdlIGRvbid0IGhhdmUgdG8gbWF0Y2hSb3V0ZXNcbiAgICAgICAgLy8gYWdhaW4gaW4gdGhlIGxpc3RlbiBjYWxsYmFjay5cbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBDYWNoZSBzb21lIHN0YXRlIGhlcmUgc28gd2UgZG9uJ3QgaGF2ZSB0b1xuICAgICAgLy8gbWF0Y2hSb3V0ZXMoKSBhZ2FpbiBpbiB0aGUgbGlzdGVuIGNhbGxiYWNrLlxuICAgICAgcGFydGlhbE5leHRTdGF0ZSA9IF9leHRlbmRzKHt9LCBuZXh0U3RhdGUsIHsgbG9jYXRpb246IGxvY2F0aW9uIH0pO1xuXG4gICAgICB2YXIgaG9va3MgPSBnZXRSb3V0ZUhvb2tzRm9yUm91dGVzKCgwLCBfY29tcHV0ZUNoYW5nZWRSb3V0ZXMzLmRlZmF1bHQpKHN0YXRlLCBwYXJ0aWFsTmV4dFN0YXRlKS5sZWF2ZVJvdXRlcyk7XG5cbiAgICAgIHZhciByZXN1bHQgPSB2b2lkIDA7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gaG9va3MubGVuZ3RoOyByZXN1bHQgPT0gbnVsbCAmJiBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgLy8gUGFzc2luZyB0aGUgbG9jYXRpb24gYXJnIGhlcmUgaW5kaWNhdGVzIHRvXG4gICAgICAgIC8vIHRoZSB1c2VyIHRoYXQgdGhpcyBpcyBhIHRyYW5zaXRpb24gaG9vay5cbiAgICAgICAgcmVzdWx0ID0gaG9va3NbaV0obG9jYXRpb24pO1xuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhyZXN1bHQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IHVudGVzdGFibGUgd2l0aCBLYXJtYSAqL1xuICBmdW5jdGlvbiBiZWZvcmVVbmxvYWRIb29rKCkge1xuICAgIC8vIFN5bmNocm9ub3VzbHkgY2hlY2sgdG8gc2VlIGlmIGFueSByb3V0ZSBob29rcyB3YW50XG4gICAgLy8gdG8gcHJldmVudCB0aGUgY3VycmVudCB3aW5kb3cvdGFiIGZyb20gY2xvc2luZy5cbiAgICBpZiAoc3RhdGUucm91dGVzKSB7XG4gICAgICB2YXIgaG9va3MgPSBnZXRSb3V0ZUhvb2tzRm9yUm91dGVzKHN0YXRlLnJvdXRlcyk7XG5cbiAgICAgIHZhciBtZXNzYWdlID0gdm9pZCAwO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGhvb2tzLmxlbmd0aDsgdHlwZW9mIG1lc3NhZ2UgIT09ICdzdHJpbmcnICYmIGkgPCBsZW47ICsraSkge1xuICAgICAgICAvLyBQYXNzaW5nIG5vIGFyZ3MgaW5kaWNhdGVzIHRvIHRoZSB1c2VyIHRoYXQgdGhpcyBpcyBhXG4gICAgICAgIC8vIGJlZm9yZXVubG9hZCBob29rLiBXZSBkb24ndCBrbm93IHRoZSBuZXh0IGxvY2F0aW9uLlxuICAgICAgICBtZXNzYWdlID0gaG9va3NbaV0oKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfVxuICB9XG5cbiAgdmFyIHVubGlzdGVuQmVmb3JlID0gdm9pZCAwLFxuICAgICAgdW5saXN0ZW5CZWZvcmVVbmxvYWQgPSB2b2lkIDA7XG5cbiAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuQmVmb3JlSG9va3NGb3JSb3V0ZShyb3V0ZSkge1xuICAgIHZhciByb3V0ZUlEID0gZ2V0Um91dGVJRChyb3V0ZSwgZmFsc2UpO1xuICAgIGlmICghcm91dGVJRCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRlbGV0ZSBSb3V0ZUhvb2tzW3JvdXRlSURdO1xuXG4gICAgaWYgKCFoYXNBbnlQcm9wZXJ0aWVzKFJvdXRlSG9va3MpKSB7XG4gICAgICAvLyB0ZWFyZG93biB0cmFuc2l0aW9uICYgYmVmb3JldW5sb2FkIGhvb2tzXG4gICAgICBpZiAodW5saXN0ZW5CZWZvcmUpIHtcbiAgICAgICAgdW5saXN0ZW5CZWZvcmUoKTtcbiAgICAgICAgdW5saXN0ZW5CZWZvcmUgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAodW5saXN0ZW5CZWZvcmVVbmxvYWQpIHtcbiAgICAgICAgdW5saXN0ZW5CZWZvcmVVbmxvYWQoKTtcbiAgICAgICAgdW5saXN0ZW5CZWZvcmVVbmxvYWQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgdGhlIGdpdmVuIGhvb2sgZnVuY3Rpb24gdG8gcnVuIGJlZm9yZSBsZWF2aW5nIHRoZSBnaXZlbiByb3V0ZS5cbiAgICpcbiAgICogRHVyaW5nIGEgbm9ybWFsIHRyYW5zaXRpb24sIHRoZSBob29rIGZ1bmN0aW9uIHJlY2VpdmVzIHRoZSBuZXh0IGxvY2F0aW9uXG4gICAqIGFzIGl0cyBvbmx5IGFyZ3VtZW50IGFuZCBjYW4gcmV0dXJuIGVpdGhlciBhIHByb21wdCBtZXNzYWdlIChzdHJpbmcpIHRvIHNob3cgdGhlIHVzZXIsXG4gICAqIHRvIG1ha2Ugc3VyZSB0aGV5IHdhbnQgdG8gbGVhdmUgdGhlIHBhZ2U7IG9yIGBmYWxzZWAsIHRvIHByZXZlbnQgdGhlIHRyYW5zaXRpb24uXG4gICAqIEFueSBvdGhlciByZXR1cm4gdmFsdWUgd2lsbCBoYXZlIG5vIGVmZmVjdC5cbiAgICpcbiAgICogRHVyaW5nIHRoZSBiZWZvcmV1bmxvYWQgZXZlbnQgKGluIGJyb3dzZXJzKSB0aGUgaG9vayByZWNlaXZlcyBubyBhcmd1bWVudHMuXG4gICAqIEluIHRoaXMgY2FzZSBpdCBtdXN0IHJldHVybiBhIHByb21wdCBtZXNzYWdlIHRvIHByZXZlbnQgdGhlIHRyYW5zaXRpb24uXG4gICAqXG4gICAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IG1heSBiZSB1c2VkIHRvIHVuYmluZCB0aGUgbGlzdGVuZXIuXG4gICAqL1xuICBmdW5jdGlvbiBsaXN0ZW5CZWZvcmVMZWF2aW5nUm91dGUocm91dGUsIGhvb2spIHtcbiAgICAvLyBUT0RPOiBXYXJuIGlmIHRoZXkgcmVnaXN0ZXIgZm9yIGEgcm91dGUgdGhhdCBpc24ndCBjdXJyZW50bHlcbiAgICAvLyBhY3RpdmUuIFRoZXkncmUgcHJvYmFibHkgZG9pbmcgc29tZXRoaW5nIHdyb25nLCBsaWtlIHJlLWNyZWF0aW5nXG4gICAgLy8gcm91dGUgb2JqZWN0cyBvbiBldmVyeSBsb2NhdGlvbiBjaGFuZ2UuXG4gICAgdmFyIHJvdXRlSUQgPSBnZXRSb3V0ZUlEKHJvdXRlKTtcbiAgICB2YXIgaG9va3MgPSBSb3V0ZUhvb2tzW3JvdXRlSURdO1xuXG4gICAgaWYgKCFob29rcykge1xuICAgICAgdmFyIHRoZXJlV2VyZU5vUm91dGVIb29rcyA9ICFoYXNBbnlQcm9wZXJ0aWVzKFJvdXRlSG9va3MpO1xuXG4gICAgICBSb3V0ZUhvb2tzW3JvdXRlSURdID0gW2hvb2tdO1xuXG4gICAgICBpZiAodGhlcmVXZXJlTm9Sb3V0ZUhvb2tzKSB7XG4gICAgICAgIC8vIHNldHVwIHRyYW5zaXRpb24gJiBiZWZvcmV1bmxvYWQgaG9va3NcbiAgICAgICAgdW5saXN0ZW5CZWZvcmUgPSBoaXN0b3J5Lmxpc3RlbkJlZm9yZSh0cmFuc2l0aW9uSG9vayk7XG5cbiAgICAgICAgaWYgKGhpc3RvcnkubGlzdGVuQmVmb3JlVW5sb2FkKSB1bmxpc3RlbkJlZm9yZVVubG9hZCA9IGhpc3RvcnkubGlzdGVuQmVmb3JlVW5sb2FkKGJlZm9yZVVubG9hZEhvb2spO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaG9va3MuaW5kZXhPZihob29rKSA9PT0gLTEpIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfcm91dGVyV2FybmluZzIuZGVmYXVsdCkoZmFsc2UsICdhZGRpbmcgbXVsdGlwbGUgbGVhdmUgaG9va3MgZm9yIHRoZSBzYW1lIHJvdXRlIGlzIGRlcHJlY2F0ZWQ7IG1hbmFnZSBtdWx0aXBsZSBjb25maXJtYXRpb25zIGluIHlvdXIgb3duIGNvZGUgaW5zdGVhZCcpIDogdm9pZCAwO1xuXG4gICAgICAgIGhvb2tzLnB1c2goaG9vayk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBob29rcyA9IFJvdXRlSG9va3Nbcm91dGVJRF07XG5cbiAgICAgIGlmIChob29rcykge1xuICAgICAgICB2YXIgbmV3SG9va3MgPSBob29rcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gaXRlbSAhPT0gaG9vaztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG5ld0hvb2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJlbW92ZUxpc3RlbkJlZm9yZUhvb2tzRm9yUm91dGUocm91dGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFJvdXRlSG9va3Nbcm91dGVJRF0gPSBuZXdIb29rcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgQVBJIGZvciBzdGF0ZWZ1bCBlbnZpcm9ubWVudHMuIEFzIHRoZSBsb2NhdGlvblxuICAgKiBjaGFuZ2VzLCB3ZSB1cGRhdGUgc3RhdGUgYW5kIGNhbGwgdGhlIGxpc3RlbmVyLiBXZSBjYW4gYWxzb1xuICAgKiBncmFjZWZ1bGx5IGhhbmRsZSBlcnJvcnMgYW5kIHJlZGlyZWN0cy5cbiAgICovXG4gIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIC8vIFRPRE86IE9ubHkgdXNlIGEgc2luZ2xlIGhpc3RvcnkgbGlzdGVuZXIuIE90aGVyd2lzZSB3ZSdsbFxuICAgIC8vIGVuZCB1cCB3aXRoIG11bHRpcGxlIGNvbmN1cnJlbnQgY2FsbHMgdG8gbWF0Y2guXG4gICAgcmV0dXJuIGhpc3RvcnkubGlzdGVuKGZ1bmN0aW9uIChsb2NhdGlvbikge1xuICAgICAgaWYgKHN0YXRlLmxvY2F0aW9uID09PSBsb2NhdGlvbikge1xuICAgICAgICBsaXN0ZW5lcihudWxsLCBzdGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXRjaChsb2NhdGlvbiwgZnVuY3Rpb24gKGVycm9yLCByZWRpcmVjdExvY2F0aW9uLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyKGVycm9yKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlZGlyZWN0TG9jYXRpb24pIHtcbiAgICAgICAgICAgIGhpc3RvcnkudHJhbnNpdGlvblRvKHJlZGlyZWN0TG9jYXRpb24pO1xuICAgICAgICAgIH0gZWxzZSBpZiAobmV4dFN0YXRlKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcihudWxsLCBuZXh0U3RhdGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF9yb3V0ZXJXYXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ0xvY2F0aW9uIFwiJXNcIiBkaWQgbm90IG1hdGNoIGFueSByb3V0ZXMnLCBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaCArIGxvY2F0aW9uLmhhc2gpIDogdm9pZCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlzQWN0aXZlOiBpc0FjdGl2ZSxcbiAgICBtYXRjaDogbWF0Y2gsXG4gICAgbGlzdGVuQmVmb3JlTGVhdmluZ1JvdXRlOiBsaXN0ZW5CZWZvcmVMZWF2aW5nUm91dGUsXG4gICAgbGlzdGVuOiBsaXN0ZW5cbiAgfTtcbn1cblxuLy9leHBvcnQgZGVmYXVsdCB1c2VSb3V0ZXNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY2FuVXNlTWVtYnJhbmUgPSB1bmRlZmluZWQ7XG5cbnZhciBfcm91dGVyV2FybmluZyA9IHJlcXVpcmUoJy4vcm91dGVyV2FybmluZycpO1xuXG52YXIgX3JvdXRlcldhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm91dGVyV2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjYW5Vc2VNZW1icmFuZSA9IGV4cG9ydHMuY2FuVXNlTWVtYnJhbmUgPSBmYWxzZTtcblxuLy8gTm8tb3AgYnkgZGVmYXVsdC5cbnZhciBkZXByZWNhdGVPYmplY3RQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVwcmVjYXRlT2JqZWN0UHJvcGVydGllcyhvYmplY3QpIHtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHRyeSB7XG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3gnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkueCkge1xuICAgICAgZXhwb3J0cy5jYW5Vc2VNZW1icmFuZSA9IGNhblVzZU1lbWJyYW5lID0gdHJ1ZTtcbiAgICB9XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbiAgfSBjYXRjaCAoZSkge31cbiAgLyogZXNsaW50LWVuYWJsZSBuby1lbXB0eSAqL1xuXG4gIGlmIChjYW5Vc2VNZW1icmFuZSkge1xuICAgIGRlcHJlY2F0ZU9iamVjdFByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZXByZWNhdGVPYmplY3RQcm9wZXJ0aWVzKG9iamVjdCwgbWVzc2FnZSkge1xuICAgICAgLy8gV3JhcCB0aGUgZGVwcmVjYXRlZCBvYmplY3QgaW4gYSBtZW1icmFuZSB0byB3YXJuIG9uIHByb3BlcnR5IGFjY2Vzcy5cbiAgICAgIHZhciBtZW1icmFuZSA9IHt9O1xuXG4gICAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChwcm9wKSB7XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcCkpIHtcbiAgICAgICAgICByZXR1cm4gJ2NvbnRpbnVlJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0W3Byb3BdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgLy8gQ2FuJ3QgdXNlIGZhdCBhcnJvdyBoZXJlIGJlY2F1c2Ugb2YgdXNlIG9mIGFyZ3VtZW50cyBiZWxvdy5cbiAgICAgICAgICBtZW1icmFuZVtwcm9wXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX3JvdXRlcldhcm5pbmcyLmRlZmF1bHQpKGZhbHNlLCBtZXNzYWdlKSA6IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiBvYmplY3RbcHJvcF0uYXBwbHkob2JqZWN0LCBhcmd1bWVudHMpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuICdjb250aW51ZSc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGVzZSBwcm9wZXJ0aWVzIGFyZSBub24tZW51bWVyYWJsZSB0byBwcmV2ZW50IFJlYWN0IGRldiB0b29scyBmcm9tXG4gICAgICAgIC8vIHNlZWluZyB0aGVtIGFuZCBjYXVzaW5nIHNwdXJpb3VzIHdhcm5pbmdzIHdoZW4gYWNjZXNzaW5nIHRoZW0uIEluXG4gICAgICAgIC8vIHByaW5jaXBsZSB0aGlzIGNvdWxkIGJlIGRvbmUgd2l0aCBhIHByb3h5LCBidXQgc3VwcG9ydCBmb3IgdGhlXG4gICAgICAgIC8vIG93bktleXMgdHJhcCBvbiBwcm94aWVzIGlzIG5vdCB1bml2ZXJzYWwsIGV2ZW4gYW1vbmcgYnJvd3NlcnMgdGhhdFxuICAgICAgICAvLyBvdGhlcndpc2Ugc3VwcG9ydCBwcm94aWVzLlxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobWVtYnJhbmUsIHByb3AsIHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX3JvdXRlcldhcm5pbmcyLmRlZmF1bHQpKGZhbHNlLCBtZXNzYWdlKSA6IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiBvYmplY3RbcHJvcF07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqZWN0KSB7XG4gICAgICAgIHZhciBfcmV0ID0gX2xvb3AocHJvcCk7XG5cbiAgICAgICAgaWYgKF9yZXQgPT09ICdjb250aW51ZScpIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWVtYnJhbmU7XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBkZXByZWNhdGVPYmplY3RQcm9wZXJ0aWVzOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9Bc3luY1V0aWxzID0gcmVxdWlyZSgnLi9Bc3luY1V0aWxzJyk7XG5cbnZhciBfbWFrZVN0YXRlV2l0aExvY2F0aW9uID0gcmVxdWlyZSgnLi9tYWtlU3RhdGVXaXRoTG9jYXRpb24nKTtcblxudmFyIF9tYWtlU3RhdGVXaXRoTG9jYXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFrZVN0YXRlV2l0aExvY2F0aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50c0ZvclJvdXRlKG5leHRTdGF0ZSwgcm91dGUsIGNhbGxiYWNrKSB7XG4gIGlmIChyb3V0ZS5jb21wb25lbnQgfHwgcm91dGUuY29tcG9uZW50cykge1xuICAgIGNhbGxiYWNrKG51bGwsIHJvdXRlLmNvbXBvbmVudCB8fCByb3V0ZS5jb21wb25lbnRzKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZ2V0Q29tcG9uZW50ID0gcm91dGUuZ2V0Q29tcG9uZW50IHx8IHJvdXRlLmdldENvbXBvbmVudHM7XG4gIGlmICghZ2V0Q29tcG9uZW50KSB7XG4gICAgY2FsbGJhY2soKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgbG9jYXRpb24gPSBuZXh0U3RhdGUubG9jYXRpb247XG5cbiAgdmFyIG5leHRTdGF0ZVdpdGhMb2NhdGlvbiA9ICgwLCBfbWFrZVN0YXRlV2l0aExvY2F0aW9uMi5kZWZhdWx0KShuZXh0U3RhdGUsIGxvY2F0aW9uKTtcblxuICBnZXRDb21wb25lbnQuY2FsbChyb3V0ZSwgbmV4dFN0YXRlV2l0aExvY2F0aW9uLCBjYWxsYmFjayk7XG59XG5cbi8qKlxuICogQXN5bmNocm9ub3VzbHkgZmV0Y2hlcyBhbGwgY29tcG9uZW50cyBuZWVkZWQgZm9yIHRoZSBnaXZlbiByb3V0ZXJcbiAqIHN0YXRlIGFuZCBjYWxscyBjYWxsYmFjayhlcnJvciwgY29tcG9uZW50cykgd2hlbiBmaW5pc2hlZC5cbiAqXG4gKiBOb3RlOiBUaGlzIG9wZXJhdGlvbiBtYXkgZmluaXNoIHN5bmNocm9ub3VzbHkgaWYgbm8gcm91dGVzIGhhdmUgYW5cbiAqIGFzeW5jaHJvbm91cyBnZXRDb21wb25lbnRzIG1ldGhvZC5cbiAqL1xuZnVuY3Rpb24gZ2V0Q29tcG9uZW50cyhuZXh0U3RhdGUsIGNhbGxiYWNrKSB7XG4gICgwLCBfQXN5bmNVdGlscy5tYXBBc3luYykobmV4dFN0YXRlLnJvdXRlcywgZnVuY3Rpb24gKHJvdXRlLCBpbmRleCwgY2FsbGJhY2spIHtcbiAgICBnZXRDb21wb25lbnRzRm9yUm91dGUobmV4dFN0YXRlLCByb3V0ZSwgY2FsbGJhY2spO1xuICB9LCBjYWxsYmFjayk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGdldENvbXBvbmVudHM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfUGF0dGVyblV0aWxzID0gcmVxdWlyZSgnLi9QYXR0ZXJuVXRpbHMnKTtcblxuLyoqXG4gKiBFeHRyYWN0cyBhbiBvYmplY3Qgb2YgcGFyYW1zIHRoZSBnaXZlbiByb3V0ZSBjYXJlcyBhYm91dCBmcm9tXG4gKiB0aGUgZ2l2ZW4gcGFyYW1zIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gZ2V0Um91dGVQYXJhbXMocm91dGUsIHBhcmFtcykge1xuICB2YXIgcm91dGVQYXJhbXMgPSB7fTtcblxuICBpZiAoIXJvdXRlLnBhdGgpIHJldHVybiByb3V0ZVBhcmFtcztcblxuICAoMCwgX1BhdHRlcm5VdGlscy5nZXRQYXJhbU5hbWVzKShyb3V0ZS5wYXRoKS5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJhbXMsIHApKSB7XG4gICAgICByb3V0ZVBhcmFtc1twXSA9IHBhcmFtc1twXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByb3V0ZVBhcmFtcztcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0Um91dGVQYXJhbXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfY3JlYXRlSGFzaEhpc3RvcnkgPSByZXF1aXJlKCdoaXN0b3J5L2xpYi9jcmVhdGVIYXNoSGlzdG9yeScpO1xuXG52YXIgX2NyZWF0ZUhhc2hIaXN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUhhc2hIaXN0b3J5KTtcblxudmFyIF9jcmVhdGVSb3V0ZXJIaXN0b3J5ID0gcmVxdWlyZSgnLi9jcmVhdGVSb3V0ZXJIaXN0b3J5Jyk7XG5cbnZhciBfY3JlYXRlUm91dGVySGlzdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVSb3V0ZXJIaXN0b3J5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9jcmVhdGVSb3V0ZXJIaXN0b3J5Mi5kZWZhdWx0KShfY3JlYXRlSGFzaEhpc3RvcnkyLmRlZmF1bHQpO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jcmVhdGVNZW1vcnlIaXN0b3J5ID0gZXhwb3J0cy5oYXNoSGlzdG9yeSA9IGV4cG9ydHMuYnJvd3Nlckhpc3RvcnkgPSBleHBvcnRzLmFwcGx5Um91dGVyTWlkZGxld2FyZSA9IGV4cG9ydHMuZm9ybWF0UGF0dGVybiA9IGV4cG9ydHMudXNlUm91dGVySGlzdG9yeSA9IGV4cG9ydHMubWF0Y2ggPSBleHBvcnRzLnJvdXRlclNoYXBlID0gZXhwb3J0cy5sb2NhdGlvblNoYXBlID0gZXhwb3J0cy5Qcm9wVHlwZXMgPSBleHBvcnRzLlJvdXRpbmdDb250ZXh0ID0gZXhwb3J0cy5Sb3V0ZXJDb250ZXh0ID0gZXhwb3J0cy5jcmVhdGVSb3V0ZXMgPSBleHBvcnRzLnVzZVJvdXRlcyA9IGV4cG9ydHMuUm91dGVDb250ZXh0ID0gZXhwb3J0cy5MaWZlY3ljbGUgPSBleHBvcnRzLkhpc3RvcnkgPSBleHBvcnRzLlJvdXRlID0gZXhwb3J0cy5SZWRpcmVjdCA9IGV4cG9ydHMuSW5kZXhSb3V0ZSA9IGV4cG9ydHMuSW5kZXhSZWRpcmVjdCA9IGV4cG9ydHMud2l0aFJvdXRlciA9IGV4cG9ydHMuSW5kZXhMaW5rID0gZXhwb3J0cy5MaW5rID0gZXhwb3J0cy5Sb3V0ZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfUm91dGVVdGlscyA9IHJlcXVpcmUoJy4vUm91dGVVdGlscycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVJvdXRlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9Sb3V0ZVV0aWxzLmNyZWF0ZVJvdXRlcztcbiAgfVxufSk7XG5cbnZhciBfUHJvcFR5cGVzMiA9IHJlcXVpcmUoJy4vUHJvcFR5cGVzJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnbG9jYXRpb25TaGFwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9Qcm9wVHlwZXMyLmxvY2F0aW9uU2hhcGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyb3V0ZXJTaGFwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9Qcm9wVHlwZXMyLnJvdXRlclNoYXBlO1xuICB9XG59KTtcblxudmFyIF9QYXR0ZXJuVXRpbHMgPSByZXF1aXJlKCcuL1BhdHRlcm5VdGlscycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2Zvcm1hdFBhdHRlcm4nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfUGF0dGVyblV0aWxzLmZvcm1hdFBhdHRlcm47XG4gIH1cbn0pO1xuXG52YXIgX1JvdXRlcjIgPSByZXF1aXJlKCcuL1JvdXRlcicpO1xuXG52YXIgX1JvdXRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3V0ZXIyKTtcblxudmFyIF9MaW5rMiA9IHJlcXVpcmUoJy4vTGluaycpO1xuXG52YXIgX0xpbmszID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGluazIpO1xuXG52YXIgX0luZGV4TGluazIgPSByZXF1aXJlKCcuL0luZGV4TGluaycpO1xuXG52YXIgX0luZGV4TGluazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JbmRleExpbmsyKTtcblxudmFyIF93aXRoUm91dGVyMiA9IHJlcXVpcmUoJy4vd2l0aFJvdXRlcicpO1xuXG52YXIgX3dpdGhSb3V0ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2l0aFJvdXRlcjIpO1xuXG52YXIgX0luZGV4UmVkaXJlY3QyID0gcmVxdWlyZSgnLi9JbmRleFJlZGlyZWN0Jyk7XG5cbnZhciBfSW5kZXhSZWRpcmVjdDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JbmRleFJlZGlyZWN0Mik7XG5cbnZhciBfSW5kZXhSb3V0ZTIgPSByZXF1aXJlKCcuL0luZGV4Um91dGUnKTtcblxudmFyIF9JbmRleFJvdXRlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0luZGV4Um91dGUyKTtcblxudmFyIF9SZWRpcmVjdDIgPSByZXF1aXJlKCcuL1JlZGlyZWN0Jyk7XG5cbnZhciBfUmVkaXJlY3QzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmVkaXJlY3QyKTtcblxudmFyIF9Sb3V0ZTIgPSByZXF1aXJlKCcuL1JvdXRlJyk7XG5cbnZhciBfUm91dGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUm91dGUyKTtcblxudmFyIF9IaXN0b3J5MiA9IHJlcXVpcmUoJy4vSGlzdG9yeScpO1xuXG52YXIgX0hpc3RvcnkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSGlzdG9yeTIpO1xuXG52YXIgX0xpZmVjeWNsZTIgPSByZXF1aXJlKCcuL0xpZmVjeWNsZScpO1xuXG52YXIgX0xpZmVjeWNsZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaWZlY3ljbGUyKTtcblxudmFyIF9Sb3V0ZUNvbnRleHQyID0gcmVxdWlyZSgnLi9Sb3V0ZUNvbnRleHQnKTtcblxudmFyIF9Sb3V0ZUNvbnRleHQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUm91dGVDb250ZXh0Mik7XG5cbnZhciBfdXNlUm91dGVzMiA9IHJlcXVpcmUoJy4vdXNlUm91dGVzJyk7XG5cbnZhciBfdXNlUm91dGVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VzZVJvdXRlczIpO1xuXG52YXIgX1JvdXRlckNvbnRleHQyID0gcmVxdWlyZSgnLi9Sb3V0ZXJDb250ZXh0Jyk7XG5cbnZhciBfUm91dGVyQ29udGV4dDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3V0ZXJDb250ZXh0Mik7XG5cbnZhciBfUm91dGluZ0NvbnRleHQyID0gcmVxdWlyZSgnLi9Sb3V0aW5nQ29udGV4dCcpO1xuXG52YXIgX1JvdXRpbmdDb250ZXh0MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JvdXRpbmdDb250ZXh0Mik7XG5cbnZhciBfUHJvcFR5cGVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Byb3BUeXBlczIpO1xuXG52YXIgX21hdGNoMiA9IHJlcXVpcmUoJy4vbWF0Y2gnKTtcblxudmFyIF9tYXRjaDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXRjaDIpO1xuXG52YXIgX3VzZVJvdXRlckhpc3RvcnkyID0gcmVxdWlyZSgnLi91c2VSb3V0ZXJIaXN0b3J5Jyk7XG5cbnZhciBfdXNlUm91dGVySGlzdG9yeTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91c2VSb3V0ZXJIaXN0b3J5Mik7XG5cbnZhciBfYXBwbHlSb3V0ZXJNaWRkbGV3YXJlMiA9IHJlcXVpcmUoJy4vYXBwbHlSb3V0ZXJNaWRkbGV3YXJlJyk7XG5cbnZhciBfYXBwbHlSb3V0ZXJNaWRkbGV3YXJlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FwcGx5Um91dGVyTWlkZGxld2FyZTIpO1xuXG52YXIgX2Jyb3dzZXJIaXN0b3J5MiA9IHJlcXVpcmUoJy4vYnJvd3Nlckhpc3RvcnknKTtcblxudmFyIF9icm93c2VySGlzdG9yeTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9icm93c2VySGlzdG9yeTIpO1xuXG52YXIgX2hhc2hIaXN0b3J5MiA9IHJlcXVpcmUoJy4vaGFzaEhpc3RvcnknKTtcblxudmFyIF9oYXNoSGlzdG9yeTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYXNoSGlzdG9yeTIpO1xuXG52YXIgX2NyZWF0ZU1lbW9yeUhpc3RvcnkyID0gcmVxdWlyZSgnLi9jcmVhdGVNZW1vcnlIaXN0b3J5Jyk7XG5cbnZhciBfY3JlYXRlTWVtb3J5SGlzdG9yeTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVNZW1vcnlIaXN0b3J5Mik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuUm91dGVyID0gX1JvdXRlcjMuZGVmYXVsdDsgLyogY29tcG9uZW50cyAqL1xuXG5leHBvcnRzLkxpbmsgPSBfTGluazMuZGVmYXVsdDtcbmV4cG9ydHMuSW5kZXhMaW5rID0gX0luZGV4TGluazMuZGVmYXVsdDtcbmV4cG9ydHMud2l0aFJvdXRlciA9IF93aXRoUm91dGVyMy5kZWZhdWx0O1xuXG4vKiBjb21wb25lbnRzIChjb25maWd1cmF0aW9uKSAqL1xuXG5leHBvcnRzLkluZGV4UmVkaXJlY3QgPSBfSW5kZXhSZWRpcmVjdDMuZGVmYXVsdDtcbmV4cG9ydHMuSW5kZXhSb3V0ZSA9IF9JbmRleFJvdXRlMy5kZWZhdWx0O1xuZXhwb3J0cy5SZWRpcmVjdCA9IF9SZWRpcmVjdDMuZGVmYXVsdDtcbmV4cG9ydHMuUm91dGUgPSBfUm91dGUzLmRlZmF1bHQ7XG5cbi8qIG1peGlucyAqL1xuXG5leHBvcnRzLkhpc3RvcnkgPSBfSGlzdG9yeTMuZGVmYXVsdDtcbmV4cG9ydHMuTGlmZWN5Y2xlID0gX0xpZmVjeWNsZTMuZGVmYXVsdDtcbmV4cG9ydHMuUm91dGVDb250ZXh0ID0gX1JvdXRlQ29udGV4dDMuZGVmYXVsdDtcblxuLyogdXRpbHMgKi9cblxuZXhwb3J0cy51c2VSb3V0ZXMgPSBfdXNlUm91dGVzMy5kZWZhdWx0O1xuZXhwb3J0cy5Sb3V0ZXJDb250ZXh0ID0gX1JvdXRlckNvbnRleHQzLmRlZmF1bHQ7XG5leHBvcnRzLlJvdXRpbmdDb250ZXh0ID0gX1JvdXRpbmdDb250ZXh0My5kZWZhdWx0O1xuZXhwb3J0cy5Qcm9wVHlwZXMgPSBfUHJvcFR5cGVzMy5kZWZhdWx0O1xuZXhwb3J0cy5tYXRjaCA9IF9tYXRjaDMuZGVmYXVsdDtcbmV4cG9ydHMudXNlUm91dGVySGlzdG9yeSA9IF91c2VSb3V0ZXJIaXN0b3J5My5kZWZhdWx0O1xuZXhwb3J0cy5hcHBseVJvdXRlck1pZGRsZXdhcmUgPSBfYXBwbHlSb3V0ZXJNaWRkbGV3YXJlMy5kZWZhdWx0O1xuXG4vKiBoaXN0b3JpZXMgKi9cblxuZXhwb3J0cy5icm93c2VySGlzdG9yeSA9IF9icm93c2VySGlzdG9yeTMuZGVmYXVsdDtcbmV4cG9ydHMuaGFzaEhpc3RvcnkgPSBfaGFzaEhpc3RvcnkzLmRlZmF1bHQ7XG5leHBvcnRzLmNyZWF0ZU1lbW9yeUhpc3RvcnkgPSBfY3JlYXRlTWVtb3J5SGlzdG9yeTMuZGVmYXVsdDsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBpc0FjdGl2ZTtcblxudmFyIF9QYXR0ZXJuVXRpbHMgPSByZXF1aXJlKCcuL1BhdHRlcm5VdGlscycpO1xuXG5mdW5jdGlvbiBkZWVwRXF1YWwoYSwgYikge1xuICBpZiAoYSA9PSBiKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAoYSA9PSBudWxsIHx8IGIgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYikgJiYgYS5sZW5ndGggPT09IGIubGVuZ3RoICYmIGEuZXZlcnkoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICByZXR1cm4gZGVlcEVxdWFsKGl0ZW0sIGJbaW5kZXhdKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmICgodHlwZW9mIGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGEpKSA9PT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKHZhciBwIGluIGEpIHtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGEsIHApKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoYVtwXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChiW3BdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKCFkZWVwRXF1YWwoYVtwXSwgYltwXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIFN0cmluZyhhKSA9PT0gU3RyaW5nKGIpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgY3VycmVudCBwYXRobmFtZSBtYXRjaGVzIHRoZSBzdXBwbGllZCBvbmUsIG5ldCBvZlxuICogbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2ggbm9ybWFsaXphdGlvbi4gVGhpcyBpcyBzdWZmaWNpZW50IGZvciBhblxuICogaW5kZXhPbmx5IHJvdXRlIG1hdGNoLlxuICovXG5mdW5jdGlvbiBwYXRoSXNBY3RpdmUocGF0aG5hbWUsIGN1cnJlbnRQYXRobmFtZSkge1xuICAvLyBOb3JtYWxpemUgbGVhZGluZyBzbGFzaCBmb3IgY29uc2lzdGVuY3kuIExlYWRpbmcgc2xhc2ggb24gcGF0aG5hbWUgaGFzXG4gIC8vIGFscmVhZHkgYmVlbiBub3JtYWxpemVkIGluIGlzQWN0aXZlLiBTZWUgY2F2ZWF0IHRoZXJlLlxuICBpZiAoY3VycmVudFBhdGhuYW1lLmNoYXJBdCgwKSAhPT0gJy8nKSB7XG4gICAgY3VycmVudFBhdGhuYW1lID0gJy8nICsgY3VycmVudFBhdGhuYW1lO1xuICB9XG5cbiAgLy8gTm9ybWFsaXplIHRoZSBlbmQgb2YgYm90aCBwYXRoIG5hbWVzIHRvby4gTWF5YmUgYC9mb28vYCBzaG91bGRuJ3Qgc2hvd1xuICAvLyBgL2Zvb2AgYXMgYWN0aXZlLCBidXQgaW4gdGhpcyBjYXNlLCB3ZSB3b3VsZCBhbHJlYWR5IGhhdmUgZmFpbGVkIHRoZVxuICAvLyBtYXRjaC5cbiAgaWYgKHBhdGhuYW1lLmNoYXJBdChwYXRobmFtZS5sZW5ndGggLSAxKSAhPT0gJy8nKSB7XG4gICAgcGF0aG5hbWUgKz0gJy8nO1xuICB9XG4gIGlmIChjdXJyZW50UGF0aG5hbWUuY2hhckF0KGN1cnJlbnRQYXRobmFtZS5sZW5ndGggLSAxKSAhPT0gJy8nKSB7XG4gICAgY3VycmVudFBhdGhuYW1lICs9ICcvJztcbiAgfVxuXG4gIHJldHVybiBjdXJyZW50UGF0aG5hbWUgPT09IHBhdGhuYW1lO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gcGF0aG5hbWUgbWF0Y2hlcyB0aGUgYWN0aXZlIHJvdXRlcyBhbmQgcGFyYW1zLlxuICovXG5mdW5jdGlvbiByb3V0ZUlzQWN0aXZlKHBhdGhuYW1lLCByb3V0ZXMsIHBhcmFtcykge1xuICB2YXIgcmVtYWluaW5nUGF0aG5hbWUgPSBwYXRobmFtZSxcbiAgICAgIHBhcmFtTmFtZXMgPSBbXSxcbiAgICAgIHBhcmFtVmFsdWVzID0gW107XG5cbiAgLy8gZm9yLi4ub2Ygd291bGQgd29yayBoZXJlIGJ1dCBpdCdzIHByb2JhYmx5IHNsb3dlciBwb3N0LXRyYW5zcGlsYXRpb24uXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSByb3V0ZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICB2YXIgcm91dGUgPSByb3V0ZXNbaV07XG4gICAgdmFyIHBhdHRlcm4gPSByb3V0ZS5wYXRoIHx8ICcnO1xuXG4gICAgaWYgKHBhdHRlcm4uY2hhckF0KDApID09PSAnLycpIHtcbiAgICAgIHJlbWFpbmluZ1BhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICBwYXJhbU5hbWVzID0gW107XG4gICAgICBwYXJhbVZhbHVlcyA9IFtdO1xuICAgIH1cblxuICAgIGlmIChyZW1haW5pbmdQYXRobmFtZSAhPT0gbnVsbCAmJiBwYXR0ZXJuKSB7XG4gICAgICB2YXIgbWF0Y2hlZCA9ICgwLCBfUGF0dGVyblV0aWxzLm1hdGNoUGF0dGVybikocGF0dGVybiwgcmVtYWluaW5nUGF0aG5hbWUpO1xuICAgICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgICAgcmVtYWluaW5nUGF0aG5hbWUgPSBtYXRjaGVkLnJlbWFpbmluZ1BhdGhuYW1lO1xuICAgICAgICBwYXJhbU5hbWVzID0gW10uY29uY2F0KHBhcmFtTmFtZXMsIG1hdGNoZWQucGFyYW1OYW1lcyk7XG4gICAgICAgIHBhcmFtVmFsdWVzID0gW10uY29uY2F0KHBhcmFtVmFsdWVzLCBtYXRjaGVkLnBhcmFtVmFsdWVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbWFpbmluZ1BhdGhuYW1lID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlbWFpbmluZ1BhdGhuYW1lID09PSAnJykge1xuICAgICAgICAvLyBXZSBoYXZlIGFuIGV4YWN0IG1hdGNoIG9uIHRoZSByb3V0ZS4gSnVzdCBjaGVjayB0aGF0IGFsbCB0aGUgcGFyYW1zXG4gICAgICAgIC8vIG1hdGNoLlxuICAgICAgICAvLyBGSVhNRTogVGhpcyBkb2Vzbid0IHdvcmsgb24gcmVwZWF0ZWQgcGFyYW1zLlxuICAgICAgICByZXR1cm4gcGFyYW1OYW1lcy5ldmVyeShmdW5jdGlvbiAocGFyYW1OYW1lLCBpbmRleCkge1xuICAgICAgICAgIHJldHVybiBTdHJpbmcocGFyYW1WYWx1ZXNbaW5kZXhdKSA9PT0gU3RyaW5nKHBhcmFtc1twYXJhbU5hbWVdKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhbGwga2V5L3ZhbHVlIHBhaXJzIGluIHRoZSBnaXZlbiBxdWVyeSBhcmVcbiAqIGN1cnJlbnRseSBhY3RpdmUuXG4gKi9cbmZ1bmN0aW9uIHF1ZXJ5SXNBY3RpdmUocXVlcnksIGFjdGl2ZVF1ZXJ5KSB7XG4gIGlmIChhY3RpdmVRdWVyeSA9PSBudWxsKSByZXR1cm4gcXVlcnkgPT0gbnVsbDtcblxuICBpZiAocXVlcnkgPT0gbnVsbCkgcmV0dXJuIHRydWU7XG5cbiAgcmV0dXJuIGRlZXBFcXVhbChxdWVyeSwgYWN0aXZlUXVlcnkpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhIDxMaW5rPiB0byB0aGUgZ2l2ZW4gcGF0aG5hbWUvcXVlcnkgY29tYmluYXRpb24gaXNcbiAqIGN1cnJlbnRseSBhY3RpdmUuXG4gKi9cbmZ1bmN0aW9uIGlzQWN0aXZlKF9yZWYsIGluZGV4T25seSwgY3VycmVudExvY2F0aW9uLCByb3V0ZXMsIHBhcmFtcykge1xuICB2YXIgcGF0aG5hbWUgPSBfcmVmLnBhdGhuYW1lO1xuICB2YXIgcXVlcnkgPSBfcmVmLnF1ZXJ5O1xuXG4gIGlmIChjdXJyZW50TG9jYXRpb24gPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIFRPRE86IFRoaXMgaXMgYSBiaXQgdWdseS4gSXQga2VlcHMgYXJvdW5kIHN1cHBvcnQgZm9yIHRyZWF0aW5nIHBhdGhuYW1lc1xuICAvLyB3aXRob3V0IHByZWNlZGluZyBzbGFzaGVzIGFzIGFic29sdXRlIHBhdGhzLCBidXQgcG9zc2libHkgYWxzbyB3b3Jrc1xuICAvLyBhcm91bmQgdGhlIHNhbWUgcXVpcmtzIHdpdGggYmFzZW5hbWVzIGFzIGluIG1hdGNoUm91dGVzLlxuICBpZiAocGF0aG5hbWUuY2hhckF0KDApICE9PSAnLycpIHtcbiAgICBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lO1xuICB9XG5cbiAgaWYgKCFwYXRoSXNBY3RpdmUocGF0aG5hbWUsIGN1cnJlbnRMb2NhdGlvbi5wYXRobmFtZSkpIHtcbiAgICAvLyBUaGUgcGF0aCBjaGVjayBpcyBuZWNlc3NhcnkgYW5kIHN1ZmZpY2llbnQgZm9yIGluZGV4T25seSwgYnV0IG90aGVyd2lzZVxuICAgIC8vIHdlIHN0aWxsIG5lZWQgdG8gY2hlY2sgdGhlIHJvdXRlcy5cbiAgICBpZiAoaW5kZXhPbmx5IHx8ICFyb3V0ZUlzQWN0aXZlKHBhdGhuYW1lLCByb3V0ZXMsIHBhcmFtcykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcXVlcnlJc0FjdGl2ZShxdWVyeSwgY3VycmVudExvY2F0aW9uLnF1ZXJ5KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gbWFrZVN0YXRlV2l0aExvY2F0aW9uO1xuXG52YXIgX2RlcHJlY2F0ZU9iamVjdFByb3BlcnRpZXMgPSByZXF1aXJlKCcuL2RlcHJlY2F0ZU9iamVjdFByb3BlcnRpZXMnKTtcblxudmFyIF9yb3V0ZXJXYXJuaW5nID0gcmVxdWlyZSgnLi9yb3V0ZXJXYXJuaW5nJyk7XG5cbnZhciBfcm91dGVyV2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yb3V0ZXJXYXJuaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gbWFrZVN0YXRlV2l0aExvY2F0aW9uKHN0YXRlLCBsb2NhdGlvbikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfZGVwcmVjYXRlT2JqZWN0UHJvcGVydGllcy5jYW5Vc2VNZW1icmFuZSkge1xuICAgIHZhciBzdGF0ZVdpdGhMb2NhdGlvbiA9IF9leHRlbmRzKHt9LCBzdGF0ZSk7XG5cbiAgICAvLyBJIGRvbid0IHVzZSBkZXByZWNhdGVPYmplY3RQcm9wZXJ0aWVzIGhlcmUgYmVjYXVzZSBJIHdhbnQgdG8ga2VlcCB0aGVcbiAgICAvLyBzYW1lIGNvZGUgcGF0aCBiZXR3ZWVuIGRldmVsb3BtZW50IGFuZCBwcm9kdWN0aW9uLCBpbiB0aGF0IHdlIGp1c3RcbiAgICAvLyBhc3NpZ24gZXh0cmEgcHJvcGVydGllcyB0byB0aGUgY29weSBvZiB0aGUgc3RhdGUgb2JqZWN0IGluIGJvdGggY2FzZXMuXG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChwcm9wKSB7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChsb2NhdGlvbiwgcHJvcCkpIHtcbiAgICAgICAgcmV0dXJuICdjb250aW51ZSc7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdGF0ZVdpdGhMb2NhdGlvbiwgcHJvcCwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF9yb3V0ZXJXYXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ0FjY2Vzc2luZyBsb2NhdGlvbiBwcm9wZXJ0aWVzIGRpcmVjdGx5IGZyb20gdGhlIGZpcnN0IGFyZ3VtZW50IHRvIGBnZXRDb21wb25lbnRgLCBgZ2V0Q29tcG9uZW50c2AsIGBnZXRDaGlsZFJvdXRlc2AsIGFuZCBgZ2V0SW5kZXhSb3V0ZWAgaXMgZGVwcmVjYXRlZC4gVGhhdCBhcmd1bWVudCBpcyBub3cgdGhlIHJvdXRlciBzdGF0ZSAoYG5leHRTdGF0ZWAgb3IgYHBhcnRpYWxOZXh0U3RhdGVgKSByYXRoZXIgdGhhbiB0aGUgbG9jYXRpb24uIFRvIGFjY2VzcyB0aGUgbG9jYXRpb24sIHVzZSBgbmV4dFN0YXRlLmxvY2F0aW9uYCBvciBgcGFydGlhbE5leHRTdGF0ZS5sb2NhdGlvbmAuJykgOiB2b2lkIDA7XG4gICAgICAgICAgcmV0dXJuIGxvY2F0aW9uW3Byb3BdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgZm9yICh2YXIgcHJvcCBpbiBsb2NhdGlvbikge1xuICAgICAgdmFyIF9yZXQgPSBfbG9vcChwcm9wKTtcblxuICAgICAgaWYgKF9yZXQgPT09ICdjb250aW51ZScpIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZVdpdGhMb2NhdGlvbjtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIGxvY2F0aW9uKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9jcmVhdGVNZW1vcnlIaXN0b3J5ID0gcmVxdWlyZSgnLi9jcmVhdGVNZW1vcnlIaXN0b3J5Jyk7XG5cbnZhciBfY3JlYXRlTWVtb3J5SGlzdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVNZW1vcnlIaXN0b3J5KTtcblxudmFyIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlciA9IHJlcXVpcmUoJy4vY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXInKTtcblxudmFyIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcik7XG5cbnZhciBfUm91dGVVdGlscyA9IHJlcXVpcmUoJy4vUm91dGVVdGlscycpO1xuXG52YXIgX1JvdXRlclV0aWxzID0gcmVxdWlyZSgnLi9Sb3V0ZXJVdGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbi8qKlxuICogQSBoaWdoLWxldmVsIEFQSSB0byBiZSB1c2VkIGZvciBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBtYXRjaGVzIGEgbG9jYXRpb24gdG8gYSBzZXQgb2Ygcm91dGVzIGFuZCBjYWxsc1xuICogY2FsbGJhY2soZXJyb3IsIHJlZGlyZWN0TG9jYXRpb24sIHJlbmRlclByb3BzKSB3aGVuIGZpbmlzaGVkLlxuICpcbiAqIE5vdGU6IFlvdSBwcm9iYWJseSBkb24ndCB3YW50IHRvIHVzZSB0aGlzIGluIGEgYnJvd3NlciB1bmxlc3MgeW91J3JlIHVzaW5nXG4gKiBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgd2l0aCBhc3luYyByb3V0ZXMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKF9yZWYsIGNhbGxiYWNrKSB7XG4gIHZhciBoaXN0b3J5ID0gX3JlZi5oaXN0b3J5O1xuICB2YXIgcm91dGVzID0gX3JlZi5yb3V0ZXM7XG4gIHZhciBsb2NhdGlvbiA9IF9yZWYubG9jYXRpb247XG5cbiAgdmFyIG9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydoaXN0b3J5JywgJ3JvdXRlcycsICdsb2NhdGlvbiddKTtcblxuICAhKGhpc3RvcnkgfHwgbG9jYXRpb24pID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShmYWxzZSwgJ21hdGNoIG5lZWRzIGEgaGlzdG9yeSBvciBhIGxvY2F0aW9uJykgOiAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoZmFsc2UpIDogdm9pZCAwO1xuXG4gIGhpc3RvcnkgPSBoaXN0b3J5ID8gaGlzdG9yeSA6ICgwLCBfY3JlYXRlTWVtb3J5SGlzdG9yeTIuZGVmYXVsdCkob3B0aW9ucyk7XG4gIHZhciB0cmFuc2l0aW9uTWFuYWdlciA9ICgwLCBfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIyLmRlZmF1bHQpKGhpc3RvcnksICgwLCBfUm91dGVVdGlscy5jcmVhdGVSb3V0ZXMpKHJvdXRlcykpO1xuXG4gIHZhciB1bmxpc3RlbiA9IHZvaWQgMDtcblxuICBpZiAobG9jYXRpb24pIHtcbiAgICAvLyBBbGxvdyBtYXRjaCh7IGxvY2F0aW9uOiAnL3RoZS9wYXRoJywgLi4uIH0pXG4gICAgbG9jYXRpb24gPSBoaXN0b3J5LmNyZWF0ZUxvY2F0aW9uKGxvY2F0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBQaWNrIHVwIHRoZSBsb2NhdGlvbiBmcm9tIHRoZSBoaXN0b3J5IHZpYSBzeW5jaHJvbm91cyBoaXN0b3J5Lmxpc3RlblxuICAgIC8vIGNhbGwgaWYgbmVlZGVkLlxuICAgIHVubGlzdGVuID0gaGlzdG9yeS5saXN0ZW4oZnVuY3Rpb24gKGhpc3RvcnlMb2NhdGlvbikge1xuICAgICAgbG9jYXRpb24gPSBoaXN0b3J5TG9jYXRpb247XG4gICAgfSk7XG4gIH1cblxuICB2YXIgcm91dGVyID0gKDAsIF9Sb3V0ZXJVdGlscy5jcmVhdGVSb3V0ZXJPYmplY3QpKGhpc3RvcnksIHRyYW5zaXRpb25NYW5hZ2VyKTtcbiAgaGlzdG9yeSA9ICgwLCBfUm91dGVyVXRpbHMuY3JlYXRlUm91dGluZ0hpc3RvcnkpKGhpc3RvcnksIHRyYW5zaXRpb25NYW5hZ2VyKTtcblxuICB0cmFuc2l0aW9uTWFuYWdlci5tYXRjaChsb2NhdGlvbiwgZnVuY3Rpb24gKGVycm9yLCByZWRpcmVjdExvY2F0aW9uLCBuZXh0U3RhdGUpIHtcbiAgICBjYWxsYmFjayhlcnJvciwgcmVkaXJlY3RMb2NhdGlvbiwgbmV4dFN0YXRlICYmIF9leHRlbmRzKHt9LCBuZXh0U3RhdGUsIHtcbiAgICAgIGhpc3Rvcnk6IGhpc3RvcnksXG4gICAgICByb3V0ZXI6IHJvdXRlcixcbiAgICAgIG1hdGNoQ29udGV4dDogeyBoaXN0b3J5OiBoaXN0b3J5LCB0cmFuc2l0aW9uTWFuYWdlcjogdHJhbnNpdGlvbk1hbmFnZXIsIHJvdXRlcjogcm91dGVyIH1cbiAgICB9KSk7XG5cbiAgICAvLyBEZWZlciByZW1vdmluZyB0aGUgbGlzdGVuZXIgdG8gaGVyZSB0byBwcmV2ZW50IERPTSBoaXN0b3JpZXMgZnJvbSBoYXZpbmdcbiAgICAvLyB0byB1bndpbmQgRE9NIGV2ZW50IGxpc3RlbmVycyB1bm5lY2Vzc2FyaWx5LCBpbiBjYXNlIGNhbGxiYWNrIHJlbmRlcnMgYVxuICAgIC8vIDxSb3V0ZXI+IGFuZCBhdHRhY2hlcyBhbm90aGVyIGhpc3RvcnkgbGlzdGVuZXIuXG4gICAgaWYgKHVubGlzdGVuKSB7XG4gICAgICB1bmxpc3RlbigpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG1hdGNoO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gbWF0Y2hSb3V0ZXM7XG5cbnZhciBfQXN5bmNVdGlscyA9IHJlcXVpcmUoJy4vQXN5bmNVdGlscycpO1xuXG52YXIgX21ha2VTdGF0ZVdpdGhMb2NhdGlvbiA9IHJlcXVpcmUoJy4vbWFrZVN0YXRlV2l0aExvY2F0aW9uJyk7XG5cbnZhciBfbWFrZVN0YXRlV2l0aExvY2F0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21ha2VTdGF0ZVdpdGhMb2NhdGlvbik7XG5cbnZhciBfUGF0dGVyblV0aWxzID0gcmVxdWlyZSgnLi9QYXR0ZXJuVXRpbHMnKTtcblxudmFyIF9yb3V0ZXJXYXJuaW5nID0gcmVxdWlyZSgnLi9yb3V0ZXJXYXJuaW5nJyk7XG5cbnZhciBfcm91dGVyV2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yb3V0ZXJXYXJuaW5nKTtcblxudmFyIF9Sb3V0ZVV0aWxzID0gcmVxdWlyZSgnLi9Sb3V0ZVV0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldENoaWxkUm91dGVzKHJvdXRlLCBsb2NhdGlvbiwgcGFyYW1OYW1lcywgcGFyYW1WYWx1ZXMsIGNhbGxiYWNrKSB7XG4gIGlmIChyb3V0ZS5jaGlsZFJvdXRlcykge1xuICAgIHJldHVybiBbbnVsbCwgcm91dGUuY2hpbGRSb3V0ZXNdO1xuICB9XG4gIGlmICghcm91dGUuZ2V0Q2hpbGRSb3V0ZXMpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgc3luYyA9IHRydWUsXG4gICAgICByZXN1bHQgPSB2b2lkIDA7XG5cbiAgdmFyIHBhcnRpYWxOZXh0U3RhdGUgPSB7XG4gICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgIHBhcmFtczogY3JlYXRlUGFyYW1zKHBhcmFtTmFtZXMsIHBhcmFtVmFsdWVzKVxuICB9O1xuXG4gIHZhciBwYXJ0aWFsTmV4dFN0YXRlV2l0aExvY2F0aW9uID0gKDAsIF9tYWtlU3RhdGVXaXRoTG9jYXRpb24yLmRlZmF1bHQpKHBhcnRpYWxOZXh0U3RhdGUsIGxvY2F0aW9uKTtcblxuICByb3V0ZS5nZXRDaGlsZFJvdXRlcyhwYXJ0aWFsTmV4dFN0YXRlV2l0aExvY2F0aW9uLCBmdW5jdGlvbiAoZXJyb3IsIGNoaWxkUm91dGVzKSB7XG4gICAgY2hpbGRSb3V0ZXMgPSAhZXJyb3IgJiYgKDAsIF9Sb3V0ZVV0aWxzLmNyZWF0ZVJvdXRlcykoY2hpbGRSb3V0ZXMpO1xuICAgIGlmIChzeW5jKSB7XG4gICAgICByZXN1bHQgPSBbZXJyb3IsIGNoaWxkUm91dGVzXTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjYWxsYmFjayhlcnJvciwgY2hpbGRSb3V0ZXMpO1xuICB9KTtcblxuICBzeW5jID0gZmFsc2U7XG4gIHJldHVybiByZXN1bHQ7IC8vIE1pZ2h0IGJlIHVuZGVmaW5lZC5cbn1cblxuZnVuY3Rpb24gZ2V0SW5kZXhSb3V0ZShyb3V0ZSwgbG9jYXRpb24sIHBhcmFtTmFtZXMsIHBhcmFtVmFsdWVzLCBjYWxsYmFjaykge1xuICBpZiAocm91dGUuaW5kZXhSb3V0ZSkge1xuICAgIGNhbGxiYWNrKG51bGwsIHJvdXRlLmluZGV4Um91dGUpO1xuICB9IGVsc2UgaWYgKHJvdXRlLmdldEluZGV4Um91dGUpIHtcbiAgICB2YXIgcGFydGlhbE5leHRTdGF0ZSA9IHtcbiAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgIHBhcmFtczogY3JlYXRlUGFyYW1zKHBhcmFtTmFtZXMsIHBhcmFtVmFsdWVzKVxuICAgIH07XG5cbiAgICB2YXIgcGFydGlhbE5leHRTdGF0ZVdpdGhMb2NhdGlvbiA9ICgwLCBfbWFrZVN0YXRlV2l0aExvY2F0aW9uMi5kZWZhdWx0KShwYXJ0aWFsTmV4dFN0YXRlLCBsb2NhdGlvbik7XG5cbiAgICByb3V0ZS5nZXRJbmRleFJvdXRlKHBhcnRpYWxOZXh0U3RhdGVXaXRoTG9jYXRpb24sIGZ1bmN0aW9uIChlcnJvciwgaW5kZXhSb3V0ZSkge1xuICAgICAgY2FsbGJhY2soZXJyb3IsICFlcnJvciAmJiAoMCwgX1JvdXRlVXRpbHMuY3JlYXRlUm91dGVzKShpbmRleFJvdXRlKVswXSk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAocm91dGUuY2hpbGRSb3V0ZXMpIHtcbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHBhdGhsZXNzID0gcm91dGUuY2hpbGRSb3V0ZXMuZmlsdGVyKGZ1bmN0aW9uIChjaGlsZFJvdXRlKSB7XG4gICAgICAgIHJldHVybiAhY2hpbGRSb3V0ZS5wYXRoO1xuICAgICAgfSk7XG5cbiAgICAgICgwLCBfQXN5bmNVdGlscy5sb29wQXN5bmMpKHBhdGhsZXNzLmxlbmd0aCwgZnVuY3Rpb24gKGluZGV4LCBuZXh0LCBkb25lKSB7XG4gICAgICAgIGdldEluZGV4Um91dGUocGF0aGxlc3NbaW5kZXhdLCBsb2NhdGlvbiwgcGFyYW1OYW1lcywgcGFyYW1WYWx1ZXMsIGZ1bmN0aW9uIChlcnJvciwgaW5kZXhSb3V0ZSkge1xuICAgICAgICAgIGlmIChlcnJvciB8fCBpbmRleFJvdXRlKSB7XG4gICAgICAgICAgICB2YXIgcm91dGVzID0gW3BhdGhsZXNzW2luZGV4XV0uY29uY2F0KEFycmF5LmlzQXJyYXkoaW5kZXhSb3V0ZSkgPyBpbmRleFJvdXRlIDogW2luZGV4Um91dGVdKTtcbiAgICAgICAgICAgIGRvbmUoZXJyb3IsIHJvdXRlcyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSwgZnVuY3Rpb24gKGVyciwgcm91dGVzKSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIHJvdXRlcyk7XG4gICAgICB9KTtcbiAgICB9KSgpO1xuICB9IGVsc2Uge1xuICAgIGNhbGxiYWNrKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzaWduUGFyYW1zKHBhcmFtcywgcGFyYW1OYW1lcywgcGFyYW1WYWx1ZXMpIHtcbiAgcmV0dXJuIHBhcmFtTmFtZXMucmVkdWNlKGZ1bmN0aW9uIChwYXJhbXMsIHBhcmFtTmFtZSwgaW5kZXgpIHtcbiAgICB2YXIgcGFyYW1WYWx1ZSA9IHBhcmFtVmFsdWVzICYmIHBhcmFtVmFsdWVzW2luZGV4XTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHBhcmFtc1twYXJhbU5hbWVdKSkge1xuICAgICAgcGFyYW1zW3BhcmFtTmFtZV0ucHVzaChwYXJhbVZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHBhcmFtTmFtZSBpbiBwYXJhbXMpIHtcbiAgICAgIHBhcmFtc1twYXJhbU5hbWVdID0gW3BhcmFtc1twYXJhbU5hbWVdLCBwYXJhbVZhbHVlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyYW1zW3BhcmFtTmFtZV0gPSBwYXJhbVZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJhbXM7XG4gIH0sIHBhcmFtcyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhcmFtcyhwYXJhbU5hbWVzLCBwYXJhbVZhbHVlcykge1xuICByZXR1cm4gYXNzaWduUGFyYW1zKHt9LCBwYXJhbU5hbWVzLCBwYXJhbVZhbHVlcyk7XG59XG5cbmZ1bmN0aW9uIG1hdGNoUm91dGVEZWVwKHJvdXRlLCBsb2NhdGlvbiwgcmVtYWluaW5nUGF0aG5hbWUsIHBhcmFtTmFtZXMsIHBhcmFtVmFsdWVzLCBjYWxsYmFjaykge1xuICB2YXIgcGF0dGVybiA9IHJvdXRlLnBhdGggfHwgJyc7XG5cbiAgaWYgKHBhdHRlcm4uY2hhckF0KDApID09PSAnLycpIHtcbiAgICByZW1haW5pbmdQYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIHBhcmFtTmFtZXMgPSBbXTtcbiAgICBwYXJhbVZhbHVlcyA9IFtdO1xuICB9XG5cbiAgLy8gT25seSB0cnkgdG8gbWF0Y2ggdGhlIHBhdGggaWYgdGhlIHJvdXRlIGFjdHVhbGx5IGhhcyBhIHBhdHRlcm4sIGFuZCBpZlxuICAvLyB3ZSdyZSBub3QganVzdCBzZWFyY2hpbmcgZm9yIHBvdGVudGlhbCBuZXN0ZWQgYWJzb2x1dGUgcGF0aHMuXG4gIGlmIChyZW1haW5pbmdQYXRobmFtZSAhPT0gbnVsbCAmJiBwYXR0ZXJuKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBtYXRjaGVkID0gKDAsIF9QYXR0ZXJuVXRpbHMubWF0Y2hQYXR0ZXJuKShwYXR0ZXJuLCByZW1haW5pbmdQYXRobmFtZSk7XG4gICAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgICByZW1haW5pbmdQYXRobmFtZSA9IG1hdGNoZWQucmVtYWluaW5nUGF0aG5hbWU7XG4gICAgICAgIHBhcmFtTmFtZXMgPSBbXS5jb25jYXQocGFyYW1OYW1lcywgbWF0Y2hlZC5wYXJhbU5hbWVzKTtcbiAgICAgICAgcGFyYW1WYWx1ZXMgPSBbXS5jb25jYXQocGFyYW1WYWx1ZXMsIG1hdGNoZWQucGFyYW1WYWx1ZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVtYWluaW5nUGF0aG5hbWUgPSBudWxsO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgfVxuXG4gICAgLy8gQnkgYXNzdW1wdGlvbiwgcGF0dGVybiBpcyBub24tZW1wdHkgaGVyZSwgd2hpY2ggaXMgdGhlIHByZXJlcXVpc2l0ZSBmb3JcbiAgICAvLyBhY3R1YWxseSB0ZXJtaW5hdGluZyBhIG1hdGNoLlxuICAgIGlmIChyZW1haW5pbmdQYXRobmFtZSA9PT0gJycpIHtcbiAgICAgIHZhciBfcmV0MiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0ge1xuICAgICAgICAgIHJvdXRlczogW3JvdXRlXSxcbiAgICAgICAgICBwYXJhbXM6IGNyZWF0ZVBhcmFtcyhwYXJhbU5hbWVzLCBwYXJhbVZhbHVlcylcbiAgICAgICAgfTtcblxuICAgICAgICBnZXRJbmRleFJvdXRlKHJvdXRlLCBsb2NhdGlvbiwgcGFyYW1OYW1lcywgcGFyYW1WYWx1ZXMsIGZ1bmN0aW9uIChlcnJvciwgaW5kZXhSb3V0ZSkge1xuICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpbmRleFJvdXRlKSkge1xuICAgICAgICAgICAgICB2YXIgX21hdGNoJHJvdXRlcztcblxuICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF9yb3V0ZXJXYXJuaW5nMi5kZWZhdWx0KShpbmRleFJvdXRlLmV2ZXJ5KGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhcm91dGUucGF0aDtcbiAgICAgICAgICAgICAgfSksICdJbmRleCByb3V0ZXMgc2hvdWxkIG5vdCBoYXZlIHBhdGhzJykgOiB2b2lkIDA7XG4gICAgICAgICAgICAgIChfbWF0Y2gkcm91dGVzID0gbWF0Y2gucm91dGVzKS5wdXNoLmFwcGx5KF9tYXRjaCRyb3V0ZXMsIGluZGV4Um91dGUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleFJvdXRlKSB7XG4gICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX3JvdXRlcldhcm5pbmcyLmRlZmF1bHQpKCFpbmRleFJvdXRlLnBhdGgsICdJbmRleCByb3V0ZXMgc2hvdWxkIG5vdCBoYXZlIHBhdGhzJykgOiB2b2lkIDA7XG4gICAgICAgICAgICAgIG1hdGNoLnJvdXRlcy5wdXNoKGluZGV4Um91dGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCBtYXRjaCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHY6IHZvaWQgMFxuICAgICAgICB9O1xuICAgICAgfSgpO1xuXG4gICAgICBpZiAoKHR5cGVvZiBfcmV0MiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoX3JldDIpKSA9PT0gXCJvYmplY3RcIikgcmV0dXJuIF9yZXQyLnY7XG4gICAgfVxuICB9XG5cbiAgaWYgKHJlbWFpbmluZ1BhdGhuYW1lICE9IG51bGwgfHwgcm91dGUuY2hpbGRSb3V0ZXMpIHtcbiAgICAvLyBFaXRoZXIgYSkgdGhpcyByb3V0ZSBtYXRjaGVkIGF0IGxlYXN0IHNvbWUgb2YgdGhlIHBhdGggb3IgYilcbiAgICAvLyB3ZSBkb24ndCBoYXZlIHRvIGxvYWQgdGhpcyByb3V0ZSdzIGNoaWxkcmVuIGFzeW5jaHJvbm91c2x5LiBJblxuICAgIC8vIGVpdGhlciBjYXNlIGNvbnRpbnVlIGNoZWNraW5nIGZvciBtYXRjaGVzIGluIHRoZSBzdWJ0cmVlLlxuICAgIHZhciBvbkNoaWxkUm91dGVzID0gZnVuY3Rpb24gb25DaGlsZFJvdXRlcyhlcnJvciwgY2hpbGRSb3V0ZXMpIHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkUm91dGVzKSB7XG4gICAgICAgIC8vIENoZWNrIHRoZSBjaGlsZCByb3V0ZXMgdG8gc2VlIGlmIGFueSBvZiB0aGVtIG1hdGNoLlxuICAgICAgICBtYXRjaFJvdXRlcyhjaGlsZFJvdXRlcywgbG9jYXRpb24sIGZ1bmN0aW9uIChlcnJvciwgbWF0Y2gpIHtcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAvLyBBIGNoaWxkIHJvdXRlIG1hdGNoZWQhIEF1Z21lbnQgdGhlIG1hdGNoIGFuZCBwYXNzIGl0IHVwIHRoZSBzdGFjay5cbiAgICAgICAgICAgIG1hdGNoLnJvdXRlcy51bnNoaWZ0KHJvdXRlKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIG1hdGNoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHJlbWFpbmluZ1BhdGhuYW1lLCBwYXJhbU5hbWVzLCBwYXJhbVZhbHVlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgcmVzdWx0ID0gZ2V0Q2hpbGRSb3V0ZXMocm91dGUsIGxvY2F0aW9uLCBwYXJhbU5hbWVzLCBwYXJhbVZhbHVlcywgb25DaGlsZFJvdXRlcyk7XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgb25DaGlsZFJvdXRlcy5hcHBseSh1bmRlZmluZWQsIHJlc3VsdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNhbGxiYWNrKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBc3luY2hyb25vdXNseSBtYXRjaGVzIHRoZSBnaXZlbiBsb2NhdGlvbiB0byBhIHNldCBvZiByb3V0ZXMgYW5kIGNhbGxzXG4gKiBjYWxsYmFjayhlcnJvciwgc3RhdGUpIHdoZW4gZmluaXNoZWQuIFRoZSBzdGF0ZSBvYmplY3Qgd2lsbCBoYXZlIHRoZVxuICogZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKlxuICogLSByb3V0ZXMgICAgICAgQW4gYXJyYXkgb2Ygcm91dGVzIHRoYXQgbWF0Y2hlZCwgaW4gaGllcmFyY2hpY2FsIG9yZGVyXG4gKiAtIHBhcmFtcyAgICAgICBBbiBvYmplY3Qgb2YgVVJMIHBhcmFtZXRlcnNcbiAqXG4gKiBOb3RlOiBUaGlzIG9wZXJhdGlvbiBtYXkgZmluaXNoIHN5bmNocm9ub3VzbHkgaWYgbm8gcm91dGVzIGhhdmUgYW5cbiAqIGFzeW5jaHJvbm91cyBnZXRDaGlsZFJvdXRlcyBtZXRob2QuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoUm91dGVzKHJvdXRlcywgbG9jYXRpb24sIGNhbGxiYWNrLCByZW1haW5pbmdQYXRobmFtZSkge1xuICB2YXIgcGFyYW1OYW1lcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gNCB8fCBhcmd1bWVudHNbNF0gPT09IHVuZGVmaW5lZCA/IFtdIDogYXJndW1lbnRzWzRdO1xuICB2YXIgcGFyYW1WYWx1ZXMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDUgfHwgYXJndW1lbnRzWzVdID09PSB1bmRlZmluZWQgPyBbXSA6IGFyZ3VtZW50c1s1XTtcblxuICBpZiAocmVtYWluaW5nUGF0aG5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIFRPRE86IFRoaXMgaXMgYSBsaXR0bGUgYml0IHVnbHksIGJ1dCBpdCB3b3JrcyBhcm91bmQgYSBxdWlyayBpbiBoaXN0b3J5XG4gICAgLy8gdGhhdCBzdHJpcHMgdGhlIGxlYWRpbmcgc2xhc2ggZnJvbSBwYXRobmFtZXMgd2hlbiB1c2luZyBiYXNlbmFtZXMgd2l0aFxuICAgIC8vIHRyYWlsaW5nIHNsYXNoZXMuXG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLmNoYXJBdCgwKSAhPT0gJy8nKSB7XG4gICAgICBsb2NhdGlvbiA9IF9leHRlbmRzKHt9LCBsb2NhdGlvbiwge1xuICAgICAgICBwYXRobmFtZTogJy8nICsgbG9jYXRpb24ucGF0aG5hbWVcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZW1haW5pbmdQYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lO1xuICB9XG5cbiAgKDAsIF9Bc3luY1V0aWxzLmxvb3BBc3luYykocm91dGVzLmxlbmd0aCwgZnVuY3Rpb24gKGluZGV4LCBuZXh0LCBkb25lKSB7XG4gICAgbWF0Y2hSb3V0ZURlZXAocm91dGVzW2luZGV4XSwgbG9jYXRpb24sIHJlbWFpbmluZ1BhdGhuYW1lLCBwYXJhbU5hbWVzLCBwYXJhbVZhbHVlcywgZnVuY3Rpb24gKGVycm9yLCBtYXRjaCkge1xuICAgICAgaWYgKGVycm9yIHx8IG1hdGNoKSB7XG4gICAgICAgIGRvbmUoZXJyb3IsIG1hdGNoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgY2FsbGJhY2spO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gcm91dGVyV2FybmluZztcbmV4cG9ydHMuX3Jlc2V0V2FybmVkID0gX3Jlc2V0V2FybmVkO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHdhcm5lZCA9IHt9O1xuXG5mdW5jdGlvbiByb3V0ZXJXYXJuaW5nKGZhbHNlVG9XYXJuLCBtZXNzYWdlKSB7XG4gIC8vIE9ubHkgaXNzdWUgZGVwcmVjYXRpb24gd2FybmluZ3Mgb25jZS5cbiAgaWYgKG1lc3NhZ2UuaW5kZXhPZignZGVwcmVjYXRlZCcpICE9PSAtMSkge1xuICAgIGlmICh3YXJuZWRbbWVzc2FnZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3YXJuZWRbbWVzc2FnZV0gPSB0cnVlO1xuICB9XG5cbiAgbWVzc2FnZSA9ICdbcmVhY3Qtcm91dGVyXSAnICsgbWVzc2FnZTtcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIF93YXJuaW5nMi5kZWZhdWx0LmFwcGx5KHVuZGVmaW5lZCwgW2ZhbHNlVG9XYXJuLCBtZXNzYWdlXS5jb25jYXQoYXJncykpO1xufVxuXG5mdW5jdGlvbiBfcmVzZXRXYXJuZWQoKSB7XG4gIHdhcm5lZCA9IHt9O1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVzZVJvdXRlckhpc3Rvcnk7XG5cbnZhciBfdXNlUXVlcmllcyA9IHJlcXVpcmUoJ2hpc3RvcnkvbGliL3VzZVF1ZXJpZXMnKTtcblxudmFyIF91c2VRdWVyaWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VzZVF1ZXJpZXMpO1xuXG52YXIgX3VzZUJhc2VuYW1lID0gcmVxdWlyZSgnaGlzdG9yeS9saWIvdXNlQmFzZW5hbWUnKTtcblxudmFyIF91c2VCYXNlbmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91c2VCYXNlbmFtZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHVzZVJvdXRlckhpc3RvcnkoY3JlYXRlSGlzdG9yeSkge1xuICByZXR1cm4gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICB2YXIgaGlzdG9yeSA9ICgwLCBfdXNlUXVlcmllczIuZGVmYXVsdCkoKDAsIF91c2VCYXNlbmFtZTIuZGVmYXVsdCkoY3JlYXRlSGlzdG9yeSkpKG9wdGlvbnMpO1xuICAgIGhpc3RvcnkuX192Ml9jb21wYXRpYmxlX18gPSB0cnVlO1xuICAgIHJldHVybiBoaXN0b3J5O1xuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3VzZVF1ZXJpZXMgPSByZXF1aXJlKCdoaXN0b3J5L2xpYi91c2VRdWVyaWVzJyk7XG5cbnZhciBfdXNlUXVlcmllczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91c2VRdWVyaWVzKTtcblxudmFyIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlciA9IHJlcXVpcmUoJy4vY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXInKTtcblxudmFyIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcik7XG5cbnZhciBfcm91dGVyV2FybmluZyA9IHJlcXVpcmUoJy4vcm91dGVyV2FybmluZycpO1xuXG52YXIgX3JvdXRlcldhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm91dGVyV2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IGNyZWF0ZUhpc3RvcnkgZnVuY3Rpb24gdGhhdCBtYXkgYmUgdXNlZCB0byBjcmVhdGVcbiAqIGhpc3Rvcnkgb2JqZWN0cyB0aGF0IGtub3cgYWJvdXQgcm91dGluZy5cbiAqXG4gKiBFbmhhbmNlcyBoaXN0b3J5IG9iamVjdHMgd2l0aCB0aGUgZm9sbG93aW5nIG1ldGhvZHM6XG4gKlxuICogLSBsaXN0ZW4oKGVycm9yLCBuZXh0U3RhdGUpID0+IHt9KVxuICogLSBsaXN0ZW5CZWZvcmVMZWF2aW5nUm91dGUocm91dGUsIChuZXh0TG9jYXRpb24pID0+IHt9KVxuICogLSBtYXRjaChsb2NhdGlvbiwgKGVycm9yLCByZWRpcmVjdExvY2F0aW9uLCBuZXh0U3RhdGUpID0+IHt9KVxuICogLSBpc0FjdGl2ZShwYXRobmFtZSwgcXVlcnksIGluZGV4T25seT1mYWxzZSlcbiAqL1xuZnVuY3Rpb24gdXNlUm91dGVzKGNyZWF0ZUhpc3RvcnkpIHtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfcm91dGVyV2FybmluZzIuZGVmYXVsdCkoZmFsc2UsICdgdXNlUm91dGVzYCBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIGBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlcmAgaW5zdGVhZC4nKSA6IHZvaWQgMDtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgICB2YXIgcm91dGVzID0gX3JlZi5yb3V0ZXM7XG5cbiAgICB2YXIgb3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ3JvdXRlcyddKTtcblxuICAgIHZhciBoaXN0b3J5ID0gKDAsIF91c2VRdWVyaWVzMi5kZWZhdWx0KShjcmVhdGVIaXN0b3J5KShvcHRpb25zKTtcbiAgICB2YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSAoMCwgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyMi5kZWZhdWx0KShoaXN0b3J5LCByb3V0ZXMpO1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgaGlzdG9yeSwgdHJhbnNpdGlvbk1hbmFnZXIpO1xuICB9O1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSB1c2VSb3V0ZXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHdpdGhSb3V0ZXI7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9ob2lzdE5vblJlYWN0U3RhdGljcyA9IHJlcXVpcmUoJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJyk7XG5cbnZhciBfaG9pc3ROb25SZWFjdFN0YXRpY3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaG9pc3ROb25SZWFjdFN0YXRpY3MpO1xuXG52YXIgX1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vUHJvcFR5cGVzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgcmV0dXJuIFdyYXBwZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgV3JhcHBlZENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xufVxuXG5mdW5jdGlvbiB3aXRoUm91dGVyKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgdmFyIFdpdGhSb3V0ZXIgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlQ2xhc3Moe1xuICAgIGRpc3BsYXlOYW1lOiAnV2l0aFJvdXRlcicsXG5cbiAgICBjb250ZXh0VHlwZXM6IHsgcm91dGVyOiBfUHJvcFR5cGVzLnJvdXRlclNoYXBlIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgcm91dGVyOiB0aGlzLmNvbnRleHQucm91dGVyIH0pKTtcbiAgICB9XG4gIH0pO1xuXG4gIFdpdGhSb3V0ZXIuZGlzcGxheU5hbWUgPSAnd2l0aFJvdXRlcignICsgZ2V0RGlzcGxheU5hbWUoV3JhcHBlZENvbXBvbmVudCkgKyAnKSc7XG4gIFdpdGhSb3V0ZXIuV3JhcHBlZENvbXBvbmVudCA9IFdyYXBwZWRDb21wb25lbnQ7XG5cbiAgcmV0dXJuICgwLCBfaG9pc3ROb25SZWFjdFN0YXRpY3MyLmRlZmF1bHQpKFdpdGhSb3V0ZXIsIFdyYXBwZWRDb21wb25lbnQpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC9bIScoKSpdL2csIGZ1bmN0aW9uIChjKSB7XG5cdFx0cmV0dXJuICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0fSk7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5pbmcgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYXJncykge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuID4gMiA/IGxlbiAtIDIgOiAwKTtcbiAgICBmb3IgKHZhciBrZXkgPSAyOyBrZXkgPCBsZW47IGtleSsrKSB7XG4gICAgICBhcmdzW2tleSAtIDJdID0gYXJndW1lbnRzW2tleV07XG4gICAgfVxuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArXG4gICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0Lmxlbmd0aCA8IDEwIHx8ICgvXltzXFxXXSokLykudGVzdChmb3JtYXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdUaGUgd2FybmluZyBmb3JtYXQgc2hvdWxkIGJlIGFibGUgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyAnICtcbiAgICAgICAgJ3dhcm5pbmcuIFBsZWFzZSwgdXNlIGEgbW9yZSBkZXNjcmlwdGl2ZSBmb3JtYXQgdGhhbjogJyArIGZvcm1hdFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgK1xuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICAgIH0pO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICB9IGNhdGNoKHgpIHt9XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG4iLCJ2YXIgQXBwID0gcmVxdWlyZSgnLi8uLi9hcHAvQXBwLmpzJyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdC9hZGRvbnMnKTtcbnZhciBUZXN0VXRpbHMgPSBSZWFjdC5hZGRvbnMuVGVzdFV0aWxzO1xuXG5kZXNjcmliZShcIkFwcFwiLCBmdW5jdGlvbigpIHtcblxuICBpdChcInNob3VsZCByZW5kZXIgdGV4dDogSGVsbG8gd29ybGQhXCIsIGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcHAgPSBUZXN0VXRpbHMucmVuZGVySW50b0RvY3VtZW50KFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwKSk7XG4gICAgZXhwZWN0KFJlYWN0LmZpbmRET01Ob2RlKGFwcCkudGV4dENvbnRlbnQpLnRvRXF1YWwoJ0hlbGxvIHdvcmxkIScpO1xuICB9KTtcblxufSk7XG5cbiJdfQ==
