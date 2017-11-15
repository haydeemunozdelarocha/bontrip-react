var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, browserHistory} = require('react-router');
var Trips = require('Trips');
var Explore = require('Explore');
var Login = require('Login');
var Navigation = require('Navigation');
var Planner = require('Planner');


    ReactDOM.render(
      <Router history={browserHistory}>
        <Route path='/' component={Trips}/>
        <Route path='/explore' component={Explore}/>
        <Route path='/planner' component={Planner}/>
        </Router>,
      document.getElementById('app')
    );
