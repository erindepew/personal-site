var React = require('react');
var Thumbnail = require('./Thumbnail.jsx');
var Navigation = require('./Navigation.jsx');
var Filter = require('./Filter.jsx');

const filterOptions = ['Photos', 'Code', 'Design', 'UX'];
const design = [{image:'sunflower.jpg', text:'text content', title: 'title for thing'},
  {image:'sunflower.jpg', text:'text content', title: 'title for thing'},
  {image:'sunflower.jpg', text:'text content', title: 'title for thing'}];

var Work = React.createClass({
  render: function () {
    return (
      <div className='layout--MAIN'>
        <div className={`layout--wrapper ${this.props.navState ? 'layout--wrapper open' : 'layout--wrapper closed'}`}>
          <Filter label='Filter by' buttons={filterOptions}/>
          {design.map(function (item) {
            return <Thumbnail text={item.text} title={item.title} imageUrl={`portfolio/${item.image}` }/>;
          })}
        </div>
        {/*<Navigation navState={this.props.navState}/>*/}
      </div>
    );
  }
});

module.exports = Work;