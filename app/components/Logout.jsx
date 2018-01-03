var React = require('react');
var {browserHistory} = require('react-router');
var Navigation = require('Navigation');
var CheckUser = require('CheckUser');
import Header from 'Header';
var {RaisedButton} = require('material-ui');
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var {connect} = require('react-redux');
var actions = require('Actions');

const inputStyle ={
  borderRadius:'25px'
};

export var Logout = React.createClass({

    getInitialState: function (){
      console.log('getting initial state')
    return {
      user: {},
      buttonOff:true
     }
  },
  componentDidMount: function() {
    this.logout();
  },
    logout: function (){
      console.log('logging in')
    var that = this;
    var {dispatch} = that.props;
     var username = that.props.state.login.user;
    CheckUser.logoutUser(username).then(function(res){
      console.log(res.data);
     dispatch(actions.logout());
      browserHistory.push({pathname: '/'});

    }, function(errorMessage){
         return alert(errorMessage);
    })
  },
  render: function () {
      return (
        <div></div>
    );

  }
});


const mapStateToProps = (state) => ({
  state: state
});

export default connect(mapStateToProps)(Logout);
