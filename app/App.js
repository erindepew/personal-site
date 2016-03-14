var React = require('react');
var Navigation = require('./Navigation.jsx');
var Home = require('./Home.jsx');
var Resume = require('./Resume.jsx');
var Work = require('./Work.jsx');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;
var hashHistory = require('react-router').hashHistory;


var App = React.createClass({
    render: function() {
        return (
            <div className='layout--wrapper'>
                {this.props.children}
                <Navigation/>
            </div>
        );
    }
});

React.render((
    <Router history = {hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/work" component={Work} />
            <Route path="/resume" component={Resume} />
        </Route>
    </Router>
), document.body);