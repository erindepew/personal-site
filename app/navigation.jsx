var React = require('react');
var Link = require('react-router').Link;

var Navigation = React.createClass({
    render: function() {
        return (
            <nav className='nav--MAIN'>
                <ul className="nav--nav-list">
                    <li className="nav--nav-link">
                        <Link to="/">ABOUT</Link>
                    </li>
                    <li className="nav--nav-link">
                        <Link to="/work">WORK</Link>
                    </li>
                    <li className="nav--nav-link">
                        <Link to="/resume">RESUME</Link>
                    </li>
                    <li className="nav--nav-link">
                        <a href="http://www.erindepew.com/blog">BLOG</a>
                    </li>
                </ul>
            </nav>
        );
    }
});

module.exports = Navigation;