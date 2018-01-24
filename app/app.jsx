var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, browserHistory} = require('react-router');
import Trips from 'Trips';
import Home from 'Home';
import Explore from 'Explore';
import Login from 'Login';
import Logout from 'Logout';
import Signup from 'Signup';
import 'Sass';

var Navigation = require('Navigation');
import Planner from 'Planner';
import AddTrip from 'AddTrip';
import NewPlace from 'NewPlace';
var {Provider} = require('react-redux');
var actions = require('Actions');
var configureStore = require('configureStore');
var key=process.env.GOOGLE_KEY;


var store = configureStore.loadState();


store.subscribe(() => {
    console.log(store.getState());
    configureStore.saveState(store.getState());
});

    ReactDOM.render(
      <Provider store={store}><Router history={browserHistory}>
        <Route path='/' component={Home}/>
        <Route path='/trips' component={Trips}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/explore' component={Explore}/>
        <Route path='/planner' component={Planner}/>
        <Route path='/newtrip' component={AddTrip}/>
        <Route path='/newplace' component={NewPlace}/>
        <Route path='/logout' component={Logout}/>
        </Router></Provider>,
      document.getElementById('app')
    );


