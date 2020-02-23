import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import * as configureStore from './redux/configureStore';
import Home from './components/Home';
import AddCities from './components/AddCities';
import './style/app.scss';

const store = configureStore.loadState();

store.subscribe(() => {
  configureStore.saveState(store.getState());
});


ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/newtrip" component={AddCities} />
    </Router>
  </Provider>
), document.getElementById('app'));

export { store };
