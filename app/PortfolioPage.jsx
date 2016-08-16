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

var PortfolioPage = React.createClass({
  render: function () {
    const currentProject = pages[this.props.routeParams.projectName];
    return (
     <Layout navState={this.props.navState} aspect='MAIN' includeNav={true}>
          <div className='layout--primary-section'>
          <div className='portfolio-page--MAIN'>
            <h1 className='portfolio-page--header'>{currentProject.title}</h1>
            <p className='portfolio-page--text'>{currentProject.intro}</p>
            {currentProject.content.map(function(item){
              return (
                <div>
                  <img className='portfolio-page--image' src={`images/portfolio/${item.image}`}/>
                  {item.caption ? <p className='portfolio-page--text'>{item.caption}</p> : null}
                  {item.link ? <a className='portfolio-page--link' data-hover={item.link.text} href={item.link.url}>{item.link.text}</a> : null}
                </div>);
            })}
          </div>
          </div>
    </Layout>
    );
  }
});

module.exports = PortfolioPage;