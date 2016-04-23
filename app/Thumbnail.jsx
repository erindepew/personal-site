var React = require('react');

var Thumbnail = React.createClass({
  render: function () {
    return (
      <div className="thumbnail--MAIN">
        <div className="thumbnail--overlay">
          <h5 className='thumbnail--title'>{this.props.title}</h5>
          <p className='thumbnail--text'>{this.props.text}</p>
        </div>
        <img className='thumbnail--image' src={`images/${this.props.imageUrl}`}/>
      </div>
    );
  }
});

module.exports = Thumbnail;