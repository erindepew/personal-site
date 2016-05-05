var React = require('react');

var Button = React.createClass({
  render: function () {
    return (
      <button onClick={this.props.handleClick.bind(null, this.props.label)} className={`button--${this.props.aspect}`}>{this.props.label}</button>
    );
  }
});

module.exports = Button;