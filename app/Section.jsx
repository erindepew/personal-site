var React = require('react');

var Section = React.createClass({
  render: function () {
    return (
      <div className="section--MAIN">
        <h3 className="section--header">{this.props.header}</h3>
        <h5 className="section--subheader">{this.props.subheader}</h5>
        <p className="section--content">{this.props.content}</p>
      </div>
    );
  }
});

module.exports = Section;