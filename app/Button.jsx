var React = require('react');

var Button = React.createClass({
    render: function() {
        return (
            <button>{this.props.label}</button>
        );
    }
});

module.exports = Button;