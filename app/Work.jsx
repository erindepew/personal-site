var React = require('react');
var Link = require('react-router').Link;
var Thumbnail = require('./Thumbnail.jsx');
var Navigation = require('./Navigation.jsx');
var Filter = require('./Filter.jsx');

const filterOptions = ['photos', 'code', 'design', 'ux'];

const categories = {
  design : [{image:'sunflower.jpg', text:'text content', title: 'title for thing', name: 'name1'},
  {image:'sunflower.jpg', text:'text content', title: 'title for thing', name: 'name1'},
  {image:'sunflower.jpg', text:'text content', title: 'title for thing', name: 'name1'}],
  ux : [{image:'waves.jpg', text:'text content', title: 'title for thing', name: 'name1'},
  {image:'waves.jpg', text:'text content', title: 'title for thing', name: 'name1'},
  {image:'waves.jpg', text:'text content', title: 'title for thing', name: 'name1'}, {image:'waves.jpg', text:'text content', title: 'title for thing', name: 'name7'}],
  code : [{image:'snow.jpg', text:'text content', title: 'title for thing', name: 'name8'},
    {image:'snow.jpg', text:'text content', title: 'title for thing', name: 'name9'},
    {image:'snow.jpg', text:'text content', title: 'title for thing', name: 'name10'}]
};

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
    let work = [categories['code'], categories['design'], categories['ux']];

    let filteredBy = this.state.selected;
    if(this.state.selected) {
      work = [categories[filteredBy]];
      }
    let length =  work.sort(function (a, b) { return b.length - a.length; })[0];
    return (
      <div className='layout--MAIN'>
        <div className={`layout--wrapper ${this.props.navState ? 'layout--wrapper open' : 'layout--wrapper closed'}`}>
          <Filter label='Filter by' buttons={filterOptions} handleClick={this.handleClick}/>
          {length.map(function (item, index) {
            return (
            work.map(function (item) {
              if (item[index]) {
                debugger;
                return <Link to={`/work/${item[index].name}`}><Thumbnail text={item[index].text} title={item[index].title} imageUrl={`portfolio/${item[index].image}` }/></Link>;
              }
            }));
          })}
        </div>
        <Navigation navState={this.props.navState}/>
      </div>
    );
  }
});

module.exports = Work;