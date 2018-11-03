import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import * as configureStore from './store/configureStore';
import Trips from './components/Trips';
import Home from './components/Home';
import Explore from './components/Explore';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import Planner from './components/Planner';
import AddTrip from './components/AddTrip';
import NewPlace from './components/NewPlace';
import './style/app.scss';

const store = configureStore.loadState();
// export const store = createStore(root);

store.subscribe(() => {
  configureStore.saveState(store.getState());
});


ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/trips" component={Trips} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/explore" component={Explore} />
      <Route path="/planner" component={Planner} />
      <Route path="/newtrip" component={AddTrip} />
      <Route path="/newplace" component={NewPlace} />
      <Route path="/logout" component={Logout} />
    </Router>
  </Provider>
), document.getElementById('app'));

export { store };
