(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/eld/Desktop/personal-site/app/About.jsx":[function(require,module,exports){
var React = require('react');
var Button = require('./Button.jsx');

var About = React.createClass({displayName: "About",
    render: function() {
        return (
        React.createElement("div", {className: "about--MAIN"}, 
            React.createElement("img", {className: "about--profile-image", src: "images/profile-pic.png"}), 
                React.createElement("div", {className: "about--text-wrapper"}, 
                    React.createElement("p", {className: "about--text"}, "I am a front-end developer and web designer currently living in Brooklyn and working in Manhattan. Whether you consider me a designer with programming skills," + ' ' +
                        "or a programmer with a knack for beautiful design, my diverse skill set is what allows" + ' ' +
                        "me to holistically solve problems. I believe that one of life's greatest pleasures is creation, no matter your medium of choice."), 
                    React.createElement(Button, {label: "CONTACT"})
                )
            )
        );
    }
});

module.exports = About;
},{"./Button.jsx":"/Users/eld/Desktop/personal-site/app/Button.jsx","react":"react"}],"/Users/eld/Desktop/personal-site/app/App.js":[function(require,module,exports){
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


var App = React.createClass({displayName: "App",
    render: function() {
        return (
            React.createElement("div", {className: "layout--wrapper"}, 
                this.props.children, 
                React.createElement(Navigation, null)
            )
        );
    }
});

React.render((
    React.createElement(Router, {history: hashHistory}, 
        React.createElement(Route, {path: "/", component: App}, 
            React.createElement(IndexRoute, {component: Home}), 
            React.createElement(Route, {path: "/work", component: Work}), 
            React.createElement(Route, {path: "/resume", component: Resume})
        )
    )
), document.body);
},{"./Home.jsx":"/Users/eld/Desktop/personal-site/app/Home.jsx","./Navigation.jsx":"/Users/eld/Desktop/personal-site/app/Navigation.jsx","./Resume.jsx":"/Users/eld/Desktop/personal-site/app/Resume.jsx","./Work.jsx":"/Users/eld/Desktop/personal-site/app/Work.jsx","react":"react","react-router":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/index.js"}],"/Users/eld/Desktop/personal-site/app/Button.jsx":[function(require,module,exports){
var React = require('react');

var Button = React.createClass({displayName: "Button",
    render: function() {
        return (
            React.createElement("button", {className: "button--MAIN"}, this.props.label)
        );
    }
});

module.exports = Button;
},{"react":"react"}],"/Users/eld/Desktop/personal-site/app/Home.jsx":[function(require,module,exports){
var React = require('react');
var About = require('./About.jsx');

var Home = React.createClass({displayName: "Home",
    render: function() {
        return (
            React.createElement("div", {className: "layout--MAIN"}, 
                React.createElement("div", {className: "header--MAIN"}, " I am a developer & designer."), 
                React.createElement(About, null)
            )
        );
    }
});

module.exports = Home;
},{"./About.jsx":"/Users/eld/Desktop/personal-site/app/About.jsx","react":"react"}],"/Users/eld/Desktop/personal-site/app/Navigation.jsx":[function(require,module,exports){
var React = require('react');
var Link = require('react-router').Link;

var Navigation = React.createClass({displayName: "Navigation",
    render: function() {
        return (
            React.createElement("nav", {className: "nav--MAIN"}, 
                React.createElement("ul", {className: "nav--nav-list"}, 
                    React.createElement("li", {className: "nav--nav-link"}, 
                        React.createElement(Link, {to: "/"}, "ABOUT")
                    ), 
                    React.createElement("li", {className: "nav--nav-link"}, 
                        React.createElement(Link, {to: "/work"}, "WORK")
                    ), 
                    React.createElement("li", {className: "nav--nav-link"}, 
                        React.createElement(Link, {to: "/resume"}, "RESUME")
                    ), 
                    React.createElement("li", {className: "nav--nav-link"}, 
                        React.createElement("a", {href: "http://www.erindepew.com/blog"}, "BLOG")
                    )
                )
            )
        );
    }
});

module.exports = Navigation;
},{"react":"react","react-router":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/index.js"}],"/Users/eld/Desktop/personal-site/app/Resume.jsx":[function(require,module,exports){
var React = require('react');
var Section = require('./Section.jsx');
var Button = require ('./Button.jsx');


var experience = [
    {header: 'Bitly',
    subheader: '2015 - present',
    content: 'brief description'},
    {header: 'Bitly',
        subheader: '2015 - present',
        content: 'brief description'}

];

var Resume = React.createClass({displayName: "Resume",
    render: function() {
        return (
            React.createElement("div", {className: "layout--ALTERNATE"}, 
                React.createElement("div", {className: "layout--primary-section"}, 
                React.createElement(Section, {header: "header text", subheader: "subheader text", content: "content text"})
                ), 
                React.createElement("div", {className: "layout--seconday-section"}, 
                    React.createElement(Button, {label: "download PDF"})
                )
            )
        );
    }
});

module.exports = Resume;
},{"./Button.jsx":"/Users/eld/Desktop/personal-site/app/Button.jsx","./Section.jsx":"/Users/eld/Desktop/personal-site/app/Section.jsx","react":"react"}],"/Users/eld/Desktop/personal-site/app/Section.jsx":[function(require,module,exports){
var React = require('react');

var Section = React.createClass({displayName: "Section",
	render: function() {
		return (
			React.createElement("div", {className: "section--MAIN"}, 
				React.createElement("h3", {className: "section--header"}, this.props.header), 
				React.createElement("h5", {className: "section--subheader"}, this.props.subheader), 
				React.createElement("p", {className: "section--content"}, this.props.content)
			)
		);
	}
});

module.exports = Section;
},{"react":"react"}],"/Users/eld/Desktop/personal-site/app/Thumbnail.jsx":[function(require,module,exports){
var React = require('react');

var Thumbnail = React.createClass({displayName: "Thumbnail",
	render: function() {
		return (
			React.createElement("div", {className: "thumbnail--MAIN"}, 
				React.createElement("div", {className: "thumbnail--overlay"}, this.props.text), 
				React.createElement("img", null)
			)
		);
	}
});

module.exports = Thumbnail;
},{"react":"react"}],"/Users/eld/Desktop/personal-site/app/Work.jsx":[function(require,module,exports){
var React = require('react');
var Thumbnail = require('./Thumbnail.jsx');

var Work = React.createClass({displayName: "Work",
    render: function() {
        return (
            React.createElement("div", {className: "layout--MAIN"}, 
                React.createElement(Thumbnail, {text: "label text"})
            )
        );
    }
});

module.exports = Work;
},{"./Thumbnail.jsx":"/Users/eld/Desktop/personal-site/app/Thumbnail.jsx","react":"react"}],"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js":[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            currentQueue[queueIndex].run();
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/AsyncUtils.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;
var _slice = Array.prototype.slice;
exports.loopAsync = loopAsync;
exports.mapAsync = mapAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0,
      isDone = false;
  var sync = false,
      hasNext = false,
      doneArgs = undefined;

  function done() {
    isDone = true;
    if (sync) {
      // Iterate instead of recursing if possible.
      doneArgs = [].concat(_slice.call(arguments));
      return;
    }

    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) {
      return;
    }

    hasNext = true;
    if (sync) {
      // Iterate instead of recursing if possible.
      return;
    }

    sync = true;

    while (!isDone && currentTurn < turns && hasNext) {
      hasNext = false;
      work.call(this, currentTurn++, next, done);
    }

    sync = false;

    if (isDone) {
      // This means the loop finished synchronously.
      callback.apply(this, doneArgs);
      return;
    }

    if (currentTurn >= turns && hasNext) {
      isDone = true;
      callback();
    }
  }

  next();
}

function mapAsync(array, work, callback) {
  var length = array.length;
  var values = [];

  if (length === 0) return callback(null, values);

  var isDone = false,
      doneCount = 0;

  function done(index, error, value) {
    if (isDone) return;

    if (error) {
      isDone = true;
      callback(error);
    } else {
      values[index] = value;

      isDone = ++doneCount === length;

      if (isDone) callback(null, values);
    }
  }

  array.forEach(function (item, index) {
    work(item, index, function (error, value) {
      done(index, error, value);
    });
  });
}
},{}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/History.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _PropTypes = require('./PropTypes');

/**
 * A mixin that adds the "history" instance variable to components.
 */
var History = {

  contextTypes: {
    history: _PropTypes.history
  },

  componentWillMount: function componentWillMount() {
    process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, 'the `History` mixin is deprecated, please access `context.router` with your own `contextTypes`. http://tiny.cc/router-historymixin') : undefined;
    this.history = this.context.history;
  }

};

exports['default'] = History;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./PropTypes":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/PropTypes.js","./routerWarning":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/routerWarning.js","_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/IndexLink.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

/**
 * An <IndexLink> is used to link to an <IndexRoute>.
 */
var IndexLink = _react2['default'].createClass({
  displayName: 'IndexLink',

  render: function render() {
    return _react2['default'].createElement(_Link2['default'], _extends({}, this.props, { onlyActiveOnIndex: true }));
  }

});

exports['default'] = IndexLink;
module.exports = exports['default'];
},{"./Link":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/Link.js","react":"react"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/IndexRedirect.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Redirect = require('./Redirect');

var _Redirect2 = _interopRequireDefault(_Redirect);

var _PropTypes = require('./PropTypes');

var _React$PropTypes = _react2['default'].PropTypes;
var string = _React$PropTypes.string;
var object = _React$PropTypes.object;

/**
 * An <IndexRedirect> is used to redirect from an indexRoute.
 */
var IndexRedirect = _react2['default'].createClass({
  displayName: 'IndexRedirect',

  statics: {

    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
      /* istanbul ignore else: sanity check */
      if (parentRoute) {
        parentRoute.indexRoute = _Redirect2['default'].createRouteFromReactElement(element);
      } else {
        process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, 'An <IndexRedirect> does not make sense at the root of your route config') : undefined;
      }
    }

  },

  propTypes: {
    to: string.isRequired,
    query: object,
    state: object,
    onEnter: _PropTypes.falsy,
    children: _PropTypes.falsy
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
    !false ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
  }

});

exports['default'] = IndexRedirect;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./PropTypes":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/PropTypes.js","./Redirect":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/Redirect.js","./routerWarning":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/routerWarning.js","_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js","invariant":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/invariant/browser.js","react":"react"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/IndexRoute.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _RouteUtils = require('./RouteUtils');

var _PropTypes = require('./PropTypes');

var func = _react2['default'].PropTypes.func;

/**
 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
 * a JSX route config.
 */
var IndexRoute = _react2['default'].createClass({
  displayName: 'IndexRoute',

  statics: {

    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
      /* istanbul ignore else: sanity check */
      if (parentRoute) {
        parentRoute.indexRoute = _RouteUtils.createRouteFromReactElement(element);
      } else {
        process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, 'An <IndexRoute> does not make sense at the root of your route config') : undefined;
      }
    }

  },

  propTypes: {
    path: _PropTypes.falsy,
    component: _PropTypes.component,
    components: _PropTypes.components,
    getComponent: func,
    getComponents: func
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
    !false ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, '<IndexRoute> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
  }

});

exports['default'] = IndexRoute;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./PropTypes":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/PropTypes.js","./RouteUtils":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/RouteUtils.js","./routerWarning":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/routerWarning.js","_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js","invariant":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/invariant/browser.js","react":"react"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/Lifecycle.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var object = _react2['default'].PropTypes.object;

/**
 * The Lifecycle mixin adds the routerWillLeave lifecycle method to a
 * component that may be used to cancel a transition or prompt the user
 * for confirmation.
 *
 * On standard transitions, routerWillLeave receives a single argument: the
 * location we're transitioning to. To cancel the transition, return false.
 * To prompt the user for confirmation, return a prompt message (string).
 *
 * During the beforeunload event (assuming you're using the useBeforeUnload
 * history enhancer), routerWillLeave does not receive a location object
 * because it isn't possible for us to know the location we're transitioning
 * to. In this case routerWillLeave must return a prompt message to prevent
 * the user from closing the window/tab.
 */
var Lifecycle = {

  contextTypes: {
    history: object.isRequired,
    // Nested children receive the route as context, either
    // set by the route component using the RouteContext mixin
    // or by some other ancestor.
    route: object
  },

  propTypes: {
    // Route components receive the route object as a prop.
    route: object
  },

  componentDidMount: function componentDidMount() {
    process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, 'the `Lifecycle` mixin is deprecated, please use `context.router.setRouteLeaveHook(route, hook)`. http://tiny.cc/router-lifecyclemixin') : undefined;
    !this.routerWillLeave ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'The Lifecycle mixin requires you to define a routerWillLeave method') : _invariant2['default'](false) : undefined;

    var route = this.props.route || this.context.route;

    !route ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'The Lifecycle mixin must be used on either a) a <Route component> or ' + 'b) a descendant of a <Route component> that uses the RouteContext mixin') : _invariant2['default'](false) : undefined;

    this._unlistenBeforeLeavingRoute = this.context.history.listenBeforeLeavingRoute(route, this.routerWillLeave);
  },

  componentWillUnmount: function componentWillUnmount() {
    if (this._unlistenBeforeLeavingRoute) this._unlistenBeforeLeavingRoute();
  }

};

exports['default'] = Lifecycle;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./routerWarning":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/routerWarning.js","_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js","invariant":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/invariant/browser.js","react":"react"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/Link.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _React$PropTypes = _react2['default'].PropTypes;
var bool = _React$PropTypes.bool;
var object = _React$PropTypes.object;
var string = _React$PropTypes.string;
var func = _React$PropTypes.func;
var oneOfType = _React$PropTypes.oneOfType;

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

function isEmptyObject(object) {
  for (var p in object) {
    if (object.hasOwnProperty(p)) return false;
  }return true;
}

function createLocationDescriptor(to, _ref) {
  var query = _ref.query;
  var hash = _ref.hash;
  var state = _ref.state;

  if (query || hash || state) {
    return { pathname: to, query: query, hash: hash, state: state };
  }

  return to;
}

/**
 * A <Link> is used to create an <a> element that links to a route.
 * When that route is active, the link gets the value of its
 * activeClassName prop.
 *
 * For example, assuming you have the following route:
 *
 *   <Route path="/posts/:postID" component={Post} />
 *
 * You could use the following component to link to that route:
 *
 *   <Link to={`/posts/${post.id}`} />
 *
 * Links may pass along location state and/or query string parameters
 * in the state/query props, respectively.
 *
 *   <Link ... query={{ show: true }} state={{ the: 'state' }} />
 */
var Link = _react2['default'].createClass({
  displayName: 'Link',

  contextTypes: {
    router: object
  },

  propTypes: {
    to: oneOfType([string, object]).isRequired,
    query: object,
    hash: string,
    state: object,
    activeStyle: object,
    activeClassName: string,
    onlyActiveOnIndex: bool.isRequired,
    onClick: func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      onlyActiveOnIndex: false,
      className: '',
      style: {}
    };
  },

  handleClick: function handleClick(event) {
    var allowTransition = true;

    if (this.props.onClick) this.props.onClick(event);

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

    if (event.defaultPrevented === true) allowTransition = false;

    // If target prop is set (e.g. to "_blank") let browser handle link.
    /* istanbul ignore if: untestable with Karma */
    if (this.props.target) {
      if (!allowTransition) event.preventDefault();

      return;
    }

    event.preventDefault();

    if (allowTransition) {
      var _props = this.props;
      var to = _props.to;
      var query = _props.query;
      var hash = _props.hash;
      var state = _props.state;

      var _location = createLocationDescriptor(to, { query: query, hash: hash, state: state });

      this.context.router.push(_location);
    }
  },

  render: function render() {
    var _props2 = this.props;
    var to = _props2.to;
    var query = _props2.query;
    var hash = _props2.hash;
    var state = _props2.state;
    var activeClassName = _props2.activeClassName;
    var activeStyle = _props2.activeStyle;
    var onlyActiveOnIndex = _props2.onlyActiveOnIndex;

    var props = _objectWithoutProperties(_props2, ['to', 'query', 'hash', 'state', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);

    process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](!(query || hash || state), 'the `query`, `hash`, and `state` props on `<Link>` are deprecated, use `<Link to={{ pathname, query, hash, state }}/>. http://tiny.cc/router-isActivedeprecated') : undefined;

    // Ignore if rendered outside the context of router, simplifies unit testing.
    var router = this.context.router;

    if (router) {
      var _location2 = createLocationDescriptor(to, { query: query, hash: hash, state: state });
      props.href = router.createHref(_location2);

      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
        if (router.isActive(_location2, onlyActiveOnIndex)) {
          if (activeClassName) props.className += props.className === '' ? activeClassName : ' ' + activeClassName;

          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
        }
      }
    }

    return _react2['default'].createElement('a', _extends({}, props, { onClick: this.handleClick }));
  }

});

exports['default'] = Link;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./routerWarning":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/routerWarning.js","_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js","react":"react"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/PatternUtils.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;
exports.compilePattern = compilePattern;
exports.matchPattern = matchPattern;
exports.getParamNames = getParamNames;
exports.getParams = getParams;
exports.formatPattern = formatPattern;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function escapeSource(string) {
  return escapeRegExp(string).replace(/\/+/g, '/+');
}

function _compilePattern(pattern) {
  var regexpSource = '';
  var paramNames = [];
  var tokens = [];

  var match = undefined,
      lastIndex = 0,
      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g;
  while (match = matcher.exec(pattern)) {
    if (match.index !== lastIndex) {
      tokens.push(pattern.slice(lastIndex, match.index));
      regexpSource += escapeSource(pattern.slice(lastIndex, match.index));
    }

    if (match[1]) {
      regexpSource += '([^/?#]+)';
      paramNames.push(match[1]);
    } else if (match[0] === '**') {
      regexpSource += '([\\s\\S]*)';
      paramNames.push('splat');
    } else if (match[0] === '*') {
      regexpSource += '([\\s\\S]*?)';
      paramNames.push('splat');
    } else if (match[0] === '(') {
      regexpSource += '(?:';
    } else if (match[0] === ')') {
      regexpSource += ')?';
    }

    tokens.push(match[0]);

    lastIndex = matcher.lastIndex;
  }

  if (lastIndex !== pattern.length) {
    tokens.push(pattern.slice(lastIndex, pattern.length));
    regexpSource += escapeSource(pattern.slice(lastIndex, pattern.length));
  }

  return {
    pattern: pattern,
    regexpSource: regexpSource,
    paramNames: paramNames,
    tokens: tokens
  };
}

var CompiledPatternsCache = {};

function compilePattern(pattern) {
  if (!(pattern in CompiledPatternsCache)) CompiledPatternsCache[pattern] = _compilePattern(pattern);

  return CompiledPatternsCache[pattern];
}

/**
 * Attempts to match a pattern on the given pathname. Patterns may use
 * the following special characters:
 *
 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
 *                  captured string is considered a "param"
 * - ()             Wraps a segment of the URL that is optional
 * - *              Consumes (non-greedy) all characters up to the next
 *                  character in the pattern, or to the end of the URL if
 *                  there is none
 * - **             Consumes (greedy) all characters up to the next character
 *                  in the pattern, or to the end of the URL if there is none
 *
 * The return value is an object with the following properties:
 *
 * - remainingPathname
 * - paramNames
 * - paramValues
 */

function matchPattern(pattern, pathname) {
  // Make leading slashes consistent between pattern and pathname.
  if (pattern.charAt(0) !== '/') {
    pattern = '/' + pattern;
  }
  if (pathname.charAt(0) !== '/') {
    pathname = '/' + pathname;
  }

  var _compilePattern2 = compilePattern(pattern);

  var regexpSource = _compilePattern2.regexpSource;
  var paramNames = _compilePattern2.paramNames;
  var tokens = _compilePattern2.tokens;

  regexpSource += '/*'; // Capture path separators

  // Special-case patterns like '*' for catch-all routes.
  var captureRemaining = tokens[tokens.length - 1] !== '*';

  if (captureRemaining) {
    // This will match newlines in the remaining path.
    regexpSource += '([\\s\\S]*?)';
  }

  var match = pathname.match(new RegExp('^' + regexpSource + '$', 'i'));

  var remainingPathname = undefined,
      paramValues = undefined;
  if (match != null) {
    if (captureRemaining) {
      remainingPathname = match.pop();
      var matchedPath = match[0].substr(0, match[0].length - remainingPathname.length);

      // If we didn't match the entire pathname, then make sure that the match
      // we did get ends at a path separator (potentially the one we added
      // above at the beginning of the path, if the actual match was empty).
      if (remainingPathname && matchedPath.charAt(matchedPath.length - 1) !== '/') {
        return {
          remainingPathname: null,
          paramNames: paramNames,
          paramValues: null
        };
      }
    } else {
      // If this matched at all, then the match was the entire pathname.
      remainingPathname = '';
    }

    paramValues = match.slice(1).map(function (v) {
      return v != null ? decodeURIComponent(v) : v;
    });
  } else {
    remainingPathname = paramValues = null;
  }

  return {
    remainingPathname: remainingPathname,
    paramNames: paramNames,
    paramValues: paramValues
  };
}

function getParamNames(pattern) {
  return compilePattern(pattern).paramNames;
}

function getParams(pattern, pathname) {
  var _matchPattern = matchPattern(pattern, pathname);

  var paramNames = _matchPattern.paramNames;
  var paramValues = _matchPattern.paramValues;

  if (paramValues != null) {
    return paramNames.reduce(function (memo, paramName, index) {
      memo[paramName] = paramValues[index];
      return memo;
    }, {});
  }

  return null;
}

/**
 * Returns a version of the given pattern with params interpolated. Throws
 * if there is a dynamic segment of the pattern for which there is no param.
 */

function formatPattern(pattern, params) {
  params = params || {};

  var _compilePattern3 = compilePattern(pattern);

  var tokens = _compilePattern3.tokens;

  var parenCount = 0,
      pathname = '',
      splatIndex = 0;

  var token = undefined,
      paramName = undefined,
      paramValue = undefined;
  for (var i = 0, len = tokens.length; i < len; ++i) {
    token = tokens[i];

    if (token === '*' || token === '**') {
      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;

      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : _invariant2['default'](false) : undefined;

      if (paramValue != null) pathname += encodeURI(paramValue);
    } else if (token === '(') {
      parenCount += 1;
    } else if (token === ')') {
      parenCount -= 1;
    } else if (token.charAt(0) === ':') {
      paramName = token.substring(1);
      paramValue = params[paramName];

      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : _invariant2['default'](false) : undefined;

      if (paramValue != null) pathname += encodeURIComponent(paramValue);
    } else {
      pathname += token;
    }
  }

  return pathname.replace(/\/+/g, '/');
}
}).call(this,require('_process'))

},{"_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js","invariant":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/invariant/browser.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/PropTypes.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.falsy = falsy;

var _react = require('react');

var func = _react.PropTypes.func;
var object = _react.PropTypes.object;
var arrayOf = _react.PropTypes.arrayOf;
var oneOfType = _react.PropTypes.oneOfType;
var element = _react.PropTypes.element;
var shape = _react.PropTypes.shape;
var string = _react.PropTypes.string;

function falsy(props, propName, componentName) {
  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
}

var history = shape({
  listen: func.isRequired,
  pushState: func.isRequired,
  replaceState: func.isRequired,
  go: func.isRequired
});

exports.history = history;
var location = shape({
  pathname: string.isRequired,
  search: string.isRequired,
  state: object,
  action: string.isRequired,
  key: string
});

exports.location = location;
var component = oneOfType([func, string]);
exports.component = component;
var components = oneOfType([component, object]);
exports.components = components;
var route = oneOfType([object, element]);
exports.route = route;
var routes = oneOfType([route, arrayOf(route)]);

exports.routes = routes;
exports['default'] = {
  falsy: falsy,
  history: history,
  location: location,
  component: component,
  components: components,
  route: route
};
},{"react":"react"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/Redirect.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _RouteUtils = require('./RouteUtils');

var _PatternUtils = require('./PatternUtils');

var _PropTypes = require('./PropTypes');

var _React$PropTypes = _react2['default'].PropTypes;
var string = _React$PropTypes.string;
var object = _React$PropTypes.object;

/**
 * A <Redirect> is used to declare another URL path a client should
 * be sent to when they request a given URL.
 *
 * Redirects are placed alongside routes in the route configuration
 * and are traversed in the same manner.
 */
var Redirect = _react2['default'].createClass({
  displayName: 'Redirect',

  statics: {

    createRouteFromReactElement: function createRouteFromReactElement(element) {
      var route = _RouteUtils.createRouteFromReactElement(element);

      if (route.from) route.path = route.from;

      route.onEnter = function (nextState, replace) {
        var location = nextState.location;
        var params = nextState.params;

        var pathname = undefined;
        if (route.to.charAt(0) === '/') {
          pathname = _PatternUtils.formatPattern(route.to, params);
        } else if (!route.to) {
          pathname = location.pathname;
        } else {
          var routeIndex = nextState.routes.indexOf(route);
          var parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
          var pattern = parentPattern.replace(/\/*$/, '/') + route.to;
          pathname = _PatternUtils.formatPattern(pattern, params);
        }

        replace({
          pathname: pathname,
          query: route.query || location.query,
          state: route.state || location.state
        });
      };

      return route;
    },

    getRoutePattern: function getRoutePattern(routes, routeIndex) {
      var parentPattern = '';

      for (var i = routeIndex; i >= 0; i--) {
        var route = routes[i];
        var pattern = route.path || '';

        parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;

        if (pattern.indexOf('/') === 0) break;
      }

      return '/' + parentPattern;
    }

  },

  propTypes: {
    path: string,
    from: string, // Alias for path
    to: string.isRequired,
    query: object,
    state: object,
    onEnter: _PropTypes.falsy,
    children: _PropTypes.falsy
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
    !false ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, '<Redirect> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
  }

});

exports['default'] = Redirect;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./PatternUtils":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/PatternUtils.js","./PropTypes":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/PropTypes.js","./RouteUtils":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/RouteUtils.js","_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js","invariant":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/invariant/browser.js","react":"react"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/Route.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _RouteUtils = require('./RouteUtils');

var _PropTypes = require('./PropTypes');

var _React$PropTypes = _react2['default'].PropTypes;
var string = _React$PropTypes.string;
var func = _React$PropTypes.func;

/**
 * A <Route> is used to declare which components are rendered to the
 * page when the URL matches a given pattern.
 *
 * Routes are arranged in a nested tree structure. When a new URL is
 * requested, the tree is searched depth-first to find a route whose
 * path matches the URL.  When one is found, all routes in the tree
 * that lead to it are considered "active" and their components are
 * rendered into the DOM, nested in the same order as in the tree.
 */
var Route = _react2['default'].createClass({
  displayName: 'Route',

  statics: {
    createRouteFromReactElement: _RouteUtils.createRouteFromReactElement
  },

  propTypes: {
    path: string,
    component: _PropTypes.component,
    components: _PropTypes.components,
    getComponent: func,
    getComponents: func
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
    !false ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, '<Route> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
  }

});

exports['default'] = Route;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./PropTypes":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/PropTypes.js","./RouteUtils":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/RouteUtils.js","_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js","invariant":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/invariant/browser.js","react":"react"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/RouteContext.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var object = _react2['default'].PropTypes.object;

/**
 * The RouteContext mixin provides a convenient way for route
 * components to set the route in context. This is needed for
 * routes that render elements that want to use the Lifecycle
 * mixin to prevent transitions.
 */
var RouteContext = {

  propTypes: {
    route: object.isRequired
  },

  childContextTypes: {
    route: object.isRequired
  },

  getChildContext: function getChildContext() {
    return {
      route: this.props.route
    };
  },

  componentWillMount: function componentWillMount() {
    process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, 'The `RouteContext` mixin is deprecated. You can provide `this.props.route` on context with your own `contextTypes`. http://tiny.cc/router-routecontextmixin') : undefined;
  }

};

exports['default'] = RouteContext;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./routerWarning":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/routerWarning.js","_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js","react":"react"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/RouteUtils.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.isReactChildren = isReactChildren;
exports.createRouteFromReactElement = createRouteFromReactElement;
exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
exports.createRoutes = createRoutes;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function isValidChild(object) {
  return object == null || _react2['default'].isValidElement(object);
}

function isReactChildren(object) {
  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
}

function checkPropTypes(componentName, propTypes, props) {
  componentName = componentName || 'UnknownComponent';

  for (var propName in propTypes) {
    if (propTypes.hasOwnProperty(propName)) {
      var error = propTypes[propName](props, propName, componentName);

      /* istanbul ignore if: error logging */
      if (error instanceof Error) process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, error.message) : undefined;
    }
  }
}

function createRoute(defaultProps, props) {
  return _extends({}, defaultProps, props);
}

function createRouteFromReactElement(element) {
  var type = element.type;
  var route = createRoute(type.defaultProps, element.props);

  if (type.propTypes) checkPropTypes(type.displayName || type.name, type.propTypes, route);

  if (route.children) {
    var childRoutes = createRoutesFromReactChildren(route.children, route);

    if (childRoutes.length) route.childRoutes = childRoutes;

    delete route.children;
  }

  return route;
}

/**
 * Creates and returns a routes object from the given ReactChildren. JSX
 * provides a convenient way to visualize how routes in the hierarchy are
 * nested.
 *
 *   import { Route, createRoutesFromReactChildren } from 'react-router'
 *   
 *   const routes = createRoutesFromReactChildren(
 *     <Route component={App}>
 *       <Route path="home" component={Dashboard}/>
 *       <Route path="news" component={NewsFeed}/>
 *     </Route>
 *   )
 *
 * Note: This method is automatically used when you provide <Route> children
 * to a <Router> component.
 */

function createRoutesFromReactChildren(children, parentRoute) {
  var routes = [];

  _react2['default'].Children.forEach(children, function (element) {
    if (_react2['default'].isValidElement(element)) {
      // Component classes may have a static create* method.
      if (element.type.createRouteFromReactElement) {
        var route = element.type.createRouteFromReactElement(element, parentRoute);

        if (route) routes.push(route);
      } else {
        routes.push(createRouteFromReactElement(element));
      }
    }
  });

  return routes;
}

/**
 * Creates and returns an array of routes from the given object which
 * may be a JSX route, a plain object route, or an array of either.
 */

function createRoutes(routes) {
  if (isReactChildren(routes)) {
    routes = createRoutesFromReactChildren(routes);
  } else if (routes && !Array.isArray(routes)) {
    routes = [routes];
  }

  return routes;
}
}).call(this,require('_process'))

},{"./routerWarning":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/routerWarning.js","_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js","react":"react"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/Router.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _historyLibCreateHashHistory = require('history/lib/createHashHistory');

var _historyLibCreateHashHistory2 = _interopRequireDefault(_historyLibCreateHashHistory);

var _historyLibUseQueries = require('history/lib/useQueries');

var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createTransitionManager = require('./createTransitionManager');

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _PropTypes = require('./PropTypes');

var _RouterContext = require('./RouterContext');

var _RouterContext2 = _interopRequireDefault(_RouterContext);

var _RouteUtils = require('./RouteUtils');

var _RouterUtils = require('./RouterUtils');

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function isDeprecatedHistory(history) {
  return !history || !history.__v2_compatible__;
}

var _React$PropTypes = _react2['default'].PropTypes;
var func = _React$PropTypes.func;
var object = _React$PropTypes.object;

/**
 * A <Router> is a high-level API for automatically setting up
 * a router that renders a <RouterContext> with all the props
 * it needs each time the URL changes.
 */
var Router = _react2['default'].createClass({
  displayName: 'Router',

  propTypes: {
    history: object,
    children: _PropTypes.routes,
    routes: _PropTypes.routes, // alias for children
    render: func,
    createElement: func,
    onError: func,
    onUpdate: func,

    // PRIVATE: For client-side rehydration of server match.
    matchContext: object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      render: function render(props) {
        return _react2['default'].createElement(_RouterContext2['default'], props);
      }
    };
  },

  getInitialState: function getInitialState() {
    return {
      location: null,
      routes: null,
      params: null,
      components: null
    };
  },

  handleError: function handleError(error) {
    if (this.props.onError) {
      this.props.onError.call(this, error);
    } else {
      // Throw errors by default so we don't silently swallow them!
      throw error; // This error probably occurred in getChildRoutes or getComponents.
    }
  },

  componentWillMount: function componentWillMount() {
    var _this = this;

    var _props = this.props;
    var parseQueryString = _props.parseQueryString;
    var stringifyQuery = _props.stringifyQuery;

    process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](!(parseQueryString || stringifyQuery), '`parseQueryString` and `stringifyQuery` are deprecated. Please create a custom history. http://tiny.cc/router-customquerystring') : undefined;

    var _createRouterObjects = this.createRouterObjects();

    var history = _createRouterObjects.history;
    var transitionManager = _createRouterObjects.transitionManager;
    var router = _createRouterObjects.router;

    this._unlisten = transitionManager.listen(function (error, state) {
      if (error) {
        _this.handleError(error);
      } else {
        _this.setState(state, _this.props.onUpdate);
      }
    });

    this.history = history;
    this.router = router;
  },

  createRouterObjects: function createRouterObjects() {
    var matchContext = this.props.matchContext;

    if (matchContext) {
      return matchContext;
    }

    var history = this.props.history;
    var _props2 = this.props;
    var routes = _props2.routes;
    var children = _props2.children;

    if (isDeprecatedHistory(history)) {
      history = this.wrapDeprecatedHistory(history);
    }

    var transitionManager = _createTransitionManager2['default'](history, _RouteUtils.createRoutes(routes || children));
    var router = _RouterUtils.createRouterObject(history, transitionManager);
    var routingHistory = _RouterUtils.createRoutingHistory(history, transitionManager);

    return { history: routingHistory, transitionManager: transitionManager, router: router };
  },

  wrapDeprecatedHistory: function wrapDeprecatedHistory(history) {
    var _props3 = this.props;
    var parseQueryString = _props3.parseQueryString;
    var stringifyQuery = _props3.stringifyQuery;

    var createHistory = undefined;
    if (history) {
      process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, 'It appears you have provided a deprecated history object to `<Router/>`, please use a history provided by ' + 'React Router with `import { browserHistory } from \'react-router\'` or `import { hashHistory } from \'react-router\'`. ' + 'If you are using a custom history please create it with `useRouterHistory`, see http://tiny.cc/router-usinghistory for details.') : undefined;
      createHistory = function () {
        return history;
      };
    } else {
      process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, '`Router` no longer defaults the history prop to hash history. Please use the `hashHistory` singleton instead. http://tiny.cc/router-defaulthistory') : undefined;
      createHistory = _historyLibCreateHashHistory2['default'];
    }

    return _historyLibUseQueries2['default'](createHistory)({ parseQueryString: parseQueryString, stringifyQuery: stringifyQuery });
  },

  /* istanbul ignore next: sanity check */
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](nextProps.history === this.props.history, 'You cannot change <Router history>; it will be ignored') : undefined;

    process.env.NODE_ENV !== 'production' ? _routerWarning2['default']((nextProps.routes || nextProps.children) === (this.props.routes || this.props.children), 'You cannot change <Router routes>; it will be ignored') : undefined;
  },

  componentWillUnmount: function componentWillUnmount() {
    if (this._unlisten) this._unlisten();
  },

  render: function render() {
    var _state = this.state;
    var location = _state.location;
    var routes = _state.routes;
    var params = _state.params;
    var components = _state.components;
    var _props4 = this.props;
    var createElement = _props4.createElement;
    var render = _props4.render;

    var props = _objectWithoutProperties(_props4, ['createElement', 'render']);

    if (location == null) return null; // Async match

    // Only forward non-Router-specific props to routing context, as those are
    // the only ones that might be custom routing context props.
    Object.keys(Router.propTypes).forEach(function (propType) {
      return delete props[propType];
    });

    return render(_extends({}, props, {
      history: this.history,
      router: this.router,
      location: location,
      routes: routes,
      params: params,
      components: components,
      createElement: createElement
    }));
  }

});

exports['default'] = Router;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./PropTypes":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/PropTypes.js","./RouteUtils":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/RouteUtils.js","./RouterContext":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/RouterContext.js","./RouterUtils":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/RouterUtils.js","./createTransitionManager":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/createTransitionManager.js","./routerWarning":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/routerWarning.js","_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js","history/lib/createHashHistory":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/createHashHistory.js","history/lib/useQueries":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/useQueries.js","react":"react"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/RouterContext.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _deprecateObjectProperties = require('./deprecateObjectProperties');

var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

var _getRouteParams = require('./getRouteParams');

var _getRouteParams2 = _interopRequireDefault(_getRouteParams);

var _RouteUtils = require('./RouteUtils');

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _React$PropTypes = _react2['default'].PropTypes;
var array = _React$PropTypes.array;
var func = _React$PropTypes.func;
var object = _React$PropTypes.object;

/**
 * A <RouterContext> renders the component tree for a given router state
 * and sets the history object and the current location in context.
 */
var RouterContext = _react2['default'].createClass({
  displayName: 'RouterContext',

  propTypes: {
    history: object,
    router: object.isRequired,
    location: object.isRequired,
    routes: array.isRequired,
    params: object.isRequired,
    components: array.isRequired,
    createElement: func.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      createElement: _react2['default'].createElement
    };
  },

  childContextTypes: {
    history: object,
    location: object.isRequired,
    router: object.isRequired
  },

  getChildContext: function getChildContext() {
    var _props = this.props;
    var router = _props.router;
    var history = _props.history;
    var location = _props.location;

    if (!router) {
      process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, '`<RouterContext>` expects a `router` rather than a `history`') : undefined;

      router = _extends({}, history, {
        setRouteLeaveHook: history.listenBeforeLeavingRoute
      });
      delete router.listenBeforeLeavingRoute;
    }

    if (process.env.NODE_ENV !== 'production') {
      location = _deprecateObjectProperties2['default'](location, '`context.location` is deprecated, please use a route component\'s `props.location` instead. http://tiny.cc/router-accessinglocation');
    }

    return { history: history, location: location, router: router };
  },

  createElement: function createElement(component, props) {
    return component == null ? null : this.props.createElement(component, props);
  },

  render: function render() {
    var _this = this;

    var _props2 = this.props;
    var history = _props2.history;
    var location = _props2.location;
    var routes = _props2.routes;
    var params = _props2.params;
    var components = _props2.components;

    var element = null;

    if (components) {
      element = components.reduceRight(function (element, components, index) {
        if (components == null) return element; // Don't create new children; use the grandchildren.

        var route = routes[index];
        var routeParams = _getRouteParams2['default'](route, params);
        var props = {
          history: history,
          location: location,
          params: params,
          route: route,
          routeParams: routeParams,
          routes: routes
        };

        if (_RouteUtils.isReactChildren(element)) {
          props.children = element;
        } else if (element) {
          for (var prop in element) {
            if (element.hasOwnProperty(prop)) props[prop] = element[prop];
          }
        }

        if (typeof components === 'object') {
          var elements = {};

          for (var key in components) {
            if (components.hasOwnProperty(key)) {
              // Pass through the key as a prop to createElement to allow
              // custom createElement functions to know which named component
              // they're rendering, for e.g. matching up to fetched data.
              elements[key] = _this.createElement(components[key], _extends({
                key: key }, props));
            }
          }

          return elements;
        }

        return _this.createElement(components, props);
      }, element);
    }

    !(element === null || element === false || _react2['default'].isValidElement(element)) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'The root route must render a single element') : _invariant2['default'](false) : undefined;

    return element;
  }

});

exports['default'] = RouterContext;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./RouteUtils":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/RouteUtils.js","./deprecateObjectProperties":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/deprecateObjectProperties.js","./getRouteParams":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/getRouteParams.js","./routerWarning":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/routerWarning.js","_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js","invariant":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/invariant/browser.js","react":"react"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/RouterUtils.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.createRouterObject = createRouterObject;
exports.createRoutingHistory = createRoutingHistory;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _deprecateObjectProperties = require('./deprecateObjectProperties');

var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

function createRouterObject(history, transitionManager) {
  return _extends({}, history, {
    setRouteLeaveHook: transitionManager.listenBeforeLeavingRoute,
    isActive: transitionManager.isActive
  });
}

// deprecated

function createRoutingHistory(history, transitionManager) {
  history = _extends({}, history, transitionManager);

  if (process.env.NODE_ENV !== 'production') {
    history = _deprecateObjectProperties2['default'](history, '`props.history` and `context.history` are deprecated. Please use `context.router`. http://tiny.cc/router-contextchanges');
  }

  return history;
}
}).call(this,require('_process'))

},{"./deprecateObjectProperties":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/deprecateObjectProperties.js","_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/RoutingContext.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RouterContext = require('./RouterContext');

var _RouterContext2 = _interopRequireDefault(_RouterContext);

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var RoutingContext = _react2['default'].createClass({
  displayName: 'RoutingContext',

  componentWillMount: function componentWillMount() {
    process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, '`RoutingContext` has been renamed to `RouterContext`. Please use `import { RouterContext } from \'react-router\'`. http://tiny.cc/router-routercontext') : undefined;
  },

  render: function render() {
    return _react2['default'].createElement(_RouterContext2['default'], this.props);
  }
});

exports['default'] = RoutingContext;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./RouterContext":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/RouterContext.js","./routerWarning":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/routerWarning.js","_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js","react":"react"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/TransitionUtils.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;
exports.runEnterHooks = runEnterHooks;
exports.runLeaveHooks = runLeaveHooks;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _AsyncUtils = require('./AsyncUtils');

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

function createEnterHook(hook, route) {
  return function (a, b, callback) {
    hook.apply(route, arguments);

    if (hook.length < 3) {
      // Assume hook executes synchronously and
      // automatically call the callback.
      callback();
    }
  };
}

function getEnterHooks(routes) {
  return routes.reduce(function (hooks, route) {
    if (route.onEnter) hooks.push(createEnterHook(route.onEnter, route));

    return hooks;
  }, []);
}

/**
 * Runs all onEnter hooks in the given array of routes in order
 * with onEnter(nextState, replace, callback) and calls
 * callback(error, redirectInfo) when finished. The first hook
 * to use replace short-circuits the loop.
 *
 * If a hook needs to run asynchronously, it may use the callback
 * function. However, doing so will cause the transition to pause,
 * which could lead to a non-responsive UI if the hook is slow.
 */

function runEnterHooks(routes, nextState, callback) {
  var hooks = getEnterHooks(routes);

  if (!hooks.length) {
    callback();
    return;
  }

  var redirectInfo = undefined;
  function replace(location, deprecatedPathname, deprecatedQuery) {
    if (deprecatedPathname) {
      process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, '`replaceState(state, pathname, query) is deprecated; use `replace(location)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : undefined;
      redirectInfo = {
        pathname: deprecatedPathname,
        query: deprecatedQuery,
        state: location
      };

      return;
    }

    redirectInfo = location;
  }

  _AsyncUtils.loopAsync(hooks.length, function (index, next, done) {
    hooks[index](nextState, replace, function (error) {
      if (error || redirectInfo) {
        done(error, redirectInfo); // No need to continue.
      } else {
          next();
        }
    });
  }, callback);
}

/**
 * Runs all onLeave hooks in the given array of routes in order.
 */

function runLeaveHooks(routes) {
  for (var i = 0, len = routes.length; i < len; ++i) {
    if (routes[i].onLeave) routes[i].onLeave.call(routes[i]);
  }
}
}).call(this,require('_process'))

},{"./AsyncUtils":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/AsyncUtils.js","./routerWarning":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/routerWarning.js","_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/browserHistory.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _historyLibCreateBrowserHistory = require('history/lib/createBrowserHistory');

var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

var _createRouterHistory = require('./createRouterHistory');

var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

exports['default'] = _createRouterHistory2['default'](_historyLibCreateBrowserHistory2['default']);
module.exports = exports['default'];
},{"./createRouterHistory":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/createRouterHistory.js","history/lib/createBrowserHistory":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/createBrowserHistory.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/computeChangedRoutes.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _PatternUtils = require('./PatternUtils');

function routeParamsChanged(route, prevState, nextState) {
  if (!route.path) return false;

  var paramNames = _PatternUtils.getParamNames(route.path);

  return paramNames.some(function (paramName) {
    return prevState.params[paramName] !== nextState.params[paramName];
  });
}

/**
 * Returns an object of { leaveRoutes, enterRoutes } determined by
 * the change from prevState to nextState. We leave routes if either
 * 1) they are not in the next state or 2) they are in the next state
 * but their params have changed (i.e. /users/123 => /users/456).
 *
 * leaveRoutes are ordered starting at the leaf route of the tree
 * we're leaving up to the common parent route. enterRoutes are ordered
 * from the top of the tree we're entering down to the leaf route.
 */
function computeChangedRoutes(prevState, nextState) {
  var prevRoutes = prevState && prevState.routes;
  var nextRoutes = nextState.routes;

  var leaveRoutes = undefined,
      enterRoutes = undefined;
  if (prevRoutes) {
    leaveRoutes = prevRoutes.filter(function (route) {
      return nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
    });

    // onLeave hooks start at the leaf route.
    leaveRoutes.reverse();

    enterRoutes = nextRoutes.filter(function (route) {
      return prevRoutes.indexOf(route) === -1 || leaveRoutes.indexOf(route) !== -1;
    });
  } else {
    leaveRoutes = [];
    enterRoutes = nextRoutes;
  }

  return {
    leaveRoutes: leaveRoutes,
    enterRoutes: enterRoutes
  };
}

exports['default'] = computeChangedRoutes;
module.exports = exports['default'];
},{"./PatternUtils":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/PatternUtils.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/createMemoryHistory.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports['default'] = createMemoryHistory;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _historyLibUseQueries = require('history/lib/useQueries');

var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

var _historyLibUseBasename = require('history/lib/useBasename');

var _historyLibUseBasename2 = _interopRequireDefault(_historyLibUseBasename);

var _historyLibCreateMemoryHistory = require('history/lib/createMemoryHistory');

var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);

function createMemoryHistory(options) {
  // signatures and type checking differ between `useRoutes` and
  // `createMemoryHistory`, have to create `memoryHistory` first because
  // `useQueries` doesn't understand the signature
  var memoryHistory = _historyLibCreateMemoryHistory2['default'](options);
  var createHistory = function createHistory() {
    return memoryHistory;
  };
  var history = _historyLibUseQueries2['default'](_historyLibUseBasename2['default'](createHistory))(options);
  history.__v2_compatible__ = true;
  return history;
}

module.exports = exports['default'];
},{"history/lib/createMemoryHistory":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/createMemoryHistory.js","history/lib/useBasename":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/useBasename.js","history/lib/useQueries":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/useQueries.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/createRouterHistory.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _useRouterHistory = require('./useRouterHistory');

var _useRouterHistory2 = _interopRequireDefault(_useRouterHistory);

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

exports['default'] = function (createHistory) {
  var history = undefined;
  if (canUseDOM) history = _useRouterHistory2['default'](createHistory)();
  return history;
};

module.exports = exports['default'];
},{"./useRouterHistory":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/useRouterHistory.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/createTransitionManager.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = createTransitionManager;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _historyLibActions = require('history/lib/Actions');

var _computeChangedRoutes2 = require('./computeChangedRoutes');

var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);

var _TransitionUtils = require('./TransitionUtils');

var _isActive2 = require('./isActive');

var _isActive3 = _interopRequireDefault(_isActive2);

var _getComponents = require('./getComponents');

var _getComponents2 = _interopRequireDefault(_getComponents);

var _matchRoutes = require('./matchRoutes');

var _matchRoutes2 = _interopRequireDefault(_matchRoutes);

function hasAnyProperties(object) {
  for (var p in object) {
    if (object.hasOwnProperty(p)) return true;
  }return false;
}

function createTransitionManager(history, routes) {
  var state = {};

  // Signature should be (location, indexOnly), but needs to support (path,
  // query, indexOnly)
  function isActive(location) {
    var indexOnlyOrDeprecatedQuery = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
    var deprecatedIndexOnly = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

    var indexOnly = undefined;
    if (indexOnlyOrDeprecatedQuery && indexOnlyOrDeprecatedQuery !== true || deprecatedIndexOnly !== null) {
      process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, '`isActive(pathname, query, indexOnly) is deprecated; use `isActive(location, indexOnly)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : undefined;
      location = { pathname: location, query: indexOnlyOrDeprecatedQuery };
      indexOnly = deprecatedIndexOnly || false;
    } else {
      location = history.createLocation(location);
      indexOnly = indexOnlyOrDeprecatedQuery;
    }

    return _isActive3['default'](location, indexOnly, state.location, state.routes, state.params);
  }

  function createLocationFromRedirectInfo(location) {
    return history.createLocation(location, _historyLibActions.REPLACE);
  }

  var partialNextState = undefined;

  function match(location, callback) {
    if (partialNextState && partialNextState.location === location) {
      // Continue from where we left off.
      finishMatch(partialNextState, callback);
    } else {
      _matchRoutes2['default'](routes, location, function (error, nextState) {
        if (error) {
          callback(error);
        } else if (nextState) {
          finishMatch(_extends({}, nextState, { location: location }), callback);
        } else {
          callback();
        }
      });
    }
  }

  function finishMatch(nextState, callback) {
    var _computeChangedRoutes = _computeChangedRoutes3['default'](state, nextState);

    var leaveRoutes = _computeChangedRoutes.leaveRoutes;
    var enterRoutes = _computeChangedRoutes.enterRoutes;

    _TransitionUtils.runLeaveHooks(leaveRoutes);

    // Tear down confirmation hooks for left routes
    leaveRoutes.forEach(removeListenBeforeHooksForRoute);

    _TransitionUtils.runEnterHooks(enterRoutes, nextState, function (error, redirectInfo) {
      if (error) {
        callback(error);
      } else if (redirectInfo) {
        callback(null, createLocationFromRedirectInfo(redirectInfo));
      } else {
        // TODO: Fetch components after state is updated.
        _getComponents2['default'](nextState, function (error, components) {
          if (error) {
            callback(error);
          } else {
            // TODO: Make match a pure function and have some other API
            // for "match and update state".
            callback(null, null, state = _extends({}, nextState, { components: components }));
          }
        });
      }
    });
  }

  var RouteGuid = 1;

  function getRouteID(route) {
    var create = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

    return route.__id__ || create && (route.__id__ = RouteGuid++);
  }

  var RouteHooks = {};

  function getRouteHooksForRoutes(routes) {
    return routes.reduce(function (hooks, route) {
      hooks.push.apply(hooks, RouteHooks[getRouteID(route)]);
      return hooks;
    }, []);
  }

  function transitionHook(location, callback) {
    _matchRoutes2['default'](routes, location, function (error, nextState) {
      if (nextState == null) {
        // TODO: We didn't actually match anything, but hang
        // onto error/nextState so we don't have to matchRoutes
        // again in the listen callback.
        callback();
        return;
      }

      // Cache some state here so we don't have to
      // matchRoutes() again in the listen callback.
      partialNextState = _extends({}, nextState, { location: location });

      var hooks = getRouteHooksForRoutes(_computeChangedRoutes3['default'](state, partialNextState).leaveRoutes);

      var result = undefined;
      for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
        // Passing the location arg here indicates to
        // the user that this is a transition hook.
        result = hooks[i](location);
      }

      callback(result);
    });
  }

  /* istanbul ignore next: untestable with Karma */
  function beforeUnloadHook() {
    // Synchronously check to see if any route hooks want
    // to prevent the current window/tab from closing.
    if (state.routes) {
      var hooks = getRouteHooksForRoutes(state.routes);

      var message = undefined;
      for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
        // Passing no args indicates to the user that this is a
        // beforeunload hook. We don't know the next location.
        message = hooks[i]();
      }

      return message;
    }
  }

  var unlistenBefore = undefined,
      unlistenBeforeUnload = undefined;

  function removeListenBeforeHooksForRoute(route) {
    var routeID = getRouteID(route, false);
    if (!routeID) {
      return;
    }

    delete RouteHooks[routeID];

    if (!hasAnyProperties(RouteHooks)) {
      // teardown transition & beforeunload hooks
      if (unlistenBefore) {
        unlistenBefore();
        unlistenBefore = null;
      }

      if (unlistenBeforeUnload) {
        unlistenBeforeUnload();
        unlistenBeforeUnload = null;
      }
    }
  }

  /**
   * Registers the given hook function to run before leaving the given route.
   *
   * During a normal transition, the hook function receives the next location
   * as its only argument and must return either a) a prompt message to show
   * the user, to make sure they want to leave the page or b) false, to prevent
   * the transition.
   *
   * During the beforeunload event (in browsers) the hook receives no arguments.
   * In this case it must return a prompt message to prevent the transition.
   *
   * Returns a function that may be used to unbind the listener.
   */
  function listenBeforeLeavingRoute(route, hook) {
    // TODO: Warn if they register for a route that isn't currently
    // active. They're probably doing something wrong, like re-creating
    // route objects on every location change.
    var routeID = getRouteID(route);
    var hooks = RouteHooks[routeID];

    if (!hooks) {
      var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);

      RouteHooks[routeID] = [hook];

      if (thereWereNoRouteHooks) {
        // setup transition & beforeunload hooks
        unlistenBefore = history.listenBefore(transitionHook);

        if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
      }
    } else {
      if (hooks.indexOf(hook) === -1) {
        process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, 'adding multiple leave hooks for the same route is deprecated; manage multiple confirmations in your own code instead') : undefined;

        hooks.push(hook);
      }
    }

    return function () {
      var hooks = RouteHooks[routeID];

      if (hooks) {
        var newHooks = hooks.filter(function (item) {
          return item !== hook;
        });

        if (newHooks.length === 0) {
          removeListenBeforeHooksForRoute(route);
        } else {
          RouteHooks[routeID] = newHooks;
        }
      }
    };
  }

  /**
   * This is the API for stateful environments. As the location
   * changes, we update state and call the listener. We can also
   * gracefully handle errors and redirects.
   */
  function listen(listener) {
    // TODO: Only use a single history listener. Otherwise we'll
    // end up with multiple concurrent calls to match.
    return history.listen(function (location) {
      if (state.location === location) {
        listener(null, state);
      } else {
        match(location, function (error, redirectLocation, nextState) {
          if (error) {
            listener(error);
          } else if (redirectLocation) {
            history.transitionTo(redirectLocation);
          } else if (nextState) {
            listener(null, nextState);
          } else {
            process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : undefined;
          }
        });
      }
    });
  }

  return {
    isActive: isActive,
    match: match,
    listenBeforeLeavingRoute: listenBeforeLeavingRoute,
    listen: listen
  };
}

//export default useRoutes
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./TransitionUtils":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/TransitionUtils.js","./computeChangedRoutes":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/computeChangedRoutes.js","./getComponents":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/getComponents.js","./isActive":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/isActive.js","./matchRoutes":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/matchRoutes.js","./routerWarning":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/routerWarning.js","_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js","history/lib/Actions":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/Actions.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/deprecateObjectProperties.js":[function(require,module,exports){
(function (process){
/*eslint no-empty: 0*/
'use strict';

exports.__esModule = true;
exports['default'] = deprecateObjectProperties;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var useMembrane = false;

if (process.env.NODE_ENV !== 'production') {
  try {
    if (Object.defineProperty({}, 'x', { get: function get() {
        return true;
      } }).x) {
      useMembrane = true;
    }
  } catch (e) {}
}

// wraps an object in a membrane to warn about deprecated property access

function deprecateObjectProperties(object, message) {
  if (!useMembrane) return object;

  var membrane = {};

  var _loop = function (prop) {
    if (typeof object[prop] === 'function') {
      membrane[prop] = function () {
        process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, message) : undefined;
        return object[prop].apply(object, arguments);
      };
    } else {
      Object.defineProperty(membrane, prop, {
        configurable: false,
        enumerable: false,
        get: function get() {
          process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, message) : undefined;
          return object[prop];
        }
      });
    }
  };

  for (var prop in object) {
    _loop(prop);
  }

  return membrane;
}

module.exports = exports['default'];
}).call(this,require('_process'))

},{"./routerWarning":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/routerWarning.js","_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/getComponents.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _AsyncUtils = require('./AsyncUtils');

function getComponentsForRoute(location, route, callback) {
  if (route.component || route.components) {
    callback(null, route.component || route.components);
  } else if (route.getComponent) {
    route.getComponent(location, callback);
  } else if (route.getComponents) {
    route.getComponents(location, callback);
  } else {
    callback();
  }
}

/**
 * Asynchronously fetches all components needed for the given router
 * state and calls callback(error, components) when finished.
 *
 * Note: This operation may finish synchronously if no routes have an
 * asynchronous getComponents method.
 */
function getComponents(nextState, callback) {
  _AsyncUtils.mapAsync(nextState.routes, function (route, index, callback) {
    getComponentsForRoute(nextState.location, route, callback);
  }, callback);
}

exports['default'] = getComponents;
module.exports = exports['default'];
},{"./AsyncUtils":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/AsyncUtils.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/getRouteParams.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _PatternUtils = require('./PatternUtils');

/**
 * Extracts an object of params the given route cares about from
 * the given params object.
 */
function getRouteParams(route, params) {
  var routeParams = {};

  if (!route.path) return routeParams;

  var paramNames = _PatternUtils.getParamNames(route.path);

  for (var p in params) {
    if (params.hasOwnProperty(p) && paramNames.indexOf(p) !== -1) routeParams[p] = params[p];
  }return routeParams;
}

exports['default'] = getRouteParams;
module.exports = exports['default'];
},{"./PatternUtils":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/PatternUtils.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/hashHistory.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _historyLibCreateHashHistory = require('history/lib/createHashHistory');

var _historyLibCreateHashHistory2 = _interopRequireDefault(_historyLibCreateHashHistory);

var _createRouterHistory = require('./createRouterHistory');

var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

exports['default'] = _createRouterHistory2['default'](_historyLibCreateHashHistory2['default']);
module.exports = exports['default'];
},{"./createRouterHistory":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/createRouterHistory.js","history/lib/createHashHistory":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/createHashHistory.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/index.js":[function(require,module,exports){
/* components */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Router2 = require('./Router');

var _Router3 = _interopRequireDefault(_Router2);

exports.Router = _Router3['default'];

var _Link2 = require('./Link');

var _Link3 = _interopRequireDefault(_Link2);

exports.Link = _Link3['default'];

var _IndexLink2 = require('./IndexLink');

var _IndexLink3 = _interopRequireDefault(_IndexLink2);

exports.IndexLink = _IndexLink3['default'];

/* components (configuration) */

var _IndexRedirect2 = require('./IndexRedirect');

var _IndexRedirect3 = _interopRequireDefault(_IndexRedirect2);

exports.IndexRedirect = _IndexRedirect3['default'];

var _IndexRoute2 = require('./IndexRoute');

var _IndexRoute3 = _interopRequireDefault(_IndexRoute2);

exports.IndexRoute = _IndexRoute3['default'];

var _Redirect2 = require('./Redirect');

var _Redirect3 = _interopRequireDefault(_Redirect2);

exports.Redirect = _Redirect3['default'];

var _Route2 = require('./Route');

var _Route3 = _interopRequireDefault(_Route2);

exports.Route = _Route3['default'];

/* mixins */

var _History2 = require('./History');

var _History3 = _interopRequireDefault(_History2);

exports.History = _History3['default'];

var _Lifecycle2 = require('./Lifecycle');

var _Lifecycle3 = _interopRequireDefault(_Lifecycle2);

exports.Lifecycle = _Lifecycle3['default'];

var _RouteContext2 = require('./RouteContext');

var _RouteContext3 = _interopRequireDefault(_RouteContext2);

exports.RouteContext = _RouteContext3['default'];

/* utils */

var _useRoutes2 = require('./useRoutes');

var _useRoutes3 = _interopRequireDefault(_useRoutes2);

exports.useRoutes = _useRoutes3['default'];

var _RouteUtils = require('./RouteUtils');

exports.createRoutes = _RouteUtils.createRoutes;

var _RouterContext2 = require('./RouterContext');

var _RouterContext3 = _interopRequireDefault(_RouterContext2);

exports.RouterContext = _RouterContext3['default'];

var _RoutingContext2 = require('./RoutingContext');

var _RoutingContext3 = _interopRequireDefault(_RoutingContext2);

exports.RoutingContext = _RoutingContext3['default'];

var _PropTypes2 = require('./PropTypes');

var _PropTypes3 = _interopRequireDefault(_PropTypes2);

exports.PropTypes = _PropTypes3['default'];

var _match2 = require('./match');

var _match3 = _interopRequireDefault(_match2);

exports.match = _match3['default'];

var _useRouterHistory2 = require('./useRouterHistory');

var _useRouterHistory3 = _interopRequireDefault(_useRouterHistory2);

exports.useRouterHistory = _useRouterHistory3['default'];

var _PatternUtils = require('./PatternUtils');

exports.formatPattern = _PatternUtils.formatPattern;

/* histories */

var _browserHistory2 = require('./browserHistory');

var _browserHistory3 = _interopRequireDefault(_browserHistory2);

exports.browserHistory = _browserHistory3['default'];

var _hashHistory2 = require('./hashHistory');

var _hashHistory3 = _interopRequireDefault(_hashHistory2);

exports.hashHistory = _hashHistory3['default'];

var _createMemoryHistory2 = require('./createMemoryHistory');

var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

exports.createMemoryHistory = _createMemoryHistory3['default'];
},{"./History":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/History.js","./IndexLink":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/IndexLink.js","./IndexRedirect":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/IndexRedirect.js","./IndexRoute":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/IndexRoute.js","./Lifecycle":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/Lifecycle.js","./Link":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/Link.js","./PatternUtils":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/PatternUtils.js","./PropTypes":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/PropTypes.js","./Redirect":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/Redirect.js","./Route":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/Route.js","./RouteContext":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/RouteContext.js","./RouteUtils":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/RouteUtils.js","./Router":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/Router.js","./RouterContext":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/RouterContext.js","./RoutingContext":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/RoutingContext.js","./browserHistory":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/browserHistory.js","./createMemoryHistory":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/createMemoryHistory.js","./hashHistory":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/hashHistory.js","./match":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/match.js","./useRouterHistory":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/useRouterHistory.js","./useRoutes":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/useRoutes.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/isActive.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports['default'] = isActive;

var _PatternUtils = require('./PatternUtils');

function deepEqual(a, b) {
  if (a == b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return deepEqual(item, b[index]);
    });
  }

  if (typeof a === 'object') {
    for (var p in a) {
      if (!a.hasOwnProperty(p)) {
        continue;
      }

      if (a[p] === undefined) {
        if (b[p] !== undefined) {
          return false;
        }
      } else if (!b.hasOwnProperty(p)) {
        return false;
      } else if (!deepEqual(a[p], b[p])) {
        return false;
      }
    }

    return true;
  }

  return String(a) === String(b);
}

function paramsAreActive(paramNames, paramValues, activeParams) {
  // FIXME: This doesn't work on repeated params in activeParams.
  return paramNames.every(function (paramName, index) {
    return String(paramValues[index]) === String(activeParams[paramName]);
  });
}

function getMatchingRouteIndex(pathname, activeRoutes, activeParams) {
  var remainingPathname = pathname,
      paramNames = [],
      paramValues = [];

  for (var i = 0, len = activeRoutes.length; i < len; ++i) {
    var route = activeRoutes[i];
    var pattern = route.path || '';

    if (pattern.charAt(0) === '/') {
      remainingPathname = pathname;
      paramNames = [];
      paramValues = [];
    }

    if (remainingPathname !== null) {
      var matched = _PatternUtils.matchPattern(pattern, remainingPathname);
      remainingPathname = matched.remainingPathname;
      paramNames = [].concat(paramNames, matched.paramNames);
      paramValues = [].concat(paramValues, matched.paramValues);
    }

    if (remainingPathname === '' && route.path && paramsAreActive(paramNames, paramValues, activeParams)) return i;
  }

  return null;
}

/**
 * Returns true if the given pathname matches the active routes
 * and params.
 */
function routeIsActive(pathname, routes, params, indexOnly) {
  var i = getMatchingRouteIndex(pathname, routes, params);

  if (i === null) {
    // No match.
    return false;
  } else if (!indexOnly) {
    // Any match is good enough.
    return true;
  }

  // If any remaining routes past the match index have paths, then we can't
  // be on the index route.
  return routes.slice(i + 1).every(function (route) {
    return !route.path;
  });
}

/**
 * Returns true if all key/value pairs in the given query are
 * currently active.
 */
function queryIsActive(query, activeQuery) {
  if (activeQuery == null) return query == null;

  if (query == null) return true;

  return deepEqual(query, activeQuery);
}

/**
 * Returns true if a <Link> to the given pathname/query combination is
 * currently active.
 */

function isActive(_ref, indexOnly, currentLocation, routes, params) {
  var pathname = _ref.pathname;
  var query = _ref.query;

  if (currentLocation == null) return false;

  if (!routeIsActive(pathname, routes, params, indexOnly)) return false;

  return queryIsActive(query, currentLocation.query);
}

module.exports = exports['default'];
},{"./PatternUtils":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/PatternUtils.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/match.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _createMemoryHistory = require('./createMemoryHistory');

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _createTransitionManager = require('./createTransitionManager');

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _RouteUtils = require('./RouteUtils');

var _RouterUtils = require('./RouterUtils');

/**
 * A high-level API to be used for server-side rendering.
 *
 * This function matches a location to a set of routes and calls
 * callback(error, redirectLocation, renderProps) when finished.
 *
 * Note: You probably don't want to use this in a browser unless you're using
 * server-side rendering with async routes.
 */
function match(_ref, callback) {
  var history = _ref.history;
  var routes = _ref.routes;
  var location = _ref.location;

  var options = _objectWithoutProperties(_ref, ['history', 'routes', 'location']);

  !(history || location) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'match needs a history or a location') : _invariant2['default'](false) : undefined;

  history = history ? history : _createMemoryHistory2['default'](options);
  var transitionManager = _createTransitionManager2['default'](history, _RouteUtils.createRoutes(routes));

  var unlisten = undefined;

  if (location) {
    // Allow match({ location: '/the/path', ... })
    location = history.createLocation(location);
  } else {
    // Pick up the location from the history via synchronous history.listen
    // call if needed.
    unlisten = history.listen(function (historyLocation) {
      location = historyLocation;
    });
  }

  var router = _RouterUtils.createRouterObject(history, transitionManager);
  history = _RouterUtils.createRoutingHistory(history, transitionManager);

  transitionManager.match(location, function (error, redirectLocation, nextState) {
    callback(error, redirectLocation, nextState && _extends({}, nextState, {
      history: history,
      router: router,
      matchContext: { history: history, transitionManager: transitionManager, router: router }
    }));

    // Defer removing the listener to here to prevent DOM histories from having
    // to unwind DOM event listeners unnecessarily, in case callback renders a
    // <Router> and attaches another history listener.
    if (unlisten) {
      unlisten();
    }
  });
}

exports['default'] = match;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./RouteUtils":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/RouteUtils.js","./RouterUtils":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/RouterUtils.js","./createMemoryHistory":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/createMemoryHistory.js","./createTransitionManager":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/createTransitionManager.js","_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js","invariant":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/invariant/browser.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/matchRoutes.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _AsyncUtils = require('./AsyncUtils');

var _PatternUtils = require('./PatternUtils');

var _RouteUtils = require('./RouteUtils');

function getChildRoutes(route, location, callback) {
  if (route.childRoutes) {
    return [null, route.childRoutes];
  }
  if (!route.getChildRoutes) {
    return [];
  }

  var sync = true,
      result = undefined;

  route.getChildRoutes(location, function (error, childRoutes) {
    childRoutes = !error && _RouteUtils.createRoutes(childRoutes);
    if (sync) {
      result = [error, childRoutes];
      return;
    }

    callback(error, childRoutes);
  });

  sync = false;
  return result; // Might be undefined.
}

function getIndexRoute(route, location, callback) {
  if (route.indexRoute) {
    callback(null, route.indexRoute);
  } else if (route.getIndexRoute) {
    route.getIndexRoute(location, function (error, indexRoute) {
      callback(error, !error && _RouteUtils.createRoutes(indexRoute)[0]);
    });
  } else if (route.childRoutes) {
    (function () {
      var pathless = route.childRoutes.filter(function (obj) {
        return !obj.hasOwnProperty('path');
      });

      _AsyncUtils.loopAsync(pathless.length, function (index, next, done) {
        getIndexRoute(pathless[index], location, function (error, indexRoute) {
          if (error || indexRoute) {
            var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
            done(error, routes);
          } else {
            next();
          }
        });
      }, function (err, routes) {
        callback(null, routes);
      });
    })();
  } else {
    callback();
  }
}

function assignParams(params, paramNames, paramValues) {
  return paramNames.reduce(function (params, paramName, index) {
    var paramValue = paramValues && paramValues[index];

    if (Array.isArray(params[paramName])) {
      params[paramName].push(paramValue);
    } else if (paramName in params) {
      params[paramName] = [params[paramName], paramValue];
    } else {
      params[paramName] = paramValue;
    }

    return params;
  }, params);
}

function createParams(paramNames, paramValues) {
  return assignParams({}, paramNames, paramValues);
}

function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
  var pattern = route.path || '';

  if (pattern.charAt(0) === '/') {
    remainingPathname = location.pathname;
    paramNames = [];
    paramValues = [];
  }

  if (remainingPathname !== null) {
    var matched = _PatternUtils.matchPattern(pattern, remainingPathname);
    remainingPathname = matched.remainingPathname;
    paramNames = [].concat(paramNames, matched.paramNames);
    paramValues = [].concat(paramValues, matched.paramValues);

    if (remainingPathname === '' && route.path) {
      var _ret2 = (function () {
        var match = {
          routes: [route],
          params: createParams(paramNames, paramValues)
        };

        getIndexRoute(route, location, function (error, indexRoute) {
          if (error) {
            callback(error);
          } else {
            if (Array.isArray(indexRoute)) {
              var _match$routes;

              process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](indexRoute.every(function (route) {
                return !route.path;
              }), 'Index routes should not have paths') : undefined;
              (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
            } else if (indexRoute) {
              process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](!indexRoute.path, 'Index routes should not have paths') : undefined;
              match.routes.push(indexRoute);
            }

            callback(null, match);
          }
        });
        return {
          v: undefined
        };
      })();

      if (typeof _ret2 === 'object') return _ret2.v;
    }
  }

  if (remainingPathname != null || route.childRoutes) {
    // Either a) this route matched at least some of the path or b)
    // we don't have to load this route's children asynchronously. In
    // either case continue checking for matches in the subtree.
    var onChildRoutes = function onChildRoutes(error, childRoutes) {
      if (error) {
        callback(error);
      } else if (childRoutes) {
        // Check the child routes to see if any of them match.
        matchRoutes(childRoutes, location, function (error, match) {
          if (error) {
            callback(error);
          } else if (match) {
            // A child route matched! Augment the match and pass it up the stack.
            match.routes.unshift(route);
            callback(null, match);
          } else {
            callback();
          }
        }, remainingPathname, paramNames, paramValues);
      } else {
        callback();
      }
    };

    var result = getChildRoutes(route, location, onChildRoutes);
    if (result) {
      onChildRoutes.apply(undefined, result);
    }
  } else {
    callback();
  }
}

/**
 * Asynchronously matches the given location to a set of routes and calls
 * callback(error, state) when finished. The state object will have the
 * following properties:
 *
 * - routes       An array of routes that matched, in hierarchical order
 * - params       An object of URL parameters
 *
 * Note: This operation may finish synchronously if no routes have an
 * asynchronous getChildRoutes method.
 */
function matchRoutes(routes, location, callback) {
  var remainingPathname = arguments.length <= 3 || arguments[3] === undefined ? location.pathname : arguments[3];
  var paramNames = arguments.length <= 4 || arguments[4] === undefined ? [] : arguments[4];
  var paramValues = arguments.length <= 5 || arguments[5] === undefined ? [] : arguments[5];
  return (function () {
    _AsyncUtils.loopAsync(routes.length, function (index, next, done) {
      matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function (error, match) {
        if (error || match) {
          done(error, match);
        } else {
          next();
        }
      });
    }, callback);
  })();
}

exports['default'] = matchRoutes;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./AsyncUtils":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/AsyncUtils.js","./PatternUtils":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/PatternUtils.js","./RouteUtils":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/RouteUtils.js","./routerWarning":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/routerWarning.js","_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/routerWarning.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;
exports['default'] = routerWarning;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function routerWarning(falseToWarn, message) {
  message = '[react-router] ' + message;

  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  process.env.NODE_ENV !== 'production' ? _warning2['default'].apply(undefined, [falseToWarn, message].concat(args)) : undefined;
}

module.exports = exports['default'];
}).call(this,require('_process'))

},{"_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js","warning":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/warning/browser.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/useRouterHistory.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports['default'] = useRouterHistory;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _historyLibUseQueries = require('history/lib/useQueries');

var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

var _historyLibUseBasename = require('history/lib/useBasename');

var _historyLibUseBasename2 = _interopRequireDefault(_historyLibUseBasename);

function useRouterHistory(createHistory) {
  return function (options) {
    var history = _historyLibUseQueries2['default'](_historyLibUseBasename2['default'](createHistory))(options);
    history.__v2_compatible__ = true;
    return history;
  };
}

module.exports = exports['default'];
},{"history/lib/useBasename":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/useBasename.js","history/lib/useQueries":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/useQueries.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/useRoutes.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _historyLibUseQueries = require('history/lib/useQueries');

var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

var _createTransitionManager = require('./createTransitionManager');

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

/**
 * Returns a new createHistory function that may be used to create
 * history objects that know about routing.
 *
 * Enhances history objects with the following methods:
 *
 * - listen((error, nextState) => {})
 * - listenBeforeLeavingRoute(route, (nextLocation) => {})
 * - match(location, (error, redirectLocation, nextState) => {})
 * - isActive(pathname, query, indexOnly=false)
 */
function useRoutes(createHistory) {
  process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, '`useRoutes` is deprecated. Please use `createTransitionManager` instead.') : undefined;

  return function () {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var routes = _ref.routes;

    var options = _objectWithoutProperties(_ref, ['routes']);

    var history = _historyLibUseQueries2['default'](createHistory)(options);
    var transitionManager = _createTransitionManager2['default'](history, routes);
    return _extends({}, history, transitionManager);
  };
}

exports['default'] = useRoutes;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./createTransitionManager":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/createTransitionManager.js","./routerWarning":"/Users/eld/Desktop/personal-site/node_modules/react-router/lib/routerWarning.js","_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js","history/lib/useQueries":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/useQueries.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/Actions.js":[function(require,module,exports){
/**
 * Indicates that navigation was caused by a call to history.push.
 */
'use strict';

exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};
},{}],"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/AsyncUtils.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0;
  var isDone = false;

  function done() {
    isDone = true;
    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) return;

    if (currentTurn < turns) {
      work.call(this, currentTurn++, next, done);
    } else {
      done.apply(this, arguments);
    }
  }

  next();
}
},{}],"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/DOMStateStorage.js":[function(require,module,exports){
(function (process){
/*eslint-disable no-empty */
'use strict';

exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var KeyPrefix = '@@History/';
var QuotaExceededErrors = ['QuotaExceededError', 'QUOTA_EXCEEDED_ERR'];

var SecurityError = 'SecurityError';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  try {
    if (state == null) {
      window.sessionStorage.removeItem(createKey(key));
    } else {
      window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
    }
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

      return;
    }

    if (QuotaExceededErrors.indexOf(error.name) >= 0 && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

      return;
    }

    throw error;
  }
}

function readState(key) {
  var json = undefined;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

      return null;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}
}).call(this,require('_process'))

},{"_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js","warning":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/warning/browser.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/DOMUtils.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search + window.location.hash;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}
},{}],"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/ExecutionEnvironment.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/PathUtils.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;
exports.extractPath = extractPath;
exports.parsePath = parsePath;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

function parsePath(path) {
  var pathname = extractPath(path);
  var search = '';
  var hash = '';

  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
}
}).call(this,require('_process'))

},{"_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js","warning":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/warning/browser.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/createBrowserHistory.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _PathUtils = require('./PathUtils');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve URLs.
 */
function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

  var forceRefresh = options.forceRefresh;

  var isSupported = _DOMUtils.supportsHistory();
  var useRefresh = !isSupported || forceRefresh;

  function getCurrentLocation(historyState) {
    historyState = historyState || window.history.state || {};

    var path = _DOMUtils.getWindowPath();
    var _historyState = historyState;
    var key = _historyState.key;

    var state = undefined;
    if (key) {
      state = _DOMStateStorage.readState(key);
    } else {
      state = null;
      key = history.createKey();

      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
    }

    var location = _PathUtils.parsePath(path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function startPopStateListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function popStateListener(event) {
      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

      transitionTo(getCurrentLocation(event.state));
    }

    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search + hash;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (useRefresh) {
        window.location.href = path;
        return false; // Prevent location update.
      } else {
          window.history.pushState(historyState, null, path);
        }
    } else {
      // REPLACE
      if (useRefresh) {
        window.location.replace(path);
        return false; // Prevent location update.
      } else {
          window.history.replaceState(historyState, null, path);
        }
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopPopStateListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopPopStateListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./Actions":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/Actions.js","./DOMStateStorage":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/DOMStateStorage.js","./DOMUtils":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/DOMUtils.js","./ExecutionEnvironment":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/ExecutionEnvironment.js","./PathUtils":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/PathUtils.js","./createDOMHistory":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/createDOMHistory.js","_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js","invariant":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/invariant/browser.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/createDOMHistory.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./DOMUtils":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/DOMUtils.js","./ExecutionEnvironment":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/ExecutionEnvironment.js","./createHistory":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/createHistory.js","_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js","invariant":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/invariant/browser.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/createHashHistory.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _PathUtils = require('./PathUtils');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

function isAbsolutePath(path) {
  return typeof path === 'string' && path.charAt(0) === '/';
}

function ensureSlash() {
  var path = _DOMUtils.getHashPath();

  if (isAbsolutePath(path)) return true;

  _DOMUtils.replaceHashPath('/' + path);

  return false;
}

function addQueryStringValueToPath(path, key, value) {
  return path + (path.indexOf('?') === -1 ? '?' : '&') + (key + '=' + value);
}

function stripQueryStringValueFromPath(path, key) {
  return path.replace(new RegExp('[?&]?' + key + '=[a-zA-Z0-9]+'), '');
}

function getQueryStringValueFromPath(path, key) {
  var match = path.match(new RegExp('\\?.*?\\b' + key + '=(.+?)\\b'));
  return match && match[1];
}

var DefaultQueryKey = '_k';

function createHashHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Hash history needs a DOM') : _invariant2['default'](false) : undefined;

  var queryKey = options.queryKey;

  if (queryKey === undefined || !!queryKey) queryKey = typeof queryKey === 'string' ? queryKey : DefaultQueryKey;

  function getCurrentLocation() {
    var path = _DOMUtils.getHashPath();

    var key = undefined,
        state = undefined;
    if (queryKey) {
      key = getQueryStringValueFromPath(path, queryKey);
      path = stripQueryStringValueFromPath(path, queryKey);

      if (key) {
        state = _DOMStateStorage.readState(key);
      } else {
        state = null;
        key = history.createKey();
        _DOMUtils.replaceHashPath(addQueryStringValueToPath(path, queryKey, key));
      }
    } else {
      key = state = null;
    }

    var location = _PathUtils.parsePath(path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function startHashChangeListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function hashChangeListener() {
      if (!ensureSlash()) return; // Always make sure hashes are preceeded with a /.

      transitionTo(getCurrentLocation());
    }

    ensureSlash();
    _DOMUtils.addEventListener(window, 'hashchange', hashChangeListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'hashchange', hashChangeListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    var path = (basename || '') + pathname + search;

    if (queryKey) {
      path = addQueryStringValueToPath(path, queryKey, key);
      _DOMStateStorage.saveState(key, state);
    } else {
      // Drop key and state.
      location.key = location.state = null;
    }

    var currentHash = _DOMUtils.getHashPath();

    if (action === _Actions.PUSH) {
      if (currentHash !== path) {
        window.location.hash = path;
      } else {
        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'You cannot PUSH the same path using hash history') : undefined;
      }
    } else if (currentHash !== path) {
      // REPLACE
      _DOMUtils.replaceHashPath(path);
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopHashChangeListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopHashChangeListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopHashChangeListener();
    };
  }

  function push(location) {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

    history.push(location);
  }

  function replace(location) {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

    history.replace(location);
  }

  var goIsSupportedWithoutReload = _DOMUtils.supportsGoWithoutReloadUsingHash();

  function go(n) {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;

    history.go(n);
  }

  function createHref(path) {
    return '#' + history.createHref(path);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopHashChangeListener();
  }

  // deprecated
  function pushState(state, path) {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

    history.pushState(state, path);
  }

  // deprecated
  function replaceState(state, path) {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

    history.replaceState(state, path);
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    push: push,
    replace: replace,
    go: go,
    createHref: createHref,

    registerTransitionHook: registerTransitionHook, // deprecated - warning is in createHistory
    unregisterTransitionHook: unregisterTransitionHook, // deprecated - warning is in createHistory
    pushState: pushState, // deprecated - warning is in createHistory
    replaceState: replaceState // deprecated - warning is in createHistory
  });
}

exports['default'] = createHashHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./Actions":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/Actions.js","./DOMStateStorage":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/DOMStateStorage.js","./DOMUtils":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/DOMUtils.js","./ExecutionEnvironment":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/ExecutionEnvironment.js","./PathUtils":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/PathUtils.js","./createDOMHistory":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/createDOMHistory.js","_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js","invariant":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/invariant/browser.js","warning":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/warning/browser.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/createHistory.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _PathUtils = require('./PathUtils');

var _AsyncUtils = require('./AsyncUtils');

var _Actions = require('./Actions');

var _createLocation2 = require('./createLocation');

var _createLocation3 = _interopRequireDefault(_createLocation2);

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var keyLength = options.keyLength;
  var getUserConfirmation = options.getUserConfirmation;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];

  function listenBefore(hook) {
    transitionHooks.push(hook);

    return function () {
      transitionHooks = transitionHooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var allKeys = [];
  var changeListeners = [];
  var location = undefined;

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function listen(listener) {
    changeListeners.push(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      changeListeners = changeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

      if (ok) {
        // treat PUSH to current path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = createPath(location);
          var nextPath = createPath(nextLocation);

          if (nextPath === prevPath && _deepEqual2['default'](location.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
        }

        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function push(location) {
    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
  }

  function replace(location) {
    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(location) {
    if (location == null || typeof location === 'string') return location;

    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(location) {
    return createPath(location);
  }

  function createLocation(location, action) {
    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

    if (typeof action === 'object') {
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to history.createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;

      if (typeof location === 'string') location = _PathUtils.parsePath(location);

      location = _extends({}, location, { state: action });

      action = key;
      key = arguments[3] || createKey();
    }

    return _createLocation3['default'](location, action, key);
  }

  // deprecated
  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  // deprecated
  function pushState(state, path) {
    if (typeof path === 'string') path = _PathUtils.parsePath(path);

    push(_extends({ state: state }, path));
  }

  // deprecated
  function replaceState(state, path) {
    if (typeof path === 'string') path = _PathUtils.parsePath(path);

    replace(_extends({ state: state }, path));
  }

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,
    createLocation: createLocation,

    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./Actions":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/Actions.js","./AsyncUtils":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/AsyncUtils.js","./PathUtils":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/PathUtils.js","./createLocation":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/createLocation.js","./deprecate":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/deprecate.js","./runTransitionHook":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/runTransitionHook.js","_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js","deep-equal":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/node_modules/deep-equal/index.js","warning":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/warning/browser.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/createLocation.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _Actions = require('./Actions');

var _PathUtils = require('./PathUtils');

function createLocation() {
  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof location === 'string') location = _PathUtils.parsePath(location);

  if (typeof action === 'object') {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;

    location = _extends({}, location, { state: action });

    action = key || _Actions.POP;
    key = _fourthArg;
  }

  var pathname = location.pathname || '/';
  var search = location.search || '';
  var hash = location.hash || '';
  var state = location.state || null;

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./Actions":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/Actions.js","./PathUtils":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/PathUtils.js","_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js","warning":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/warning/browser.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/createMemoryHistory.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _PathUtils = require('./PathUtils');

var _Actions = require('./Actions');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createStateStorage(entries) {
  return entries.filter(function (entry) {
    return entry.state;
  }).reduce(function (memo, entry) {
    memo[entry.key] = entry.state;
    return memo;
  }, {});
}

function createMemoryHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  if (Array.isArray(options)) {
    options = { entries: options };
  } else if (typeof options === 'string') {
    options = { entries: [options] };
  }

  var history = _createHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: saveState,
    go: go
  }));

  var _options = options;
  var entries = _options.entries;
  var current = _options.current;

  if (typeof entries === 'string') {
    entries = [entries];
  } else if (!Array.isArray(entries)) {
    entries = ['/'];
  }

  entries = entries.map(function (entry) {
    var key = history.createKey();

    if (typeof entry === 'string') return { pathname: entry, key: key };

    if (typeof entry === 'object' && entry) return _extends({}, entry, { key: key });

    !false ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Unable to create history entry from %s', entry) : _invariant2['default'](false) : undefined;
  });

  if (current == null) {
    current = entries.length - 1;
  } else {
    !(current >= 0 && current < entries.length) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : _invariant2['default'](false) : undefined;
  }

  var storage = createStateStorage(entries);

  function saveState(key, state) {
    storage[key] = state;
  }

  function readState(key) {
    return storage[key];
  }

  function getCurrentLocation() {
    var entry = entries[current];
    var key = entry.key;
    var basename = entry.basename;
    var pathname = entry.pathname;
    var search = entry.search;

    var path = (basename || '') + pathname + (search || '');

    var state = undefined;
    if (key) {
      state = readState(key);
    } else {
      state = null;
      key = history.createKey();
      entry.key = key;
    }

    var location = _PathUtils.parsePath(path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function canGo(n) {
    var index = current + n;
    return index >= 0 && index < entries.length;
  }

  function go(n) {
    if (n) {
      if (!canGo(n)) {
        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'Cannot go(%s) there is not enough history', n) : undefined;
        return;
      }

      current += n;

      var currentLocation = getCurrentLocation();

      // change action to POP
      history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
    }
  }

  function finishTransition(location) {
    switch (location.action) {
      case _Actions.PUSH:
        current += 1;

        // if we are not on the top of stack
        // remove rest and push new
        if (current < entries.length) entries.splice(current);

        entries.push(location);
        saveState(location.key, location.state);
        break;
      case _Actions.REPLACE:
        entries[current] = location;
        saveState(location.key, location.state);
        break;
    }
  }

  return history;
}

exports['default'] = createMemoryHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./Actions":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/Actions.js","./PathUtils":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/PathUtils.js","./createHistory":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/createHistory.js","_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js","invariant":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/invariant/browser.js","warning":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/warning/browser.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/deprecate.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function deprecate(fn, message) {
  return function () {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] ' + message) : undefined;
    return fn.apply(this, arguments);
  };
}

exports['default'] = deprecate;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js","warning":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/warning/browser.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/runTransitionHook.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
  }
}

exports['default'] = runTransitionHook;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js","warning":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/warning/browser.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/useBasename.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _PathUtils = require('./PathUtils');

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function useBasename(createHistory) {
  return function () {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var basename = options.basename;

    var historyOptions = _objectWithoutProperties(options, ['basename']);

    var history = createHistory(historyOptions);

    // Automatically use the value of <base href> in HTML
    // documents as basename if it's not explicitly given.
    if (basename == null && _ExecutionEnvironment.canUseDOM) {
      var base = document.getElementsByTagName('base')[0];

      if (base) basename = _PathUtils.extractPath(base.href);
    }

    function addBasename(location) {
      if (basename && location.basename == null) {
        if (location.pathname.indexOf(basename) === 0) {
          location.pathname = location.pathname.substring(basename.length);
          location.basename = basename;

          if (location.pathname === '') location.pathname = '/';
        } else {
          location.basename = '';
        }
      }

      return location;
    }

    function prependBasename(location) {
      if (!basename) return location;

      if (typeof location === 'string') location = _PathUtils.parsePath(location);

      var pname = location.pathname;
      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
      var pathname = normalizedBasename + normalizedPathname;

      return _extends({}, location, {
        pathname: pathname
      });
    }

    // Override all read methods with basename-aware versions.
    function listenBefore(hook) {
      return history.listenBefore(function (location, callback) {
        _runTransitionHook2['default'](hook, addBasename(location), callback);
      });
    }

    function listen(listener) {
      return history.listen(function (location) {
        listener(addBasename(location));
      });
    }

    // Override all write methods with basename-aware versions.
    function push(location) {
      history.push(prependBasename(location));
    }

    function replace(location) {
      history.replace(prependBasename(location));
    }

    function createPath(location) {
      return history.createPath(prependBasename(location));
    }

    function createHref(location) {
      return history.createHref(prependBasename(location));
    }

    function createLocation(location) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
    }

    // deprecated
    function pushState(state, path) {
      if (typeof path === 'string') path = _PathUtils.parsePath(path);

      push(_extends({ state: state }, path));
    }

    // deprecated
    function replaceState(state, path) {
      if (typeof path === 'string') path = _PathUtils.parsePath(path);

      replace(_extends({ state: state }, path));
    }

    return _extends({}, history, {
      listenBefore: listenBefore,
      listen: listen,
      push: push,
      replace: replace,
      createPath: createPath,
      createHref: createHref,
      createLocation: createLocation,

      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
    });
  };
}

exports['default'] = useBasename;
module.exports = exports['default'];
},{"./ExecutionEnvironment":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/ExecutionEnvironment.js","./PathUtils":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/PathUtils.js","./deprecate":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/deprecate.js","./runTransitionHook":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/runTransitionHook.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/useQueries.js":[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _queryString = require('query-string');

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _PathUtils = require('./PathUtils');

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

var SEARCH_BASE_KEY = '$searchBase';

function defaultStringifyQuery(query) {
  return _queryString.stringify(query).replace(/%20/g, '+');
}

var defaultParseQueryString = _queryString.parse;

function isNestedObject(object) {
  for (var p in object) {
    if (object.hasOwnProperty(p) && typeof object[p] === 'object' && !Array.isArray(object[p]) && object[p] !== null) return true;
  }return false;
}

/**
 * Returns a new createHistory function that may be used to create
 * history objects that know how to handle URL queries.
 */
function useQueries(createHistory) {
  return function () {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var stringifyQuery = options.stringifyQuery;
    var parseQueryString = options.parseQueryString;

    var historyOptions = _objectWithoutProperties(options, ['stringifyQuery', 'parseQueryString']);

    var history = createHistory(historyOptions);

    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;

    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

    function addQuery(location) {
      if (location.query == null) {
        var search = location.search;

        location.query = parseQueryString(search.substring(1));
        location[SEARCH_BASE_KEY] = { search: search, searchBase: '' };
      }

      // TODO: Instead of all the book-keeping here, this should just strip the
      // stringified query from the search.

      return location;
    }

    function appendQuery(location, query) {
      var _extends2;

      var searchBaseSpec = location[SEARCH_BASE_KEY];
      var queryString = query ? stringifyQuery(query) : '';
      if (!searchBaseSpec && !queryString) {
        return location;
      }

      process.env.NODE_ENV !== 'production' ? _warning2['default'](stringifyQuery !== defaultStringifyQuery || !isNestedObject(query), 'useQueries does not stringify nested query objects by default; ' + 'use a custom stringifyQuery function') : undefined;

      if (typeof location === 'string') location = _PathUtils.parsePath(location);

      var searchBase = undefined;
      if (searchBaseSpec && location.search === searchBaseSpec.search) {
        searchBase = searchBaseSpec.searchBase;
      } else {
        searchBase = location.search || '';
      }

      var search = searchBase;
      if (queryString) {
        search += (search ? '&' : '?') + queryString;
      }

      return _extends({}, location, (_extends2 = {
        search: search
      }, _extends2[SEARCH_BASE_KEY] = { search: search, searchBase: searchBase }, _extends2));
    }

    // Override all read methods with query-aware versions.
    function listenBefore(hook) {
      return history.listenBefore(function (location, callback) {
        _runTransitionHook2['default'](hook, addQuery(location), callback);
      });
    }

    function listen(listener) {
      return history.listen(function (location) {
        listener(addQuery(location));
      });
    }

    // Override all write methods with query-aware versions.
    function push(location) {
      history.push(appendQuery(location, location.query));
    }

    function replace(location) {
      history.replace(appendQuery(location, location.query));
    }

    function createPath(location, query) {
      process.env.NODE_ENV !== 'production' ? _warning2['default'](!query, 'the query argument to createPath is deprecated; use a location descriptor instead') : undefined;

      return history.createPath(appendQuery(location, query || location.query));
    }

    function createHref(location, query) {
      process.env.NODE_ENV !== 'production' ? _warning2['default'](!query, 'the query argument to createHref is deprecated; use a location descriptor instead') : undefined;

      return history.createHref(appendQuery(location, query || location.query));
    }

    function createLocation(location) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var fullLocation = history.createLocation.apply(history, [appendQuery(location, location.query)].concat(args));
      if (location.query) {
        fullLocation.query = location.query;
      }
      return addQuery(fullLocation);
    }

    // deprecated
    function pushState(state, path, query) {
      if (typeof path === 'string') path = _PathUtils.parsePath(path);

      push(_extends({ state: state }, path, { query: query }));
    }

    // deprecated
    function replaceState(state, path, query) {
      if (typeof path === 'string') path = _PathUtils.parsePath(path);

      replace(_extends({ state: state }, path, { query: query }));
    }

    return _extends({}, history, {
      listenBefore: listenBefore,
      listen: listen,
      push: push,
      replace: replace,
      createPath: createPath,
      createHref: createHref,
      createLocation: createLocation,

      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
    });
  };
}

exports['default'] = useQueries;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./PathUtils":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/PathUtils.js","./deprecate":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/deprecate.js","./runTransitionHook":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/lib/runTransitionHook.js","_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js","query-string":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/node_modules/query-string/index.js","warning":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/warning/browser.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/node_modules/deep-equal/index.js":[function(require,module,exports){
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/is_arguments.js":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/node_modules/deep-equal/lib/is_arguments.js","./lib/keys.js":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/node_modules/deep-equal/lib/keys.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/node_modules/deep-equal/lib/is_arguments.js":[function(require,module,exports){
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/node_modules/deep-equal/lib/keys.js":[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/node_modules/query-string/index.js":[function(require,module,exports){
'use strict';
var strictUriEncode = require('strict-uri-encode');

exports.extract = function (str) {
	return str.split('?')[1] || '';
};

exports.parse = function (str) {
	if (typeof str !== 'string') {
		return {};
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return {};
	}

	return str.split('&').reduce(function (ret, param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		key = decodeURIComponent(key);

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeURIComponent(val);

		if (!ret.hasOwnProperty(key)) {
			ret[key] = val;
		} else if (Array.isArray(ret[key])) {
			ret[key].push(val);
		} else {
			ret[key] = [ret[key], val];
		}

		return ret;
	}, {});
};

exports.stringify = function (obj) {
	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return key;
		}

		if (Array.isArray(val)) {
			return val.sort().map(function (val2) {
				return strictUriEncode(key) + '=' + strictUriEncode(val2);
			}).join('&');
		}

		return strictUriEncode(key) + '=' + strictUriEncode(val);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

},{"strict-uri-encode":"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/node_modules/query-string/node_modules/strict-uri-encode/index.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/history/node_modules/query-string/node_modules/strict-uri-encode/index.js":[function(require,module,exports){
'use strict';
module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};

},{}],"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/invariant/browser.js":[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))

},{"_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js"}],"/Users/eld/Desktop/personal-site/node_modules/react-router/node_modules/warning/browser.js":[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"_process":"/Users/eld/Desktop/personal-site/node_modules/browserify/node_modules/process/browser.js"}],"/Users/eld/Desktop/personal-site/specs/App-spec.js":[function(require,module,exports){
var App = require('./../app/App.js');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe("App", function() {

  it("should render text: Hello world!", function() {
    var app = TestUtils.renderIntoDocument(React.createElement(App));
    expect(React.findDOMNode(app).textContent).toEqual('Hello world!');
  });

});


},{"./../app/App.js":"/Users/eld/Desktop/personal-site/app/App.js","react/addons":"react/addons"}]},{},["/Users/eld/Desktop/personal-site/specs/App-spec.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvQWJvdXQuanN4IiwiYXBwL0FwcC5qcyIsImFwcC9CdXR0b24uanN4IiwiYXBwL0hvbWUuanN4IiwiYXBwL05hdmlnYXRpb24uanN4IiwiYXBwL1Jlc3VtZS5qc3giLCJhcHAvU2VjdGlvbi5qc3giLCJhcHAvVGh1bWJuYWlsLmpzeCIsImFwcC9Xb3JrLmpzeCIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9Bc3luY1V0aWxzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvSGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL0luZGV4TGluay5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL0luZGV4UmVkaXJlY3QuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9JbmRleFJvdXRlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvTGlmZWN5Y2xlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvTGluay5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL1BhdHRlcm5VdGlscy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL1Byb3BUeXBlcy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL1JlZGlyZWN0LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvUm91dGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9Sb3V0ZUNvbnRleHQuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9Sb3V0ZVV0aWxzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvUm91dGVyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvUm91dGVyQ29udGV4dC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL1JvdXRlclV0aWxzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvUm91dGluZ0NvbnRleHQuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9UcmFuc2l0aW9uVXRpbHMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9icm93c2VySGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2NvbXB1dGVDaGFuZ2VkUm91dGVzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvY3JlYXRlTWVtb3J5SGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2NyZWF0ZVJvdXRlckhpc3RvcnkuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2RlcHJlY2F0ZU9iamVjdFByb3BlcnRpZXMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9nZXRDb21wb25lbnRzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvZ2V0Um91dGVQYXJhbXMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9oYXNoSGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvaXNBY3RpdmUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9tYXRjaC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL21hdGNoUm91dGVzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvcm91dGVyV2FybmluZy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL3VzZVJvdXRlckhpc3RvcnkuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi91c2VSb3V0ZXMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9BY3Rpb25zLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvQXN5bmNVdGlscy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL0RPTVN0YXRlU3RvcmFnZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL0RPTVV0aWxzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvRXhlY3V0aW9uRW52aXJvbm1lbnQuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9QYXRoVXRpbHMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9jcmVhdGVCcm93c2VySGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL2NyZWF0ZURPTUhpc3RvcnkuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9jcmVhdGVIYXNoSGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL2NyZWF0ZUhpc3RvcnkuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9jcmVhdGVMb2NhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL2NyZWF0ZU1lbW9yeUhpc3RvcnkuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9kZXByZWNhdGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9ydW5UcmFuc2l0aW9uSG9vay5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL3VzZUJhc2VuYW1lLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvdXNlUXVlcmllcy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL2hpc3Rvcnkvbm9kZV9tb2R1bGVzL2RlZXAtZXF1YWwvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy9oaXN0b3J5L25vZGVfbW9kdWxlcy9kZWVwLWVxdWFsL2xpYi9pc19hcmd1bWVudHMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy9oaXN0b3J5L25vZGVfbW9kdWxlcy9kZWVwLWVxdWFsL2xpYi9rZXlzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvaGlzdG9yeS9ub2RlX21vZHVsZXMvcXVlcnktc3RyaW5nL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvaGlzdG9yeS9ub2RlX21vZHVsZXMvcXVlcnktc3RyaW5nL25vZGVfbW9kdWxlcy9zdHJpY3QtdXJpLWVuY29kZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL2ludmFyaWFudC9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvd2FybmluZy9icm93c2VyLmpzIiwic3BlY3MvQXBwLXNwZWMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDbktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNsT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ2pIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDak5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3pKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDdlNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM5SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzdNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDL0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDclBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUMvUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDeEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN6SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2xMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBCdXR0b24gPSByZXF1aXJlKCcuL0J1dHRvbi5qc3gnKTtcblxudmFyIEFib3V0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkFib3V0XCIsXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImFib3V0LS1NQUlOXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge2NsYXNzTmFtZTogXCJhYm91dC0tcHJvZmlsZS1pbWFnZVwiLCBzcmM6IFwiaW1hZ2VzL3Byb2ZpbGUtcGljLnBuZ1wifSksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJhYm91dC0tdGV4dC13cmFwcGVyXCJ9LCBcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwge2NsYXNzTmFtZTogXCJhYm91dC0tdGV4dFwifSwgXCJJIGFtIGEgZnJvbnQtZW5kIGRldmVsb3BlciBhbmQgd2ViIGRlc2lnbmVyIGN1cnJlbnRseSBsaXZpbmcgaW4gQnJvb2tseW4gYW5kIHdvcmtpbmcgaW4gTWFuaGF0dGFuLiBXaGV0aGVyIHlvdSBjb25zaWRlciBtZSBhIGRlc2lnbmVyIHdpdGggcHJvZ3JhbW1pbmcgc2tpbGxzLFwiICsgJyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib3IgYSBwcm9ncmFtbWVyIHdpdGggYSBrbmFjayBmb3IgYmVhdXRpZnVsIGRlc2lnbiwgbXkgZGl2ZXJzZSBza2lsbCBzZXQgaXMgd2hhdCBhbGxvd3NcIiArICcgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1lIHRvIGhvbGlzdGljYWxseSBzb2x2ZSBwcm9ibGVtcy4gSSBiZWxpZXZlIHRoYXQgb25lIG9mIGxpZmUncyBncmVhdGVzdCBwbGVhc3VyZXMgaXMgY3JlYXRpb24sIG5vIG1hdHRlciB5b3VyIG1lZGl1bSBvZiBjaG9pY2UuXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHtsYWJlbDogXCJDT05UQUNUXCJ9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBYm91dDsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIE5hdmlnYXRpb24gPSByZXF1aXJlKCcuL05hdmlnYXRpb24uanN4Jyk7XG52YXIgSG9tZSA9IHJlcXVpcmUoJy4vSG9tZS5qc3gnKTtcbnZhciBSZXN1bWUgPSByZXF1aXJlKCcuL1Jlc3VtZS5qc3gnKTtcbnZhciBXb3JrID0gcmVxdWlyZSgnLi9Xb3JrLmpzeCcpO1xudmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLlJvdXRlcjtcbnZhciBSb3V0ZSA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLlJvdXRlO1xudmFyIEluZGV4Um91dGUgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKS5JbmRleFJvdXRlO1xudmFyIExpbmsgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKS5MaW5rO1xudmFyIGhhc2hIaXN0b3J5ID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJykuaGFzaEhpc3Rvcnk7XG5cblxudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJBcHBcIixcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImxheW91dC0td3JhcHBlclwifSwgXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlbiwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChOYXZpZ2F0aW9uLCBudWxsKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5SZWFjdC5yZW5kZXIoKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCB7aGlzdG9yeTogaGFzaEhpc3Rvcnl9LCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwiL1wiLCBjb21wb25lbnQ6IEFwcH0sIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbmRleFJvdXRlLCB7Y29tcG9uZW50OiBIb21lfSksIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwiL3dvcmtcIiwgY29tcG9uZW50OiBXb3JrfSksIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwiL3Jlc3VtZVwiLCBjb21wb25lbnQ6IFJlc3VtZX0pXG4gICAgICAgIClcbiAgICApXG4pLCBkb2N1bWVudC5ib2R5KTsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgQnV0dG9uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkJ1dHRvblwiLFxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtjbGFzc05hbWU6IFwiYnV0dG9uLS1NQUlOXCJ9LCB0aGlzLnByb3BzLmxhYmVsKVxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJ1dHRvbjsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEFib3V0ID0gcmVxdWlyZSgnLi9BYm91dC5qc3gnKTtcblxudmFyIEhvbWUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiSG9tZVwiLFxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwibGF5b3V0LS1NQUlOXCJ9LCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiaGVhZGVyLS1NQUlOXCJ9LCBcIiBJIGFtIGEgZGV2ZWxvcGVyICYgZGVzaWduZXIuXCIpLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEFib3V0LCBudWxsKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhvbWU7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBMaW5rID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJykuTGluaztcblxudmFyIE5hdmlnYXRpb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiTmF2aWdhdGlvblwiLFxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibmF2XCIsIHtjbGFzc05hbWU6IFwibmF2LS1NQUlOXCJ9LCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge2NsYXNzTmFtZTogXCJuYXYtLW5hdi1saXN0XCJ9LCBcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtjbGFzc05hbWU6IFwibmF2LS1uYXYtbGlua1wifSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCIvXCJ9LCBcIkFCT1VUXCIpXG4gICAgICAgICAgICAgICAgICAgICksIFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2NsYXNzTmFtZTogXCJuYXYtLW5hdi1saW5rXCJ9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBcIi93b3JrXCJ9LCBcIldPUktcIilcbiAgICAgICAgICAgICAgICAgICAgKSwgXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7Y2xhc3NOYW1lOiBcIm5hdi0tbmF2LWxpbmtcIn0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiL3Jlc3VtZVwifSwgXCJSRVNVTUVcIilcbiAgICAgICAgICAgICAgICAgICAgKSwgXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7Y2xhc3NOYW1lOiBcIm5hdi0tbmF2LWxpbmtcIn0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IFwiaHR0cDovL3d3dy5lcmluZGVwZXcuY29tL2Jsb2dcIn0sIFwiQkxPR1wiKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5hdmlnYXRpb247IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBTZWN0aW9uID0gcmVxdWlyZSgnLi9TZWN0aW9uLmpzeCcpO1xudmFyIEJ1dHRvbiA9IHJlcXVpcmUgKCcuL0J1dHRvbi5qc3gnKTtcblxuXG52YXIgZXhwZXJpZW5jZSA9IFtcbiAgICB7aGVhZGVyOiAnQml0bHknLFxuICAgIHN1YmhlYWRlcjogJzIwMTUgLSBwcmVzZW50JyxcbiAgICBjb250ZW50OiAnYnJpZWYgZGVzY3JpcHRpb24nfSxcbiAgICB7aGVhZGVyOiAnQml0bHknLFxuICAgICAgICBzdWJoZWFkZXI6ICcyMDE1IC0gcHJlc2VudCcsXG4gICAgICAgIGNvbnRlbnQ6ICdicmllZiBkZXNjcmlwdGlvbid9XG5cbl07XG5cbnZhciBSZXN1bWUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiUmVzdW1lXCIsXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJsYXlvdXQtLUFMVEVSTkFURVwifSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImxheW91dC0tcHJpbWFyeS1zZWN0aW9uXCJ9LCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY3Rpb24sIHtoZWFkZXI6IFwiaGVhZGVyIHRleHRcIiwgc3ViaGVhZGVyOiBcInN1YmhlYWRlciB0ZXh0XCIsIGNvbnRlbnQ6IFwiY29udGVudCB0ZXh0XCJ9KVxuICAgICAgICAgICAgICAgICksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJsYXlvdXQtLXNlY29uZGF5LXNlY3Rpb25cIn0sIFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwge2xhYmVsOiBcImRvd25sb2FkIFBERlwifSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVzdW1lOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBTZWN0aW9uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlNlY3Rpb25cIixcblx0cmVuZGVyOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInNlY3Rpb24tLU1BSU5cIn0sIFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDNcIiwge2NsYXNzTmFtZTogXCJzZWN0aW9uLS1oZWFkZXJcIn0sIHRoaXMucHJvcHMuaGVhZGVyKSwgXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoNVwiLCB7Y2xhc3NOYW1lOiBcInNlY3Rpb24tLXN1YmhlYWRlclwifSwgdGhpcy5wcm9wcy5zdWJoZWFkZXIpLCBcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwge2NsYXNzTmFtZTogXCJzZWN0aW9uLS1jb250ZW50XCJ9LCB0aGlzLnByb3BzLmNvbnRlbnQpXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2VjdGlvbjsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgVGh1bWJuYWlsID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlRodW1ibmFpbFwiLFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwidGh1bWJuYWlsLS1NQUlOXCJ9LCBcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInRodW1ibmFpbC0tb3ZlcmxheVwifSwgdGhpcy5wcm9wcy50ZXh0KSwgXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgbnVsbClcblx0XHRcdClcblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUaHVtYm5haWw7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBUaHVtYm5haWwgPSByZXF1aXJlKCcuL1RodW1ibmFpbC5qc3gnKTtcblxudmFyIFdvcmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiV29ya1wiLFxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwibGF5b3V0LS1NQUlOXCJ9LCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRodW1ibmFpbCwge3RleHQ6IFwibGFiZWwgdGV4dFwifSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBXb3JrOyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgX3NsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuZXhwb3J0cy5sb29wQXN5bmMgPSBsb29wQXN5bmM7XG5leHBvcnRzLm1hcEFzeW5jID0gbWFwQXN5bmM7XG5cbmZ1bmN0aW9uIGxvb3BBc3luYyh0dXJucywgd29yaywgY2FsbGJhY2spIHtcbiAgdmFyIGN1cnJlbnRUdXJuID0gMCxcbiAgICAgIGlzRG9uZSA9IGZhbHNlO1xuICB2YXIgc3luYyA9IGZhbHNlLFxuICAgICAgaGFzTmV4dCA9IGZhbHNlLFxuICAgICAgZG9uZUFyZ3MgPSB1bmRlZmluZWQ7XG5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBpc0RvbmUgPSB0cnVlO1xuICAgIGlmIChzeW5jKSB7XG4gICAgICAvLyBJdGVyYXRlIGluc3RlYWQgb2YgcmVjdXJzaW5nIGlmIHBvc3NpYmxlLlxuICAgICAgZG9uZUFyZ3MgPSBbXS5jb25jYXQoX3NsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgaWYgKGlzRG9uZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGhhc05leHQgPSB0cnVlO1xuICAgIGlmIChzeW5jKSB7XG4gICAgICAvLyBJdGVyYXRlIGluc3RlYWQgb2YgcmVjdXJzaW5nIGlmIHBvc3NpYmxlLlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN5bmMgPSB0cnVlO1xuXG4gICAgd2hpbGUgKCFpc0RvbmUgJiYgY3VycmVudFR1cm4gPCB0dXJucyAmJiBoYXNOZXh0KSB7XG4gICAgICBoYXNOZXh0ID0gZmFsc2U7XG4gICAgICB3b3JrLmNhbGwodGhpcywgY3VycmVudFR1cm4rKywgbmV4dCwgZG9uZSk7XG4gICAgfVxuXG4gICAgc3luYyA9IGZhbHNlO1xuXG4gICAgaWYgKGlzRG9uZSkge1xuICAgICAgLy8gVGhpcyBtZWFucyB0aGUgbG9vcCBmaW5pc2hlZCBzeW5jaHJvbm91c2x5LlxuICAgICAgY2FsbGJhY2suYXBwbHkodGhpcywgZG9uZUFyZ3MpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjdXJyZW50VHVybiA+PSB0dXJucyAmJiBoYXNOZXh0KSB7XG4gICAgICBpc0RvbmUgPSB0cnVlO1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gIH1cblxuICBuZXh0KCk7XG59XG5cbmZ1bmN0aW9uIG1hcEFzeW5jKGFycmF5LCB3b3JrLCBjYWxsYmFjaykge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB2YXIgdmFsdWVzID0gW107XG5cbiAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuIGNhbGxiYWNrKG51bGwsIHZhbHVlcyk7XG5cbiAgdmFyIGlzRG9uZSA9IGZhbHNlLFxuICAgICAgZG9uZUNvdW50ID0gMDtcblxuICBmdW5jdGlvbiBkb25lKGluZGV4LCBlcnJvciwgdmFsdWUpIHtcbiAgICBpZiAoaXNEb25lKSByZXR1cm47XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGlzRG9uZSA9IHRydWU7XG4gICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcblxuICAgICAgaXNEb25lID0gKytkb25lQ291bnQgPT09IGxlbmd0aDtcblxuICAgICAgaWYgKGlzRG9uZSkgY2FsbGJhY2sobnVsbCwgdmFsdWVzKTtcbiAgICB9XG4gIH1cblxuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgIHdvcmsoaXRlbSwgaW5kZXgsIGZ1bmN0aW9uIChlcnJvciwgdmFsdWUpIHtcbiAgICAgIGRvbmUoaW5kZXgsIGVycm9yLCB2YWx1ZSk7XG4gICAgfSk7XG4gIH0pO1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JvdXRlcldhcm5pbmcgPSByZXF1aXJlKCcuL3JvdXRlcldhcm5pbmcnKTtcblxudmFyIF9yb3V0ZXJXYXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JvdXRlcldhcm5pbmcpO1xuXG52YXIgX1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vUHJvcFR5cGVzJyk7XG5cbi8qKlxuICogQSBtaXhpbiB0aGF0IGFkZHMgdGhlIFwiaGlzdG9yeVwiIGluc3RhbmNlIHZhcmlhYmxlIHRvIGNvbXBvbmVudHMuXG4gKi9cbnZhciBIaXN0b3J5ID0ge1xuXG4gIGNvbnRleHRUeXBlczoge1xuICAgIGhpc3Rvcnk6IF9Qcm9wVHlwZXMuaGlzdG9yeVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfcm91dGVyV2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgJ3RoZSBgSGlzdG9yeWAgbWl4aW4gaXMgZGVwcmVjYXRlZCwgcGxlYXNlIGFjY2VzcyBgY29udGV4dC5yb3V0ZXJgIHdpdGggeW91ciBvd24gYGNvbnRleHRUeXBlc2AuIGh0dHA6Ly90aW55LmNjL3JvdXRlci1oaXN0b3J5bWl4aW4nKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhpc3RvcnkgPSB0aGlzLmNvbnRleHQuaGlzdG9yeTtcbiAgfVxuXG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBIaXN0b3J5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9MaW5rID0gcmVxdWlyZSgnLi9MaW5rJyk7XG5cbnZhciBfTGluazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaW5rKTtcblxuLyoqXG4gKiBBbiA8SW5kZXhMaW5rPiBpcyB1c2VkIHRvIGxpbmsgdG8gYW4gPEluZGV4Um91dGU+LlxuICovXG52YXIgSW5kZXhMaW5rID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdJbmRleExpbmsnLFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfTGluazJbJ2RlZmF1bHQnXSwgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgb25seUFjdGl2ZU9uSW5kZXg6IHRydWUgfSkpO1xuICB9XG5cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBJbmRleExpbms7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JvdXRlcldhcm5pbmcgPSByZXF1aXJlKCcuL3JvdXRlcldhcm5pbmcnKTtcblxudmFyIF9yb3V0ZXJXYXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JvdXRlcldhcm5pbmcpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX1JlZGlyZWN0ID0gcmVxdWlyZSgnLi9SZWRpcmVjdCcpO1xuXG52YXIgX1JlZGlyZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JlZGlyZWN0KTtcblxudmFyIF9Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL1Byb3BUeXBlcycpO1xuXG52YXIgX1JlYWN0JFByb3BUeXBlcyA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXM7XG52YXIgc3RyaW5nID0gX1JlYWN0JFByb3BUeXBlcy5zdHJpbmc7XG52YXIgb2JqZWN0ID0gX1JlYWN0JFByb3BUeXBlcy5vYmplY3Q7XG5cbi8qKlxuICogQW4gPEluZGV4UmVkaXJlY3Q+IGlzIHVzZWQgdG8gcmVkaXJlY3QgZnJvbSBhbiBpbmRleFJvdXRlLlxuICovXG52YXIgSW5kZXhSZWRpcmVjdCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnSW5kZXhSZWRpcmVjdCcsXG5cbiAgc3RhdGljczoge1xuXG4gICAgY3JlYXRlUm91dGVGcm9tUmVhY3RFbGVtZW50OiBmdW5jdGlvbiBjcmVhdGVSb3V0ZUZyb21SZWFjdEVsZW1lbnQoZWxlbWVudCwgcGFyZW50Um91dGUpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlOiBzYW5pdHkgY2hlY2sgKi9cbiAgICAgIGlmIChwYXJlbnRSb3V0ZSkge1xuICAgICAgICBwYXJlbnRSb3V0ZS5pbmRleFJvdXRlID0gX1JlZGlyZWN0MlsnZGVmYXVsdCddLmNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudChlbGVtZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfcm91dGVyV2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgJ0FuIDxJbmRleFJlZGlyZWN0PiBkb2VzIG5vdCBtYWtlIHNlbnNlIGF0IHRoZSByb290IG9mIHlvdXIgcm91dGUgY29uZmlnJykgOiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gIH0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgdG86IHN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHF1ZXJ5OiBvYmplY3QsXG4gICAgc3RhdGU6IG9iamVjdCxcbiAgICBvbkVudGVyOiBfUHJvcFR5cGVzLmZhbHN5LFxuICAgIGNoaWxkcmVuOiBfUHJvcFR5cGVzLmZhbHN5XG4gIH0sXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IHNhbml0eSBjaGVjayAqL1xuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAhZmFsc2UgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSwgJzxJbmRleFJlZGlyZWN0PiBlbGVtZW50cyBhcmUgZm9yIHJvdXRlciBjb25maWd1cmF0aW9uIG9ubHkgYW5kIHNob3VsZCBub3QgYmUgcmVuZGVyZWQnKSA6IF9pbnZhcmlhbnQyWydkZWZhdWx0J10oZmFsc2UpIDogdW5kZWZpbmVkO1xuICB9XG5cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBJbmRleFJlZGlyZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yb3V0ZXJXYXJuaW5nID0gcmVxdWlyZSgnLi9yb3V0ZXJXYXJuaW5nJyk7XG5cbnZhciBfcm91dGVyV2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yb3V0ZXJXYXJuaW5nKTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9Sb3V0ZVV0aWxzID0gcmVxdWlyZSgnLi9Sb3V0ZVV0aWxzJyk7XG5cbnZhciBfUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9Qcm9wVHlwZXMnKTtcblxudmFyIGZ1bmMgPSBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmM7XG5cbi8qKlxuICogQW4gPEluZGV4Um91dGU+IGlzIHVzZWQgdG8gc3BlY2lmeSBpdHMgcGFyZW50J3MgPFJvdXRlIGluZGV4Um91dGU+IGluXG4gKiBhIEpTWCByb3V0ZSBjb25maWcuXG4gKi9cbnZhciBJbmRleFJvdXRlID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdJbmRleFJvdXRlJyxcblxuICBzdGF0aWNzOiB7XG5cbiAgICBjcmVhdGVSb3V0ZUZyb21SZWFjdEVsZW1lbnQ6IGZ1bmN0aW9uIGNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudChlbGVtZW50LCBwYXJlbnRSb3V0ZSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2U6IHNhbml0eSBjaGVjayAqL1xuICAgICAgaWYgKHBhcmVudFJvdXRlKSB7XG4gICAgICAgIHBhcmVudFJvdXRlLmluZGV4Um91dGUgPSBfUm91dGVVdGlscy5jcmVhdGVSb3V0ZUZyb21SZWFjdEVsZW1lbnQoZWxlbWVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3JvdXRlcldhcm5pbmcyWydkZWZhdWx0J10oZmFsc2UsICdBbiA8SW5kZXhSb3V0ZT4gZG9lcyBub3QgbWFrZSBzZW5zZSBhdCB0aGUgcm9vdCBvZiB5b3VyIHJvdXRlIGNvbmZpZycpIDogdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cblxuICB9LFxuXG4gIHByb3BUeXBlczoge1xuICAgIHBhdGg6IF9Qcm9wVHlwZXMuZmFsc3ksXG4gICAgY29tcG9uZW50OiBfUHJvcFR5cGVzLmNvbXBvbmVudCxcbiAgICBjb21wb25lbnRzOiBfUHJvcFR5cGVzLmNvbXBvbmVudHMsXG4gICAgZ2V0Q29tcG9uZW50OiBmdW5jLFxuICAgIGdldENvbXBvbmVudHM6IGZ1bmNcbiAgfSxcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogc2FuaXR5IGNoZWNrICovXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICFmYWxzZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlLCAnPEluZGV4Um91dGU+IGVsZW1lbnRzIGFyZSBmb3Igcm91dGVyIGNvbmZpZ3VyYXRpb24gb25seSBhbmQgc2hvdWxkIG5vdCBiZSByZW5kZXJlZCcpIDogX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSkgOiB1bmRlZmluZWQ7XG4gIH1cblxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEluZGV4Um91dGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yb3V0ZXJXYXJuaW5nID0gcmVxdWlyZSgnLi9yb3V0ZXJXYXJuaW5nJyk7XG5cbnZhciBfcm91dGVyV2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yb3V0ZXJXYXJuaW5nKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgb2JqZWN0ID0gX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vYmplY3Q7XG5cbi8qKlxuICogVGhlIExpZmVjeWNsZSBtaXhpbiBhZGRzIHRoZSByb3V0ZXJXaWxsTGVhdmUgbGlmZWN5Y2xlIG1ldGhvZCB0byBhXG4gKiBjb21wb25lbnQgdGhhdCBtYXkgYmUgdXNlZCB0byBjYW5jZWwgYSB0cmFuc2l0aW9uIG9yIHByb21wdCB0aGUgdXNlclxuICogZm9yIGNvbmZpcm1hdGlvbi5cbiAqXG4gKiBPbiBzdGFuZGFyZCB0cmFuc2l0aW9ucywgcm91dGVyV2lsbExlYXZlIHJlY2VpdmVzIGEgc2luZ2xlIGFyZ3VtZW50OiB0aGVcbiAqIGxvY2F0aW9uIHdlJ3JlIHRyYW5zaXRpb25pbmcgdG8uIFRvIGNhbmNlbCB0aGUgdHJhbnNpdGlvbiwgcmV0dXJuIGZhbHNlLlxuICogVG8gcHJvbXB0IHRoZSB1c2VyIGZvciBjb25maXJtYXRpb24sIHJldHVybiBhIHByb21wdCBtZXNzYWdlIChzdHJpbmcpLlxuICpcbiAqIER1cmluZyB0aGUgYmVmb3JldW5sb2FkIGV2ZW50IChhc3N1bWluZyB5b3UncmUgdXNpbmcgdGhlIHVzZUJlZm9yZVVubG9hZFxuICogaGlzdG9yeSBlbmhhbmNlciksIHJvdXRlcldpbGxMZWF2ZSBkb2VzIG5vdCByZWNlaXZlIGEgbG9jYXRpb24gb2JqZWN0XG4gKiBiZWNhdXNlIGl0IGlzbid0IHBvc3NpYmxlIGZvciB1cyB0byBrbm93IHRoZSBsb2NhdGlvbiB3ZSdyZSB0cmFuc2l0aW9uaW5nXG4gKiB0by4gSW4gdGhpcyBjYXNlIHJvdXRlcldpbGxMZWF2ZSBtdXN0IHJldHVybiBhIHByb21wdCBtZXNzYWdlIHRvIHByZXZlbnRcbiAqIHRoZSB1c2VyIGZyb20gY2xvc2luZyB0aGUgd2luZG93L3RhYi5cbiAqL1xudmFyIExpZmVjeWNsZSA9IHtcblxuICBjb250ZXh0VHlwZXM6IHtcbiAgICBoaXN0b3J5OiBvYmplY3QuaXNSZXF1aXJlZCxcbiAgICAvLyBOZXN0ZWQgY2hpbGRyZW4gcmVjZWl2ZSB0aGUgcm91dGUgYXMgY29udGV4dCwgZWl0aGVyXG4gICAgLy8gc2V0IGJ5IHRoZSByb3V0ZSBjb21wb25lbnQgdXNpbmcgdGhlIFJvdXRlQ29udGV4dCBtaXhpblxuICAgIC8vIG9yIGJ5IHNvbWUgb3RoZXIgYW5jZXN0b3IuXG4gICAgcm91dGU6IG9iamVjdFxuICB9LFxuXG4gIHByb3BUeXBlczoge1xuICAgIC8vIFJvdXRlIGNvbXBvbmVudHMgcmVjZWl2ZSB0aGUgcm91dGUgb2JqZWN0IGFzIGEgcHJvcC5cbiAgICByb3V0ZTogb2JqZWN0XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfcm91dGVyV2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgJ3RoZSBgTGlmZWN5Y2xlYCBtaXhpbiBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGBjb250ZXh0LnJvdXRlci5zZXRSb3V0ZUxlYXZlSG9vayhyb3V0ZSwgaG9vaylgLiBodHRwOi8vdGlueS5jYy9yb3V0ZXItbGlmZWN5Y2xlbWl4aW4nKSA6IHVuZGVmaW5lZDtcbiAgICAhdGhpcy5yb3V0ZXJXaWxsTGVhdmUgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSwgJ1RoZSBMaWZlY3ljbGUgbWl4aW4gcmVxdWlyZXMgeW91IHRvIGRlZmluZSBhIHJvdXRlcldpbGxMZWF2ZSBtZXRob2QnKSA6IF9pbnZhcmlhbnQyWydkZWZhdWx0J10oZmFsc2UpIDogdW5kZWZpbmVkO1xuXG4gICAgdmFyIHJvdXRlID0gdGhpcy5wcm9wcy5yb3V0ZSB8fCB0aGlzLmNvbnRleHQucm91dGU7XG5cbiAgICAhcm91dGUgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSwgJ1RoZSBMaWZlY3ljbGUgbWl4aW4gbXVzdCBiZSB1c2VkIG9uIGVpdGhlciBhKSBhIDxSb3V0ZSBjb21wb25lbnQ+IG9yICcgKyAnYikgYSBkZXNjZW5kYW50IG9mIGEgPFJvdXRlIGNvbXBvbmVudD4gdGhhdCB1c2VzIHRoZSBSb3V0ZUNvbnRleHQgbWl4aW4nKSA6IF9pbnZhcmlhbnQyWydkZWZhdWx0J10oZmFsc2UpIDogdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5fdW5saXN0ZW5CZWZvcmVMZWF2aW5nUm91dGUgPSB0aGlzLmNvbnRleHQuaGlzdG9yeS5saXN0ZW5CZWZvcmVMZWF2aW5nUm91dGUocm91dGUsIHRoaXMucm91dGVyV2lsbExlYXZlKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuX3VubGlzdGVuQmVmb3JlTGVhdmluZ1JvdXRlKSB0aGlzLl91bmxpc3RlbkJlZm9yZUxlYXZpbmdSb3V0ZSgpO1xuICB9XG5cbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IExpZmVjeWNsZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yb3V0ZXJXYXJuaW5nID0gcmVxdWlyZSgnLi9yb3V0ZXJXYXJuaW5nJyk7XG5cbnZhciBfcm91dGVyV2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yb3V0ZXJXYXJuaW5nKTtcblxudmFyIF9SZWFjdCRQcm9wVHlwZXMgPSBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzO1xudmFyIGJvb2wgPSBfUmVhY3QkUHJvcFR5cGVzLmJvb2w7XG52YXIgb2JqZWN0ID0gX1JlYWN0JFByb3BUeXBlcy5vYmplY3Q7XG52YXIgc3RyaW5nID0gX1JlYWN0JFByb3BUeXBlcy5zdHJpbmc7XG52YXIgZnVuYyA9IF9SZWFjdCRQcm9wVHlwZXMuZnVuYztcbnZhciBvbmVPZlR5cGUgPSBfUmVhY3QkUHJvcFR5cGVzLm9uZU9mVHlwZTtcblxuZnVuY3Rpb24gaXNMZWZ0Q2xpY2tFdmVudChldmVudCkge1xuICByZXR1cm4gZXZlbnQuYnV0dG9uID09PSAwO1xufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuICEhKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xufVxuXG5mdW5jdGlvbiBpc0VtcHR5T2JqZWN0KG9iamVjdCkge1xuICBmb3IgKHZhciBwIGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkocCkpIHJldHVybiBmYWxzZTtcbiAgfXJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2NhdGlvbkRlc2NyaXB0b3IodG8sIF9yZWYpIHtcbiAgdmFyIHF1ZXJ5ID0gX3JlZi5xdWVyeTtcbiAgdmFyIGhhc2ggPSBfcmVmLmhhc2g7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGU7XG5cbiAgaWYgKHF1ZXJ5IHx8IGhhc2ggfHwgc3RhdGUpIHtcbiAgICByZXR1cm4geyBwYXRobmFtZTogdG8sIHF1ZXJ5OiBxdWVyeSwgaGFzaDogaGFzaCwgc3RhdGU6IHN0YXRlIH07XG4gIH1cblxuICByZXR1cm4gdG87XG59XG5cbi8qKlxuICogQSA8TGluaz4gaXMgdXNlZCB0byBjcmVhdGUgYW4gPGE+IGVsZW1lbnQgdGhhdCBsaW5rcyB0byBhIHJvdXRlLlxuICogV2hlbiB0aGF0IHJvdXRlIGlzIGFjdGl2ZSwgdGhlIGxpbmsgZ2V0cyB0aGUgdmFsdWUgb2YgaXRzXG4gKiBhY3RpdmVDbGFzc05hbWUgcHJvcC5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgYXNzdW1pbmcgeW91IGhhdmUgdGhlIGZvbGxvd2luZyByb3V0ZTpcbiAqXG4gKiAgIDxSb3V0ZSBwYXRoPVwiL3Bvc3RzLzpwb3N0SURcIiBjb21wb25lbnQ9e1Bvc3R9IC8+XG4gKlxuICogWW91IGNvdWxkIHVzZSB0aGUgZm9sbG93aW5nIGNvbXBvbmVudCB0byBsaW5rIHRvIHRoYXQgcm91dGU6XG4gKlxuICogICA8TGluayB0bz17YC9wb3N0cy8ke3Bvc3QuaWR9YH0gLz5cbiAqXG4gKiBMaW5rcyBtYXkgcGFzcyBhbG9uZyBsb2NhdGlvbiBzdGF0ZSBhbmQvb3IgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnNcbiAqIGluIHRoZSBzdGF0ZS9xdWVyeSBwcm9wcywgcmVzcGVjdGl2ZWx5LlxuICpcbiAqICAgPExpbmsgLi4uIHF1ZXJ5PXt7IHNob3c6IHRydWUgfX0gc3RhdGU9e3sgdGhlOiAnc3RhdGUnIH19IC8+XG4gKi9cbnZhciBMaW5rID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdMaW5rJyxcblxuICBjb250ZXh0VHlwZXM6IHtcbiAgICByb3V0ZXI6IG9iamVjdFxuICB9LFxuXG4gIHByb3BUeXBlczoge1xuICAgIHRvOiBvbmVPZlR5cGUoW3N0cmluZywgb2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgICBxdWVyeTogb2JqZWN0LFxuICAgIGhhc2g6IHN0cmluZyxcbiAgICBzdGF0ZTogb2JqZWN0LFxuICAgIGFjdGl2ZVN0eWxlOiBvYmplY3QsXG4gICAgYWN0aXZlQ2xhc3NOYW1lOiBzdHJpbmcsXG4gICAgb25seUFjdGl2ZU9uSW5kZXg6IGJvb2wuaXNSZXF1aXJlZCxcbiAgICBvbkNsaWNrOiBmdW5jXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9ubHlBY3RpdmVPbkluZGV4OiBmYWxzZSxcbiAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICBzdHlsZToge31cbiAgICB9O1xuICB9LFxuXG4gIGhhbmRsZUNsaWNrOiBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xuICAgIHZhciBhbGxvd1RyYW5zaXRpb24gPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25DbGljaykgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcblxuICAgIGlmIChpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHx8ICFpc0xlZnRDbGlja0V2ZW50KGV2ZW50KSkgcmV0dXJuO1xuXG4gICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgPT09IHRydWUpIGFsbG93VHJhbnNpdGlvbiA9IGZhbHNlO1xuXG4gICAgLy8gSWYgdGFyZ2V0IHByb3AgaXMgc2V0IChlLmcuIHRvIFwiX2JsYW5rXCIpIGxldCBicm93c2VyIGhhbmRsZSBsaW5rLlxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZjogdW50ZXN0YWJsZSB3aXRoIEthcm1hICovXG4gICAgaWYgKHRoaXMucHJvcHMudGFyZ2V0KSB7XG4gICAgICBpZiAoIWFsbG93VHJhbnNpdGlvbikgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoYWxsb3dUcmFuc2l0aW9uKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciB0byA9IF9wcm9wcy50bztcbiAgICAgIHZhciBxdWVyeSA9IF9wcm9wcy5xdWVyeTtcbiAgICAgIHZhciBoYXNoID0gX3Byb3BzLmhhc2g7XG4gICAgICB2YXIgc3RhdGUgPSBfcHJvcHMuc3RhdGU7XG5cbiAgICAgIHZhciBfbG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbkRlc2NyaXB0b3IodG8sIHsgcXVlcnk6IHF1ZXJ5LCBoYXNoOiBoYXNoLCBzdGF0ZTogc3RhdGUgfSk7XG5cbiAgICAgIHRoaXMuY29udGV4dC5yb3V0ZXIucHVzaChfbG9jYXRpb24pO1xuICAgIH1cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHRvID0gX3Byb3BzMi50bztcbiAgICB2YXIgcXVlcnkgPSBfcHJvcHMyLnF1ZXJ5O1xuICAgIHZhciBoYXNoID0gX3Byb3BzMi5oYXNoO1xuICAgIHZhciBzdGF0ZSA9IF9wcm9wczIuc3RhdGU7XG4gICAgdmFyIGFjdGl2ZUNsYXNzTmFtZSA9IF9wcm9wczIuYWN0aXZlQ2xhc3NOYW1lO1xuICAgIHZhciBhY3RpdmVTdHlsZSA9IF9wcm9wczIuYWN0aXZlU3R5bGU7XG4gICAgdmFyIG9ubHlBY3RpdmVPbkluZGV4ID0gX3Byb3BzMi5vbmx5QWN0aXZlT25JbmRleDtcblxuICAgIHZhciBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMyLCBbJ3RvJywgJ3F1ZXJ5JywgJ2hhc2gnLCAnc3RhdGUnLCAnYWN0aXZlQ2xhc3NOYW1lJywgJ2FjdGl2ZVN0eWxlJywgJ29ubHlBY3RpdmVPbkluZGV4J10pO1xuXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF9yb3V0ZXJXYXJuaW5nMlsnZGVmYXVsdCddKCEocXVlcnkgfHwgaGFzaCB8fCBzdGF0ZSksICd0aGUgYHF1ZXJ5YCwgYGhhc2hgLCBhbmQgYHN0YXRlYCBwcm9wcyBvbiBgPExpbms+YCBhcmUgZGVwcmVjYXRlZCwgdXNlIGA8TGluayB0bz17eyBwYXRobmFtZSwgcXVlcnksIGhhc2gsIHN0YXRlIH19Lz4uIGh0dHA6Ly90aW55LmNjL3JvdXRlci1pc0FjdGl2ZWRlcHJlY2F0ZWQnKSA6IHVuZGVmaW5lZDtcblxuICAgIC8vIElnbm9yZSBpZiByZW5kZXJlZCBvdXRzaWRlIHRoZSBjb250ZXh0IG9mIHJvdXRlciwgc2ltcGxpZmllcyB1bml0IHRlc3RpbmcuXG4gICAgdmFyIHJvdXRlciA9IHRoaXMuY29udGV4dC5yb3V0ZXI7XG5cbiAgICBpZiAocm91dGVyKSB7XG4gICAgICB2YXIgX2xvY2F0aW9uMiA9IGNyZWF0ZUxvY2F0aW9uRGVzY3JpcHRvcih0bywgeyBxdWVyeTogcXVlcnksIGhhc2g6IGhhc2gsIHN0YXRlOiBzdGF0ZSB9KTtcbiAgICAgIHByb3BzLmhyZWYgPSByb3V0ZXIuY3JlYXRlSHJlZihfbG9jYXRpb24yKTtcblxuICAgICAgaWYgKGFjdGl2ZUNsYXNzTmFtZSB8fCBhY3RpdmVTdHlsZSAhPSBudWxsICYmICFpc0VtcHR5T2JqZWN0KGFjdGl2ZVN0eWxlKSkge1xuICAgICAgICBpZiAocm91dGVyLmlzQWN0aXZlKF9sb2NhdGlvbjIsIG9ubHlBY3RpdmVPbkluZGV4KSkge1xuICAgICAgICAgIGlmIChhY3RpdmVDbGFzc05hbWUpIHByb3BzLmNsYXNzTmFtZSArPSBwcm9wcy5jbGFzc05hbWUgPT09ICcnID8gYWN0aXZlQ2xhc3NOYW1lIDogJyAnICsgYWN0aXZlQ2xhc3NOYW1lO1xuXG4gICAgICAgICAgaWYgKGFjdGl2ZVN0eWxlKSBwcm9wcy5zdHlsZSA9IF9leHRlbmRzKHt9LCBwcm9wcy5zdHlsZSwgYWN0aXZlU3R5bGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdhJywgX2V4dGVuZHMoe30sIHByb3BzLCB7IG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2sgfSkpO1xuICB9XG5cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBMaW5rO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jb21waWxlUGF0dGVybiA9IGNvbXBpbGVQYXR0ZXJuO1xuZXhwb3J0cy5tYXRjaFBhdHRlcm4gPSBtYXRjaFBhdHRlcm47XG5leHBvcnRzLmdldFBhcmFtTmFtZXMgPSBnZXRQYXJhbU5hbWVzO1xuZXhwb3J0cy5nZXRQYXJhbXMgPSBnZXRQYXJhbXM7XG5leHBvcnRzLmZvcm1hdFBhdHRlcm4gPSBmb3JtYXRQYXR0ZXJuO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbmZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpO1xufVxuXG5mdW5jdGlvbiBlc2NhcGVTb3VyY2Uoc3RyaW5nKSB7XG4gIHJldHVybiBlc2NhcGVSZWdFeHAoc3RyaW5nKS5yZXBsYWNlKC9cXC8rL2csICcvKycpO1xufVxuXG5mdW5jdGlvbiBfY29tcGlsZVBhdHRlcm4ocGF0dGVybikge1xuICB2YXIgcmVnZXhwU291cmNlID0gJyc7XG4gIHZhciBwYXJhbU5hbWVzID0gW107XG4gIHZhciB0b2tlbnMgPSBbXTtcblxuICB2YXIgbWF0Y2ggPSB1bmRlZmluZWQsXG4gICAgICBsYXN0SW5kZXggPSAwLFxuICAgICAgbWF0Y2hlciA9IC86KFthLXpBLVpfJF1bYS16QS1aMC05XyRdKil8XFwqXFwqfFxcKnxcXCh8XFwpL2c7XG4gIHdoaWxlIChtYXRjaCA9IG1hdGNoZXIuZXhlYyhwYXR0ZXJuKSkge1xuICAgIGlmIChtYXRjaC5pbmRleCAhPT0gbGFzdEluZGV4KSB7XG4gICAgICB0b2tlbnMucHVzaChwYXR0ZXJuLnNsaWNlKGxhc3RJbmRleCwgbWF0Y2guaW5kZXgpKTtcbiAgICAgIHJlZ2V4cFNvdXJjZSArPSBlc2NhcGVTb3VyY2UocGF0dGVybi5zbGljZShsYXN0SW5kZXgsIG1hdGNoLmluZGV4KSk7XG4gICAgfVxuXG4gICAgaWYgKG1hdGNoWzFdKSB7XG4gICAgICByZWdleHBTb3VyY2UgKz0gJyhbXi8/I10rKSc7XG4gICAgICBwYXJhbU5hbWVzLnB1c2gobWF0Y2hbMV0pO1xuICAgIH0gZWxzZSBpZiAobWF0Y2hbMF0gPT09ICcqKicpIHtcbiAgICAgIHJlZ2V4cFNvdXJjZSArPSAnKFtcXFxcc1xcXFxTXSopJztcbiAgICAgIHBhcmFtTmFtZXMucHVzaCgnc3BsYXQnKTtcbiAgICB9IGVsc2UgaWYgKG1hdGNoWzBdID09PSAnKicpIHtcbiAgICAgIHJlZ2V4cFNvdXJjZSArPSAnKFtcXFxcc1xcXFxTXSo/KSc7XG4gICAgICBwYXJhbU5hbWVzLnB1c2goJ3NwbGF0Jyk7XG4gICAgfSBlbHNlIGlmIChtYXRjaFswXSA9PT0gJygnKSB7XG4gICAgICByZWdleHBTb3VyY2UgKz0gJyg/Oic7XG4gICAgfSBlbHNlIGlmIChtYXRjaFswXSA9PT0gJyknKSB7XG4gICAgICByZWdleHBTb3VyY2UgKz0gJyk/JztcbiAgICB9XG5cbiAgICB0b2tlbnMucHVzaChtYXRjaFswXSk7XG5cbiAgICBsYXN0SW5kZXggPSBtYXRjaGVyLmxhc3RJbmRleDtcbiAgfVxuXG4gIGlmIChsYXN0SW5kZXggIT09IHBhdHRlcm4ubGVuZ3RoKSB7XG4gICAgdG9rZW5zLnB1c2gocGF0dGVybi5zbGljZShsYXN0SW5kZXgsIHBhdHRlcm4ubGVuZ3RoKSk7XG4gICAgcmVnZXhwU291cmNlICs9IGVzY2FwZVNvdXJjZShwYXR0ZXJuLnNsaWNlKGxhc3RJbmRleCwgcGF0dGVybi5sZW5ndGgpKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGF0dGVybjogcGF0dGVybixcbiAgICByZWdleHBTb3VyY2U6IHJlZ2V4cFNvdXJjZSxcbiAgICBwYXJhbU5hbWVzOiBwYXJhbU5hbWVzLFxuICAgIHRva2VuczogdG9rZW5zXG4gIH07XG59XG5cbnZhciBDb21waWxlZFBhdHRlcm5zQ2FjaGUgPSB7fTtcblxuZnVuY3Rpb24gY29tcGlsZVBhdHRlcm4ocGF0dGVybikge1xuICBpZiAoIShwYXR0ZXJuIGluIENvbXBpbGVkUGF0dGVybnNDYWNoZSkpIENvbXBpbGVkUGF0dGVybnNDYWNoZVtwYXR0ZXJuXSA9IF9jb21waWxlUGF0dGVybihwYXR0ZXJuKTtcblxuICByZXR1cm4gQ29tcGlsZWRQYXR0ZXJuc0NhY2hlW3BhdHRlcm5dO1xufVxuXG4vKipcbiAqIEF0dGVtcHRzIHRvIG1hdGNoIGEgcGF0dGVybiBvbiB0aGUgZ2l2ZW4gcGF0aG5hbWUuIFBhdHRlcm5zIG1heSB1c2VcbiAqIHRoZSBmb2xsb3dpbmcgc3BlY2lhbCBjaGFyYWN0ZXJzOlxuICpcbiAqIC0gOnBhcmFtTmFtZSAgICAgTWF0Y2hlcyBhIFVSTCBzZWdtZW50IHVwIHRvIHRoZSBuZXh0IC8sID8sIG9yICMuIFRoZVxuICogICAgICAgICAgICAgICAgICBjYXB0dXJlZCBzdHJpbmcgaXMgY29uc2lkZXJlZCBhIFwicGFyYW1cIlxuICogLSAoKSAgICAgICAgICAgICBXcmFwcyBhIHNlZ21lbnQgb2YgdGhlIFVSTCB0aGF0IGlzIG9wdGlvbmFsXG4gKiAtICogICAgICAgICAgICAgIENvbnN1bWVzIChub24tZ3JlZWR5KSBhbGwgY2hhcmFjdGVycyB1cCB0byB0aGUgbmV4dFxuICogICAgICAgICAgICAgICAgICBjaGFyYWN0ZXIgaW4gdGhlIHBhdHRlcm4sIG9yIHRvIHRoZSBlbmQgb2YgdGhlIFVSTCBpZlxuICogICAgICAgICAgICAgICAgICB0aGVyZSBpcyBub25lXG4gKiAtICoqICAgICAgICAgICAgIENvbnN1bWVzIChncmVlZHkpIGFsbCBjaGFyYWN0ZXJzIHVwIHRvIHRoZSBuZXh0IGNoYXJhY3RlclxuICogICAgICAgICAgICAgICAgICBpbiB0aGUgcGF0dGVybiwgb3IgdG8gdGhlIGVuZCBvZiB0aGUgVVJMIGlmIHRoZXJlIGlzIG5vbmVcbiAqXG4gKiBUaGUgcmV0dXJuIHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqXG4gKiAtIHJlbWFpbmluZ1BhdGhuYW1lXG4gKiAtIHBhcmFtTmFtZXNcbiAqIC0gcGFyYW1WYWx1ZXNcbiAqL1xuXG5mdW5jdGlvbiBtYXRjaFBhdHRlcm4ocGF0dGVybiwgcGF0aG5hbWUpIHtcbiAgLy8gTWFrZSBsZWFkaW5nIHNsYXNoZXMgY29uc2lzdGVudCBiZXR3ZWVuIHBhdHRlcm4gYW5kIHBhdGhuYW1lLlxuICBpZiAocGF0dGVybi5jaGFyQXQoMCkgIT09ICcvJykge1xuICAgIHBhdHRlcm4gPSAnLycgKyBwYXR0ZXJuO1xuICB9XG4gIGlmIChwYXRobmFtZS5jaGFyQXQoMCkgIT09ICcvJykge1xuICAgIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWU7XG4gIH1cblxuICB2YXIgX2NvbXBpbGVQYXR0ZXJuMiA9IGNvbXBpbGVQYXR0ZXJuKHBhdHRlcm4pO1xuXG4gIHZhciByZWdleHBTb3VyY2UgPSBfY29tcGlsZVBhdHRlcm4yLnJlZ2V4cFNvdXJjZTtcbiAgdmFyIHBhcmFtTmFtZXMgPSBfY29tcGlsZVBhdHRlcm4yLnBhcmFtTmFtZXM7XG4gIHZhciB0b2tlbnMgPSBfY29tcGlsZVBhdHRlcm4yLnRva2VucztcblxuICByZWdleHBTb3VyY2UgKz0gJy8qJzsgLy8gQ2FwdHVyZSBwYXRoIHNlcGFyYXRvcnNcblxuICAvLyBTcGVjaWFsLWNhc2UgcGF0dGVybnMgbGlrZSAnKicgZm9yIGNhdGNoLWFsbCByb3V0ZXMuXG4gIHZhciBjYXB0dXJlUmVtYWluaW5nID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXSAhPT0gJyonO1xuXG4gIGlmIChjYXB0dXJlUmVtYWluaW5nKSB7XG4gICAgLy8gVGhpcyB3aWxsIG1hdGNoIG5ld2xpbmVzIGluIHRoZSByZW1haW5pbmcgcGF0aC5cbiAgICByZWdleHBTb3VyY2UgKz0gJyhbXFxcXHNcXFxcU10qPyknO1xuICB9XG5cbiAgdmFyIG1hdGNoID0gcGF0aG5hbWUubWF0Y2gobmV3IFJlZ0V4cCgnXicgKyByZWdleHBTb3VyY2UgKyAnJCcsICdpJykpO1xuXG4gIHZhciByZW1haW5pbmdQYXRobmFtZSA9IHVuZGVmaW5lZCxcbiAgICAgIHBhcmFtVmFsdWVzID0gdW5kZWZpbmVkO1xuICBpZiAobWF0Y2ggIT0gbnVsbCkge1xuICAgIGlmIChjYXB0dXJlUmVtYWluaW5nKSB7XG4gICAgICByZW1haW5pbmdQYXRobmFtZSA9IG1hdGNoLnBvcCgpO1xuICAgICAgdmFyIG1hdGNoZWRQYXRoID0gbWF0Y2hbMF0uc3Vic3RyKDAsIG1hdGNoWzBdLmxlbmd0aCAtIHJlbWFpbmluZ1BhdGhuYW1lLmxlbmd0aCk7XG5cbiAgICAgIC8vIElmIHdlIGRpZG4ndCBtYXRjaCB0aGUgZW50aXJlIHBhdGhuYW1lLCB0aGVuIG1ha2Ugc3VyZSB0aGF0IHRoZSBtYXRjaFxuICAgICAgLy8gd2UgZGlkIGdldCBlbmRzIGF0IGEgcGF0aCBzZXBhcmF0b3IgKHBvdGVudGlhbGx5IHRoZSBvbmUgd2UgYWRkZWRcbiAgICAgIC8vIGFib3ZlIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIHBhdGgsIGlmIHRoZSBhY3R1YWwgbWF0Y2ggd2FzIGVtcHR5KS5cbiAgICAgIGlmIChyZW1haW5pbmdQYXRobmFtZSAmJiBtYXRjaGVkUGF0aC5jaGFyQXQobWF0Y2hlZFBhdGgubGVuZ3RoIC0gMSkgIT09ICcvJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHJlbWFpbmluZ1BhdGhuYW1lOiBudWxsLFxuICAgICAgICAgIHBhcmFtTmFtZXM6IHBhcmFtTmFtZXMsXG4gICAgICAgICAgcGFyYW1WYWx1ZXM6IG51bGxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhpcyBtYXRjaGVkIGF0IGFsbCwgdGhlbiB0aGUgbWF0Y2ggd2FzIHRoZSBlbnRpcmUgcGF0aG5hbWUuXG4gICAgICByZW1haW5pbmdQYXRobmFtZSA9ICcnO1xuICAgIH1cblxuICAgIHBhcmFtVmFsdWVzID0gbWF0Y2guc2xpY2UoMSkubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gdiAhPSBudWxsID8gZGVjb2RlVVJJQ29tcG9uZW50KHYpIDogdjtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZW1haW5pbmdQYXRobmFtZSA9IHBhcmFtVmFsdWVzID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVtYWluaW5nUGF0aG5hbWU6IHJlbWFpbmluZ1BhdGhuYW1lLFxuICAgIHBhcmFtTmFtZXM6IHBhcmFtTmFtZXMsXG4gICAgcGFyYW1WYWx1ZXM6IHBhcmFtVmFsdWVzXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFBhcmFtTmFtZXMocGF0dGVybikge1xuICByZXR1cm4gY29tcGlsZVBhdHRlcm4ocGF0dGVybikucGFyYW1OYW1lcztcbn1cblxuZnVuY3Rpb24gZ2V0UGFyYW1zKHBhdHRlcm4sIHBhdGhuYW1lKSB7XG4gIHZhciBfbWF0Y2hQYXR0ZXJuID0gbWF0Y2hQYXR0ZXJuKHBhdHRlcm4sIHBhdGhuYW1lKTtcblxuICB2YXIgcGFyYW1OYW1lcyA9IF9tYXRjaFBhdHRlcm4ucGFyYW1OYW1lcztcbiAgdmFyIHBhcmFtVmFsdWVzID0gX21hdGNoUGF0dGVybi5wYXJhbVZhbHVlcztcblxuICBpZiAocGFyYW1WYWx1ZXMgIT0gbnVsbCkge1xuICAgIHJldHVybiBwYXJhbU5hbWVzLnJlZHVjZShmdW5jdGlvbiAobWVtbywgcGFyYW1OYW1lLCBpbmRleCkge1xuICAgICAgbWVtb1twYXJhbU5hbWVdID0gcGFyYW1WYWx1ZXNbaW5kZXhdO1xuICAgICAgcmV0dXJuIG1lbW87XG4gICAgfSwge30pO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHZlcnNpb24gb2YgdGhlIGdpdmVuIHBhdHRlcm4gd2l0aCBwYXJhbXMgaW50ZXJwb2xhdGVkLiBUaHJvd3NcbiAqIGlmIHRoZXJlIGlzIGEgZHluYW1pYyBzZWdtZW50IG9mIHRoZSBwYXR0ZXJuIGZvciB3aGljaCB0aGVyZSBpcyBubyBwYXJhbS5cbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRQYXR0ZXJuKHBhdHRlcm4sIHBhcmFtcykge1xuICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG5cbiAgdmFyIF9jb21waWxlUGF0dGVybjMgPSBjb21waWxlUGF0dGVybihwYXR0ZXJuKTtcblxuICB2YXIgdG9rZW5zID0gX2NvbXBpbGVQYXR0ZXJuMy50b2tlbnM7XG5cbiAgdmFyIHBhcmVuQ291bnQgPSAwLFxuICAgICAgcGF0aG5hbWUgPSAnJyxcbiAgICAgIHNwbGF0SW5kZXggPSAwO1xuXG4gIHZhciB0b2tlbiA9IHVuZGVmaW5lZCxcbiAgICAgIHBhcmFtTmFtZSA9IHVuZGVmaW5lZCxcbiAgICAgIHBhcmFtVmFsdWUgPSB1bmRlZmluZWQ7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0b2tlbnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICB0b2tlbiA9IHRva2Vuc1tpXTtcblxuICAgIGlmICh0b2tlbiA9PT0gJyonIHx8IHRva2VuID09PSAnKionKSB7XG4gICAgICBwYXJhbVZhbHVlID0gQXJyYXkuaXNBcnJheShwYXJhbXMuc3BsYXQpID8gcGFyYW1zLnNwbGF0W3NwbGF0SW5kZXgrK10gOiBwYXJhbXMuc3BsYXQ7XG5cbiAgICAgICEocGFyYW1WYWx1ZSAhPSBudWxsIHx8IHBhcmVuQ291bnQgPiAwKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlLCAnTWlzc2luZyBzcGxhdCAjJXMgZm9yIHBhdGggXCIlc1wiJywgc3BsYXRJbmRleCwgcGF0dGVybikgOiBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlKSA6IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHBhcmFtVmFsdWUgIT0gbnVsbCkgcGF0aG5hbWUgKz0gZW5jb2RlVVJJKHBhcmFtVmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodG9rZW4gPT09ICcoJykge1xuICAgICAgcGFyZW5Db3VudCArPSAxO1xuICAgIH0gZWxzZSBpZiAodG9rZW4gPT09ICcpJykge1xuICAgICAgcGFyZW5Db3VudCAtPSAxO1xuICAgIH0gZWxzZSBpZiAodG9rZW4uY2hhckF0KDApID09PSAnOicpIHtcbiAgICAgIHBhcmFtTmFtZSA9IHRva2VuLnN1YnN0cmluZygxKTtcbiAgICAgIHBhcmFtVmFsdWUgPSBwYXJhbXNbcGFyYW1OYW1lXTtcblxuICAgICAgIShwYXJhbVZhbHVlICE9IG51bGwgfHwgcGFyZW5Db3VudCA+IDApID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF9pbnZhcmlhbnQyWydkZWZhdWx0J10oZmFsc2UsICdNaXNzaW5nIFwiJXNcIiBwYXJhbWV0ZXIgZm9yIHBhdGggXCIlc1wiJywgcGFyYW1OYW1lLCBwYXR0ZXJuKSA6IF9pbnZhcmlhbnQyWydkZWZhdWx0J10oZmFsc2UpIDogdW5kZWZpbmVkO1xuXG4gICAgICBpZiAocGFyYW1WYWx1ZSAhPSBudWxsKSBwYXRobmFtZSArPSBlbmNvZGVVUklDb21wb25lbnQocGFyYW1WYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdGhuYW1lICs9IHRva2VuO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXRobmFtZS5yZXBsYWNlKC9cXC8rL2csICcvJyk7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5mYWxzeSA9IGZhbHN5O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIGZ1bmMgPSBfcmVhY3QuUHJvcFR5cGVzLmZ1bmM7XG52YXIgb2JqZWN0ID0gX3JlYWN0LlByb3BUeXBlcy5vYmplY3Q7XG52YXIgYXJyYXlPZiA9IF9yZWFjdC5Qcm9wVHlwZXMuYXJyYXlPZjtcbnZhciBvbmVPZlR5cGUgPSBfcmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZTtcbnZhciBlbGVtZW50ID0gX3JlYWN0LlByb3BUeXBlcy5lbGVtZW50O1xudmFyIHNoYXBlID0gX3JlYWN0LlByb3BUeXBlcy5zaGFwZTtcbnZhciBzdHJpbmcgPSBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZztcblxuZnVuY3Rpb24gZmFsc3kocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIGlmIChwcm9wc1twcm9wTmFtZV0pIHJldHVybiBuZXcgRXJyb3IoJzwnICsgY29tcG9uZW50TmFtZSArICc+IHNob3VsZCBub3QgaGF2ZSBhIFwiJyArIHByb3BOYW1lICsgJ1wiIHByb3AnKTtcbn1cblxudmFyIGhpc3RvcnkgPSBzaGFwZSh7XG4gIGxpc3RlbjogZnVuYy5pc1JlcXVpcmVkLFxuICBwdXNoU3RhdGU6IGZ1bmMuaXNSZXF1aXJlZCxcbiAgcmVwbGFjZVN0YXRlOiBmdW5jLmlzUmVxdWlyZWQsXG4gIGdvOiBmdW5jLmlzUmVxdWlyZWRcbn0pO1xuXG5leHBvcnRzLmhpc3RvcnkgPSBoaXN0b3J5O1xudmFyIGxvY2F0aW9uID0gc2hhcGUoe1xuICBwYXRobmFtZTogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHNlYXJjaDogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHN0YXRlOiBvYmplY3QsXG4gIGFjdGlvbjogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGtleTogc3RyaW5nXG59KTtcblxuZXhwb3J0cy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xudmFyIGNvbXBvbmVudCA9IG9uZU9mVHlwZShbZnVuYywgc3RyaW5nXSk7XG5leHBvcnRzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbnZhciBjb21wb25lbnRzID0gb25lT2ZUeXBlKFtjb21wb25lbnQsIG9iamVjdF0pO1xuZXhwb3J0cy5jb21wb25lbnRzID0gY29tcG9uZW50cztcbnZhciByb3V0ZSA9IG9uZU9mVHlwZShbb2JqZWN0LCBlbGVtZW50XSk7XG5leHBvcnRzLnJvdXRlID0gcm91dGU7XG52YXIgcm91dGVzID0gb25lT2ZUeXBlKFtyb3V0ZSwgYXJyYXlPZihyb3V0ZSldKTtcblxuZXhwb3J0cy5yb3V0ZXMgPSByb3V0ZXM7XG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gIGZhbHN5OiBmYWxzeSxcbiAgaGlzdG9yeTogaGlzdG9yeSxcbiAgbG9jYXRpb246IGxvY2F0aW9uLFxuICBjb21wb25lbnQ6IGNvbXBvbmVudCxcbiAgY29tcG9uZW50czogY29tcG9uZW50cyxcbiAgcm91dGU6IHJvdXRlXG59OyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfUm91dGVVdGlscyA9IHJlcXVpcmUoJy4vUm91dGVVdGlscycpO1xuXG52YXIgX1BhdHRlcm5VdGlscyA9IHJlcXVpcmUoJy4vUGF0dGVyblV0aWxzJyk7XG5cbnZhciBfUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9Qcm9wVHlwZXMnKTtcblxudmFyIF9SZWFjdCRQcm9wVHlwZXMgPSBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzO1xudmFyIHN0cmluZyA9IF9SZWFjdCRQcm9wVHlwZXMuc3RyaW5nO1xudmFyIG9iamVjdCA9IF9SZWFjdCRQcm9wVHlwZXMub2JqZWN0O1xuXG4vKipcbiAqIEEgPFJlZGlyZWN0PiBpcyB1c2VkIHRvIGRlY2xhcmUgYW5vdGhlciBVUkwgcGF0aCBhIGNsaWVudCBzaG91bGRcbiAqIGJlIHNlbnQgdG8gd2hlbiB0aGV5IHJlcXVlc3QgYSBnaXZlbiBVUkwuXG4gKlxuICogUmVkaXJlY3RzIGFyZSBwbGFjZWQgYWxvbmdzaWRlIHJvdXRlcyBpbiB0aGUgcm91dGUgY29uZmlndXJhdGlvblxuICogYW5kIGFyZSB0cmF2ZXJzZWQgaW4gdGhlIHNhbWUgbWFubmVyLlxuICovXG52YXIgUmVkaXJlY3QgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1JlZGlyZWN0JyxcblxuICBzdGF0aWNzOiB7XG5cbiAgICBjcmVhdGVSb3V0ZUZyb21SZWFjdEVsZW1lbnQ6IGZ1bmN0aW9uIGNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudChlbGVtZW50KSB7XG4gICAgICB2YXIgcm91dGUgPSBfUm91dGVVdGlscy5jcmVhdGVSb3V0ZUZyb21SZWFjdEVsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgIGlmIChyb3V0ZS5mcm9tKSByb3V0ZS5wYXRoID0gcm91dGUuZnJvbTtcblxuICAgICAgcm91dGUub25FbnRlciA9IGZ1bmN0aW9uIChuZXh0U3RhdGUsIHJlcGxhY2UpIHtcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gbmV4dFN0YXRlLmxvY2F0aW9uO1xuICAgICAgICB2YXIgcGFyYW1zID0gbmV4dFN0YXRlLnBhcmFtcztcblxuICAgICAgICB2YXIgcGF0aG5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChyb3V0ZS50by5jaGFyQXQoMCkgPT09ICcvJykge1xuICAgICAgICAgIHBhdGhuYW1lID0gX1BhdHRlcm5VdGlscy5mb3JtYXRQYXR0ZXJuKHJvdXRlLnRvLCBwYXJhbXMpO1xuICAgICAgICB9IGVsc2UgaWYgKCFyb3V0ZS50bykge1xuICAgICAgICAgIHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHJvdXRlSW5kZXggPSBuZXh0U3RhdGUucm91dGVzLmluZGV4T2Yocm91dGUpO1xuICAgICAgICAgIHZhciBwYXJlbnRQYXR0ZXJuID0gUmVkaXJlY3QuZ2V0Um91dGVQYXR0ZXJuKG5leHRTdGF0ZS5yb3V0ZXMsIHJvdXRlSW5kZXggLSAxKTtcbiAgICAgICAgICB2YXIgcGF0dGVybiA9IHBhcmVudFBhdHRlcm4ucmVwbGFjZSgvXFwvKiQvLCAnLycpICsgcm91dGUudG87XG4gICAgICAgICAgcGF0aG5hbWUgPSBfUGF0dGVyblV0aWxzLmZvcm1hdFBhdHRlcm4ocGF0dGVybiwgcGFyYW1zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcGxhY2Uoe1xuICAgICAgICAgIHBhdGhuYW1lOiBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeTogcm91dGUucXVlcnkgfHwgbG9jYXRpb24ucXVlcnksXG4gICAgICAgICAgc3RhdGU6IHJvdXRlLnN0YXRlIHx8IGxvY2F0aW9uLnN0YXRlXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHJvdXRlO1xuICAgIH0sXG5cbiAgICBnZXRSb3V0ZVBhdHRlcm46IGZ1bmN0aW9uIGdldFJvdXRlUGF0dGVybihyb3V0ZXMsIHJvdXRlSW5kZXgpIHtcbiAgICAgIHZhciBwYXJlbnRQYXR0ZXJuID0gJyc7XG5cbiAgICAgIGZvciAodmFyIGkgPSByb3V0ZUluZGV4OyBpID49IDA7IGktLSkge1xuICAgICAgICB2YXIgcm91dGUgPSByb3V0ZXNbaV07XG4gICAgICAgIHZhciBwYXR0ZXJuID0gcm91dGUucGF0aCB8fCAnJztcblxuICAgICAgICBwYXJlbnRQYXR0ZXJuID0gcGF0dGVybi5yZXBsYWNlKC9cXC8qJC8sICcvJykgKyBwYXJlbnRQYXR0ZXJuO1xuXG4gICAgICAgIGlmIChwYXR0ZXJuLmluZGV4T2YoJy8nKSA9PT0gMCkgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAnLycgKyBwYXJlbnRQYXR0ZXJuO1xuICAgIH1cblxuICB9LFxuXG4gIHByb3BUeXBlczoge1xuICAgIHBhdGg6IHN0cmluZyxcbiAgICBmcm9tOiBzdHJpbmcsIC8vIEFsaWFzIGZvciBwYXRoXG4gICAgdG86IHN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHF1ZXJ5OiBvYmplY3QsXG4gICAgc3RhdGU6IG9iamVjdCxcbiAgICBvbkVudGVyOiBfUHJvcFR5cGVzLmZhbHN5LFxuICAgIGNoaWxkcmVuOiBfUHJvcFR5cGVzLmZhbHN5XG4gIH0sXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IHNhbml0eSBjaGVjayAqL1xuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAhZmFsc2UgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSwgJzxSZWRpcmVjdD4gZWxlbWVudHMgYXJlIGZvciByb3V0ZXIgY29uZmlndXJhdGlvbiBvbmx5IGFuZCBzaG91bGQgbm90IGJlIHJlbmRlcmVkJykgOiBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlKSA6IHVuZGVmaW5lZDtcbiAgfVxuXG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gUmVkaXJlY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX1JvdXRlVXRpbHMgPSByZXF1aXJlKCcuL1JvdXRlVXRpbHMnKTtcblxudmFyIF9Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL1Byb3BUeXBlcycpO1xuXG52YXIgX1JlYWN0JFByb3BUeXBlcyA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXM7XG52YXIgc3RyaW5nID0gX1JlYWN0JFByb3BUeXBlcy5zdHJpbmc7XG52YXIgZnVuYyA9IF9SZWFjdCRQcm9wVHlwZXMuZnVuYztcblxuLyoqXG4gKiBBIDxSb3V0ZT4gaXMgdXNlZCB0byBkZWNsYXJlIHdoaWNoIGNvbXBvbmVudHMgYXJlIHJlbmRlcmVkIHRvIHRoZVxuICogcGFnZSB3aGVuIHRoZSBVUkwgbWF0Y2hlcyBhIGdpdmVuIHBhdHRlcm4uXG4gKlxuICogUm91dGVzIGFyZSBhcnJhbmdlZCBpbiBhIG5lc3RlZCB0cmVlIHN0cnVjdHVyZS4gV2hlbiBhIG5ldyBVUkwgaXNcbiAqIHJlcXVlc3RlZCwgdGhlIHRyZWUgaXMgc2VhcmNoZWQgZGVwdGgtZmlyc3QgdG8gZmluZCBhIHJvdXRlIHdob3NlXG4gKiBwYXRoIG1hdGNoZXMgdGhlIFVSTC4gIFdoZW4gb25lIGlzIGZvdW5kLCBhbGwgcm91dGVzIGluIHRoZSB0cmVlXG4gKiB0aGF0IGxlYWQgdG8gaXQgYXJlIGNvbnNpZGVyZWQgXCJhY3RpdmVcIiBhbmQgdGhlaXIgY29tcG9uZW50cyBhcmVcbiAqIHJlbmRlcmVkIGludG8gdGhlIERPTSwgbmVzdGVkIGluIHRoZSBzYW1lIG9yZGVyIGFzIGluIHRoZSB0cmVlLlxuICovXG52YXIgUm91dGUgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1JvdXRlJyxcblxuICBzdGF0aWNzOiB7XG4gICAgY3JlYXRlUm91dGVGcm9tUmVhY3RFbGVtZW50OiBfUm91dGVVdGlscy5jcmVhdGVSb3V0ZUZyb21SZWFjdEVsZW1lbnRcbiAgfSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgY29tcG9uZW50OiBfUHJvcFR5cGVzLmNvbXBvbmVudCxcbiAgICBjb21wb25lbnRzOiBfUHJvcFR5cGVzLmNvbXBvbmVudHMsXG4gICAgZ2V0Q29tcG9uZW50OiBmdW5jLFxuICAgIGdldENvbXBvbmVudHM6IGZ1bmNcbiAgfSxcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogc2FuaXR5IGNoZWNrICovXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICFmYWxzZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlLCAnPFJvdXRlPiBlbGVtZW50cyBhcmUgZm9yIHJvdXRlciBjb25maWd1cmF0aW9uIG9ubHkgYW5kIHNob3VsZCBub3QgYmUgcmVuZGVyZWQnKSA6IF9pbnZhcmlhbnQyWydkZWZhdWx0J10oZmFsc2UpIDogdW5kZWZpbmVkO1xuICB9XG5cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBSb3V0ZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JvdXRlcldhcm5pbmcgPSByZXF1aXJlKCcuL3JvdXRlcldhcm5pbmcnKTtcblxudmFyIF9yb3V0ZXJXYXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JvdXRlcldhcm5pbmcpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBvYmplY3QgPSBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9iamVjdDtcblxuLyoqXG4gKiBUaGUgUm91dGVDb250ZXh0IG1peGluIHByb3ZpZGVzIGEgY29udmVuaWVudCB3YXkgZm9yIHJvdXRlXG4gKiBjb21wb25lbnRzIHRvIHNldCB0aGUgcm91dGUgaW4gY29udGV4dC4gVGhpcyBpcyBuZWVkZWQgZm9yXG4gKiByb3V0ZXMgdGhhdCByZW5kZXIgZWxlbWVudHMgdGhhdCB3YW50IHRvIHVzZSB0aGUgTGlmZWN5Y2xlXG4gKiBtaXhpbiB0byBwcmV2ZW50IHRyYW5zaXRpb25zLlxuICovXG52YXIgUm91dGVDb250ZXh0ID0ge1xuXG4gIHByb3BUeXBlczoge1xuICAgIHJvdXRlOiBvYmplY3QuaXNSZXF1aXJlZFxuICB9LFxuXG4gIGNoaWxkQ29udGV4dFR5cGVzOiB7XG4gICAgcm91dGU6IG9iamVjdC5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgZ2V0Q2hpbGRDb250ZXh0OiBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvdXRlOiB0aGlzLnByb3BzLnJvdXRlXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3JvdXRlcldhcm5pbmcyWydkZWZhdWx0J10oZmFsc2UsICdUaGUgYFJvdXRlQ29udGV4dGAgbWl4aW4gaXMgZGVwcmVjYXRlZC4gWW91IGNhbiBwcm92aWRlIGB0aGlzLnByb3BzLnJvdXRlYCBvbiBjb250ZXh0IHdpdGggeW91ciBvd24gYGNvbnRleHRUeXBlc2AuIGh0dHA6Ly90aW55LmNjL3JvdXRlci1yb3V0ZWNvbnRleHRtaXhpbicpIDogdW5kZWZpbmVkO1xuICB9XG5cbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFJvdXRlQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5pc1JlYWN0Q2hpbGRyZW4gPSBpc1JlYWN0Q2hpbGRyZW47XG5leHBvcnRzLmNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudCA9IGNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudDtcbmV4cG9ydHMuY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4gPSBjcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbjtcbmV4cG9ydHMuY3JlYXRlUm91dGVzID0gY3JlYXRlUm91dGVzO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yb3V0ZXJXYXJuaW5nID0gcmVxdWlyZSgnLi9yb3V0ZXJXYXJuaW5nJyk7XG5cbnZhciBfcm91dGVyV2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yb3V0ZXJXYXJuaW5nKTtcblxuZnVuY3Rpb24gaXNWYWxpZENoaWxkKG9iamVjdCkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgfHwgX3JlYWN0MlsnZGVmYXVsdCddLmlzVmFsaWRFbGVtZW50KG9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIGlzUmVhY3RDaGlsZHJlbihvYmplY3QpIHtcbiAgcmV0dXJuIGlzVmFsaWRDaGlsZChvYmplY3QpIHx8IEFycmF5LmlzQXJyYXkob2JqZWN0KSAmJiBvYmplY3QuZXZlcnkoaXNWYWxpZENoaWxkKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXMoY29tcG9uZW50TmFtZSwgcHJvcFR5cGVzLCBwcm9wcykge1xuICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCAnVW5rbm93bkNvbXBvbmVudCc7XG5cbiAgZm9yICh2YXIgcHJvcE5hbWUgaW4gcHJvcFR5cGVzKSB7XG4gICAgaWYgKHByb3BUeXBlcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgIHZhciBlcnJvciA9IHByb3BUeXBlc1twcm9wTmFtZV0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKTtcblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmOiBlcnJvciBsb2dnaW5nICovXG4gICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF9yb3V0ZXJXYXJuaW5nMlsnZGVmYXVsdCddKGZhbHNlLCBlcnJvci5tZXNzYWdlKSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGUoZGVmYXVsdFByb3BzLCBwcm9wcykge1xuICByZXR1cm4gX2V4dGVuZHMoe30sIGRlZmF1bHRQcm9wcywgcHJvcHMpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUZyb21SZWFjdEVsZW1lbnQoZWxlbWVudCkge1xuICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcbiAgdmFyIHJvdXRlID0gY3JlYXRlUm91dGUodHlwZS5kZWZhdWx0UHJvcHMsIGVsZW1lbnQucHJvcHMpO1xuXG4gIGlmICh0eXBlLnByb3BUeXBlcykgY2hlY2tQcm9wVHlwZXModHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUsIHR5cGUucHJvcFR5cGVzLCByb3V0ZSk7XG5cbiAgaWYgKHJvdXRlLmNoaWxkcmVuKSB7XG4gICAgdmFyIGNoaWxkUm91dGVzID0gY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4ocm91dGUuY2hpbGRyZW4sIHJvdXRlKTtcblxuICAgIGlmIChjaGlsZFJvdXRlcy5sZW5ndGgpIHJvdXRlLmNoaWxkUm91dGVzID0gY2hpbGRSb3V0ZXM7XG5cbiAgICBkZWxldGUgcm91dGUuY2hpbGRyZW47XG4gIH1cblxuICByZXR1cm4gcm91dGU7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIHJvdXRlcyBvYmplY3QgZnJvbSB0aGUgZ2l2ZW4gUmVhY3RDaGlsZHJlbi4gSlNYXG4gKiBwcm92aWRlcyBhIGNvbnZlbmllbnQgd2F5IHRvIHZpc3VhbGl6ZSBob3cgcm91dGVzIGluIHRoZSBoaWVyYXJjaHkgYXJlXG4gKiBuZXN0ZWQuXG4gKlxuICogICBpbXBvcnQgeyBSb3V0ZSwgY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4gfSBmcm9tICdyZWFjdC1yb3V0ZXInXG4gKiAgIFxuICogICBjb25zdCByb3V0ZXMgPSBjcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbihcbiAqICAgICA8Um91dGUgY29tcG9uZW50PXtBcHB9PlxuICogICAgICAgPFJvdXRlIHBhdGg9XCJob21lXCIgY29tcG9uZW50PXtEYXNoYm9hcmR9Lz5cbiAqICAgICAgIDxSb3V0ZSBwYXRoPVwibmV3c1wiIGNvbXBvbmVudD17TmV3c0ZlZWR9Lz5cbiAqICAgICA8L1JvdXRlPlxuICogICApXG4gKlxuICogTm90ZTogVGhpcyBtZXRob2QgaXMgYXV0b21hdGljYWxseSB1c2VkIHdoZW4geW91IHByb3ZpZGUgPFJvdXRlPiBjaGlsZHJlblxuICogdG8gYSA8Um91dGVyPiBjb21wb25lbnQuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4oY2hpbGRyZW4sIHBhcmVudFJvdXRlKSB7XG4gIHZhciByb3V0ZXMgPSBbXTtcblxuICBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICBpZiAoX3JlYWN0MlsnZGVmYXVsdCddLmlzVmFsaWRFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgICAvLyBDb21wb25lbnQgY2xhc3NlcyBtYXkgaGF2ZSBhIHN0YXRpYyBjcmVhdGUqIG1ldGhvZC5cbiAgICAgIGlmIChlbGVtZW50LnR5cGUuY3JlYXRlUm91dGVGcm9tUmVhY3RFbGVtZW50KSB7XG4gICAgICAgIHZhciByb3V0ZSA9IGVsZW1lbnQudHlwZS5jcmVhdGVSb3V0ZUZyb21SZWFjdEVsZW1lbnQoZWxlbWVudCwgcGFyZW50Um91dGUpO1xuXG4gICAgICAgIGlmIChyb3V0ZSkgcm91dGVzLnB1c2gocm91dGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm91dGVzLnB1c2goY3JlYXRlUm91dGVGcm9tUmVhY3RFbGVtZW50KGVsZW1lbnQpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByb3V0ZXM7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhbiBhcnJheSBvZiByb3V0ZXMgZnJvbSB0aGUgZ2l2ZW4gb2JqZWN0IHdoaWNoXG4gKiBtYXkgYmUgYSBKU1ggcm91dGUsIGEgcGxhaW4gb2JqZWN0IHJvdXRlLCBvciBhbiBhcnJheSBvZiBlaXRoZXIuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVzKHJvdXRlcykge1xuICBpZiAoaXNSZWFjdENoaWxkcmVuKHJvdXRlcykpIHtcbiAgICByb3V0ZXMgPSBjcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbihyb3V0ZXMpO1xuICB9IGVsc2UgaWYgKHJvdXRlcyAmJiAhQXJyYXkuaXNBcnJheShyb3V0ZXMpKSB7XG4gICAgcm91dGVzID0gW3JvdXRlc107XG4gIH1cblxuICByZXR1cm4gcm91dGVzO1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBfaGlzdG9yeUxpYkNyZWF0ZUhhc2hIaXN0b3J5ID0gcmVxdWlyZSgnaGlzdG9yeS9saWIvY3JlYXRlSGFzaEhpc3RvcnknKTtcblxudmFyIF9oaXN0b3J5TGliQ3JlYXRlSGFzaEhpc3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGlzdG9yeUxpYkNyZWF0ZUhhc2hIaXN0b3J5KTtcblxudmFyIF9oaXN0b3J5TGliVXNlUXVlcmllcyA9IHJlcXVpcmUoJ2hpc3RvcnkvbGliL3VzZVF1ZXJpZXMnKTtcblxudmFyIF9oaXN0b3J5TGliVXNlUXVlcmllczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oaXN0b3J5TGliVXNlUXVlcmllcyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlciA9IHJlcXVpcmUoJy4vY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXInKTtcblxudmFyIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcik7XG5cbnZhciBfUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9Qcm9wVHlwZXMnKTtcblxudmFyIF9Sb3V0ZXJDb250ZXh0ID0gcmVxdWlyZSgnLi9Sb3V0ZXJDb250ZXh0Jyk7XG5cbnZhciBfUm91dGVyQ29udGV4dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3V0ZXJDb250ZXh0KTtcblxudmFyIF9Sb3V0ZVV0aWxzID0gcmVxdWlyZSgnLi9Sb3V0ZVV0aWxzJyk7XG5cbnZhciBfUm91dGVyVXRpbHMgPSByZXF1aXJlKCcuL1JvdXRlclV0aWxzJyk7XG5cbnZhciBfcm91dGVyV2FybmluZyA9IHJlcXVpcmUoJy4vcm91dGVyV2FybmluZycpO1xuXG52YXIgX3JvdXRlcldhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm91dGVyV2FybmluZyk7XG5cbmZ1bmN0aW9uIGlzRGVwcmVjYXRlZEhpc3RvcnkoaGlzdG9yeSkge1xuICByZXR1cm4gIWhpc3RvcnkgfHwgIWhpc3RvcnkuX192Ml9jb21wYXRpYmxlX187XG59XG5cbnZhciBfUmVhY3QkUHJvcFR5cGVzID0gX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcztcbnZhciBmdW5jID0gX1JlYWN0JFByb3BUeXBlcy5mdW5jO1xudmFyIG9iamVjdCA9IF9SZWFjdCRQcm9wVHlwZXMub2JqZWN0O1xuXG4vKipcbiAqIEEgPFJvdXRlcj4gaXMgYSBoaWdoLWxldmVsIEFQSSBmb3IgYXV0b21hdGljYWxseSBzZXR0aW5nIHVwXG4gKiBhIHJvdXRlciB0aGF0IHJlbmRlcnMgYSA8Um91dGVyQ29udGV4dD4gd2l0aCBhbGwgdGhlIHByb3BzXG4gKiBpdCBuZWVkcyBlYWNoIHRpbWUgdGhlIFVSTCBjaGFuZ2VzLlxuICovXG52YXIgUm91dGVyID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdSb3V0ZXInLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGhpc3Rvcnk6IG9iamVjdCxcbiAgICBjaGlsZHJlbjogX1Byb3BUeXBlcy5yb3V0ZXMsXG4gICAgcm91dGVzOiBfUHJvcFR5cGVzLnJvdXRlcywgLy8gYWxpYXMgZm9yIGNoaWxkcmVuXG4gICAgcmVuZGVyOiBmdW5jLFxuICAgIGNyZWF0ZUVsZW1lbnQ6IGZ1bmMsXG4gICAgb25FcnJvcjogZnVuYyxcbiAgICBvblVwZGF0ZTogZnVuYyxcblxuICAgIC8vIFBSSVZBVEU6IEZvciBjbGllbnQtc2lkZSByZWh5ZHJhdGlvbiBvZiBzZXJ2ZXIgbWF0Y2guXG4gICAgbWF0Y2hDb250ZXh0OiBvYmplY3RcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9Sb3V0ZXJDb250ZXh0MlsnZGVmYXVsdCddLCBwcm9wcyk7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9jYXRpb246IG51bGwsXG4gICAgICByb3V0ZXM6IG51bGwsXG4gICAgICBwYXJhbXM6IG51bGwsXG4gICAgICBjb21wb25lbnRzOiBudWxsXG4gICAgfTtcbiAgfSxcblxuICBoYW5kbGVFcnJvcjogZnVuY3Rpb24gaGFuZGxlRXJyb3IoZXJyb3IpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkVycm9yKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRXJyb3IuY2FsbCh0aGlzLCBlcnJvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRocm93IGVycm9ycyBieSBkZWZhdWx0IHNvIHdlIGRvbid0IHNpbGVudGx5IHN3YWxsb3cgdGhlbSFcbiAgICAgIHRocm93IGVycm9yOyAvLyBUaGlzIGVycm9yIHByb2JhYmx5IG9jY3VycmVkIGluIGdldENoaWxkUm91dGVzIG9yIGdldENvbXBvbmVudHMuXG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgcGFyc2VRdWVyeVN0cmluZyA9IF9wcm9wcy5wYXJzZVF1ZXJ5U3RyaW5nO1xuICAgIHZhciBzdHJpbmdpZnlRdWVyeSA9IF9wcm9wcy5zdHJpbmdpZnlRdWVyeTtcblxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfcm91dGVyV2FybmluZzJbJ2RlZmF1bHQnXSghKHBhcnNlUXVlcnlTdHJpbmcgfHwgc3RyaW5naWZ5UXVlcnkpLCAnYHBhcnNlUXVlcnlTdHJpbmdgIGFuZCBgc3RyaW5naWZ5UXVlcnlgIGFyZSBkZXByZWNhdGVkLiBQbGVhc2UgY3JlYXRlIGEgY3VzdG9tIGhpc3RvcnkuIGh0dHA6Ly90aW55LmNjL3JvdXRlci1jdXN0b21xdWVyeXN0cmluZycpIDogdW5kZWZpbmVkO1xuXG4gICAgdmFyIF9jcmVhdGVSb3V0ZXJPYmplY3RzID0gdGhpcy5jcmVhdGVSb3V0ZXJPYmplY3RzKCk7XG5cbiAgICB2YXIgaGlzdG9yeSA9IF9jcmVhdGVSb3V0ZXJPYmplY3RzLmhpc3Rvcnk7XG4gICAgdmFyIHRyYW5zaXRpb25NYW5hZ2VyID0gX2NyZWF0ZVJvdXRlck9iamVjdHMudHJhbnNpdGlvbk1hbmFnZXI7XG4gICAgdmFyIHJvdXRlciA9IF9jcmVhdGVSb3V0ZXJPYmplY3RzLnJvdXRlcjtcblxuICAgIHRoaXMuX3VubGlzdGVuID0gdHJhbnNpdGlvbk1hbmFnZXIubGlzdGVuKGZ1bmN0aW9uIChlcnJvciwgc3RhdGUpIHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBfdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZShzdGF0ZSwgX3RoaXMucHJvcHMub25VcGRhdGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5oaXN0b3J5ID0gaGlzdG9yeTtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgfSxcblxuICBjcmVhdGVSb3V0ZXJPYmplY3RzOiBmdW5jdGlvbiBjcmVhdGVSb3V0ZXJPYmplY3RzKCkge1xuICAgIHZhciBtYXRjaENvbnRleHQgPSB0aGlzLnByb3BzLm1hdGNoQ29udGV4dDtcblxuICAgIGlmIChtYXRjaENvbnRleHQpIHtcbiAgICAgIHJldHVybiBtYXRjaENvbnRleHQ7XG4gICAgfVxuXG4gICAgdmFyIGhpc3RvcnkgPSB0aGlzLnByb3BzLmhpc3Rvcnk7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzO1xuICAgIHZhciByb3V0ZXMgPSBfcHJvcHMyLnJvdXRlcztcbiAgICB2YXIgY2hpbGRyZW4gPSBfcHJvcHMyLmNoaWxkcmVuO1xuXG4gICAgaWYgKGlzRGVwcmVjYXRlZEhpc3RvcnkoaGlzdG9yeSkpIHtcbiAgICAgIGhpc3RvcnkgPSB0aGlzLndyYXBEZXByZWNhdGVkSGlzdG9yeShoaXN0b3J5KTtcbiAgICB9XG5cbiAgICB2YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSBfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIyWydkZWZhdWx0J10oaGlzdG9yeSwgX1JvdXRlVXRpbHMuY3JlYXRlUm91dGVzKHJvdXRlcyB8fCBjaGlsZHJlbikpO1xuICAgIHZhciByb3V0ZXIgPSBfUm91dGVyVXRpbHMuY3JlYXRlUm91dGVyT2JqZWN0KGhpc3RvcnksIHRyYW5zaXRpb25NYW5hZ2VyKTtcbiAgICB2YXIgcm91dGluZ0hpc3RvcnkgPSBfUm91dGVyVXRpbHMuY3JlYXRlUm91dGluZ0hpc3RvcnkoaGlzdG9yeSwgdHJhbnNpdGlvbk1hbmFnZXIpO1xuXG4gICAgcmV0dXJuIHsgaGlzdG9yeTogcm91dGluZ0hpc3RvcnksIHRyYW5zaXRpb25NYW5hZ2VyOiB0cmFuc2l0aW9uTWFuYWdlciwgcm91dGVyOiByb3V0ZXIgfTtcbiAgfSxcblxuICB3cmFwRGVwcmVjYXRlZEhpc3Rvcnk6IGZ1bmN0aW9uIHdyYXBEZXByZWNhdGVkSGlzdG9yeShoaXN0b3J5KSB7XG4gICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBwYXJzZVF1ZXJ5U3RyaW5nID0gX3Byb3BzMy5wYXJzZVF1ZXJ5U3RyaW5nO1xuICAgIHZhciBzdHJpbmdpZnlRdWVyeSA9IF9wcm9wczMuc3RyaW5naWZ5UXVlcnk7XG5cbiAgICB2YXIgY3JlYXRlSGlzdG9yeSA9IHVuZGVmaW5lZDtcbiAgICBpZiAoaGlzdG9yeSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF9yb3V0ZXJXYXJuaW5nMlsnZGVmYXVsdCddKGZhbHNlLCAnSXQgYXBwZWFycyB5b3UgaGF2ZSBwcm92aWRlZCBhIGRlcHJlY2F0ZWQgaGlzdG9yeSBvYmplY3QgdG8gYDxSb3V0ZXIvPmAsIHBsZWFzZSB1c2UgYSBoaXN0b3J5IHByb3ZpZGVkIGJ5ICcgKyAnUmVhY3QgUm91dGVyIHdpdGggYGltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSBcXCdyZWFjdC1yb3V0ZXJcXCdgIG9yIGBpbXBvcnQgeyBoYXNoSGlzdG9yeSB9IGZyb20gXFwncmVhY3Qtcm91dGVyXFwnYC4gJyArICdJZiB5b3UgYXJlIHVzaW5nIGEgY3VzdG9tIGhpc3RvcnkgcGxlYXNlIGNyZWF0ZSBpdCB3aXRoIGB1c2VSb3V0ZXJIaXN0b3J5YCwgc2VlIGh0dHA6Ly90aW55LmNjL3JvdXRlci11c2luZ2hpc3RvcnkgZm9yIGRldGFpbHMuJykgOiB1bmRlZmluZWQ7XG4gICAgICBjcmVhdGVIaXN0b3J5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gaGlzdG9yeTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfcm91dGVyV2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgJ2BSb3V0ZXJgIG5vIGxvbmdlciBkZWZhdWx0cyB0aGUgaGlzdG9yeSBwcm9wIHRvIGhhc2ggaGlzdG9yeS4gUGxlYXNlIHVzZSB0aGUgYGhhc2hIaXN0b3J5YCBzaW5nbGV0b24gaW5zdGVhZC4gaHR0cDovL3RpbnkuY2Mvcm91dGVyLWRlZmF1bHRoaXN0b3J5JykgOiB1bmRlZmluZWQ7XG4gICAgICBjcmVhdGVIaXN0b3J5ID0gX2hpc3RvcnlMaWJDcmVhdGVIYXNoSGlzdG9yeTJbJ2RlZmF1bHQnXTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2hpc3RvcnlMaWJVc2VRdWVyaWVzMlsnZGVmYXVsdCddKGNyZWF0ZUhpc3RvcnkpKHsgcGFyc2VRdWVyeVN0cmluZzogcGFyc2VRdWVyeVN0cmluZywgc3RyaW5naWZ5UXVlcnk6IHN0cmluZ2lmeVF1ZXJ5IH0pO1xuICB9LFxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBzYW5pdHkgY2hlY2sgKi9cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3JvdXRlcldhcm5pbmcyWydkZWZhdWx0J10obmV4dFByb3BzLmhpc3RvcnkgPT09IHRoaXMucHJvcHMuaGlzdG9yeSwgJ1lvdSBjYW5ub3QgY2hhbmdlIDxSb3V0ZXIgaGlzdG9yeT47IGl0IHdpbGwgYmUgaWdub3JlZCcpIDogdW5kZWZpbmVkO1xuXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF9yb3V0ZXJXYXJuaW5nMlsnZGVmYXVsdCddKChuZXh0UHJvcHMucm91dGVzIHx8IG5leHRQcm9wcy5jaGlsZHJlbikgPT09ICh0aGlzLnByb3BzLnJvdXRlcyB8fCB0aGlzLnByb3BzLmNoaWxkcmVuKSwgJ1lvdSBjYW5ub3QgY2hhbmdlIDxSb3V0ZXIgcm91dGVzPjsgaXQgd2lsbCBiZSBpZ25vcmVkJykgOiB1bmRlZmluZWQ7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLl91bmxpc3RlbikgdGhpcy5fdW5saXN0ZW4oKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICB2YXIgbG9jYXRpb24gPSBfc3RhdGUubG9jYXRpb247XG4gICAgdmFyIHJvdXRlcyA9IF9zdGF0ZS5yb3V0ZXM7XG4gICAgdmFyIHBhcmFtcyA9IF9zdGF0ZS5wYXJhbXM7XG4gICAgdmFyIGNvbXBvbmVudHMgPSBfc3RhdGUuY29tcG9uZW50cztcbiAgICB2YXIgX3Byb3BzNCA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGNyZWF0ZUVsZW1lbnQgPSBfcHJvcHM0LmNyZWF0ZUVsZW1lbnQ7XG4gICAgdmFyIHJlbmRlciA9IF9wcm9wczQucmVuZGVyO1xuXG4gICAgdmFyIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wczQsIFsnY3JlYXRlRWxlbWVudCcsICdyZW5kZXInXSk7XG5cbiAgICBpZiAobG9jYXRpb24gPT0gbnVsbCkgcmV0dXJuIG51bGw7IC8vIEFzeW5jIG1hdGNoXG5cbiAgICAvLyBPbmx5IGZvcndhcmQgbm9uLVJvdXRlci1zcGVjaWZpYyBwcm9wcyB0byByb3V0aW5nIGNvbnRleHQsIGFzIHRob3NlIGFyZVxuICAgIC8vIHRoZSBvbmx5IG9uZXMgdGhhdCBtaWdodCBiZSBjdXN0b20gcm91dGluZyBjb250ZXh0IHByb3BzLlxuICAgIE9iamVjdC5rZXlzKFJvdXRlci5wcm9wVHlwZXMpLmZvckVhY2goZnVuY3Rpb24gKHByb3BUeXBlKSB7XG4gICAgICByZXR1cm4gZGVsZXRlIHByb3BzW3Byb3BUeXBlXTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZW5kZXIoX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICBoaXN0b3J5OiB0aGlzLmhpc3RvcnksXG4gICAgICByb3V0ZXI6IHRoaXMucm91dGVyLFxuICAgICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgICAgcm91dGVzOiByb3V0ZXMsXG4gICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgIGNvbXBvbmVudHM6IGNvbXBvbmVudHMsXG4gICAgICBjcmVhdGVFbGVtZW50OiBjcmVhdGVFbGVtZW50XG4gICAgfSkpO1xuICB9XG5cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBSb3V0ZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2RlcHJlY2F0ZU9iamVjdFByb3BlcnRpZXMgPSByZXF1aXJlKCcuL2RlcHJlY2F0ZU9iamVjdFByb3BlcnRpZXMnKTtcblxudmFyIF9kZXByZWNhdGVPYmplY3RQcm9wZXJ0aWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlcHJlY2F0ZU9iamVjdFByb3BlcnRpZXMpO1xuXG52YXIgX2dldFJvdXRlUGFyYW1zID0gcmVxdWlyZSgnLi9nZXRSb3V0ZVBhcmFtcycpO1xuXG52YXIgX2dldFJvdXRlUGFyYW1zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFJvdXRlUGFyYW1zKTtcblxudmFyIF9Sb3V0ZVV0aWxzID0gcmVxdWlyZSgnLi9Sb3V0ZVV0aWxzJyk7XG5cbnZhciBfcm91dGVyV2FybmluZyA9IHJlcXVpcmUoJy4vcm91dGVyV2FybmluZycpO1xuXG52YXIgX3JvdXRlcldhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm91dGVyV2FybmluZyk7XG5cbnZhciBfUmVhY3QkUHJvcFR5cGVzID0gX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcztcbnZhciBhcnJheSA9IF9SZWFjdCRQcm9wVHlwZXMuYXJyYXk7XG52YXIgZnVuYyA9IF9SZWFjdCRQcm9wVHlwZXMuZnVuYztcbnZhciBvYmplY3QgPSBfUmVhY3QkUHJvcFR5cGVzLm9iamVjdDtcblxuLyoqXG4gKiBBIDxSb3V0ZXJDb250ZXh0PiByZW5kZXJzIHRoZSBjb21wb25lbnQgdHJlZSBmb3IgYSBnaXZlbiByb3V0ZXIgc3RhdGVcbiAqIGFuZCBzZXRzIHRoZSBoaXN0b3J5IG9iamVjdCBhbmQgdGhlIGN1cnJlbnQgbG9jYXRpb24gaW4gY29udGV4dC5cbiAqL1xudmFyIFJvdXRlckNvbnRleHQgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1JvdXRlckNvbnRleHQnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGhpc3Rvcnk6IG9iamVjdCxcbiAgICByb3V0ZXI6IG9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGxvY2F0aW9uOiBvYmplY3QuaXNSZXF1aXJlZCxcbiAgICByb3V0ZXM6IGFycmF5LmlzUmVxdWlyZWQsXG4gICAgcGFyYW1zOiBvYmplY3QuaXNSZXF1aXJlZCxcbiAgICBjb21wb25lbnRzOiBhcnJheS5pc1JlcXVpcmVkLFxuICAgIGNyZWF0ZUVsZW1lbnQ6IGZ1bmMuaXNSZXF1aXJlZFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjcmVhdGVFbGVtZW50OiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudFxuICAgIH07XG4gIH0sXG5cbiAgY2hpbGRDb250ZXh0VHlwZXM6IHtcbiAgICBoaXN0b3J5OiBvYmplY3QsXG4gICAgbG9jYXRpb246IG9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHJvdXRlcjogb2JqZWN0LmlzUmVxdWlyZWRcbiAgfSxcblxuICBnZXRDaGlsZENvbnRleHQ6IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgcm91dGVyID0gX3Byb3BzLnJvdXRlcjtcbiAgICB2YXIgaGlzdG9yeSA9IF9wcm9wcy5oaXN0b3J5O1xuICAgIHZhciBsb2NhdGlvbiA9IF9wcm9wcy5sb2NhdGlvbjtcblxuICAgIGlmICghcm91dGVyKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3JvdXRlcldhcm5pbmcyWydkZWZhdWx0J10oZmFsc2UsICdgPFJvdXRlckNvbnRleHQ+YCBleHBlY3RzIGEgYHJvdXRlcmAgcmF0aGVyIHRoYW4gYSBgaGlzdG9yeWAnKSA6IHVuZGVmaW5lZDtcblxuICAgICAgcm91dGVyID0gX2V4dGVuZHMoe30sIGhpc3RvcnksIHtcbiAgICAgICAgc2V0Um91dGVMZWF2ZUhvb2s6IGhpc3RvcnkubGlzdGVuQmVmb3JlTGVhdmluZ1JvdXRlXG4gICAgICB9KTtcbiAgICAgIGRlbGV0ZSByb3V0ZXIubGlzdGVuQmVmb3JlTGVhdmluZ1JvdXRlO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBsb2NhdGlvbiA9IF9kZXByZWNhdGVPYmplY3RQcm9wZXJ0aWVzMlsnZGVmYXVsdCddKGxvY2F0aW9uLCAnYGNvbnRleHQubG9jYXRpb25gIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYSByb3V0ZSBjb21wb25lbnRcXCdzIGBwcm9wcy5sb2NhdGlvbmAgaW5zdGVhZC4gaHR0cDovL3RpbnkuY2Mvcm91dGVyLWFjY2Vzc2luZ2xvY2F0aW9uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgaGlzdG9yeTogaGlzdG9yeSwgbG9jYXRpb246IGxvY2F0aW9uLCByb3V0ZXI6IHJvdXRlciB9O1xuICB9LFxuXG4gIGNyZWF0ZUVsZW1lbnQ6IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBwcm9wcykge1xuICAgIHJldHVybiBjb21wb25lbnQgPT0gbnVsbCA/IG51bGwgOiB0aGlzLnByb3BzLmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBwcm9wcyk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcztcbiAgICB2YXIgaGlzdG9yeSA9IF9wcm9wczIuaGlzdG9yeTtcbiAgICB2YXIgbG9jYXRpb24gPSBfcHJvcHMyLmxvY2F0aW9uO1xuICAgIHZhciByb3V0ZXMgPSBfcHJvcHMyLnJvdXRlcztcbiAgICB2YXIgcGFyYW1zID0gX3Byb3BzMi5wYXJhbXM7XG4gICAgdmFyIGNvbXBvbmVudHMgPSBfcHJvcHMyLmNvbXBvbmVudHM7XG5cbiAgICB2YXIgZWxlbWVudCA9IG51bGw7XG5cbiAgICBpZiAoY29tcG9uZW50cykge1xuICAgICAgZWxlbWVudCA9IGNvbXBvbmVudHMucmVkdWNlUmlnaHQoZnVuY3Rpb24gKGVsZW1lbnQsIGNvbXBvbmVudHMsIGluZGV4KSB7XG4gICAgICAgIGlmIChjb21wb25lbnRzID09IG51bGwpIHJldHVybiBlbGVtZW50OyAvLyBEb24ndCBjcmVhdGUgbmV3IGNoaWxkcmVuOyB1c2UgdGhlIGdyYW5kY2hpbGRyZW4uXG5cbiAgICAgICAgdmFyIHJvdXRlID0gcm91dGVzW2luZGV4XTtcbiAgICAgICAgdmFyIHJvdXRlUGFyYW1zID0gX2dldFJvdXRlUGFyYW1zMlsnZGVmYXVsdCddKHJvdXRlLCBwYXJhbXMpO1xuICAgICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgICAgaGlzdG9yeTogaGlzdG9yeSxcbiAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgICAgcm91dGU6IHJvdXRlLFxuICAgICAgICAgIHJvdXRlUGFyYW1zOiByb3V0ZVBhcmFtcyxcbiAgICAgICAgICByb3V0ZXM6IHJvdXRlc1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChfUm91dGVVdGlscy5pc1JlYWN0Q2hpbGRyZW4oZWxlbWVudCkpIHtcbiAgICAgICAgICBwcm9wcy5jaGlsZHJlbiA9IGVsZW1lbnQ7XG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzT3duUHJvcGVydHkocHJvcCkpIHByb3BzW3Byb3BdID0gZWxlbWVudFtwcm9wXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdmFyIGVsZW1lbnRzID0ge307XG5cbiAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gY29tcG9uZW50cykge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAvLyBQYXNzIHRocm91Z2ggdGhlIGtleSBhcyBhIHByb3AgdG8gY3JlYXRlRWxlbWVudCB0byBhbGxvd1xuICAgICAgICAgICAgICAvLyBjdXN0b20gY3JlYXRlRWxlbWVudCBmdW5jdGlvbnMgdG8ga25vdyB3aGljaCBuYW1lZCBjb21wb25lbnRcbiAgICAgICAgICAgICAgLy8gdGhleSdyZSByZW5kZXJpbmcsIGZvciBlLmcuIG1hdGNoaW5nIHVwIHRvIGZldGNoZWQgZGF0YS5cbiAgICAgICAgICAgICAgZWxlbWVudHNba2V5XSA9IF90aGlzLmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50c1trZXldLCBfZXh0ZW5kcyh7XG4gICAgICAgICAgICAgICAga2V5OiBrZXkgfSwgcHJvcHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZWxlbWVudHM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX3RoaXMuY3JlYXRlRWxlbWVudChjb21wb25lbnRzLCBwcm9wcyk7XG4gICAgICB9LCBlbGVtZW50KTtcbiAgICB9XG5cbiAgICAhKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gZmFsc2UgfHwgX3JlYWN0MlsnZGVmYXVsdCddLmlzVmFsaWRFbGVtZW50KGVsZW1lbnQpKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlLCAnVGhlIHJvb3Qgcm91dGUgbXVzdCByZW5kZXIgYSBzaW5nbGUgZWxlbWVudCcpIDogX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSkgOiB1bmRlZmluZWQ7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gUm91dGVyQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5jcmVhdGVSb3V0ZXJPYmplY3QgPSBjcmVhdGVSb3V0ZXJPYmplY3Q7XG5leHBvcnRzLmNyZWF0ZVJvdXRpbmdIaXN0b3J5ID0gY3JlYXRlUm91dGluZ0hpc3Rvcnk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9kZXByZWNhdGVPYmplY3RQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi9kZXByZWNhdGVPYmplY3RQcm9wZXJ0aWVzJyk7XG5cbnZhciBfZGVwcmVjYXRlT2JqZWN0UHJvcGVydGllczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZXByZWNhdGVPYmplY3RQcm9wZXJ0aWVzKTtcblxuZnVuY3Rpb24gY3JlYXRlUm91dGVyT2JqZWN0KGhpc3RvcnksIHRyYW5zaXRpb25NYW5hZ2VyKSB7XG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgaGlzdG9yeSwge1xuICAgIHNldFJvdXRlTGVhdmVIb29rOiB0cmFuc2l0aW9uTWFuYWdlci5saXN0ZW5CZWZvcmVMZWF2aW5nUm91dGUsXG4gICAgaXNBY3RpdmU6IHRyYW5zaXRpb25NYW5hZ2VyLmlzQWN0aXZlXG4gIH0pO1xufVxuXG4vLyBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRpbmdIaXN0b3J5KGhpc3RvcnksIHRyYW5zaXRpb25NYW5hZ2VyKSB7XG4gIGhpc3RvcnkgPSBfZXh0ZW5kcyh7fSwgaGlzdG9yeSwgdHJhbnNpdGlvbk1hbmFnZXIpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaGlzdG9yeSA9IF9kZXByZWNhdGVPYmplY3RQcm9wZXJ0aWVzMlsnZGVmYXVsdCddKGhpc3RvcnksICdgcHJvcHMuaGlzdG9yeWAgYW5kIGBjb250ZXh0Lmhpc3RvcnlgIGFyZSBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIGBjb250ZXh0LnJvdXRlcmAuIGh0dHA6Ly90aW55LmNjL3JvdXRlci1jb250ZXh0Y2hhbmdlcycpO1xuICB9XG5cbiAgcmV0dXJuIGhpc3Rvcnk7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9Sb3V0ZXJDb250ZXh0ID0gcmVxdWlyZSgnLi9Sb3V0ZXJDb250ZXh0Jyk7XG5cbnZhciBfUm91dGVyQ29udGV4dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3V0ZXJDb250ZXh0KTtcblxudmFyIF9yb3V0ZXJXYXJuaW5nID0gcmVxdWlyZSgnLi9yb3V0ZXJXYXJuaW5nJyk7XG5cbnZhciBfcm91dGVyV2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yb3V0ZXJXYXJuaW5nKTtcblxudmFyIFJvdXRpbmdDb250ZXh0ID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdSb3V0aW5nQ29udGV4dCcsXG5cbiAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF9yb3V0ZXJXYXJuaW5nMlsnZGVmYXVsdCddKGZhbHNlLCAnYFJvdXRpbmdDb250ZXh0YCBoYXMgYmVlbiByZW5hbWVkIHRvIGBSb3V0ZXJDb250ZXh0YC4gUGxlYXNlIHVzZSBgaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gXFwncmVhY3Qtcm91dGVyXFwnYC4gaHR0cDovL3RpbnkuY2Mvcm91dGVyLXJvdXRlcmNvbnRleHQnKSA6IHVuZGVmaW5lZDtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX1JvdXRlckNvbnRleHQyWydkZWZhdWx0J10sIHRoaXMucHJvcHMpO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gUm91dGluZ0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnJ1bkVudGVySG9va3MgPSBydW5FbnRlckhvb2tzO1xuZXhwb3J0cy5ydW5MZWF2ZUhvb2tzID0gcnVuTGVhdmVIb29rcztcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX0FzeW5jVXRpbHMgPSByZXF1aXJlKCcuL0FzeW5jVXRpbHMnKTtcblxudmFyIF9yb3V0ZXJXYXJuaW5nID0gcmVxdWlyZSgnLi9yb3V0ZXJXYXJuaW5nJyk7XG5cbnZhciBfcm91dGVyV2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yb3V0ZXJXYXJuaW5nKTtcblxuZnVuY3Rpb24gY3JlYXRlRW50ZXJIb29rKGhvb2ssIHJvdXRlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYSwgYiwgY2FsbGJhY2spIHtcbiAgICBob29rLmFwcGx5KHJvdXRlLCBhcmd1bWVudHMpO1xuXG4gICAgaWYgKGhvb2subGVuZ3RoIDwgMykge1xuICAgICAgLy8gQXNzdW1lIGhvb2sgZXhlY3V0ZXMgc3luY2hyb25vdXNseSBhbmRcbiAgICAgIC8vIGF1dG9tYXRpY2FsbHkgY2FsbCB0aGUgY2FsbGJhY2suXG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0RW50ZXJIb29rcyhyb3V0ZXMpIHtcbiAgcmV0dXJuIHJvdXRlcy5yZWR1Y2UoZnVuY3Rpb24gKGhvb2tzLCByb3V0ZSkge1xuICAgIGlmIChyb3V0ZS5vbkVudGVyKSBob29rcy5wdXNoKGNyZWF0ZUVudGVySG9vayhyb3V0ZS5vbkVudGVyLCByb3V0ZSkpO1xuXG4gICAgcmV0dXJuIGhvb2tzO1xuICB9LCBbXSk7XG59XG5cbi8qKlxuICogUnVucyBhbGwgb25FbnRlciBob29rcyBpbiB0aGUgZ2l2ZW4gYXJyYXkgb2Ygcm91dGVzIGluIG9yZGVyXG4gKiB3aXRoIG9uRW50ZXIobmV4dFN0YXRlLCByZXBsYWNlLCBjYWxsYmFjaykgYW5kIGNhbGxzXG4gKiBjYWxsYmFjayhlcnJvciwgcmVkaXJlY3RJbmZvKSB3aGVuIGZpbmlzaGVkLiBUaGUgZmlyc3QgaG9va1xuICogdG8gdXNlIHJlcGxhY2Ugc2hvcnQtY2lyY3VpdHMgdGhlIGxvb3AuXG4gKlxuICogSWYgYSBob29rIG5lZWRzIHRvIHJ1biBhc3luY2hyb25vdXNseSwgaXQgbWF5IHVzZSB0aGUgY2FsbGJhY2tcbiAqIGZ1bmN0aW9uLiBIb3dldmVyLCBkb2luZyBzbyB3aWxsIGNhdXNlIHRoZSB0cmFuc2l0aW9uIHRvIHBhdXNlLFxuICogd2hpY2ggY291bGQgbGVhZCB0byBhIG5vbi1yZXNwb25zaXZlIFVJIGlmIHRoZSBob29rIGlzIHNsb3cuXG4gKi9cblxuZnVuY3Rpb24gcnVuRW50ZXJIb29rcyhyb3V0ZXMsIG5leHRTdGF0ZSwgY2FsbGJhY2spIHtcbiAgdmFyIGhvb2tzID0gZ2V0RW50ZXJIb29rcyhyb3V0ZXMpO1xuXG4gIGlmICghaG9va3MubGVuZ3RoKSB7XG4gICAgY2FsbGJhY2soKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgcmVkaXJlY3RJbmZvID0gdW5kZWZpbmVkO1xuICBmdW5jdGlvbiByZXBsYWNlKGxvY2F0aW9uLCBkZXByZWNhdGVkUGF0aG5hbWUsIGRlcHJlY2F0ZWRRdWVyeSkge1xuICAgIGlmIChkZXByZWNhdGVkUGF0aG5hbWUpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfcm91dGVyV2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgJ2ByZXBsYWNlU3RhdGUoc3RhdGUsIHBhdGhuYW1lLCBxdWVyeSkgaXMgZGVwcmVjYXRlZDsgdXNlIGByZXBsYWNlKGxvY2F0aW9uKWAgd2l0aCBhIGxvY2F0aW9uIGRlc2NyaXB0b3IgaW5zdGVhZC4gaHR0cDovL3RpbnkuY2Mvcm91dGVyLWlzQWN0aXZlZGVwcmVjYXRlZCcpIDogdW5kZWZpbmVkO1xuICAgICAgcmVkaXJlY3RJbmZvID0ge1xuICAgICAgICBwYXRobmFtZTogZGVwcmVjYXRlZFBhdGhuYW1lLFxuICAgICAgICBxdWVyeTogZGVwcmVjYXRlZFF1ZXJ5LFxuICAgICAgICBzdGF0ZTogbG9jYXRpb25cbiAgICAgIH07XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZWRpcmVjdEluZm8gPSBsb2NhdGlvbjtcbiAgfVxuXG4gIF9Bc3luY1V0aWxzLmxvb3BBc3luYyhob29rcy5sZW5ndGgsIGZ1bmN0aW9uIChpbmRleCwgbmV4dCwgZG9uZSkge1xuICAgIGhvb2tzW2luZGV4XShuZXh0U3RhdGUsIHJlcGxhY2UsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yIHx8IHJlZGlyZWN0SW5mbykge1xuICAgICAgICBkb25lKGVycm9yLCByZWRpcmVjdEluZm8pOyAvLyBObyBuZWVkIHRvIGNvbnRpbnVlLlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgfSwgY2FsbGJhY2spO1xufVxuXG4vKipcbiAqIFJ1bnMgYWxsIG9uTGVhdmUgaG9va3MgaW4gdGhlIGdpdmVuIGFycmF5IG9mIHJvdXRlcyBpbiBvcmRlci5cbiAqL1xuXG5mdW5jdGlvbiBydW5MZWF2ZUhvb2tzKHJvdXRlcykge1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gcm91dGVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKHJvdXRlc1tpXS5vbkxlYXZlKSByb3V0ZXNbaV0ub25MZWF2ZS5jYWxsKHJvdXRlc1tpXSk7XG4gIH1cbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9oaXN0b3J5TGliQ3JlYXRlQnJvd3Nlckhpc3RvcnkgPSByZXF1aXJlKCdoaXN0b3J5L2xpYi9jcmVhdGVCcm93c2VySGlzdG9yeScpO1xuXG52YXIgX2hpc3RvcnlMaWJDcmVhdGVCcm93c2VySGlzdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oaXN0b3J5TGliQ3JlYXRlQnJvd3Nlckhpc3RvcnkpO1xuXG52YXIgX2NyZWF0ZVJvdXRlckhpc3RvcnkgPSByZXF1aXJlKCcuL2NyZWF0ZVJvdXRlckhpc3RvcnknKTtcblxudmFyIF9jcmVhdGVSb3V0ZXJIaXN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVJvdXRlckhpc3RvcnkpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBfY3JlYXRlUm91dGVySGlzdG9yeTJbJ2RlZmF1bHQnXShfaGlzdG9yeUxpYkNyZWF0ZUJyb3dzZXJIaXN0b3J5MlsnZGVmYXVsdCddKTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9QYXR0ZXJuVXRpbHMgPSByZXF1aXJlKCcuL1BhdHRlcm5VdGlscycpO1xuXG5mdW5jdGlvbiByb3V0ZVBhcmFtc0NoYW5nZWQocm91dGUsIHByZXZTdGF0ZSwgbmV4dFN0YXRlKSB7XG4gIGlmICghcm91dGUucGF0aCkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBwYXJhbU5hbWVzID0gX1BhdHRlcm5VdGlscy5nZXRQYXJhbU5hbWVzKHJvdXRlLnBhdGgpO1xuXG4gIHJldHVybiBwYXJhbU5hbWVzLnNvbWUoZnVuY3Rpb24gKHBhcmFtTmFtZSkge1xuICAgIHJldHVybiBwcmV2U3RhdGUucGFyYW1zW3BhcmFtTmFtZV0gIT09IG5leHRTdGF0ZS5wYXJhbXNbcGFyYW1OYW1lXTtcbiAgfSk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3Qgb2YgeyBsZWF2ZVJvdXRlcywgZW50ZXJSb3V0ZXMgfSBkZXRlcm1pbmVkIGJ5XG4gKiB0aGUgY2hhbmdlIGZyb20gcHJldlN0YXRlIHRvIG5leHRTdGF0ZS4gV2UgbGVhdmUgcm91dGVzIGlmIGVpdGhlclxuICogMSkgdGhleSBhcmUgbm90IGluIHRoZSBuZXh0IHN0YXRlIG9yIDIpIHRoZXkgYXJlIGluIHRoZSBuZXh0IHN0YXRlXG4gKiBidXQgdGhlaXIgcGFyYW1zIGhhdmUgY2hhbmdlZCAoaS5lLiAvdXNlcnMvMTIzID0+IC91c2Vycy80NTYpLlxuICpcbiAqIGxlYXZlUm91dGVzIGFyZSBvcmRlcmVkIHN0YXJ0aW5nIGF0IHRoZSBsZWFmIHJvdXRlIG9mIHRoZSB0cmVlXG4gKiB3ZSdyZSBsZWF2aW5nIHVwIHRvIHRoZSBjb21tb24gcGFyZW50IHJvdXRlLiBlbnRlclJvdXRlcyBhcmUgb3JkZXJlZFxuICogZnJvbSB0aGUgdG9wIG9mIHRoZSB0cmVlIHdlJ3JlIGVudGVyaW5nIGRvd24gdG8gdGhlIGxlYWYgcm91dGUuXG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVDaGFuZ2VkUm91dGVzKHByZXZTdGF0ZSwgbmV4dFN0YXRlKSB7XG4gIHZhciBwcmV2Um91dGVzID0gcHJldlN0YXRlICYmIHByZXZTdGF0ZS5yb3V0ZXM7XG4gIHZhciBuZXh0Um91dGVzID0gbmV4dFN0YXRlLnJvdXRlcztcblxuICB2YXIgbGVhdmVSb3V0ZXMgPSB1bmRlZmluZWQsXG4gICAgICBlbnRlclJvdXRlcyA9IHVuZGVmaW5lZDtcbiAgaWYgKHByZXZSb3V0ZXMpIHtcbiAgICBsZWF2ZVJvdXRlcyA9IHByZXZSb3V0ZXMuZmlsdGVyKGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgcmV0dXJuIG5leHRSb3V0ZXMuaW5kZXhPZihyb3V0ZSkgPT09IC0xIHx8IHJvdXRlUGFyYW1zQ2hhbmdlZChyb3V0ZSwgcHJldlN0YXRlLCBuZXh0U3RhdGUpO1xuICAgIH0pO1xuXG4gICAgLy8gb25MZWF2ZSBob29rcyBzdGFydCBhdCB0aGUgbGVhZiByb3V0ZS5cbiAgICBsZWF2ZVJvdXRlcy5yZXZlcnNlKCk7XG5cbiAgICBlbnRlclJvdXRlcyA9IG5leHRSb3V0ZXMuZmlsdGVyKGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgcmV0dXJuIHByZXZSb3V0ZXMuaW5kZXhPZihyb3V0ZSkgPT09IC0xIHx8IGxlYXZlUm91dGVzLmluZGV4T2Yocm91dGUpICE9PSAtMTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBsZWF2ZVJvdXRlcyA9IFtdO1xuICAgIGVudGVyUm91dGVzID0gbmV4dFJvdXRlcztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGVhdmVSb3V0ZXM6IGxlYXZlUm91dGVzLFxuICAgIGVudGVyUm91dGVzOiBlbnRlclJvdXRlc1xuICB9O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjb21wdXRlQ2hhbmdlZFJvdXRlcztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZU1lbW9yeUhpc3Rvcnk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9oaXN0b3J5TGliVXNlUXVlcmllcyA9IHJlcXVpcmUoJ2hpc3RvcnkvbGliL3VzZVF1ZXJpZXMnKTtcblxudmFyIF9oaXN0b3J5TGliVXNlUXVlcmllczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oaXN0b3J5TGliVXNlUXVlcmllcyk7XG5cbnZhciBfaGlzdG9yeUxpYlVzZUJhc2VuYW1lID0gcmVxdWlyZSgnaGlzdG9yeS9saWIvdXNlQmFzZW5hbWUnKTtcblxudmFyIF9oaXN0b3J5TGliVXNlQmFzZW5hbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGlzdG9yeUxpYlVzZUJhc2VuYW1lKTtcblxudmFyIF9oaXN0b3J5TGliQ3JlYXRlTWVtb3J5SGlzdG9yeSA9IHJlcXVpcmUoJ2hpc3RvcnkvbGliL2NyZWF0ZU1lbW9yeUhpc3RvcnknKTtcblxudmFyIF9oaXN0b3J5TGliQ3JlYXRlTWVtb3J5SGlzdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oaXN0b3J5TGliQ3JlYXRlTWVtb3J5SGlzdG9yeSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbW9yeUhpc3Rvcnkob3B0aW9ucykge1xuICAvLyBzaWduYXR1cmVzIGFuZCB0eXBlIGNoZWNraW5nIGRpZmZlciBiZXR3ZWVuIGB1c2VSb3V0ZXNgIGFuZFxuICAvLyBgY3JlYXRlTWVtb3J5SGlzdG9yeWAsIGhhdmUgdG8gY3JlYXRlIGBtZW1vcnlIaXN0b3J5YCBmaXJzdCBiZWNhdXNlXG4gIC8vIGB1c2VRdWVyaWVzYCBkb2Vzbid0IHVuZGVyc3RhbmQgdGhlIHNpZ25hdHVyZVxuICB2YXIgbWVtb3J5SGlzdG9yeSA9IF9oaXN0b3J5TGliQ3JlYXRlTWVtb3J5SGlzdG9yeTJbJ2RlZmF1bHQnXShvcHRpb25zKTtcbiAgdmFyIGNyZWF0ZUhpc3RvcnkgPSBmdW5jdGlvbiBjcmVhdGVIaXN0b3J5KCkge1xuICAgIHJldHVybiBtZW1vcnlIaXN0b3J5O1xuICB9O1xuICB2YXIgaGlzdG9yeSA9IF9oaXN0b3J5TGliVXNlUXVlcmllczJbJ2RlZmF1bHQnXShfaGlzdG9yeUxpYlVzZUJhc2VuYW1lMlsnZGVmYXVsdCddKGNyZWF0ZUhpc3RvcnkpKShvcHRpb25zKTtcbiAgaGlzdG9yeS5fX3YyX2NvbXBhdGlibGVfXyA9IHRydWU7XG4gIHJldHVybiBoaXN0b3J5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF91c2VSb3V0ZXJIaXN0b3J5ID0gcmVxdWlyZSgnLi91c2VSb3V0ZXJIaXN0b3J5Jyk7XG5cbnZhciBfdXNlUm91dGVySGlzdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91c2VSb3V0ZXJIaXN0b3J5KTtcblxudmFyIGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChjcmVhdGVIaXN0b3J5KSB7XG4gIHZhciBoaXN0b3J5ID0gdW5kZWZpbmVkO1xuICBpZiAoY2FuVXNlRE9NKSBoaXN0b3J5ID0gX3VzZVJvdXRlckhpc3RvcnkyWydkZWZhdWx0J10oY3JlYXRlSGlzdG9yeSkoKTtcbiAgcmV0dXJuIGhpc3Rvcnk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcm91dGVyV2FybmluZyA9IHJlcXVpcmUoJy4vcm91dGVyV2FybmluZycpO1xuXG52YXIgX3JvdXRlcldhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm91dGVyV2FybmluZyk7XG5cbnZhciBfaGlzdG9yeUxpYkFjdGlvbnMgPSByZXF1aXJlKCdoaXN0b3J5L2xpYi9BY3Rpb25zJyk7XG5cbnZhciBfY29tcHV0ZUNoYW5nZWRSb3V0ZXMyID0gcmVxdWlyZSgnLi9jb21wdXRlQ2hhbmdlZFJvdXRlcycpO1xuXG52YXIgX2NvbXB1dGVDaGFuZ2VkUm91dGVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXB1dGVDaGFuZ2VkUm91dGVzMik7XG5cbnZhciBfVHJhbnNpdGlvblV0aWxzID0gcmVxdWlyZSgnLi9UcmFuc2l0aW9uVXRpbHMnKTtcblxudmFyIF9pc0FjdGl2ZTIgPSByZXF1aXJlKCcuL2lzQWN0aXZlJyk7XG5cbnZhciBfaXNBY3RpdmUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNBY3RpdmUyKTtcblxudmFyIF9nZXRDb21wb25lbnRzID0gcmVxdWlyZSgnLi9nZXRDb21wb25lbnRzJyk7XG5cbnZhciBfZ2V0Q29tcG9uZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRDb21wb25lbnRzKTtcblxudmFyIF9tYXRjaFJvdXRlcyA9IHJlcXVpcmUoJy4vbWF0Y2hSb3V0ZXMnKTtcblxudmFyIF9tYXRjaFJvdXRlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXRjaFJvdXRlcyk7XG5cbmZ1bmN0aW9uIGhhc0FueVByb3BlcnRpZXMob2JqZWN0KSB7XG4gIGZvciAodmFyIHAgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwKSkgcmV0dXJuIHRydWU7XG4gIH1yZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyKGhpc3RvcnksIHJvdXRlcykge1xuICB2YXIgc3RhdGUgPSB7fTtcblxuICAvLyBTaWduYXR1cmUgc2hvdWxkIGJlIChsb2NhdGlvbiwgaW5kZXhPbmx5KSwgYnV0IG5lZWRzIHRvIHN1cHBvcnQgKHBhdGgsXG4gIC8vIHF1ZXJ5LCBpbmRleE9ubHkpXG4gIGZ1bmN0aW9uIGlzQWN0aXZlKGxvY2F0aW9uKSB7XG4gICAgdmFyIGluZGV4T25seU9yRGVwcmVjYXRlZFF1ZXJ5ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBhcmd1bWVudHNbMV07XG4gICAgdmFyIGRlcHJlY2F0ZWRJbmRleE9ubHkgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBudWxsIDogYXJndW1lbnRzWzJdO1xuXG4gICAgdmFyIGluZGV4T25seSA9IHVuZGVmaW5lZDtcbiAgICBpZiAoaW5kZXhPbmx5T3JEZXByZWNhdGVkUXVlcnkgJiYgaW5kZXhPbmx5T3JEZXByZWNhdGVkUXVlcnkgIT09IHRydWUgfHwgZGVwcmVjYXRlZEluZGV4T25seSAhPT0gbnVsbCkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF9yb3V0ZXJXYXJuaW5nMlsnZGVmYXVsdCddKGZhbHNlLCAnYGlzQWN0aXZlKHBhdGhuYW1lLCBxdWVyeSwgaW5kZXhPbmx5KSBpcyBkZXByZWNhdGVkOyB1c2UgYGlzQWN0aXZlKGxvY2F0aW9uLCBpbmRleE9ubHkpYCB3aXRoIGEgbG9jYXRpb24gZGVzY3JpcHRvciBpbnN0ZWFkLiBodHRwOi8vdGlueS5jYy9yb3V0ZXItaXNBY3RpdmVkZXByZWNhdGVkJykgOiB1bmRlZmluZWQ7XG4gICAgICBsb2NhdGlvbiA9IHsgcGF0aG5hbWU6IGxvY2F0aW9uLCBxdWVyeTogaW5kZXhPbmx5T3JEZXByZWNhdGVkUXVlcnkgfTtcbiAgICAgIGluZGV4T25seSA9IGRlcHJlY2F0ZWRJbmRleE9ubHkgfHwgZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uID0gaGlzdG9yeS5jcmVhdGVMb2NhdGlvbihsb2NhdGlvbik7XG4gICAgICBpbmRleE9ubHkgPSBpbmRleE9ubHlPckRlcHJlY2F0ZWRRdWVyeTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2lzQWN0aXZlM1snZGVmYXVsdCddKGxvY2F0aW9uLCBpbmRleE9ubHksIHN0YXRlLmxvY2F0aW9uLCBzdGF0ZS5yb3V0ZXMsIHN0YXRlLnBhcmFtcyk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVMb2NhdGlvbkZyb21SZWRpcmVjdEluZm8obG9jYXRpb24pIHtcbiAgICByZXR1cm4gaGlzdG9yeS5jcmVhdGVMb2NhdGlvbihsb2NhdGlvbiwgX2hpc3RvcnlMaWJBY3Rpb25zLlJFUExBQ0UpO1xuICB9XG5cbiAgdmFyIHBhcnRpYWxOZXh0U3RhdGUgPSB1bmRlZmluZWQ7XG5cbiAgZnVuY3Rpb24gbWF0Y2gobG9jYXRpb24sIGNhbGxiYWNrKSB7XG4gICAgaWYgKHBhcnRpYWxOZXh0U3RhdGUgJiYgcGFydGlhbE5leHRTdGF0ZS5sb2NhdGlvbiA9PT0gbG9jYXRpb24pIHtcbiAgICAgIC8vIENvbnRpbnVlIGZyb20gd2hlcmUgd2UgbGVmdCBvZmYuXG4gICAgICBmaW5pc2hNYXRjaChwYXJ0aWFsTmV4dFN0YXRlLCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9tYXRjaFJvdXRlczJbJ2RlZmF1bHQnXShyb3V0ZXMsIGxvY2F0aW9uLCBmdW5jdGlvbiAoZXJyb3IsIG5leHRTdGF0ZSkge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgIH0gZWxzZSBpZiAobmV4dFN0YXRlKSB7XG4gICAgICAgICAgZmluaXNoTWF0Y2goX2V4dGVuZHMoe30sIG5leHRTdGF0ZSwgeyBsb2NhdGlvbjogbG9jYXRpb24gfSksIGNhbGxiYWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmaW5pc2hNYXRjaChuZXh0U3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIF9jb21wdXRlQ2hhbmdlZFJvdXRlcyA9IF9jb21wdXRlQ2hhbmdlZFJvdXRlczNbJ2RlZmF1bHQnXShzdGF0ZSwgbmV4dFN0YXRlKTtcblxuICAgIHZhciBsZWF2ZVJvdXRlcyA9IF9jb21wdXRlQ2hhbmdlZFJvdXRlcy5sZWF2ZVJvdXRlcztcbiAgICB2YXIgZW50ZXJSb3V0ZXMgPSBfY29tcHV0ZUNoYW5nZWRSb3V0ZXMuZW50ZXJSb3V0ZXM7XG5cbiAgICBfVHJhbnNpdGlvblV0aWxzLnJ1bkxlYXZlSG9va3MobGVhdmVSb3V0ZXMpO1xuXG4gICAgLy8gVGVhciBkb3duIGNvbmZpcm1hdGlvbiBob29rcyBmb3IgbGVmdCByb3V0ZXNcbiAgICBsZWF2ZVJvdXRlcy5mb3JFYWNoKHJlbW92ZUxpc3RlbkJlZm9yZUhvb2tzRm9yUm91dGUpO1xuXG4gICAgX1RyYW5zaXRpb25VdGlscy5ydW5FbnRlckhvb2tzKGVudGVyUm91dGVzLCBuZXh0U3RhdGUsIGZ1bmN0aW9uIChlcnJvciwgcmVkaXJlY3RJbmZvKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgfSBlbHNlIGlmIChyZWRpcmVjdEluZm8pIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgY3JlYXRlTG9jYXRpb25Gcm9tUmVkaXJlY3RJbmZvKHJlZGlyZWN0SW5mbykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVE9ETzogRmV0Y2ggY29tcG9uZW50cyBhZnRlciBzdGF0ZSBpcyB1cGRhdGVkLlxuICAgICAgICBfZ2V0Q29tcG9uZW50czJbJ2RlZmF1bHQnXShuZXh0U3RhdGUsIGZ1bmN0aW9uIChlcnJvciwgY29tcG9uZW50cykge1xuICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBNYWtlIG1hdGNoIGEgcHVyZSBmdW5jdGlvbiBhbmQgaGF2ZSBzb21lIG90aGVyIEFQSVxuICAgICAgICAgICAgLy8gZm9yIFwibWF0Y2ggYW5kIHVwZGF0ZSBzdGF0ZVwiLlxuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgbnVsbCwgc3RhdGUgPSBfZXh0ZW5kcyh7fSwgbmV4dFN0YXRlLCB7IGNvbXBvbmVudHM6IGNvbXBvbmVudHMgfSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YXIgUm91dGVHdWlkID0gMTtcblxuICBmdW5jdGlvbiBnZXRSb3V0ZUlEKHJvdXRlKSB7XG4gICAgdmFyIGNyZWF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBhcmd1bWVudHNbMV07XG5cbiAgICByZXR1cm4gcm91dGUuX19pZF9fIHx8IGNyZWF0ZSAmJiAocm91dGUuX19pZF9fID0gUm91dGVHdWlkKyspO1xuICB9XG5cbiAgdmFyIFJvdXRlSG9va3MgPSB7fTtcblxuICBmdW5jdGlvbiBnZXRSb3V0ZUhvb2tzRm9yUm91dGVzKHJvdXRlcykge1xuICAgIHJldHVybiByb3V0ZXMucmVkdWNlKGZ1bmN0aW9uIChob29rcywgcm91dGUpIHtcbiAgICAgIGhvb2tzLnB1c2guYXBwbHkoaG9va3MsIFJvdXRlSG9va3NbZ2V0Um91dGVJRChyb3V0ZSldKTtcbiAgICAgIHJldHVybiBob29rcztcbiAgICB9LCBbXSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFuc2l0aW9uSG9vayhsb2NhdGlvbiwgY2FsbGJhY2spIHtcbiAgICBfbWF0Y2hSb3V0ZXMyWydkZWZhdWx0J10ocm91dGVzLCBsb2NhdGlvbiwgZnVuY3Rpb24gKGVycm9yLCBuZXh0U3RhdGUpIHtcbiAgICAgIGlmIChuZXh0U3RhdGUgPT0gbnVsbCkge1xuICAgICAgICAvLyBUT0RPOiBXZSBkaWRuJ3QgYWN0dWFsbHkgbWF0Y2ggYW55dGhpbmcsIGJ1dCBoYW5nXG4gICAgICAgIC8vIG9udG8gZXJyb3IvbmV4dFN0YXRlIHNvIHdlIGRvbid0IGhhdmUgdG8gbWF0Y2hSb3V0ZXNcbiAgICAgICAgLy8gYWdhaW4gaW4gdGhlIGxpc3RlbiBjYWxsYmFjay5cbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBDYWNoZSBzb21lIHN0YXRlIGhlcmUgc28gd2UgZG9uJ3QgaGF2ZSB0b1xuICAgICAgLy8gbWF0Y2hSb3V0ZXMoKSBhZ2FpbiBpbiB0aGUgbGlzdGVuIGNhbGxiYWNrLlxuICAgICAgcGFydGlhbE5leHRTdGF0ZSA9IF9leHRlbmRzKHt9LCBuZXh0U3RhdGUsIHsgbG9jYXRpb246IGxvY2F0aW9uIH0pO1xuXG4gICAgICB2YXIgaG9va3MgPSBnZXRSb3V0ZUhvb2tzRm9yUm91dGVzKF9jb21wdXRlQ2hhbmdlZFJvdXRlczNbJ2RlZmF1bHQnXShzdGF0ZSwgcGFydGlhbE5leHRTdGF0ZSkubGVhdmVSb3V0ZXMpO1xuXG4gICAgICB2YXIgcmVzdWx0ID0gdW5kZWZpbmVkO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGhvb2tzLmxlbmd0aDsgcmVzdWx0ID09IG51bGwgJiYgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGxvY2F0aW9uIGFyZyBoZXJlIGluZGljYXRlcyB0b1xuICAgICAgICAvLyB0aGUgdXNlciB0aGF0IHRoaXMgaXMgYSB0cmFuc2l0aW9uIGhvb2suXG4gICAgICAgIHJlc3VsdCA9IGhvb2tzW2ldKGxvY2F0aW9uKTtcbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2socmVzdWx0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiB1bnRlc3RhYmxlIHdpdGggS2FybWEgKi9cbiAgZnVuY3Rpb24gYmVmb3JlVW5sb2FkSG9vaygpIHtcbiAgICAvLyBTeW5jaHJvbm91c2x5IGNoZWNrIHRvIHNlZSBpZiBhbnkgcm91dGUgaG9va3Mgd2FudFxuICAgIC8vIHRvIHByZXZlbnQgdGhlIGN1cnJlbnQgd2luZG93L3RhYiBmcm9tIGNsb3NpbmcuXG4gICAgaWYgKHN0YXRlLnJvdXRlcykge1xuICAgICAgdmFyIGhvb2tzID0gZ2V0Um91dGVIb29rc0ZvclJvdXRlcyhzdGF0ZS5yb3V0ZXMpO1xuXG4gICAgICB2YXIgbWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBob29rcy5sZW5ndGg7IHR5cGVvZiBtZXNzYWdlICE9PSAnc3RyaW5nJyAmJiBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgLy8gUGFzc2luZyBubyBhcmdzIGluZGljYXRlcyB0byB0aGUgdXNlciB0aGF0IHRoaXMgaXMgYVxuICAgICAgICAvLyBiZWZvcmV1bmxvYWQgaG9vay4gV2UgZG9uJ3Qga25vdyB0aGUgbmV4dCBsb2NhdGlvbi5cbiAgICAgICAgbWVzc2FnZSA9IGhvb2tzW2ldKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgIH1cbiAgfVxuXG4gIHZhciB1bmxpc3RlbkJlZm9yZSA9IHVuZGVmaW5lZCxcbiAgICAgIHVubGlzdGVuQmVmb3JlVW5sb2FkID0gdW5kZWZpbmVkO1xuXG4gIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbkJlZm9yZUhvb2tzRm9yUm91dGUocm91dGUpIHtcbiAgICB2YXIgcm91dGVJRCA9IGdldFJvdXRlSUQocm91dGUsIGZhbHNlKTtcbiAgICBpZiAoIXJvdXRlSUQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkZWxldGUgUm91dGVIb29rc1tyb3V0ZUlEXTtcblxuICAgIGlmICghaGFzQW55UHJvcGVydGllcyhSb3V0ZUhvb2tzKSkge1xuICAgICAgLy8gdGVhcmRvd24gdHJhbnNpdGlvbiAmIGJlZm9yZXVubG9hZCBob29rc1xuICAgICAgaWYgKHVubGlzdGVuQmVmb3JlKSB7XG4gICAgICAgIHVubGlzdGVuQmVmb3JlKCk7XG4gICAgICAgIHVubGlzdGVuQmVmb3JlID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHVubGlzdGVuQmVmb3JlVW5sb2FkKSB7XG4gICAgICAgIHVubGlzdGVuQmVmb3JlVW5sb2FkKCk7XG4gICAgICAgIHVubGlzdGVuQmVmb3JlVW5sb2FkID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIHRoZSBnaXZlbiBob29rIGZ1bmN0aW9uIHRvIHJ1biBiZWZvcmUgbGVhdmluZyB0aGUgZ2l2ZW4gcm91dGUuXG4gICAqXG4gICAqIER1cmluZyBhIG5vcm1hbCB0cmFuc2l0aW9uLCB0aGUgaG9vayBmdW5jdGlvbiByZWNlaXZlcyB0aGUgbmV4dCBsb2NhdGlvblxuICAgKiBhcyBpdHMgb25seSBhcmd1bWVudCBhbmQgbXVzdCByZXR1cm4gZWl0aGVyIGEpIGEgcHJvbXB0IG1lc3NhZ2UgdG8gc2hvd1xuICAgKiB0aGUgdXNlciwgdG8gbWFrZSBzdXJlIHRoZXkgd2FudCB0byBsZWF2ZSB0aGUgcGFnZSBvciBiKSBmYWxzZSwgdG8gcHJldmVudFxuICAgKiB0aGUgdHJhbnNpdGlvbi5cbiAgICpcbiAgICogRHVyaW5nIHRoZSBiZWZvcmV1bmxvYWQgZXZlbnQgKGluIGJyb3dzZXJzKSB0aGUgaG9vayByZWNlaXZlcyBubyBhcmd1bWVudHMuXG4gICAqIEluIHRoaXMgY2FzZSBpdCBtdXN0IHJldHVybiBhIHByb21wdCBtZXNzYWdlIHRvIHByZXZlbnQgdGhlIHRyYW5zaXRpb24uXG4gICAqXG4gICAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IG1heSBiZSB1c2VkIHRvIHVuYmluZCB0aGUgbGlzdGVuZXIuXG4gICAqL1xuICBmdW5jdGlvbiBsaXN0ZW5CZWZvcmVMZWF2aW5nUm91dGUocm91dGUsIGhvb2spIHtcbiAgICAvLyBUT0RPOiBXYXJuIGlmIHRoZXkgcmVnaXN0ZXIgZm9yIGEgcm91dGUgdGhhdCBpc24ndCBjdXJyZW50bHlcbiAgICAvLyBhY3RpdmUuIFRoZXkncmUgcHJvYmFibHkgZG9pbmcgc29tZXRoaW5nIHdyb25nLCBsaWtlIHJlLWNyZWF0aW5nXG4gICAgLy8gcm91dGUgb2JqZWN0cyBvbiBldmVyeSBsb2NhdGlvbiBjaGFuZ2UuXG4gICAgdmFyIHJvdXRlSUQgPSBnZXRSb3V0ZUlEKHJvdXRlKTtcbiAgICB2YXIgaG9va3MgPSBSb3V0ZUhvb2tzW3JvdXRlSURdO1xuXG4gICAgaWYgKCFob29rcykge1xuICAgICAgdmFyIHRoZXJlV2VyZU5vUm91dGVIb29rcyA9ICFoYXNBbnlQcm9wZXJ0aWVzKFJvdXRlSG9va3MpO1xuXG4gICAgICBSb3V0ZUhvb2tzW3JvdXRlSURdID0gW2hvb2tdO1xuXG4gICAgICBpZiAodGhlcmVXZXJlTm9Sb3V0ZUhvb2tzKSB7XG4gICAgICAgIC8vIHNldHVwIHRyYW5zaXRpb24gJiBiZWZvcmV1bmxvYWQgaG9va3NcbiAgICAgICAgdW5saXN0ZW5CZWZvcmUgPSBoaXN0b3J5Lmxpc3RlbkJlZm9yZSh0cmFuc2l0aW9uSG9vayk7XG5cbiAgICAgICAgaWYgKGhpc3RvcnkubGlzdGVuQmVmb3JlVW5sb2FkKSB1bmxpc3RlbkJlZm9yZVVubG9hZCA9IGhpc3RvcnkubGlzdGVuQmVmb3JlVW5sb2FkKGJlZm9yZVVubG9hZEhvb2spO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaG9va3MuaW5kZXhPZihob29rKSA9PT0gLTEpIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF9yb3V0ZXJXYXJuaW5nMlsnZGVmYXVsdCddKGZhbHNlLCAnYWRkaW5nIG11bHRpcGxlIGxlYXZlIGhvb2tzIGZvciB0aGUgc2FtZSByb3V0ZSBpcyBkZXByZWNhdGVkOyBtYW5hZ2UgbXVsdGlwbGUgY29uZmlybWF0aW9ucyBpbiB5b3VyIG93biBjb2RlIGluc3RlYWQnKSA6IHVuZGVmaW5lZDtcblxuICAgICAgICBob29rcy5wdXNoKGhvb2spO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaG9va3MgPSBSb3V0ZUhvb2tzW3JvdXRlSURdO1xuXG4gICAgICBpZiAoaG9va3MpIHtcbiAgICAgICAgdmFyIG5ld0hvb2tzID0gaG9va3MuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW0gIT09IGhvb2s7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChuZXdIb29rcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZW1vdmVMaXN0ZW5CZWZvcmVIb29rc0ZvclJvdXRlKHJvdXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBSb3V0ZUhvb2tzW3JvdXRlSURdID0gbmV3SG9va3M7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIEFQSSBmb3Igc3RhdGVmdWwgZW52aXJvbm1lbnRzLiBBcyB0aGUgbG9jYXRpb25cbiAgICogY2hhbmdlcywgd2UgdXBkYXRlIHN0YXRlIGFuZCBjYWxsIHRoZSBsaXN0ZW5lci4gV2UgY2FuIGFsc29cbiAgICogZ3JhY2VmdWxseSBoYW5kbGUgZXJyb3JzIGFuZCByZWRpcmVjdHMuXG4gICAqL1xuICBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICAvLyBUT0RPOiBPbmx5IHVzZSBhIHNpbmdsZSBoaXN0b3J5IGxpc3RlbmVyLiBPdGhlcndpc2Ugd2UnbGxcbiAgICAvLyBlbmQgdXAgd2l0aCBtdWx0aXBsZSBjb25jdXJyZW50IGNhbGxzIHRvIG1hdGNoLlxuICAgIHJldHVybiBoaXN0b3J5Lmxpc3RlbihmdW5jdGlvbiAobG9jYXRpb24pIHtcbiAgICAgIGlmIChzdGF0ZS5sb2NhdGlvbiA9PT0gbG9jYXRpb24pIHtcbiAgICAgICAgbGlzdGVuZXIobnVsbCwgc3RhdGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWF0Y2gobG9jYXRpb24sIGZ1bmN0aW9uIChlcnJvciwgcmVkaXJlY3RMb2NhdGlvbiwgbmV4dFN0YXRlKSB7XG4gICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcihlcnJvcik7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZWRpcmVjdExvY2F0aW9uKSB7XG4gICAgICAgICAgICBoaXN0b3J5LnRyYW5zaXRpb25UbyhyZWRpcmVjdExvY2F0aW9uKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG5leHRTdGF0ZSkge1xuICAgICAgICAgICAgbGlzdGVuZXIobnVsbCwgbmV4dFN0YXRlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF9yb3V0ZXJXYXJuaW5nMlsnZGVmYXVsdCddKGZhbHNlLCAnTG9jYXRpb24gXCIlc1wiIGRpZCBub3QgbWF0Y2ggYW55IHJvdXRlcycsIGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoICsgbG9jYXRpb24uaGFzaCkgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaXNBY3RpdmU6IGlzQWN0aXZlLFxuICAgIG1hdGNoOiBtYXRjaCxcbiAgICBsaXN0ZW5CZWZvcmVMZWF2aW5nUm91dGU6IGxpc3RlbkJlZm9yZUxlYXZpbmdSb3V0ZSxcbiAgICBsaXN0ZW46IGxpc3RlblxuICB9O1xufVxuXG4vL2V4cG9ydCBkZWZhdWx0IHVzZVJvdXRlc1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLyplc2xpbnQgbm8tZW1wdHk6IDAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gZGVwcmVjYXRlT2JqZWN0UHJvcGVydGllcztcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JvdXRlcldhcm5pbmcgPSByZXF1aXJlKCcuL3JvdXRlcldhcm5pbmcnKTtcblxudmFyIF9yb3V0ZXJXYXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JvdXRlcldhcm5pbmcpO1xuXG52YXIgdXNlTWVtYnJhbmUgPSBmYWxzZTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdHJ5IHtcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAneCcsIHsgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSB9KS54KSB7XG4gICAgICB1c2VNZW1icmFuZSA9IHRydWU7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7fVxufVxuXG4vLyB3cmFwcyBhbiBvYmplY3QgaW4gYSBtZW1icmFuZSB0byB3YXJuIGFib3V0IGRlcHJlY2F0ZWQgcHJvcGVydHkgYWNjZXNzXG5cbmZ1bmN0aW9uIGRlcHJlY2F0ZU9iamVjdFByb3BlcnRpZXMob2JqZWN0LCBtZXNzYWdlKSB7XG4gIGlmICghdXNlTWVtYnJhbmUpIHJldHVybiBvYmplY3Q7XG5cbiAgdmFyIG1lbWJyYW5lID0ge307XG5cbiAgdmFyIF9sb29wID0gZnVuY3Rpb24gKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIG9iamVjdFtwcm9wXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbWVtYnJhbmVbcHJvcF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfcm91dGVyV2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgbWVzc2FnZSkgOiB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBvYmplY3RbcHJvcF0uYXBwbHkob2JqZWN0LCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG1lbWJyYW5lLCBwcm9wLCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3JvdXRlcldhcm5pbmcyWydkZWZhdWx0J10oZmFsc2UsIG1lc3NhZ2UpIDogdW5kZWZpbmVkO1xuICAgICAgICAgIHJldHVybiBvYmplY3RbcHJvcF07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBmb3IgKHZhciBwcm9wIGluIG9iamVjdCkge1xuICAgIF9sb29wKHByb3ApO1xuICB9XG5cbiAgcmV0dXJuIG1lbWJyYW5lO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfQXN5bmNVdGlscyA9IHJlcXVpcmUoJy4vQXN5bmNVdGlscycpO1xuXG5mdW5jdGlvbiBnZXRDb21wb25lbnRzRm9yUm91dGUobG9jYXRpb24sIHJvdXRlLCBjYWxsYmFjaykge1xuICBpZiAocm91dGUuY29tcG9uZW50IHx8IHJvdXRlLmNvbXBvbmVudHMpIHtcbiAgICBjYWxsYmFjayhudWxsLCByb3V0ZS5jb21wb25lbnQgfHwgcm91dGUuY29tcG9uZW50cyk7XG4gIH0gZWxzZSBpZiAocm91dGUuZ2V0Q29tcG9uZW50KSB7XG4gICAgcm91dGUuZ2V0Q29tcG9uZW50KGxvY2F0aW9uLCBjYWxsYmFjayk7XG4gIH0gZWxzZSBpZiAocm91dGUuZ2V0Q29tcG9uZW50cykge1xuICAgIHJvdXRlLmdldENvbXBvbmVudHMobG9jYXRpb24sIGNhbGxiYWNrKTtcbiAgfSBlbHNlIHtcbiAgICBjYWxsYmFjaygpO1xuICB9XG59XG5cbi8qKlxuICogQXN5bmNocm9ub3VzbHkgZmV0Y2hlcyBhbGwgY29tcG9uZW50cyBuZWVkZWQgZm9yIHRoZSBnaXZlbiByb3V0ZXJcbiAqIHN0YXRlIGFuZCBjYWxscyBjYWxsYmFjayhlcnJvciwgY29tcG9uZW50cykgd2hlbiBmaW5pc2hlZC5cbiAqXG4gKiBOb3RlOiBUaGlzIG9wZXJhdGlvbiBtYXkgZmluaXNoIHN5bmNocm9ub3VzbHkgaWYgbm8gcm91dGVzIGhhdmUgYW5cbiAqIGFzeW5jaHJvbm91cyBnZXRDb21wb25lbnRzIG1ldGhvZC5cbiAqL1xuZnVuY3Rpb24gZ2V0Q29tcG9uZW50cyhuZXh0U3RhdGUsIGNhbGxiYWNrKSB7XG4gIF9Bc3luY1V0aWxzLm1hcEFzeW5jKG5leHRTdGF0ZS5yb3V0ZXMsIGZ1bmN0aW9uIChyb3V0ZSwgaW5kZXgsIGNhbGxiYWNrKSB7XG4gICAgZ2V0Q29tcG9uZW50c0ZvclJvdXRlKG5leHRTdGF0ZS5sb2NhdGlvbiwgcm91dGUsIGNhbGxiYWNrKTtcbiAgfSwgY2FsbGJhY2spO1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBnZXRDb21wb25lbnRzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX1BhdHRlcm5VdGlscyA9IHJlcXVpcmUoJy4vUGF0dGVyblV0aWxzJyk7XG5cbi8qKlxuICogRXh0cmFjdHMgYW4gb2JqZWN0IG9mIHBhcmFtcyB0aGUgZ2l2ZW4gcm91dGUgY2FyZXMgYWJvdXQgZnJvbVxuICogdGhlIGdpdmVuIHBhcmFtcyBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGdldFJvdXRlUGFyYW1zKHJvdXRlLCBwYXJhbXMpIHtcbiAgdmFyIHJvdXRlUGFyYW1zID0ge307XG5cbiAgaWYgKCFyb3V0ZS5wYXRoKSByZXR1cm4gcm91dGVQYXJhbXM7XG5cbiAgdmFyIHBhcmFtTmFtZXMgPSBfUGF0dGVyblV0aWxzLmdldFBhcmFtTmFtZXMocm91dGUucGF0aCk7XG5cbiAgZm9yICh2YXIgcCBpbiBwYXJhbXMpIHtcbiAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KHApICYmIHBhcmFtTmFtZXMuaW5kZXhPZihwKSAhPT0gLTEpIHJvdXRlUGFyYW1zW3BdID0gcGFyYW1zW3BdO1xuICB9cmV0dXJuIHJvdXRlUGFyYW1zO1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBnZXRSb3V0ZVBhcmFtcztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2hpc3RvcnlMaWJDcmVhdGVIYXNoSGlzdG9yeSA9IHJlcXVpcmUoJ2hpc3RvcnkvbGliL2NyZWF0ZUhhc2hIaXN0b3J5Jyk7XG5cbnZhciBfaGlzdG9yeUxpYkNyZWF0ZUhhc2hIaXN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hpc3RvcnlMaWJDcmVhdGVIYXNoSGlzdG9yeSk7XG5cbnZhciBfY3JlYXRlUm91dGVySGlzdG9yeSA9IHJlcXVpcmUoJy4vY3JlYXRlUm91dGVySGlzdG9yeScpO1xuXG52YXIgX2NyZWF0ZVJvdXRlckhpc3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlUm91dGVySGlzdG9yeSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IF9jcmVhdGVSb3V0ZXJIaXN0b3J5MlsnZGVmYXVsdCddKF9oaXN0b3J5TGliQ3JlYXRlSGFzaEhpc3RvcnkyWydkZWZhdWx0J10pO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLyogY29tcG9uZW50cyAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfUm91dGVyMiA9IHJlcXVpcmUoJy4vUm91dGVyJyk7XG5cbnZhciBfUm91dGVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JvdXRlcjIpO1xuXG5leHBvcnRzLlJvdXRlciA9IF9Sb3V0ZXIzWydkZWZhdWx0J107XG5cbnZhciBfTGluazIgPSByZXF1aXJlKCcuL0xpbmsnKTtcblxudmFyIF9MaW5rMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xpbmsyKTtcblxuZXhwb3J0cy5MaW5rID0gX0xpbmszWydkZWZhdWx0J107XG5cbnZhciBfSW5kZXhMaW5rMiA9IHJlcXVpcmUoJy4vSW5kZXhMaW5rJyk7XG5cbnZhciBfSW5kZXhMaW5rMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0luZGV4TGluazIpO1xuXG5leHBvcnRzLkluZGV4TGluayA9IF9JbmRleExpbmszWydkZWZhdWx0J107XG5cbi8qIGNvbXBvbmVudHMgKGNvbmZpZ3VyYXRpb24pICovXG5cbnZhciBfSW5kZXhSZWRpcmVjdDIgPSByZXF1aXJlKCcuL0luZGV4UmVkaXJlY3QnKTtcblxudmFyIF9JbmRleFJlZGlyZWN0MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0luZGV4UmVkaXJlY3QyKTtcblxuZXhwb3J0cy5JbmRleFJlZGlyZWN0ID0gX0luZGV4UmVkaXJlY3QzWydkZWZhdWx0J107XG5cbnZhciBfSW5kZXhSb3V0ZTIgPSByZXF1aXJlKCcuL0luZGV4Um91dGUnKTtcblxudmFyIF9JbmRleFJvdXRlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0luZGV4Um91dGUyKTtcblxuZXhwb3J0cy5JbmRleFJvdXRlID0gX0luZGV4Um91dGUzWydkZWZhdWx0J107XG5cbnZhciBfUmVkaXJlY3QyID0gcmVxdWlyZSgnLi9SZWRpcmVjdCcpO1xuXG52YXIgX1JlZGlyZWN0MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JlZGlyZWN0Mik7XG5cbmV4cG9ydHMuUmVkaXJlY3QgPSBfUmVkaXJlY3QzWydkZWZhdWx0J107XG5cbnZhciBfUm91dGUyID0gcmVxdWlyZSgnLi9Sb3V0ZScpO1xuXG52YXIgX1JvdXRlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JvdXRlMik7XG5cbmV4cG9ydHMuUm91dGUgPSBfUm91dGUzWydkZWZhdWx0J107XG5cbi8qIG1peGlucyAqL1xuXG52YXIgX0hpc3RvcnkyID0gcmVxdWlyZSgnLi9IaXN0b3J5Jyk7XG5cbnZhciBfSGlzdG9yeTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9IaXN0b3J5Mik7XG5cbmV4cG9ydHMuSGlzdG9yeSA9IF9IaXN0b3J5M1snZGVmYXVsdCddO1xuXG52YXIgX0xpZmVjeWNsZTIgPSByZXF1aXJlKCcuL0xpZmVjeWNsZScpO1xuXG52YXIgX0xpZmVjeWNsZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaWZlY3ljbGUyKTtcblxuZXhwb3J0cy5MaWZlY3ljbGUgPSBfTGlmZWN5Y2xlM1snZGVmYXVsdCddO1xuXG52YXIgX1JvdXRlQ29udGV4dDIgPSByZXF1aXJlKCcuL1JvdXRlQ29udGV4dCcpO1xuXG52YXIgX1JvdXRlQ29udGV4dDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3V0ZUNvbnRleHQyKTtcblxuZXhwb3J0cy5Sb3V0ZUNvbnRleHQgPSBfUm91dGVDb250ZXh0M1snZGVmYXVsdCddO1xuXG4vKiB1dGlscyAqL1xuXG52YXIgX3VzZVJvdXRlczIgPSByZXF1aXJlKCcuL3VzZVJvdXRlcycpO1xuXG52YXIgX3VzZVJvdXRlczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91c2VSb3V0ZXMyKTtcblxuZXhwb3J0cy51c2VSb3V0ZXMgPSBfdXNlUm91dGVzM1snZGVmYXVsdCddO1xuXG52YXIgX1JvdXRlVXRpbHMgPSByZXF1aXJlKCcuL1JvdXRlVXRpbHMnKTtcblxuZXhwb3J0cy5jcmVhdGVSb3V0ZXMgPSBfUm91dGVVdGlscy5jcmVhdGVSb3V0ZXM7XG5cbnZhciBfUm91dGVyQ29udGV4dDIgPSByZXF1aXJlKCcuL1JvdXRlckNvbnRleHQnKTtcblxudmFyIF9Sb3V0ZXJDb250ZXh0MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JvdXRlckNvbnRleHQyKTtcblxuZXhwb3J0cy5Sb3V0ZXJDb250ZXh0ID0gX1JvdXRlckNvbnRleHQzWydkZWZhdWx0J107XG5cbnZhciBfUm91dGluZ0NvbnRleHQyID0gcmVxdWlyZSgnLi9Sb3V0aW5nQ29udGV4dCcpO1xuXG52YXIgX1JvdXRpbmdDb250ZXh0MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JvdXRpbmdDb250ZXh0Mik7XG5cbmV4cG9ydHMuUm91dGluZ0NvbnRleHQgPSBfUm91dGluZ0NvbnRleHQzWydkZWZhdWx0J107XG5cbnZhciBfUHJvcFR5cGVzMiA9IHJlcXVpcmUoJy4vUHJvcFR5cGVzJyk7XG5cbnZhciBfUHJvcFR5cGVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Byb3BUeXBlczIpO1xuXG5leHBvcnRzLlByb3BUeXBlcyA9IF9Qcm9wVHlwZXMzWydkZWZhdWx0J107XG5cbnZhciBfbWF0Y2gyID0gcmVxdWlyZSgnLi9tYXRjaCcpO1xuXG52YXIgX21hdGNoMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hdGNoMik7XG5cbmV4cG9ydHMubWF0Y2ggPSBfbWF0Y2gzWydkZWZhdWx0J107XG5cbnZhciBfdXNlUm91dGVySGlzdG9yeTIgPSByZXF1aXJlKCcuL3VzZVJvdXRlckhpc3RvcnknKTtcblxudmFyIF91c2VSb3V0ZXJIaXN0b3J5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VzZVJvdXRlckhpc3RvcnkyKTtcblxuZXhwb3J0cy51c2VSb3V0ZXJIaXN0b3J5ID0gX3VzZVJvdXRlckhpc3RvcnkzWydkZWZhdWx0J107XG5cbnZhciBfUGF0dGVyblV0aWxzID0gcmVxdWlyZSgnLi9QYXR0ZXJuVXRpbHMnKTtcblxuZXhwb3J0cy5mb3JtYXRQYXR0ZXJuID0gX1BhdHRlcm5VdGlscy5mb3JtYXRQYXR0ZXJuO1xuXG4vKiBoaXN0b3JpZXMgKi9cblxudmFyIF9icm93c2VySGlzdG9yeTIgPSByZXF1aXJlKCcuL2Jyb3dzZXJIaXN0b3J5Jyk7XG5cbnZhciBfYnJvd3Nlckhpc3RvcnkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYnJvd3Nlckhpc3RvcnkyKTtcblxuZXhwb3J0cy5icm93c2VySGlzdG9yeSA9IF9icm93c2VySGlzdG9yeTNbJ2RlZmF1bHQnXTtcblxudmFyIF9oYXNoSGlzdG9yeTIgPSByZXF1aXJlKCcuL2hhc2hIaXN0b3J5Jyk7XG5cbnZhciBfaGFzaEhpc3RvcnkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFzaEhpc3RvcnkyKTtcblxuZXhwb3J0cy5oYXNoSGlzdG9yeSA9IF9oYXNoSGlzdG9yeTNbJ2RlZmF1bHQnXTtcblxudmFyIF9jcmVhdGVNZW1vcnlIaXN0b3J5MiA9IHJlcXVpcmUoJy4vY3JlYXRlTWVtb3J5SGlzdG9yeScpO1xuXG52YXIgX2NyZWF0ZU1lbW9yeUhpc3RvcnkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlTWVtb3J5SGlzdG9yeTIpO1xuXG5leHBvcnRzLmNyZWF0ZU1lbW9yeUhpc3RvcnkgPSBfY3JlYXRlTWVtb3J5SGlzdG9yeTNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBpc0FjdGl2ZTtcblxudmFyIF9QYXR0ZXJuVXRpbHMgPSByZXF1aXJlKCcuL1BhdHRlcm5VdGlscycpO1xuXG5mdW5jdGlvbiBkZWVwRXF1YWwoYSwgYikge1xuICBpZiAoYSA9PSBiKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAoYSA9PSBudWxsIHx8IGIgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYikgJiYgYS5sZW5ndGggPT09IGIubGVuZ3RoICYmIGEuZXZlcnkoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICByZXR1cm4gZGVlcEVxdWFsKGl0ZW0sIGJbaW5kZXhdKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKHZhciBwIGluIGEpIHtcbiAgICAgIGlmICghYS5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFbcF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoYltwXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFiLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoIWRlZXBFcXVhbChhW3BdLCBiW3BdKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gU3RyaW5nKGEpID09PSBTdHJpbmcoYik7XG59XG5cbmZ1bmN0aW9uIHBhcmFtc0FyZUFjdGl2ZShwYXJhbU5hbWVzLCBwYXJhbVZhbHVlcywgYWN0aXZlUGFyYW1zKSB7XG4gIC8vIEZJWE1FOiBUaGlzIGRvZXNuJ3Qgd29yayBvbiByZXBlYXRlZCBwYXJhbXMgaW4gYWN0aXZlUGFyYW1zLlxuICByZXR1cm4gcGFyYW1OYW1lcy5ldmVyeShmdW5jdGlvbiAocGFyYW1OYW1lLCBpbmRleCkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW1WYWx1ZXNbaW5kZXhdKSA9PT0gU3RyaW5nKGFjdGl2ZVBhcmFtc1twYXJhbU5hbWVdKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldE1hdGNoaW5nUm91dGVJbmRleChwYXRobmFtZSwgYWN0aXZlUm91dGVzLCBhY3RpdmVQYXJhbXMpIHtcbiAgdmFyIHJlbWFpbmluZ1BhdGhuYW1lID0gcGF0aG5hbWUsXG4gICAgICBwYXJhbU5hbWVzID0gW10sXG4gICAgICBwYXJhbVZhbHVlcyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhY3RpdmVSb3V0ZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICB2YXIgcm91dGUgPSBhY3RpdmVSb3V0ZXNbaV07XG4gICAgdmFyIHBhdHRlcm4gPSByb3V0ZS5wYXRoIHx8ICcnO1xuXG4gICAgaWYgKHBhdHRlcm4uY2hhckF0KDApID09PSAnLycpIHtcbiAgICAgIHJlbWFpbmluZ1BhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICBwYXJhbU5hbWVzID0gW107XG4gICAgICBwYXJhbVZhbHVlcyA9IFtdO1xuICAgIH1cblxuICAgIGlmIChyZW1haW5pbmdQYXRobmFtZSAhPT0gbnVsbCkge1xuICAgICAgdmFyIG1hdGNoZWQgPSBfUGF0dGVyblV0aWxzLm1hdGNoUGF0dGVybihwYXR0ZXJuLCByZW1haW5pbmdQYXRobmFtZSk7XG4gICAgICByZW1haW5pbmdQYXRobmFtZSA9IG1hdGNoZWQucmVtYWluaW5nUGF0aG5hbWU7XG4gICAgICBwYXJhbU5hbWVzID0gW10uY29uY2F0KHBhcmFtTmFtZXMsIG1hdGNoZWQucGFyYW1OYW1lcyk7XG4gICAgICBwYXJhbVZhbHVlcyA9IFtdLmNvbmNhdChwYXJhbVZhbHVlcywgbWF0Y2hlZC5wYXJhbVZhbHVlcyk7XG4gICAgfVxuXG4gICAgaWYgKHJlbWFpbmluZ1BhdGhuYW1lID09PSAnJyAmJiByb3V0ZS5wYXRoICYmIHBhcmFtc0FyZUFjdGl2ZShwYXJhbU5hbWVzLCBwYXJhbVZhbHVlcywgYWN0aXZlUGFyYW1zKSkgcmV0dXJuIGk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHBhdGhuYW1lIG1hdGNoZXMgdGhlIGFjdGl2ZSByb3V0ZXNcbiAqIGFuZCBwYXJhbXMuXG4gKi9cbmZ1bmN0aW9uIHJvdXRlSXNBY3RpdmUocGF0aG5hbWUsIHJvdXRlcywgcGFyYW1zLCBpbmRleE9ubHkpIHtcbiAgdmFyIGkgPSBnZXRNYXRjaGluZ1JvdXRlSW5kZXgocGF0aG5hbWUsIHJvdXRlcywgcGFyYW1zKTtcblxuICBpZiAoaSA9PT0gbnVsbCkge1xuICAgIC8vIE5vIG1hdGNoLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIGlmICghaW5kZXhPbmx5KSB7XG4gICAgLy8gQW55IG1hdGNoIGlzIGdvb2QgZW5vdWdoLlxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gSWYgYW55IHJlbWFpbmluZyByb3V0ZXMgcGFzdCB0aGUgbWF0Y2ggaW5kZXggaGF2ZSBwYXRocywgdGhlbiB3ZSBjYW4ndFxuICAvLyBiZSBvbiB0aGUgaW5kZXggcm91dGUuXG4gIHJldHVybiByb3V0ZXMuc2xpY2UoaSArIDEpLmV2ZXJ5KGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgIHJldHVybiAhcm91dGUucGF0aDtcbiAgfSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGFsbCBrZXkvdmFsdWUgcGFpcnMgaW4gdGhlIGdpdmVuIHF1ZXJ5IGFyZVxuICogY3VycmVudGx5IGFjdGl2ZS5cbiAqL1xuZnVuY3Rpb24gcXVlcnlJc0FjdGl2ZShxdWVyeSwgYWN0aXZlUXVlcnkpIHtcbiAgaWYgKGFjdGl2ZVF1ZXJ5ID09IG51bGwpIHJldHVybiBxdWVyeSA9PSBudWxsO1xuXG4gIGlmIChxdWVyeSA9PSBudWxsKSByZXR1cm4gdHJ1ZTtcblxuICByZXR1cm4gZGVlcEVxdWFsKHF1ZXJ5LCBhY3RpdmVRdWVyeSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGEgPExpbms+IHRvIHRoZSBnaXZlbiBwYXRobmFtZS9xdWVyeSBjb21iaW5hdGlvbiBpc1xuICogY3VycmVudGx5IGFjdGl2ZS5cbiAqL1xuXG5mdW5jdGlvbiBpc0FjdGl2ZShfcmVmLCBpbmRleE9ubHksIGN1cnJlbnRMb2NhdGlvbiwgcm91dGVzLCBwYXJhbXMpIHtcbiAgdmFyIHBhdGhuYW1lID0gX3JlZi5wYXRobmFtZTtcbiAgdmFyIHF1ZXJ5ID0gX3JlZi5xdWVyeTtcblxuICBpZiAoY3VycmVudExvY2F0aW9uID09IG51bGwpIHJldHVybiBmYWxzZTtcblxuICBpZiAoIXJvdXRlSXNBY3RpdmUocGF0aG5hbWUsIHJvdXRlcywgcGFyYW1zLCBpbmRleE9ubHkpKSByZXR1cm4gZmFsc2U7XG5cbiAgcmV0dXJuIHF1ZXJ5SXNBY3RpdmUocXVlcnksIGN1cnJlbnRMb2NhdGlvbi5xdWVyeSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfY3JlYXRlTWVtb3J5SGlzdG9yeSA9IHJlcXVpcmUoJy4vY3JlYXRlTWVtb3J5SGlzdG9yeScpO1xuXG52YXIgX2NyZWF0ZU1lbW9yeUhpc3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlTWVtb3J5SGlzdG9yeSk7XG5cbnZhciBfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIgPSByZXF1aXJlKCcuL2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyJyk7XG5cbnZhciBfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIpO1xuXG52YXIgX1JvdXRlVXRpbHMgPSByZXF1aXJlKCcuL1JvdXRlVXRpbHMnKTtcblxudmFyIF9Sb3V0ZXJVdGlscyA9IHJlcXVpcmUoJy4vUm91dGVyVXRpbHMnKTtcblxuLyoqXG4gKiBBIGhpZ2gtbGV2ZWwgQVBJIHRvIGJlIHVzZWQgZm9yIHNlcnZlci1zaWRlIHJlbmRlcmluZy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIG1hdGNoZXMgYSBsb2NhdGlvbiB0byBhIHNldCBvZiByb3V0ZXMgYW5kIGNhbGxzXG4gKiBjYWxsYmFjayhlcnJvciwgcmVkaXJlY3RMb2NhdGlvbiwgcmVuZGVyUHJvcHMpIHdoZW4gZmluaXNoZWQuXG4gKlxuICogTm90ZTogWW91IHByb2JhYmx5IGRvbid0IHdhbnQgdG8gdXNlIHRoaXMgaW4gYSBicm93c2VyIHVubGVzcyB5b3UncmUgdXNpbmdcbiAqIHNlcnZlci1zaWRlIHJlbmRlcmluZyB3aXRoIGFzeW5jIHJvdXRlcy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goX3JlZiwgY2FsbGJhY2spIHtcbiAgdmFyIGhpc3RvcnkgPSBfcmVmLmhpc3Rvcnk7XG4gIHZhciByb3V0ZXMgPSBfcmVmLnJvdXRlcztcbiAgdmFyIGxvY2F0aW9uID0gX3JlZi5sb2NhdGlvbjtcblxuICB2YXIgb3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2hpc3RvcnknLCAncm91dGVzJywgJ2xvY2F0aW9uJ10pO1xuXG4gICEoaGlzdG9yeSB8fCBsb2NhdGlvbikgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSwgJ21hdGNoIG5lZWRzIGEgaGlzdG9yeSBvciBhIGxvY2F0aW9uJykgOiBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlKSA6IHVuZGVmaW5lZDtcblxuICBoaXN0b3J5ID0gaGlzdG9yeSA/IGhpc3RvcnkgOiBfY3JlYXRlTWVtb3J5SGlzdG9yeTJbJ2RlZmF1bHQnXShvcHRpb25zKTtcbiAgdmFyIHRyYW5zaXRpb25NYW5hZ2VyID0gX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyMlsnZGVmYXVsdCddKGhpc3RvcnksIF9Sb3V0ZVV0aWxzLmNyZWF0ZVJvdXRlcyhyb3V0ZXMpKTtcblxuICB2YXIgdW5saXN0ZW4gPSB1bmRlZmluZWQ7XG5cbiAgaWYgKGxvY2F0aW9uKSB7XG4gICAgLy8gQWxsb3cgbWF0Y2goeyBsb2NhdGlvbjogJy90aGUvcGF0aCcsIC4uLiB9KVxuICAgIGxvY2F0aW9uID0gaGlzdG9yeS5jcmVhdGVMb2NhdGlvbihsb2NhdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgLy8gUGljayB1cCB0aGUgbG9jYXRpb24gZnJvbSB0aGUgaGlzdG9yeSB2aWEgc3luY2hyb25vdXMgaGlzdG9yeS5saXN0ZW5cbiAgICAvLyBjYWxsIGlmIG5lZWRlZC5cbiAgICB1bmxpc3RlbiA9IGhpc3RvcnkubGlzdGVuKGZ1bmN0aW9uIChoaXN0b3J5TG9jYXRpb24pIHtcbiAgICAgIGxvY2F0aW9uID0gaGlzdG9yeUxvY2F0aW9uO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHJvdXRlciA9IF9Sb3V0ZXJVdGlscy5jcmVhdGVSb3V0ZXJPYmplY3QoaGlzdG9yeSwgdHJhbnNpdGlvbk1hbmFnZXIpO1xuICBoaXN0b3J5ID0gX1JvdXRlclV0aWxzLmNyZWF0ZVJvdXRpbmdIaXN0b3J5KGhpc3RvcnksIHRyYW5zaXRpb25NYW5hZ2VyKTtcblxuICB0cmFuc2l0aW9uTWFuYWdlci5tYXRjaChsb2NhdGlvbiwgZnVuY3Rpb24gKGVycm9yLCByZWRpcmVjdExvY2F0aW9uLCBuZXh0U3RhdGUpIHtcbiAgICBjYWxsYmFjayhlcnJvciwgcmVkaXJlY3RMb2NhdGlvbiwgbmV4dFN0YXRlICYmIF9leHRlbmRzKHt9LCBuZXh0U3RhdGUsIHtcbiAgICAgIGhpc3Rvcnk6IGhpc3RvcnksXG4gICAgICByb3V0ZXI6IHJvdXRlcixcbiAgICAgIG1hdGNoQ29udGV4dDogeyBoaXN0b3J5OiBoaXN0b3J5LCB0cmFuc2l0aW9uTWFuYWdlcjogdHJhbnNpdGlvbk1hbmFnZXIsIHJvdXRlcjogcm91dGVyIH1cbiAgICB9KSk7XG5cbiAgICAvLyBEZWZlciByZW1vdmluZyB0aGUgbGlzdGVuZXIgdG8gaGVyZSB0byBwcmV2ZW50IERPTSBoaXN0b3JpZXMgZnJvbSBoYXZpbmdcbiAgICAvLyB0byB1bndpbmQgRE9NIGV2ZW50IGxpc3RlbmVycyB1bm5lY2Vzc2FyaWx5LCBpbiBjYXNlIGNhbGxiYWNrIHJlbmRlcnMgYVxuICAgIC8vIDxSb3V0ZXI+IGFuZCBhdHRhY2hlcyBhbm90aGVyIGhpc3RvcnkgbGlzdGVuZXIuXG4gICAgaWYgKHVubGlzdGVuKSB7XG4gICAgICB1bmxpc3RlbigpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IG1hdGNoO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcm91dGVyV2FybmluZyA9IHJlcXVpcmUoJy4vcm91dGVyV2FybmluZycpO1xuXG52YXIgX3JvdXRlcldhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm91dGVyV2FybmluZyk7XG5cbnZhciBfQXN5bmNVdGlscyA9IHJlcXVpcmUoJy4vQXN5bmNVdGlscycpO1xuXG52YXIgX1BhdHRlcm5VdGlscyA9IHJlcXVpcmUoJy4vUGF0dGVyblV0aWxzJyk7XG5cbnZhciBfUm91dGVVdGlscyA9IHJlcXVpcmUoJy4vUm91dGVVdGlscycpO1xuXG5mdW5jdGlvbiBnZXRDaGlsZFJvdXRlcyhyb3V0ZSwgbG9jYXRpb24sIGNhbGxiYWNrKSB7XG4gIGlmIChyb3V0ZS5jaGlsZFJvdXRlcykge1xuICAgIHJldHVybiBbbnVsbCwgcm91dGUuY2hpbGRSb3V0ZXNdO1xuICB9XG4gIGlmICghcm91dGUuZ2V0Q2hpbGRSb3V0ZXMpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgc3luYyA9IHRydWUsXG4gICAgICByZXN1bHQgPSB1bmRlZmluZWQ7XG5cbiAgcm91dGUuZ2V0Q2hpbGRSb3V0ZXMobG9jYXRpb24sIGZ1bmN0aW9uIChlcnJvciwgY2hpbGRSb3V0ZXMpIHtcbiAgICBjaGlsZFJvdXRlcyA9ICFlcnJvciAmJiBfUm91dGVVdGlscy5jcmVhdGVSb3V0ZXMoY2hpbGRSb3V0ZXMpO1xuICAgIGlmIChzeW5jKSB7XG4gICAgICByZXN1bHQgPSBbZXJyb3IsIGNoaWxkUm91dGVzXTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjYWxsYmFjayhlcnJvciwgY2hpbGRSb3V0ZXMpO1xuICB9KTtcblxuICBzeW5jID0gZmFsc2U7XG4gIHJldHVybiByZXN1bHQ7IC8vIE1pZ2h0IGJlIHVuZGVmaW5lZC5cbn1cblxuZnVuY3Rpb24gZ2V0SW5kZXhSb3V0ZShyb3V0ZSwgbG9jYXRpb24sIGNhbGxiYWNrKSB7XG4gIGlmIChyb3V0ZS5pbmRleFJvdXRlKSB7XG4gICAgY2FsbGJhY2sobnVsbCwgcm91dGUuaW5kZXhSb3V0ZSk7XG4gIH0gZWxzZSBpZiAocm91dGUuZ2V0SW5kZXhSb3V0ZSkge1xuICAgIHJvdXRlLmdldEluZGV4Um91dGUobG9jYXRpb24sIGZ1bmN0aW9uIChlcnJvciwgaW5kZXhSb3V0ZSkge1xuICAgICAgY2FsbGJhY2soZXJyb3IsICFlcnJvciAmJiBfUm91dGVVdGlscy5jcmVhdGVSb3V0ZXMoaW5kZXhSb3V0ZSlbMF0pO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHJvdXRlLmNoaWxkUm91dGVzKSB7XG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwYXRobGVzcyA9IHJvdXRlLmNoaWxkUm91dGVzLmZpbHRlcihmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiAhb2JqLmhhc093blByb3BlcnR5KCdwYXRoJyk7XG4gICAgICB9KTtcblxuICAgICAgX0FzeW5jVXRpbHMubG9vcEFzeW5jKHBhdGhsZXNzLmxlbmd0aCwgZnVuY3Rpb24gKGluZGV4LCBuZXh0LCBkb25lKSB7XG4gICAgICAgIGdldEluZGV4Um91dGUocGF0aGxlc3NbaW5kZXhdLCBsb2NhdGlvbiwgZnVuY3Rpb24gKGVycm9yLCBpbmRleFJvdXRlKSB7XG4gICAgICAgICAgaWYgKGVycm9yIHx8IGluZGV4Um91dGUpIHtcbiAgICAgICAgICAgIHZhciByb3V0ZXMgPSBbcGF0aGxlc3NbaW5kZXhdXS5jb25jYXQoQXJyYXkuaXNBcnJheShpbmRleFJvdXRlKSA/IGluZGV4Um91dGUgOiBbaW5kZXhSb3V0ZV0pO1xuICAgICAgICAgICAgZG9uZShlcnJvciwgcm91dGVzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LCBmdW5jdGlvbiAoZXJyLCByb3V0ZXMpIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgcm91dGVzKTtcbiAgICAgIH0pO1xuICAgIH0pKCk7XG4gIH0gZWxzZSB7XG4gICAgY2FsbGJhY2soKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NpZ25QYXJhbXMocGFyYW1zLCBwYXJhbU5hbWVzLCBwYXJhbVZhbHVlcykge1xuICByZXR1cm4gcGFyYW1OYW1lcy5yZWR1Y2UoZnVuY3Rpb24gKHBhcmFtcywgcGFyYW1OYW1lLCBpbmRleCkge1xuICAgIHZhciBwYXJhbVZhbHVlID0gcGFyYW1WYWx1ZXMgJiYgcGFyYW1WYWx1ZXNbaW5kZXhdO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGFyYW1zW3BhcmFtTmFtZV0pKSB7XG4gICAgICBwYXJhbXNbcGFyYW1OYW1lXS5wdXNoKHBhcmFtVmFsdWUpO1xuICAgIH0gZWxzZSBpZiAocGFyYW1OYW1lIGluIHBhcmFtcykge1xuICAgICAgcGFyYW1zW3BhcmFtTmFtZV0gPSBbcGFyYW1zW3BhcmFtTmFtZV0sIHBhcmFtVmFsdWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJhbXNbcGFyYW1OYW1lXSA9IHBhcmFtVmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfSwgcGFyYW1zKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGFyYW1zKHBhcmFtTmFtZXMsIHBhcmFtVmFsdWVzKSB7XG4gIHJldHVybiBhc3NpZ25QYXJhbXMoe30sIHBhcmFtTmFtZXMsIHBhcmFtVmFsdWVzKTtcbn1cblxuZnVuY3Rpb24gbWF0Y2hSb3V0ZURlZXAocm91dGUsIGxvY2F0aW9uLCByZW1haW5pbmdQYXRobmFtZSwgcGFyYW1OYW1lcywgcGFyYW1WYWx1ZXMsIGNhbGxiYWNrKSB7XG4gIHZhciBwYXR0ZXJuID0gcm91dGUucGF0aCB8fCAnJztcblxuICBpZiAocGF0dGVybi5jaGFyQXQoMCkgPT09ICcvJykge1xuICAgIHJlbWFpbmluZ1BhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWU7XG4gICAgcGFyYW1OYW1lcyA9IFtdO1xuICAgIHBhcmFtVmFsdWVzID0gW107XG4gIH1cblxuICBpZiAocmVtYWluaW5nUGF0aG5hbWUgIT09IG51bGwpIHtcbiAgICB2YXIgbWF0Y2hlZCA9IF9QYXR0ZXJuVXRpbHMubWF0Y2hQYXR0ZXJuKHBhdHRlcm4sIHJlbWFpbmluZ1BhdGhuYW1lKTtcbiAgICByZW1haW5pbmdQYXRobmFtZSA9IG1hdGNoZWQucmVtYWluaW5nUGF0aG5hbWU7XG4gICAgcGFyYW1OYW1lcyA9IFtdLmNvbmNhdChwYXJhbU5hbWVzLCBtYXRjaGVkLnBhcmFtTmFtZXMpO1xuICAgIHBhcmFtVmFsdWVzID0gW10uY29uY2F0KHBhcmFtVmFsdWVzLCBtYXRjaGVkLnBhcmFtVmFsdWVzKTtcblxuICAgIGlmIChyZW1haW5pbmdQYXRobmFtZSA9PT0gJycgJiYgcm91dGUucGF0aCkge1xuICAgICAgdmFyIF9yZXQyID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0ge1xuICAgICAgICAgIHJvdXRlczogW3JvdXRlXSxcbiAgICAgICAgICBwYXJhbXM6IGNyZWF0ZVBhcmFtcyhwYXJhbU5hbWVzLCBwYXJhbVZhbHVlcylcbiAgICAgICAgfTtcblxuICAgICAgICBnZXRJbmRleFJvdXRlKHJvdXRlLCBsb2NhdGlvbiwgZnVuY3Rpb24gKGVycm9yLCBpbmRleFJvdXRlKSB7XG4gICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGluZGV4Um91dGUpKSB7XG4gICAgICAgICAgICAgIHZhciBfbWF0Y2gkcm91dGVzO1xuXG4gICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfcm91dGVyV2FybmluZzJbJ2RlZmF1bHQnXShpbmRleFJvdXRlLmV2ZXJ5KGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhcm91dGUucGF0aDtcbiAgICAgICAgICAgICAgfSksICdJbmRleCByb3V0ZXMgc2hvdWxkIG5vdCBoYXZlIHBhdGhzJykgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgIChfbWF0Y2gkcm91dGVzID0gbWF0Y2gucm91dGVzKS5wdXNoLmFwcGx5KF9tYXRjaCRyb3V0ZXMsIGluZGV4Um91dGUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleFJvdXRlKSB7XG4gICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfcm91dGVyV2FybmluZzJbJ2RlZmF1bHQnXSghaW5kZXhSb3V0ZS5wYXRoLCAnSW5kZXggcm91dGVzIHNob3VsZCBub3QgaGF2ZSBwYXRocycpIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICBtYXRjaC5yb3V0ZXMucHVzaChpbmRleFJvdXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgbWF0Y2gpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdjogdW5kZWZpbmVkXG4gICAgICAgIH07XG4gICAgICB9KSgpO1xuXG4gICAgICBpZiAodHlwZW9mIF9yZXQyID09PSAnb2JqZWN0JykgcmV0dXJuIF9yZXQyLnY7XG4gICAgfVxuICB9XG5cbiAgaWYgKHJlbWFpbmluZ1BhdGhuYW1lICE9IG51bGwgfHwgcm91dGUuY2hpbGRSb3V0ZXMpIHtcbiAgICAvLyBFaXRoZXIgYSkgdGhpcyByb3V0ZSBtYXRjaGVkIGF0IGxlYXN0IHNvbWUgb2YgdGhlIHBhdGggb3IgYilcbiAgICAvLyB3ZSBkb24ndCBoYXZlIHRvIGxvYWQgdGhpcyByb3V0ZSdzIGNoaWxkcmVuIGFzeW5jaHJvbm91c2x5LiBJblxuICAgIC8vIGVpdGhlciBjYXNlIGNvbnRpbnVlIGNoZWNraW5nIGZvciBtYXRjaGVzIGluIHRoZSBzdWJ0cmVlLlxuICAgIHZhciBvbkNoaWxkUm91dGVzID0gZnVuY3Rpb24gb25DaGlsZFJvdXRlcyhlcnJvciwgY2hpbGRSb3V0ZXMpIHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkUm91dGVzKSB7XG4gICAgICAgIC8vIENoZWNrIHRoZSBjaGlsZCByb3V0ZXMgdG8gc2VlIGlmIGFueSBvZiB0aGVtIG1hdGNoLlxuICAgICAgICBtYXRjaFJvdXRlcyhjaGlsZFJvdXRlcywgbG9jYXRpb24sIGZ1bmN0aW9uIChlcnJvciwgbWF0Y2gpIHtcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAvLyBBIGNoaWxkIHJvdXRlIG1hdGNoZWQhIEF1Z21lbnQgdGhlIG1hdGNoIGFuZCBwYXNzIGl0IHVwIHRoZSBzdGFjay5cbiAgICAgICAgICAgIG1hdGNoLnJvdXRlcy51bnNoaWZ0KHJvdXRlKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIG1hdGNoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHJlbWFpbmluZ1BhdGhuYW1lLCBwYXJhbU5hbWVzLCBwYXJhbVZhbHVlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgcmVzdWx0ID0gZ2V0Q2hpbGRSb3V0ZXMocm91dGUsIGxvY2F0aW9uLCBvbkNoaWxkUm91dGVzKTtcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBvbkNoaWxkUm91dGVzLmFwcGx5KHVuZGVmaW5lZCwgcmVzdWx0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY2FsbGJhY2soKTtcbiAgfVxufVxuXG4vKipcbiAqIEFzeW5jaHJvbm91c2x5IG1hdGNoZXMgdGhlIGdpdmVuIGxvY2F0aW9uIHRvIGEgc2V0IG9mIHJvdXRlcyBhbmQgY2FsbHNcbiAqIGNhbGxiYWNrKGVycm9yLCBzdGF0ZSkgd2hlbiBmaW5pc2hlZC4gVGhlIHN0YXRlIG9iamVjdCB3aWxsIGhhdmUgdGhlXG4gKiBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqXG4gKiAtIHJvdXRlcyAgICAgICBBbiBhcnJheSBvZiByb3V0ZXMgdGhhdCBtYXRjaGVkLCBpbiBoaWVyYXJjaGljYWwgb3JkZXJcbiAqIC0gcGFyYW1zICAgICAgIEFuIG9iamVjdCBvZiBVUkwgcGFyYW1ldGVyc1xuICpcbiAqIE5vdGU6IFRoaXMgb3BlcmF0aW9uIG1heSBmaW5pc2ggc3luY2hyb25vdXNseSBpZiBubyByb3V0ZXMgaGF2ZSBhblxuICogYXN5bmNocm9ub3VzIGdldENoaWxkUm91dGVzIG1ldGhvZC5cbiAqL1xuZnVuY3Rpb24gbWF0Y2hSb3V0ZXMocm91dGVzLCBsb2NhdGlvbiwgY2FsbGJhY2spIHtcbiAgdmFyIHJlbWFpbmluZ1BhdGhuYW1lID0gYXJndW1lbnRzLmxlbmd0aCA8PSAzIHx8IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8gbG9jYXRpb24ucGF0aG5hbWUgOiBhcmd1bWVudHNbM107XG4gIHZhciBwYXJhbU5hbWVzID0gYXJndW1lbnRzLmxlbmd0aCA8PSA0IHx8IGFyZ3VtZW50c1s0XSA9PT0gdW5kZWZpbmVkID8gW10gOiBhcmd1bWVudHNbNF07XG4gIHZhciBwYXJhbVZhbHVlcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gNSB8fCBhcmd1bWVudHNbNV0gPT09IHVuZGVmaW5lZCA/IFtdIDogYXJndW1lbnRzWzVdO1xuICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcbiAgICBfQXN5bmNVdGlscy5sb29wQXN5bmMocm91dGVzLmxlbmd0aCwgZnVuY3Rpb24gKGluZGV4LCBuZXh0LCBkb25lKSB7XG4gICAgICBtYXRjaFJvdXRlRGVlcChyb3V0ZXNbaW5kZXhdLCBsb2NhdGlvbiwgcmVtYWluaW5nUGF0aG5hbWUsIHBhcmFtTmFtZXMsIHBhcmFtVmFsdWVzLCBmdW5jdGlvbiAoZXJyb3IsIG1hdGNoKSB7XG4gICAgICAgIGlmIChlcnJvciB8fCBtYXRjaCkge1xuICAgICAgICAgIGRvbmUoZXJyb3IsIG1hdGNoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIGNhbGxiYWNrKTtcbiAgfSkoKTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gbWF0Y2hSb3V0ZXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSByb3V0ZXJXYXJuaW5nO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiByb3V0ZXJXYXJuaW5nKGZhbHNlVG9XYXJuLCBtZXNzYWdlKSB7XG4gIG1lc3NhZ2UgPSAnW3JlYWN0LXJvdXRlcl0gJyArIG1lc3NhZ2U7XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3dhcm5pbmcyWydkZWZhdWx0J10uYXBwbHkodW5kZWZpbmVkLCBbZmFsc2VUb1dhcm4sIG1lc3NhZ2VdLmNvbmNhdChhcmdzKSkgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHVzZVJvdXRlckhpc3Rvcnk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9oaXN0b3J5TGliVXNlUXVlcmllcyA9IHJlcXVpcmUoJ2hpc3RvcnkvbGliL3VzZVF1ZXJpZXMnKTtcblxudmFyIF9oaXN0b3J5TGliVXNlUXVlcmllczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oaXN0b3J5TGliVXNlUXVlcmllcyk7XG5cbnZhciBfaGlzdG9yeUxpYlVzZUJhc2VuYW1lID0gcmVxdWlyZSgnaGlzdG9yeS9saWIvdXNlQmFzZW5hbWUnKTtcblxudmFyIF9oaXN0b3J5TGliVXNlQmFzZW5hbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGlzdG9yeUxpYlVzZUJhc2VuYW1lKTtcblxuZnVuY3Rpb24gdXNlUm91dGVySGlzdG9yeShjcmVhdGVIaXN0b3J5KSB7XG4gIHJldHVybiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciBoaXN0b3J5ID0gX2hpc3RvcnlMaWJVc2VRdWVyaWVzMlsnZGVmYXVsdCddKF9oaXN0b3J5TGliVXNlQmFzZW5hbWUyWydkZWZhdWx0J10oY3JlYXRlSGlzdG9yeSkpKG9wdGlvbnMpO1xuICAgIGhpc3RvcnkuX192Ml9jb21wYXRpYmxlX18gPSB0cnVlO1xuICAgIHJldHVybiBoaXN0b3J5O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgX2hpc3RvcnlMaWJVc2VRdWVyaWVzID0gcmVxdWlyZSgnaGlzdG9yeS9saWIvdXNlUXVlcmllcycpO1xuXG52YXIgX2hpc3RvcnlMaWJVc2VRdWVyaWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hpc3RvcnlMaWJVc2VRdWVyaWVzKTtcblxudmFyIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlciA9IHJlcXVpcmUoJy4vY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXInKTtcblxudmFyIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcik7XG5cbnZhciBfcm91dGVyV2FybmluZyA9IHJlcXVpcmUoJy4vcm91dGVyV2FybmluZycpO1xuXG52YXIgX3JvdXRlcldhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm91dGVyV2FybmluZyk7XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBjcmVhdGVIaXN0b3J5IGZ1bmN0aW9uIHRoYXQgbWF5IGJlIHVzZWQgdG8gY3JlYXRlXG4gKiBoaXN0b3J5IG9iamVjdHMgdGhhdCBrbm93IGFib3V0IHJvdXRpbmcuXG4gKlxuICogRW5oYW5jZXMgaGlzdG9yeSBvYmplY3RzIHdpdGggdGhlIGZvbGxvd2luZyBtZXRob2RzOlxuICpcbiAqIC0gbGlzdGVuKChlcnJvciwgbmV4dFN0YXRlKSA9PiB7fSlcbiAqIC0gbGlzdGVuQmVmb3JlTGVhdmluZ1JvdXRlKHJvdXRlLCAobmV4dExvY2F0aW9uKSA9PiB7fSlcbiAqIC0gbWF0Y2gobG9jYXRpb24sIChlcnJvciwgcmVkaXJlY3RMb2NhdGlvbiwgbmV4dFN0YXRlKSA9PiB7fSlcbiAqIC0gaXNBY3RpdmUocGF0aG5hbWUsIHF1ZXJ5LCBpbmRleE9ubHk9ZmFsc2UpXG4gKi9cbmZ1bmN0aW9uIHVzZVJvdXRlcyhjcmVhdGVIaXN0b3J5KSB7XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfcm91dGVyV2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgJ2B1c2VSb3V0ZXNgIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgYGNyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyYCBpbnN0ZWFkLicpIDogdW5kZWZpbmVkO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuICAgIHZhciByb3V0ZXMgPSBfcmVmLnJvdXRlcztcblxuICAgIHZhciBvcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsncm91dGVzJ10pO1xuXG4gICAgdmFyIGhpc3RvcnkgPSBfaGlzdG9yeUxpYlVzZVF1ZXJpZXMyWydkZWZhdWx0J10oY3JlYXRlSGlzdG9yeSkob3B0aW9ucyk7XG4gICAgdmFyIHRyYW5zaXRpb25NYW5hZ2VyID0gX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyMlsnZGVmYXVsdCddKGhpc3RvcnksIHJvdXRlcyk7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBoaXN0b3J5LCB0cmFuc2l0aW9uTWFuYWdlcik7XG4gIH07XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHVzZVJvdXRlcztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8qKlxuICogSW5kaWNhdGVzIHRoYXQgbmF2aWdhdGlvbiB3YXMgY2F1c2VkIGJ5IGEgY2FsbCB0byBoaXN0b3J5LnB1c2guXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBQVVNIID0gJ1BVU0gnO1xuXG5leHBvcnRzLlBVU0ggPSBQVVNIO1xuLyoqXG4gKiBJbmRpY2F0ZXMgdGhhdCBuYXZpZ2F0aW9uIHdhcyBjYXVzZWQgYnkgYSBjYWxsIHRvIGhpc3RvcnkucmVwbGFjZS5cbiAqL1xudmFyIFJFUExBQ0UgPSAnUkVQTEFDRSc7XG5cbmV4cG9ydHMuUkVQTEFDRSA9IFJFUExBQ0U7XG4vKipcbiAqIEluZGljYXRlcyB0aGF0IG5hdmlnYXRpb24gd2FzIGNhdXNlZCBieSBzb21lIG90aGVyIGFjdGlvbiBzdWNoXG4gKiBhcyB1c2luZyBhIGJyb3dzZXIncyBiYWNrL2ZvcndhcmQgYnV0dG9ucyBhbmQvb3IgbWFudWFsbHkgbWFuaXB1bGF0aW5nXG4gKiB0aGUgVVJMIGluIGEgYnJvd3NlcidzIGxvY2F0aW9uIGJhci4gVGhpcyBpcyB0aGUgZGVmYXVsdC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd0V2ZW50SGFuZGxlcnMvb25wb3BzdGF0ZVxuICogZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKi9cbnZhciBQT1AgPSAnUE9QJztcblxuZXhwb3J0cy5QT1AgPSBQT1A7XG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gIFBVU0g6IFBVU0gsXG4gIFJFUExBQ0U6IFJFUExBQ0UsXG4gIFBPUDogUE9QXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5sb29wQXN5bmMgPSBsb29wQXN5bmM7XG5cbmZ1bmN0aW9uIGxvb3BBc3luYyh0dXJucywgd29yaywgY2FsbGJhY2spIHtcbiAgdmFyIGN1cnJlbnRUdXJuID0gMDtcbiAgdmFyIGlzRG9uZSA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgaXNEb25lID0gdHJ1ZTtcbiAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICBpZiAoaXNEb25lKSByZXR1cm47XG5cbiAgICBpZiAoY3VycmVudFR1cm4gPCB0dXJucykge1xuICAgICAgd29yay5jYWxsKHRoaXMsIGN1cnJlbnRUdXJuKyssIG5leHQsIGRvbmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb25lLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgbmV4dCgpO1xufSIsIi8qZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc2F2ZVN0YXRlID0gc2F2ZVN0YXRlO1xuZXhwb3J0cy5yZWFkU3RhdGUgPSByZWFkU3RhdGU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBLZXlQcmVmaXggPSAnQEBIaXN0b3J5Lyc7XG52YXIgUXVvdGFFeGNlZWRlZEVycm9ycyA9IFsnUXVvdGFFeGNlZWRlZEVycm9yJywgJ1FVT1RBX0VYQ0VFREVEX0VSUiddO1xuXG52YXIgU2VjdXJpdHlFcnJvciA9ICdTZWN1cml0eUVycm9yJztcblxuZnVuY3Rpb24gY3JlYXRlS2V5KGtleSkge1xuICByZXR1cm4gS2V5UHJlZml4ICsga2V5O1xufVxuXG5mdW5jdGlvbiBzYXZlU3RhdGUoa2V5LCBzdGF0ZSkge1xuICB0cnkge1xuICAgIGlmIChzdGF0ZSA9PSBudWxsKSB7XG4gICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShjcmVhdGVLZXkoa2V5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGNyZWF0ZUtleShrZXkpLCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IubmFtZSA9PT0gU2VjdXJpdHlFcnJvcikge1xuICAgICAgLy8gQmxvY2tpbmcgY29va2llcyBpbiBDaHJvbWUvRmlyZWZveC9TYWZhcmkgdGhyb3dzIFNlY3VyaXR5RXJyb3Igb24gYW55XG4gICAgICAvLyBhdHRlbXB0IHRvIGFjY2VzcyB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3dhcm5pbmcyWydkZWZhdWx0J10oZmFsc2UsICdbaGlzdG9yeV0gVW5hYmxlIHRvIHNhdmUgc3RhdGU7IHNlc3Npb25TdG9yYWdlIGlzIG5vdCBhdmFpbGFibGUgZHVlIHRvIHNlY3VyaXR5IHNldHRpbmdzJykgOiB1bmRlZmluZWQ7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoUXVvdGFFeGNlZWRlZEVycm9ycy5pbmRleE9mKGVycm9yLm5hbWUpID49IDAgJiYgd2luZG93LnNlc3Npb25TdG9yYWdlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gU2FmYXJpIFwicHJpdmF0ZSBtb2RlXCIgdGhyb3dzIFF1b3RhRXhjZWVkZWRFcnJvci5cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgJ1toaXN0b3J5XSBVbmFibGUgdG8gc2F2ZSBzdGF0ZTsgc2Vzc2lvblN0b3JhZ2UgaXMgbm90IGF2YWlsYWJsZSBpbiBTYWZhcmkgcHJpdmF0ZSBtb2RlJykgOiB1bmRlZmluZWQ7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWFkU3RhdGUoa2V5KSB7XG4gIHZhciBqc29uID0gdW5kZWZpbmVkO1xuICB0cnkge1xuICAgIGpzb24gPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShjcmVhdGVLZXkoa2V5KSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKGVycm9yLm5hbWUgPT09IFNlY3VyaXR5RXJyb3IpIHtcbiAgICAgIC8vIEJsb2NraW5nIGNvb2tpZXMgaW4gQ2hyb21lL0ZpcmVmb3gvU2FmYXJpIHRocm93cyBTZWN1cml0eUVycm9yIG9uIGFueVxuICAgICAgLy8gYXR0ZW1wdCB0byBhY2Nlc3Mgd2luZG93LnNlc3Npb25TdG9yYWdlLlxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKGZhbHNlLCAnW2hpc3RvcnldIFVuYWJsZSB0byByZWFkIHN0YXRlOyBzZXNzaW9uU3RvcmFnZSBpcyBub3QgYXZhaWxhYmxlIGR1ZSB0byBzZWN1cml0eSBzZXR0aW5ncycpIDogdW5kZWZpbmVkO1xuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBpZiAoanNvbikge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gSWdub3JlIGludmFsaWQgSlNPTi5cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmFkZEV2ZW50TGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyO1xuZXhwb3J0cy5yZW1vdmVFdmVudExpc3RlbmVyID0gcmVtb3ZlRXZlbnRMaXN0ZW5lcjtcbmV4cG9ydHMuZ2V0SGFzaFBhdGggPSBnZXRIYXNoUGF0aDtcbmV4cG9ydHMucmVwbGFjZUhhc2hQYXRoID0gcmVwbGFjZUhhc2hQYXRoO1xuZXhwb3J0cy5nZXRXaW5kb3dQYXRoID0gZ2V0V2luZG93UGF0aDtcbmV4cG9ydHMuZ28gPSBnbztcbmV4cG9ydHMuZ2V0VXNlckNvbmZpcm1hdGlvbiA9IGdldFVzZXJDb25maXJtYXRpb247XG5leHBvcnRzLnN1cHBvcnRzSGlzdG9yeSA9IHN1cHBvcnRzSGlzdG9yeTtcbmV4cG9ydHMuc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2ggPSBzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaDtcblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudCwgbGlzdGVuZXIpIHtcbiAgaWYgKG5vZGUuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBub2RlLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudCwgbGlzdGVuZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnQsIGxpc3RlbmVyKSB7XG4gIGlmIChub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgbm9kZS5kZXRhY2hFdmVudCgnb24nICsgZXZlbnQsIGxpc3RlbmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRIYXNoUGF0aCgpIHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHdpbmRvdy5sb2NhdGlvbi5oYXNoIGhlcmUgYmVjYXVzZSBpdCdzIG5vdFxuICAvLyBjb25zaXN0ZW50IGFjcm9zcyBicm93c2VycyAtIEZpcmVmb3ggd2lsbCBwcmUtZGVjb2RlIGl0IVxuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJyMnKVsxXSB8fCAnJztcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUhhc2hQYXRoKHBhdGgpIHtcbiAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2Uod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArICcjJyArIHBhdGgpO1xufVxuXG5mdW5jdGlvbiBnZXRXaW5kb3dQYXRoKCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArIHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xufVxuXG5mdW5jdGlvbiBnbyhuKSB7XG4gIGlmIChuKSB3aW5kb3cuaGlzdG9yeS5nbyhuKTtcbn1cblxuZnVuY3Rpb24gZ2V0VXNlckNvbmZpcm1hdGlvbihtZXNzYWdlLCBjYWxsYmFjaykge1xuICBjYWxsYmFjayh3aW5kb3cuY29uZmlybShtZXNzYWdlKSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBIVE1MNSBoaXN0b3J5IEFQSSBpcyBzdXBwb3J0ZWQuIFRha2VuIGZyb20gTW9kZXJuaXpyLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL2ZlYXR1cmUtZGV0ZWN0cy9oaXN0b3J5LmpzXG4gKiBjaGFuZ2VkIHRvIGF2b2lkIGZhbHNlIG5lZ2F0aXZlcyBmb3IgV2luZG93cyBQaG9uZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9yYWNrdC9yZWFjdC1yb3V0ZXIvaXNzdWVzLzU4NlxuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRzSGlzdG9yeSgpIHtcbiAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgaWYgKCh1YS5pbmRleE9mKCdBbmRyb2lkIDIuJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ0FuZHJvaWQgNC4wJykgIT09IC0xKSAmJiB1YS5pbmRleE9mKCdNb2JpbGUgU2FmYXJpJykgIT09IC0xICYmIHVhLmluZGV4T2YoJ0Nocm9tZScpID09PSAtMSAmJiB1YS5pbmRleE9mKCdXaW5kb3dzIFBob25lJykgPT09IC0xKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeSAmJiAncHVzaFN0YXRlJyBpbiB3aW5kb3cuaGlzdG9yeTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGZhbHNlIGlmIHVzaW5nIGdvKG4pIHdpdGggaGFzaCBoaXN0b3J5IGNhdXNlcyBhIGZ1bGwgcGFnZSByZWxvYWQuXG4gKi9cblxuZnVuY3Rpb24gc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2goKSB7XG4gIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIHJldHVybiB1YS5pbmRleE9mKCdGaXJlZm94JykgPT09IC0xO1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuZXhwb3J0cy5jYW5Vc2VET00gPSBjYW5Vc2VET007IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5leHRyYWN0UGF0aCA9IGV4dHJhY3RQYXRoO1xuZXhwb3J0cy5wYXJzZVBhdGggPSBwYXJzZVBhdGg7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIGV4dHJhY3RQYXRoKHN0cmluZykge1xuICB2YXIgbWF0Y2ggPSBzdHJpbmcubWF0Y2goL15odHRwcz86XFwvXFwvW15cXC9dKi8pO1xuXG4gIGlmIChtYXRjaCA9PSBudWxsKSByZXR1cm4gc3RyaW5nO1xuXG4gIHJldHVybiBzdHJpbmcuc3Vic3RyaW5nKG1hdGNoWzBdLmxlbmd0aCk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlUGF0aChwYXRoKSB7XG4gIHZhciBwYXRobmFtZSA9IGV4dHJhY3RQYXRoKHBhdGgpO1xuICB2YXIgc2VhcmNoID0gJyc7XG4gIHZhciBoYXNoID0gJyc7XG5cbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKHBhdGggPT09IHBhdGhuYW1lLCAnQSBwYXRoIG11c3QgYmUgcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoIG9ubHksIG5vdCBhIGZ1bGx5IHF1YWxpZmllZCBVUkwgbGlrZSBcIiVzXCInLCBwYXRoKSA6IHVuZGVmaW5lZDtcblxuICB2YXIgaGFzaEluZGV4ID0gcGF0aG5hbWUuaW5kZXhPZignIycpO1xuICBpZiAoaGFzaEluZGV4ICE9PSAtMSkge1xuICAgIGhhc2ggPSBwYXRobmFtZS5zdWJzdHJpbmcoaGFzaEluZGV4KTtcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lLnN1YnN0cmluZygwLCBoYXNoSW5kZXgpO1xuICB9XG5cbiAgdmFyIHNlYXJjaEluZGV4ID0gcGF0aG5hbWUuaW5kZXhPZignPycpO1xuICBpZiAoc2VhcmNoSW5kZXggIT09IC0xKSB7XG4gICAgc2VhcmNoID0gcGF0aG5hbWUuc3Vic3RyaW5nKHNlYXJjaEluZGV4KTtcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lLnN1YnN0cmluZygwLCBzZWFyY2hJbmRleCk7XG4gIH1cblxuICBpZiAocGF0aG5hbWUgPT09ICcnKSBwYXRobmFtZSA9ICcvJztcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lOiBwYXRobmFtZSxcbiAgICBzZWFyY2g6IHNlYXJjaCxcbiAgICBoYXNoOiBoYXNoXG4gIH07XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfQWN0aW9ucyA9IHJlcXVpcmUoJy4vQWN0aW9ucycpO1xuXG52YXIgX1BhdGhVdGlscyA9IHJlcXVpcmUoJy4vUGF0aFV0aWxzJyk7XG5cbnZhciBfRXhlY3V0aW9uRW52aXJvbm1lbnQgPSByZXF1aXJlKCcuL0V4ZWN1dGlvbkVudmlyb25tZW50Jyk7XG5cbnZhciBfRE9NVXRpbHMgPSByZXF1aXJlKCcuL0RPTVV0aWxzJyk7XG5cbnZhciBfRE9NU3RhdGVTdG9yYWdlID0gcmVxdWlyZSgnLi9ET01TdGF0ZVN0b3JhZ2UnKTtcblxudmFyIF9jcmVhdGVET01IaXN0b3J5ID0gcmVxdWlyZSgnLi9jcmVhdGVET01IaXN0b3J5Jyk7XG5cbnZhciBfY3JlYXRlRE9NSGlzdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVET01IaXN0b3J5KTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgaGlzdG9yeSBvYmplY3QgdGhhdCB1c2VzIEhUTUw1J3MgaGlzdG9yeSBBUElcbiAqIChwdXNoU3RhdGUsIHJlcGxhY2VTdGF0ZSwgYW5kIHRoZSBwb3BzdGF0ZSBldmVudCkgdG8gbWFuYWdlIGhpc3RvcnkuXG4gKiBUaGlzIGlzIHRoZSByZWNvbW1lbmRlZCBtZXRob2Qgb2YgbWFuYWdpbmcgaGlzdG9yeSBpbiBicm93c2VycyBiZWNhdXNlXG4gKiBpdCBwcm92aWRlcyB0aGUgY2xlYW5lc3QgVVJMcy5cbiAqXG4gKiBOb3RlOiBJbiBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IHRoZSBIVE1MNSBoaXN0b3J5IEFQSSBmdWxsXG4gKiBwYWdlIHJlbG9hZHMgd2lsbCBiZSB1c2VkIHRvIHByZXNlcnZlIFVSTHMuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuXG4gICFfRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF9pbnZhcmlhbnQyWydkZWZhdWx0J10oZmFsc2UsICdCcm93c2VyIGhpc3RvcnkgbmVlZHMgYSBET00nKSA6IF9pbnZhcmlhbnQyWydkZWZhdWx0J10oZmFsc2UpIDogdW5kZWZpbmVkO1xuXG4gIHZhciBmb3JjZVJlZnJlc2ggPSBvcHRpb25zLmZvcmNlUmVmcmVzaDtcblxuICB2YXIgaXNTdXBwb3J0ZWQgPSBfRE9NVXRpbHMuc3VwcG9ydHNIaXN0b3J5KCk7XG4gIHZhciB1c2VSZWZyZXNoID0gIWlzU3VwcG9ydGVkIHx8IGZvcmNlUmVmcmVzaDtcblxuICBmdW5jdGlvbiBnZXRDdXJyZW50TG9jYXRpb24oaGlzdG9yeVN0YXRlKSB7XG4gICAgaGlzdG9yeVN0YXRlID0gaGlzdG9yeVN0YXRlIHx8IHdpbmRvdy5oaXN0b3J5LnN0YXRlIHx8IHt9O1xuXG4gICAgdmFyIHBhdGggPSBfRE9NVXRpbHMuZ2V0V2luZG93UGF0aCgpO1xuICAgIHZhciBfaGlzdG9yeVN0YXRlID0gaGlzdG9yeVN0YXRlO1xuICAgIHZhciBrZXkgPSBfaGlzdG9yeVN0YXRlLmtleTtcblxuICAgIHZhciBzdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICBpZiAoa2V5KSB7XG4gICAgICBzdGF0ZSA9IF9ET01TdGF0ZVN0b3JhZ2UucmVhZFN0YXRlKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlID0gbnVsbDtcbiAgICAgIGtleSA9IGhpc3RvcnkuY3JlYXRlS2V5KCk7XG5cbiAgICAgIGlmIChpc1N1cHBvcnRlZCkgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKF9leHRlbmRzKHt9LCBoaXN0b3J5U3RhdGUsIHsga2V5OiBrZXkgfSksIG51bGwsIHBhdGgpO1xuICAgIH1cblxuICAgIHZhciBsb2NhdGlvbiA9IF9QYXRoVXRpbHMucGFyc2VQYXRoKHBhdGgpO1xuXG4gICAgcmV0dXJuIGhpc3RvcnkuY3JlYXRlTG9jYXRpb24oX2V4dGVuZHMoe30sIGxvY2F0aW9uLCB7IHN0YXRlOiBzdGF0ZSB9KSwgdW5kZWZpbmVkLCBrZXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRQb3BTdGF0ZUxpc3RlbmVyKF9yZWYpIHtcbiAgICB2YXIgdHJhbnNpdGlvblRvID0gX3JlZi50cmFuc2l0aW9uVG87XG5cbiAgICBmdW5jdGlvbiBwb3BTdGF0ZUxpc3RlbmVyKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuc3RhdGUgPT09IHVuZGVmaW5lZCkgcmV0dXJuOyAvLyBJZ25vcmUgZXh0cmFuZW91cyBwb3BzdGF0ZSBldmVudHMgaW4gV2ViS2l0LlxuXG4gICAgICB0cmFuc2l0aW9uVG8oZ2V0Q3VycmVudExvY2F0aW9uKGV2ZW50LnN0YXRlKSk7XG4gICAgfVxuXG4gICAgX0RPTVV0aWxzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAncG9wc3RhdGUnLCBwb3BTdGF0ZUxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBfRE9NVXRpbHMucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdwb3BzdGF0ZScsIHBvcFN0YXRlTGlzdGVuZXIpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBmaW5pc2hUcmFuc2l0aW9uKGxvY2F0aW9uKSB7XG4gICAgdmFyIGJhc2VuYW1lID0gbG9jYXRpb24uYmFzZW5hbWU7XG4gICAgdmFyIHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWU7XG4gICAgdmFyIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaDtcbiAgICB2YXIgaGFzaCA9IGxvY2F0aW9uLmhhc2g7XG4gICAgdmFyIHN0YXRlID0gbG9jYXRpb24uc3RhdGU7XG4gICAgdmFyIGFjdGlvbiA9IGxvY2F0aW9uLmFjdGlvbjtcbiAgICB2YXIga2V5ID0gbG9jYXRpb24ua2V5O1xuXG4gICAgaWYgKGFjdGlvbiA9PT0gX0FjdGlvbnMuUE9QKSByZXR1cm47IC8vIE5vdGhpbmcgdG8gZG8uXG5cbiAgICBfRE9NU3RhdGVTdG9yYWdlLnNhdmVTdGF0ZShrZXksIHN0YXRlKTtcblxuICAgIHZhciBwYXRoID0gKGJhc2VuYW1lIHx8ICcnKSArIHBhdGhuYW1lICsgc2VhcmNoICsgaGFzaDtcbiAgICB2YXIgaGlzdG9yeVN0YXRlID0ge1xuICAgICAga2V5OiBrZXlcbiAgICB9O1xuXG4gICAgaWYgKGFjdGlvbiA9PT0gX0FjdGlvbnMuUFVTSCkge1xuICAgICAgaWYgKHVzZVJlZnJlc2gpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwYXRoO1xuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIFByZXZlbnQgbG9jYXRpb24gdXBkYXRlLlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoaGlzdG9yeVN0YXRlLCBudWxsLCBwYXRoKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSRVBMQUNFXG4gICAgICBpZiAodXNlUmVmcmVzaCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShwYXRoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBQcmV2ZW50IGxvY2F0aW9uIHVwZGF0ZS5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKGhpc3RvcnlTdGF0ZSwgbnVsbCwgcGF0aCk7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgaGlzdG9yeSA9IF9jcmVhdGVET01IaXN0b3J5MlsnZGVmYXVsdCddKF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgZ2V0Q3VycmVudExvY2F0aW9uOiBnZXRDdXJyZW50TG9jYXRpb24sXG4gICAgZmluaXNoVHJhbnNpdGlvbjogZmluaXNoVHJhbnNpdGlvbixcbiAgICBzYXZlU3RhdGU6IF9ET01TdGF0ZVN0b3JhZ2Uuc2F2ZVN0YXRlXG4gIH0pKTtcblxuICB2YXIgbGlzdGVuZXJDb3VudCA9IDAsXG4gICAgICBzdG9wUG9wU3RhdGVMaXN0ZW5lciA9IHVuZGVmaW5lZDtcblxuICBmdW5jdGlvbiBsaXN0ZW5CZWZvcmUobGlzdGVuZXIpIHtcbiAgICBpZiAoKytsaXN0ZW5lckNvdW50ID09PSAxKSBzdG9wUG9wU3RhdGVMaXN0ZW5lciA9IHN0YXJ0UG9wU3RhdGVMaXN0ZW5lcihoaXN0b3J5KTtcblxuICAgIHZhciB1bmxpc3RlbiA9IGhpc3RvcnkubGlzdGVuQmVmb3JlKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB1bmxpc3RlbigpO1xuXG4gICAgICBpZiAoLS1saXN0ZW5lckNvdW50ID09PSAwKSBzdG9wUG9wU3RhdGVMaXN0ZW5lcigpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICBpZiAoKytsaXN0ZW5lckNvdW50ID09PSAxKSBzdG9wUG9wU3RhdGVMaXN0ZW5lciA9IHN0YXJ0UG9wU3RhdGVMaXN0ZW5lcihoaXN0b3J5KTtcblxuICAgIHZhciB1bmxpc3RlbiA9IGhpc3RvcnkubGlzdGVuKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB1bmxpc3RlbigpO1xuXG4gICAgICBpZiAoLS1saXN0ZW5lckNvdW50ID09PSAwKSBzdG9wUG9wU3RhdGVMaXN0ZW5lcigpO1xuICAgIH07XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2soaG9vaykge1xuICAgIGlmICgrK2xpc3RlbmVyQ291bnQgPT09IDEpIHN0b3BQb3BTdGF0ZUxpc3RlbmVyID0gc3RhcnRQb3BTdGF0ZUxpc3RlbmVyKGhpc3RvcnkpO1xuXG4gICAgaGlzdG9yeS5yZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spO1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiB1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2soaG9vaykge1xuICAgIGhpc3RvcnkudW5yZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spO1xuXG4gICAgaWYgKC0tbGlzdGVuZXJDb3VudCA9PT0gMCkgc3RvcFBvcFN0YXRlTGlzdGVuZXIoKTtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgaGlzdG9yeSwge1xuICAgIGxpc3RlbkJlZm9yZTogbGlzdGVuQmVmb3JlLFxuICAgIGxpc3RlbjogbGlzdGVuLFxuICAgIHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2s6IHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2ssXG4gICAgdW5yZWdpc3RlclRyYW5zaXRpb25Ib29rOiB1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2tcbiAgfSk7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfRXhlY3V0aW9uRW52aXJvbm1lbnQgPSByZXF1aXJlKCcuL0V4ZWN1dGlvbkVudmlyb25tZW50Jyk7XG5cbnZhciBfRE9NVXRpbHMgPSByZXF1aXJlKCcuL0RPTVV0aWxzJyk7XG5cbnZhciBfY3JlYXRlSGlzdG9yeSA9IHJlcXVpcmUoJy4vY3JlYXRlSGlzdG9yeScpO1xuXG52YXIgX2NyZWF0ZUhpc3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlSGlzdG9yeSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZURPTUhpc3Rvcnkob3B0aW9ucykge1xuICB2YXIgaGlzdG9yeSA9IF9jcmVhdGVIaXN0b3J5MlsnZGVmYXVsdCddKF9leHRlbmRzKHtcbiAgICBnZXRVc2VyQ29uZmlybWF0aW9uOiBfRE9NVXRpbHMuZ2V0VXNlckNvbmZpcm1hdGlvblxuICB9LCBvcHRpb25zLCB7XG4gICAgZ286IF9ET01VdGlscy5nb1xuICB9KSk7XG5cbiAgZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgIV9FeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00gPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSwgJ0RPTSBoaXN0b3J5IG5lZWRzIGEgRE9NJykgOiBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlKSA6IHVuZGVmaW5lZDtcblxuICAgIHJldHVybiBoaXN0b3J5Lmxpc3RlbihsaXN0ZW5lcik7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIGhpc3RvcnksIHtcbiAgICBsaXN0ZW46IGxpc3RlblxuICB9KTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlRE9NSGlzdG9yeTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9BY3Rpb25zID0gcmVxdWlyZSgnLi9BY3Rpb25zJyk7XG5cbnZhciBfUGF0aFV0aWxzID0gcmVxdWlyZSgnLi9QYXRoVXRpbHMnKTtcblxudmFyIF9FeGVjdXRpb25FbnZpcm9ubWVudCA9IHJlcXVpcmUoJy4vRXhlY3V0aW9uRW52aXJvbm1lbnQnKTtcblxudmFyIF9ET01VdGlscyA9IHJlcXVpcmUoJy4vRE9NVXRpbHMnKTtcblxudmFyIF9ET01TdGF0ZVN0b3JhZ2UgPSByZXF1aXJlKCcuL0RPTVN0YXRlU3RvcmFnZScpO1xuXG52YXIgX2NyZWF0ZURPTUhpc3RvcnkgPSByZXF1aXJlKCcuL2NyZWF0ZURPTUhpc3RvcnknKTtcblxudmFyIF9jcmVhdGVET01IaXN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZURPTUhpc3RvcnkpO1xuXG5mdW5jdGlvbiBpc0Fic29sdXRlUGF0aChwYXRoKSB7XG4gIHJldHVybiB0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycgJiYgcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn1cblxuZnVuY3Rpb24gZW5zdXJlU2xhc2goKSB7XG4gIHZhciBwYXRoID0gX0RPTVV0aWxzLmdldEhhc2hQYXRoKCk7XG5cbiAgaWYgKGlzQWJzb2x1dGVQYXRoKHBhdGgpKSByZXR1cm4gdHJ1ZTtcblxuICBfRE9NVXRpbHMucmVwbGFjZUhhc2hQYXRoKCcvJyArIHBhdGgpO1xuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gYWRkUXVlcnlTdHJpbmdWYWx1ZVRvUGF0aChwYXRoLCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBwYXRoICsgKHBhdGguaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyAoa2V5ICsgJz0nICsgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBzdHJpcFF1ZXJ5U3RyaW5nVmFsdWVGcm9tUGF0aChwYXRoLCBrZXkpIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZShuZXcgUmVnRXhwKCdbPyZdPycgKyBrZXkgKyAnPVthLXpBLVowLTldKycpLCAnJyk7XG59XG5cbmZ1bmN0aW9uIGdldFF1ZXJ5U3RyaW5nVmFsdWVGcm9tUGF0aChwYXRoLCBrZXkpIHtcbiAgdmFyIG1hdGNoID0gcGF0aC5tYXRjaChuZXcgUmVnRXhwKCdcXFxcPy4qP1xcXFxiJyArIGtleSArICc9KC4rPylcXFxcYicpKTtcbiAgcmV0dXJuIG1hdGNoICYmIG1hdGNoWzFdO1xufVxuXG52YXIgRGVmYXVsdFF1ZXJ5S2V5ID0gJ19rJztcblxuZnVuY3Rpb24gY3JlYXRlSGFzaEhpc3RvcnkoKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgIV9FeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00gPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSwgJ0hhc2ggaGlzdG9yeSBuZWVkcyBhIERPTScpIDogX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSkgOiB1bmRlZmluZWQ7XG5cbiAgdmFyIHF1ZXJ5S2V5ID0gb3B0aW9ucy5xdWVyeUtleTtcblxuICBpZiAocXVlcnlLZXkgPT09IHVuZGVmaW5lZCB8fCAhIXF1ZXJ5S2V5KSBxdWVyeUtleSA9IHR5cGVvZiBxdWVyeUtleSA9PT0gJ3N0cmluZycgPyBxdWVyeUtleSA6IERlZmF1bHRRdWVyeUtleTtcblxuICBmdW5jdGlvbiBnZXRDdXJyZW50TG9jYXRpb24oKSB7XG4gICAgdmFyIHBhdGggPSBfRE9NVXRpbHMuZ2V0SGFzaFBhdGgoKTtcblxuICAgIHZhciBrZXkgPSB1bmRlZmluZWQsXG4gICAgICAgIHN0YXRlID0gdW5kZWZpbmVkO1xuICAgIGlmIChxdWVyeUtleSkge1xuICAgICAga2V5ID0gZ2V0UXVlcnlTdHJpbmdWYWx1ZUZyb21QYXRoKHBhdGgsIHF1ZXJ5S2V5KTtcbiAgICAgIHBhdGggPSBzdHJpcFF1ZXJ5U3RyaW5nVmFsdWVGcm9tUGF0aChwYXRoLCBxdWVyeUtleSk7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgc3RhdGUgPSBfRE9NU3RhdGVTdG9yYWdlLnJlYWRTdGF0ZShrZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUgPSBudWxsO1xuICAgICAgICBrZXkgPSBoaXN0b3J5LmNyZWF0ZUtleSgpO1xuICAgICAgICBfRE9NVXRpbHMucmVwbGFjZUhhc2hQYXRoKGFkZFF1ZXJ5U3RyaW5nVmFsdWVUb1BhdGgocGF0aCwgcXVlcnlLZXksIGtleSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBrZXkgPSBzdGF0ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGxvY2F0aW9uID0gX1BhdGhVdGlscy5wYXJzZVBhdGgocGF0aCk7XG5cbiAgICByZXR1cm4gaGlzdG9yeS5jcmVhdGVMb2NhdGlvbihfZXh0ZW5kcyh7fSwgbG9jYXRpb24sIHsgc3RhdGU6IHN0YXRlIH0pLCB1bmRlZmluZWQsIGtleSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydEhhc2hDaGFuZ2VMaXN0ZW5lcihfcmVmKSB7XG4gICAgdmFyIHRyYW5zaXRpb25UbyA9IF9yZWYudHJhbnNpdGlvblRvO1xuXG4gICAgZnVuY3Rpb24gaGFzaENoYW5nZUxpc3RlbmVyKCkge1xuICAgICAgaWYgKCFlbnN1cmVTbGFzaCgpKSByZXR1cm47IC8vIEFsd2F5cyBtYWtlIHN1cmUgaGFzaGVzIGFyZSBwcmVjZWVkZWQgd2l0aCBhIC8uXG5cbiAgICAgIHRyYW5zaXRpb25UbyhnZXRDdXJyZW50TG9jYXRpb24oKSk7XG4gICAgfVxuXG4gICAgZW5zdXJlU2xhc2goKTtcbiAgICBfRE9NVXRpbHMuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdoYXNoY2hhbmdlJywgaGFzaENoYW5nZUxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBfRE9NVXRpbHMucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdoYXNoY2hhbmdlJywgaGFzaENoYW5nZUxpc3RlbmVyKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZmluaXNoVHJhbnNpdGlvbihsb2NhdGlvbikge1xuICAgIHZhciBiYXNlbmFtZSA9IGxvY2F0aW9uLmJhc2VuYW1lO1xuICAgIHZhciBwYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIHZhciBzZWFyY2ggPSBsb2NhdGlvbi5zZWFyY2g7XG4gICAgdmFyIHN0YXRlID0gbG9jYXRpb24uc3RhdGU7XG4gICAgdmFyIGFjdGlvbiA9IGxvY2F0aW9uLmFjdGlvbjtcbiAgICB2YXIga2V5ID0gbG9jYXRpb24ua2V5O1xuXG4gICAgaWYgKGFjdGlvbiA9PT0gX0FjdGlvbnMuUE9QKSByZXR1cm47IC8vIE5vdGhpbmcgdG8gZG8uXG5cbiAgICB2YXIgcGF0aCA9IChiYXNlbmFtZSB8fCAnJykgKyBwYXRobmFtZSArIHNlYXJjaDtcblxuICAgIGlmIChxdWVyeUtleSkge1xuICAgICAgcGF0aCA9IGFkZFF1ZXJ5U3RyaW5nVmFsdWVUb1BhdGgocGF0aCwgcXVlcnlLZXksIGtleSk7XG4gICAgICBfRE9NU3RhdGVTdG9yYWdlLnNhdmVTdGF0ZShrZXksIHN0YXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRHJvcCBrZXkgYW5kIHN0YXRlLlxuICAgICAgbG9jYXRpb24ua2V5ID0gbG9jYXRpb24uc3RhdGUgPSBudWxsO1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50SGFzaCA9IF9ET01VdGlscy5nZXRIYXNoUGF0aCgpO1xuXG4gICAgaWYgKGFjdGlvbiA9PT0gX0FjdGlvbnMuUFVTSCkge1xuICAgICAgaWYgKGN1cnJlbnRIYXNoICE9PSBwYXRoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gcGF0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgJ1lvdSBjYW5ub3QgUFVTSCB0aGUgc2FtZSBwYXRoIHVzaW5nIGhhc2ggaGlzdG9yeScpIDogdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY3VycmVudEhhc2ggIT09IHBhdGgpIHtcbiAgICAgIC8vIFJFUExBQ0VcbiAgICAgIF9ET01VdGlscy5yZXBsYWNlSGFzaFBhdGgocGF0aCk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGhpc3RvcnkgPSBfY3JlYXRlRE9NSGlzdG9yeTJbJ2RlZmF1bHQnXShfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgIGdldEN1cnJlbnRMb2NhdGlvbjogZ2V0Q3VycmVudExvY2F0aW9uLFxuICAgIGZpbmlzaFRyYW5zaXRpb246IGZpbmlzaFRyYW5zaXRpb24sXG4gICAgc2F2ZVN0YXRlOiBfRE9NU3RhdGVTdG9yYWdlLnNhdmVTdGF0ZVxuICB9KSk7XG5cbiAgdmFyIGxpc3RlbmVyQ291bnQgPSAwLFxuICAgICAgc3RvcEhhc2hDaGFuZ2VMaXN0ZW5lciA9IHVuZGVmaW5lZDtcblxuICBmdW5jdGlvbiBsaXN0ZW5CZWZvcmUobGlzdGVuZXIpIHtcbiAgICBpZiAoKytsaXN0ZW5lckNvdW50ID09PSAxKSBzdG9wSGFzaENoYW5nZUxpc3RlbmVyID0gc3RhcnRIYXNoQ2hhbmdlTGlzdGVuZXIoaGlzdG9yeSk7XG5cbiAgICB2YXIgdW5saXN0ZW4gPSBoaXN0b3J5Lmxpc3RlbkJlZm9yZShsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdW5saXN0ZW4oKTtcblxuICAgICAgaWYgKC0tbGlzdGVuZXJDb3VudCA9PT0gMCkgc3RvcEhhc2hDaGFuZ2VMaXN0ZW5lcigpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICBpZiAoKytsaXN0ZW5lckNvdW50ID09PSAxKSBzdG9wSGFzaENoYW5nZUxpc3RlbmVyID0gc3RhcnRIYXNoQ2hhbmdlTGlzdGVuZXIoaGlzdG9yeSk7XG5cbiAgICB2YXIgdW5saXN0ZW4gPSBoaXN0b3J5Lmxpc3RlbihsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdW5saXN0ZW4oKTtcblxuICAgICAgaWYgKC0tbGlzdGVuZXJDb3VudCA9PT0gMCkgc3RvcEhhc2hDaGFuZ2VMaXN0ZW5lcigpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBwdXNoKGxvY2F0aW9uKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKHF1ZXJ5S2V5IHx8IGxvY2F0aW9uLnN0YXRlID09IG51bGwsICdZb3UgY2Fubm90IHVzZSBzdGF0ZSB3aXRob3V0IGEgcXVlcnlLZXkgaXQgd2lsbCBiZSBkcm9wcGVkJykgOiB1bmRlZmluZWQ7XG5cbiAgICBoaXN0b3J5LnB1c2gobG9jYXRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZShsb2NhdGlvbikge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShxdWVyeUtleSB8fCBsb2NhdGlvbi5zdGF0ZSA9PSBudWxsLCAnWW91IGNhbm5vdCB1c2Ugc3RhdGUgd2l0aG91dCBhIHF1ZXJ5S2V5IGl0IHdpbGwgYmUgZHJvcHBlZCcpIDogdW5kZWZpbmVkO1xuXG4gICAgaGlzdG9yeS5yZXBsYWNlKGxvY2F0aW9uKTtcbiAgfVxuXG4gIHZhciBnb0lzU3VwcG9ydGVkV2l0aG91dFJlbG9hZCA9IF9ET01VdGlscy5zdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCgpO1xuXG4gIGZ1bmN0aW9uIGdvKG4pIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3dhcm5pbmcyWydkZWZhdWx0J10oZ29Jc1N1cHBvcnRlZFdpdGhvdXRSZWxvYWQsICdIYXNoIGhpc3RvcnkgZ28obikgY2F1c2VzIGEgZnVsbCBwYWdlIHJlbG9hZCBpbiB0aGlzIGJyb3dzZXInKSA6IHVuZGVmaW5lZDtcblxuICAgIGhpc3RvcnkuZ28obik7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVIcmVmKHBhdGgpIHtcbiAgICByZXR1cm4gJyMnICsgaGlzdG9yeS5jcmVhdGVIcmVmKHBhdGgpO1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiByZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spIHtcbiAgICBpZiAoKytsaXN0ZW5lckNvdW50ID09PSAxKSBzdG9wSGFzaENoYW5nZUxpc3RlbmVyID0gc3RhcnRIYXNoQ2hhbmdlTGlzdGVuZXIoaGlzdG9yeSk7XG5cbiAgICBoaXN0b3J5LnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2soaG9vayk7XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vayhob29rKSB7XG4gICAgaGlzdG9yeS51bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2soaG9vayk7XG5cbiAgICBpZiAoLS1saXN0ZW5lckNvdW50ID09PSAwKSBzdG9wSGFzaENoYW5nZUxpc3RlbmVyKCk7XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHB1c2hTdGF0ZShzdGF0ZSwgcGF0aCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShxdWVyeUtleSB8fCBzdGF0ZSA9PSBudWxsLCAnWW91IGNhbm5vdCB1c2Ugc3RhdGUgd2l0aG91dCBhIHF1ZXJ5S2V5IGl0IHdpbGwgYmUgZHJvcHBlZCcpIDogdW5kZWZpbmVkO1xuXG4gICAgaGlzdG9yeS5wdXNoU3RhdGUoc3RhdGUsIHBhdGgpO1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiByZXBsYWNlU3RhdGUoc3RhdGUsIHBhdGgpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3dhcm5pbmcyWydkZWZhdWx0J10ocXVlcnlLZXkgfHwgc3RhdGUgPT0gbnVsbCwgJ1lvdSBjYW5ub3QgdXNlIHN0YXRlIHdpdGhvdXQgYSBxdWVyeUtleSBpdCB3aWxsIGJlIGRyb3BwZWQnKSA6IHVuZGVmaW5lZDtcblxuICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKHN0YXRlLCBwYXRoKTtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgaGlzdG9yeSwge1xuICAgIGxpc3RlbkJlZm9yZTogbGlzdGVuQmVmb3JlLFxuICAgIGxpc3RlbjogbGlzdGVuLFxuICAgIHB1c2g6IHB1c2gsXG4gICAgcmVwbGFjZTogcmVwbGFjZSxcbiAgICBnbzogZ28sXG4gICAgY3JlYXRlSHJlZjogY3JlYXRlSHJlZixcblxuICAgIHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2s6IHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2ssIC8vIGRlcHJlY2F0ZWQgLSB3YXJuaW5nIGlzIGluIGNyZWF0ZUhpc3RvcnlcbiAgICB1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2s6IHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vaywgLy8gZGVwcmVjYXRlZCAtIHdhcm5pbmcgaXMgaW4gY3JlYXRlSGlzdG9yeVxuICAgIHB1c2hTdGF0ZTogcHVzaFN0YXRlLCAvLyBkZXByZWNhdGVkIC0gd2FybmluZyBpcyBpbiBjcmVhdGVIaXN0b3J5XG4gICAgcmVwbGFjZVN0YXRlOiByZXBsYWNlU3RhdGUgLy8gZGVwcmVjYXRlZCAtIHdhcm5pbmcgaXMgaW4gY3JlYXRlSGlzdG9yeVxuICB9KTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlSGFzaEhpc3Rvcnk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfZGVlcEVxdWFsID0gcmVxdWlyZSgnZGVlcC1lcXVhbCcpO1xuXG52YXIgX2RlZXBFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWVwRXF1YWwpO1xuXG52YXIgX1BhdGhVdGlscyA9IHJlcXVpcmUoJy4vUGF0aFV0aWxzJyk7XG5cbnZhciBfQXN5bmNVdGlscyA9IHJlcXVpcmUoJy4vQXN5bmNVdGlscycpO1xuXG52YXIgX0FjdGlvbnMgPSByZXF1aXJlKCcuL0FjdGlvbnMnKTtcblxudmFyIF9jcmVhdGVMb2NhdGlvbjIgPSByZXF1aXJlKCcuL2NyZWF0ZUxvY2F0aW9uJyk7XG5cbnZhciBfY3JlYXRlTG9jYXRpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlTG9jYXRpb24yKTtcblxudmFyIF9ydW5UcmFuc2l0aW9uSG9vayA9IHJlcXVpcmUoJy4vcnVuVHJhbnNpdGlvbkhvb2snKTtcblxudmFyIF9ydW5UcmFuc2l0aW9uSG9vazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ydW5UcmFuc2l0aW9uSG9vayk7XG5cbnZhciBfZGVwcmVjYXRlID0gcmVxdWlyZSgnLi9kZXByZWNhdGUnKTtcblxudmFyIF9kZXByZWNhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVwcmVjYXRlKTtcblxuZnVuY3Rpb24gY3JlYXRlUmFuZG9tS2V5KGxlbmd0aCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIGxlbmd0aCk7XG59XG5cbmZ1bmN0aW9uIGxvY2F0aW9uc0FyZUVxdWFsKGEsIGIpIHtcbiAgcmV0dXJuIGEucGF0aG5hbWUgPT09IGIucGF0aG5hbWUgJiYgYS5zZWFyY2ggPT09IGIuc2VhcmNoICYmXG4gIC8vYS5hY3Rpb24gPT09IGIuYWN0aW9uICYmIC8vIERpZmZlcmVudCBhY3Rpb24gIT09IGxvY2F0aW9uIGNoYW5nZS5cbiAgYS5rZXkgPT09IGIua2V5ICYmIF9kZWVwRXF1YWwyWydkZWZhdWx0J10oYS5zdGF0ZSwgYi5zdGF0ZSk7XG59XG5cbnZhciBEZWZhdWx0S2V5TGVuZ3RoID0gNjtcblxuZnVuY3Rpb24gY3JlYXRlSGlzdG9yeSgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcbiAgdmFyIGdldEN1cnJlbnRMb2NhdGlvbiA9IG9wdGlvbnMuZ2V0Q3VycmVudExvY2F0aW9uO1xuICB2YXIgZmluaXNoVHJhbnNpdGlvbiA9IG9wdGlvbnMuZmluaXNoVHJhbnNpdGlvbjtcbiAgdmFyIHNhdmVTdGF0ZSA9IG9wdGlvbnMuc2F2ZVN0YXRlO1xuICB2YXIgZ28gPSBvcHRpb25zLmdvO1xuICB2YXIga2V5TGVuZ3RoID0gb3B0aW9ucy5rZXlMZW5ndGg7XG4gIHZhciBnZXRVc2VyQ29uZmlybWF0aW9uID0gb3B0aW9ucy5nZXRVc2VyQ29uZmlybWF0aW9uO1xuXG4gIGlmICh0eXBlb2Yga2V5TGVuZ3RoICE9PSAnbnVtYmVyJykga2V5TGVuZ3RoID0gRGVmYXVsdEtleUxlbmd0aDtcblxuICB2YXIgdHJhbnNpdGlvbkhvb2tzID0gW107XG5cbiAgZnVuY3Rpb24gbGlzdGVuQmVmb3JlKGhvb2spIHtcbiAgICB0cmFuc2l0aW9uSG9va3MucHVzaChob29rKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB0cmFuc2l0aW9uSG9va3MgPSB0cmFuc2l0aW9uSG9va3MuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtICE9PSBob29rO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBhbGxLZXlzID0gW107XG4gIHZhciBjaGFuZ2VMaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIGxvY2F0aW9uID0gdW5kZWZpbmVkO1xuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnQoKSB7XG4gICAgaWYgKHBlbmRpbmdMb2NhdGlvbiAmJiBwZW5kaW5nTG9jYXRpb24uYWN0aW9uID09PSBfQWN0aW9ucy5QT1ApIHtcbiAgICAgIHJldHVybiBhbGxLZXlzLmluZGV4T2YocGVuZGluZ0xvY2F0aW9uLmtleSk7XG4gICAgfSBlbHNlIGlmIChsb2NhdGlvbikge1xuICAgICAgcmV0dXJuIGFsbEtleXMuaW5kZXhPZihsb2NhdGlvbi5rZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlTG9jYXRpb24obmV3TG9jYXRpb24pIHtcbiAgICB2YXIgY3VycmVudCA9IGdldEN1cnJlbnQoKTtcblxuICAgIGxvY2F0aW9uID0gbmV3TG9jYXRpb247XG5cbiAgICBpZiAobG9jYXRpb24uYWN0aW9uID09PSBfQWN0aW9ucy5QVVNIKSB7XG4gICAgICBhbGxLZXlzID0gW10uY29uY2F0KGFsbEtleXMuc2xpY2UoMCwgY3VycmVudCArIDEpLCBbbG9jYXRpb24ua2V5XSk7XG4gICAgfSBlbHNlIGlmIChsb2NhdGlvbi5hY3Rpb24gPT09IF9BY3Rpb25zLlJFUExBQ0UpIHtcbiAgICAgIGFsbEtleXNbY3VycmVudF0gPSBsb2NhdGlvbi5rZXk7XG4gICAgfVxuXG4gICAgY2hhbmdlTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcihsb2NhdGlvbik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICBjaGFuZ2VMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICBpZiAobG9jYXRpb24pIHtcbiAgICAgIGxpc3RlbmVyKGxvY2F0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9sb2NhdGlvbiA9IGdldEN1cnJlbnRMb2NhdGlvbigpO1xuICAgICAgYWxsS2V5cyA9IFtfbG9jYXRpb24ua2V5XTtcbiAgICAgIHVwZGF0ZUxvY2F0aW9uKF9sb2NhdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNoYW5nZUxpc3RlbmVycyA9IGNoYW5nZUxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT09IGxpc3RlbmVyO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGNhbGxiYWNrKSB7XG4gICAgX0FzeW5jVXRpbHMubG9vcEFzeW5jKHRyYW5zaXRpb25Ib29rcy5sZW5ndGgsIGZ1bmN0aW9uIChpbmRleCwgbmV4dCwgZG9uZSkge1xuICAgICAgX3J1blRyYW5zaXRpb25Ib29rMlsnZGVmYXVsdCddKHRyYW5zaXRpb25Ib29rc1tpbmRleF0sIGxvY2F0aW9uLCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAgIGRvbmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICBpZiAoZ2V0VXNlckNvbmZpcm1hdGlvbiAmJiB0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZ2V0VXNlckNvbmZpcm1hdGlvbihtZXNzYWdlLCBmdW5jdGlvbiAob2spIHtcbiAgICAgICAgICBjYWxsYmFjayhvayAhPT0gZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKG1lc3NhZ2UgIT09IGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZhciBwZW5kaW5nTG9jYXRpb24gPSB1bmRlZmluZWQ7XG5cbiAgZnVuY3Rpb24gdHJhbnNpdGlvblRvKG5leHRMb2NhdGlvbikge1xuICAgIGlmIChsb2NhdGlvbiAmJiBsb2NhdGlvbnNBcmVFcXVhbChsb2NhdGlvbiwgbmV4dExvY2F0aW9uKSkgcmV0dXJuOyAvLyBOb3RoaW5nIHRvIGRvLlxuXG4gICAgcGVuZGluZ0xvY2F0aW9uID0gbmV4dExvY2F0aW9uO1xuXG4gICAgY29uZmlybVRyYW5zaXRpb25UbyhuZXh0TG9jYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKHBlbmRpbmdMb2NhdGlvbiAhPT0gbmV4dExvY2F0aW9uKSByZXR1cm47IC8vIFRyYW5zaXRpb24gd2FzIGludGVycnVwdGVkLlxuXG4gICAgICBpZiAob2spIHtcbiAgICAgICAgLy8gdHJlYXQgUFVTSCB0byBjdXJyZW50IHBhdGggbGlrZSBSRVBMQUNFIHRvIGJlIGNvbnNpc3RlbnQgd2l0aCBicm93c2Vyc1xuICAgICAgICBpZiAobmV4dExvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUFVTSCkge1xuICAgICAgICAgIHZhciBwcmV2UGF0aCA9IGNyZWF0ZVBhdGgobG9jYXRpb24pO1xuICAgICAgICAgIHZhciBuZXh0UGF0aCA9IGNyZWF0ZVBhdGgobmV4dExvY2F0aW9uKTtcblxuICAgICAgICAgIGlmIChuZXh0UGF0aCA9PT0gcHJldlBhdGggJiYgX2RlZXBFcXVhbDJbJ2RlZmF1bHQnXShsb2NhdGlvbi5zdGF0ZSwgbmV4dExvY2F0aW9uLnN0YXRlKSkgbmV4dExvY2F0aW9uLmFjdGlvbiA9IF9BY3Rpb25zLlJFUExBQ0U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmluaXNoVHJhbnNpdGlvbihuZXh0TG9jYXRpb24pICE9PSBmYWxzZSkgdXBkYXRlTG9jYXRpb24obmV4dExvY2F0aW9uKTtcbiAgICAgIH0gZWxzZSBpZiAobG9jYXRpb24gJiYgbmV4dExvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUE9QKSB7XG4gICAgICAgIHZhciBwcmV2SW5kZXggPSBhbGxLZXlzLmluZGV4T2YobG9jYXRpb24ua2V5KTtcbiAgICAgICAgdmFyIG5leHRJbmRleCA9IGFsbEtleXMuaW5kZXhPZihuZXh0TG9jYXRpb24ua2V5KTtcblxuICAgICAgICBpZiAocHJldkluZGV4ICE9PSAtMSAmJiBuZXh0SW5kZXggIT09IC0xKSBnbyhwcmV2SW5kZXggLSBuZXh0SW5kZXgpOyAvLyBSZXN0b3JlIHRoZSBVUkwuXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwdXNoKGxvY2F0aW9uKSB7XG4gICAgdHJhbnNpdGlvblRvKGNyZWF0ZUxvY2F0aW9uKGxvY2F0aW9uLCBfQWN0aW9ucy5QVVNILCBjcmVhdGVLZXkoKSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZShsb2NhdGlvbikge1xuICAgIHRyYW5zaXRpb25UbyhjcmVhdGVMb2NhdGlvbihsb2NhdGlvbiwgX0FjdGlvbnMuUkVQTEFDRSwgY3JlYXRlS2V5KCkpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICBnbygtMSk7XG4gIH1cblxuICBmdW5jdGlvbiBnb0ZvcndhcmQoKSB7XG4gICAgZ28oMSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVLZXkoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVJhbmRvbUtleShrZXlMZW5ndGgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUGF0aChsb2NhdGlvbikge1xuICAgIGlmIChsb2NhdGlvbiA9PSBudWxsIHx8IHR5cGVvZiBsb2NhdGlvbiA9PT0gJ3N0cmluZycpIHJldHVybiBsb2NhdGlvbjtcblxuICAgIHZhciBwYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIHZhciBzZWFyY2ggPSBsb2NhdGlvbi5zZWFyY2g7XG4gICAgdmFyIGhhc2ggPSBsb2NhdGlvbi5oYXNoO1xuXG4gICAgdmFyIHJlc3VsdCA9IHBhdGhuYW1lO1xuXG4gICAgaWYgKHNlYXJjaCkgcmVzdWx0ICs9IHNlYXJjaDtcblxuICAgIGlmIChoYXNoKSByZXN1bHQgKz0gaGFzaDtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVIcmVmKGxvY2F0aW9uKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVBhdGgobG9jYXRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24obG9jYXRpb24sIGFjdGlvbikge1xuICAgIHZhciBrZXkgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBjcmVhdGVLZXkoKSA6IGFyZ3VtZW50c1syXTtcblxuICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSAnb2JqZWN0Jykge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKGZhbHNlLCAnVGhlIHN0YXRlICgybmQpIGFyZ3VtZW50IHRvIGhpc3RvcnkuY3JlYXRlTG9jYXRpb24gaXMgZGVwcmVjYXRlZDsgdXNlIGEgJyArICdsb2NhdGlvbiBkZXNjcmlwdG9yIGluc3RlYWQnKSA6IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHR5cGVvZiBsb2NhdGlvbiA9PT0gJ3N0cmluZycpIGxvY2F0aW9uID0gX1BhdGhVdGlscy5wYXJzZVBhdGgobG9jYXRpb24pO1xuXG4gICAgICBsb2NhdGlvbiA9IF9leHRlbmRzKHt9LCBsb2NhdGlvbiwgeyBzdGF0ZTogYWN0aW9uIH0pO1xuXG4gICAgICBhY3Rpb24gPSBrZXk7XG4gICAgICBrZXkgPSBhcmd1bWVudHNbM10gfHwgY3JlYXRlS2V5KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9jcmVhdGVMb2NhdGlvbjNbJ2RlZmF1bHQnXShsb2NhdGlvbiwgYWN0aW9uLCBrZXkpO1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiBzZXRTdGF0ZShzdGF0ZSkge1xuICAgIGlmIChsb2NhdGlvbikge1xuICAgICAgdXBkYXRlTG9jYXRpb25TdGF0ZShsb2NhdGlvbiwgc3RhdGUpO1xuICAgICAgdXBkYXRlTG9jYXRpb24obG9jYXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cGRhdGVMb2NhdGlvblN0YXRlKGdldEN1cnJlbnRMb2NhdGlvbigpLCBzdGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlTG9jYXRpb25TdGF0ZShsb2NhdGlvbiwgc3RhdGUpIHtcbiAgICBsb2NhdGlvbi5zdGF0ZSA9IF9leHRlbmRzKHt9LCBsb2NhdGlvbi5zdGF0ZSwgc3RhdGUpO1xuICAgIHNhdmVTdGF0ZShsb2NhdGlvbi5rZXksIGxvY2F0aW9uLnN0YXRlKTtcbiAgfVxuXG4gIC8vIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gcmVnaXN0ZXJUcmFuc2l0aW9uSG9vayhob29rKSB7XG4gICAgaWYgKHRyYW5zaXRpb25Ib29rcy5pbmRleE9mKGhvb2spID09PSAtMSkgdHJhbnNpdGlvbkhvb2tzLnB1c2goaG9vayk7XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vayhob29rKSB7XG4gICAgdHJhbnNpdGlvbkhvb2tzID0gdHJhbnNpdGlvbkhvb2tzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0gIT09IGhvb2s7XG4gICAgfSk7XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHB1c2hTdGF0ZShzdGF0ZSwgcGF0aCkge1xuICAgIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHBhdGggPSBfUGF0aFV0aWxzLnBhcnNlUGF0aChwYXRoKTtcblxuICAgIHB1c2goX2V4dGVuZHMoeyBzdGF0ZTogc3RhdGUgfSwgcGF0aCkpO1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiByZXBsYWNlU3RhdGUoc3RhdGUsIHBhdGgpIHtcbiAgICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSBwYXRoID0gX1BhdGhVdGlscy5wYXJzZVBhdGgocGF0aCk7XG5cbiAgICByZXBsYWNlKF9leHRlbmRzKHsgc3RhdGU6IHN0YXRlIH0sIHBhdGgpKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGlzdGVuQmVmb3JlOiBsaXN0ZW5CZWZvcmUsXG4gICAgbGlzdGVuOiBsaXN0ZW4sXG4gICAgdHJhbnNpdGlvblRvOiB0cmFuc2l0aW9uVG8sXG4gICAgcHVzaDogcHVzaCxcbiAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgIGdvOiBnbyxcbiAgICBnb0JhY2s6IGdvQmFjayxcbiAgICBnb0ZvcndhcmQ6IGdvRm9yd2FyZCxcbiAgICBjcmVhdGVLZXk6IGNyZWF0ZUtleSxcbiAgICBjcmVhdGVQYXRoOiBjcmVhdGVQYXRoLFxuICAgIGNyZWF0ZUhyZWY6IGNyZWF0ZUhyZWYsXG4gICAgY3JlYXRlTG9jYXRpb246IGNyZWF0ZUxvY2F0aW9uLFxuXG4gICAgc2V0U3RhdGU6IF9kZXByZWNhdGUyWydkZWZhdWx0J10oc2V0U3RhdGUsICdzZXRTdGF0ZSBpcyBkZXByZWNhdGVkOyB1c2UgbG9jYXRpb24ua2V5IHRvIHNhdmUgc3RhdGUgaW5zdGVhZCcpLFxuICAgIHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2s6IF9kZXByZWNhdGUyWydkZWZhdWx0J10ocmVnaXN0ZXJUcmFuc2l0aW9uSG9vaywgJ3JlZ2lzdGVyVHJhbnNpdGlvbkhvb2sgaXMgZGVwcmVjYXRlZDsgdXNlIGxpc3RlbkJlZm9yZSBpbnN0ZWFkJyksXG4gICAgdW5yZWdpc3RlclRyYW5zaXRpb25Ib29rOiBfZGVwcmVjYXRlMlsnZGVmYXVsdCddKHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vaywgJ3VucmVnaXN0ZXJUcmFuc2l0aW9uSG9vayBpcyBkZXByZWNhdGVkOyB1c2UgdGhlIGNhbGxiYWNrIHJldHVybmVkIGZyb20gbGlzdGVuQmVmb3JlIGluc3RlYWQnKSxcbiAgICBwdXNoU3RhdGU6IF9kZXByZWNhdGUyWydkZWZhdWx0J10ocHVzaFN0YXRlLCAncHVzaFN0YXRlIGlzIGRlcHJlY2F0ZWQ7IHVzZSBwdXNoIGluc3RlYWQnKSxcbiAgICByZXBsYWNlU3RhdGU6IF9kZXByZWNhdGUyWydkZWZhdWx0J10ocmVwbGFjZVN0YXRlLCAncmVwbGFjZVN0YXRlIGlzIGRlcHJlY2F0ZWQ7IHVzZSByZXBsYWNlIGluc3RlYWQnKVxuICB9O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVIaXN0b3J5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX0FjdGlvbnMgPSByZXF1aXJlKCcuL0FjdGlvbnMnKTtcblxudmFyIF9QYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG5mdW5jdGlvbiBjcmVhdGVMb2NhdGlvbigpIHtcbiAgdmFyIGxvY2F0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gJy8nIDogYXJndW1lbnRzWzBdO1xuICB2YXIgYWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gX0FjdGlvbnMuUE9QIDogYXJndW1lbnRzWzFdO1xuICB2YXIga2V5ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1syXTtcblxuICB2YXIgX2ZvdXJ0aEFyZyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMyB8fCBhcmd1bWVudHNbM10gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbM107XG5cbiAgaWYgKHR5cGVvZiBsb2NhdGlvbiA9PT0gJ3N0cmluZycpIGxvY2F0aW9uID0gX1BhdGhVdGlscy5wYXJzZVBhdGgobG9jYXRpb24pO1xuXG4gIGlmICh0eXBlb2YgYWN0aW9uID09PSAnb2JqZWN0Jykge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgJ1RoZSBzdGF0ZSAoMm5kKSBhcmd1bWVudCB0byBjcmVhdGVMb2NhdGlvbiBpcyBkZXByZWNhdGVkOyB1c2UgYSAnICsgJ2xvY2F0aW9uIGRlc2NyaXB0b3IgaW5zdGVhZCcpIDogdW5kZWZpbmVkO1xuXG4gICAgbG9jYXRpb24gPSBfZXh0ZW5kcyh7fSwgbG9jYXRpb24sIHsgc3RhdGU6IGFjdGlvbiB9KTtcblxuICAgIGFjdGlvbiA9IGtleSB8fCBfQWN0aW9ucy5QT1A7XG4gICAga2V5ID0gX2ZvdXJ0aEFyZztcbiAgfVxuXG4gIHZhciBwYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lIHx8ICcvJztcbiAgdmFyIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaCB8fCAnJztcbiAgdmFyIGhhc2ggPSBsb2NhdGlvbi5oYXNoIHx8ICcnO1xuICB2YXIgc3RhdGUgPSBsb2NhdGlvbi5zdGF0ZSB8fCBudWxsO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWU6IHBhdGhuYW1lLFxuICAgIHNlYXJjaDogc2VhcmNoLFxuICAgIGhhc2g6IGhhc2gsXG4gICAgc3RhdGU6IHN0YXRlLFxuICAgIGFjdGlvbjogYWN0aW9uLFxuICAgIGtleToga2V5XG4gIH07XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZUxvY2F0aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX1BhdGhVdGlscyA9IHJlcXVpcmUoJy4vUGF0aFV0aWxzJyk7XG5cbnZhciBfQWN0aW9ucyA9IHJlcXVpcmUoJy4vQWN0aW9ucycpO1xuXG52YXIgX2NyZWF0ZUhpc3RvcnkgPSByZXF1aXJlKCcuL2NyZWF0ZUhpc3RvcnknKTtcblxudmFyIF9jcmVhdGVIaXN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUhpc3RvcnkpO1xuXG5mdW5jdGlvbiBjcmVhdGVTdGF0ZVN0b3JhZ2UoZW50cmllcykge1xuICByZXR1cm4gZW50cmllcy5maWx0ZXIoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgcmV0dXJuIGVudHJ5LnN0YXRlO1xuICB9KS5yZWR1Y2UoZnVuY3Rpb24gKG1lbW8sIGVudHJ5KSB7XG4gICAgbWVtb1tlbnRyeS5rZXldID0gZW50cnkuc3RhdGU7XG4gICAgcmV0dXJuIG1lbW87XG4gIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVtb3J5SGlzdG9yeSgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xuICAgIG9wdGlvbnMgPSB7IGVudHJpZXM6IG9wdGlvbnMgfTtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICBvcHRpb25zID0geyBlbnRyaWVzOiBbb3B0aW9uc10gfTtcbiAgfVxuXG4gIHZhciBoaXN0b3J5ID0gX2NyZWF0ZUhpc3RvcnkyWydkZWZhdWx0J10oX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICBnZXRDdXJyZW50TG9jYXRpb246IGdldEN1cnJlbnRMb2NhdGlvbixcbiAgICBmaW5pc2hUcmFuc2l0aW9uOiBmaW5pc2hUcmFuc2l0aW9uLFxuICAgIHNhdmVTdGF0ZTogc2F2ZVN0YXRlLFxuICAgIGdvOiBnb1xuICB9KSk7XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucztcbiAgdmFyIGVudHJpZXMgPSBfb3B0aW9ucy5lbnRyaWVzO1xuICB2YXIgY3VycmVudCA9IF9vcHRpb25zLmN1cnJlbnQ7XG5cbiAgaWYgKHR5cGVvZiBlbnRyaWVzID09PSAnc3RyaW5nJykge1xuICAgIGVudHJpZXMgPSBbZW50cmllc107XG4gIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkoZW50cmllcykpIHtcbiAgICBlbnRyaWVzID0gWycvJ107XG4gIH1cblxuICBlbnRyaWVzID0gZW50cmllcy5tYXAoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgdmFyIGtleSA9IGhpc3RvcnkuY3JlYXRlS2V5KCk7XG5cbiAgICBpZiAodHlwZW9mIGVudHJ5ID09PSAnc3RyaW5nJykgcmV0dXJuIHsgcGF0aG5hbWU6IGVudHJ5LCBrZXk6IGtleSB9O1xuXG4gICAgaWYgKHR5cGVvZiBlbnRyeSA9PT0gJ29iamVjdCcgJiYgZW50cnkpIHJldHVybiBfZXh0ZW5kcyh7fSwgZW50cnksIHsga2V5OiBrZXkgfSk7XG5cbiAgICAhZmFsc2UgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSwgJ1VuYWJsZSB0byBjcmVhdGUgaGlzdG9yeSBlbnRyeSBmcm9tICVzJywgZW50cnkpIDogX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSkgOiB1bmRlZmluZWQ7XG4gIH0pO1xuXG4gIGlmIChjdXJyZW50ID09IG51bGwpIHtcbiAgICBjdXJyZW50ID0gZW50cmllcy5sZW5ndGggLSAxO1xuICB9IGVsc2Uge1xuICAgICEoY3VycmVudCA+PSAwICYmIGN1cnJlbnQgPCBlbnRyaWVzLmxlbmd0aCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSwgJ0N1cnJlbnQgaW5kZXggbXVzdCBiZSA+PSAwIGFuZCA8ICVzLCB3YXMgJXMnLCBlbnRyaWVzLmxlbmd0aCwgY3VycmVudCkgOiBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlKSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHZhciBzdG9yYWdlID0gY3JlYXRlU3RhdGVTdG9yYWdlKGVudHJpZXMpO1xuXG4gIGZ1bmN0aW9uIHNhdmVTdGF0ZShrZXksIHN0YXRlKSB7XG4gICAgc3RvcmFnZVtrZXldID0gc3RhdGU7XG4gIH1cblxuICBmdW5jdGlvbiByZWFkU3RhdGUoa2V5KSB7XG4gICAgcmV0dXJuIHN0b3JhZ2Vba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRMb2NhdGlvbigpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2N1cnJlbnRdO1xuICAgIHZhciBrZXkgPSBlbnRyeS5rZXk7XG4gICAgdmFyIGJhc2VuYW1lID0gZW50cnkuYmFzZW5hbWU7XG4gICAgdmFyIHBhdGhuYW1lID0gZW50cnkucGF0aG5hbWU7XG4gICAgdmFyIHNlYXJjaCA9IGVudHJ5LnNlYXJjaDtcblxuICAgIHZhciBwYXRoID0gKGJhc2VuYW1lIHx8ICcnKSArIHBhdGhuYW1lICsgKHNlYXJjaCB8fCAnJyk7XG5cbiAgICB2YXIgc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGtleSkge1xuICAgICAgc3RhdGUgPSByZWFkU3RhdGUoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUgPSBudWxsO1xuICAgICAga2V5ID0gaGlzdG9yeS5jcmVhdGVLZXkoKTtcbiAgICAgIGVudHJ5LmtleSA9IGtleTtcbiAgICB9XG5cbiAgICB2YXIgbG9jYXRpb24gPSBfUGF0aFV0aWxzLnBhcnNlUGF0aChwYXRoKTtcblxuICAgIHJldHVybiBoaXN0b3J5LmNyZWF0ZUxvY2F0aW9uKF9leHRlbmRzKHt9LCBsb2NhdGlvbiwgeyBzdGF0ZTogc3RhdGUgfSksIHVuZGVmaW5lZCwga2V5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbkdvKG4pIHtcbiAgICB2YXIgaW5kZXggPSBjdXJyZW50ICsgbjtcbiAgICByZXR1cm4gaW5kZXggPj0gMCAmJiBpbmRleCA8IGVudHJpZXMubGVuZ3RoO1xuICB9XG5cbiAgZnVuY3Rpb24gZ28obikge1xuICAgIGlmIChuKSB7XG4gICAgICBpZiAoIWNhbkdvKG4pKSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgJ0Nhbm5vdCBnbyglcykgdGhlcmUgaXMgbm90IGVub3VnaCBoaXN0b3J5JywgbikgOiB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY3VycmVudCArPSBuO1xuXG4gICAgICB2YXIgY3VycmVudExvY2F0aW9uID0gZ2V0Q3VycmVudExvY2F0aW9uKCk7XG5cbiAgICAgIC8vIGNoYW5nZSBhY3Rpb24gdG8gUE9QXG4gICAgICBoaXN0b3J5LnRyYW5zaXRpb25UbyhfZXh0ZW5kcyh7fSwgY3VycmVudExvY2F0aW9uLCB7IGFjdGlvbjogX0FjdGlvbnMuUE9QIH0pKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmaW5pc2hUcmFuc2l0aW9uKGxvY2F0aW9uKSB7XG4gICAgc3dpdGNoIChsb2NhdGlvbi5hY3Rpb24pIHtcbiAgICAgIGNhc2UgX0FjdGlvbnMuUFVTSDpcbiAgICAgICAgY3VycmVudCArPSAxO1xuXG4gICAgICAgIC8vIGlmIHdlIGFyZSBub3Qgb24gdGhlIHRvcCBvZiBzdGFja1xuICAgICAgICAvLyByZW1vdmUgcmVzdCBhbmQgcHVzaCBuZXdcbiAgICAgICAgaWYgKGN1cnJlbnQgPCBlbnRyaWVzLmxlbmd0aCkgZW50cmllcy5zcGxpY2UoY3VycmVudCk7XG5cbiAgICAgICAgZW50cmllcy5wdXNoKGxvY2F0aW9uKTtcbiAgICAgICAgc2F2ZVN0YXRlKGxvY2F0aW9uLmtleSwgbG9jYXRpb24uc3RhdGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgX0FjdGlvbnMuUkVQTEFDRTpcbiAgICAgICAgZW50cmllc1tjdXJyZW50XSA9IGxvY2F0aW9uO1xuICAgICAgICBzYXZlU3RhdGUobG9jYXRpb24ua2V5LCBsb2NhdGlvbi5zdGF0ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBoaXN0b3J5O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVNZW1vcnlIaXN0b3J5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBkZXByZWNhdGUoZm4sIG1lc3NhZ2UpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3dhcm5pbmcyWydkZWZhdWx0J10oZmFsc2UsICdbaGlzdG9yeV0gJyArIG1lc3NhZ2UpIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBkZXByZWNhdGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIHJ1blRyYW5zaXRpb25Ib29rKGhvb2ssIGxvY2F0aW9uLCBjYWxsYmFjaykge1xuICB2YXIgcmVzdWx0ID0gaG9vayhsb2NhdGlvbiwgY2FsbGJhY2spO1xuXG4gIGlmIChob29rLmxlbmd0aCA8IDIpIHtcbiAgICAvLyBBc3N1bWUgdGhlIGhvb2sgcnVucyBzeW5jaHJvbm91c2x5IGFuZCBhdXRvbWF0aWNhbGx5XG4gICAgLy8gY2FsbCB0aGUgY2FsbGJhY2sgd2l0aCB0aGUgcmV0dXJuIHZhbHVlLlxuICAgIGNhbGxiYWNrKHJlc3VsdCk7XG4gIH0gZWxzZSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKHJlc3VsdCA9PT0gdW5kZWZpbmVkLCAnWW91IHNob3VsZCBub3QgXCJyZXR1cm5cIiBpbiBhIHRyYW5zaXRpb24gaG9vayB3aXRoIGEgY2FsbGJhY2sgYXJndW1lbnQ7IGNhbGwgdGhlIGNhbGxiYWNrIGluc3RlYWQnKSA6IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBydW5UcmFuc2l0aW9uSG9vaztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBfRXhlY3V0aW9uRW52aXJvbm1lbnQgPSByZXF1aXJlKCcuL0V4ZWN1dGlvbkVudmlyb25tZW50Jyk7XG5cbnZhciBfUGF0aFV0aWxzID0gcmVxdWlyZSgnLi9QYXRoVXRpbHMnKTtcblxudmFyIF9ydW5UcmFuc2l0aW9uSG9vayA9IHJlcXVpcmUoJy4vcnVuVHJhbnNpdGlvbkhvb2snKTtcblxudmFyIF9ydW5UcmFuc2l0aW9uSG9vazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ydW5UcmFuc2l0aW9uSG9vayk7XG5cbnZhciBfZGVwcmVjYXRlID0gcmVxdWlyZSgnLi9kZXByZWNhdGUnKTtcblxudmFyIF9kZXByZWNhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVwcmVjYXRlKTtcblxuZnVuY3Rpb24gdXNlQmFzZW5hbWUoY3JlYXRlSGlzdG9yeSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG4gICAgdmFyIGJhc2VuYW1lID0gb3B0aW9ucy5iYXNlbmFtZTtcblxuICAgIHZhciBoaXN0b3J5T3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvcHRpb25zLCBbJ2Jhc2VuYW1lJ10pO1xuXG4gICAgdmFyIGhpc3RvcnkgPSBjcmVhdGVIaXN0b3J5KGhpc3RvcnlPcHRpb25zKTtcblxuICAgIC8vIEF1dG9tYXRpY2FsbHkgdXNlIHRoZSB2YWx1ZSBvZiA8YmFzZSBocmVmPiBpbiBIVE1MXG4gICAgLy8gZG9jdW1lbnRzIGFzIGJhc2VuYW1lIGlmIGl0J3Mgbm90IGV4cGxpY2l0bHkgZ2l2ZW4uXG4gICAgaWYgKGJhc2VuYW1lID09IG51bGwgJiYgX0V4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSkge1xuICAgICAgdmFyIGJhc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYmFzZScpWzBdO1xuXG4gICAgICBpZiAoYmFzZSkgYmFzZW5hbWUgPSBfUGF0aFV0aWxzLmV4dHJhY3RQYXRoKGJhc2UuaHJlZik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkQmFzZW5hbWUobG9jYXRpb24pIHtcbiAgICAgIGlmIChiYXNlbmFtZSAmJiBsb2NhdGlvbi5iYXNlbmFtZSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKGJhc2VuYW1lKSA9PT0gMCkge1xuICAgICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWUuc3Vic3RyaW5nKGJhc2VuYW1lLmxlbmd0aCk7XG4gICAgICAgICAgbG9jYXRpb24uYmFzZW5hbWUgPSBiYXNlbmFtZTtcblxuICAgICAgICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gJycpIGxvY2F0aW9uLnBhdGhuYW1lID0gJy8nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxvY2F0aW9uLmJhc2VuYW1lID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxvY2F0aW9uO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByZXBlbmRCYXNlbmFtZShsb2NhdGlvbikge1xuICAgICAgaWYgKCFiYXNlbmFtZSkgcmV0dXJuIGxvY2F0aW9uO1xuXG4gICAgICBpZiAodHlwZW9mIGxvY2F0aW9uID09PSAnc3RyaW5nJykgbG9jYXRpb24gPSBfUGF0aFV0aWxzLnBhcnNlUGF0aChsb2NhdGlvbik7XG5cbiAgICAgIHZhciBwbmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgdmFyIG5vcm1hbGl6ZWRCYXNlbmFtZSA9IGJhc2VuYW1lLnNsaWNlKC0xKSA9PT0gJy8nID8gYmFzZW5hbWUgOiBiYXNlbmFtZSArICcvJztcbiAgICAgIHZhciBub3JtYWxpemVkUGF0aG5hbWUgPSBwbmFtZS5jaGFyQXQoMCkgPT09ICcvJyA/IHBuYW1lLnNsaWNlKDEpIDogcG5hbWU7XG4gICAgICB2YXIgcGF0aG5hbWUgPSBub3JtYWxpemVkQmFzZW5hbWUgKyBub3JtYWxpemVkUGF0aG5hbWU7XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgbG9jYXRpb24sIHtcbiAgICAgICAgcGF0aG5hbWU6IHBhdGhuYW1lXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBPdmVycmlkZSBhbGwgcmVhZCBtZXRob2RzIHdpdGggYmFzZW5hbWUtYXdhcmUgdmVyc2lvbnMuXG4gICAgZnVuY3Rpb24gbGlzdGVuQmVmb3JlKGhvb2spIHtcbiAgICAgIHJldHVybiBoaXN0b3J5Lmxpc3RlbkJlZm9yZShmdW5jdGlvbiAobG9jYXRpb24sIGNhbGxiYWNrKSB7XG4gICAgICAgIF9ydW5UcmFuc2l0aW9uSG9vazJbJ2RlZmF1bHQnXShob29rLCBhZGRCYXNlbmFtZShsb2NhdGlvbiksIGNhbGxiYWNrKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIGhpc3RvcnkubGlzdGVuKGZ1bmN0aW9uIChsb2NhdGlvbikge1xuICAgICAgICBsaXN0ZW5lcihhZGRCYXNlbmFtZShsb2NhdGlvbikpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gT3ZlcnJpZGUgYWxsIHdyaXRlIG1ldGhvZHMgd2l0aCBiYXNlbmFtZS1hd2FyZSB2ZXJzaW9ucy5cbiAgICBmdW5jdGlvbiBwdXNoKGxvY2F0aW9uKSB7XG4gICAgICBoaXN0b3J5LnB1c2gocHJlcGVuZEJhc2VuYW1lKGxvY2F0aW9uKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwbGFjZShsb2NhdGlvbikge1xuICAgICAgaGlzdG9yeS5yZXBsYWNlKHByZXBlbmRCYXNlbmFtZShsb2NhdGlvbikpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVBhdGgobG9jYXRpb24pIHtcbiAgICAgIHJldHVybiBoaXN0b3J5LmNyZWF0ZVBhdGgocHJlcGVuZEJhc2VuYW1lKGxvY2F0aW9uKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlSHJlZihsb2NhdGlvbikge1xuICAgICAgcmV0dXJuIGhpc3RvcnkuY3JlYXRlSHJlZihwcmVwZW5kQmFzZW5hbWUobG9jYXRpb24pKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVMb2NhdGlvbihsb2NhdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWRkQmFzZW5hbWUoaGlzdG9yeS5jcmVhdGVMb2NhdGlvbi5hcHBseShoaXN0b3J5LCBbcHJlcGVuZEJhc2VuYW1lKGxvY2F0aW9uKV0uY29uY2F0KGFyZ3MpKSk7XG4gICAgfVxuXG4gICAgLy8gZGVwcmVjYXRlZFxuICAgIGZ1bmN0aW9uIHB1c2hTdGF0ZShzdGF0ZSwgcGF0aCkge1xuICAgICAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykgcGF0aCA9IF9QYXRoVXRpbHMucGFyc2VQYXRoKHBhdGgpO1xuXG4gICAgICBwdXNoKF9leHRlbmRzKHsgc3RhdGU6IHN0YXRlIH0sIHBhdGgpKTtcbiAgICB9XG5cbiAgICAvLyBkZXByZWNhdGVkXG4gICAgZnVuY3Rpb24gcmVwbGFjZVN0YXRlKHN0YXRlLCBwYXRoKSB7XG4gICAgICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSBwYXRoID0gX1BhdGhVdGlscy5wYXJzZVBhdGgocGF0aCk7XG5cbiAgICAgIHJlcGxhY2UoX2V4dGVuZHMoeyBzdGF0ZTogc3RhdGUgfSwgcGF0aCkpO1xuICAgIH1cblxuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgaGlzdG9yeSwge1xuICAgICAgbGlzdGVuQmVmb3JlOiBsaXN0ZW5CZWZvcmUsXG4gICAgICBsaXN0ZW46IGxpc3RlbixcbiAgICAgIHB1c2g6IHB1c2gsXG4gICAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgICAgY3JlYXRlUGF0aDogY3JlYXRlUGF0aCxcbiAgICAgIGNyZWF0ZUhyZWY6IGNyZWF0ZUhyZWYsXG4gICAgICBjcmVhdGVMb2NhdGlvbjogY3JlYXRlTG9jYXRpb24sXG5cbiAgICAgIHB1c2hTdGF0ZTogX2RlcHJlY2F0ZTJbJ2RlZmF1bHQnXShwdXNoU3RhdGUsICdwdXNoU3RhdGUgaXMgZGVwcmVjYXRlZDsgdXNlIHB1c2ggaW5zdGVhZCcpLFxuICAgICAgcmVwbGFjZVN0YXRlOiBfZGVwcmVjYXRlMlsnZGVmYXVsdCddKHJlcGxhY2VTdGF0ZSwgJ3JlcGxhY2VTdGF0ZSBpcyBkZXByZWNhdGVkOyB1c2UgcmVwbGFjZSBpbnN0ZWFkJylcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gdXNlQmFzZW5hbWU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9xdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuXG52YXIgX3J1blRyYW5zaXRpb25Ib29rID0gcmVxdWlyZSgnLi9ydW5UcmFuc2l0aW9uSG9vaycpO1xuXG52YXIgX3J1blRyYW5zaXRpb25Ib29rMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3J1blRyYW5zaXRpb25Ib29rKTtcblxudmFyIF9QYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG52YXIgX2RlcHJlY2F0ZSA9IHJlcXVpcmUoJy4vZGVwcmVjYXRlJyk7XG5cbnZhciBfZGVwcmVjYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlcHJlY2F0ZSk7XG5cbnZhciBTRUFSQ0hfQkFTRV9LRVkgPSAnJHNlYXJjaEJhc2UnO1xuXG5mdW5jdGlvbiBkZWZhdWx0U3RyaW5naWZ5UXVlcnkocXVlcnkpIHtcbiAgcmV0dXJuIF9xdWVyeVN0cmluZy5zdHJpbmdpZnkocXVlcnkpLnJlcGxhY2UoLyUyMC9nLCAnKycpO1xufVxuXG52YXIgZGVmYXVsdFBhcnNlUXVlcnlTdHJpbmcgPSBfcXVlcnlTdHJpbmcucGFyc2U7XG5cbmZ1bmN0aW9uIGlzTmVzdGVkT2JqZWN0KG9iamVjdCkge1xuICBmb3IgKHZhciBwIGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkocCkgJiYgdHlwZW9mIG9iamVjdFtwXSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkob2JqZWN0W3BdKSAmJiBvYmplY3RbcF0gIT09IG51bGwpIHJldHVybiB0cnVlO1xuICB9cmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgY3JlYXRlSGlzdG9yeSBmdW5jdGlvbiB0aGF0IG1heSBiZSB1c2VkIHRvIGNyZWF0ZVxuICogaGlzdG9yeSBvYmplY3RzIHRoYXQga25vdyBob3cgdG8gaGFuZGxlIFVSTCBxdWVyaWVzLlxuICovXG5mdW5jdGlvbiB1c2VRdWVyaWVzKGNyZWF0ZUhpc3RvcnkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuICAgIHZhciBzdHJpbmdpZnlRdWVyeSA9IG9wdGlvbnMuc3RyaW5naWZ5UXVlcnk7XG4gICAgdmFyIHBhcnNlUXVlcnlTdHJpbmcgPSBvcHRpb25zLnBhcnNlUXVlcnlTdHJpbmc7XG5cbiAgICB2YXIgaGlzdG9yeU9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob3B0aW9ucywgWydzdHJpbmdpZnlRdWVyeScsICdwYXJzZVF1ZXJ5U3RyaW5nJ10pO1xuXG4gICAgdmFyIGhpc3RvcnkgPSBjcmVhdGVIaXN0b3J5KGhpc3RvcnlPcHRpb25zKTtcblxuICAgIGlmICh0eXBlb2Ygc3RyaW5naWZ5UXVlcnkgIT09ICdmdW5jdGlvbicpIHN0cmluZ2lmeVF1ZXJ5ID0gZGVmYXVsdFN0cmluZ2lmeVF1ZXJ5O1xuXG4gICAgaWYgKHR5cGVvZiBwYXJzZVF1ZXJ5U3RyaW5nICE9PSAnZnVuY3Rpb24nKSBwYXJzZVF1ZXJ5U3RyaW5nID0gZGVmYXVsdFBhcnNlUXVlcnlTdHJpbmc7XG5cbiAgICBmdW5jdGlvbiBhZGRRdWVyeShsb2NhdGlvbikge1xuICAgICAgaWYgKGxvY2F0aW9uLnF1ZXJ5ID09IG51bGwpIHtcbiAgICAgICAgdmFyIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaDtcblxuICAgICAgICBsb2NhdGlvbi5xdWVyeSA9IHBhcnNlUXVlcnlTdHJpbmcoc2VhcmNoLnN1YnN0cmluZygxKSk7XG4gICAgICAgIGxvY2F0aW9uW1NFQVJDSF9CQVNFX0tFWV0gPSB7IHNlYXJjaDogc2VhcmNoLCBzZWFyY2hCYXNlOiAnJyB9O1xuICAgICAgfVxuXG4gICAgICAvLyBUT0RPOiBJbnN0ZWFkIG9mIGFsbCB0aGUgYm9vay1rZWVwaW5nIGhlcmUsIHRoaXMgc2hvdWxkIGp1c3Qgc3RyaXAgdGhlXG4gICAgICAvLyBzdHJpbmdpZmllZCBxdWVyeSBmcm9tIHRoZSBzZWFyY2guXG5cbiAgICAgIHJldHVybiBsb2NhdGlvbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBlbmRRdWVyeShsb2NhdGlvbiwgcXVlcnkpIHtcbiAgICAgIHZhciBfZXh0ZW5kczI7XG5cbiAgICAgIHZhciBzZWFyY2hCYXNlU3BlYyA9IGxvY2F0aW9uW1NFQVJDSF9CQVNFX0tFWV07XG4gICAgICB2YXIgcXVlcnlTdHJpbmcgPSBxdWVyeSA/IHN0cmluZ2lmeVF1ZXJ5KHF1ZXJ5KSA6ICcnO1xuICAgICAgaWYgKCFzZWFyY2hCYXNlU3BlYyAmJiAhcXVlcnlTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uO1xuICAgICAgfVxuXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3dhcm5pbmcyWydkZWZhdWx0J10oc3RyaW5naWZ5UXVlcnkgIT09IGRlZmF1bHRTdHJpbmdpZnlRdWVyeSB8fCAhaXNOZXN0ZWRPYmplY3QocXVlcnkpLCAndXNlUXVlcmllcyBkb2VzIG5vdCBzdHJpbmdpZnkgbmVzdGVkIHF1ZXJ5IG9iamVjdHMgYnkgZGVmYXVsdDsgJyArICd1c2UgYSBjdXN0b20gc3RyaW5naWZ5UXVlcnkgZnVuY3Rpb24nKSA6IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHR5cGVvZiBsb2NhdGlvbiA9PT0gJ3N0cmluZycpIGxvY2F0aW9uID0gX1BhdGhVdGlscy5wYXJzZVBhdGgobG9jYXRpb24pO1xuXG4gICAgICB2YXIgc2VhcmNoQmFzZSA9IHVuZGVmaW5lZDtcbiAgICAgIGlmIChzZWFyY2hCYXNlU3BlYyAmJiBsb2NhdGlvbi5zZWFyY2ggPT09IHNlYXJjaEJhc2VTcGVjLnNlYXJjaCkge1xuICAgICAgICBzZWFyY2hCYXNlID0gc2VhcmNoQmFzZVNwZWMuc2VhcmNoQmFzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlYXJjaEJhc2UgPSBsb2NhdGlvbi5zZWFyY2ggfHwgJyc7XG4gICAgICB9XG5cbiAgICAgIHZhciBzZWFyY2ggPSBzZWFyY2hCYXNlO1xuICAgICAgaWYgKHF1ZXJ5U3RyaW5nKSB7XG4gICAgICAgIHNlYXJjaCArPSAoc2VhcmNoID8gJyYnIDogJz8nKSArIHF1ZXJ5U3RyaW5nO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGxvY2F0aW9uLCAoX2V4dGVuZHMyID0ge1xuICAgICAgICBzZWFyY2g6IHNlYXJjaFxuICAgICAgfSwgX2V4dGVuZHMyW1NFQVJDSF9CQVNFX0tFWV0gPSB7IHNlYXJjaDogc2VhcmNoLCBzZWFyY2hCYXNlOiBzZWFyY2hCYXNlIH0sIF9leHRlbmRzMikpO1xuICAgIH1cblxuICAgIC8vIE92ZXJyaWRlIGFsbCByZWFkIG1ldGhvZHMgd2l0aCBxdWVyeS1hd2FyZSB2ZXJzaW9ucy5cbiAgICBmdW5jdGlvbiBsaXN0ZW5CZWZvcmUoaG9vaykge1xuICAgICAgcmV0dXJuIGhpc3RvcnkubGlzdGVuQmVmb3JlKGZ1bmN0aW9uIChsb2NhdGlvbiwgY2FsbGJhY2spIHtcbiAgICAgICAgX3J1blRyYW5zaXRpb25Ib29rMlsnZGVmYXVsdCddKGhvb2ssIGFkZFF1ZXJ5KGxvY2F0aW9uKSwgY2FsbGJhY2spO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gaGlzdG9yeS5saXN0ZW4oZnVuY3Rpb24gKGxvY2F0aW9uKSB7XG4gICAgICAgIGxpc3RlbmVyKGFkZFF1ZXJ5KGxvY2F0aW9uKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBPdmVycmlkZSBhbGwgd3JpdGUgbWV0aG9kcyB3aXRoIHF1ZXJ5LWF3YXJlIHZlcnNpb25zLlxuICAgIGZ1bmN0aW9uIHB1c2gobG9jYXRpb24pIHtcbiAgICAgIGhpc3RvcnkucHVzaChhcHBlbmRRdWVyeShsb2NhdGlvbiwgbG9jYXRpb24ucXVlcnkpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBsYWNlKGxvY2F0aW9uKSB7XG4gICAgICBoaXN0b3J5LnJlcGxhY2UoYXBwZW5kUXVlcnkobG9jYXRpb24sIGxvY2F0aW9uLnF1ZXJ5KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlUGF0aChsb2NhdGlvbiwgcXVlcnkpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXSghcXVlcnksICd0aGUgcXVlcnkgYXJndW1lbnQgdG8gY3JlYXRlUGF0aCBpcyBkZXByZWNhdGVkOyB1c2UgYSBsb2NhdGlvbiBkZXNjcmlwdG9yIGluc3RlYWQnKSA6IHVuZGVmaW5lZDtcblxuICAgICAgcmV0dXJuIGhpc3RvcnkuY3JlYXRlUGF0aChhcHBlbmRRdWVyeShsb2NhdGlvbiwgcXVlcnkgfHwgbG9jYXRpb24ucXVlcnkpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVIcmVmKGxvY2F0aW9uLCBxdWVyeSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKCFxdWVyeSwgJ3RoZSBxdWVyeSBhcmd1bWVudCB0byBjcmVhdGVIcmVmIGlzIGRlcHJlY2F0ZWQ7IHVzZSBhIGxvY2F0aW9uIGRlc2NyaXB0b3IgaW5zdGVhZCcpIDogdW5kZWZpbmVkO1xuXG4gICAgICByZXR1cm4gaGlzdG9yeS5jcmVhdGVIcmVmKGFwcGVuZFF1ZXJ5KGxvY2F0aW9uLCBxdWVyeSB8fCBsb2NhdGlvbi5xdWVyeSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKGxvY2F0aW9uKSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHZhciBmdWxsTG9jYXRpb24gPSBoaXN0b3J5LmNyZWF0ZUxvY2F0aW9uLmFwcGx5KGhpc3RvcnksIFthcHBlbmRRdWVyeShsb2NhdGlvbiwgbG9jYXRpb24ucXVlcnkpXS5jb25jYXQoYXJncykpO1xuICAgICAgaWYgKGxvY2F0aW9uLnF1ZXJ5KSB7XG4gICAgICAgIGZ1bGxMb2NhdGlvbi5xdWVyeSA9IGxvY2F0aW9uLnF1ZXJ5O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFkZFF1ZXJ5KGZ1bGxMb2NhdGlvbik7XG4gICAgfVxuXG4gICAgLy8gZGVwcmVjYXRlZFxuICAgIGZ1bmN0aW9uIHB1c2hTdGF0ZShzdGF0ZSwgcGF0aCwgcXVlcnkpIHtcbiAgICAgIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHBhdGggPSBfUGF0aFV0aWxzLnBhcnNlUGF0aChwYXRoKTtcblxuICAgICAgcHVzaChfZXh0ZW5kcyh7IHN0YXRlOiBzdGF0ZSB9LCBwYXRoLCB7IHF1ZXJ5OiBxdWVyeSB9KSk7XG4gICAgfVxuXG4gICAgLy8gZGVwcmVjYXRlZFxuICAgIGZ1bmN0aW9uIHJlcGxhY2VTdGF0ZShzdGF0ZSwgcGF0aCwgcXVlcnkpIHtcbiAgICAgIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHBhdGggPSBfUGF0aFV0aWxzLnBhcnNlUGF0aChwYXRoKTtcblxuICAgICAgcmVwbGFjZShfZXh0ZW5kcyh7IHN0YXRlOiBzdGF0ZSB9LCBwYXRoLCB7IHF1ZXJ5OiBxdWVyeSB9KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBoaXN0b3J5LCB7XG4gICAgICBsaXN0ZW5CZWZvcmU6IGxpc3RlbkJlZm9yZSxcbiAgICAgIGxpc3RlbjogbGlzdGVuLFxuICAgICAgcHVzaDogcHVzaCxcbiAgICAgIHJlcGxhY2U6IHJlcGxhY2UsXG4gICAgICBjcmVhdGVQYXRoOiBjcmVhdGVQYXRoLFxuICAgICAgY3JlYXRlSHJlZjogY3JlYXRlSHJlZixcbiAgICAgIGNyZWF0ZUxvY2F0aW9uOiBjcmVhdGVMb2NhdGlvbixcblxuICAgICAgcHVzaFN0YXRlOiBfZGVwcmVjYXRlMlsnZGVmYXVsdCddKHB1c2hTdGF0ZSwgJ3B1c2hTdGF0ZSBpcyBkZXByZWNhdGVkOyB1c2UgcHVzaCBpbnN0ZWFkJyksXG4gICAgICByZXBsYWNlU3RhdGU6IF9kZXByZWNhdGUyWydkZWZhdWx0J10ocmVwbGFjZVN0YXRlLCAncmVwbGFjZVN0YXRlIGlzIGRlcHJlY2F0ZWQ7IHVzZSByZXBsYWNlIGluc3RlYWQnKVxuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSB1c2VRdWVyaWVzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwidmFyIHBTbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi9saWIva2V5cy5qcycpO1xudmFyIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9saWIvaXNfYXJndW1lbnRzLmpzJyk7XG5cbnZhciBkZWVwRXF1YWwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhY3R1YWwsIGV4cGVjdGVkLCBvcHRzKSB7XG4gIGlmICghb3B0cykgb3B0cyA9IHt9O1xuICAvLyA3LjEuIEFsbCBpZGVudGljYWwgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBhcyBkZXRlcm1pbmVkIGJ5ID09PS5cbiAgaWYgKGFjdHVhbCA9PT0gZXhwZWN0ZWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcblxuICB9IGVsc2UgaWYgKGFjdHVhbCBpbnN0YW5jZW9mIERhdGUgJiYgZXhwZWN0ZWQgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIGFjdHVhbC5nZXRUaW1lKCkgPT09IGV4cGVjdGVkLmdldFRpbWUoKTtcblxuICAvLyA3LjMuIE90aGVyIHBhaXJzIHRoYXQgZG8gbm90IGJvdGggcGFzcyB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcsXG4gIC8vIGVxdWl2YWxlbmNlIGlzIGRldGVybWluZWQgYnkgPT0uXG4gIH0gZWxzZSBpZiAoIWFjdHVhbCB8fCAhZXhwZWN0ZWQgfHwgdHlwZW9mIGFjdHVhbCAhPSAnb2JqZWN0JyAmJiB0eXBlb2YgZXhwZWN0ZWQgIT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gb3B0cy5zdHJpY3QgPyBhY3R1YWwgPT09IGV4cGVjdGVkIDogYWN0dWFsID09IGV4cGVjdGVkO1xuXG4gIC8vIDcuNC4gRm9yIGFsbCBvdGhlciBPYmplY3QgcGFpcnMsIGluY2x1ZGluZyBBcnJheSBvYmplY3RzLCBlcXVpdmFsZW5jZSBpc1xuICAvLyBkZXRlcm1pbmVkIGJ5IGhhdmluZyB0aGUgc2FtZSBudW1iZXIgb2Ygb3duZWQgcHJvcGVydGllcyAoYXMgdmVyaWZpZWRcbiAgLy8gd2l0aCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwpLCB0aGUgc2FtZSBzZXQgb2Yga2V5c1xuICAvLyAoYWx0aG91Z2ggbm90IG5lY2Vzc2FyaWx5IHRoZSBzYW1lIG9yZGVyKSwgZXF1aXZhbGVudCB2YWx1ZXMgZm9yIGV2ZXJ5XG4gIC8vIGNvcnJlc3BvbmRpbmcga2V5LCBhbmQgYW4gaWRlbnRpY2FsICdwcm90b3R5cGUnIHByb3BlcnR5LiBOb3RlOiB0aGlzXG4gIC8vIGFjY291bnRzIGZvciBib3RoIG5hbWVkIGFuZCBpbmRleGVkIHByb3BlcnRpZXMgb24gQXJyYXlzLlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBvYmpFcXVpdihhY3R1YWwsIGV4cGVjdGVkLCBvcHRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZE9yTnVsbCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKHgpIHtcbiAgaWYgKCF4IHx8IHR5cGVvZiB4ICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgeC5sZW5ndGggIT09ICdudW1iZXInKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgeC5jb3B5ICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiB4LnNsaWNlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh4Lmxlbmd0aCA+IDAgJiYgdHlwZW9mIHhbMF0gIT09ICdudW1iZXInKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBvYmpFcXVpdihhLCBiLCBvcHRzKSB7XG4gIHZhciBpLCBrZXk7XG4gIGlmIChpc1VuZGVmaW5lZE9yTnVsbChhKSB8fCBpc1VuZGVmaW5lZE9yTnVsbChiKSlcbiAgICByZXR1cm4gZmFsc2U7XG4gIC8vIGFuIGlkZW50aWNhbCAncHJvdG90eXBlJyBwcm9wZXJ0eS5cbiAgaWYgKGEucHJvdG90eXBlICE9PSBiLnByb3RvdHlwZSkgcmV0dXJuIGZhbHNlO1xuICAvL35+fkkndmUgbWFuYWdlZCB0byBicmVhayBPYmplY3Qua2V5cyB0aHJvdWdoIHNjcmV3eSBhcmd1bWVudHMgcGFzc2luZy5cbiAgLy8gICBDb252ZXJ0aW5nIHRvIGFycmF5IHNvbHZlcyB0aGUgcHJvYmxlbS5cbiAgaWYgKGlzQXJndW1lbnRzKGEpKSB7XG4gICAgaWYgKCFpc0FyZ3VtZW50cyhiKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBhID0gcFNsaWNlLmNhbGwoYSk7XG4gICAgYiA9IHBTbGljZS5jYWxsKGIpO1xuICAgIHJldHVybiBkZWVwRXF1YWwoYSwgYiwgb3B0cyk7XG4gIH1cbiAgaWYgKGlzQnVmZmVyKGEpKSB7XG4gICAgaWYgKCFpc0J1ZmZlcihiKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgZm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhW2ldICE9PSBiW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHRyeSB7XG4gICAgdmFyIGthID0gb2JqZWN0S2V5cyhhKSxcbiAgICAgICAga2IgPSBvYmplY3RLZXlzKGIpO1xuICB9IGNhdGNoIChlKSB7Ly9oYXBwZW5zIHdoZW4gb25lIGlzIGEgc3RyaW5nIGxpdGVyYWwgYW5kIHRoZSBvdGhlciBpc24ndFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBoYXZpbmcgdGhlIHNhbWUgbnVtYmVyIG9mIG93bmVkIHByb3BlcnRpZXMgKGtleXMgaW5jb3Jwb3JhdGVzXG4gIC8vIGhhc093blByb3BlcnR5KVxuICBpZiAoa2EubGVuZ3RoICE9IGtiLmxlbmd0aClcbiAgICByZXR1cm4gZmFsc2U7XG4gIC8vdGhlIHNhbWUgc2V0IG9mIGtleXMgKGFsdGhvdWdoIG5vdCBuZWNlc3NhcmlseSB0aGUgc2FtZSBvcmRlciksXG4gIGthLnNvcnQoKTtcbiAga2Iuc29ydCgpO1xuICAvL35+fmNoZWFwIGtleSB0ZXN0XG4gIGZvciAoaSA9IGthLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKGthW2ldICE9IGtiW2ldKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vZXF1aXZhbGVudCB2YWx1ZXMgZm9yIGV2ZXJ5IGNvcnJlc3BvbmRpbmcga2V5LCBhbmRcbiAgLy9+fn5wb3NzaWJseSBleHBlbnNpdmUgZGVlcCB0ZXN0XG4gIGZvciAoaSA9IGthLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAga2V5ID0ga2FbaV07XG4gICAgaWYgKCFkZWVwRXF1YWwoYVtrZXldLCBiW2tleV0sIG9wdHMpKSByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHR5cGVvZiBhID09PSB0eXBlb2YgYjtcbn1cbiIsInZhciBzdXBwb3J0c0FyZ3VtZW50c0NsYXNzID0gKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnRzKVxufSkoKSA9PSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gc3VwcG9ydHNBcmd1bWVudHNDbGFzcyA/IHN1cHBvcnRlZCA6IHVuc3VwcG9ydGVkO1xuXG5leHBvcnRzLnN1cHBvcnRlZCA9IHN1cHBvcnRlZDtcbmZ1bmN0aW9uIHN1cHBvcnRlZChvYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpID09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xufTtcblxuZXhwb3J0cy51bnN1cHBvcnRlZCA9IHVuc3VwcG9ydGVkO1xuZnVuY3Rpb24gdW5zdXBwb3J0ZWQob2JqZWN0KXtcbiAgcmV0dXJuIG9iamVjdCAmJlxuICAgIHR5cGVvZiBvYmplY3QgPT0gJ29iamVjdCcgJiZcbiAgICB0eXBlb2Ygb2JqZWN0Lmxlbmd0aCA9PSAnbnVtYmVyJyAmJlxuICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsICdjYWxsZWUnKSAmJlxuICAgICFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqZWN0LCAnY2FsbGVlJykgfHxcbiAgICBmYWxzZTtcbn07XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgT2JqZWN0LmtleXMgPT09ICdmdW5jdGlvbidcbiAgPyBPYmplY3Qua2V5cyA6IHNoaW07XG5cbmV4cG9ydHMuc2hpbSA9IHNoaW07XG5mdW5jdGlvbiBzaGltIChvYmopIHtcbiAgdmFyIGtleXMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikga2V5cy5wdXNoKGtleSk7XG4gIHJldHVybiBrZXlzO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cmljdFVyaUVuY29kZSA9IHJlcXVpcmUoJ3N0cmljdC11cmktZW5jb2RlJyk7XG5cbmV4cG9ydHMuZXh0cmFjdCA9IGZ1bmN0aW9uIChzdHIpIHtcblx0cmV0dXJuIHN0ci5zcGxpdCgnPycpWzFdIHx8ICcnO1xufTtcblxuZXhwb3J0cy5wYXJzZSA9IGZ1bmN0aW9uIChzdHIpIHtcblx0aWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblx0c3RyID0gc3RyLnRyaW0oKS5yZXBsYWNlKC9eKFxcP3wjfCYpLywgJycpO1xuXG5cdGlmICghc3RyKSB7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblx0cmV0dXJuIHN0ci5zcGxpdCgnJicpLnJlZHVjZShmdW5jdGlvbiAocmV0LCBwYXJhbSkge1xuXHRcdHZhciBwYXJ0cyA9IHBhcmFtLnJlcGxhY2UoL1xcKy9nLCAnICcpLnNwbGl0KCc9Jyk7XG5cdFx0Ly8gRmlyZWZveCAocHJlIDQwKSBkZWNvZGVzIGAlM0RgIHRvIGA9YFxuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvcXVlcnktc3RyaW5nL3B1bGwvMzdcblx0XHR2YXIga2V5ID0gcGFydHMuc2hpZnQoKTtcblx0XHR2YXIgdmFsID0gcGFydHMubGVuZ3RoID4gMCA/IHBhcnRzLmpvaW4oJz0nKSA6IHVuZGVmaW5lZDtcblxuXHRcdGtleSA9IGRlY29kZVVSSUNvbXBvbmVudChrZXkpO1xuXG5cdFx0Ly8gbWlzc2luZyBgPWAgc2hvdWxkIGJlIGBudWxsYDpcblx0XHQvLyBodHRwOi8vdzMub3JnL1RSLzIwMTIvV0QtdXJsLTIwMTIwNTI0LyNjb2xsZWN0LXVybC1wYXJhbWV0ZXJzXG5cdFx0dmFsID0gdmFsID09PSB1bmRlZmluZWQgPyBudWxsIDogZGVjb2RlVVJJQ29tcG9uZW50KHZhbCk7XG5cblx0XHRpZiAoIXJldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRyZXRba2V5XSA9IHZhbDtcblx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmV0W2tleV0pKSB7XG5cdFx0XHRyZXRba2V5XS5wdXNoKHZhbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldFtrZXldID0gW3JldFtrZXldLCB2YWxdO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXQ7XG5cdH0sIHt9KTtcbn07XG5cbmV4cG9ydHMuc3RyaW5naWZ5ID0gZnVuY3Rpb24gKG9iaikge1xuXHRyZXR1cm4gb2JqID8gT2JqZWN0LmtleXMob2JqKS5zb3J0KCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcblx0XHR2YXIgdmFsID0gb2JqW2tleV07XG5cblx0XHRpZiAodmFsID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHRpZiAodmFsID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4ga2V5O1xuXHRcdH1cblxuXHRcdGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcblx0XHRcdHJldHVybiB2YWwuc29ydCgpLm1hcChmdW5jdGlvbiAodmFsMikge1xuXHRcdFx0XHRyZXR1cm4gc3RyaWN0VXJpRW5jb2RlKGtleSkgKyAnPScgKyBzdHJpY3RVcmlFbmNvZGUodmFsMik7XG5cdFx0XHR9KS5qb2luKCcmJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0cmljdFVyaUVuY29kZShrZXkpICsgJz0nICsgc3RyaWN0VXJpRW5jb2RlKHZhbCk7XG5cdH0pLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuXHRcdHJldHVybiB4Lmxlbmd0aCA+IDA7XG5cdH0pLmpvaW4oJyYnKSA6ICcnO1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0cikge1xuXHRyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvWyEnKCkqXS9nLCBmdW5jdGlvbiAoYykge1xuXHRcdHJldHVybiAnJScgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdH0pO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAyID8gbGVuIC0gMiA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDI7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMl0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICtcbiAgICAgICAgJ21lc3NhZ2UgYXJndW1lbnQnXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQubGVuZ3RoIDwgMTAgfHwgKC9eW3NcXFddKiQvKS50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1RoZSB3YXJuaW5nIGZvcm1hdCBzaG91bGQgYmUgYWJsZSB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzICcgK1xuICAgICAgICAnd2FybmluZy4gUGxlYXNlLCB1c2UgYSBtb3JlIGRlc2NyaXB0aXZlIGZvcm1hdCB0aGFuOiAnICsgZm9ybWF0XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgIH0gY2F0Y2goeCkge31cbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcbiIsInZhciBBcHAgPSByZXF1aXJlKCcuLy4uL2FwcC9BcHAuanMnKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0L2FkZG9ucycpO1xudmFyIFRlc3RVdGlscyA9IFJlYWN0LmFkZG9ucy5UZXN0VXRpbHM7XG5cbmRlc2NyaWJlKFwiQXBwXCIsIGZ1bmN0aW9uKCkge1xuXG4gIGl0KFwic2hvdWxkIHJlbmRlciB0ZXh0OiBIZWxsbyB3b3JsZCFcIiwgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFwcCA9IFRlc3RVdGlscy5yZW5kZXJJbnRvRG9jdW1lbnQoUmVhY3QuY3JlYXRlRWxlbWVudChBcHApKTtcbiAgICBleHBlY3QoUmVhY3QuZmluZERPTU5vZGUoYXBwKS50ZXh0Q29udGVudCkudG9FcXVhbCgnSGVsbG8gd29ybGQhJyk7XG4gIH0pO1xuXG59KTtcblxuIl19
