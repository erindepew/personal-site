var React = require('react');

var TextArea = React.createClass({
  render: function () {
    return (
      <div className='text-area--MAIN'>
        <p className='text-area--label'>{this.props.label}</p>
        <textarea className='text-area--input-field'/>
      </div>
    );
  }
});

module.exports = TextArea;