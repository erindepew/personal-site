var React = require('react');
var Navigation = require('./Navigation.jsx');

const pages = {
  name1: {title: 'title', intro: 'intro text', content: [{image: 'sunflower.jpg', caption: 'caption text here'}, {image: 'sunflower.jpg', caption: 'caption text here'}, {image: 'sunflower.jpg', caption: 'caption text here'}]}
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
                  <img className='thumbnail--image' src={`images/portfolio/${item.image}`}/>
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