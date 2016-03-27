var React = require('react');
var Home = require('./Home.jsx');
var Resume = require('./Resume.jsx');
var Work = require('./Work.jsx');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;


var App = React.createClass({
  getInitialState: function() {
    return {navState: false};
  },
  navClick: function() {
    this.setState({navState: !this.state.navState});
  },

  render: function () {
    var mobileNavClass = this.state.navState ? 'nav--mobile-icon open' : 'nav--mobile-icon closed';
    return (
      <div>
        <span className={mobileNavClass} onClick={this.navClick}> navigation mobile icon</span>
        {React.cloneElement(this.props.children, { navState: this.state.navState })}
      </div>
    );
  }
});

React.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/work" component={Work}/>
      <Route path="/resume" component={Resume}/>
    </Route>
  </Router>
), document.body);