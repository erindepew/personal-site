var React = require('react');

var Button = React.createClass({
  render: function () {
    return (
      <button className={`button--${this.props.aspect}`}>{this.props.label}</button>
    );
  }
});

module.exports = Button;