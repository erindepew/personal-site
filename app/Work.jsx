var React = require('react');
var Thumbnail = require('./Thumbnail.jsx');
var Navigation = require('./Navigation.jsx');

var Work = React.createClass({
  render: function () {
    var layoutClass = this.props.navState ? 'layout--wrapper open' : 'layout--wrapper closed';
    return (
      <div className='layout--MAIN'>
        <div className={layoutClass}>
          <Thumbnail text='text'/>
        </div>
        <Navigation navState={this.props.navState}/>
      </div>
    );
  }
});

module.exports = Work;