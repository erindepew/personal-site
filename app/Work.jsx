var React = require('react');
var Thumbnail = require('./Thumbnail.jsx');

var Work = React.createClass({
    render: function() {
        return (
            <div className="layout--MAIN">
                <Thumbnail text="label text"/>
            </div>
        );
    }
});

module.exports = Work;