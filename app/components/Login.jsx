import React from 'react';
import { browserHistory } from 'react-router';
import CheckUser from '../api/CheckUser';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Header from './Header';

export const Login = React.createClass({
  getInitialState: function() {
    return {
      user: {},
      loginButtonOff: true
    }
  },
  componentDidMount: function() {
    this.checkUser();
  },
  checkUser: function() {
    const that = this;
    const { dispatch } = that.props;
    CheckUser.checkUser().then(function(res) {
        if (!res.data._id) {
          that.setState({user: false});
        } else if (res.data._id) {
          dispatch(actions.login(res.data._id));
          browserHistory.push({pathname: '/trips'});
        }
      },
      function(errorMessage) {
        return console.log(errorMessage);
      })
  },
  login: function() {
    const that = this;
    const { dispatch } = that.props;
    let username = that.refs.username.value;
    let password = that.refs.password.value;
    CheckUser.loginUser(username,password).then(function(res) {
        that.setState({user: true});
        dispatch(actions.login(res.data._id));
        browserHistory.push({pathname: '/trips'});
      },
      function(errorMessage) {
        that.refs.password.value = '';
        that.refs.username.value = '';
        return console.log(errorMessage);
      })
  },
  render: function() {
    return (
      <div className="login-container">
        <Header home={false} loggedIn={true} />
        <div className="login-form-container">
          <form onSubmit={this.login}>
            <input placeholder="username" className="round-input" type="text" ref="username"/>
            <input placeholder="password" className="round-input" type="password" ref="password"/>
            <button className="red-button button" type="button" onClick={() => {this.login()}}>Login</button>
            <a href="/signup">Start planning your trip! Click to register</a>
          </form>
        </div>
      </div>
    );
  }
});

export default connect(null)(Login);
