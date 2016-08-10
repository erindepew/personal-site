var React = require('react');

var TextArea = React.createClass({
  getInitialState: function() {
    return {active: this.props.focus};
  },
  componentDidMount: function() {
    if (this.props.focus) {
      this.refs.textArea.getDOMNode().focus();
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
      <div className={`text-area--${this.state.active ? `ACTIVE` : `MAIN`}`} onClick={this.onClick}>
        <p className='text-area--label'>{this.props.label}</p>
        <textarea type={this.props.type} name={this.props.name} ref='textArea' name={this.props.name} onBlur={() => this.onBlur()} onFocus={() => this.onFocus()} className='text-area--input-field'/>
      </div>
    );
  }
});

module.exports = TextArea;