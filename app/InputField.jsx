var React = require('react');

var InputField = React.createClass({
  render: function () {
    return (
      <div className='input-field--MAIN'>
        <p className='input-field--label'>{this.props.label}</p>
        <input type={this.props.type} name={this.props.name} className='input-field--input-field'/>
      </div>
    );
  }
});

module.exports = InputField;