var React = require('react');
var Thumbnail = require('./Thumbnail.jsx');
var Navigation = require('./Navigation.jsx');
var Filter = require('./Filter.jsx');

const filterOptions = ['photos', 'code', 'design', 'ux', 'all'];

const projects = [{image:'logos.jpg', text:'Logo desings for NBCUniversal', title: 'Logo Designs', name: 'logos', tag:['design']},
  {image:'haskell.png', text:'UX, design and code for Haskell Platform redesign', title: 'Haskell Platform Redesign', name: 'haskell', tag:[ 'code', 'ux', 'design'] },
  {image:'SSOlogin.png', text:'NBC SSO Login', title: 'Single sign-on login page', name: 'SSOLogin', tag:[ 'ux', 'design']},
  {image:'sports_dashboard.png', text:'single page app for NBC Sports stats', title: 'NBC Sports dashboard', name: 'sports_dashboard', tag:[ 'ux', 'design']},
  {image:'telemundo.png', text:'Development work and design assitance for the Telemundo.com redesign', title: 'Telemundo.com redesign', name: 'telemundo', tag:[ 'code']},
  {image:'field-hockey.png', text:'Designs for New York Field Hockey club`s 10 year anniversary', title: 'New York Field Hockey t-shirt designs', name: 'field_hockey', tag:[ 'design']}];

var Work = React.createClass({
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
      <div className='layout--MAIN'>
        <div className={`layout--wrapper ${this.props.navState ? 'open' : 'closed'}`}>
          <div className='layout--primary-section'>
            <Filter label='FILTER BY' buttons={filterOptions} handleClick={this.handleClick} selected={this.state.selected}/>
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