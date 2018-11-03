import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import * as actions from '../redux/actions';
import CheckUser from '../api/CheckUser';

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      buttonOff:true
    };
    this.logout();
  }

  logout() {
    const _this = this;
    const { dispatch } = _this.props;
    const username = this.props.state.login.user;
    CheckUser.logoutUser(username).then(function() {
      console.log(actions.logout);
      dispatch(actions.logout());
      console.log(username);
      browserHistory.push({pathname: '/'});
    },
    function(errorMessage) {
      return alert(errorMessage);
    });
  }

  render() {
    return null;
  }
}


const mapStateToProps = (state) => ({
  state: state
});

export default connect(mapStateToProps)(Logout);
