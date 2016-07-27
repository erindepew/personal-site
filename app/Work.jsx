var React = require('react');
var Thumbnail = require('./Thumbnail.jsx');
var Layout = require('./Layout.jsx');
var Filter = require('./Filter.jsx');

const filterOptions = ['photos', 'code', 'design', 'ux', 'all'];

const projects = [{image:'logos.jpg', title: 'Logo Designs', name: 'logos', tag:['design']},
  {image:'haskell.png', title: 'Haskell Platform Redesign', name: 'haskell', tag:[ 'code', 'ux', 'design'] },
  {image:'SSOlogin.png',title: 'Single sign-on login page', name: 'SSOLogin', tag:[ 'ux', 'design']},
  {image:'sports_dashboard.png', title: 'NBC Sports dashboard', name: 'sports_dashboard', tag:[ 'ux', 'design']},
  {image:'telemundo.png', title: 'Telemundo.com redesign', name: 'telemundo', tag:[ 'code']},
  {image:'field-hockey.png', title: 'New York Field Hockey shirt design', name: 'field_hockey', tag:[ 'design']}];

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
      <Layout navState={this.props.navState} aspect='MAIN' includeNav={true}>
        <div className='layout--primary-section'>
          <Filter label='FILTER BY' buttons={filterOptions} handleClick={this.handleClick} selected={this.state.selected}/>
          {work.map(function (item) {
                return <Thumbnail title={item.title} imageUrl={`portfolio/thumbnails/${item.image}`} link={`/work/${item.name}`}/>;
              }) }
        </div>
      </Layout>
    );
  }
});

module.exports = Work;