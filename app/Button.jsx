var React = require('react');

var Button = React.createClass({
  render: function () {
    return (
      <button className="button--MAIN">{this.props.label}</button>
    );
  }
});

module.exports = Button;