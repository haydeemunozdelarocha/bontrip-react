var React = require('react');
var {browserHistory} = require('react-router');
var CheckUser = require('CheckUser');
var {connect} = require('react-redux');
var actions = require('Actions');


export var Logout = React.createClass({

    getInitialState: function (){
    return {
      user: {},
      buttonOff:true
     }
  },
  componentDidMount: function() {
    this.logout();
  },
    logout: function (){
    var that = this;
    var {dispatch} = that.props;
     var username = that.props.state.login.user;
    CheckUser.logoutUser(username).then(function(res){
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
