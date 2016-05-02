var React = require('react');
var Button = require('./Button.jsx');

var Filter = React.createClass({

  render: function () {
    return (
      <div className='filter--MAIN'>
        <span className='filter--label'>{this.props.label}:</span>
        {this.props.buttons.map(function (item) {
          return <Button label={item} aspect='AlTERNATE' ref={item}/>;
        })}
      </div>
    );
  }
});

module.exports = Filter;