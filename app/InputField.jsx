var React = require('react');

var InputField = React.createClass({
  render: function () {
    return (
      <div className='input-field--MAIN'>
        <p className='input-field--label'>{this.props.label}</p>
        <input className='input-field--input-field'/>
      </div>
    );
  }
});

module.exports = InputField;