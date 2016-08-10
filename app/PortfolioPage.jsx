var React = require('react');
var Layout = require('./Layout.jsx');

const pages = {
  logos: {title: 'Logo Designs', intro: 'A collection of logos that I designed for NBCUniversal.', content: [{image: 'logos/logo1.jpg', caption: 'caption text here', link: null}, {image: 'logos/logo2.png', caption: 'caption text here', link: null}, {image: 'logos/logo3.png', caption: 'caption text here', link: null},  {image: 'logos/logo4.png', caption: 'caption text here', link: null}]},
  haskell: {title: 'Haskell Platform Redesign', intro: 'UX, design and code for Haskell Platform redesign.', content: [{image: 'haskell/haskell-platform-1.png', caption: 'caption text here', link: null}, {image: 'haskell/haskell-platform-2.png', caption: 'caption text here', link: null}, {image: 'haskell/haskell-platform-3.png', caption: 'caption text here', link: null} ]},
  SSOLogin: {title: 'SSO Login redesign', intro: 'UX and design for single-sign-on login for NBCUniversal.', content: [{image: 'SSOlogin/SSOLogin-1.png', caption: 'caption text here'}, {image: 'SSOlogin/SSOLogin-2.png', caption: 'caption text here'}, {image: 'SSOlogin/SSOLogin-3.png', caption: 'caption text here'},
    {image: 'SSOlogin/SSOLogin-4.png', caption: 'caption text here', link: null}, {image: 'SSOlogin/SSOLogin-5.png', caption: 'caption text here' , link: null}, {image: 'SSOlogin/SSOLogin-6.png', caption: 'caption text here', link: null} ]},
  sports_dashboard: {title: 'NBC Sports dashboard', intro: 'UX and design for single page app for NBC Sports.', content: [{image: 'sports_dashboard/sports-dashboard-1.png', caption: 'caption text here', link: null}, {image: 'sports_dashboard/sports-dashboard-2.png', caption: 'caption text here', link: null}, {image: 'sports_dashboard/sports-dashboard-3.png', caption: 'caption text here', link: null},
    {image: 'sports_dashboard/sports-dashboard-4.png', caption: 'caption text here', link: null}]},
    telemundo: {title: 'Telemundo.com redesign', intro: "I assisted with a complete redesign and rebuild of Telemundo's main website, and acted as a hybrid designer/developer and a bridge between the NBCUniversal development team and Telemundo design and UX team.", content: [{image: 'telemundo/Telemundo-1.png', caption: "CSS3, HTML5, Sass and Compass were used to build a responsive and component-based front-end with a Drupal CMS backend.", link: {url: 'www.telemundo.com', text: 'View the Telemundo site =>'}}, {image: 'telemundo/Telemundo-2.png', caption: 'The design, UX and front-end development team used Pattern Lab as a tool to collaboratively create a component-based site from design to development.', link: {url: 'http://nbcuots.github.io/Publisher7_nbcutelemundo/?p=pages-homepage-b', text: 'View the Telemundo pattern lab =>'}}]},
  field_hockey: {title: 'New York Field Hockey t-shirt designs', intro: 'Designs for New York Field Hockey club`s 10 year anniversary', content: [{image: 'field-hockey/mockup-dark_v1.jpg', caption: 'caption text here', link: null}, {image: 'field-hockey/mockup-light_v1.jpg', caption: 'caption text here', link: null},
    {image: 'field-hockey/mockup-dark_v2.jpg', caption: 'caption text here', link: null}, {image: 'field-hockey/mockup-light_v2.jpg', caption: 'caption text here', link: null},
    {image: 'field-hockey/mockup-dark_v3.jpg', caption: 'caption text here', link: null}, {image: 'field-hockey/mockup-light_v3.jpg', caption: 'caption text here', link: null}]}
};

var PortfolioPage = React.createClass({
  render: function () {
    debugger;
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
                  <p className='portfolio-page--text'>{item.caption}</p>
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