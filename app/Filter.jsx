var React = require('react');
var Button = require('./Button.jsx');

var Filter = React.createClass({
  render: function () {
    var clickFunction = this.props.handleClick;
    var selected = this.props.selected;
    return (
      <div className='filter--MAIN'>
        <span className='filter--label'>{this.props.label}:</span>
        {this.props.buttons.map(function (item) {
          return <Button label={item} aspect='AlTERNATE' ref={item} selected={selected == item} handleClick={clickFunction}/>;
        })}
      </div>
    );
  }
});

module.exports = Filter;