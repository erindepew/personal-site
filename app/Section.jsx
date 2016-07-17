var React = require('react');

var Section = React.createClass({
  render: function () {
    return (
      <div className="section--MAIN">
        <h3 className="section--header">{this.props.header}</h3>
        <h5 className="section--subheader">{this.props.subheader}</h5>
        <ul className="section--content">{this.props.content.map(function (item) {
          return <li className="section--content-item">{item}</li>;
        })}</ul>
      </div>
    );
  }
});

module.exports = Section;