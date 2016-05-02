var React = require('react');

var Button = React.createClass({
  getInitialState: function() {
    return {selected: false};
  },

  handleClick: function() {
    debugger;
    if (!this.state.selected) {
      this.setState({selected: this.props.label});
    }
    else {
      this.setState({selected: false});
    }
  },

  render: function () {
    return (
      <button onClick={this.handleClick} className={`button--${this.props.aspect}`}>{this.props.label}</button>
    );
  }
});

module.exports = Button;