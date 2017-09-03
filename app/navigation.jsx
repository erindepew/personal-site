var React = require('react');
var Link = require('react-router').Link;

var Navigation = React.createClass({
  render: function () {
    var navClass = this.props.navState ? 'nav--MAIN open' : 'nav--MAIN closed';
    return (
      <nav className={navClass}>
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
        </ul>
      </nav>
    );
  }
});

module.exports = Navigation;