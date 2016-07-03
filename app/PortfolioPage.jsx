var React = require('react');
var Navigation = require('./Navigation.jsx');

const pages = {
  logos: {title: 'Logo Designs', intro: 'A collection of logos that I designed for NBCUniversal.', content: [{image: 'logos/logo1.jpg', caption: 'caption text here'}, {image: 'logos/logo2.png', caption: 'caption text here'}, {image: 'logos/logo3.png', caption: 'caption text here'},  {image: 'logos/logo4.png', caption: 'caption text here'}]},
  haskell: {title: 'Haskell Platform Redesign', intro: 'UX, design and code for Haskell Platform redesign.', content: [{image: 'haskell/haskell-platform-1.png', caption: 'caption text here'}, {image: 'haskell/haskell-platform-2.png', caption: 'caption text here'}, {image: 'haskell/haskell-platform-3.png', caption: 'caption text here'} ]},
  SSOLogin: {title: 'SSO Login redesign', intro: 'UX and design for single-sign-on login for NBCUniversal.', content: [{image: 'SSOlogin/SSOLogin-1.png', caption: 'caption text here'}, {image: 'SSOlogin/SSOLogin-2.png', caption: 'caption text here'}, {image: 'SSOlogin/SSOLogin-3.png', caption: 'caption text here'},
    {image: 'SSOlogin/SSOLogin-4.png', caption: 'caption text here'}, {image: 'SSOlogin/SSOLogin-5.png', caption: 'caption text here'}, {image: 'SSOlogin/SSOLogin-6.png', caption: 'caption text here'} ]}
};

var PortfolioPage = React.createClass({
  render: function () {
    debugger;
    const currentProject = pages[this.props.routeParams.projectName];
    return (
      <div className='layout--MAIN'>
        <div className={`layout--wrapper ${this.props.navState ? 'layout--wrapper open' : 'layout--wrapper closed'}`}>
          <div className='layout--primary-section'>
          <div className='portfolio-page--MAIN'>
            <h1 className='portfolio-page--header'>{currentProject.title}</h1>
            <p className='portfolio-page--text'>{currentProject.intro}</p>
            {currentProject.content.map(function(item){
              return (
                <div>
                  <img className='portfolio-page--image' src={`images/portfolio/${item.image}`}/>
                  <p className='portfolio-page--text'>{item.caption}</p>
                </div>);
            })}
          </div>
          </div>
         </div>
        <Navigation navState={this.props.navState}/>
        </div>
    );
  }
});

module.exports = PortfolioPage;