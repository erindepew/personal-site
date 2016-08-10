var React = require('react');

var InputField = React.createClass({
  getInitialState: function() {
    return {active: this.props.focus};
  },
  componentDidMount: function() {
    if (this.props.focus) {
      this.refs.inputField.getDOMNode().focus();
    }
  },
  onClick: function() {
     this.onFocus();
  },
  onFocus: function() {
    this.setState({active: true})
  },
  onBlur: function() {
    this.setState({active: false})
  },
  render: function () {
    return (
      <div className={`input-field--${this.state.active ? `ACTIVE` : `MAIN`}`} onClick={this.onClick}>
        <p className='input-field--label'>{this.props.label}</p>
        <input type={this.props.type} maxLength={this.props.max} ref='inputField' name={this.props.name} onBlur={() => this.onBlur()} onFocus={() => this.onFocus()} className='input-field--input-field'/>
      </div>
    );
  }
});

module.exports = InputField;