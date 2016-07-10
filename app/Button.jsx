var React = require('react');

var Button = React.createClass({
  render: function () {
    return (
      <button onClick={this.props.handleClick ? this.props.handleClick.bind(null, this.props.label) : null} className={`button--${this.props.aspect}${this.props.selected ? '-SELECTED' : ''}`}>{this.props.label}</button>
    );
  }
});

module.exports = Button;