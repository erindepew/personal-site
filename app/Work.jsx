var React = require('react');
var Thumbnail = require('./Thumbnail.jsx');
var Navigation = require('./Navigation.jsx');
var Filter = require('./Filter.jsx');

const filterOptions = ['photos', 'code', 'design', 'ux'];

const categories = {
  design : [{image:'sunflower.jpg', text:'text content', title: 'title for thing'},
  {image:'sunflower.jpg', text:'text content', title: 'title for thing'},
  {image:'sunflower.jpg', text:'text content', title: 'title for thing'}],
  ux : [{image:'waves.jpg', text:'text content', title: 'title for thing'},
  {image:'waves.jpg', text:'text content', title: 'title for thing'},
  {image:'waves.jpg', text:'text content', title: 'title for thing'}, {image:'waves.jpg', text:'text content', title: 'title for thing'}],
  code : [{image:'snow.jpg', text:'text content', title: 'title for thing'},
    {image:'snow.jpg', text:'text content', title: 'title for thing'},
    {image:'snow.jpg', text:'text content', title: 'title for thing'}]
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
                return <Thumbnail text={item[index].text} title={item[index].title} imageUrl={`portfolio/${item[index].image}` }/>;
              }
            }));
          })}
        </div>
        {/*<Navigation navState={this.props.navState}/>*/}
      </div>
    );
  }
});

module.exports = Work;