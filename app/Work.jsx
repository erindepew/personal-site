var React = require('react');
var Thumbnail = require('./Thumbnail.jsx');
var Navigation = require('./Navigation.jsx');
var Filter = require('./Filter.jsx');

const filterOptions = ['photos', 'code', 'design', 'ux'];

const projects = [{image:'logos.jpg', text:'Logo desings for NBCUniversal', title: 'Logo Designs', name: 'logos', tag:['design']},
  {image:'haskell.png', text:'UX, design and code for Haskell Platform redesign', title: 'Haskell Platform Redesign', name: 'haskell', tag:[ 'code', 'ux', 'design'] },
  {image:'SSOlogin.png', text:'NBC SSO Login', title: 'Single sign-on login page', name: 'SSOLogin', tag:[ 'ux', 'design']},
  {image:'sports_dashboard.png', text:'single page app for NBC Sports stats', title: 'NBC Sports dashboard', name: 'sports_dashboard', tag:[ 'ux', 'design']},
  {image:'telemundo.png', text:'Development work and design assitance for the Telemundo.com redesign', title: 'Telemundo.com redesign', name: 'telemundo', tag:[ 'code']}];

var Work = React.createClass({
  getInitialState: function() {
    return {selected: false};
  },
  handleClick: function(selected) {
    if (!this.state.selected) {
      this.setState({selected: selected});
    }
    else {
      this.setState({selected: false});
    }
  },
  render: function () {
    let work = projects.filter((item) => {
      if (this.state.selected && (item.tag.indexOf(this.state.selected) > -1))
      {return item}
      if (!this.state.selected) {
        return projects;
      }
    });

    return (
      <div className='layout--MAIN'>
        <div className={`layout--wrapper ${this.props.navState ? 'layout--wrapper open' : 'layout--wrapper closed'}`}>
          <div className='layout--primary-section'>
            <Filter label='Filter by' buttons={filterOptions} handleClick={this.handleClick} selected={this.state.selected}/>
            {work.map(function (item) {
                  return <Thumbnail text={item.text} title={item.title} imageUrl={`portfolio/thumbnails/${item.image}`} link={`/work/${item.name}`}/>;
                }) }
          </div>
        </div>
        <Navigation navState={this.props.navState}/>
      </div>
    );
  }
});

module.exports = Work;