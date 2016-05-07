var React = require('react');
var Link = require('react-router').Link;

var Thumbnail = React.createClass({
  render: function () {
    return (
      <Link to={this.props.link} className='thumbnail--MAIN'>
        <div className="thumbnail--overlay">
          <div className='thumbnail--overlay-text'>
            <h5 className='thumbnail--title'>{this.props.title}</h5>
            <p className='thumbnail--text'>{this.props.text}</p>
          </div>
        </div>
        <img className='thumbnail--image' src={`images/${this.props.imageUrl}`}/>
    </Link>
    );
  }
});

module.exports = Thumbnail;