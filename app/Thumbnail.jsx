var React = require('react');

var Thumbnail = React.createClass({
  render: function () {
    return (
      <div className="thumbnail--MAIN">
        <div className="thumbnail--overlay">{this.props.text}</div>
        <img className='thumbnail--image' src={`images/${this.props.imageUrl}`}/>
      </div>
    );
  }
});

module.exports = Thumbnail;