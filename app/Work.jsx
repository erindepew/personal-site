var React = require('react');
var Thumbnail = require('./Thumbnail.jsx');
var Navigation = require('./Navigation.jsx');
var Filter = require('./Filter.jsx');

const filterOptions = ['Photos', 'Code', 'Design', 'UX'];

const design = [{image:'sunflower.jpg', text:'text content', title: 'title for thing'},
  {image:'sunflower.jpg', text:'text content', title: 'title for thing'},
  {image:'sunflower.jpg', text:'text content', title: 'title for thing'}];

const ux = [{image:'waves.jpg', text:'text content', title: 'title for thing'},
  {image:'waves.jpg', text:'text content', title: 'title for thing'},
  {image:'waves.jpg', text:'text content', title: 'title for thing'}, {image:'waves.jpg', text:'text content', title: 'title for thing'}];

const programming = [{image:'snow.jpg', text:'text content', title: 'title for thing'},
  {image:'snow.jpg', text:'text content', title: 'title for thing'},
  {image:'snow.jpg', text:'text content', title: 'title for thing'}];

const work = [programming, design, ux];

const length = work.sort(function (a, b) { return b.length - a.length; })[0];
debugger;

var Work = React.createClass({

  getInitialState: function() {
    return {selected: null};
  },

  setSelectedItem: function() {
    debugger;
    filterOptions.map(function (item) {
      const button = this.refs.item;
      if (!button.state.selected) {
        this.setState({selected: button.state.selected});
      }
    })
  },
  handleClick: function() {
    debugger;
    this.setSelectedItem();
  },

  render: function () {
    debugger;
    return (
      <div className='layout--MAIN'>
        <div className={`layout--wrapper ${this.props.navState ? 'layout--wrapper open' : 'layout--wrapper closed'}`}>
          <Filter label='Filter by' buttons={filterOptions} onClick={this.handleClick}/>
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